import Image from "next/image";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Review from "@/components/Review";
import Footer from "@/components/Footer";
// import Video from "@/components/Video";
import Events from "@/components/Events";

export default function Home() {
  return (
    <main>
      {/* <div className="h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden"> */}
      <div className="h-full max-w-[1800px] mx-auto overflow-hidden">
        <Hero />
        <About />
        <Menu />
        <Review />
        <Events/>
        {/* <Video/> */}
        <Footer />
        <div className="h-[380px] md:h-[370px]"></div>
      </div>
    </main>
  );
}
