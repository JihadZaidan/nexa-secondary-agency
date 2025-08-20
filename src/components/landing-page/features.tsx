import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Chitato from "../../../public/landing-page/header/chipschapa.png"
import Studio from "../../../public/landing-page/header/shooting.png"
import Bin from "../../../public/landing-page/body/binary.png"

export default function Marketing() {
    return (
        <div className="max-w-full w-full lg:px-20 lg:pt-25 lg:pb-30 px-10 py-14 bg-neutral-900">
            <div className="w-full justify-left items-left flex flex-col gap-25">
                <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-left items-left gap-10">
                    <h3 className="text-neutral-100 text-left leading-[140%] text-5xl font-sans font-medium">
                        Transforming Digital <br />
                        Innovations for <br />
                        Visionary Brands
                    </h3>

                    <p className="lg:mt-[135px] text-neutral-100 text-left leading-[180%] text-lg font-sans font-medium">
                        We are passionate about uncovering the best digital innovations for forward <br />
                        — thinking brands looking to push boundaries and drive significant impact.
                    </p>
                </div>

                <div className="w-full flex flex-col gap-10">
                    <div className="w-full flex flex-col gap-14 border-b-3 border-neutral-500 pb-8">
                        <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-left items-left gap-8">
                            <h3 className="text-neutral-100 font-sans font-medium text-5xl text-left">01/ DIGITAL STRATEGY</h3>
                            <Button className="justify-center lg:w-[15%] w-[25%] gap-[9px] ml-[-50px] border-b-2 border-black">
                                <p className="text-neutral-100 text-xl font-medium">Explore</p>
                                <ArrowRight height={22} width={22} className="mt-[2px] text-neutral-100" />
                            </Button>
                        </div>

                        <div className="w-full flex lg:flex-row flex-col lg:gap-2 gap-5 lg:ml-[-120px] justify-left items-left">
                            <Image
                                src={Chitato}
                                alt="chipi chapa snack"
                                className="lg:scale-[70%] scale-[95%]"
                            />

                            <Image
                                src={Bin}
                                alt="chipi chapa snack"
                                className="lg:scale-[50%] scale-[95%]"
                            />

                            <Image
                                src={Studio}
                                alt="chipi chapa snack"
                                className="lg:scale-[70%] scale-[95%]"
                            />

                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-14 border-b-3 border-neutral-500 pb-8">
                        <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-left items-left gap-8">
                            <h3 className="text-neutral-100 font-sans font-medium text-5xl text-left">02/ BRANDING</h3>
                            <Button className="justify-center lg:w-[15%] w-[25%] gap-[9px] ml-[-50px] border-b-2 border-black">
                                <p className="text-neutral-100 text-xl font-medium">Explore</p>
                                <ArrowRight height={22} width={22} className="mt-[2px] text-neutral-100" />
                            </Button>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-14 border-b-3 border-neutral-500 pb-8">
                        <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-left items-left gap-8">
                            <h3 className="text-neutral-100 font-sans font-medium text-5xl text-left">03/ WEB DEVELOPMENT</h3>
                            <Button className="justify-center lg:w-[15%] w-[25%] gap-[9px] ml-[-50px] border-b-2 border-black">
                                <p className="text-neutral-100 text-xl font-medium">Explore</p>
                                <ArrowRight height={22} width={22} className="mt-[2px] text-neutral-100" />
                            </Button>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-14 border-b-3 border-neutral-500 pb-8">
                        <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-left items-left gap-8">
                            <h3 className="text-neutral-100 font-sans font-medium text-5xl text-left">04/ APP DEVELOPMENT</h3>
                            <Button className="justify-center lg:w-[15%] w-[25%] gap-[9px] ml-[-50px] border-b-2 border-black">
                                <p className="text-neutral-100 text-xl font-medium">Explore</p>
                                <ArrowRight height={22} width={22} className="mt-[2px] text-neutral-100" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}