import React from 'react';
import Header from './project/Header'
import Content from './project/Content'
import axios from 'axios'
import { Col } from 'react-bootstrap'
import './Project.css'

class Project extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      imgId: [],
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
        axios.get('projects/'+projectId+'/media')
      ])
      .then(axios.spread(function(result, media) {
          const content = result.data
          const imgId = media.data
          _this.setState({imgId, content})
        }))
      .catch((error) => {console.log(error)})
  };
  render(){
    const {imgId, content, projectId} = this.state
    console.log(projectId)
    if( !content ) {
      return <div className="container">Loading...</div>
    }
    let images = [];
    for(let i = 0; i< imgId.length; i++){
      images.push("projects/"+projectId+"/media" + imgId[i]);
    }
    console.log(content)
    const {title, subtitle, sections} = content
    return (
        <div className="wrapper">
          <Header title={title} subtitle={subtitle} live_site={live_site}/>
          <div className="container">
            <Content sections={sections}/>
            <Col md={8} className="media">
              <Col md={12}><img src={`projects/freshmedia/mediadino.gif`} width="300" height="200"/></Col>
              <Col md={6}><img src={`projects/freshmedia/${images[1]}`} width="300" height="200"/></Col>
              <Col md={6}><img src={`projects/freshmedia/${images[1]}`} width="300" height="200"/></Col>
            </Col>
          </div>
        </div>
    )

  }
}

export default Project
