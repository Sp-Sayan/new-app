import { React } from "react";
import Navbar from "@/components/Navbar";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { RetroGrid } from "@/components/magicui/retro-grid";

const Home = () => {
  const data = {
    sub_heading: "watch.  connect.  communicate.",
    size: "text-5xl",
  };
  return (
    <div className="home-container h-full  w-full bg-transparent flex flex-col ">
      <RetroGrid />
      <Navbar />
      <div className="relative flex h-full w-full flex-col items-center overflow-hidden rounded-lg bg-transparent">
        <header className="heading-container  h-2/3 w-full flex flex-col justify-center items-center ">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-foreground dark:text-foreground flex items-center space-x-2"
          >
            <span>Where streaming meets talking 🔥</span>
          </HoverBorderGradient>

          <div className="heading w-fit  text-center">
            <span className="pointer-events-none text-9xl z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center  font-bold leading-none tracking-tighter text-transparent">
              FlixChat
            </span>
            <TextGenerateEffect
              textSize={data.size}
              duration={1.5}
              words={data.sub_heading}
            />
          </div>
        </header>
      </div>
      {/* <header className="heading-container  h-2/3 w-full flex flex-col justify-center items-center ">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-foreground dark:text-foreground flex items-center space-x-2"
        >
          <span>Where streaming meets talking 🔥</span>
        </HoverBorderGradient>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="heading w-fit  text-center">
          <h1 className="text-9xl text-foreground">FlixChat</h1>
          <TextGenerateEffect
            textSize={data.size}
            duration={1.5}
            words={data.sub_heading}
          />
        </div>
      </header> */}
      <section className="features z-50"></section>
    </div>
  );
};

export default Home;
