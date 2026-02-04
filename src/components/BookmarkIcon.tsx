import { BookmarkFilledIcon } from '@radix-ui/react-icons';

import { useStore } from '../store/store';

type BookmarkIconProps = {
  id: string;
};

export default function BookmarkIcon({ id }: BookmarkIconProps) {
  const { bookmarkedIds, toggleBookmark } = useStore();

  return (
    <button
      onClick={(event) => {
        toggleBookmark(id);
        event.preventDefault();
        event.stopPropagation();
      }}
      className="bookmark-btn">
      <BookmarkFilledIcon className={bookmarkedIds.includes(id) ? 'filled' : ''} />
    </button>
  );
}
