import products from "../../data/products"
import { addToCart, setCart } from "../../utils/cartHelpers";
import ProductCard from "./ProductCard"

function ProductGrid({ products, addToCart, cart, setCart }) {
    return (
        <div className="product-grid">
            <div className="menu-header">
                <h2>Menu</h2>
            </div>
            <div className="grid">
                {products.map((product) => (<ProductCard key={product.id} product={product} addToCart={addToCart} cart={cart} setCart={setCart} />))}
            </div>

        </div>

    );
}

export default ProductGrid;