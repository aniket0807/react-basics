
function ProductCard({ name, description, price }) {
    return (
        <article className="product-item">
            <h2>{name}</h2>

            <p>{description}</p>

            <p>Price: ₹{price}</p>
        </article>
    );
}

export default ProductCard;
