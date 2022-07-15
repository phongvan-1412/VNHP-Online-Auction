import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ productsPerPage, totalProducts, paginate }) =>{
    const pageNumbers = [];
    
    for(let i=1; i<=Math.ceil(totalProducts / productsPerPage); i++){
        pageNumbers.push(i);
    }
    return(
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <Link to='#' className="page-link" onClick={() => paginate(number)}>
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;