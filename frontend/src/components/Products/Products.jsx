import { useState, useEffect } from "react";
import Product from "../Product/Product";
import axios from "axios";
import { Container } from "./Products.styled";


const Products = ({ category, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            await axios.get(
                category
                    ? `https://boboshop-api.onrender.com/api/v1/products?category=${category}`
                    : "https://boboshop-api.onrender.com/api/v1/products"
            ).then(
                res => setProducts(res.data)
            ).catch(
                err => console.error(err)
            )
        }
        getProducts();
    }, [category]);

    useEffect(() => {
        if (filters) {
            setFilteredProducts(
                products.filter(item => Object.entries(filters).every(([key, value]) =>
                    (item[key].includes(value))
                )
                ));
        }
    }, [products, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt))
        }
        else if (sort === "asc") {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => a.price - b.price))
        }
        else {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => b.price - a.price))
        }
    }, [sort]);

    return ( 
        <Container>
            {filteredProducts     
                ?   filteredProducts.map(item => (
                    <Product item={item} key={item._id} />
                )) 
                : products
                    .slice(0, 8)
                    .map(item => (
                        <Product item={item} key={item._id} />
                ))
            }
        </Container>
    )
}

export default Products