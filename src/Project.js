import React from 'react';
import Header from './project/Header'
import Content from './project/Content'
import Media from './project/Media'
import axios from 'axios'
import { Col } from 'react-bootstrap'
import './Project.css'


var api_key = 'AIzaSyAmfapkMCz0yqdNRG1lUNSWErt6Ir_WTTI';
var folderId = '0B5Upqv95GKbfVzRpMENZLUo1U1k';
var url = "https://www.googleapis.com/drive/v3/files?q='" + folderId + "'+in+parents&key=" + api_key;

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
        axios.get(url),
      ])
      .then(axios.spread(function(result, google) {
                console.log(google.data)
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
    const {title, subtitle, sections, live_site} = content
    return (
        <div className="wrapper">
          <Header title={title} subtitle={subtitle} live_site={live_site}/>
          <div className="container">
            <Content sections={sections}/>
          </div>
        </div>
    )

  }
}

export default Project
