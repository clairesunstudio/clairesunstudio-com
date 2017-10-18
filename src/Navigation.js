import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SocialMedia from './SocialMedia'
import $ from 'jquery'
import './Navigation.css'

class Header extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        fixedTop: false,
        brandName: 'clairesunstudio',
        connect: 'collapsed'
      };
      this.handleScroll = this.handleScroll.bind(this);
    }

      handleScroll() {
      if ($(window).scrollTop() >=  50) {
        this.setState({
          fixedTop: true,
          brandName: 'css'
        });
      } else {
        this.setState({
          fixedTop: false,
          brandName: 'clairesunstudio'
        });
      }
    }

    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
    onConnectClick(){
      this.state.connect == 'collapsed'? this.setState({connect: 'expanded'}): this.setState({connect: 'collapsed'})
    }

  render(){
    const {fixedTop, brandName, connect} = this.state
    const socialIconStyle ={
      width:30,height:30, margin:3
    }
    const socialIconColor = "#263238"
    return(
      <Navbar className={connect} fixedTop={fixedTop}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">{brandName}</Link>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav pullRight>
            <li><Link to="/about">Resume</Link></li>
            <li className="social-media-collapsed" onClick={()=>this.onConnectClick()}><a>Connect</a></li>
            <SocialMedia socialIconStyle={socialIconStyle} socialIconColor={socialIconColor} collapsed={connect}/>
          </Nav>
      </Navbar>
    )
  }

}

export default Header
