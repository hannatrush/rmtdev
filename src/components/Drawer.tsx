import { ReactNode } from 'react';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  position?: 'right' | 'left';
  children: ReactNode;
};

export default function Drawer({ isOpen, onClose, position = 'right', children }: DrawerProps) {
  return (
    <>
      <div className={`drawer-overlay ${isOpen ? 'show' : ''}`} onClick={onClose} />

      <div className={`drawer drawer-${position} ${isOpen ? 'open' : ''}`}>
        <button className="drawer-close" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </>
  );
}
