import React from 'react';
import './Card.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//import './scripts/fixWidows'

export default class Card extends React.Component {

  render() {
    const {url, name, description} = this.props.item
    const itemStyle = {
      backgroundImage: `url('images/${url}.jpg')`
    };
    return <div style={itemStyle} className="gridItem">
              <div className="gridItem__cover">
                <div className="gridItem__cover-content">
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <Link to={`/${url}`}><Button bsStyle="default">Enter</Button></Link>
                </div>
              </div>
            </div>
  }
}
