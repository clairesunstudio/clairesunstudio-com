import React from 'react';
import { Col } from 'react-bootstrap'
import './About.css'
import SkillCloud from './resume/SkillCloud'
import MyTimeline from './resume/MyTimeline'
import SectionHeader from './resume/SectionHeader'
import DonutChart from './resume/DonutChart'
import TagPill from './resume/TagPill'
import Timeline from './resume/Timeline'



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
            <DonutChart/>
            <SectionHeader>languages</SectionHeader>
            <TagPill />
          </Col>
          <Col md={1} />
          <Col md={6}>
          <SectionHeader>Education<img src='assets/icons/education.svg'/></SectionHeader>
              <Timeline/>
          <SectionHeader>Experience<img src='assets/icons/job.svg'/></SectionHeader>
          <Timeline/>
          <SectionHeader>Projects<img src='assets/icons/project.svg'/></SectionHeader>
          <Timeline/>
          <SectionHeader>volunteer<img src='assets/icons/volunteer.svg'/></SectionHeader>
          <Timeline/>
          </Col>
        </div>
      </div>
    )
  }
}
