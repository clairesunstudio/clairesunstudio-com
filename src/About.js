import React from 'react';
import { Col } from 'react-bootstrap'
import './About.css'
import { TagCloud } from "react-tagcloud";



export default class About extends React.Component {

  render() {
    const profileStyle = {
      backgroundImage: `url('assets/profile-pic.jpg')`
    };
    const color = `#263238`
    const data = [
      {value: "Atomic Design", count:15, color:{color}},
      {value: "Rapid Prototyping", count:18, color:{color}},
      {value: "Data Visualization", count:30, color:{color}},
      {value: "Front End Development", count:30, color:{color}},
      {value: "User Research", count:16, color:{color}},
      {value: "UX Design", count:30, color:{color}},
      {value: "Installation Art", count:20, color:{color}},
      {value: "Animation", count:20, color:{color}},
      {value: "UI Design", count:20, color:{color}},
      {value: "Branding", count:20, color:{color}},
      {value: "Marketing Campaign", count:15, color:{color}},
      {value: "Design Thinking", count:20, color:{color}},
      {value: "Social Media", count:20, color:{color}},
      {value: "Storytelling", count:20, color:{color}},
      {value: "Data Analytics", count:20, color:{color}},
      {value: "Interaction Design", count:20, color:{color}},
      {value: "Agile", count:13, color:{color}},
      {value: "Project Management", count:10, color:{color}},
      {value: "Accessibility", count:15, color:{color}}
    ];

    return (
      <div className="resume_container">
        <header className="header-bar thin"></header>
        <div className="container">
          <Col md={5} className="about">
            <div className="profile_pic" style={profileStyle}></div>
            <h2>Minghua Sun</h2>
            <h4>UI/UX/Data Visualization Designer Developer</h4>
            <ul className="info_list">
            <li><img src="assets/icons/phone.svg"/> +1 (617) 834-1062</li>
            <li><img src="assets/icons/location.svg"/> Boston, MA</li>
            <li><img src="assets/icons/website.svg"/> clairesun.com</li>
            <li><img src="assets/icons/email.svg"/> clairesunstudio@gmail.com</li>
            <li><img src="assets/icons/github.svg"/> @clairesunstudio</li>
            </ul>
            <TagCloud minSize={10}
                      maxSize={30}
                      tags={data} />
          </Col>
          </Col>
        </div>
      </div>
    )
  }
}
