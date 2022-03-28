/** @format */

import React, { Component } from "react";
import CartRedux from "./CartRedux";
import ProductListRedux from "./ProductListRedux";

import { connect } from "react-redux";

class CartReduxEx extends Component {
  totalAmount = () => {
    return this.props.cart
      .reduce((total, item, index) => {
        return (total += item.soLuong);
      }, 0)
      .toLocaleString();
  };
  render() {
    return (
      <div className="container">
        <h3>Danh sach san pham</h3>
        <div className="text-right">
          <i
            style={{ cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
            className="fa fa-shopping-cart"
            aria-hidden="true"
          >
            {this.totalAmount()} Cart
          </i>
        </div>
        <ProductListRedux />
        <CartRedux />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartState.cart,
  };
};

export default connect(mapStateToProps)(CartReduxEx);
