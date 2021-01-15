import React from "react";
import Etapa1 from './components/Etapa1.js'
import Etapa2 from './components/Etapa2.js'
import Etapa3 from './components/Etapa3.js'
import Final from './components/Final'

function App() {
  return (
    <div>
      <h1>ETAPA 1 - DADOS GERAIS</h1>
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

export default App;

