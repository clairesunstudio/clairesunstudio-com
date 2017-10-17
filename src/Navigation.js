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
      width:30,height:30, margin:3
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
            <SocialMedia socialIconStyle={socialIconStyle} socialIconColor={socialIconColor}/>
            <li><Link to="/about">Resume</Link></li>
          </Nav>
      </Navbar>
    )
  }

}

export default Header
