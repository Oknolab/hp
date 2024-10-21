import { Typography } from '@/components';
import { UserDetail } from '@/types';

export const okuda: UserDetail = {
  userId: 'okuda',
  nickName: '拓真',
  avatarUrl: '/images/user/okuda.jpg',
  description: (
    <>
      <Typography>拓真です！</Typography>
      <Typography>ゲームが大好きです。</Typography>
      <Typography>ボードゲームもカードゲームも好きです。</Typography>
      <Typography>あと文化財とクイズゲームを掛け合わせた研究をしてます。</Typography>
    </>
  ),
  twitterId: 'FUN2021_takuma',
};
