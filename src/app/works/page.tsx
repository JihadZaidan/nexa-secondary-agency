import HeaderWork from "@/components/works/headscript";
import Lork from "@/components/works/lowerwork";
import CenterWorks from "@/components/works/workercenter";

export default function WorksLand() {
    return (
        <div className="w-full">
            <HeaderWork/>
            <CenterWorks/>
            <Lork/>
        </div>
    )
}