import { UserDetail } from '../UserDetail';

import { useDialog } from '@/contexts/dialog';
import { UserDetail as User } from '@/types';

export function useUserAbstract(user: User): UserAbstract {
  const { openDialog } = useDialog();

  const onClick = () => {
    openDialog(<UserDetail user={user} />);
  };

  return {
    onClick,
  };
}

interface UserAbstract {
  onClick: () => void;
}
