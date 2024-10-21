import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { Category } from '@/types';
import { paths } from '@/utils';

type CategoryTabProps = {
  isActive: boolean;
  category: Category;
};

export const CategoryTab = ({ category, isActive }: CategoryTabProps) => {
  const className = clsx(
    'border shadow-sm',
    'w-32 px-4 py-2', //シェイプ
    'hover:bg-yellow-100 focus:outline-none', //ホバー時の背景色
    { 'bg-yellow-200': isActive }
  );

  const to = paths.article(category.articles[0].articleId);

  return (
    <Tab className={className}>
      <Link className="size-full cursor-pointer" to={to}>
        {category.title}
      </Link>
    </Tab>
  );
};
