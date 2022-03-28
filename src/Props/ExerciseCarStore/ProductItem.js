/** @format */

import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <div>
        <div className="card text-left">
          <img className="card-img-top" src={item.img} alt />
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <p className="card-text">{item.price}</p>
            <button
              onClick={() => {
                console.log(item);
                this.props.viewDetail(item);
              }}
              className="btn btn-success"
              data-toggle="modal"
              data-target="#modelId"
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
