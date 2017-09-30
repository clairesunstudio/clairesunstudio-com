import React from 'react';
import Header from './project/Header'
import Content from './project/Content'
import Media from './project/Media'
import axios from 'axios'
import { Col } from 'react-bootstrap'
import './Project.css'
import _ from 'lodash'
import { api_key } from './App'

class Project extends React.Component{
  constructor(props) {
    super(props);
    const fileNameList = this.props.fileNameList
    const folderNameList = _.keysIn(fileNameList)
    const projectId = this.props.match.params.projectId
    const projectFolderId = fileNameList[projectId].id
    const url = `https://www.googleapis.com/drive/v3/files?q='${projectFolderId}'+in+parents&key=${api_key}`;
    this.state = {
      content: null,
      fileNameList: null,
      projectId, url
    }
  }
  componentWillMount = () =>  {
    this.fetchImages()
  };
  fetchImages = () =>  {
    const _this = this
    const { projectId, url} = _this.state
      axios.all([
        axios.get('projects/'+projectId+'/content.json'),
        axios.get(url),
      ])
      .then(axios.spread(function(result, google) {
          const fileList = google.data.files
          const fileNameList = _.mapKeys(fileList, "name")
          const content = result.data
          _this.setState({content, fileNameList})
        }))
      .catch((error) => {console.log(error)})
  };
  render(){
    const {content, projectId, fileNameList} = this.state
    if( !content ) {
      return <div className="container">Loading...</div>
    }
    const {title, subtitle, sections, live_site} = content
    const mediaFolderId = fileNameList.media.id
    console.log(mediaFolderId)
    return (
        <div className="wrapper">
          <Header title={title} subtitle={subtitle} live_site={live_site}/>
          <div className="container">
            <Content sections={sections} mediaFolderId={mediaFolderId}/>
            <Media mediaFolderId={mediaFolderId}/>
          </div>
        </div>
    )

  }
}

export default Project
