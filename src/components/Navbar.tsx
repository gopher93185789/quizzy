"use client";
import Link from "next/link";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

export function RenderButtons() {
  const [page, setPage] = useState<string>("home");

  const buttons = [
    { page: "home", href: "/", title: "Home" },
    { page: "leaderboard", href: "/leaderboard", title: "Leaderboard" },
    { page: "quiz", href: "/quiz", title: "Take the quiz" },
  ];

  return (
    <>
      <div className="h-full flex flex-row w-full justify-end">
        {buttons.map((item, key: number) => (
          <Link key={key} href={item.href} onClick={() => setPage(item.page)}>
            <div className="group flex items-center justify-center duration-300 h-full w-fit border border-y-0 hover:bg-[#FF4000]  border-white border-l-0 border-opacity-15 ease-in-out">
              <p
                className={`px-5 text-center overflow-hidden whitespace-nowrap ${
                  page === item.page ? "text-opacity-100" : "text-opacity-50"
                } group-hover:text-opacity-100 duration-300  ease-in-out  text-white font-bold`}
              >
                {item.title}
              </p>
            </div>
          </Link>
        ))}

        <Link target="_blank" href={"https://github.com/gopher93185789/quizzy"}>
          <div className="group flex items-center justify-center duration-300 h-full aspect-square border border-y-0 hover:bg-[#FF4000]  border-white border-l-0 border-opacity-15 ease-in-out">
            <GitHubIcon className="text-white" />
          </div>
        </Link>
      </div>
    </>
  );
}

export function Navbar() {
  return (
    <>
      <div className="w-full z-50 h-12 flex  bg-black border border-t-0 border-x-0 items-center  border-white border-opacity-15">
        <img
          src="/rcok.png"
          className="h-full sm:flex hidden w-28 grayscale hover:grayscale-0 border border-y-0 border-l-0 border-white border-opacity-15 duration-300 ease-in-out hover:animate-spin"
        />

        <RenderButtons />
      </div>
    </>
  );
}
