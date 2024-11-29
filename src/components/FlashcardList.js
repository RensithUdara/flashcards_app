import React from "react";
import Flashcard from "./Flashcard";

function FlashcardList({ flashcards, toggleAnswer, deleteFlashcard }) {
  return (
    <div>
      <h2>My Flashcards</h2>
      {flashcards.length === 0 ? (
        <p>No flashcards available. Add some!</p>
      ) : (
        <ul>
          {flashcards.map((card) => (
            <li key={card.id}>
              <Flashcard
                card={card}
                toggleAnswer={toggleAnswer}
                deleteFlashcard={deleteFlashcard}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FlashcardList;
