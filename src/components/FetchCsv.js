import React, { useState } from 'react';
import * as Papa from 'papaparse';

// 0Title, 1Isbn, 2CcbcCollection, 3Genres, 4Publisher, 5Subject, 6Contributors, 7ContributorTypes, 8Contributor Identity

function FetchCsv() {
  const [text, setText] = useState();
  const [book, setBook] = useState("");
  const [suggestion, setsuggestion] = useState("");
  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  let dataList;
  function handleSubmit(event) {
    event.preventDefault();
    fetch('./Book.csv')
      .then(response => response.text())
      .then(responseText => {
        // -- parse csv
        var data = Papa.parse(responseText);
        setText(responseText);
        dataList = data.data;
        console.log(dataList);

        let bookList = [];
        let count = 0;
        let pickRandom;
        let genreList = [];
        for (var i = 0; i < dataList.length; i++) {
          if (dataList[i][0].toLowerCase().includes(book)) {
            bookList[count] = dataList[i][0];
            genreList[count] = dataList[i][3];
            count++
            // console.log(book);
            // console.log(dataList[i][0]);
          }
        }
        // too lazy so just pick one random book if multiple books
        pickRandom = Math.floor(Math.random() * bookList.length);
        setText(bookList[pickRandom]);

        let currentBookGenres;
        for (var i = 0; i < genreList.length; i++) {
          currentBookGenres = genreList[i];
        }
        currentBookGenres = currentBookGenres.split(/[.\,-=/_]/);
        // console.log('currentBookGenres', currentBookGenres)

        let bookSuggestions = [];
        let authors = [];
        let bookSuggestionsCounter = 0;
        console.log(currentBookGenres.length)
        for (var i = 0; i < dataList.length - 1; i++) {
          for (var j = 0; j < currentBookGenres.length - 1; j++) {
            if (dataList[i][3].includes(currentBookGenres[j])) {
              if (bookSuggestions[bookSuggestionsCounter] != dataList[i][0]) {
                bookSuggestions[bookSuggestionsCounter] = dataList[i][0];
                authors[bookSuggestionsCounter] = dataList[i][6];
                bookSuggestionsCounter++;
              }
            }
          }
        }

        let removeBookDupes = [...new Set(bookSuggestions)]
        let removeAuthorDupes = [...new Set(authors)]

        // console.log(removeBookDupes)
        // console.log(removeAuthorDupes)
        pickRandom = Math.floor(Math.random(1) * bookSuggestions.length);
        setsuggestion(bookSuggestions[pickRandom]);

      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Type something..." type="text" />
        <input type="submit" value="Search" className="btn btn-primary search-btn" />
      </form>
      <h2>text:</h2>
      <pre>{text}</pre>
      <pre>{suggestion}</pre>
    </div>
  );
}
export default FetchCsv;