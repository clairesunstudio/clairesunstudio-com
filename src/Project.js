import React from 'react';
import Header from './project/Header'

const Project = ({ match }) => (
    <div className="wrapper">
      <Header projectId={match.params.projectId}/>
      <h3>{match.params.projectId}</h3>
    </div>
)

export default Project
