import { MeerkeuzeVraag } from "@/pkg/Questions";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useState } from "react";

const q = 6;
const score = 834;
const qType = "open";
const checked = false;

interface QuizBoxProps {
  QuizData: MeerkeuzeVraag[];
}

interface InnerQuizBoxProps {
  numberOfQuestions: number;
  currQuestion: MeerkeuzeVraag;
  QuestionIndex: number;
}

interface MainQuizBoxProps {
  QuizData: MeerkeuzeVraag[];
}

const TopSection = () => (
  <div className="h-fit w-full border-x-0 border-t-0 border border-b-white/5 border-b-2 py-4 px-8 flex flex-row items-center justify-between">
    <div id="timer" className="flex flex-row items-center gap-2">
      <AccessTimeIcon className="text-white/50" />
      <p className="text-white/50 font-mono ">Timer: 12:43</p>
    </div>

    <div id="score" className="flex flex-row items-center gap-2">
      <p className="text-white/50 font-mono ">Score: {score}</p>
    </div>
  </div>
);

const QuestionInfoSection = ({
  QuestionIndex,
  numberOfQuestions,
  currQuestion,
}: InnerQuizBoxProps) => {
  return (
    <>
      <div className="h-fit w-full flex flex-row items-center justify-between">
        <div id="timer" className="flex flex-row items-center gap-2">
          <p className="text-white text-3xl font-bold">AI Quiz</p>
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

const MainSection = ({ QuizData }: MainQuizBoxProps) => {
  const numberOfQuestions = QuizData.length;
  const [idx, setIdx] = useState<number>(0);
  const [currQuestion, setCurrentQuestion] = useState<MeerkeuzeVraag>(
    QuizData[idx]
  );

  return (
    <>
      <div className="h-full w-full p-8 relative overflow-hidden">
        <QuestionInfoSection
          currQuestion={currQuestion}
          QuestionIndex={idx + 1}
          numberOfQuestions={numberOfQuestions}
        />
        <p className="text-2xl font-bold line-clamp-2 text-white/50 w-full mt-8 overflow-hidden">
          {currQuestion.vraag}
        </p>

        {currQuestion.type == "open" ? (
          <textarea className="w-full mt-5 border-1 p-3 min-h-30 max-h-74  text-white border-white/15 rounded-lg"></textarea>
        ) : (
          <div className="w-full h-fit flex flex-col mt-5 gap-5">
            {currQuestion.opties.map((item, key) => (
              <div
                key={key}
                className="w-full border-white/15 hover:border-white flex items-center p-2 active:scale-99 duration-300 ease-in-out border-1 h-16 rounded-r-xl rounded-l-xl"
              >
                <p className="text-white/80 text-xl font-medium">{item}</p>
              </div>
            ))}
          </div>
        )}

        {checked ? (
          <button
            onClick={() => {}}
            className="h-fit w-fit bg-white text-black px-7 py-1 rounded-lg font-semibold absolute bottom-8 right-8 text-xl"
          >
            Next question
          </button>
        ) : (
          <button className="h-fit w-fit bg-white text-black px-7 py-1 rounded-lg font-semibold absolute bottom-8 right-8 text-xl">
            Check
          </button>
        )}
      </div>
    </>
  );
};

export function QuizBox({ QuizData }: QuizBoxProps) {
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
          <TopSection />
          <MainSection QuizData={QuizData} />
        </div>
      </div>
    </>
  );
}
