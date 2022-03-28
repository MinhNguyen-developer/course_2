/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
// Connect to get storeRdcer

class CartRedux extends Component {
  render() {
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
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Your Cart</h5>
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
                      <th>ID</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Amount</th>
                      <th>Total Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.cart.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.maSP}</td>
                          <img
                            src={item.hinhAnh}
                            alt={item.hinhAnh}
                            width={50}
                            height={50}
                          />
                          <td>{item.tenSP}</td>
                          <td>{item.giaBan.toLocaleString()}</td>
                          <td>
                            <button
                              onClick={() => {
                                this.props.tangGiamSoLuong(item.maSP, true);
                              }}
                              className="btn"
                            >
                              +
                            </button>
                            {item.soLuong}
                            <button
                              onClick={() => {
                                this.props.tangGiamSoLuong(item.maSP, false);
                              }}
                              className="btn"
                            >
                              -
                            </button>
                          </td>

                          <td>
                            {(item.soLuong * item.giaBan).toLocaleString()}
                          </td>
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
                    })}
                  </tbody>
                  <tfoot>
                    <th colSpan={5}></th>
                    <th>Total</th>
                    <th>
                      {this.props.cart
                        .reduce((total, item) => {
                          return (total += item.soLuong * item.giaBan);
                        }, 0)
                        .toLocaleString()}
                    </th>
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

// get state redux change to props component
const mapStateToProps = (state) => {
  // state là state tổng của ứng dụng chứa các state con
  return {
    cart: state.cartState.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => {
      let action = {
        type: "DELETE_ITEM",
        id,
      };
      console.log(id);
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, tangGiam) => {
      // tangGiam = true => tang; tangGiam = false => giam
      let action = {
        type: "TANG_GIAM_SO_LUONG",
        maSP,
        tangGiam,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartRedux);
