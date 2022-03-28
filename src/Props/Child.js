/** @format */

import React, { Component } from "react";

class Child extends Component {
  renderSize = () => {
    const { size } = this.props.product;
    return size.map((number, index) => {
      return (
        <button className="btn btn-primary" key={index}>
          {number}
        </button>
      );
    });
  };
  render() {
    const { name, price, src } = this.props.product;
    return (
      <div>
        <img style={{ width: 50 }} src={src} />
        <div style={{ width: 250 }} className="card">
          <img
            className="card-img-top"
            src={this.props.product.src}
            alt={this.props.product.src}
          />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{price}</p>
            {this.renderSize()}

            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.showAlert("Minh");
              }}
            >
              Show smth
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Child;
