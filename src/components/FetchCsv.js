import Papa from 'papaparse';
import React, { Component } from 'react';
import csvFile from '../Book.csv';

let data = Papa.parse(csvFile, {
  download: true,
  complete: function (input) {
    const records = input.data;
    data = records;
    console.log(records)
  }
});

let category;
let suggestion;

class FetchCsv extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    for (var i = 0; i < data.length; i++) {
      if (this.state.value === data[i][0]) {
        category = data[i][2];
        //console.log(category);
      }
    }
    for (var i = 0; i < data.length; i++) {
      if ((data[i][2] === category) && (data[i][0] != this.state.value)) {
        console.log(data[i][0]);
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FetchCsv