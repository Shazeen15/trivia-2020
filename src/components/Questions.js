import React, { useState } from "react";
import "./questions.css";

export default function Questions(props) {
  const {
    startTrivia,
    handleNextBtn,
    correctAnswer,
    retryBtn,
    start,
    submit,
    tenQuest,
    selectedAns,
    wrongAns,
    btnDisabled,
    correctAns,
    nextBtnDisabled,
    score,
    currentQuest,
    tenQuests,
  } = props;

  const shuffledAnswers =
    tenQuests.length > 0 &&
    [...tenQuest.incorrect, tenQuest.correct].sort(() => Math.random() - 0.5);

  return (
    <div>
      {start ? (
        <button onClick={startTrivia}>Start Trivia</button>
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
                {shuffledAnswers.map((answer) => (
                  <button
                    onClick={correctAnswer}
                    disabled={btnDisabled}
                    className={tenQuest.correct === answer ? "correct" : ""}
                  >
                    {answer}
                  </button>
                ))}
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
    </div>
  );
}
