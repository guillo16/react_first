import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gift from './gift.jsx';
import GifList from './gift_list.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     gifs: [],
     selectedGifId: "YRiEYJFPHEzPbHECfh"

    }
  }
  render() {
    const gifs = [
    {id: 'jUL2BawurnYHS6gSJ5'},
    {id: 'YRiEYJFPHEzPbHECfh'}
    ]
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gift id="jUL2BawurnYHS6gSJ5"/>
          </div>
        </div>
        <div className="right-scene">
        <GifList gifs={gifs}/>
        </div>
      </div>
      )
  }
}

export default App;
