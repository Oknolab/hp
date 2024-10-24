import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { Typography } from '@/components';
import { paths } from '@/utils';

export const Header = () => {
  const className = clsx('fixed left-0 top-0 z-50 flex w-full justify-between bg-white p-2');

  return (
    <header className={className}>
      <Logo />
      <div>
        <Typography variant="h3">面談に向けてHP作成中！</Typography>
        <Typography variant="h3">応援してくださいorz</Typography>
      </div>
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
