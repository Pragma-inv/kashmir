"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/helpers/cn";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { SidebarWithBurgerMenu } from "./drawer";

const Navbar = () => {
    const urlPathname = usePathname();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        // className="fixed top-0 z-10 w-full bg-[#3988D1] p-3 sm:px-5 lg:px-7 xl:px-16 2xl:px-20 shadow-md"
        <main
            className={cn(
                scrollY >= 100 || urlPathname !== "/"
                    ? "isolate bg-white/50 text-black shadow-sm backdrop-blur-sm"
                    : "bg-transparent text-white",
                "transform-gpu transition-all delay-100",
                "fixed top-0 z-50 w-full py-5 px-2 sm:px-10 xl:px-16 2xl:px-28 shadow-md "
            )}
        >
            <nav className="flex justify-between items-center ">
                <Link
                    className="flex items-center justify-center -space-x-2 sm:-space-x-1"
                    href={"/"}
                >
                    <Image
                        src={"/images/logo.png"}
                        width={120}
                        height={120}
                        alt=""
                        className="w-16 sm:w-[66px] lg:w-[70px] 2xl:w-[150px]"
                    />
                </Link>
                <div className="md:hidden">
                    <SidebarWithBurgerMenu />
                </div>
                <div className="hidden md:flex">
                    <ul className="flex items-center gap-[4vw]">
                        <li>
                            <Link
                                className="text-base lg:text-lg 2xl:text-xl duration-500 ease-in-out hover:text-lg lg:hover:text-xl 2xl:hover:text-2xl transition-all"
                                href={"/main/about"}
                            >
                                Package
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-base lg:text-lg 2xl:text-xl duration-500 ease-in-out hover:text-lg lg:hover:text-xl 2xl:hover:text-2xl transition-all"
                                href={"/main/portofolio"}
                            >
                                Website Theme
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-base lg:text-lg 2xl:text-xl duration-500 ease-in-out hover:text-lg lg:hover:text-xl 2xl:hover:text-2xl transition-all"
                                href={"/assets/price.pdf"}
                                target="_blank"
                            >
                                Portofolio
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="items-center hidden md:flex">
                    <Link
                        className=" text-white text-base xl:text-lg 2xl:text-xl px-3 py-2 2xl:px-5 font-semibold rounded-full flex items-center justify-center gap-x-2 hover:bg-green-700 duration-500 ease-in-out hover:text-lg xl:hover:text-xl 2xl:hover:text-2xl transition-all"
                        href={"#"}
                    >
                        Login
                    </Link>
                    <Link
                        className="bg-[#F8F2F2] text-black text-base xl:text-lg 2xl:text-xl px-3 py-2 2xl:px-5 font-semibold rounded-full flex items-center justify-center gap-x-2 duration-500 ease-in-out hover:text-lg xl:hover:text-xl 2xl:hover:text-2xl transition-all"
                        href={"#"}
                    >
                        Daftar
                    </Link>
                </div>
            </nav>
        </main>
    );
};

export default Navbar;
