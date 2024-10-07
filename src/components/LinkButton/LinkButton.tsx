import clsx from 'clsx';

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
};

export const LinkButton = ({ href, children }: LinkButtonProps) => {
  const className = clsx(
    'rounded-md border border-gray-300 px-2 py-1',
    'transition-colors duration-200 hover:bg-gray-300 hover:text-white'
  );

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};
