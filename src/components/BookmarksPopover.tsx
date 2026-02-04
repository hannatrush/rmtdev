import { forwardRef } from 'react';

import JobList from './JobList';
import { createPortal } from 'react-dom';
import { useSelectedJobItems } from '../lib/hooks/jobItems';
import { JobItem } from '../lib/types';

const BookmarksPopover = forwardRef<HTMLDivElement>(function (_, ref) {
  const { bookmarkedJobItems, isLoading } = useSelectedJobItems();

  return createPortal(
    <div ref={ref} className="bookmarks-popover">
      <JobList
        jobItems={(bookmarkedJobItems as JobItem[]) || []}
        isLoading={isLoading}
        size="small"
      />
    </div>,
    document.body,
  );
});

export default BookmarksPopover;
