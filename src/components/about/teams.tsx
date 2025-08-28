import Image from "next/image"
import Antony from "../../../public/about/team/team-antony.png"
import Luna from "../../../public/about/team/team-luna.png"
import Sakhir from "../../../public/about/team/team-sakhir.png"
import Wayne from "../../../public/about/team/team-wayne.png"

export default function Teams() {
    return (
        <section className="relative lg:px-30 lg:py-30">
            <Image
                src={Antony}
                alt="team-antony"
                className="absolute grayscale scale-20 lg:scale-25 lg:right-[-200px] lg:bottom-[-350px] right-[-280px] bottom-[-250px]"
            />

            <Image
                src={Luna}
                alt="team-luna"
                className="absolute grayscale scale-20 lg:scale-30 lg:right-[150px] lg:bottom-[230px] right-[-200px] bottom-[110px]"
            />

            <div className="z-5 w-full px-30 py-30 relative justify-center items-center">
                <div className="justify-center items-center">
                    <h2 className="w-full text-black text-center text-4xl lg:text-5xl font-sans font-medium leading-[130%]">
                        Meet Our Troops of Creative
                    </h2>
                </div>
            </div>

            <Image
                src={Sakhir}
                alt="team-sakhir"
                className="absolute grayscale scale-20 lg:scale-35 lg:left-[-150px] lg:bottom-[-150px] left-[-230px] bottom-[-150px]"
            />

            <Image
                src={Wayne}
                alt="team-wayne"
                className="absolute grayscale scale-20 lg:scale-28 lg:left-[-250px] lg:bottom-[150px] left-[-230px] bottom-[80px]"
            />
        </section>

    )
}