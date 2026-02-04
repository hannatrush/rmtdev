import { SortMethod } from '../lib/types';

type SortingControlsProps = {
  onClick: (value: SortMethod) => void;
  sort: SortMethod;
};

export default function SortingControls({ onClick, sort }: SortingControlsProps) {
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <button
        onClick={() => onClick('relevant')}
        className={`sorting__button sorting__button--relevant ${sort === 'relevant' ? 'sorting__button--active' : ''}`}>
        Relevant
      </button>

      <button
        onClick={() => onClick('recent')}
        className={`sorting__button sorting__button--recent  ${sort === 'recent' ? 'sorting__button--active' : ''}`}>
        Recent
      </button>
    </section>
  );
}
