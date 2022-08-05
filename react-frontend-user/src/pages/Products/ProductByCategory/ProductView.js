import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProductItem from "./ProductItem";

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
    
      <Button variant="primary" value={product.product_id} onClick={onClick} id="product-quick-view">
        Custom Width Modal
      </Button>
    
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {product.product_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {product.product_start_price}
          </p>
        </Modal.Body>
      </Modal>
      <ProductItem product={product} categories={categories} />
    </div>
  );
};

export default ProductView;
