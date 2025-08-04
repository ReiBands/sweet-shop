// Checkout form

function CheckoutForm() {
    return (
        <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email Address" />
            <label>Type: </label>
            <select disabled>
                <option value="pickup">PICKUP</option>
            </select>
            <label>Payment: </label>
            <select disabled>
                <option value="in-person">Pay in person</option>
            </select>
        </form>
    )
}

export default CheckoutForm