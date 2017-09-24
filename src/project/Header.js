import React from 'react'
import './Header.css'

class Header extends React.Component{
  constructor(props) {
    super(props);
  }
  render = () =>  {
    const projectId = this.props.projectId
    const itemStyle = {

      //background: `linear-gradient(angle, rgba(#f6c51b,0.5)), url('images/${projectId}.jpg')`
      //backgroundImage: `url('images/${projectId}.jpg')`
    };
    return (
      <header style={itemStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{this.props.projectId}</h1>
              <h3></h3>
            </div>
          </div>
        </div>
      </header>

    );
  };
}

export default Header
