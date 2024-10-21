import { Typography } from '@/components';
import { UserDetail } from '@/types';
export const tanaka: UserDetail = {
  userId: 'tanaka',
  nickName: 'たなか',
  avatarUrl: '/images/user/tanaka.jpg',
  description: (
    <>
      <Typography>奥野研唯一のM2田中です!</Typography>
      <Typography>趣味は読書，ゲームです</Typography>
      <Typography>最近はTeam Fight Tacticsをやってるよ</Typography>
      <Typography>研究はデジタルアーカイブにおける資料探索支援をしています</Typography>
    </>
  ),
};
