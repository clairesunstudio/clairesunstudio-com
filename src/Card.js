import React from 'react';
import './Card.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Modernizr from './scripts/modernizr'
import $ from 'jquery'

export default class Card extends React.Component {
  onCardClick(){
    if(Modernizr.touch){
      $('.gridItem').on('click', function(e){
        var $card = $(this);
        console.log(e)
        $card.addClass('hover').siblings().removeClass('hover');
      });
    }
  }
  render() {

    const {url, name, description} = this.props.item
    const itemStyle = {
      backgroundImage: `url('images/${url}.jpg')`
    };
    return <div onClick={this.onCardClick} style={itemStyle} className="gridItem">
              <div className="gridItem__cover">
                <div className="gridItem__cover-content">
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <Link to={`/${url}`}><Button bsStyle="default">Learn More</Button></Link>
                </div>
              </div>
            </div>
  }
}
