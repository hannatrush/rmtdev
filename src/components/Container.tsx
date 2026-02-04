import { ReactNode } from 'react';
import JobItemContent from './JobItemContent';
import Drawer from './Drawer';
import { useStore } from '../store/store';

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  const { activeId, setActiveId } = useStore();

  const handleCloseDrawer = () => {
    setActiveId(null);
    history.replaceState(null, document.title, window.location.pathname + window.location.search);
  };

  return (
    <div className="container">
      {children}

      <Drawer isOpen={!!activeId} onClose={handleCloseDrawer}>
        <JobItemContent />
      </Drawer>
    </div>
  );
}
