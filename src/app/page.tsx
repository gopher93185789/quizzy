import { Head, Shield, World } from "@/components/AsciiIcons";
import { PlusSideBar } from "@/components/PlusSideBar";
import { TextCard } from "@/components/TextCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="fixed hidden sm:flex z-10 left-0  h-full w-16 border border-white/10 border-l-0 border-y-0"/>

      <div className="w-full h-[400px] sm:h-[800px] overflow-hidden  relative bg-grid flex sm:items-center justify-center">
        <div className="absolute -top-24 left-32 h-1/2 aspect-video opacity-40">
          <svg
            className="animate-spotlight delay-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3787 2842"
            fill="none"
          >
            <g filter="url(#filter)">
              <ellipse
                cx="1924.71"
                cy="273.501"
                rx="1924.71"
                ry="273.501"
                transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
                fill={"white"}
                fillOpacity="0.21"
              ></ellipse>
            </g>
            <defs>
              <filter
                id="filter"
                x="0.860352"
                y="0.838989"
                width="3785.16"
                height="2840.26"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="151"
                  result="effect1_foregroundBlur_1065_8"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>

        <div className="h-1/4 bottom-0 w-full absolute bg-gradient-to-t from-[#060606]" />
        <div className="h-fit mt-36 select-none  sm:mt-0 w-full sm:w-1/2  flex flex-col items-center justify-center">
          <h1 className="text-4xl overflow-hidden text-nowrap sm:text-7xl h-14 sm:h-20 font-bold text-center bg-clip-text text-transparent antialiased bg-gradient-to-b from-neutral-50 to-neutral-400/40">
            Quizzes, Simplified
          </h1>
          <p className="sm:text-2xl w-2/3 sm:w-1/2 font-bold text-center text-white/50">
            Quizzy is the ultimate platform for fun, engaging, and gamified
            learning.
          </p>

          <Link
            href={"/quiz"}
            className="text-black font-bold mt-5 sm:mt-10 py-1 px-8 text-2xl rounded-lg bg-white hover:bg-white/70 ease-in-out duration-300"
          >
            Start now
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col items-center pb-20 bg-[#060606]">
        <PlusSideBar />
        <div className="flex flex-col px-5 sm:flex-row justify-center gap-5 w-full h-full">
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
    </>
  );
}
