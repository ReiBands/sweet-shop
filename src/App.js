import './App.css';
import ProductGrid from './components/product/ProductGrid';
import Cart from './components/cart/Cart';
import { useState, useEffect } from 'react';
import products from './data/products';
import { addToCart, increaseQuantity, decreaseQuantity, deleteItem } from './utils/cartHelpers';
import { BrowswerRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Checkout from './pages/Checkout';


function App() {

  // State

  // initializes array for cart items, as well as the variable cart, and the function to update it, setCart
  const [cart, setCart] = useState([]);
  // initializes the total price to $0, as well as the variable totalPrice, and teh function to update it, setTotalPrice
  const [totalPrice, setTotalPrice] = useState(0);
  // checks if the product that the user wants to add to the cart is already there

  // whenever the cart changes, recalc the total price
  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(newTotal);
  }, [cart]);


  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">

            {/* Product Grid */}
            <h1>Deez Urban Flavorz</h1>
            <ProductGrid products={products} addToCart={(product) => addToCart(product, cart, setCart)} cart={cart} setCart={setCart} />

            {/* Shopping Cart */}

            <Cart
              cart={cart}
              setCart={setCart}
              totalPrice={totalPrice}
              increaseQuantity={(itemId) => increaseQuantity(itemId, cart, setCart)}
              decreaseQuantity={(itemId) => decreaseQuantity(itemId, cart, setCart)}
              deleteItem={(itemId) => deleteItem(itemId, cart, setCart)} />
          </div>
        }>

      </Route>
      <Route
        path="/checkout"
        element={<Checkout
          cart={cart}
          totalPrice={totalPrice} />} />
    </Routes>

  );
}

export default App;
