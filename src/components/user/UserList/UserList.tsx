import { UserAbstract } from '../UserAbstract';

import { UserDetail } from '@/types';

type UserListProps = {
  users: UserDetail[];
};

export const UserList = ({ users }: UserListProps) => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {users.map((user) => (
        <div className="col-span-1 flex h-64 overflow-hidden border">
          <UserAbstract key={user.userId} user={user} />
        </div>
      ))}
    </div>
  );
};
