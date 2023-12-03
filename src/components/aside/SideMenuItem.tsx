import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export const SideMenuItem = ({ href, children }: Props) => {
  return (
    <li>
      <a
        className="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300"
        href={href}
      >
        {children}
      </a>
    </li>
  );
};
