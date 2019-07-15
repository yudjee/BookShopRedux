import React from 'react';
import {connect} from 'react-redux';
import {setBooks, setFilter} from './actions/books'
import {addToCart} from './actions/cart'

import Menu from './components/menu'
import BookItem from './components/book-item'
import Filter from './components/filter'
import PopUp from './components/cart-popup'

import axios from 'axios'
import orderBy from 'lodash/orderBy'




class App extends React.Component {


	componentWillMount() {
		const { setBooks } = this.props;
		axios.get('/books.json').then(response => {
			setBooks(response.data)
		})
	}

	render() {
		const {books, isReady, setFilter, showPopup, addToCart} = this.props;

		return (
			<div>
				<Menu />
				<div className="main">
					<div className="books_container">
						{!isReady ? 'Загрузка...' : 
							books.map( book => <BookItem book={book} key={book.id} 
								addToCart={addToCart}/> )}
					</div>
					<Filter setFilter={setFilter}/>	
				</div>

				{showPopup ? <PopUp /> : null}
			</div>
		)
	}

}

const sortBy = (books, filterBy) => {

	switch (filterBy) {
		case 'all':
			return books;
		case 'price_high':
			return orderBy(books, 'price', 'desc');
		case 'price_low':
			return orderBy(books, 'price', 'asc');
		case 'author':
			return orderBy(books, 'author', 'asc');
		default:
			return books;
	}
};


const searchBy = (books, search) =>
  books.filter(
    obj =>
      obj.title.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
      obj.author.toLowerCase().indexOf(search.toLowerCase()) >= 0,
  );

const showBooks = (books, filterBy, search) => {
	return sortBy(searchBy(books, search), filterBy)
}

const mapStateToProps = ({ books, cart }) => ({
	books: books.items && showBooks(books.items, books.filterBy, books.search),
	isReady: books.isReady,
	filterBy: books.filterBy,
	showPopup: cart.showPopup
})

const mapDispatchToProps = dispatch => ({
	setBooks: books => dispatch(setBooks(books)),
	setFilter: filter => dispatch(setFilter(filter)),
	addToCart: book => dispatch(addToCart(book))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);



