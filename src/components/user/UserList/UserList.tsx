import { UserAbstract } from '../UserAbstract';

import { UserDetail } from '@/types';

type UserListProps = {
  users: UserDetail[];
};

export const UserList = ({ users }: UserListProps) => {
  return (
    <div className="grid grid-cols-4 space-x-8">
      {users.map((user) => (
        <div className="col-span-1">
          <UserAbstract key={user.userId} user={user} />
        </div>
      ))}
    </div>
  );
};
