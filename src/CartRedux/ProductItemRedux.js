/** @format */

import React, { Component } from "react";

// sử dụng thư viện kết nối với redux
import { connect } from "react-redux";

class ProductItemRedux extends Component {
  render() {
    let { item } = this.props;
    return (
      <div>
        <div className="card text-left">
          <img
            style={{ width: 350, height: 350 }}
            className="card-img-top"
            src={item.hinhAnh}
            alt={item.hinhAnh}
          />
          <div className="card-body">
            <h4 className="card-title">{item.tenSP}</h4>
            <p className="card-text">{item.giaBan.toLocaleString()}</p>
            <button
              onClick={() => {
                this.props.addItem(item);
                console.log(item);
              }}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// gửi dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      // tạo ra sản phẩm
      let cart = {
        maSP: item.maSP,
        hinhAnh: item.hinhAnh,
        tenSP: item.tenSP,
        giaBan: item.giaBan,
        soLuong: 1,
      };

      // Tạo ra action
      let action = {
        type: "ADD_TO_CART",
        cart,
      };

      // Dùng dispatch gửi dữ liệu
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItemRedux);
