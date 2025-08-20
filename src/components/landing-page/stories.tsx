import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Canva from "../../../public/landing-page/story/storycanvas.png"
import UIUX from "../../../public/landing-page/story/uiux.png"
import Brand from "../../../public/landing-page/story/improve.png"


export default function StoryWork() {
    return (
        <div className="max-w-full w-full lg:px-20 lg:pt-20 lg:pb-5 px-5 py-14 bg-neutral-200">
            <div className="w-full lg:gap-26 gap-12 flex flex-col">
                <div className="w-full flex lg:flex-row flex-col lg:justify-between lg:justify-left">
                    <h3 className="font-sans font-medium text-neutral-800 lg:text-5xl text-4xl leading-[150%]">
                        Latest insights stories <br />
                        and news from Nexa.
                    </h3>

                    <Button className="justify-center gap-[9px] lg:mt-22 mt-10 lg:ml-0 ml-[-630px]">
                        <p className="text-neutral-800 text-[22px] font-medium">Explore the Insight</p>
                        <ArrowRight height={30} width={30} className="mt-[3px] text-neutral-800" />
                    </Button>
                </div>

                <div className="w-full flex flex-col lg:gap-18 gap-12">
                    <div className="w-full flex lg:flex-row flex-col lg:gap-20 gap-12">
                        <div className="w-full">
                            <Image
                                src={Canva}
                                alt="business model canvas"
                                className="lg:scale-[95%] grayscale"
                            />
                        </div>
                        <div className="w-full lg:pt-30">
                            <Image
                                src={UIUX}
                                alt="business model canvas"
                                className="lg:scale-[95%] grayscale"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:pl-10">
                        <Image
                            src={Brand}
                            alt="business model canvas"
                            className="lg:scale-[55%] lg:mt-[-200px] lg:ml-[-100px] grayscale"
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}
