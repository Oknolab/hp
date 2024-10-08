import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { Typography } from '@/components/Typography';
import { Category } from '@/types';
import { paths } from '@/utils';

type CategoryListProps = {
  categories: Category[];
  activeCategory: Category | null;
  onClickCategory: (categoryPos: number) => void;
};

export const CategoryList = ({
  categories,
  activeCategory,
  onClickCategory,
}: CategoryListProps) => {
  const className = 'flex gap-1';

  return (
    <ul className={className}>
      {categories.map((category, i) => {
        const isActive = activeCategory !== null && activeCategory.title === category.title;
        return (
          <CategoryListItem
            key={category.title}
            category={category}
            isActive={isActive}
            onClick={() => {
              onClickCategory(i);
            }}
          />
        );
      })}
    </ul>
  );
};

type CategoryListItemProps = {
  category: Category;
  isActive: boolean;
  onClick: () => void;
};
const CategoryListItem = ({ category, isActive, onClick }: CategoryListItemProps) => {
  const className = clsx('border p-1', {
    'bg-blue-300': isActive,
  });
  const to = paths.article(category.articles[0].articleId);

  return (
    <li className={className} onClick={onClick}>
      <Link to={to}>
        <Typography>{category.title}</Typography>
      </Link>
    </li>
  );
};
