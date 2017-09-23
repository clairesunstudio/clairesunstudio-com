import React from 'react';

export default class Card extends React.Component {

  render() {
    const {url, name} = this.props.item
    const itemStyle = {
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundColor: '#555',
      backgroundImage: `url('images/${url}')`
    };
    return <div
            style={itemStyle}
            className="gridItem"><span className="name">{name}</span></div>;
  }
}
