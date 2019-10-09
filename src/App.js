import React from 'react';
import {connect} from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const store = createStore(CarReducers);

const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} />
        <Total car={props.car} 
        additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
const mapStateToProps = props => {
  return {
    additionalPrice: props.additionalPrice,
    car: props.car
  }
}

export default connect(mapStateToProps, {car, additionalPrice})(App);

