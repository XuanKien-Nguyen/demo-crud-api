import * as types from './../constants/ActionTypes.js';

var initialState = [];

var findIndex = (products, id) => {
    var index = -1;
    var result = null;
    products.forEach((product, index) => {
      if(product.id === id){
        result = index;
      }
    });
    return result;
  }

const products = (state = initialState, action) => {
    
    var index = -1;
    var {id, product} = action;
    
    switch(action.type){
        case types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case types.DELETE_PRODUCT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case types.UPDATE_PRODUCT:
            index = findIndex(state, product.id);
            state[index] = product;
            return [...state];
        default: return [...state];
    }
};

export default products;