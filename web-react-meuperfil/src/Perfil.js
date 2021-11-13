import React, { Component } from 'react';
import './Perfil.css';

class Perfil extends Component {
    render() {
  
      let img = 'https://cdn.discordapp.com/attachments/418514742248734720/895429412143661106/IMG_20210925_170725.jpg';

      return (
        <img src={img} width={200} height={200} />
      );
    }
  }

  export default Perfil;