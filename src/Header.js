import React from 'react'
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import $ from 'jquery'

class Header extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        fixedTop: false
      };
      this.handleScroll = this.handleScroll.bind(this);
    }

      handleScroll() {
      if ($(window).scrollTop() >=  50) {
         $('nav').addClass('shrink');
        this.setState({
          fixedTop: true
        });
      } else {
        $('nav').removeClass('shrink');
        this.setState({
          fixedTop: false
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
    const {fixedTop} = this.state
    return(
      <Navbar collapseOnSelect fixedTop={fixedTop}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">clairesunstudio</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">About</NavItem>
            <NavItem eventKey={2} href="#">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

}

export default Header
