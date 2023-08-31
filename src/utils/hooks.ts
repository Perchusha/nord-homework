import React, { useEffect } from 'react';

type KeyCallbackMap = {
  [key: string]: (event: React.KeyboardEvent) => void;
};

export const useKeyboardListener = (
  ref: React.RefObject<
    SVGSVGElement | HTMLButtonElement | HTMLInputElement | HTMLSelectElement | HTMLDivElement
  >,
  keyCallbackMap: KeyCallbackMap
) => {
  useEffect(() => {
    const handleKeyDown = ((event: React.KeyboardEvent) => {
      const callback = keyCallbackMap[event.key];
      if (callback) {
        callback(event);
      }
    }) as unknown as EventListenerOrEventListenerObject;

    const element = ref.current;
    if (element) {
      element.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (element) {
        element.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [ref, keyCallbackMap]);
};
