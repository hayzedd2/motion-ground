import { useCallback, useEffect, useMemo, useRef } from "react";
// This is a more complete list of common keyboard keys
type Key =
  // Navigation
  | "ArrowUp"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "Home"
  | "End"
  | "PageUp"
  | "PageDown"
  | "Alt"
  | "AltGraph"
  | "Control"
  | "Meta"
  | "Shift"

  // Function keys
  | "F1"
  | "F2"
  | "F3"
  | "F4"
  | "F5"
  | "F6"
  | "F7"
  | "F8"
  | "F9"
  | "F10"
  | "F11"
  | "F12"
  // Common actions
  | "Enter"
  | "Escape"
  | "Tab"
  | "Backspace"
  | "Delete"
  | " "
  | "Insert"
  // Letters
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z"
  // Numbers
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  // Symbols
  | "!"
  | "@"
  | "#"
  | "$"
  | "%"
  | "^"
  | "&"
  | "*"
  | "("
  | ")"
  | "-"
  | "_"
  | "+"
  | "="
  | "["
  | "{"
  | "]"
  | "}"
  | "\\"
  | "|"
  | ";"
  | ":"
  | "'"
  | '"'
  | ","
  | "<"
  | "."
  | ">"
  | "/"
  | "?";

export type KeyModifier = "Control" | "Alt" | "Shift" | "Meta";
interface useKeysCommand {
  keys: Key[];
  callback: (e: KeyboardEvent) => void;
  triggerOnAnyKey?: boolean;
  modifiers?: Partial<Record<KeyModifier, boolean>>;
  preventDefault?: boolean;
  enableKeyRepeatOnHold?: boolean;
}

class LowercaseSet extends Set<string> {
  add(value: string) {
    return super.add(value.toLowerCase());
  }
  delete(value: string) {
    return super.delete(value.toLowerCase());
  }
  has(value: string) {
    return super.has(value.toLowerCase());
  }
}

const checkModifiers = (
  pressedKeys: Set<string>,
  modifiers?: Partial<Record<KeyModifier, boolean>>
): boolean => {
  if (!modifiers || Object.keys(modifiers).length === 0) {
    return true;
  }
  return Object.entries(modifiers).every(
    ([modifier, required]) => required === pressedKeys.has(modifier as Key)
  );
};

const checkKeys = (
  pressedKeys: Set<string>,
  keySet: Set<string>,
  triggerOnAnyKey = false
): boolean => {
  if (triggerOnAnyKey) {
    return Array.from(keySet).some((key) => pressedKeys.has(key));
  }
  return Array.from(keySet).every((key) => pressedKeys.has(key));
};
export const useKeys = (...commands: useKeysCommand[]) => {
  if (commands.some((cmd) => cmd.keys.length === 0)) {
    throw new Error("Empty keys array is not allowed");
  }
  const keySets = useMemo(
    () => commands.map((command) => new LowercaseSet(command.keys)),
    [commands]
  );
  const commandCallbacks = useMemo(
    () => commands.map((command) => command.callback),
    [commands]
  );

  const pressedKeys = useRef<Set<string>>(new LowercaseSet());

  const handleKeyDown = (e: KeyboardEvent) => {
    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      const keySet = keySets[i];
      const allowRepeat = command.enableKeyRepeatOnHold ?? false;
      if (command.preventDefault && keySet.has(e.key as Key)) {
        e.preventDefault();
      }
      if (!pressedKeys.current.has(e.key)) {
        // First press - always add the key
        pressedKeys.current.add(e.key);
      } else if (!allowRepeat) {
        return;
      }

      if (!checkModifiers(pressedKeys.current, command.modifiers)) continue;
      if (!checkKeys(pressedKeys.current, keySet, command.triggerOnAnyKey))
        continue;
      commandCallbacks[i](e);
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    pressedKeys.current.delete(e.key);
  };

  const handleBlur = () => {
    pressedKeys.current.clear();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleBlur);
      pressedKeys.current.clear();
    };
  }, [handleKeyDown, handleKeyUp, handleBlur]);
};
