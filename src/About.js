import React from 'react';
import { Col } from 'react-bootstrap'
import './About.css'
import SkillCloud from './resume/SkillCloud'
import MyTimeline from './resume/MyTimeline'
import SectionHeader from './resume/SectionHeader'
import DonutChart from './resume/DonutChart'
import TagPill from './resume/TagPill'
import Timeline from './resume/Timeline'
import Icon from './resume/Icon'



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
            <li><Icon name='phone'/> +1 (617) 834-1062</li>
            <li><Icon name='location'/> Boston, MA</li>
            <li><Icon name='website'/> clairesun.com</li>
            <li><Icon name='email'/> clairesunstudio@gmail.com</li>
            <li><Icon name='github'/> @clairesunstudio</li>
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
          <SectionHeader>Education<Icon name='education'/></SectionHeader>
              <Timeline/>
          <SectionHeader>Experience<Icon name='job'/></SectionHeader>
          <Timeline/>
          <SectionHeader>Projects<Icon name='project'/></SectionHeader>
          <Timeline/>
          <SectionHeader>volunteer<Icon name='volunteer'/></SectionHeader>
          <Timeline/>
          </Col>
        </div>
      </div>
    )
  }
}
