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
      videoList: [],
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
    const video = _.filter(projectMedia, { 'type': 'directory', 'name': 'video'})
    var featureImages, videos
    if(feature.length>0) { featureImages = feature[0].contents}
    if (video.length>0) { videos = video[0].contents}
    const imageList = _.keysIn(_.mapKeys(images, 'name'))
    const featureImageList = _.keysIn(_.mapKeys(featureImages, 'name'))
    const videoList = _.keysIn(_.mapKeys(videos, 'name'))
      axios.all([
        axios.get('projects/'+projectId+'/content.json'),
      ])
      .then(axios.spread(function(result) {
          const content = result.data
          _this.setState({content, imageList, featureImageList, videoList})
        }))
      .catch((error) => {console.log(error)})
  };
  render(){
    const {imageList, content, featureImageList, videoList, projectId} = this.state
    if( !content ) {
      return <div className="container">Loading...</div>
    }
    let images = [], features = [], videos = [];
    for(let i = 0; i< imageList.length; i++){
      if(imageList[i] != 'feature'){
        images.push("projects/"+projectId+"/media/" + imageList[i]);
      }
    }
    for(let i = 0; i< featureImageList.length; i++){
      features.push("projects/"+projectId+"/media/feature/" + featureImageList[i]);
    }

    for(let i = 0; i< videoList.length; i++){
      videos.push("projects/"+projectId+"/media/video/" + videoList[i]);
    }
    const {title, subtitle, sections, live_site} = content
    return (
        <div className="project">
          <Header title={title} subtitle={subtitle} live_site={live_site}/>
          <div className="container">
            <Content sections={sections}/>
            <Media images={images} features={features} videos={videos}/>
          </div>
        </div>
    )

  }
}

export default Project
