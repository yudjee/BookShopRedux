import React from 'react';


const filterItem = (props) => {

	const filters = [
		{name: 'all', title: 'Все книги'},
		{name: 'price_high', title: 'От дорогих'},
		{name: 'price_low', title: 'От дешевых'},
		{name: 'author', title: 'По автору'}
	];

	const filter = filters.map(({name, title}) => {
		return (
			<div className={props.filterBy === name ? 'filter_item filter_item_active' : 'filter_item'}
					key={name}
					onClick={() => props.onItemClick(name)}>
				{ title }
			</div>
			)
	})

	return filter


}

export default filterItem