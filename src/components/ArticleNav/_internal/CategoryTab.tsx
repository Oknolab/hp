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
  const className = clsx('border', { 'bg-blue-200': isActive });
  console.log(category.articles);

  const to = paths.article(category.articles[0].articleId);

  return (
    <Tab className={className}>
      <Link to={to}>{category.title}</Link>
    </Tab>
  );
};
