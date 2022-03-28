/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
class Dice extends Component {
  renderDice = () => {
    return this.props.diceArr.map((dice, index) => {
      return (
        <img
          style={{ width: 55, height: 55 }}
          key={index}
          className="ml-2"
          src={dice.hinhAnh}
          alt={dice.hinhAnh}
        />
      );
    });
  };
  render() {
    return <div>{this.renderDice()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    diceArr: state.diceExcersiseReducer.diceArr,
  };
};

export default connect(mapStateToProps)(Dice);
