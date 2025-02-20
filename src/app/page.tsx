import { Head, Shield, World } from "@/components/AsciiIcons";
import { PlusSideBar } from "@/components/PlusSideBar";
import { Spotlight } from "@/components/Spotlight";
import { TextCard } from "@/components/TextCard";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="fixed hidden lg:flex z-10 left-0 h-full w-16 border border-white/10 border-l-0 border-y-0" />
      <div className="w-full h-[400px] lg:h-[800px] overflow-hidden  relative bg-grid flex lg:items-center justify-center">
        <Spotlight />

        <div className="h-fit mt-36 select-none  lg:mt-0 w-full lg:w-1/2  flex flex-col items-center justify-center">
          <h1 className="text-4xl overflow-hidden text-nowrap lg:text-7xl h-14 lg:h-20 font-bold text-center bg-clip-text text-transparent antialiased bg-gradient-to-b from-neutral-50 to-neutral-400/40">
            Quizzes, Simplified
          </h1>
          <p className="lg:text-2xl w-2/3 lg:w-1/2 font-bold text-center text-white/50">
            Quizzy is the ultimate platform for fun, engaging, and gamified
            learning.
          </p>

          <Link
            href={"/quiz"}
            className="text-black font-bold mt-3 lg:mt-5 py-1 px-8 text-2xl rounded-lg bg-white hover:bg-white/70 ease-in-out duration-300"
          >
            Start now
          </Link>
        </div>
      </div>
    </>
  );
};

const CardSection = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center py-20 bg-primary">
        <PlusSideBar />
        <div className="flex flex-col px-5 lg:flex-row justify-center gap-5 w-full h-full">
          <TextCard
            title="Cybersecurity"
            titleColor="text-accent"
            text="              Test your knowledge on digital security, ethical hacking,
              encryption, and best practices to stay safe online."
          >
            <Shield />
          </TextCard>

          <TextCard
            title="Social media"
            titleColor="text-blue-500"
            text="Explore quizzes on global challenges like climate change, human
              rights, and social justice to expand your awareness."
          >
            <World />
          </TextCard>

          <TextCard
            title="AI"
            titleColor="text-yellow-200"
            text="               Dive into the world of artificial intelligence, covering machine
              learning, neural networks, ethics, and future implications."
          >
            <Head />
          </TextCard>
        </div>
      </div>
    </>
  );
};

const TrophySection = () => {
  return (
    <>
      <div className="h-fit w-full flex flex-col gap-5 pb-20 items-center bg-primary">
        <PlusSideBar />
        <p className="text-4xl lg:text-6xl leading-tight  font-bold text-center bg-clip-text text-transparent antialiased bg-gradient-to-b from-neutral-950 to-[#F8C63D]">
          Get rewarded for learning
        </p>
        <div className="flex group flex-col w-3/4 p-5 gap-5 ">
          <p className="text-white/25 w-full text-center text-2xl font-bold">
            <span className="group-hover:text-accent duration-300 ease-in-out">
              Cybersecurity
            </span>{" "}
            Badges
          </p>
          <div className="w-full flex flex-row gap-5 justify-center">
            <div className="size-36 bg-amber-600"></div>
            <div className="size-36 bg-amber-600"></div>
            <div className="size-36 bg-amber-600"></div>
            <div className="size-36 bg-amber-600"></div>
            <div className="size-36 bg-amber-600"></div>
            <div className="size-36 bg-amber-600"></div>
          </div>
        </div>

        <div className="flex group flex-col w-3/4 p-5 gap-5">
          <p className="text-white/25 w-full text-center text-2xl font-bold">
            <span className="group-hover:text-blue-500 duration-300 ease-in-out">
              Social media
            </span>{" "}
            Badges
          </p>
          <div className="w-full flex flex-row gap-5 justify-center ">
            <div className="size-36 bg-amber-600"></div>
            <div className="size-36 bg-amber-600"></div>
            <div className="size-36 bg-amber-600"></div>
            <div className="size-36 bg-amber-600"></div>
            <div className="size-36 bg-amber-600"></div>
            <div className="size-36 bg-amber-600"></div>
          </div>
        </div>

        <div className="flex group flex-col w-3/4 p-5 gap-5">
          <p className="text-white/25 w-full text-center text-2xl font-bold">
            <span className="group-hover:text-yellow-200 duration-300 ease-in-out">
              AI
            </span>{" "}
            Badges
          </p>
          <div className="w-full flex flex-row gap-5 justify-center ">
            <div className="size-36 bg-amber-600"></div>
            <div className="size-36 bg-amber-600"></div>
            <div className="size-36 bg-amber-600"></div>
            <div className="size-36 bg-amber-600"></div>
            <div className="size-36 bg-amber-600"></div>
            <div className="size-36 bg-amber-600"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <div className="w-full h-76 lg:h-175 bg-grid relative p-0 m-0 flex overflow-hidden items-center justify-center">
        <div className="h-1/4 -bottom-3 lg:bottom-0 z-5 w-full absolute bg-gradient-to-t from-primary" />
        <div className="absolute w-full -bottom-15 h-full">
          <div className="w-full h-full flex items-center justify-center">
            <div className="bg-black shadow-outset  w-300 aspect-video overflow-hidden rounded-lg rotate-2">
              {/* placeholder app demo should go here */}
              <iframe
                src="https://www.youtube.com/embed/fRk6K-H1Lxc?autoplay=1&loop=1&playlist=fRk6K-H1Lxc"
                className="h-full w-full"
                allow="autoplay; encrypted-media"
              />
            </div>
          </div>
        </div>
      </div>

      <CardSection />
      <TrophySection />
    </>
  );
}
