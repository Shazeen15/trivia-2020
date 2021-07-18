import React, { useState } from "react";
import Questions from "./components/Questions";
import "./App.css";
import triviaQuestions from "./Apprentice_TandemFor400_Data.json";

function App() {
  const [trivia] = useState(triviaQuestions);
  // console.log(trivia);
  return (
    <div>
      <h1>Tandem Trivia</h1>
      <Questions trivia={trivia} />
    </div>
  );
}

export default App;
