import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import CowList from './cowList';
import AddCowForm from './addCowForm';
import CowDetails from './cowDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowList: [],
      highlightedCow: {},
    };
    this.addDataToDB = this.addDataToDB.bind(this);
    this.setHighlightedCow = this.setHighlightedCow.bind(this);
  }

  getDataFromDB() {
    axios.get('/api/cows')
         .then((res) => { this.setState({ cowList: res.data }) })
         .catch((err) => { console.log(err) });
  }

  componentDidMount() {
    this.getDataFromDB();
  }

  addDataToDB({name, description}) {
    axios.post('/api/cows', { name, description })
         .then(() => { this.getDataFromDB() } )
         .catch((err) => { console.log(err) });
  }

  setHighlightedCow(name, description) {
    this.setState({ highlightedCow: { name, description } })
  }

  render() {
    return (
    <div>
      <h2 className='main-title'>Cow List</h2>
      <AddCowForm clickHandler = { this.addDataToDB } />
      { this.state.highlightedCow.name ? <CowDetails name={this.state.highlightedCow.name} description={this.state.highlightedCow.description}/> : <div></div> }
      <CowList cows = { this.state.cowList } clickHandler={ this.setHighlightedCow }/>
    </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);