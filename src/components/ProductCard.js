function ProductCard({ product }) {
    return (
        <div className="card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name} - {product.price}</h3>
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductCard;