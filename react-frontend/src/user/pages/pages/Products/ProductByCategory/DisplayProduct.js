import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Product from './Product';
import Pagination from "./Pagination";


import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

const DisplayProduct = ({products}) => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState (1);
    const [productsPerPage] = useState(12);

    useEffect(() => {
        const fetchProducts = () => {
            setProduct(products);
            const haveProducts = products.length > 0;
            setLoading(haveProducts);
        }

        fetchProducts();
    }, []);

    //Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);

    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
        return(
        <div className="container product-by-category-display">
            <Product products={currentProducts} loading={loading} />
            <Pagination productsPerPage={productsPerPage} totalProducts={product.length} paginate={paginate}/>
        </div>
    )
}

export default DisplayProduct;