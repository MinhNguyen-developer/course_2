/** @format */

import React, { Component } from "react";
import Dice from "./Dice";
import "./DiceExcersise.css";
import GameInfo from "./GameInfo";
import { connect } from "react-redux";
class DiceExcersise extends Component {
  render() {
    return (
      <div
        className="game"
        style={{ backgroundImage: "url('./img/dice-img/bgGame.png')" }}
      >
        <div className="title-game text-center mt-5 display-4">
          Roll Dice Game
        </div>

        <div className="row text-center">
          <div className="col-4">
            <button
              onClick={() => {
                this.props.datCuoc(true);
              }}
              className="game-btn"
            >
              TÀI
            </button>
          </div>
          <div className="col-4">
            <Dice />
          </div>
          <div className="col-4">
            <button
              onClick={() => {
                this.props.datCuoc(false);
              }}
              className="game-btn"
            >
              XỈU
            </button>
          </div>
        </div>

        <div className=" text-center">
          <GameInfo />
          <button
            onClick={() => {
              this.props.playGame();
            }}
            className="btn btn-success p-4 display-4 mt-5"
          >
            Play
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (choice) => {
      let action = {
        type: "DAT_CUOC",
        choice,
      };

      dispatch(action);
    },
    playGame: () => {
      dispatch({ type: "PLAY_GAME" });
    },
  };
};

export default connect(null, mapDispatchToProps)(DiceExcersise);
