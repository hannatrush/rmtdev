import { JobItem } from '../lib/types';
import { useStore } from '../store/store';
import Empty from './Empty';
import JobListItem from './JobListItem';
import Spinner from './Spinner';

type JobListProps = {
  jobItems: JobItem[];
  isLoading: boolean;
  size?: 'small';
};

export function JobList({ jobItems, isLoading, size }: JobListProps) {
  const activeId = useStore().activeId;

  return (
    <ul className="job-list">
      {isLoading && <Spinner />}

      {!isLoading &&
        (jobItems.length ? (
          jobItems.map((jobItem) => (
            <JobListItem key={jobItem.id} jobItem={jobItem} isActive={activeId === jobItem.id} />
          ))
        ) : (
          <Empty size={size} />
        ))}
    </ul>
  );
}

export default JobList;
