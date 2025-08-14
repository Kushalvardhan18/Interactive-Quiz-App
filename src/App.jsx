import { useState } from "react";
import questions from "./assets/questions";

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);

  function handleNextButton() {
    if (count < questions.length - 1) {
      setHasAnswered(false);
      setCount(count + 1);
    } else {
      setCount(count);
    }
  }

  function handleSubmit() {}
  function verifyResult(option) {
    if (!hasAnswered) {
      if (option === questions[count].correctAnswer) {
        setScore(score + 1);
      }
    }
    setHasAnswered(true);
  }
  return (
    <div className="flex flex-col  my-5 mx-10">
      <h1 className="font-bold text-6xl !text-amber-300 text-center">Quiz</h1>
      {/* <h2>Score:{score}</h2> */}
      <span className="my-8 text-3xl">
        Question{questions[count].id} : {questions[count].title}
      </span>
      <span className="flex flex-col gap-5 ">
        {questions[count].options.map((option) => (
          <div>
            <input
              type="button"
              value={option}
              className=" w-100 border-1 px-5 py-2 rounded-xl hover:!bg-amber-300 hover:!text-yellow-800 text-2xl"
              onClick={() => verifyResult(option)}
            />
          </div>
        ))}
      </span>
      <span className="flex  gap-2 my-5 justify-center">
        <button onClick={handleNextButton} className="border-1 px-5 py-2 rounded-xl hover:!bg-green-600  w-30">Next</button>
        <button onClick={handleSubmit} className="border-1 px-5 py-2 rounded-xl hover:!bg-blue-600  w-30">Submit</button>
      </span>
    </div>
  );
}

export default App;
