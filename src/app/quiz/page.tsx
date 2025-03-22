'use client'

import { QuizBox } from "@/components/QuizBox";
import { SideNavbar } from "@/components/SideNavbar";
import { AiVragen, MeerkeuzeVraag } from "@/pkg/Questions";
import { useEffect, useState } from "react";

export default function Quiz() {
  const [currentQuiz, setCurrentQuiz] = useState<MeerkeuzeVraag[]>(AiVragen)
  
  useEffect(() => {
    console.log(currentQuiz)
  }, [currentQuiz])

    return (
      <>
        <div className="w-full h-[calc(100vh-3rem)] flex flex-row">
          <SideNavbar currentQuiz={currentQuiz} setCurrentQuiz={setCurrentQuiz} />
          <div className="w-full h-full bg-grid flex items-center justify-center ">
            <QuizBox QuizData={currentQuiz} />
          </div>
        </div>
      </>
    );
}