import { ArticleNav, Header } from '@/components';

type PageLayoutProps = {
  children: React.ReactNode;
};
export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex size-full justify-center bg-white pt-16">
      <Header />
      {/* TODO: tailwind.configで設定したい */}
      <div className="flex size-full max-w-[1080px] justify-center gap-4 overflow-hidden border border-red-100 p-4">
        <div className="flex size-full grow flex-col gap-4">
          <ArticleNav />
          <div className="grow overflow-scroll">{children}</div>
        </div>
      </div>
    </div>
  );
};
