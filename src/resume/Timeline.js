import React from 'react'
import './Timeline.css'

export const TimelineEvent = ({title, address, date, children}) => {
  const formatDate = (date) => {
    if (typeof(date)==='string'){
      return date
    }else{
      return <p>{date[0]} <br /> {date[1]}</p>
      }
  }
    return (
        <div>
          <div className="timeline_line"></div>
          <div className="timeline_event">
          <div className="timeline_event-date">{formatDate(date)}</div>
            <div className="timeline_event-icon"></div>
            <div className="timeline_event-content">
            <h4>{title}</h4>
            <address>{address}</address>
            {children}
            </div>
          </div>
        </div>
    );
}
export const Timeline = ({children}) => {
    return (
      <section className="timeline_section">
        {children}
      </section>
    );
}
