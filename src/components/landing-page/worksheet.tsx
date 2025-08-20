import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Work from "../../../public/landing-page/body/worker.png"

export default function WorkerSheet() {
    return (
        <div className="max-w-full w-full bg-neutral-100 lg:px-20 lg:pt-25 lg:pb-30 px-8 py-18">
            <div className="w-full flex flex-col gap-20">
                <div className="w-full flex flex-col gap-10">
                    <h2 className="font-sans font-medium text-5xl text-neutral-800 leading-[140%]">
                        The work we do <br />
                        and the people we help
                    </h2>
                    <Button className="lg:hidden justify-center gap-[9px] ml-[-650px] ">
                        <p className="text-neutral-800 text-[22px] font-medium">All Case Study</p>
                        <ArrowRight height={30} width={30} className="mt-[3px] text-neutral-800" />
                    </Button>
                </div>

                <div className="w-full justify-left flex lg:flex-row-reverse flex-col-reverse gap-15">
                    <div className="w-full justify-left lg:ml-[-250px] flex flex-col lg:justify-between gap-12 ">
                        <div className="flex flex-col gap-12">
                            <div className="flex flex-col gap-6">
                                <h4 className="text-neutral-800 text-4xl font-sans font-medium text-left">/ HOUSEL</h4>
                                <p className="text-neutral-600 text-4xl font-sans font-medium leading-[150%]">
                                    Help you to sell buy  <br />
                                    mortgage,invest property and <br />
                                    other real estate service
                                </p>
                            </div>
                            <h4 className="text-neutral-500 text-4xl font-sans font-medium text-left">/ CONTEXT AI</h4>
                            <h4 className="text-neutral-500 text-4xl font-sans font-medium text-left">/ CLODY</h4>
                        </div>
                        <Button className="justify-center gap-[9px] lg:ml-[-300px] ml-[-650px]">
                            <p className="text-neutral-800 text-[22px] font-medium">All Case Study</p>
                            <ArrowRight height={30} width={30} className="mt-[3px] text-neutral-800" />
                        </Button>
                    </div>

                    <Image
                        src={Work}
                        alt="project"
                        className="lg:w-[55%] mr-[350px]"
                    />
                </div>
            </div>
        </div>
    )

}
