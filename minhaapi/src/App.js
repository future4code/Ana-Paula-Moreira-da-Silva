
import React from "react";
import "./App.css";
import axios from 'axios'

export default class App extends React.Component {
  state = {
    history: []
  }

  componentDidMount = () => {
    this.getHistory()
  }

  getHistory = () => {
    axios.get('https://api.spacexdata.com/v3/history')
    .then((resposta) => {
      this.setState({history: resposta.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Historical Events of SpaceX </h1>
        {this.state.history.map((history) => {
          return (
            <div key={history.id}>
              <h2>{history.title}</h2>
              <p>{history.details}</p>
             
              
              </div>
          )
        })}
      </div>
    );
  }
}
