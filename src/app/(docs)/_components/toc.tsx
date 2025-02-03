"use client";

import { usePathname } from "next/navigation";
import type { Heading } from "nextra";
import { useEffect, useState, type FC } from "react";

export const TOC: FC<{ toc: Heading[] }> = ({ toc }) => {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [toc, pathname]);

  return (
    <div className="sticky top-20 w-full md:w-64 px-4 md:pl-6 md:pt-4">
      <div className="text-sm space-y-2">
        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 md:mb-4">
          On this page
        </h3>
        <ul className="space-y-1 md:space-y-2">
          {toc.map((heading) => {
            const level = heading.depth;
            const isActive = activeId === heading.id;

            return (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  className={`flex items-center transition-colors
                    ${
                      isActive
                        ? "text-blue-400 font-medium"
                        : "text-gray-400 hover:text-gray-200"
                    }
                    ${level === 3 ? "pl-4" : level > 3 ? "pl-6" : "pl-0"}
                    text-sm md:text-base`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(heading.id)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  <span className="mr-2 opacity-50 hidden md:inline">#</span>
                  <span className="truncate">{heading.value}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
