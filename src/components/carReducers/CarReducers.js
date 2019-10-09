import React from 'react';




  export const initialState = {
    id: null,
    name: 'Add a Feature!',
    price: 0,
    buyItem: false,
    removeFeature: false,
  
    };
  
  export const CarReducers = (state, action) => {
    switch (action.type) {
      case 'BUY_ITEM':
        const newFeature = {
          name: action.payload,
          id: action.id,
          
          removeFeature: false,
          addToCart: true
          };
          return {
            ...state,
             newFeature
          };

  
        case 'TOGGLE_REMOVE_FEATURE':
                        return {
              ...state,
              removeFeature: !state.removeFeature
            };

      default:
        return state;
    }
  };
