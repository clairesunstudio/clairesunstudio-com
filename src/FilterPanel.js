import React from 'react'
import './Search.css'
import { Button } from 'react-bootstrap'

class Filter extends React.Component{

  render(){
    return (
      <Button onClick={this.props.onClick}>{this.props.category}</Button>
    )
  }

}

class FilterPanel extends React.Component{
  constructor(props){
		super(props);
	}
  //var buttonClass = this.state.active ? 'active' : '';

  render(){
    const { selectCategory, data } = this.props
    var categoryToSelect = selectCategory;
    var getUniqueCategories=[];
    data.forEach((el)=>{
      const category = el.category
      for(var i=0; i<category.length; i++){
        if(getUniqueCategories.indexOf(category[i]) === -1 ) getUniqueCategories.push(el.category[i]);
      }
    })
    return (
      <div className="filter-panel">
        {
          getUniqueCategories.map(function(el,i){
            var boundClick = categoryToSelect.bind(null,el);
            console.log(boundClick)
            return <Filter onClick={boundClick} category={el} key={i} />
          })

        }
      </div>
    )
  }
}

export default FilterPanel
