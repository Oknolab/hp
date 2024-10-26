import { ArticleNav, Header } from '@/components';

type PageLayoutProps = {
  children: React.ReactNode;
};
export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex size-full justify-center bg-white pt-16">
      <Header />
      {/* TODO: tailwind.configで設定したい */}
      <div className="grid max-w-[1080px] grid-cols-4 grid-rows-7 justify-center gap-4 p-4">
        <div className="col-span-4 row-span-1 sm:col-span-1">
          このサイトは現在未完成です。
          <br />
          奥野研究室について詳しく知りたい方は、
          <br />
          <a
            className="text-blue-500 hover:opacity-60"
            href="https://hope.fun.ac.jp/course/view.php?id=300"
            rel="noopener noreferrer"
            target="_blank"
          >
            HOPE
          </a>
          をご覧ください。
        </div>

        <div className="col-span-4 row-span-6 flex size-full flex-col gap-4 sm:col-span-3 sm:row-span-7">
          <ArticleNav />
          <div className="grow overflow-scroll">{children}</div>
        </div>
      </div>
    </div>
  );
};
