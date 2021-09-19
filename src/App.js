import React, { useState } from "react";
import "./styles.css";

const bookDB = {
  Discovering_Yourself: [
    { name: "Quiet", rating: "4/5" },
    { name: "Man's Search For Meaning", rating: "3.5/5" },
    { name: "The Art of Thinking", rating: "4/5" }
  ],

  Money_And_Investing: [
    { name: "Think and Grow Rich", rating: "5/5" },
    { name: "The Little Book of Common Sense Investing", rating: "3/5" },
    { name: "The Psychology of Money", rating: "3.5/5" }
  ],
  Psychological_Thrillers: [
    { name: "Before I Go To Sleep", rating: "4/5" },
    { name: "The Silent Patient", rating: "3/5" },
    { name: "7 Khoon Maaf", rating: "3.5/5" }
  ]
};

export default function App() {
  const [chosenGenre, setGenre] = useState("Discovering_Yourself");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Book Recommendation App 📚</h1>
      <h3>Hello! checkout my favourite books</h3>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div style={{ width: "50%", margin: "auto" }}>
        <ul>
          {bookDB[chosenGenre].map((book) => (
            <li key={book.name}>
              <div> {book.name} </div>
              <div> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
