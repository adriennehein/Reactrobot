import React, { Component } from 'react';

class Kanye5000 extends Component {
  render() {
    var goodInput = this.props.words
    return(
        <h2>Kanye says: I am gonna let you finish, but {goodInput}</h2>
    );
  }
}


export default Kanye5000;
