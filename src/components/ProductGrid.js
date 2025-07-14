import products from "./products"
import ProductCard from "./ProductCard"

function ProductGrid() {
    return (
        <div className="grid">
            {products.map((item) => (<ProductCard key={item.id} product={item} />))}
        </div>
    );
}

export default ProductGrid;