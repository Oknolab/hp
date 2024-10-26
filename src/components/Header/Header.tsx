import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { paths } from '@/utils';

export const Header = () => {
  const className = clsx('fixed left-0 top-0 z-50  w-full bg-white py-2', 'flex justify-center');

  return (
    <header className={className}>
      <div className="w-full max-w-[1080px] px-4">
        <Logo />
      </div>
    </header>
  );
};

const Logo = () => {
  return (
    <Link to={paths.top}>
      <img alt="logo" className="w-32" src="/logo.png" />
    </Link>
  );
};
