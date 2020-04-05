import React from 'react'

import {ReactComponent as ShoppingIcon} from '../../assets/Image/Shopping.svg'

import './cart-icon.styles.scss'

import {connect} from 'react-redux'

import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartIcon = ({toggleCartHidden}) => (
    <div className ="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'>
    </ShoppingIcon>
        <span className = 'item-count'>
        0
        </span>

    </div>
)

const mapDispatchtoProps = dispach => ({
    toggleCartHidden: () => dispach(toggleCartHidden())
});
export default connect(null,mapDispatchtoProps)(CartIcon);