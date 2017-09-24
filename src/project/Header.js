import React from 'react'
import { Col } from 'react-bootstrap'
import './Header.css'

const Header = ({title,subtitle}) => {
  console.log(subtitle)
    return (
      <header className="header-bar">
        <div className="container">
          <div className="row">
            <Col md={8} className="content">
              <h1>{title}</h1>
              <h3>{subtitle}</h3>
            </Col>
          </div>
        </div>
      </header>
    );
}

export default Header
