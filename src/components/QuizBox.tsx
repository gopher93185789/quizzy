import AccessTimeIcon from "@mui/icons-material/AccessTime";

const q = 6;
const score = 834;
const qType = "closed";
const checked = false

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

const QuestionInfoSection = () => (
  <>
    <div className="h-fit w-full flex flex-row items-center justify-between">
      <div id="timer" className="flex flex-row items-center gap-2">
        <p className="text-white text-3xl font-bold">AI Quiz</p>
      </div>

      <div id="score" className="flex flex-row items-center gap-2">
        <p className="text-white text-xl font-bold">Question: {q} of 15</p>
      </div>
    </div>

    <div className="h-3 mt-3 rounded-r-xl rounded-l-xl w-full flex flex-row overflow-hidden">
      {Array(15)
        .fill(0, 0)
        .map((_, key) => (
          <div
            className={`h-full w-full ${key <= q ? "bg-white" : ""} `}
            key={key}
          ></div>
        ))}
    </div>

    {qType == "open" ? (
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

const MainSection = () => {
  return (
    <>
      <div className="h-full w-full p-8 relative overflow-hidden">
        <QuestionInfoSection />
        <p className="text-2xl font-bold line-clamp-2 text-white/50 w-full mt-8 overflow-hidden">
          Name the largest ocean on Earth.
        </p>

        {qType == "open" ? (
          <textarea className="w-full mt-5 border-1 p-3 min-h-30 max-h-74  text-white border-white/15 rounded-lg"></textarea>
        ) : (
          <div className="w-full h-fit flex flex-col mt-5 gap-5">
            {Array(4)
              .fill(0, 0)
              .map((_, key) => (
                <div
                  key={key}
                  className="w-full border-white/15 hover:border-white active:scale-99 duration-300 ease-in-out border-1 h-16 rounded-r-xl rounded-l-xl"
                ></div>
              ))}
          </div>
        )}

        {checked ? (
          <button className="h-fit w-fit bg-white text-black px-7 py-1 rounded-lg font-semibold absolute bottom-8 right-8 text-xl">
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

export function QuizBox() {
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
          <MainSection />
        </div>
      </div>
    </>
  );
}
