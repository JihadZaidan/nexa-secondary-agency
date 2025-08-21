"use client"

import Link from "next/link";
import { navigation } from "@/data/navigation";
import { ArrowRight, ArrowUpIcon } from "lucide-react";
import { footer } from "@/data/footer";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email submitted:", email);
        setEmail(""); // reset setelah submit
    };

    return (
        <div className="max-w-full w-full flex flex-col lg:px-20 pt-18 pb-20 px-10 lg:gap-80 gap-40 bg-neutral-900">
            <div className="w-full flex lg:flex-row flex-col lg:justify-between gap-18">
                {/* Bagian kiri navigasi */}
                <div className="grid lg:grid-flow-col lg:grid-cols-3 lg:gap-8 grid-flow-row grid-row-2 gap-10">
                    <ul className="flex flex-col gap-5 justify-left items-left">
                        {navigation
                            .filter((item) => item.hideInNavbar || item.published)
                            .map((item) => (
                                <li key={item.url} className="nav-item font-medium text-left text-neutral-400 text-2xl">
                                    <Link href={item.url} className="hover:text-neutral-100">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                    <ul className="flex flex-col gap-5 justify-left items-left">
                        {footer
                            .filter((item) => item.hideInNavbar || item.published)
                            .map((item) => (
                                <li key={item.url} className="nav-item font-medium text-left text-neutral-400 text-2xl">
                                    <Link href={item.url} className="hover:text-neutral-100">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                    <div className="w-full flex flex-col gap-4">
                        <ul className="flex flex-row gap-3">
                            <li className="text-neutral-400 font-sans font-medium text-2xl">Fb</li>
                            <li className="text-neutral-400 font-sans font-medium text-2xl">Ig</li>
                            <li className="text-neutral-400 font-sans font-medium text-2xl">Tw</li>
                            <li className="text-neutral-400 font-sans font-medium text-2xl">In</li>
                            <li className="text-neutral-400 font-sans font-medium text-2xl">Be</li>
                        </ul>
                        <ul className="text-neutral-400 font-sans font-medium text-2xl">© 2024 Nexa.</ul>
                        <ul className="text-neutral-400 font-sans font-medium text-2xl">NYC | UK | Dallas</ul>
                    </div>
                </div>

                {/* Bagian Newsletter */}
                <div className="flex flex-col gap-6 justify-left items-left">
                    <p className="text-neutral-400 font-sans font-medium text-2xl">
                        Sign up for our newsletter
                    </p>

                    {/* Form Input Email */}
                    <form
                        onSubmit={handleSubmit}
                        className="w-full flex items-center border-b border-neutral-700 focus-within:border-neutral-400 transition"
                    >
                        <input
                            type="email"
                            placeholder="Your email here"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-1 bg-transparent outline-none text-neutral-200 placeholder-neutral-500 text-lg py-3"
                        />
                        <button type="submit" className="p-2 text-neutral-400 hover:text-white transition">
                            <ArrowRight size={22} />
                        </button>
                    </form>

                    <p className="text-neutral-600 font-sans font-medium text-lg">
                        By signing up to receive emails from Motto, you agree to our <br />
                        Privacy Policy. We treat your info responsibly. <br />
                        Unsubscribe anytime.
                    </p>
                </div>
            </div>

            {/* Bagian bawah */}
            <div className="border-t border-transparent flex lg:flex-row flex-col gap-4 justify-between items-center text-white">
                <p className="text-center md:text-left text-neutral-100 text-xl font-medium">
                    Copyright © 2024 Nexa
                </p>
                <div className="flex items-center cursor-pointer gap-2">
                    <Link href="#" className="hover:text-white text-xl font-medium">
                        Back to top
                    </Link>
                    <ArrowUpIcon size={20} />
                </div>
            </div>
        </div>
    );
}
