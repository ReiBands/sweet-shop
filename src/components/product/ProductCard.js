function ProductCard({ product, addToCart, cart, setCart }) {
    return (
        <div className="ProductCard">
            <img src={product.image} alt={product.name} />
            <h3>{product.name} - ${product.price}</h3>
            <button onClick={() => addToCart(product, cart, setCart)}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;