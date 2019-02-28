import React, { Component } from 'react';
import '../css/card.css'
import AuthorBox from './authorBox';
import { connect } from 'react-redux';
const cardStyle = {
  width: '18rem'
}

class CardMedium extends Component {
  state = {
    category : {}
  }

  render() {
    this.state.category = this.props.categories.find(
      category => category.id == this.props.article.categoryId
    );
    
    return (
      <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="card medium w3-animate-opacity">
          <div className="category" style={{  color: this.state.category.color }}>{this.state.category.name} </div>
          <div className="img-container">
            <img className="card-img-top" src={this.props.article.img} alt="News image" />
            {this.props.article.showReadMore == true &&
              <a className="btn btn-outline-dark" target="_blank" href={this.props.article.link} role="button">Read More</a>
            }
          </div>
          <div className="card-body">
            <h5 className="card-title medium">{this.props.article.title}</h5>
            <AuthorBox author={this.props.article.author}></AuthorBox>
            <p className="card-text medium">{this.props.article.text}</p>
          </div>
        </div>
      </div>

    );
  }
}
const mapStateToProps = state => ({
  categories: state.categoryReducer.categories
});
export default connect(mapStateToProps) (CardMedium);
