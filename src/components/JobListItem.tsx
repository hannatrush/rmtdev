import { JobItem } from '../lib/types';
import BookmarkIcon from './BookmarkIcon';

type JobListItemProps = {
  jobItem: JobItem;
  isActive: boolean;
};

export default function JobListItem({ jobItem, isActive }: JobListItemProps) {
  return (
    <li className={`job-item ${isActive ? 'job-item--active' : ''}`}>
      <a href={`#${jobItem.id}`} className="job-item__link">
        <div className="job-item__badge">{jobItem.badgeLetters}</div>

        <div className="job-item__middle">
          <h3 className="third-heading">{jobItem.title}</h3>
          <p className="job-item__company">{jobItem.company}</p>
          <div className="job-item__extras">
            <p className="job-item__extra">
              <i className="fa-solid fa-clock job-item__extra-icon"></i>
              Full-Time
            </p>
            <p className="job-item__extra">
              <i className="fa-solid fa-money-bill job-item__extra-icon"></i>
              $105,000+
            </p>
            <p className="job-item__extra">
              <i className="fa-solid fa-location-dot job-item__extra-icon"></i> Global
            </p>
          </div>
        </div>

        <div className="job-item__right">
          <BookmarkIcon id={jobItem.id} />
          <time className="job-item__time">{jobItem.daysAgo}d</time>
        </div>
      </a>
    </li>
  );
}
