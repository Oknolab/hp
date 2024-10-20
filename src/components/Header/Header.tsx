import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { paths } from '@/utils';

export const Header = () => {
  const className = clsx('fixed left-0 top-0 z-50 w-full bg-white p-2');

  return (
    <header className={className}>
      <Logo />
    </header>
  );
};

const Logo = () => {
  const className = clsx('px-2 text-4xl font-bold text-blue-500');

  return (
    <Link className={className} to={paths.top}>
      OkunoLab
    </Link>
  );
};
