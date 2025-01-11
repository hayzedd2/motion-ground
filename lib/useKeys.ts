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

  | "Alt" | "AltGraph" | "Control" | "Meta" | "Shift"

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

interface useKeysProp {
  keys: Key[];
  callback: (e: KeyboardEvent) => void;
  triggerOnAnyKey?: boolean;
}

interface useKeysProp {
  keys: Key[];
  callback: (e: KeyboardEvent) => void;
}

export const useKeys = ({
  keys,
  callback,
//   modifiers = {},
triggerOnAnyKey,
}: useKeysProp) => {
  // Memoized the keys Set to avoid recreating it on every render
  const keysArray = useMemo(() => Array.from(new Set(keys)), [keys]);

  // Memoized the callback to prevent unnecessary effect triggers
  const memoizedCallback = useCallback(callback, [callback]);

  //to track all pressed keys
  const pressedKeys = useRef<Set<string>>(new Set());

  useEffect(() => {
    // check if all keys are pressed
    const checkKeys = (e: KeyboardEvent) => {
      if (triggerOnAnyKey) {
        // If individualKey is true, only the key that matches the event key should be in the pressed keys
        return keysArray.some((key) => pressedKeys.current.has(key));
      }
      // If individualKey is false, all keys should be pressed
      return (
        keysArray.every((key) => pressedKeys.current.has(key))
      );
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Only process if this key isn't already pressed (prevents repeat events)
      if (!pressedKeys.current.has(e.key)) {
        pressedKeys.current.add(e.key);
        console.log(pressedKeys.current)
        if (checkKeys(e)) {
          memoizedCallback(e);
        }
      }
    };
    

    const handleKeyUp = (e: KeyboardEvent) => {
      pressedKeys.current.delete(e.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      // Clear pressed keys on cleanup to prevent memory leaks
      pressedKeys.current.clear();
    };
  }, [keysArray, memoizedCallback]);
};
