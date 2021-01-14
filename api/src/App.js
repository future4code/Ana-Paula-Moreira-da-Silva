import React from "react";
import './App.css';
import { Register } from "./pages/Register";


export default class App extends React.Component {
     

  render(){
    return (
      <div className="App">
        <h1>Faça seu Cadastro</h1>
        <Register/>
      </div>
    );
  }
}