"use client";

import {
  ChevronDown,
  Rocket,
  Code,
  BookOpen,
  GraduationCap,
  Terminal,
  Compass,
  Shield,
  Package,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { PageMapItem } from "nextra";
import { normalizePages } from "nextra/normalize-pages";
import type { FC } from "react";

// Icon mapping based on section titles
const iconMap: Record<string, React.ElementType> = {
  "getting-started": Rocket,
  components: Package,
  api: Code,
  guides: BookOpen,
  tutorials: GraduationCap,
  cli: Terminal,
  reference: Shield,
  overview: Compass,
};

export const Sidebar: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname();
  const { docsDirectories } = normalizePages({
    list: pageMap || [],
    route: pathname,
  });

  // Separate items with children (nested) from single items
  const singleItems = docsDirectories.filter((item) => !("children" in item));
  const groupedItems = docsDirectories.filter((item) => "children" in item);

  return (
    <aside className="bg-gray-900 text-white w-[280px] h-screen p-6 flex flex-col border-r border-gray-700 overflow-y-auto">
      <Link href="/" className="flex items-center gap-3 mb-8 group">
        <span className="text-xl font-bold tracking-tight">Docs</span>
      </Link>
      <nav className="flex-1">
        <ul className="space-y-1">
          {/* Render single items first */}
          {singleItems.map((item: any) => (
            <SidebarItem key={item.route} item={item} />
          ))}

          {/* Render grouped items after single items */}
          {groupedItems.map((item) => (
            <SidebarItem key={item.route} item={item} />
          ))}
        </ul>
        <ul className="flex flex-col gap-3 border-t border-blue-500/20 py-4 px-1">
          <Link
            href={"mailto:hi@idee8.agency"}
            className="flex items-center justify-between hover:bg-gray-800 py-2 px-3 rounded-lg text-gray-500 hover:text-gray-200 cursor-pointer"
          >
            Support
            <span>
              <ArrowRight className="h-5 w-4 -rotate-45" />
            </span>
          </Link>
          <Link
            href={"https://github.com/Idee8"}
            target="_blank"
            className="flex items-center justify-between hover:bg-gray-800 py-2 px-3 rounded-lg text-gray-500 hover:text-gray-200 "
          >
            Follow updates
            <span>
              <ArrowRight className="h-5 w-4 -rotate-45" />
            </span>
          </Link>
          <Link
            href={"https://idee8.agency"}
            target="_blank"
            className="flex items-center justify-between hover:bg-gray-800 py-2 px-3 rounded-lg text-gray-500 hover:text-gray-200 "
          >
            Idee8 Agency
            <span>
              <ArrowRight className="h-5 w-4 -rotate-45" />
            </span>
          </Link>
        </ul>
      </nav>
    </aside>
  );
};

const SidebarItem: FC<{ item: any }> = ({ item }) => {
  const pathname = usePathname();
  const route = item.route || ("href" in item ? (item.href as string) : "");
  const { title } = item;
  const isActive = pathname === route;
  const SectionIcon = iconMap[title.toLowerCase()] || BookOpen;

  return (
    <li>
      {"children" in item ? (
        <details className="group">
          <summary className="cursor-pointer py-2 px-3 rounded-lg flex items-center justify-between hover:bg-gray-800 transition-colors">
            <div className="flex items-center gap-3">
              <SectionIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <span className="text-gray-300 group-hover:text-white font-medium">
                {title}
              </span>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500 transition-transform group-open:rotate-180" />
          </summary>
          <ul className="pl-8 ml-3 border-l-2 border-gray-700 space-y-1 mt-1">
            {item.children.map((child: any) => (
              <SidebarItem key={child.route} item={child} />
            ))}
          </ul>
        </details>
      ) : (
        <Link
          href={route}
          className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-colors ${
            isActive
              ? "bg-blue-600/20 text-blue-400"
              : "text-gray-400 hover:bg-gray-800 hover:text-white"
          }`}
        >
          <span>{title}</span>
        </Link>
      )}
    </li>
  );
};
