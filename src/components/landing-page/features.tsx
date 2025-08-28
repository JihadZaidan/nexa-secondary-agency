import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Chitato from "../../../public/landing-page/header/chipschapa.png"
import Studio from "../../../public/landing-page/header/shooting.png"
import Bin from "../../../public/landing-page/body/binary.png"

export default function Marketing() {
    return (
        <div className="max-w-full w-full lg:px-20 lg:pt-24 lg:pb-28 px-10 py-14 bg-neutral-900">
            <div className="w-full flex flex-col gap-24">
                {/* Intro */}
                <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-start items-start gap-10">
                    <h3 className="text-neutral-100 text-left leading-[140%] lg:text-5xl text-3xl font-sans font-medium">
                        Transforming Digital <br />
                        Innovations for <br />
                        Visionary Brands
                    </h3>

                    <p className="lg:mt-[135px] text-neutral-100 text-left leading-[180%] text-lg font-sans font-medium">
                        We are passionate about uncovering the best digital innovations for forward — <br />
                        thinking brands looking to push boundaries and drive significant impact.
                    </p>
                </div>

                {/* Section 1 */}
                <div className="w-full flex flex-col gap-8 border-b border-neutral-300 lg:pb-5">
                    <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-start items-start gap-3">
                        <h3 className="text-neutral-100 font-sans font-medium lg:text-5xl text-2xl text-left">
                            01/ DIGITAL STRATEGY.
                        </h3>
                        <Button className="ml-[-15px] w-fit justify-start gap-2 px">
                            <p className="text-neutral-100 text-lg font-medium">Explore</p>
                            <ArrowRight height={20} width={20} className="text-neutral-100" />
                        </Button>
                    </div>

                    <div className="w-full flex lg:flex-row flex-col lg:gap-8 gap-6 justify-start items-start">
                        <Image
                            src={Chitato}
                            alt="snack packaging design"
                            className="w-full lg:w-1/3"
                        />
                        <Image
                            src={Bin}
                            alt="binary data illustration"
                            className="w-full lg:w-1/3"
                        />
                        <Image
                            src={Studio}
                            alt="studio photography"
                            className="w-full lg:w-1/3"
                        />
                    </div>
                </div>

                {/* Section 2 */}
                <div className="w-full flex flex-col gap-5 border-b border-neutral-300 lg:pb-12 pb-4">
                    <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-start items-start gap-3">
                        <h3 className="text-neutral-100 font-sans font-medium lg:text-5xl text-2xl text-left">
                            02/ BRANDING.
                        </h3>
                        <Button className="ml-[-15px] w-fit justify-start gap-2 px">
                            <p className="text-neutral-100 text-lg font-medium">Learn More</p>
                            <ArrowRight height={20} width={20} className="text-neutral-100" />
                        </Button>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="w-full flex flex-col gap-5 border-b border-neutral-300 lg:pb-12 pb-4">
                    <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-start items-start gap-3">
                        <h3 className="text-neutral-100 font-sans font-medium lg:text-5xl text-2xl text-left">
                            03/ WEB DEVELOPMENT.
                        </h3>
                        <Button className="ml-[-15px] w-fit justify-start gap-2 px">
                            <p className="text-neutral-100 text-lg font-medium">Learn More</p>
                            <ArrowRight height={20} width={20} className="text-neutral-100" />
                        </Button>
                    </div>
                </div>

                {/* Section 4 */}
                <div className="w-full flex flex-col gap-5 border-b border-neutral-300 lg:pb-12 pb-4">
                    <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-start items-start gap-3">
                        <h3 className="text-neutral-100 font-sans font-medium lg:text-5xl text-2xl text-left">
                            04/ APP DEVELOPMENT.
                        </h3>
                        <Button className="ml-[-15px] w-fit justify-start gap-2 px">
                            <p className="text-neutral-100 text-lg font-medium">Learn More</p>
                            <ArrowRight height={20} width={20} className="text-neutral-100" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
