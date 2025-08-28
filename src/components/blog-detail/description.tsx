import Image from "next/image"
import Note from "../../../public/insight-blog/inblog-04.png"
import Tims from "../../../public/landing-photos/branding.png"
import Meeting from "../../../public/about/Video-Showcase.png"

export default function DescribeDetail() {
    return (
        <div className="max-w-full w-full px-20 py-15">
            <div className="w-full gap-15 flex flex-col">
                <p className="text-[#595E5E] text-2xl leading-[150%] font-sans font-medium">
                    In todays rapidly evolving business landscape brands face <br />
                    the constant challenge of staying relevant in the face of <br />
                    changing market dynamics. Brand evolution the process of <br />
                    adapting and transforming to meet shifting consumer needs <br />
                    and market trends has become essential for businesses <br />
                    seeking long-term success. By embracing brand evolution <br />
                    companies can not only maintain their competitive edge but <br />
                    also foster growth and resilience in the face of uncertainty.
                </p>

                <div className="justify-right items-right relative lg:mt-[-200px] lg:mb-[-700px]">
                    <Image
                        src={Note}
                        alt="photos"
                        className="lg:relative lg:scale-[50%] lg:left-[110px]"
                    />

                    <Image
                        src={Tims}
                        alt="branding"
                        className="relative lg:scale-[50%] lg:w-[70%] lg:top-[-550px] lg:left-50"
                    />
                </div>

                <div className="justify-right items-left flex flex-col lg:pl-120 gap-4">
                    <h5 className="text-black text-3xl font-sans font-medium text-left">Empowering Businesses to Adapt and Thrive</h5>
                    <p className="text-[#595E5E] text-2xl leading-[150%] font-sans font-medium">
                        This blog post explores the intricacies of brand evolution and its significance in <br />
                        modern business strategy. From identifying emerging market trends to implementing <br />
                        effective adaptation strategies businesses can navigate the complexities of brand <br />
                        evolution with confidence. Through insightful case studies actionable strategies <br />
                        and a focus on authenticity this post aims to equip brands with the knowledge and <br />
                        tools they need to thrive in today's ever-changing marketplace.
                    </p>
                </div>

                <Image
                    src={Meeting}
                    alt="discusion teams"
                    className="grayscale"
                />
            </div>
        </div>
    )
}