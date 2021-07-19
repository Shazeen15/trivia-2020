import React, { useState } from "react";
import Questions from "./components/Questions";
import "./App.css";
import triviaQuestions from "./Apprentice_TandemFor400_Data.json";

function App() {
  const [trivia] = useState(triviaQuestions);
  const [tenQuest, setTenQuest] = useState([]);
  const [selectedAns, setSelectedAns] = useState("");
  const [currentQuest, setCurrentQuest] = useState(0);
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(true);
  const [correctAns, setCorrectAns] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [submit, setSubmit] = useState(false);

  const startTrivia = () => {
    setStart(false);
    let shuffledTrivia = trivia.sort(() => Math.random() - 0.5);
    setTenQuest(shuffledTrivia.slice(1, 11));
  };

  const correctAnswer = (e) => {
    setSelectedAns(e.target.firstChild.data);
    if (tenQuest[currentQuest].correct === e.target.firstChild.data) {
      setScore(score + 1);
    }
    setCorrectAns(true);
    setBtnDisabled(true);
    setNextBtnDisabled(false);
  };

  const handleNextBtn = (e) => {
    const next = currentQuest + 1;
    if (next < tenQuest.length) {
      setCurrentQuest(next);
    } else {
      setSubmit(true);
    }
    setSelectedAns("");
    setCorrectAns(false);
    setBtnDisabled(false);
    setNextBtnDisabled(true);
  };

  const retryBtn = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1>Tandem Trivia</h1>
      <Questions
        startTrivia={startTrivia}
        handleNextBtn={handleNextBtn}
        correctAnswer={correctAnswer}
        retryBtn={retryBtn}
        start={start}
        submit={submit}
        tenQuest={tenQuest[currentQuest]}
        selectedAns={selectedAns}
        btnDisabled={btnDisabled}
        correctAns={correctAns}
        nextBtnDisabled={nextBtnDisabled}
        score={score}
        currentQuest={currentQuest}
        tenQuests={tenQuest}
      />
    </div>
  );
}

export default App;
