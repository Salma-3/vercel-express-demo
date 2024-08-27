//components/ProductList.js

import React, { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { ItemContext } from '../context/ItemContext';
import "../App.css";

const ProductList = () => {
    console.log('env', process.env)
    const { properties } = useContext(ItemContext);
    const [sortedProperties, setSortedProperties] = useState([...properties]);
    // Keep a local state for sorted products
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(3000);
    const [selectedType, setSelectedType] = useState("all");
    // 'all' represents no type filter

    useEffect(() => {
        setSortedProperties([...properties]);
    }, [properties]);

    const handleSortByPrice = () => {
        const sorted = [...sortedProperties].sort((a, b) => a.price - b.price);
        setSortedProperties(sorted);
    };

    const handleFilterByPriceRange = () => {
        const filtered = properties.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
        );
        setSortedProperties(filtered);
    };

    const handleFilterByType = () => {
        if (selectedType === "all") {
            // Reset the type filter
            setSortedProperties([...properties]);
        } else {
            const filtered = properties.filter(
                (product) => product.type === selectedType
            );
            setSortedProperties(filtered);
        }
    };

    return (
        <div className="prdt-list">
            <h2>Product List</h2>
            <div className="filter-btn">
                <button onClick={handleSortByPrice}>Sort by Price</button>
                <label>
                    Min Price:
                    <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                    />
                </label>
                <label>
                    Max Price:
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                </label>
                <button onClick={() => handleFilterByPriceRange()}>
                    Filter by Price Range
                </button>
                <label>
                    Filter by Type:
                    <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="Fruit">Fruit</option>
                        <option value="Vegetable">Vegetable</option>
                        {/* Add more options as needed */}
                    </select>
                </label>
                <button onClick={handleFilterByType}>Filter by Type</button>
            </div>
            <ul className="property-list">
                {sortedProperties.map((property) => (
                    <ProductItem key={property._id} property={property} />
                ))}
            </ul>
            <div className="buy-now-btn">Buy Now</div>
        </div>
    );
};

export default ProductList;
