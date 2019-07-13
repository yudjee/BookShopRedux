import React from 'react';

import s from './menu.module.css'


const Menu = () => (

	<div className={s.menu}>
		<div className={s.menu_left}>Магазин книг</div>
		<div className={s.menu_right}>
			<div className={s.menu_right_sum}>ИТОГ - 0 грн.</div>
			<div className={s.menu_right_cart}>КОРЗИНА - 0 шт</div>
		</div>
	</div>

)

export default Menu;