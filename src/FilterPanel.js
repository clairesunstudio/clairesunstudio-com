import React from 'react'
import './FilterPanel.css'
import { Button } from 'react-bootstrap'

const upperCaseFirstChar = (string) => {
    const words  = string.split(' ')
    var newString = words.map((word)=>{
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    return newString.join(' ')

}

class Filter extends React.Component{
  render(){
    return (
      <Button onClick={this.props.onClick} value={this.props.category}>{upperCaseFirstChar(this.props.category)}</Button>
    )
  }

}

class FilterPanel extends React.Component{
  constructor(props){
		super(props);
    this.state = {
      uniqueCategories: []
    }
	}
  //var buttonClass = this.state.active ? 'active' : '';
  componentDidMount(){
    var uniqueCategories=[];
    this.props.data.forEach((el)=>{
      const category = el.category
      for(var i=0; i<category.length; i++){
        if(uniqueCategories.indexOf(category[i]) === -1 ) uniqueCategories.push(el.category[i]);
      }
    })
    this.setState({uniqueCategories})
  }
  render(){
    const { selectCategory, onFilter } = this.props
    var categoryToSelect = selectCategory;
    return (
      <div className="filter-panel">
      <Button onClick={this.props.resetFilter}>All</Button>
        {
          this.state.uniqueCategories.map(function(el,i){
            var boundClick = categoryToSelect.bind(null,el);
            return <Filter onClick={boundClick, onFilter} category={el} key={i} />
          })
        }
      </div>
    )
  }
}

export default FilterPanel
