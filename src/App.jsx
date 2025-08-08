import { useState } from "react";
import questions from "./assets/questions";

function App() {
  const [count, setCount] = useState(0);
  const [score,setScore] = useState(0)
  const [hasAnswered, setHasAnswered] = useState(false)
  function handleNextButton() {
    if (count < questions.length - 1) {
      setHasAnswered(false)
      setCount(count + 1);
    } else {
      setCount(count);
    }
  }
  function handlePrevButton() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  }
  function verifyResult(option){
    if(!hasAnswered){
      if(option === questions[count].correctAnswer){
          setScore(score+1)
      }
    }
      setHasAnswered(true)

  }
  return (
    <div className="flex flex-col items-center my-5">
      <h1 className="font-bold text-3xl">Quiz</h1>
      <h2>Score:{score}</h2>
      <span className="my-3">
        Question{questions[count].id} : {questions[count].title}
      </span>
      <span className="flex flex-wrap gap-5">
        {questions[count].options.map((option) => (
          <div >
            <input type="button" value={option}  className=" border-1 px-2 py-1 " onClick={() => verifyResult(option)}/>
          </div>
        ))}
      </span>
      <span className="flex gap-2 my-5">
        <button onClick={handlePrevButton}>Prev</button>
        <button onClick={handleNextButton}>Next</button>
      </span>
    </div>
  );
}

export default App;
