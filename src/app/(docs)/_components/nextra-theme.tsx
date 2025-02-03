import type { PageMapItem } from "nextra";
import type { FC, ReactNode } from "react";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";

export const NextraTheme: FC<{
  children: ReactNode;
  pageMap: PageMapItem[];
}> = ({ children, pageMap }) => {
  return (
    <div className="flex h-screen bg-[#212121] text-gray-200">
      <Sidebar pageMap={pageMap} />
      <div className="flex flex-1 flex-col overflow-y-auto">
        <div className="flex h-screen">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
