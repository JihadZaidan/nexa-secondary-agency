import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Converter from "../../../public/works/center/upper.png"
import Lofi from "../../../public/works/center/left.png"
import Rigel from "../../../public/works/center/right.png"

export default function CenterWorks() {
    return (
        <div className="max-w-full w-full bg-neutral-900 lg:px-20 lg:pt-20 lg:pb-16 px-5 py-14">
            <div className="w-full flex flex-col lg:gap-18 gap-12">
                <div className="w-full flex flex-col lg:gap-14 gap-6">
                    <Image
                        src={Converter}
                        alt="center works primary"
                        className="w-full"
                    />

                    <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-left items-left gap-5">
                        <h4 className="text-neutral-100 text-xl font-size font-medium text-left">/ HOUSEL</h4>
                        <p className="text-neutral-100 text-xl font-size font-medium text-left">
                            Empowers developers and companies <br /> to build outstanding products.
                        </p>
                    </div>
                </div>
                <div className="w-full flex lg:flex-row flex-col lg:gap-20 gap-12">
                    <div className="flex flex-col gap-8">
                        <Image
                            src={Lofi}
                            alt="center lower left"
                            className="w-full"
                        />
                        <div className="flex flex-row justify-between">
                            <h4 className="text-neutral-100 text-xl font-size font-medium text-left">/ HOUSEL</h4>
                            <ArrowRight className="text-white font-medium"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <Image
                            src={Rigel}
                            alt="center lower right"
                            className="w-full"
                        />
                        <div className="flex flex-row justify-between">
                            <h4 className="text-neutral-100 text-xl font-size font-medium text-left">/ CONTEXT AI</h4>
                            <ArrowRight className="text-white font-medium"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}