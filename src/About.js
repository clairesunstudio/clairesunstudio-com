import React from 'react';
import { Col } from 'react-bootstrap'
import './About.css'
import SkillCloud from './resume/SkillCloud'
import MyTimeline from './resume/MyTimeline'
import SectionHeader from './resume/SectionHeader'



export default class About extends React.Component {

  render() {
    const profileStyle = {
      backgroundImage: `url('assets/profile-pic.jpg')`
    };

    return (
      <div className="resume_container">
        <header className="header-bar thin"></header>
        <div className="container">
          <Col md={5} className="about">
            <div className="profile_pic" style={profileStyle}></div>
            <h2>Minghua Sun</h2>
            <h4>UI/UX/Data Visualization Designer Developer</h4>
            <hr/>
            <ul className="info_list">
            <li><img src="assets/icons/phone.svg"/> +1 (617) 834-1062</li>
            <li><img src="assets/icons/location.svg"/> Boston, MA</li>
            <li><img src="assets/icons/website.svg"/> clairesun.com</li>
            <li><img src="assets/icons/email.svg"/> clairesunstudio@gmail.com</li>
            <li><img src="assets/icons/github.svg"/> @clairesunstudio</li>
            </ul>
            <SectionHeader>SkillCloud</SectionHeader>
            <SkillCloud/>
            <SectionHeader>ADOBE proficiency</SectionHeader>
            <SectionHeader>languages</SectionHeader>
          </Col>
          <Col md={7}>
            <MyTimeline/>
          </Col>
        </div>
      </div>
    )
  }
}
