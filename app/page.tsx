import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import {HeroScrollDemo} from "@/components/ScrollContainer";
import Text from "@/components/Text";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
        ]}/>
        <Hero/>
        <HeroScrollDemo/>
        <Grid/>
        <RecentProjects/>
        <Text/>
        <Experience/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
