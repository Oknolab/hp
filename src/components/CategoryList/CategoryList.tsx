import { Link } from 'react-router-dom';

import { Typography } from '@/components/Typography';
import { Category } from '@/types';
import { paths } from '@/utils';

type CategoryListProps = {
  categories: Category[];
};

export const CategoryList = ({ categories }: CategoryListProps) => {
  const className = 'flex gap-1 border';

  return (
    <ul className={className}>
      {categories.map((category) => (
        <CategoryListItem key={category.title} category={category} />
      ))}
    </ul>
  );
};

type CategoryListItemProps = {
  category: Category;
};
const CategoryListItem = ({ category }: CategoryListItemProps) => {
  const className = 'p-1';
  const to = paths.article(category.articles[0].articleId);

  return (
    <li className={className}>
      <Link to={to}>
        <Typography>{category.title}</Typography>
      </Link>
    </li>
  );
};
