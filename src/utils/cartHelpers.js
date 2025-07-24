
// checks if item already exists in cart, if not then function adds the item to cart
export function addToCart(product, cart, setCart) {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (!existingProduct) {
        // make a fresh object w/ all product details + new key:value pair
        setCart([...cart, { ...product, quantity: 1 }]);
    }
};

export function decreaseQuantity(itemId, cart, setCart) {
    // if (item.id === itemId) return {}, else return item
    const updatedCart = cart.map((item) => item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item);
    // update the useState
    setCart(updatedCart);
};

export function increaseQuantity(itemId, cart, setCart) {
    // if (item.id === itemId) return {}, else return item
    const updatedCart = cart.map((item) => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item);
    // update the useState
    setCart(updatedCart);
};

export function deleteItem(itemId, cart, setCart) {
    // filter (item.id !== itemId) = keep only items where id does not = itemId
    const updatedCart = cart.filter((item) => item.id !== itemId);
    // update the useState
    setCart(updatedCart);
};