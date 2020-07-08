import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gift from './gift.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gift id="jUL2BawurnYHS6gSJ5"/>
          </div>
        </div>
        <div className="right-scene">
        </div>
      </div>
      )
  }
}

export default App;
