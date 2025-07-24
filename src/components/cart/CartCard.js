function CartCard({ item, increaseQuantity, decreaseQuantity, deleteItem, cart, setCart }) {
    return (
        <div className="CartCard">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <h3>${(item.price * item.quantity).toFixed(2)}</h3>
            <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id, cart, setCart)}
                    disabled={item.quantity === 1}>-</button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id, cart, setCart)}
                    disabled={item.quantity === item.inventory}>+</button>
            </div>

            <button onClick={() => deleteItem(item.id, cart, setCart)}>Remove</button>
        </div>
    );
}

export default CartCard;