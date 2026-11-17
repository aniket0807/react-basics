
import ProductCard from "../components/ProductCard";

const products = [
    {
        id: 1,
        name: "Notebook",
        description: "A notebook for everyday learning.",
        price: 100
    },
    {
        id: 2,
        name: "Pen Set",
        description: "A set of pens for writing and notes.",
        price: 80
    },
    {
        id: 3,
        name: "Backpack",
        description: "A backpack for carrying study materials.",
        price: 800
    }
];

function Products() {
    return (
        <main className="page-container">
            <h1>Our Products</h1>

            <p>Welcome to the product showcase.</p>

            <section className="product-list">

                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                    />
                ))}

            </section>
        </main>
    );
}

export default Products;
