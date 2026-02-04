import { TriangleDownIcon } from '@radix-ui/react-icons';
import BookmarksPopover from './BookmarksPopover';
import { useRef, useState } from 'react';
import { useOnClickOutside } from '../lib/hooks/useOnClickOutside';

export default function BookmarksButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useOnClickOutside([buttonRef, popoverRef], handleClick);

  return (
    <section>
      <button ref={buttonRef} onClick={() => setIsOpen((prev) => !prev)} className="bookmarks-btn">
        Bookmarks <TriangleDownIcon />
      </button>

      {isOpen && <BookmarksPopover ref={popoverRef} />}
    </section>
  );
}
