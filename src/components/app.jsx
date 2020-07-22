import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        gifs: [],
        selectedGif: ''
      }
    }

    search = (query) => {
      giphy('tE53IfrkhhbZ44RMXHsj1YAv1zyJv8Gf').search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, res) => {
         this.setState({
          gifs: res.data
         })
      })


    }

    selectGif = (id) => {
      this.setState({
        selectedGif: id
      })
    }

   render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <Gif id={this.state.selectedGif}/>
        </div>
        <div className="right-scene">
            <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
      )
   }
}

export default App
