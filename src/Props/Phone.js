/** @format */

import React, { Component } from "react";

class Phone extends Component {
  render() {
    const { propsItem } = this.props;
    return (
      <div className="card text-left">
        <img
          style={{ width: 250, height: 250 }}
          className="card-img-top"
          src={propsItem.hinhAnh}
          alt={propsItem.hinhAnh}
        />
        <div className="card-body text-center">
          <h4 className="card-title">{propsItem.tenSP}</h4>
          <p className="card-text">{propsItem.giaBan}</p>
          <button
            onClick={() => {
              this.props.viewDetail(propsItem);
            }}
            className="btn btn-success"
          >
            Detail
          </button>
        </div>
      </div>
    );
  }
}

export default Phone;
