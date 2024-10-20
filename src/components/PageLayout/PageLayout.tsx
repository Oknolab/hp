import { ArticleNav } from '@/components';

type PageLayoutProps = {
  children: React.ReactNode;
};
export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex size-full justify-center bg-cream">
      {/* TODO: tailwind.configで設定したい */}
      <div className="flex w-full max-w-[1080px] justify-center gap-4 border p-4">
        <div className="flex grow flex-col gap-4">
          <ArticleNav />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
