import React, { useState } from "react";
import './App.css';  // Make sure this line is present

import FlashcardList from "./components/FlashcardList";
import FlashcardForm from "./components/FlashcardForm";

function App() {
  const [flashcards, setFlashcards] = useState([]);

  // Add a new flashcard
  const addFlashcard = (question, answer) => {
    setFlashcards([
      ...flashcards,
      { id: Date.now(), question, answer, showAnswer: false },
    ]);
  };

  // Toggle the answer visibility
  const toggleAnswer = (id) => {
    setFlashcards(
      flashcards.map((card) =>
        card.id === id ? { ...card, showAnswer: !card.showAnswer } : card
      )
    );
  };

  // Delete a flashcard
  const deleteFlashcard = (id) => {
    setFlashcards(flashcards.filter((card) => card.id !== id));
  };

  return (
    <div className="App">
      <h1>Flashcards App</h1>
      <FlashcardForm addFlashcard={addFlashcard} />
      <FlashcardList
        flashcards={flashcards}
        toggleAnswer={toggleAnswer}
        deleteFlashcard={deleteFlashcard}
      />
    </div>
  );
}

export default App;
