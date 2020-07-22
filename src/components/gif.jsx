import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.selectGif(this.props.id)
  }
  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return(
      <div className="selected-gif">
          <img src={src} alt="" className="gif" onClick={this.handleClick}/>
      </div>
      )
  }
}

export default Gif
