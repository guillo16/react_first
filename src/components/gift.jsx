import React, { Component } from 'react';

class Gift extends Component {
  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/100w.gif`
    return(
       <img src={src} alt="" className="gif"/>
      )
  }
}

export default Gift;




