import { SideBar } from '@/components';
import { NextButton, PreviousButton } from '@/components';

type PageLayoutProps = {
  children: React.ReactNode;
};
export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex w-full justify-center">
      {/* TODO: tailwind.configで設定したい */}
      <div className="flex w-full max-w-[1080px] justify-center gap-4 border p-4">
        <SideBar />
        <div className="flex grow flex-col gap-4">
          <div>{children}</div>
          <div className="flex justify-between">
            <PreviousButton />
            <NextButton />
          </div>
        </div>
      </div>
    </div>
  );
};
