/** @format */

import React, { Component } from "react";
import CartProductItem from "./CartProductItem";

class CartModal extends Component {
  renderCart = () => {
    const { cart } = this.props;
    console.log(cart);
    return cart.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>
            <img
              style={{ width: 35, height: 35 }}
              src={item.hinhAnh}
              alt={item.hinhAnh}
            />
          </td>
          <td>{item.tenSP}</td>
          <td>
            <button
              className="btn"
              onClick={() => {
                this.props.setCount(item.maSP, 1);
              }}
            >
              +
            </button>
            {item.soLuong}
            <button
              className="btn"
              onClick={() => {
                this.props.setCount(item.maSP, -1);
              }}
            >
              -
            </button>
          </td>
          <td>{item.giaBan.toLocaleString()}</td>
          <td>{(item.giaBan * item.soLuong).toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.deleteItem(item.maSP);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  countTotalPay = () => {
    let { cart } = this.props;
    return cart
      .reduce((total, item, index) => {
        return (total += item.soLuong * item.giaBan);
      }, 0)
      .toLocaleString();
  };

  render() {
    const { cart } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            style={{ minWidth: 1000 }}
            className="modal-dialog"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cart</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Ma SP</th>
                      <th>Hinh Anh</th>
                      <th>Ten SP</th>
                      <th>So Luong</th>
                      <th>Don Gia</th>
                      <th>Thanh tien</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCart()}</tbody>
                  <tfoot>
                    <td colSpan="5"></td>
                    <td>Total Pay</td>
                    <td>{this.countTotalPay()}</td>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartModal;
