import Link from "next/link";
import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="p-4 text-center text-neutral-300">
      Crafted by <Link href={"https://idee8.agency"}>Idee8</Link> &copy;{" "}
      {new Date().getFullYear()}
    </footer>
  );
};
