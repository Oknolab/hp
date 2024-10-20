import { ArticleLayout, Typography } from '@/components';
import { UserList } from '@/components/user';
import { userDetails } from '@/mocks';

export const Members = () => {
  return (
    <ArticleLayout title="メンバーはどんなひと？">
      <Typography>All for one, one for all.</Typography>
      <UserList users={userDetails} />
    </ArticleLayout>
  );
};
