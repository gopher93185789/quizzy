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
      <div className="h-[80vh] overflow-hidden  shadow-inset p-10 w-full sm:w-1/4 flex flex-col rounded-xl shadow-lg bg-[#050505]">
        <p className={`w-full text-4xl sm:text-5xl ${titleColor} font-bold`}>
          {title}
        </p>
        <p className="w-full text-lg font-medium mt-5 overflow-hidden text-white/50">
          {text}
        </p>

        {children}
      </div>
    </>
  );
}
