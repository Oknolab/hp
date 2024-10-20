import { DialogTitle, Description } from '@headlessui/react';

import { UserDetail as User } from '@/types';

type UserDetailProps = {
  user: User;
};
export const UserDetail = ({ user }: UserDetailProps) => {
  return (
    <div>
      <img alt="user image" className="w-24 rounded-full" src={user.avatarUrl} />
      <div>
        <DialogTitle className="text-center">{user.nickName}</DialogTitle>
        <TwitterButton twitterId={user.twitterId} />
      </div>
      <Description>{user.description}</Description>
    </div>
  );
};

type TwitterButtonProps = {
  twitterId?: string;
};

export const TwitterButton = ({ twitterId }: TwitterButtonProps) => {
  if (!twitterId) {
    return null;
  }

  return (
    <a
      className="block w-24 rounded-md border border-gray-300 p-2 text-center"
      href={`https://x.com/${twitterId}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      Twitter
    </a>
  );
};
