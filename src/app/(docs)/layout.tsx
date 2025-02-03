import type { Metadata } from "next";
import { getPageMap } from "nextra/page-map";
import type { FC, ReactNode } from "react";
import { NextraTheme } from "./_components/nextra-theme";

export const metadata: Metadata = {
  title: {
    absolute: "",
    template: "%s - Nextra",
  },
};

const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  const pageMap = await getPageMap("/docs");
  return <NextraTheme pageMap={pageMap}>{children}</NextraTheme>;
};

export default RootLayout;
