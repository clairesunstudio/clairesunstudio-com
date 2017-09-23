import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {onFilter} = this.props
    return(
      <input placeholder='Filter eg: calendar' onChange={onFilter} type='text'/>
    )
  }
}

export default Search
