"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";
import { ArrowRight, ArrowUpIcon } from "lucide-react";
import { footer } from "@/data/footer";
import { useState, useRef } from "react";
import { z } from "zod";

// Skema validasi dengan Zod
const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(1, { message: "Email wajib diisi." })
  .email({ message: "Format email tidak valid." })
  .max(254, { message: "Email terlalu panjang." });

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const validate = (value: string) => {
    const result = emailSchema.safeParse(value);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Email tidak valid.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate(email)) {
      setStatus("error");
      inputRef.current?.focus();
      return;
    }

    setStatus("submitting");
    try {
      console.log("Email submitted:", email);
      setStatus("success");
      setEmail("");
    } catch (_) {
      setStatus("error");
    }
  };

  const handleBlur = () => {
    if (email.length) validate(email);
  };

  return (
    <div className="max-w-full w-full flex flex-col lg:px-20 pt-18 pb-20 px-10 lg:gap-80 gap-40 bg-neutral-900">
      <div className="w-full flex lg:flex-row flex-col lg:justify-between gap-18">
        {/* Bagian kiri navigasi */}
        <div className="grid lg:grid-flow-col lg:grid-cols-3 lg:gap-8 grid-flow-row grid-row-2 gap-10">
          <ul className="flex flex-col gap-5 justify-left items-left">
            {navigation
              .filter((item) => item.hideInNavbar || item.published)
              .map((item, index) => (
                <li
                  key={`${item.url}-${index}`}
                  className="nav-item font-medium text-left text-neutral-400 text-2xl"
                >
                  <Link href={item.url} className="hover:text-neutral-100">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>

          <ul className="flex flex-col gap-5 justify-left items-left">
            {footer
              .filter(
                (item) =>
                  (item.hideInNavbar || item.published) &&
                  ["Contact Us"].includes(item.label) // 🚀 sisakan hanya 1 item
              )
              .map((item, index) => (
                <li
                  key={`${item.url}-${index}`}
                  className="nav-item font-medium text-left text-neutral-400 text-2xl"
                >
                  <Link href={item.url} className="hover:text-neutral-100">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>


          <div className="w-full flex flex-col gap-4">
            <ul className="flex flex-row gap-3">
              {["Fb", "Ig", "Tw", "In", "Be"].map((item, index) => (
                <li key={index} className="text-neutral-400 font-sans font-medium text-2xl">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-neutral-400 font-sans font-medium text-2xl">© 2024 Nexa.</p>
            <p className="text-neutral-400 font-sans font-medium text-xl">NYC | UK | Dallas</p>
          </div>
        </div>

        {/* Bagian Newsletter */}
        <div className="flex flex-col gap-4 justify-left items-left">
          <p className="text-neutral-400 font-sans font-medium text-2xl">
            Sign up for our newsletter
          </p>

          <form
            onSubmit={handleSubmit}
            className={`w-full flex items-center border-b transition ${error
              ? "border-red-500"
              : "border-neutral-700 focus-within:border-neutral-400"
              }`}
            noValidate
          >
            <input
              ref={inputRef}
              type="email"
              placeholder="Your email here"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(null);
              }}
              onBlur={handleBlur}
              className="flex-1 bg-transparent outline-none text-neutral-200 placeholder-neutral-500 text-lg py-3"
              aria-invalid={!!error}
              aria-describedby={error ? "email-error" : undefined}
              inputMode="email"
              autoComplete="email"
            />
            <button
              type="submit"
              className="p-2 text-neutral-400 hover:text-white transition disabled:opacity-60"
              disabled={status === "submitting"}
            >
              <ArrowRight size={22} />
            </button>
          </form>

          {error ? (
            <p id="email-error" className="text-red-400 text-sm mt-1">
              {error}
            </p>
          ) : status === "success" ? (
            <p className="text-emerald-400 text-sm mt-1">
              Terima kasih! Email kamu sudah terdaftar.
            </p>
          ) : null}

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
