import { FC } from "react";
import Link from "next/link";

interface NextLinkProps {
  href: string;
  children?: JSX.Element;
  pageName: string;
}

const NextLink: FC<NextLinkProps> = ({ href, children, pageName }) => {
  return (
    <Link href={href}>
      <a href={href}>
        <div className="flex space-x-2 hover:text-black">
          {children}
          <p>{pageName}</p>
        </div>
      </a>
    </Link>
  );
};

export default NextLink;
