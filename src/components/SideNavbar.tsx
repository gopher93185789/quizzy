'use client'

import SecurityIcon from "@mui/icons-material/Security";
import { ReactNode } from "react";

interface IconButtonProps {
    title: string
    icon: ReactNode
    onClick?: () => void
}

export function IconButton({title, icon, onClick}:IconButtonProps) {
  return (
    <>
      <div onClick={onClick} className="w-full text-white/50 hover:text-white duration-300 ease-out  flex flex-row hover:cursor-pointer group items-center gap-1">
        <div className="p-1 h-fit w-fit  rounded-md ">
          {icon}
        </div>
        <p className="font-bold">{title}</p>
      </div>
    </>
  );
}

export function SideNavbar() {
  return (
    <>
      <div className="h-full w-58 border p-5 border-r-white/10  bg-primary">
      <div className="w-full h-fit flex flex-col gap-3">
        {Array(5).fill(0).map((_, k) => (
            <IconButton key={k} title="Cybersecurity" icon={<SecurityIcon/>} />
        ))}
      </div>

      </div>
    </>
  );
}
