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
      imgId: [],
      imgFeature: [],
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
        axios.get('projects/'+projectId+'/media'),
        axios.get('projects/'+projectId+'/media/feature')
      ])
      .then(axios.spread(function(result, media, feature) {
          const content = result.data
          const imgId = media.data
          const imgFeature = feature.data
          _this.setState({imgId, content, imgFeature})
        }))
      .catch((error) => {console.log(error)})
  };
  render(){
    const {imgId, content, imgFeature, projectId} = this.state
    if( !content ) {
      return <div className="container">Loading...</div>
    }
    let images = [], features = [];
    for(let i = 0; i< imgId.length; i++){
      if(imgId[i] != 'feature'){
        images.push("projects/"+projectId+"/media/" + imgId[i]);
      }
    }
    for(let i = 0; i< imgFeature.length; i++){
      features.push("projects/"+projectId+"/media/feature/" + imgFeature[i]);
    }
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
