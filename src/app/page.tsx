export default function Home() {
  return (
    <>
      <div className="w-full h-[800px] overflow-hidden  relative bg-grid flex sm:items-center mt-36 sm:mt-0 justify-center">
        <div className="absolute -top-24 left-48 h-1/2 aspect-video opacity-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3787 2842"
            fill="none"
          >
            <g filter="url(#filter)">
              <ellipse
                cx="1924.71"
                cy="273.501"
                rx="1924.71"
                ry="273.501"
                transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
                fill={"white"}
                fillOpacity="0.21"
              ></ellipse>
            </g>
            <defs>
              <filter
                id="filter"
                x="0.860352"
                y="0.838989"
                width="3785.16"
                height="2840.26"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="151"
                  result="effect1_foregroundBlur_1065_8"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>
        <div className="h-1/4 bottom-0 w-full absolute bg-gradient-to-t from-[#060606]" />
        <div className="h-fit w-full sm:w-1/2  flex flex-col items-center justify-center">
          <p className="text-4xl sm:text-7xl line-clamp-1 h-14 sm:h-24 font-bold text-center bg-clip-text text-transparent antialiased bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            quizzez made easy
          </p>
          <p className="sm:text-2xl w-2/3 sm:w-1/2 font-bold text-center text-white text-opacity-50">
            Quizzy is the #1 place to learn and take quizzez in a gameified
            fashion
          </p>

          <button className="text-black font-bold mt-5 sm:mt-10 py-1 px-8 text-2xl rounded-lg bg-white hover:bg-opacity-70 ease-in-out duration-300">
            Start now
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center pb-20 bg-[#060606]">
        <div className="flex flex-row justify-center gap-5 w-full h-full">
          <div className="h-[80vh] shadow-inset p-10 w-1/4 flex flex-col rounded-xl shadow-lg bg-[#050505]">
            <p className="w-full text-5xl text-orange-600 font-bold">
              Cybersecurity
            </p>
            <p className="w-full text-lg font-medium mt-5 overflow-hidden text-white text-opacity-50">
              Test your knowledge on digital security, ethical hacking,
              encryption, and best practices to stay safe online.
            </p>
          </div>
          <div className="h-[80vh] shadow-inset p-10 w-1/4 flex flex-col rounded-xl shadow-lg bg-[#050505]">
            <p className="w-full text-5xl text-blue-500 font-bold">
              Social Issues
            </p>
            <p className="w-full text-lg font-medium mt-5 overflow-hidden text-white text-opacity-50">
              Explore quizzes on global challenges like climate change, human
              rights, and social justice to expand your awareness.
            </p>
          </div>
          <div className="h-[80vh] shadow-inset p-10 w-1/4 flex flex-col rounded-xl shadow-lg bg-[#050505]">
            <p className="w-full text-5xl text-yellow-200 font-bold">AI</p>
            <p className="w-full text-lg font-medium mt-5 overflow-hidden text-white text-opacity-50">
              Dive into the world of artificial intelligence, covering machine
              learning, neural networks, ethics, and future implications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
