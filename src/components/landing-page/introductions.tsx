import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Chitato from "../../../public/landing-page/header/chipschapa.png"
import Studio from "../../../public/landing-page/header/shooting.png"
import Bottle from "../../../public/landing-page/header/presure.png"

export default function IntroCover() {
    return (
        <div className="bg-neutral-100 max-w-full w-full lg:px-20 lg:py-15 px-8 pt-8 pb-20">
            <div className="lg:justify-between justify-left items-left flex flex-col gap-2">
                <div className="lg:justify-between flex lg:flex-row">
                    <h1 className="font-sans font-medium text-left text-7xl text-neutral-800 leading-[130%]">
                        Meet <br /> Nexa
                    </h1>

                    <div>
                        <Image
                            src={Chitato}
                            alt="radical toast product"
                            className="lg:relative lg:opacity-[100%] lg:z-3 lg:scale-[40%] opacity-0 lg:left-[180px] lg:bottom-[200px]"
                        />

                        <Image
                            src={Studio}
                            alt="studio action go"
                            className="lg:relative lg:opacity-[100%] opacity-0 lg:scale-[37%] lg:left-[150px] lg:bottom-[770px]"
                        />

                        <Image
                            src={Bottle}
                            alt="product ads comerce"
                            className="lg:relative lg:opacity-[100%] opacity-0 lg:scale-[35%] lg:left-[350px] lg:bottom-[1350px]"
                        />
                    </div>
                </div>

                <div className="justify-left lg:justify-between lg:mt-[-1450px] gap-20 flex lg:flex-row flex-col mt-[-1100px] pl-3 lg:mb-0">
                    <Button className="justify-center lg:w-[15%] w-[25%] gap-[9px] ml-[-10px] pb-7 border-b-2 border-black">
                        <p className="text-black text-3xl font-medium">Let&apos;s talk</p>
                        <ArrowRight height={30} width={30} className="mt-[2px] text-black" />
                    </Button>

                    <p className="font-sans font-medium text-4xl text-neutral-800 leading-[150%] lg:text-right text-left">
                        — An digital agency focused on digital <br />
                        experiences. With every single one of <br />
                        our clients, we bring forth a deep <br />
                        passion for creative problem solving.
                    </p>
                </div>
            </div>
        </div>
    )
}