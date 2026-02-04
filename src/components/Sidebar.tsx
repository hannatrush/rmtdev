import PaginationControls from './PaginationControls';
import ResultsCount from './ResultsCount';
import SortingControls from './SortingControls';
import JobList from './JobList';
import { PageDirection, SortMethod } from '../lib/types';
import { useMemo, useState } from 'react';
import { useJobItemsQuery } from '../lib/hooks/jobItems';
import { PAGE_SIZE } from '../lib/const';

type SidebarProps = {
  searchText: string;
};

export default function Sidebar({ searchText }: SidebarProps) {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SortMethod>('relevant');

  const { jobItems, isLoading } = useJobItemsQuery(searchText);

  const jobItemsSorted = useMemo(
    () =>
      [...(jobItems || [])]
        .sort((a, b) => {
          if (sort === 'relevant') {
            return b.relevanceScore - a.relevanceScore;
          } else {
            return a.daysAgo - b.daysAgo;
          }
        })
        .slice(page * PAGE_SIZE - PAGE_SIZE, page * PAGE_SIZE),
    [jobItems, page, sort],
  );

  const handleChangePage = (direction: PageDirection) => {
    if (direction === 'next') {
      setPage((prev) => prev + 1);
    } else if (direction === 'previous') {
      setPage((prev) => prev - 1);
    }
  };

  const handleChangeSort = (newSort: SortMethod) => {
    setPage(1);
    setSort(newSort);
  };

  const totalNumberOfResults = jobItems?.length || 0;
  const totalNumberOfPages = totalNumberOfResults / PAGE_SIZE;

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount totalCount={totalNumberOfResults} />
        <SortingControls onClick={handleChangeSort} sort={sort} />
      </div>

      <JobList jobItems={jobItemsSorted || []} isLoading={isLoading} />

      <PaginationControls
        onClick={handleChangePage}
        page={page}
        totalNumberOfPages={totalNumberOfPages}
      />
    </div>
  );
}
