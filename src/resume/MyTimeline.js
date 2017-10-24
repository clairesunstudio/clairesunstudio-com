import React from 'react'
import {Timeline, TimelineEvent} from 'react-event-timeline'

const MyTimeline = ({children}) => {
    return (
      <Timeline>
              <TimelineEvent title="John Doe sent a SMS"
                             createdAt="2016-09-12 10:06 PM"
                             >
                <li> UI/UX design, web front end development</li>
                <li> Analyze and visualize data for Mass.gov social media accounts</li>
                <li> Lead public facing marketing campaign branding and visual design</li>
                <li> Direct and mentor design interns</li>
              </TimelineEvent>
              <TimelineEvent
                  title="You sent an email to John Doe"
                  createdAt="2016-09-11 09:06 AM"
                  icon={<i className="material-icons md-18">email</i>}>
                  Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                      am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                      gentle reminder if you are on track already!
              </TimelineEvent>
      </Timeline>
    );
}

export default MyTimeline
