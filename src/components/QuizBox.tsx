import { ParseOpenQuestion } from "@/pkg/Parser";
import { MeerkeuzeVraag } from "@/pkg/Questions";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface QuizBoxProps {
  QuizData: MeerkeuzeVraag[];
  currentQuizName: string;
}

interface InnerQuizBoxProps {
  numberOfQuestions: number;
  currQuestion: MeerkeuzeVraag;
  QuestionIndex: number;
  currentQuizName: string
}

interface MainQuizBoxProps {
  QuizData: MeerkeuzeVraag[];
  currentQuizName: string
  points: number;
  setPoints: Dispatch<SetStateAction<number>>;
}

interface TopSectionProps {
  points: number;
}

const TopSection = ({ points }: TopSectionProps) => (
  <div className="h-fit w-full border-x-0 border-t-0 border border-b-white/5 border-b-2 py-4 px-8 flex flex-row items-center justify-between">
    <div id="timer" className="flex flex-row items-center gap-2">
      <AccessTimeIcon className="text-white/50" />
      <p className="text-white/50 font-mono ">Timer: 12:43</p>
    </div>

    <div id="score" className="flex flex-row items-center gap-2">
      <p className="text-white/50 font-mono ">Score: {points}</p>
    </div>
  </div>
);

const QuestionInfoSection = ({
  QuestionIndex,
  numberOfQuestions,
  currQuestion,
  currentQuizName,
}: InnerQuizBoxProps) => {
  return (
    <>
      <div className="h-fit w-full flex flex-row items-center justify-between">
        <div id="timer" className="flex flex-row items-center gap-2">
          <p className="text-white text-3xl font-bold">
            {currentQuizName} Quiz
          </p>
        </div>

        <div id="score" className="flex flex-row items-center gap-2">
          <p className="text-white text-xl font-bold">
            Question: {QuestionIndex} of {numberOfQuestions}
          </p>
        </div>
      </div>

      <div className="h-3 mt-3 rounded-r-xl rounded-l-xl w-full flex flex-row overflow-hidden">
        {Array(numberOfQuestions)
          .fill(0, 0)
          .map((_, key) => (
            <div
              className={`h-full w-full ${
                key <= QuestionIndex ? "bg-white" : ""
              } `}
              key={key}
            ></div>
          ))}
      </div>

      {currQuestion.type == "open" ? (
        <div className="h-fit w-fit mt-3 text-blue-300 bg-blue-600/40 rounded-xl px-4">
          Open Question
        </div>
      ) : (
        <div className="h-fit w-fit mt-3 text-green-300 bg-green-600/40 rounded-xl px-4">
          Multiple choice question
        </div>
      )}
    </>
  );
};

const MainSection = ({
  QuizData,
  currentQuizName,
  setPoints,
}: MainQuizBoxProps) => {
  const numberOfQuestions = QuizData.length;
  const [idx, setIdx] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");
  const [checked, setchecked] = useState<boolean>(false);
  const [correct, setCorrect] = useState<boolean>(true);
  const [textArea, setTextArea] = useState<string>("");

  const [currQuestion, setCurrentQuestion] = useState<MeerkeuzeVraag>(
    QuizData[0]
  );

  const handleCheck = (): boolean => {
    if (currQuestion.type == "open") {
      setAnswer(textArea);
      setchecked(true);
      return true;
    }

    if (answer === currQuestion.correct) {
      setPoints((prev) => prev + 200);
      setchecked(true);
      return true;
    }

    setchecked(true);
    setCorrect(false);
    return false;
  };

  const handleNext = () => {
    if (currQuestion.type == "open") {
      const points = ParseOpenQuestion(textArea, currQuestion.correct);
      setPoints((prev) => prev + points);
    }

    if (idx + 1 != QuizData.length) {
      setIdx((prev) => prev + 1);
    }
    setTextArea("");
  };

  useEffect(() => {
    setCurrentQuestion(QuizData[idx]);
    setchecked(false);
    setAnswer("");
    setCorrect(true);
  }, [idx]);

  useEffect(() => {
    // localStorage.setItem(JSON.stringify(QuizData),points.toString()) logic error here
    setIdx(0);
    setCurrentQuestion(QuizData[0]);
    setchecked(false);
    setAnswer("");
    setCorrect(true);
    setTextArea("");
    setPoints(0);
  }, [QuizData]);

  return (
    <>
      <div className="h-full w-full p-8 relative overflow-hidden">
        <QuestionInfoSection
          currentQuizName={currentQuizName}
          currQuestion={currQuestion}
          QuestionIndex={idx + 1}
          numberOfQuestions={numberOfQuestions}
        />
        <p className="text-2xl font-bold line-clamp-2 text-white/50 w-full mt-8 overflow-hidden">
          {currQuestion.vraag}
        </p>

        {currQuestion.type == "open" ? (
          <textarea
            value={textArea}
            onClick={() => setAnswer(textArea)}
            onChange={(e) => setTextArea(e.target.value)}
            className="w-full mt-5 border-1 p-3 min-h-30 max-h-74  text-white border-white/15 rounded-lg"
          />
        ) : (
          <div className="w-full h-fit flex flex-col mt-5 gap-5">
            {currQuestion.opties.map((item, key) => (
              <div
                key={key}
                onClick={() => setAnswer(item)}
                className={`w-full ${
                  answer === item
                    ? "border-white"
                    : "border-white/15 hover:border-white "
                } ${
                  checked && item === currQuestion.correct
                    ? "bg-green-600/40"
                    : ""
                } 
                ${
                  checked && !correct && item === answer ? "bg-red-600/40" : ""
                }  
                flex items-center select-none p-2 active:scale-99 duration-300 ease-in-out border-1 h-16 rounded-r-xl rounded-l-xl`}
              >
                <p className="text-white/80 text-xl font-medium">{item}</p>
              </div>
            ))}
          </div>
        )}

        {checked ? (
          <button
            onClick={handleNext}
            className="h-fit w-fit bg-white hover:cursor-pointer text-black px-7 py-1 rounded-lg font-semibold absolute bottom-8 right-8 text-xl"
          >
            Next question
          </button>
        ) : (
          <button
            onClick={() => handleCheck()}
            className="h-fit w-fit bg-white hover:cursor-pointer hover:bg-white/80 duration-300 ease-in-out active:scale-99 will-change-transform text-black px-7 py-1 rounded-lg font-semibold absolute bottom-8 right-8 text-xl"
          >
            Check
          </button>
        )}
      </div>
    </>
  );
};

export function QuizBox({ QuizData, currentQuizName }: QuizBoxProps) {
  const [points, setPoints] = useState<number>(0);

  return (
    <>
      <div className="w-3/4 h-3/4   flex flex-row">
        <div className="h-full aspect-square overflow-hidden rounded-l-lg">
          <img
            src="https://picsum.photos/1920"
            className="object-cover h-full w-full"
          ></img>
        </div>
        <div className="h-full w-full bg-primary  rounded-r-lg overflow-hidden flex flex-col">
          <TopSection points={points} />
          <MainSection
            currentQuizName={currentQuizName}
            points={points}
            setPoints={setPoints}
            QuizData={QuizData}
          />
        </div>
      </div>
    </>
  );
}
