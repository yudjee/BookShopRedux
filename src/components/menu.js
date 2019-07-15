import React from 'react';
import {connect} from 'react-redux';
import { openPopup } from '../actions/cart'

import s from './menu.module.css'


class Menu extends React.Component {
	

	render() {

		const {openPopup, totalPrice, quant} = this.props;
		return (

			<div className={s.menu}>
				<div className={s.menu_left}>Магазин книг</div>
				<div className={s.menu_right}>
					<div className={s.menu_right_sum}>ИТОГ - {totalPrice} грн.</div>
					<div className={s.menu_right_cart} onClick={openPopup}>КОРЗИНА - {quant} шт</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ cart }) => ({
	totalPrice: cart.items.reduce((total, item) => {
		return total + item.price}, 0),
	quant: cart.items.length
})



const mapDispatchToProps = dispatch => ({
	openPopup: () => dispatch(openPopup())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);