import React from 'react'
import './Search.css'

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {onSearch} = this.props
    return(
      <input placeholder='Search project' onChange={onSearch} type='text'/>
    )
  }
}

export default Search
