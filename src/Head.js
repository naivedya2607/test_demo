import React ,{Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Head extends Component {
onLogin(){
  this.props.onLogin();

}
onLogout(){
  this.props.onLogout();
}

  render(){
    let page;
    if(this.props.token){
    page=<button className="loginout" onClick={this.onLogout.bind(this)} href="#"><i className="fa fa-sign-out fa-fw"></i>Logout</button>
    }

    else{
    page=<button className="loginout" onClick={this.onLogin.bind(this)} href="#"><i className="fa fa-sign-out fa-fw"></i>Login </button>
    }

    return(
        <Navbar className="nav">
            <Navbar.Brand>
            <img className="heading" src= 'https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg'/>
              <strong>Movie Search</strong>
            </Navbar.Brand>
          <Nav>
          <ul>
          {page}
          <strong>Login to search movies</strong>
          </ul>
          </Nav>
        </Navbar>
    );
  }
}

export default Head;
