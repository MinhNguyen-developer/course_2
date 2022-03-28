/** @format */

import React, { Component } from "react";
import Parents from "./Parents";
import Phone from "./Phone";
import PhoneList from "./PhoneList";

class Props extends Component {
  render() {
    const refParent = React.createRef();

    const changeTitle = () => {
      refParent.current.changeTitle();
    };
    return (
      <div>
        <button onClick={changeTitle}>CLick me</button>
        <Parents ref={refParent}>
          <PhoneList />
        </Parents>
      </div>
    );
  }
}

export default Props;
