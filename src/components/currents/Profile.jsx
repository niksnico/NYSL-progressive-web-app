import React, { Component } from 'react';
import user from '../../assets/icons/user.png';
import tel from '../../assets/icons/tel.png';
import email from '../../assets/icons/email.png';
import '../../css/profile.css';


class Profile extends Component {

constructor(props){
  super(props)
  this.state = {
user:this.props.user
  }
}

  render() {
    return (
      <div id="perfilDiv" className="Perfil">
        <div className="perfilDiv">
          <img alt="perfil" src="#" className="perfilPic" />
        </div>
        <div>
    <h2>{user.displayName}</h2>
        </div>
        <div className="perfilDeUsuario">
          <div>
            <img alt="userInfo" src={user} className="datosPersonales"></img>
            <p>   Acá va info.</p>
          </div>
          <div>
            <img alt="phoneNumber" src={tel} className="datosPersonales"></img>
            <p>   Acá va info.</p>
          </div>
          <div>
            <img alt="email" src={email} className="datosPersonales"></img>
    <p>{user.email}</p>
          </div>
        </div>
      </div>
    );
  }
}
  
export default Profile;
