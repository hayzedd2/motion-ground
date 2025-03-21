import { useRef, useCallback, useEffect } from 'react';

const useHoldDown = (
  duration: number,
  callback: () => void,
  ref: React.RefObject<HTMLElement>
) => {
  const timerRef = useRef<number | null>(null);
  const isHoldingRef = useRef<boolean>(false);

  // Function to start the timer
  const startHold = useCallback(() => {
    isHoldingRef.current = true;
    
    // Clear any existing timer
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    
    // Set a new timer
    timerRef.current = window.setTimeout(() => {
      if (isHoldingRef.current) {
        callback();
      }
    }, duration);
  }, [callback, duration]);

  // Function to cancel the timer
  const cancelHold = useCallback(() => {
    isHoldingRef.current = false;
    
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);


  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // For mouse events
    element.addEventListener('mousedown', startHold);
    element.addEventListener('mouseup', cancelHold);
    element.addEventListener('mouseleave', cancelHold);
    
    // For touch events (mobile)
    element.addEventListener('touchstart', startHold);
    element.addEventListener('touchend', cancelHold);
    element.addEventListener('touchcancel', cancelHold);
    return () => {
      element.removeEventListener('mousedown', startHold);
      element.removeEventListener('mouseup', cancelHold);
      element.removeEventListener('mouseleave', cancelHold);
      
      element.removeEventListener('touchstart', startHold);
      element.removeEventListener('touchend', cancelHold);
      element.removeEventListener('touchcancel', cancelHold);
      
      // Clear any remaining timer
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [ref, startHold, cancelHold]);

  return {
    isHolding: isHoldingRef.current
  };
};

export default useHoldDown;