import React from 'react';

  export const initialState = {
    car:
    {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    features:[
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
  ]
    };
  
  export function CarReducers(state=initialState, action) {
  console.log('CarReducers.js -> %cInitialState:', 'color: purple', initialState)

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
