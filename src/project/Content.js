import React from 'react'
import { Col } from 'react-bootstrap'

const Paragraphs = ({paragraphs}) => {
  const ParagraphList = paragraphs.map((paragraph, i) => (
      <p key={`paragraph_${i}`}>{paragraphs[i]}</p>
  ))
    return (
      <div>{ParagraphList}</div>
    );
}

const Content = ({sections}) => {
  const sectionList = sections.map((section, i) => (
    <section key={`section_+${i}`}>
        <h2>{sections[i].section}</h2>
        <Paragraphs paragraphs={sections[i].paragraphs}/>
    </section>
  ))
    return (
      <Col md={4} className="content">
        {sectionList}
      </Col>
    );
}

export default Content
