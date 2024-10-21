import { ArticleLayout, Typography } from '@/components';
import { UserList } from '@/components/user';
import { userDetails } from '@/mocks';

export const Members = () => {
  return (
    <ArticleLayout title="メンバーはどんなひと？">
      <Typography>みんな優しいです。多分。</Typography>
      <Typography>のんびりしてる人が多いです。</Typography>
      <UserList users={userDetails} />
    </ArticleLayout>
  );
};
