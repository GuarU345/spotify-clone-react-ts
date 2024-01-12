import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type Props = {
  href: string;
};

export const SideMenuItem = ({ href, children }: PropsWithChildren<Props>) => {
  return (
    <li>
      <Link
        className="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300"
        to={href}
      >
        {children}
      </Link>
    </li>
  );
};
