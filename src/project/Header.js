import React from 'react'
import { Col, Button } from 'react-bootstrap'
import './Header.css'


const LiveSite = ({live_site}) => {
  if (live_site != "") {
    return <Button className="btn-project" href={live_site}>Visit Live Site</Button>
  } else {
    return null
  }
}

const Header = ({title,subtitle, live_site}) => {

    return (
      <header className="header-bar">
        <div className="container">
          <div className="row">
            <Col md={8} className="content">
              <h1>{title}</h1>
              <hr />
              <h3>{subtitle}</h3>
              <LiveSite live_site={live_site} />
            </Col>
          </div>
        </div>
      </header>
    );
}

export default Header
