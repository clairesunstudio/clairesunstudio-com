import React from 'react';
import './About.css'

export default class About extends React.Component {

  render() {
    return (
      <div className="resume_container">
      <iframe src="http://docs.google.com/gview?url=https://clairesunstudio.github.io/img/minghua-resume.pdf&embedded=true"
      style={{width:800, height:1100}} frameborder="0"></iframe>
      </div>
    )
  }
}
