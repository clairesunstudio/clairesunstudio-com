import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';
import $ from 'jquery'
import './Navigation.css'

class Header extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        fixedTop: false,
        brandName: 'clairesunstudio'
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

  render(){
    const {fixedTop, brandName} = this.state
    const socialIconStyle ={
      width:30,height:30, margin:3, marginTop:10
    }
    const socialIconColor = "#263238"
    return(
      <Navbar collapseOnSelect fixedTop={fixedTop}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">{brandName}</Link>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav pullRight>
            <li><Link to="/about">Resume</Link></li>
            <SocialIcon style={socialIconStyle} color={socialIconColor} url="https://www.linkedin.com/in/minghuasun/" />
            <SocialIcon style={socialIconStyle} color={socialIconColor} url="http://github.com/clairesunstudio" />
            <SocialIcon style={socialIconStyle} color={socialIconColor} url="https://www.facebook.com/clairesunstudio" />
            <SocialIcon style={socialIconStyle} color={socialIconColor} url="https://www.twitter.com/iamclairesun" />
            <SocialIcon style={socialIconStyle} color={socialIconColor} url="https://www.instagram.com/clairelilbear" />
            <SocialIcon style={socialIconStyle} color={socialIconColor} network="email" url="mailto:clairesunstudio@gmail.com" />
          </Nav>
      </Navbar>
    )
  }

}

export default Header
