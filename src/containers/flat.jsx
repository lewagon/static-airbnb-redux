import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectFlat } from "../actions";

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  };

  render() {
    const props = this.props;
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${
        props.flat.imageUrl
      }')`
    };

    let containerClasses = "flat card-container";
    if (this.props.flat === this.props.selectedFlat) {
      containerClasses += " selected";
    }
    return (
      <div className={containerClasses} onClick={this.handleClick} role="link" tabIndex={this.props.tabIndex + 1}>
        <div className="card" style={style}>
          <div className="card-description">
            <h2>{props.flat.name}</h2>
            <p>
              {props.flat.price} {props.flat.priceCurrency}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectFlat }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
