import Image from "next/image"
import Full from "../../../public/works/lower/full.png"
import Short from "../../../public/works/lower/short.png"
import { ArrowRight } from "lucide-react"

export default function Lork() {
    return (
        <div className="max-w-full w-full lg:px-20 lg:pt-10 pb-30 px-5 pt-12 bg-neutral-100">
            <div className="w-full flex lg:flex-row flex-col lg:gap-14 gap-12">
                <div className="flex flex-col justify-left items-left gap-8">
                    <Image src={Short} alt="image lower person" />
                    <div className="flex flex-row justify-between">
                        <h4 className="text-neutral-800 text-xl font-size font-medium text-left">/ CLOODY</h4>
                        <ArrowRight className="text-neutral-700 font-medium" />
                    </div>
                </div>
                <div className="flex flex-col justify-left items-left gap-8">
                <Image src={Full} alt="image lower person" />
                    <div className="flex flex-row justify-between">
                        <h4 className="text-neutral-800 text-xl font-size font-medium text-left">/ DOCKER</h4>
                        <ArrowRight className="text-neutral-700 font-medium" />
                    </div>
                </div>
            </div>
        </div>
    )
}