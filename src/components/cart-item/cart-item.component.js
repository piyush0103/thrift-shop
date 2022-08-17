import React from 'react'
import './cart-item.styles.scss'
export default function CartItem({cartItem}) {
    const {id,name,imageUrl, price,quantity}=cartItem
    // console.log('coming in cart ITEM',cartItem)
    return (
        <div className="cart-item-container">
            kdfnbvkjdn
            <img src={imageUrl} alt="" />
            <div className="item-details">
          
            <span className="name">{name}</span>
            <span className="price">{quantity*price}</span>
            </div>
        </div>
    )
}
