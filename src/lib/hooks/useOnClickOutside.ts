import { RefObject, useEffect } from 'react';

export function useOnClickOutside(refs: RefObject<HTMLElement>[], handler: () => void) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (refs.every((ref) => !ref.current?.contains(event.target as Node))) {
        handler();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [refs, handler]);
}
