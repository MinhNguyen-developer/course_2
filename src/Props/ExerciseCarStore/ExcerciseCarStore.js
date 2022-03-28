/** @format */

import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";

class ExcerciseCarStore extends Component {
  state = {
    productDetail: {
      id: 2,
      name: "red car",
      img: "./img/products/red-car.jpg",
      price: 2000,
    },
  };
  product = [
    {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
    {
      id: 2,
      name: "red car",
      img: "./img/products/red-car.jpg",
      price: 2000,
    },
    {
      id: 3,
      name: "silver car",
      img: "./img/products/silver-car.jpg",
      price: 3000,
    },
    {
      id: 4,
      name: "steel car",
      img: "./img/products/steel-car.jpg",
      price: 4000,
    },
  ];

  viewDetail = (newProduct) => {
    this.setState({
      productDetail: newProduct,
    });
  };

  render() {
    return (
      <div>
        <h3 className="text-center">DANH SÁCH XE</h3>
        <Modal content={this.state} />
        <ProductList viewDetail={this.viewDetail} productsData={this.product} />
      </div>
    );
  }
}

export default ExcerciseCarStore;
