import { DialogTitle, Description } from '@headlessui/react';
import clsx from 'clsx';

import { Typography } from '@/components/Typography';
import { UserDetail as User } from '@/types';

type UserDetailProps = {
  user: User;
};
export const UserDetail = ({ user }: UserDetailProps) => {
  const className = clsx('flex flex-col items-center gap-4');

  return (
    <div className={className}>
      <div className="flex flex-col items-center gap-2">
        <img alt="user image" className="w-32 rounded-full" src={user.avatarUrl} />
        <DialogTitle className="flex justify-center">
          <Typography variant="h3">{user.nickName}</Typography>
        </DialogTitle>
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
      className="block w-24 rounded-md border border-gray-300 bg-twitter p-2 text-center text-white hover:scale-105"
      href={`https://x.com/${twitterId}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      Twitter
    </a>
  );
};
