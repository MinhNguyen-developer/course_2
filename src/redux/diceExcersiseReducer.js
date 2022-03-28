/** @format */

const stateDefault = {
  choice: true, // true == tài || false == xỉu
  diceArr: [
    { ma: 1, hinhAnh: "./img/dice-img/1.png" },
    { ma: 1, hinhAnh: "./img/dice-img/1.png" },
    { ma: 1, hinhAnh: "./img/dice-img/1.png" },
  ],
  score: 0,
  totalPlay: 0,
};

const diceExcersiseReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.choice = action.choice;
      return { ...state };
    }

    case "PLAY_GAME": {
      // random dice
      let newDiceArr = [];
      for (let i = 0; i < 3; i++) {
        let randomNum = Math.floor(Math.random() * 6) + 1;
        // Create dice from randomNum
        let randomDice = {
          ma: randomNum,
          hinhAnh: `./img/dice-img/${randomNum}.png`,
        };
        // push to new dice arr
        newDiceArr.push(randomDice);
      }
      state.diceArr = newDiceArr;
      // Xử lý số lần chơi
      state.totalPlay += 1;
      // Xử lý score
      let totalScore = newDiceArr.reduce((totalScore, dice) => {
        return (totalScore += dice.ma);
      }, 0);

      if (
        (totalScore > 11 && state.choice) ||
        (totalScore <= 11 && !state.choice)
      ) {
        state.score += 1;
      }

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default diceExcersiseReducer;
