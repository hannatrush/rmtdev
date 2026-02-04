import { ReactNode } from 'react';
import BookmarksButton from './BookmarksButton';
import Logo from './Logo';

type HeaderProps = {
  children: ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__top">
        <Logo />
        <BookmarksButton />
      </div>

      {children}
    </header>
  );
}
