import React from 'react';
import axios from 'axios';

export class Register extends React.Component {

    state = {
        inputName:'',
        inputEmail:''
      }
      handleInputeName = (event) => {
          this.setState({inputName:event.target.value})
      }

      handleInputeEmail = (event) => {
        this.setState({inputEmail:event.target.value})
    }
    createUser = () => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body,{
            headers: {
                Authorization: 'Ana-Moreira-epps'
            }
            
        })
         .then((resposta) => {
           console.log(resposta)
         })
         .catch((error)=> {
            console.log(error)
        })
    }

       

    render(){
        return (
        <div class="row">
            <form class="card">
                
               
                <h2>Cadastro</h2>
                <input placeholder='Nome' value={this.state.inputName} onChange={this.handleInputeName} />
                <input placeholder='E-mail' value={this.state.inputEmail} onChange={this.handleInputeEmail} />
                <div>
                <button onClick={this.createUser}>SALVAR</button>

                </div>
               
            </form>
        </div>
        )
    }
}
