"use client";

import SecurityIcon from "@mui/icons-material/Security";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LanguageIcon from "@mui/icons-material/Language";
import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  AiVragen,
  CyberSecurityVragen,
  MeerkeuzeVraag,
  SocialMediaVragen,
} from "@/pkg/Questions";

interface IconButtonProps {
  title: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export function IconButton({ title, icon, onClick }: IconButtonProps) {
  return (
    <>
      <div
        onClick={onClick}
        className="w-full text-white/50 hover:text-white duration-300 ease-out  flex flex-row hover:cursor-pointer group items-center gap-1"
      >
        <div className="p-1 h-fit w-fit  rounded-md ">{icon}</div>
        <p className="font-bold">{title}</p>
      </div>
    </>
  );
}

interface SideNavbarProps {
  currentQuiz: MeerkeuzeVraag[];
  setCurrentQuiz: Dispatch<SetStateAction<MeerkeuzeVraag[]>>;
  setCurrentQuizName: Dispatch<SetStateAction<string>>;
}

export function SideNavbar({ setCurrentQuiz, setCurrentQuizName }: SideNavbarProps) {
  return (
    <>
      <div className="h-full w-58 border flex flex-col gap-10 p-5 border-r-white/10  bg-primary">
        <div className="w-full h-fit flex flex-col gap-2">
          <div className="w-full flex flex-row"></div>
          <p className="text-white font-bold text-xl">Quizzes</p>
          <IconButton
            onClick={() => {setCurrentQuiz(CyberSecurityVragen); setCurrentQuizName("Cybersecurity")}}
            title="Cybersecurity"
            icon={<SecurityIcon />}
          />
          <IconButton
            onClick={() => {setCurrentQuiz(SocialMediaVragen); setCurrentQuizName("Social Media")}}
            title="Social media"
            icon={<LanguageIcon />}
          />
          <IconButton
            onClick={() => {setCurrentQuiz(AiVragen); setCurrentQuizName("AI")}}
            title="AI"
            icon={<PsychologyIcon />}
          />
        </div>
      </div>
    </>
  );
}
