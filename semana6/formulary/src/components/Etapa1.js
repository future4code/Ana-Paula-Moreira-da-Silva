import React from "react";

export default class Etapa1 extends React.Component{
    render() {
        return (
            <div>
              <h2>ETAPA 1 - DADOS GERAIS</h2>
              <p>1. Qual seu nome?</p>
              <input></input>
              <p>2. Qual sua idade?</p>
              <input></input>
              <p>3. Qual seu email?</p>
              <input></input>
              <p>3. Qual sua escolaridade?</p>
              <select name="escolaridade">
        <option value=" médio incompleto">Ensino médio incompleto</option>
        <option value=" médio completo">Ensino médio completo</option>
        <option value=" superior incompleto">Ensino superior incompleto</option>
        <option value=" superior completo">Ensino superior completo</option>
        </select>
        </div>
        );     
    }
}



