"use client"
import Image from "next/image"
import railey from "../../../public/blog-detail/railey.png"
import detail from "../../../public/blog-detail/detailhead.png"
import { useRef } from "react"
import { useSlideFromLeft, useSlideFromRight } from "@/lib/animations"

export default function DetailUpper() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const foundRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useSlideFromLeft(headRef, 0.3);
    useSlideFromLeft(foundRef, 0.3);
    useSlideFromRight(imageRef, 0.3);

    return (
        <div className="max-w-full w-full px-20 py-30 flex flex-col gap-20">
            <div className="w-full flex flex-col gap-20">
                <h1 ref={headRef} className="font-sans font-medium text-5xl text-black leading-[150%] z-5">
                    Brand Evolution — <br />
                    Adapting to Changing Markets
                </h1>
                <div ref={foundRef} className="lg:w-[50%] flex flex-row gap-4 justify-left items-center">
                    <Image
                        src={railey}
                        alt="founder"
                        className="w-[10%] h-[10%]"
                    />
                    <p className="text-black text-2xl font-sans font-medium">Railey Braid</p>
                </div>
            </div>

            <div ref={imageRef} className="lg:relative">
                <Image 
                  src={detail}
                  alt="photos market"
                  className="lg:absolute lg:z-0 grayscale lg:w-[40%] lg:right-[-10px] lg:top-[-300px]"
                />
            </div>
        </div>
    )
}