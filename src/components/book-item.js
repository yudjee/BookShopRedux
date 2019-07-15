import React from 'react';

import s from './book-item.module.css'

const bookItem = ({addToCart, book}) => {

	const {title, author, price} = book;
	
	return (
	<div className={s.book_item}>
		<img src='./book.png' className={s.book_item_img} alt="book pic"/>
		<div className={s.book_item_about}>
			<div className={s.book_item_title}> <span className={s.book_text}>Название:</span> {title} </div>
			<div className={s.book_item_author}> <span className={s.book_text}>Автор: </span> {author} </div>
		</div>
		<div className={s.book_item_price}> <span className={s.book_text}>Цена: </span> {price} грн. </div>
		<br />
		<button onClick={() => addToCart(book)}>Купить</button>
	</div>
	)
};

export default bookItem