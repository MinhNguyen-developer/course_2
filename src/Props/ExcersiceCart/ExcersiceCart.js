/** @format */

import React, { Component } from "react";
import CartModal from "./CartModal";
import CartProductList from "./CartProductList";

class ExcersiceCart extends Component {
  state = {
    cart: [],
  };

  addItem = (item) => {
    let cartItem = {
      maSP: item.maSP,
      tenSP: item.tenSP,
      giaBan: item.giaBan,
      soLuong: 1,
      hinhAnh: item.hinhAnh,
    };
    let index = this.state.cart.findIndex(
      (item) => item.maSP === cartItem.maSP
    );

    if (index !== -1) {
      this.state.cart[index].soLuong += 1;
    } else {
      this.state.cart.push(cartItem);
    }

    const updateCartItem = [...this.state.cart];

    this.setState({
      cart: updateCartItem,
    });
  };

  deleteItem = (id) => {
    console.log(id);
    let index = this.state.cart.findIndex((item) => item.maSP === id);
    if (index !== -1) {
      this.state.cart.splice(index, 1);
    }

    this.setState({
      cart: this.state.cart,
    });
  };

  countItem = () => {
    let count = 0;
    // for (let i = 0; i < this.state.cart.length; i++) {
    //   let item = this.state.cart[i];
    //   count += item.soLuong;
    // }
    // return count;

    return this.state.cart.reduce((count, item, index) => {
      return (count += item.soLuong);
    }, 0);
  };

  setCount = (id, number) => {
    let cart = [...this.state.cart];
    let index = cart.findIndex((item) => item.maSP === id);
    if (index !== -1) {
      if (cart[index].soLuong < 1 && number === -1) {
        return;
      }
      cart[index].soLuong += number;
    }

    this.setState({
      cart: cart,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center">CART EXERCISE</h3>
        <div className="text-right">
          <i
            style={{ cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
            class="fa fa-shopping-cart"
            aria-hidden="true"
          >
            ({this.countItem()}) Cart
          </i>
        </div>
        <CartModal
          setCount={this.setCount}
          deleteItem={this.deleteItem}
          cart={this.state.cart}
        />
        <CartProductList addItem={this.addItem} />
      </div>
    );
  }
}

export default ExcersiceCart;
