import React, { useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import ProductItem from "./ProductItem";
import ProductDetailItemSlide from "../ProductDetail/ProductDetailItemSlide";

const ProductView = ({ product, categories }) => {
  const [show, setShow] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({})
  const onClick = (e) => {
    if(product.product_id == e.target.value){
      setCurrentProduct(product)
    }
    setShow(true);
  }
  return (
    <div
      className="product-grid-wrapper col-xl-3 col-md-4 col-xs-6"
      id="product-grid-wrapper">
    
      <Button value={product.product_id} onClick={onClick} id="product-quick-view">
        QUICK VIEW
      </Button>
    
      <Modal
        show={show}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="xl"
        className="quickview-wrapper"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title" className="product-quickview-title">
            PRODUCT INFORMATION
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductDetailItemSlide product={product}/>
        </Modal.Body>
      </Modal>
      <ProductItem product={product} categories={categories} />
    </div>
  );
};

export default ProductView;
