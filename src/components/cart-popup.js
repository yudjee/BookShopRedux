import React from 'react';

import {connect} from 'react-redux';
import {closePopup, removeFromCart} from '../actions/cart'

import CartItem from './cart-popup-item'

import s from './cart-popup.module.css'


class PopUp extends React.Component {
	
	render() {

		const {closePopup, cartItems, removeFromCart} = this.props

		return (
			<div className={s.popup}>
				<div className={s.cart_wrapper}>
					<div className={s.cart_header}>
						<div className={s.cart_header_title}>
							Корзина
						</div>
						<div className={s.cart_header_close}
							onClick={closePopup}>
							Закрыть
						</div>
					</div>
					
					{cartItems.map(item => <CartItem item={item} removeFromCart={removeFromCart}/>)}
						
				</div>
			</div>

		)
	}
}

const mapStateToProps = ({ cart }) => ({
	cartItems: cart.items,
})

const mapDispatchToProps = dispatch => ({
	closePopup: () => dispatch(closePopup()),
	removeFromCart: (id)=>dispatch(removeFromCart(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopUp);