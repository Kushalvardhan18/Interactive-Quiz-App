import { useState } from "react";
import questions from "./assets/questions";

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [optionSelected, setOptionSelected] = useState(null);

  function handleNextButton() {
    if (count < isLastQuestion) {
      setHasAnswered(false);
      setCount(count + 1);
      setOptionSelected(null);
    } else {
      setCount(count);
    }
  }

  function handleSubmit() {
    setSubmitted(true);
  }
  function verifyResult(option) {
    if (hasAnswered) return;
    setOptionSelected(option);
    if (option === questions[count].correctAnswer) {
      setScore(score + 1);
    }
    setHasAnswered(true);
  }

  function handleRetry() {
    setCount(0);
    setScore(0);
    setHasAnswered(false);
    setOptionSelected(null);
    setSubmitted(false);
  }

  const isLastQuestion = questions.length-1 ;

  return (
    <div className="flex flex-col  my-5 mx-10">
      <h1 className="font-bold text-6xl !text-amber-300 text-center">Quiz</h1>
      {!submitted ? (
        <>
          <div className="my-8 text-3xl">
            Question {questions[count].id} : {questions[count].title}
          </div>
          <div className="flex flex-col gap-5 ">
            {questions[count].options.map((option, index) => (
              <div key={index}>
                <input
                  type="button"
                  value={option}
                  className={` w-100 border-1 px-5 py-2 rounded-xl ${optionSelected === option ? "!bg-green-500" :""}  hover:!bg-amber-300 hover:!text-yellow-800 text-2xl`}
                  onClick={() => verifyResult(option)}
                />
              </div>
            ))}
          </div>
          <div className="flex  gap-2 my-5 justify-center">
            {count === isLastQuestion ?  (
               <button className="border-1 px-5 py-2 rounded-xl cursor-not-allowed  w-30">
                Next
              </button>
            ):(
              <button
                onClick={handleNextButton}
                className="border-1 px-5 py-2 rounded-xl hover:!bg-green-600  w-30"
              >
                Next
              </button>
             
            )}
            {count === isLastQuestion ? (
              <button
                onClick={handleSubmit}
                className="border-1 px-5 py-2 rounded-xl hover:!bg-blue-600   w-30 "
              >
                Submit
              </button>
            ) : (
              <button className=" border-1 px-5 py-2 rounded-xl  w-30 cursor-not-allowed">
                Submit
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <button
            className="flex items-start w-fit border-1 rounded-md border-red-500 px-5 py-2 hover:!bg-amber-400"
            onClick={handleRetry}
          >
            Retry
          </button>
          <div class="flex h-100 items-center justify-center">
            <h2 className="text-6xl ">Your Score : {score}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
