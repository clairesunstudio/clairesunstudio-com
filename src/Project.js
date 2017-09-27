import React from 'react';
import Header from './project/Header'
import Content from './project/Content'
import Media from './project/Media'
import axios from 'axios'
import { Col } from 'react-bootstrap'
import './Project.css'

class Project extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      projectId: this.props.match.params.projectId
    }
  }
  componentWillMount = () =>  {
    this.fetchImages()
  };
  fetchImages = () =>  {
    const _this = this
    const projectId = _this.state.projectId
      axios.all([
        axios.get('projects/'+projectId+'/content.json'),
      ])
      .then(axios.spread(function(result) {
          const content = result.data
          _this.setState({content})
        }))
      .catch((error) => {console.log(error)})
  };
  render(){
    const {content, projectId} = this.state
    if( !content ) {
      return <div className="container">Loading...</div>
    }
     let images = [], features = [];
    for(let i = 0; i< 5; i++){
        images.push(`projects/${projectId}/media/${i}.jpg`);
    }
    for(let i = 0; i< 2; i++){
      features.push(`projects/${projectId}/media/feature/${i}.gif`);
    }
    console.log(images)
    const {title, subtitle, sections, live_site} = content
    return (
        <div className="wrapper">
          <Header title={title} subtitle={subtitle} live_site={live_site}/>
          <div className="container">
            <Content sections={sections}/>
            <Media images={images} features={features}/>
          </div>
        </div>
    )

  }
}

export default Project
