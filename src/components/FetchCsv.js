import React, { useState } from 'react';
import * as Papa from 'papaparse';

// 0Title, 1Isbn, 2CcbcCollection, 3Genres, 4Publisher, 5Subject, 6Contributors, 7ContributorTypes, 8Contributor Identity

function FetchCsv() {
  const [text, setText] = useState();

  const load = function () {
    fetch('./Book.csv')
      .then(response => response.text())
      .then(responseText => {
        // -- parse csv
        var data = Papa.parse(responseText);
        setText(responseText);
        console.log('data:', data);
      })
  };

  return (
    <div>
      <button onClick={load}>load</button>
      <h2>text:</h2>
      <pre>{text}</pre>
    </div>
  );
}
export default FetchCsv;