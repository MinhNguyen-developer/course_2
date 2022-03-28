/** @format */

import React, { Component } from "react";
import ProductList from "./Props/ProductList";
import Props from "./Props/Props";
import dataJson from "./Data/data.json";
import PhoneList from "./Props/PhoneList";
import ExcerciseCarStore from "./Props/ExerciseCarStore/ExcerciseCarStore";
import Phone from "./Props/Phone";
import ExcersiceCart from "./Props/ExcersiceCart/ExcersiceCart";
import CartReduxEx from "./CartRedux/CartReduxEx";
import DiceExcersise from "./ReduxPractice/DiceExcersise";
class App extends Component {
  render() {
    return (
      <div>
        {/* <PhoneList /> */}
        {/* <ExcerciseCarStore /> */}
        {/* <Props /> */}
        {/* <ExcersiceCart /> */}
        {/* <CartReduxEx /> */}
        <DiceExcersise />
      </div>
    );
    // return (
    //   <div className="container-fluid">
    //     {/* <Props /> */}
    //     <div className="row">
    //       <div className="col-4">
    //         <div
    //           style={{ minHeight: 800 }}
    //           className="nav flex-column nav-pills justify-content-center"
    //           id="v-pills-tab"
    //           role="tablist"
    //           aria-orientation="vertical"
    //         >
    //           <a
    //             className="nav-link active"
    //             id="v-pills-home-tab"
    //             data-toggle="pill"
    //             href="#home"
    //             role="tab"
    //             aria-controls="v-pills-home"
    //             aria-selected="true"
    //           >
    //             Home
    //           </a>
    //           <a
    //             className="nav-link"
    //             id="v-pills-profile-tab"
    //             data-toggle="pill"
    //             href="#shop"
    //             role="tab"
    //             aria-controls="v-pills-profile"
    //             aria-selected="false"
    //           >
    //             Shop
    //           </a>
    //         </div>
    //       </div>
    //       <div className="col-8">
    //         <div className="tab-content" id="v-pills-tabContent">
    //           <div
    //             className="tab-pane fade show active"
    //             id="home"
    //             role="tabpanel"
    //             aria-labelledby="v-pills-home-tab"
    //           >
    //             <ProductList arrayProduct={dataJson} />
    //           </div>
    //           <div
    //             className="tab-pane fade"
    //             id="shop"
    //             role="tabpanel"
    //             aria-labelledby="v-pills-profile-tab"
    //           >
    //             Shop
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default App;
