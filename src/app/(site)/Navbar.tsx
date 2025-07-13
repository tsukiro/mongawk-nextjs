"use client";

import Link from "next/link";
import {X, Swords} from "lucide-react";
import {useState} from "react";

export default function Navbar({user}: { user: any }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const menuItemClass: { web: string, mobile: string } = {
        web: "text-base text-white/90 transition hover:text-white",
        mobile: "block rounded-md px-3 py-2 text-base font-medium text-white/90 hover:bg-[#3C3C3C] hover:text-white"
    }


    const getMenuItems = (isLoggedIn: boolean) => {

        const items = [
            {
                key: "web_pricing",
                name: "Pricing",
                href: "#pricing",
                public: true,
            },
            {
                key: "web_faq",
                name: "FAQ",
                href: "#faq",
                public: true,
            },
            {
                key: "web_wall",
                name: "Wall of love",
                href: "#wall-of-love",
                public: true,
            },
            {
                key: "web_login",
                name: "Login",
                href: "/auth/login",
                public: true,
            },
            {
                key: "priv_profile",
                name: "Dashboard",
                href: "/dashboard",
                public: false,
            },
            {
                key: "priv_signout",
                name: "Salir",
                href: "/auth/signout",
                public: false,
            }
        ]

        return items.filter(item => item.public === !isLoggedIn);
    }

    return (
        <nav className="fixed top-0 z-50 w-full bg-[#212121]">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-white">Mong</span>
                        <Swords
                            className="h-10 w-10"
                            fill="white"
                            stroke="black"
                            strokeWidth={1.4}
                        />
                        <span className="text-lg font-semibold text-white">Awk</span>
                    </Link>
                </div>

                <div className="hidden items-center gap-8 md:flex">
                    {getMenuItems(user).map((item) => (
                        <Link
                            key={item.key}
                            href={item.href}
                            className={menuItemClass.web}
                        >
                            {item.name}
                        </Link>))}
                </div>


                <div className="flex md:hidden">
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white"
                    >
                        <span className="sr-only">Toggle menu</span>
                        {isMenuOpen ? (
                            <X className="h-6 w-6"/>
                        ) : (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {getMenuItems(user).map((item) => (
                            <Link
                                key={item.key}
                                href={item.href}
                                className={menuItemClass.mobile}
                                onClick={() => toggleMenu()}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
