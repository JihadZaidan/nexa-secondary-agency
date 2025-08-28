import Marketing from "@/components/landing-page/features";
import IntroCover from "@/components/landing-page/introductions";
import StoryWork from "@/components/landing-page/stories";
import WorkerSheet from "@/components/landing-page/worksheet";

export default function LandingPage() {
  return (
    <div className="w-full">
      <IntroCover/>
      <Marketing/>
      <WorkerSheet/>
      <StoryWork/>
    </div>
  )
}