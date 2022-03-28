/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
class GameInfo extends Component {
  render() {
    return (
      <div>
        <div className="display-4">
          Your choice:{" "}
          <span className="text-danger">
            {this.props.choice ? "TÀI" : "XỈU"}
          </span>
        </div>
        <div className="display-4">
          Score <span className="text-success">{this.props.score}</span>
        </div>
        <div className="display-4">
          Total Play:
          <span className="text-success">{this.props.totalPlay}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.diceExcersiseReducer.score,
    choice: state.diceExcersiseReducer.choice,
    totalPlay: state.diceExcersiseReducer.totalPlay,
  };
};

export default connect(mapStateToProps)(GameInfo);
