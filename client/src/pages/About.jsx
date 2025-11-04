import Navbar from "@/components/Navbar";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { RetroGrid } from "@/components/magicui/retro-grid";
import CardReveal from "@/components/CardReveal";

const About = () => {
  const data = {
    about_data:
      "This project is a fullstack web application that enables people to stay in touch with their friends and family. It allows users to update their information and manage their settings just like any other chat-app. It provides features such as Guest Mode and Streaming together. Built with cutting-edge technologies, it offers a seamless user experience and robust functionality. From intuitive interfaces to powerful backend systems, every aspect of our project is crafted to meet the highest standards of modern web development.",
    about_size: "text-2xl",
  };

  return (
    <div className="about-container h-screen w-full bg-transparent flex flex-col">
      <Navbar />

      <div className="about-info mt-[10rem] w-full flex flex-col items-center ">
        <div className="text-center font-title py-10 tracking-wider bg-gradient-to-b from-foreground from-30%  to-background to-90% text-transparent bg-clip-text pt-10 text-7xl font-[600]">
          PROJECT OVERVIEW
        </div>
        <div className="my-5 about-content w-3/4 text-center ">
          <TextGenerateEffect
            classes="font-[400] font-body"
            words={data.about_data}
            textSize={data.about_size}
            duration={0.5}
          />
        </div>
      </div>

      <div className="tech-stack min-h-fit w-full flex flex-col items-center justify-evenly">
        <span className="text-center font-title bg-gradient-to-b from-foreground from-30%  to-background to-90% text-transparent bg-clip-text py-20 text-7xl font-[600]">
          TECH STACK
        </span>
        <div className="my-5 about-content w-3/4 text-center ">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>

      <div className="about-info mt-[8rem] w-full flex flex-col items-center ">
        <span className="text-center font-title bg-gradient-to-b from-foreground from-30%  to-background to-90% text-transparent bg-clip-text py-20 text-7xl font-[600]">
          ABOUT US
        </span>
        <div className="w-full flex flex-col items-start pl-[5rem]">
          <CardReveal />
        </div>
      </div>

      <RetroGrid />
    </div>
  );
};

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
export default About;
