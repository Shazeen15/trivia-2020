import React, { useState } from "react";
import "./questions.css";

export default function Questions(props) {
  const { trivia } = props;
  const [tenQuest] = useState([]);
  const [selectedAns, setSelectedAns] = useState("");
  const [currentQuest, setCurrentQuest] = useState(0);
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(true);
  const [correctAns, setCorrectAns] = useState(false);
  const [wrongAns, setWrongAns] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [submit, setSubmit] = useState(false);

  const startTrivia = () => {
    //   still need to make each question unique
    setStart(false);
    for (let i = 0; i < 10; i++) {
      let randoQuest = Math.floor(Math.random() * 10);
      tenQuest.push(trivia[randoQuest]);
    }
  };

  console.log(tenQuest);
  const handleNextBtn = (e) => {
    const next = currentQuest + 1;
    if (next < tenQuest.length) {
      setCurrentQuest(next);
    } else {
      setSubmit(true);
    }
    setSelectedAns("");
    setCorrectAns(false);
    setWrongAns(false);
    setBtnDisabled(false);
    setNextBtnDisabled(true);
  };

  const correctAnswer = (e) => {
    setSelectedAns(e.target.firstChild.data);
    if (tenQuest[currentQuest].correct === e.target.firstChild.data) {
      setCorrectAns(true);
      setScore(score + 1);
    } else {
      setCorrectAns(true);
      setWrongAns(true);
    }
    setBtnDisabled(true);
    setNextBtnDisabled(false);
  };

  const retryBtn = () => {
    setCurrentQuest(0);
    setScore(0);
    setStart(true);
    setSubmit(false);
    setCorrectAns(false);
    setWrongAns(false);
    setBtnDisabled(false);
    setNextBtnDisabled(true);
  };

  return (
    <div>
      {start ? (
        <button onClick={startTrivia}>Start Trivia</button>
      ) : (
        <>
          {submit ? (
            ""
          ) : (
            <>
              <h2>Questions</h2>
              <h2 className="question">
                {tenQuest[currentQuest].question} {currentQuest + 1}/ 10
              </h2>
              <p>
                Selected Answer:{" "}
                {selectedAns ? selectedAns : "Please select an answer"}
              </p>
              <div className="answer-options">
                {tenQuest[currentQuest].incorrect.map((option) => {
                  return (
                    <button
                      key={option}
                      onClick={correctAnswer}
                      className={wrongAns ? "wrong" : ""}
                      disabled={btnDisabled}
                    >
                      {option}
                    </button>
                  );
                })}
                <button
                  onClick={correctAnswer}
                  className={correctAns ? "correct" : ""}
                  disabled={btnDisabled}
                >
                  {tenQuest[currentQuest].correct}
                </button>
              </div>
              <div className="next-btn">
                <button
                  type="submit"
                  className="next-btn"
                  onClick={handleNextBtn}
                  disabled={nextBtnDisabled}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </>
      )}
      {submit && (
        <div className="score">
          <h5>
            You scored {score}/{tenQuest.length}
          </h5>
          <button onClick={retryBtn}>Retry</button>
        </div>
      )}
    </div>
  );
}
