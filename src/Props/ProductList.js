/** @format */

import React, { Component } from "react";
import ProductItems from "./ProductItems";

class ProductList extends Component {
  renderProductItem = () => {
    return this.props.arrayProduct.map((item, index) => {
      return (
        <div className="col-4 mt-3" key={index}>
          <ProductItems dataProductItem={item} />
        </div>
      );
    });
  };
  render() {
    console.log(this.props.arrayProduct);
    return <div className="row">{this.renderProductItem()}</div>;
  }
}

export default ProductList;
