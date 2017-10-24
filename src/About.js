import React from 'react';
import { Col } from 'react-bootstrap'
import './About.css'
import SkillCloud from './resume/SkillCloud'
import MyTimeline from './resume/MyTimeline'
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
            <h4>UI/UX/Data Visualization Designer Developer</h4>
            <Button bsStyle='primary' href="assets/minghua-resume.pdf" download="Minghua's Resume">Download PDF</Button>
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
              <Timeline>
                <TimelineEvent title="Graduate Certificate in Interactive Design"
                               address="Dynamic Media Institute, MassArt, Boston, MA"
                               date="May 2015">
                </TimelineEvent>
                <TimelineEvent title="Interactive Environment Group"
                               address="MIT Media Lab, Cambridge, MA"
                               date="May 2015">
                </TimelineEvent>
                <TimelineEvent title="B.S. in Applied Mathematics, B.A. in Graphic Design"
                               address="New England College, Henniker, NH"
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
                               address="Digital Services, EOTSS, Commonwealth of Massachusetts"
                               date={["Present","May 2015"]}>
                               <ul>
                                <li> UI/UX design, web front end development</li>
                                <li> Analyze and visualize data for Mass.gov social media accounts</li>
                                <li> Lead public facing marketing campaign branding and visual design</li>
                                <li> Direct and mentor design interns</li>
                               </ul>
                </TimelineEvent>
                <TimelineEvent title="Visual Designer"
                               address="Confucius Institute, UMass Boston"
                               date={["Mar. 2014","June 2015"]}>
                               <ul>
                                <li> Design and create promotional collateral</li>
                                <li> Chinese Bridge contest event filming and post productions</li>
                               </ul>
                </TimelineEvent>
                <TimelineEvent title="Web/Graphic Designer"
                               address="StudentUniverse, Waltham"
                               date={["May 2014","Oct 2014"]}>
                               <ul>
                                <li> Assist in the wire-framing and front-end design of company’s new website</li>
                                <li> Design website visuals and marketing collateral</li>
                                <li> Create HTML email campaigns and landing pages</li>
                               </ul>
                </TimelineEvent>
                <TimelineEvent title="Design Internship"
                               address=" NH Division of Economic Development, Concord, NH"
                               date={["Feb. 2014","Sep. 2013"]}>
                </TimelineEvent>
              </Timeline>
          <SectionHeader>Projects<Icon name='project'/></SectionHeader>
          <Timeline>
            <TimelineEvent title="The ABCs of High School Success"
                           address="Mass.gov/SuccessABCs"
                           date={["Launched","Oct. 2017"]}>
                          <p>
                          I worked closely with the Department of Education and Secondary Education on developing this interactive data story to highlight the impact of the ABCs by following a group of students from the time they entered 9th grade, to when each left or completed high school. In this project, my work includes storyboading with exisiting data, data visualization design, prototyping, website development and deployment and user testing. The site was built using React with a highly componentized front end and a light weight page load.
                          </p>
            </TimelineEvent>
            <TimelineEvent title="Redesigning Mass.gov"
                           address="Mass.gov"
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
                           address="Mass.gov/Chapter55"
                           date={["Launched","Dec. 2016"]}>
                          <p>
                          As the designer and developer of this interactive data story on the MA opioid epidemic, I worked from concept sketching, data visualization designing, prototyping, and iterating, into the final deployment. The code repository was also made public as the pilot project of Mass.gov’s open-source initiative.
                          </p>
            </TimelineEvent>
            <TimelineEvent title="Artificial Bioluminescence"
                           address="A sensory lighting installation exhibited at the Boston CyberArts Gallery"
                           date="April 2015">
            </TimelineEvent>
          </Timeline>
          <SectionHeader>volunteer<Icon name='volunteer'/></SectionHeader>
          <Timeline>
            <TimelineEvent title="Bright & Beautiful (有灵且美)"
                           address="Design Director, Facebook Admin"
                           date="April 2015">
            </TimelineEvent>
          </Timeline>
          </Col>
        </div>
      </div>
    )
  }
}
