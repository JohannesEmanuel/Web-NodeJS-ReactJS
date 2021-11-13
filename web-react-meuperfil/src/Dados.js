import React, { Component } from 'react';
import './Dados.css';

class Dados extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(){
    this.setState({
      nome: 'Johannes Emanuel Silva de Almeida',
      dados: 'johannesemanuelsilva@gmail.com | (13)981732929 | Santos - SP',
      formacao: 'Cursando Ciência da Computação na UNIP e conclui curso de inglês',
      exp: 'Possuo conhecimento em C++, PYTHON, ReactJS, HTML, Javascript e Banco de Dados',
      projeto: 'No momento não possuo nenhum projeto'
    });
  }
 
  render(){
    return(
      <div>
        <center>
          <button onClick={this.entrar}>Entrar</button>
          <h1>{this.state.nome}</h1>
          <h2>{this.state.dados}</h2>
          <h3>{this.state.formacao}</h3>
          <h4>{this.state.exp}</h4>
          <h5>{this.state.projeto}</h5>
        </center>
      </div>
    );
  }
}
 
export default Dados;