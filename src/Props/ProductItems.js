/** @format */

import React, { Component } from "react";

class ProductItems extends Component {
  render() {
    return (
      <div className="card text-left" style={{ width: 300 }}>
        <img
          className="card-img-top"
          src={this.props.dataProductItem.image}
          alt={this.props.dataProductItem.image}
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.dataProductItem.name}</h4>
          <p className="card-text">{this.props.dataProductItem.price}</p>
          <button className="btn-dark btn text-white">Add to cart</button>
        </div>
      </div>
    );
  }
}

export default ProductItems;
