import React from 'react';

import s from './book-item.module.css'

const bookItem = ({image, title, author, price, onAdd}) => (

	<div className={s.book_item}>
		<img src={ image } alt="book pic"/>
		<div className={s.book_item_about}>
			<div className={s.book_item_title}> {title} </div>
			<div className={s.book_item_author}> {author} </div>
		</div>
		<div className={s.book_item_price}> {price} грн. </div>
		<button onClick={onAdd}>Купить</button>
	</div>
	
);

export default bookItem