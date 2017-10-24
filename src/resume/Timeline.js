import React from 'react'
import './Timeline.css'

const Timeline = ({children}) => {
    return (
      <section className="timeline_section">
        <div className="timeline_line"></div>
        <div className="timeline_event">
        <div className="timeline_event-date">May 2015</div>
          <div className="timeline_event-icon"></div>
          <div className="timeline_event-content">
          <h4>Graduate Certificate in Interactive Design and Dynamic Media</h4>
          <address>MassArt, Boston, MA</address>
          </div>
        </div>
        <div className="timeline_event">
        <div className="timeline_event-date">May 2015</div>
          <div className="timeline_event-icon"></div>
          <div className="timeline_event-content">
          <h4>Interactive Environment Group</h4>
          <address>MIT Media Lab, Cambridge, MA</address>
          </div>
        </div>
        <div className="timeline_event">
        <div className="timeline_event-date">May 2013</div>
          <div className="timeline_event-icon"></div>
          <div className="timeline_event-content">
          <h4>B.S. in Applied Mathematics, B.A. in Graphic Design</h4>
          <address>New England College, Henniker, NH</address>
          <ul>
            <li> UI/UX design, web front end development</li>
            <li> Analyze and visualize data for Mass.gov social media accounts</li>
            <li> Lead public facing marketing campaign branding and visual design</li>
            <li> Direct and mentor design interns</li>
          </ul>
          </div>
        </div>

      </section>
    );
}

export default Timeline
