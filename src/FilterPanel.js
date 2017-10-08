import React from 'react'
import './Search.css'
import { Button } from 'react-bootstrap'

class Filter extends React.Component{

  render(){
    return (
      <Button onClick={this.props.onClick} value={this.props.category}>{this.props.category}</Button>
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
        {
          this.state.uniqueCategories.map(function(el,i){
            var boundClick = categoryToSelect.bind(null,el);
            console.log(el)
            return <Filter onClick={boundClick, onFilter} category={el} key={i} />
          })

        }
      </div>
    )
  }
}

export default FilterPanel
