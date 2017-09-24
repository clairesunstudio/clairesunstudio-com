import React from 'react'
import { Col, Button } from 'react-bootstrap'
import './Header.css'

const Header = ({title,subtitle, live_site}) => {
  console.log(live_site)

    return (
      <header className="header-bar">
        <div className="container">
          <div className="row">
            <Col md={8} className="content">
              <h1>{title}</h1>
              <h3>{subtitle}</h3>
              <Button href={live_site}>Visit Live Site</Button>
            </Col>
          </div>
        </div>
      </header>
    );
}

export default Header
