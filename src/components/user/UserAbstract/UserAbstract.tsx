import clsx from 'clsx';

import { useUserAbstract } from './useUserAbstract';

import { Typography } from '@/components/Typography';
import { UserDetail as User } from '@/types';

type UserAbstractProps = {
  user: User;
};
export const UserAbstract = ({ user }: UserAbstractProps) => {
  const { onClick } = useUserAbstract(user);

  const className = clsx(
    'w-full rounded-md p-3',
    'flex flex-col items-center gap-2',
    'border-gray-300 bg-white shadow-lg',
    'cursor-pointer transition-colors duration-200 hover:bg-gray-100 hover:shadow-xl',
    'text-left'
  );

  return (
    <button className={className} onClick={onClick}>
      <img alt="user image" className="w-24 rounded-full" src={user.avatarUrl} />
      <Typography>{user.nickName}</Typography>
      <div className="w-full overflow-hidden">
        <Typography>{user.description}</Typography>
      </div>
    </button>
  );
};
