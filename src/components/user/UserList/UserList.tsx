import clsx from 'clsx';

import { UserAbstract } from '../UserAbstract';

import { UserDetail } from '@/types';

type UserListProps = {
  users: UserDetail[];
};

export const UserList = ({ users }: UserListProps) => {
  const className = clsx('grid gap-8', 'sx: grid-cols-2 md:grid-cols-4');

  return (
    <div className={className}>
      {users.map((user) => (
        <div key={user.userId} className="col-span-1 flex h-64 overflow-hidden border">
          <UserAbstract user={user} />
        </div>
      ))}
    </div>
  );
};
