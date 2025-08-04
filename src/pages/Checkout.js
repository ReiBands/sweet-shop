// Checkout summary

import CheckoutForm from "../components/CheckoutForm";

function Checkout({ cart, totalPrice }) {
    return (
        <div className="container mt-5">

            <CheckoutForm />

            {/* Checkout Summary */}
            <h3>Summary</h3>
            {cart.map((item) => (
                <div key={item.id}>
                    <ul> {item.name} ${item.price} x {item.quantity} </ul>
                </div>
            ))}

            <h4>Total ${totalPrice}</h4>

            <button>Confirm Order</button>

        </div>
    );
}

export default Checkout;
