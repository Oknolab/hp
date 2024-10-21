import { Typography } from '@/components';
import { UserDetail } from '@/types';

export const osuga: UserDetail = {
  userId: 'osuga',
  nickName: 'まさや',
  avatarUrl: '/images/user/osuga.jpg',
  description: (
    <>
      <Typography>まさやです！</Typography>
      <Typography>趣味は音楽を聴くことと漫画を読むことです！</Typography>
      <Typography>King Gnuが好きです</Typography>
      <Typography>飲食店を推薦する研究をしています</Typography>
    </>
  ),
};
