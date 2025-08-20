import Link from "next/link";
import { navigation } from "@/data/navigation";
import { ArrowUpIcon } from "lucide-react";
import { useRef } from "react";
import { useSlideFromLeft, useZoom } from "@/library/animations";

export default function Footer() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const bottom = useRef<HTMLDivElement>(null);

    useSlideFromLeft(headRef, 0.5);
    useZoom(bottom, 0.5);

    return (
        <div className="max-w-full w-full lg:px-20 lg:py-20 px-10 pt-14 pb-3 flex flex-col gap-30 bg-black">
            <div className="w-full gap-18 flex lg:flex-row flex-col px-5">
                <h1 ref={headRef} className="lg:w-[70%] leading-[130%] lg:text-7xl text-5xl text-white lg:text-left  font-sans font-normal">
                    Let&apos;s Make Something Cool
                </h1>
                <ul className="w-full flex flex-col gap-7 justify-right items-right">
                    {navigation
                        .filter((item) => item.hideInNavbar || item.published)
                        .map((item) => (
                            <li key={item.url} className="nav-item font-medium lg:text-right lg:ml-0 ml-2 text-left text-white text-2xl">
                                <Link href={item.url} className="hover:text-white">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
            <div ref={bottom} className="border-t border-transparent flex lg:flex-row flex-col gap-4 justify-between items-center text-white">
                <p className="text-center md:text-left">Copyright © 2024 Nexa</p>
                <div className="flex items-center cursor-pointer gap-2">
                    <Link href="#" className="hover:text-white">
                        Back to top
                    </Link>
                    <ArrowUpIcon size={16} />
                </div>
            </div>
        </div>
    )
}