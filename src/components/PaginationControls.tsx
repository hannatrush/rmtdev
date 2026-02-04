import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { PageDirection } from '../lib/types';

type PaginationControlsProps = {
  onClick: (direction: PageDirection) => void;
  page: number;
  totalNumberOfPages: number;
};

export default function PaginationControls({
  onClick,
  page,
  totalNumberOfPages,
}: PaginationControlsProps) {
  return (
    <section className="pagination">
      {page > 1 && (
        <button
          onClick={(event) => {
            onClick('previous');
            event.currentTarget.blur();
          }}
          className="pagination__button pagination__button--previous">
          <ArrowLeftIcon />
          Page {page - 1}
        </button>
      )}

      {page < totalNumberOfPages && (
        <button
          onClick={(event) => {
            onClick('next');
            event.currentTarget.blur();
          }}
          className="pagination__button pagination__button--next">
          Page {page + 1} <ArrowRightIcon />
        </button>
      )}
    </section>
  );
}
