import React, { Component } from 'react';

class AuthorBox extends Component {


  render() {
    return (
      <div className="author-box"><img className="author-img" src={this.props.author.img} srcSet={this.props.author.retina} alt="Author picture" />
        <span><h6 className="card-subtitle">{this.props.author.name}</h6></span>
      </div>
    );
  }
}

export default AuthorBox;
