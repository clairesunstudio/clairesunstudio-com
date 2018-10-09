import React from 'react';
import { Col } from 'react-bootstrap'
import './About.css'
import SkillCloud from './resume/SkillCloud'
import SectionHeader from './resume/SectionHeader'
import DonutChart from './resume/DonutChart'
import TagPill from './resume/TagPill'
import { Timeline, TimelineEvent } from './resume/Timeline'
import Icon from './resume/Icon'
import { Button } from 'react-bootstrap'



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
            <h4>Creative Technologist, UX Designer/Developer </h4>
            <p>I wear many hats in different projects, from playing the roles of a UI/UX designer and a React developer, to doing data analytics and making data visualization. I&apos;m the Product Owner of the Commonwealth Design System and I sometimes PM technical projects.</p>
            <Button bsStyle='tab' href="assets/minghua-resume.pdf" download="Minghua's Resume">Download PDF</Button>
            <ul className="info_list">
            <li><Icon name='phone'/><a href="tel:6178341062"> <span>+1 (617) 834-1062</span></a></li>
            <li><Icon name='location'/> Boston, MA</li>
            <li><Icon name='website'/><a href="http://www.clairesun.com"> <span>clairesun.com</span></a></li>
            <li><Icon name='email'/><a href="mailto:clairesunstudio@gmail.com"> <span>clairesunstudio@gmail.com</span></a></li>
            <li><Icon name='github'/><a href="https://github.com/clairesunstudio"> <span>@clairesunstudio</span></a></li>
            </ul>
            <SectionHeader>Design Tools proficiency</SectionHeader>
            <DonutChart/>
            <SectionHeader>SkillCloud</SectionHeader>
            <SkillCloud/>
            <SectionHeader>languages</SectionHeader>
            <TagPill />
          </Col>
          <Col md={1} />
          <Col md={6}>
          <SectionHeader>Education<Icon name='education'/></SectionHeader>
              <Timeline>
                <TimelineEvent title="Graduate Certificate in Interactive Design"
                               sub="Dynamic Media Institute, MassArt, Boston, MA"
                               date="May 2015">
                </TimelineEvent>
                <TimelineEvent title="Interactive Environment Group"
                               sub="MIT Media Lab, Cambridge, MA"
                               date="May 2015">
                </TimelineEvent>
                <TimelineEvent title="B.S. in Applied Mathematics, B.A. in Graphic Design"
                               sub="New England College, Henniker, NH"
                               date="May 2013">
                               <ul>
                                <li> Magna Cum Laude Graduate, GPA: 3.77/4.0</li>
                                <li> Academic Achievement Award for Mathematic Program</li>
                                <li> 4-year Presidential Scholarship and Dean’s List Recipient</li>
                                <li> National College Honor Scholarship Society (Alpha Chi) Member</li>
                               </ul>
                </TimelineEvent>
              </Timeline>
          <SectionHeader>Experience<Icon name='job'/></SectionHeader>
              <Timeline>
                <TimelineEvent title="UI/UX Designer & Developer"
                               sub="Digital Services, EOTSS, Commonwealth of Massachusetts"
                               date={["Present","May 2015"]}>
                               <ul>
                                <li> UI/UX design, web front end development</li>
                                <li> Analyze and visualize data for Mass.gov social media accounts</li>
                                <li> Lead public facing marketing campaign branding and visual design</li>
                                <li> Direct and mentor design interns</li>
                               </ul>
                </TimelineEvent>
                <TimelineEvent title="Visual Designer"
                               sub="Confucius Institute, UMass Boston"
                               date={["Mar. 2014","June 2015"]}>
                               <ul>
                                <li> Design and create promotional collateral</li>
                                <li> Chinese Bridge contest event filming and post productions</li>
                               </ul>
                </TimelineEvent>
                <TimelineEvent title="Web/Graphic Designer"
                               sub="StudentUniverse, Waltham"
                               date={["May 2014","Oct 2014"]}>
                               <ul>
                                <li> Assist in the wire-framing and front-end design of company’s new website</li>
                                <li> Design website visuals and marketing collateral</li>
                                <li> Create HTML email campaigns and landing pages</li>
                               </ul>
                </TimelineEvent>
                <TimelineEvent title="Design Internship"
                               sub=" NH Division of Economic Development, Concord, NH"
                               date={["Feb. 2014","Sep. 2013"]}>
                </TimelineEvent>
              </Timeline>
          <SectionHeader>Projects<Icon name='project'/></SectionHeader>
          <Timeline>
            <TimelineEvent title="The ABCs of High School Success"
                           sub="Mass.gov/SuccessABCs"
                           project="dese"
                           url="http://mass.gov/Chapter55"
                           date={["Launched","Oct. 2017"]}>
                          <p>
                          I worked closely with the Department of Education and Secondary Education on developing this interactive data story to highlight the impact of the ABCs by following a group of students from the time they entered 9th grade, to when each left or completed high school. In this project, my work includes storyboading with exisiting data, data visualization design, prototyping, website development and deployment and user testing. The site was built using React with a highly componentized front end and a light weight page load.
                          </p>
            </TimelineEvent>
            <TimelineEvent title="Redesigning Mass.gov"
                           sub="Mass.gov"
                           url="http://mass.gov/Chapter55"
                           date={["Launched","Sept. 2017"]}>
                           <ul>
                            <li> Work on design and front end development of the new Mass.gov and its design system 'Mayflower'</li>
                            <li> Research and build pilots on data visualization and search solutions</li>
                            <li> Extending the use of 'Mayflower' onto other web app and data dashboards</li>
                            <li> Vendor selection and RFR website construction</li>
                            <li> Quick wins on the classic Mass.gov homepage design and photo contest</li>
                           </ul>
            </TimelineEvent>
            <TimelineEvent title="Chapter 55"
                           sub="Mass.gov/Chapter55"
                           project="chapter55"
                           url="http://mass.gov/Chapter55"
                           date={["Launched","Dec. 2016"]}>
                          <p>
                          As the designer and developer of this interactive data story on the MA opioid epidemic, I worked from concept sketching, data visualization designing, prototyping, and iterating, into the final deployment. The code repository was also made public as the pilot project of Mass.gov’s open-source initiative. This project received the Innovation in Data Science Award at the Massachusetts Digital Government Summit 2017.
                          </p>
            </TimelineEvent>
            <TimelineEvent title="Artificial Bioluminescence"
                           project="freshmedia1"
                           sub="A sensory lighting installation exhibited at the Boston CyberArts Gallery"
                           date="April 2015">
            </TimelineEvent>
          </Timeline>
          <SectionHeader>volunteer<Icon name='volunteer'/></SectionHeader>
          <Timeline>
            <TimelineEvent title="Bright & Beautiful (有灵且美)"
                           sub="Design Director, Facebook Admin"
                           date="April 2015">
            </TimelineEvent>
          </Timeline>
          </Col>
        </div>
      </div>
    )
  }
}
