import React, { useState, useEffect } from "react";
import "./questions.css";

export default function Questions({
  startTrivia,
  handleNextBtn,
  correctAnswer,
  retryBtn,
  start,
  submit,
  tenQuest,
  selectedAns,
  btnDisabled,
  correctAns,
  nextBtnDisabled,
  score,
  currentQuest,
  tenQuests,
}) {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  useEffect(() => {
    tenQuests.length &&
      setShuffledAnswers(
        [...tenQuest.incorrect, tenQuest.correct].sort(
          () => Math.random() - 0.5
        )
      );
  }, [tenQuest, tenQuests.length]);

  return (
    <div>
      {start ? (
        <button onClick={startTrivia} className="startBtn">
          Start Trivia
        </button>
      ) : (
        <>
          {submit ? (
            <div className="score">
              <h5>
                You scored {score}/{tenQuests.length}
              </h5>
              <button onClick={retryBtn}>Retry</button>
            </div>
          ) : (
            <>
              <h2>Questions</h2>
              <h2 className="question">
                {tenQuest.question} {currentQuest + 1}/ 10
              </h2>
              <p>
                Selected Answer:{" "}
                {selectedAns ? selectedAns : "Please select an answer"}
              </p>
              <div className="answer-options">
                {shuffledAnswers.map((answer) => {
                  let showCorrectAnswer = correctAns
                    ? answer === tenQuest.correct
                      ? "correct"
                      : "incorrect"
                    : "";
                  return (
                    <button
                      className={`${showCorrectAnswer}`}
                      key={answer}
                      onClick={correctAnswer}
                      disabled={btnDisabled}
                    >
                      {answer}
                    </button>
                  );
                })}
              </div>
              <div>
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
    </div>
  );
}
