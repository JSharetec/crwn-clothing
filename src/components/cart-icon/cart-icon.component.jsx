import React from 'react'

import {ReactComponent as ShoppingIcon} from '../../assets/Image/Shopping.svg'

import './cart-icon.styles.scss'

import {connect} from 'react-redux'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className ="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'>
    </ShoppingIcon>
        <span className = 'item-count'>
        {itemCount}
        </span>

    </div>
)
const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})
const mapDispatchtoProps = dispach => ({
    toggleCartHidden: () => dispach(toggleCartHidden())
});
export default connect(mapStateToProps,mapDispatchtoProps)(CartIcon);