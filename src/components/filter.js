import React from 'react';
import FilterItem from './filter-item';
import {connect} from 'react-redux';
import {setBooks, setFilter, setSearch} from '../actions/books'

import './filter.css'

class Filter extends React.Component {

	onItemClick = (filterName) => {
		const {setFilter} = this.props;
		setFilter(filterName);
	};


	render() {
		const {filterBy, search, setSearch	} = this.props;
		return (
			<div className="filter_container">
				<FilterItem 
					filterBy={filterBy} 
					onItemClick={this.onItemClick}/>
				<input 
					className="search_input" 
					type="text" placeholder="поиск"
					value={search} 
					onChange={ (e) => setSearch(e.target.value)}/>
			</div>
		)
	}
};

const mapStateToProps = ({ books }) => ({
	filterBy: books.filterBy,
	search: books.search
})

const mapDispatchToProps = dispatch => ({
	setFilter: filter => dispatch(setFilter(filter)),
	setSearch: value => dispatch(setSearch(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
