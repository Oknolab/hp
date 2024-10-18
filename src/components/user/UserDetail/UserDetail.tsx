import { DialogTitle, Description } from '@headlessui/react';

import { UserDetail as User } from '@/types';

type UserDetailProps = {
  user: User;
};
export const UserDetail = ({ user }: UserDetailProps) => {
  return (
    <div>
      <img alt="user image" className="w-24 rounded-full" src={user.avatarUrl} />
      <DialogTitle className="text-center">{user.nickName}</DialogTitle>
      <Description>{user.description}</Description>
    </div>
  );
};
