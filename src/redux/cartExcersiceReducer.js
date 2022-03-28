/** @format */

const cartState = {
  cart: [],
};

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let index = state.cart.findIndex(
        (item) => item.maSP === action.cart.maSP
      );
      if (index !== -1) {
        state.cart[index].soLuong += 1;
      } else {
        state.cart.push(action.cart);
      }
      // setState
      // update state
      state.cart = [...state.cart];
    }
    case "DELETE_ITEM": {
      let updateCart = [...state.cart];
      // tìm ra phần tử cần xoá
      let index = updateCart.findIndex((item) => item.maSP === action.id);
      if (index !== -1) {
        updateCart.splice(index, 1);
      }
      state.cart = updateCart;
      return { ...state };
    }
    case "TANG_GIAM_SO_LUONG": {
      let updateCart = [...state.cart];
      let index = updateCart.findIndex((item) => item.maSP === action.maSP);
      if (index !== -1) {
        if (action.tangGiam) {
          updateCart[index].soLuong += 1;
        } else {
          if (updateCart[index].soLuong < 1) {
            return;
          }
          updateCart[index].soLuong -= 1;
        }
      }
      state.cart = updateCart;
      return { ...state };
    }
  }
  return { ...state };
};

export default cartReducer;
