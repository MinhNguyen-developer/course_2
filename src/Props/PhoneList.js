/** @format */

import React, { Component } from "react";
import Phone from "./Phone";
class PhoneList extends Component {
  dataPhone = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  state = {
    detailProduct: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };

  renderItem = () => {
    return this.dataPhone.map((phone, index) => {
      return (
        <div className="col-4" key={index}>
          <Phone viewDetail={this.viewDetail} propsItem={phone} />
        </div>
      );
    });
  };

  viewDetail = (newPhone) => {
    this.setState({
      detailProduct: newPhone,
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-center">PRODUCT LIST</h3>
        <div className="row">{this.renderItem()}</div>
        <div className="row">
          <div className="col-4">
            <h3>{this.state.detailProduct.tenSP}</h3>
            <img
              style={{ width: "100%" }}
              src={this.state.detailProduct.hinhAnh}
              alt={this.state.detailProduct.hinhAnh}
            />
          </div>
          <div className="col-8">
            <h3>Thong so ky thuat</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <td>{this.state.detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <td>{this.state.detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <td>{this.state.detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <td>{this.state.detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <th>Ram</th>
                  <td>{this.state.detailProduct.ram}</td>
                </tr>
                <tr>
                  <th>Rom</th>
                  <td>{this.state.detailProduct.rom}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneList;
