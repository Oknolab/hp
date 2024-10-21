import { Typography } from '@/components';
import { UserDetail } from '@/types';

export const kimura: UserDetail = {
  userId: 'kimura',
  nickName: '星凱',
  avatarUrl: '/images/user/kimura.png',
  description: (
    <>
      <Typography>星凱です！</Typography>
      <Typography>趣味は映画鑑賞です。</Typography>
      <Typography>邦画をよく見ます。</Typography>
      <Typography>あとデジタルアーカイブを使った画像検索の研究をしてます。</Typography>
    </>
  ),
  twitterId: undefined,
};
