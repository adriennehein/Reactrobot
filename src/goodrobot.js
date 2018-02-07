import React, { Component } from 'react';

class Goodrobot extends Component {


  render() {
    var goodInput = this.props.words

    return(
      <h2>The Good: I hear you saying {goodInput}. Is that correct?</h2>

    );
  }
}


export default Goodrobot;
