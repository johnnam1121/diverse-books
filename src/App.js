import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

import FetchCsv from './components/FetchCsv';

class App extends React.Component {

  render() {
    return (
      <div >
        <FetchCsv />
      </div>
    )
  }
}

export default App
