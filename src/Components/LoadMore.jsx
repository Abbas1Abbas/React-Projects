import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LoadMore.css';

const LoadMore = () => {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(1); // Start with 1 to fetch 20 products initially
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`https://dummyjson.com/products?limit=${count * 20}&skip=0`);
            setProducts(res.data.products);
        } catch (error) {
            setError(`Something Went Wrong: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [count]);

    const loadMoreHandler = () => {
        setCount(prevCount => prevCount + 1); // Increment count to load more products
    };

    if (error) return <div>{error}</div>;
    if (loading) return <div>Loading...</div>;

    return (
        <div className="loadMoreMain">
            <div className="proGrid">
                {products.map((product) => (
                    <div className="proCard" key={product.id}>
                        <img src={product.thumbnail} alt={product.id} />
                        <div>{product.title}, {product.id}</div>
                    </div>
                ))}
            </div>
            {count < 5 ? (
                <button onClick={loadMoreHandler}>Load More</button>
            ) : (
                <div className="LastLimit">You Have Reached The Max Limit (100)</div>
            )}
        </div>
    );
};

export default LoadMore;
