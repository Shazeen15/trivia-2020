import React, { useState } from "react";
import Questions from "./components/Questions";
import "./App.css";
import triviaQuestions from "./Apprentice_TandemFor400_Data.json";

function App() {
  const [trivia] = useState(triviaQuestions);
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
        wrongAns={wrongAns}
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
