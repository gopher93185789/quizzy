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
    { page: "account", href: "/account", title: "login" },
  ];

  return (
    <>
      <div className="h-full flex flex-row w-fit m-0 p-0">
        {buttons.map((item, key: number) => (
          <Link key={key} href={item.href} onClick={() => setPage(item.page)}>
            <div className="group flex items-center justify-center duration-300 h-full w-fit border border-y-0 hover:bg-accent  border-white/15 border-l-0 ease-in-out">
              <p
                className={`px-5 text-center overflow-hidden whitespace-nowrap ${
                  page === item.page ? "text-white" : "text-white/50"
                } group-hover:text-white duration-300  ease-in-out   font-bold`}
              >
                {item.title}
              </p>
            </div>
          </Link>
        ))}


      </div>
    </>
  );
}

export function Navbar() {
  return (
    <>
      <div className="w-full z-50 h-12 flex  bg-[#050505] border border-t-0 border-x-0 items-center  border-white/15">
        <div className="w-full h-full flex justify-end">
          <RenderButtons />
        </div>
      </div>
    </>
  );
}
