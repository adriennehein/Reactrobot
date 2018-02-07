import React, { Component } from 'react';
import Goodrobot from './goodrobot.js';
import Badrobot from './badrobot.js';
import Kanye5000 from './kanye5000.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      words: '',
      badOutput: ""
    }
  }

  getWords(e) {
    this.setState({words: e.target.value})
    // console.log(e.target.value)
    var blah = "BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA"
    var count = this.state.words.length
    var print = blah.substr(0, count)
    console.log(print);
    this.setState({badOutput: print})
  }

  render() {
    return (
      <div>
        <h1>The Good, the Bad, and the Kanye</h1>
        <p>Your words here:</p> <input type="text" onChange={this.getWords.bind(this)}/>
        <div>
          <Goodrobot words={this.state.words} />
        </div>
        <div>
          <Badrobot words={this.state.badOutput}/>
        </div>
        <div>
          <Kanye5000 words={this.state.words} />
        </div>
      </div>
    );
  }
}

export default App;
