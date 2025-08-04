import CartCard from "./CartCard";
import { Link } from "react-router-dom";

function Cart({ cart, totalPrice, increaseQuantity, decreaseQuantity, deleteItem, setCart }) {
    // UI
    return (
        <div>
            {/* Title */}
            <div>
                <h3>Shopping Cart</h3>
            </div>

            {/* Cart Items */}
            <div className="product-grid">
                {cart.map((item) => (
                    <CartCard
                        key={item.id}
                        item={item}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        deleteItem={deleteItem}
                        cart={cart}
                        setCart={setCart} />))}
            </div>

            {/* Total */}
            <div className="cart-summary">
                <h5>Total: ${totalPrice.toFixed(2)}</h5>
            </div>

            {/* Checkout Button */}
            <Link to="/checkout" className="btn btn-primary">Checkout</Link>
        </div>
    );
}

export default Cart;