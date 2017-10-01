import React from 'react';
import Header from './project/Header'
import Content from './project/Content'
import Media from './project/Media'
import axios from 'axios'
import _ from 'lodash'
import { Col } from 'react-bootstrap'
import './Project.css'

class Project extends React.Component{
  constructor(props) {
    super(props);
    const projectId = this.props.match.params.projectId
    const projectData = _.mapKeys(this.props.projectData[projectId].contents, "name")
    const projectMedia = projectData.media.contents
    this.state = {
      content: null,
      imageList: [],
      featureImageList: [],
      projectId,
      projectMedia
    }
  }
  componentWillMount = () =>  {
    this.fetchFiles()
  };
  fetchFiles = () =>  {
    const _this = this
    const {projectId, projectMedia} = _this.state
    const images = _.filter(projectMedia, { 'type': 'file'});
    const feature = _.filter(projectMedia, { 'type': 'directory', 'name': 'feature'})
    const featureImages = feature[0].contents
    const imageList = _.keysIn(_.mapKeys(images, 'name'))
    const featureImageList = _.keysIn(_.mapKeys(featureImages, 'name'))
    console.log(imageList, featureImageList)
      axios.all([
        axios.get('projects/'+projectId+'/content.json'),
      ])
      .then(axios.spread(function(result) {
          const content = result.data
          _this.setState({content, imageList, featureImageList})
        }))
      .catch((error) => {console.log(error)})
  };
  render(){
    const {imageList, content, featureImageList, projectId} = this.state
    if( !content ) {
      return <div className="container">Loading...</div>
    }
    let images = [], features = [];
    for(let i = 0; i< imageList.length; i++){
      if(imageList[i] != 'feature'){
        images.push("projects/"+projectId+"/media/" + imageList[i]);
      }
    }
    for(let i = 0; i< featureImageList.length; i++){
      features.push("projects/"+projectId+"/media/feature/" + featureImageList[i]);
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
