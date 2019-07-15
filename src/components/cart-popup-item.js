import React from 'react';

import s from './cart-popup.module.css'

const cartItem = ({item, removeFromCart}) => {

	const {id, title, author, price}	= item;

	
	return (
	<div className={s.cart_item}>
		<img src='./book.png' alt='book img' className={s.cart_item_img}/>
		<div className={s.cart_item_about}>
			<div className={s.about_item}><span className={s.about_text}> Название:</span> {title}</div>
			<div className={s.about_item}><span className={s.about_text}> Автор:</span> {author}</div>
			<div className={s.about_item}><span className={s.about_text}> Цена:</span> {price} грн.</div>
		</div>
		<div className={s.cart_item_del} onClick={() => removeFromCart(id)} >Удалить</div>
		
	</div>
	)
};

export default cartItem