import React from 'react'
import './Footer.css'
import SocialMedia from './SocialMedia'
import { Col } from 'react-bootstrap'

class Footer extends React.Component{

  render = () =>  {
    const socialIconStyle ={
      width:30,height:30, margin:3
    }
    const socialIconColor = "#fff"
    return (
      <footer>
        <div className="container">
            <Col sm={6}>
                <p><strong>© 2017 Claire Sun Studio </strong></p>
            </Col>
            <Col sm={6}>
            <SocialMedia socialIconStyle={socialIconStyle} socialIconColor={socialIconColor}/>
            </Col>
        </div>
      </footer>

    );
  };
}

export default Footer
