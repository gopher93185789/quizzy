'use client'

import { QuizBox } from "@/components/QuizBox";
import { SideNavbar } from "@/components/SideNavbar";
import { AiVragen, MeerkeuzeVraag } from "@/pkg/Questions";
import { useState } from "react";

export default function Quiz() {
  const [currentQuiz, setCurrentQuiz] = useState<MeerkeuzeVraag[]>(AiVragen)
  const [currentQuizName, setCurrentQuizName] = useState("AI")

    return (
      <>
        <div className="w-full h-[calc(100vh-3rem)] flex flex-row">
          <SideNavbar
            setCurrentQuizName={setCurrentQuizName}
            currentQuiz={currentQuiz}
            setCurrentQuiz={setCurrentQuiz}
          />
          <div className="w-full h-full bg-grid flex items-center justify-center ">
            <QuizBox currentQuizName={currentQuizName} QuizData={currentQuiz} />
          </div>
        </div>
      </>
    );
}


// l vercel