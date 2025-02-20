import { Head, Shield, World } from "@/components/AsciiIcons";
import { PlusSideBar } from "@/components/PlusSideBar";
import { Spotlight } from "@/components/Spotlight";
import { TextCard } from "@/components/TextCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="fixed hidden lg:flex z-10 left-0  h-full w-16 border border-white/10 border-l-0 border-y-0" />

      <div className="w-full h-[400px] lg:h-[800px] overflow-hidden  relative bg-grid flex lg:items-center justify-center">
        <Spotlight />

        <div className="h-1/4 bottom-0 w-full absolute bg-gradient-to-t from-primary" />
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

      <div className="w-full flex flex-col items-center pb-20 bg-primary">
        <PlusSideBar />
        <div className="flex flex-col px-5 lg:flex-row justify-center gap-5 w-full h-full">
          <TextCard
            title="Cybersecurity"
            titleColor="text-orange-600"
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

      <div className="h-screen w-full bg-primary"></div>
    </>
  );
}
