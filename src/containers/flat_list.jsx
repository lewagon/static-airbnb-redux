import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Flat from "../containers/flat";

import { setFlats } from "../actions";

class FlatList extends Component {
  // static defaultProps = {
  //   flats: [{
  //     "name": "Charm at the Steps of Montmartre",
  //     "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
  //     "price": 164,
  //     "priceCurrency": "EUR"
  //   },{
  //     "name": "Charm at the Steps of Sacre-Coeur",
  //     "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
  //     "price": 164,
  //     "priceCurrency": "EUR"
  //   }]
  // }

  componentWillMount() {
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat, index) => {
          return <Flat key={flat.name} flat={flat} tabIndex={index} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flats: state.flats
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFlats }, dispatch);
}

// export default FlatList;
export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
