import React from 'react'
import './Footer.css'
import { SocialIcon } from 'react-social-icons';
import { Col } from 'react-bootstrap'

class Footer extends React.Component{

  render = () =>  {
    const socialIconStyle ={
      width:30,height:30, margin:3
    }
    return (
      <footer>
        <div className="container">
            <Col md={6}>
                <p><strong>© 2017 Claire Sun Studio </strong></p>
            </Col>
            <Col md={6}>
              <SocialIcon style={socialIconStyle} color="#fff" url="https://www.linkedin.com/in/minghuasun/" />
              <SocialIcon style={socialIconStyle} color="#fff" url="http://github.com/clairesunstudio" />
              <SocialIcon style={socialIconStyle} color="#fff" url="https://www.facebook.com/clairesunstudio" />
              <SocialIcon style={socialIconStyle} color="#fff" url="https://www.twitter.com/iamclairesun" />
              <SocialIcon style={socialIconStyle} color="#fff" url="https://www.instagram.com/clairelilbear" />
              <SocialIcon style={socialIconStyle} color="#fff" network="email" url="mailto:clairesunstudio@gmail.com" />
            </Col>
        </div>
      </footer>

    );
  };
}

export default Footer
