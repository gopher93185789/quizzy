import React from "react";

interface TextCardProps {
  title: string;
  titleColor: string;
  text: string;
  children?: React.ReactElement;
}

export function TextCard({ text, title, titleColor, children }: TextCardProps) {
  return (
    <>
      <div className="h-fit sm:h-190  overflow-hidden  shadow-inset p-10 w-full lg:w-1/4 flex flex-col rounded-xl shadow-lg bg-[#050505]">
        <p className={`w-full h-1/12 text-4xl sm:text-5xl ${titleColor} font-bold`}>
          {title}
        </p>
        <p className="w-full h-2/12 text-lg font-medium mt-4 overflow-hidden text-white/50">
          {text}
        </p>
        <div className="w-full sm:block hidden h-9/12 overflow-hidden">
          {children}
        </div>
      </div>
    </>
  );
}
