import React from 'react';
import Card from './Card';
import './Gallery.css'

var FilterPanel = React.createClass({

	render: function(){
		return (
			<a onClick={this.props.onClick}>{this.props.category}</a>

		)
	}

});

var PhotoGallery = React.createClass({

	getInitialState: function() {
                return {
                    displayedCategories: this.props.data,
                    active: false
                };
            },
     toggleActive: function() {
        this.setState({
            active: !this.state.active
        });
    },

	selectCategory(element){

		  var categoryName = element;
    console.log('category is: '+ categoryName);
                var displayedCategories = this.props.data.filter(function(el) {

                    var searchValue = el.category;
                    return searchValue.indexOf(categoryName) !== -1;
                    console.log(searchValue);
                });

                this.setState({
                    displayedCategories

                });

	},
	resetFilter: function(element){
		this.setState({
                    displayedCategories: this.props.data

                });
	},



	render: function(){
		var buttonClass = this.state.active ? 'active' : '';
		var categoryToSelect = this.selectCategory;
		var getUniqueCategories=[];
		this.props.data.forEach(function(el){
			if(getUniqueCategories.indexOf(el.category) === -1 ) getUniqueCategories.push(el.category);
		})

		return (
			<div className="overlay-photogallery">
				<div className="filter-panel">
					{
						getUniqueCategories.map(function(el,i){
							var boundClick = categoryToSelect.bind(null,el);
							return <FilterPanel onClick={boundClick} category={el} key={i} />
						})

					}
					<a className="resetBtn" onClick={this.resetFilter}> Reset Filter </a>
				</div>
				<div className="gallery">
					{

						this.state.displayedCategories.map(function(el){
									return <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3"><Card item={el}/></div>
								})

					}
				</div>
			</div>
			);


	}



});

export default PhotoGallery
