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

class FilterPanel extends React.Component{
  constructor(props){
		super(props);
    this.state = {
      uniqueCategories: [],
    }
	}
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
    const { selectCategory, onFilter, resetFilter, filterValue} = this.props
    const { uniqueCategories } = this.state
    const isActive = (value) => {
      return value == filterValue?'active':''
    }
    const FilterList = uniqueCategories.map((category,i) => {
      return <Button bsStyle="tab" className={isActive(category)} onClick={selectCategory, onFilter} value={category} key={i}>{upperCaseFirstChar(category)}</Button>
    })
    return (
      <div className="filter-panel">
      <Button bsStyle="tab" className={isActive('all')} onClick={resetFilter} value='all'>All</Button>
      {FilterList}
      </div>
    )
  }
}

export default FilterPanel
