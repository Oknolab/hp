import clsx from 'clsx';

import { Typography } from '@/components/Typography';
import { UserDetail as User } from '@/types';

type UserAbstractProps = {
  user: User;
};
export const UserAbstract = ({ user }: UserAbstractProps) => {
  const className = clsx('w-full rounded-md border p-4', 'flex flex-col items-center gap-2');

  return (
    <div className={className}>
      <img alt="user image" className="w-24 rounded-full" src={user.avatarUrl} />
      <Typography>{user.nickName}</Typography>
      <div className="w-full overflow-hidden">
        <Typography>{user.description}</Typography>
      </div>
    </div>
  );
};
