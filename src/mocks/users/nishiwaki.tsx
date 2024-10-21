import { Typography } from '@/components';
import { UserDetail } from '@/types';

export const nishiwaki: UserDetail = {
  userId: 'nishiwaki',
  nickName: 'おみみん',
  avatarUrl: '/images/user/nishiwaki.png',
  description: (
    <>
      <Typography>おみみんです！</Typography>
      <Typography>趣味はゲーム、ゲーム実況・アニメ・映画鑑賞です。</Typography>
      <Typography>最近はARGにも興味があります。</Typography>
      <Typography>
        研究は、市立函館博物館の協力の元、鑑賞支援システムの構築に取り組んでいます。
      </Typography>
    </>
  ),
};
