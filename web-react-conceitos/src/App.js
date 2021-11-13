import React, { Component } from 'react';
import './App.css';
 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: 'Johannes'
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(){
    // this.state.nome = 'Johannes Emanuel'
    this.setState({
      nome: 'Johannes Emanuel'
    });
  }
 
  render(){
    return(
      <div>
        <center>
          <button onClick={this.entrar}>Entrar</button>
          <h1>{this.state.nome}</h1>
        </center>
      </div>
    );
  }
}
 
export default App;
