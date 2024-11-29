import React from "react";

function Flashcard({ card, toggleAnswer, deleteFlashcard }) {
  return (
    <div className="flashcard">
      <p><strong>Question:</strong> {card.question}</p>
      <button onClick={() => toggleAnswer(card.id)}>
        {card.showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
      {card.showAnswer && <p><strong>Answer:</strong> {card.answer}</p>}
      <button onClick={() => deleteFlashcard(card.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
}

export default Flashcard;
