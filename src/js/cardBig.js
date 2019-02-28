import React, { Component } from 'react';
import '../css/cardBig.css'
import '../css/comum.css'
import AuthorBox from './authorBox';
import { connect } from 'react-redux';
const cardStyle = {
  width: '18rem'
}

class CardBig extends Component {
  state = {
    category: {}
  }

  render() {
    this.state.category = this.props.categories.find(
      category => category.id == this.props.article.categoryId
    );

    return (
      <div className="col-md-6 col-sm-12 col-xs-12">
        <div className="card big w3-animate-opacity">
          <div className="category" style={{ color: this.state.category.color }}>{this.state.category.name}
          </div>
          <div className="img-container">
            <img className="card-img-top" src={this.props.article.img} srcSet={this.props.article.retina} alt="Ex-president of the United States: Barack Obama" />
            {this.props.article.showReadMore == true &&
              <a className="btn btn-outline-dark" target="_blank" href={this.props.article.link} role="button">Read More</a>
            }
          </div>
          <div className="card-body">
            <h5 className="card-title big">{this.props.article.title}</h5>
            <AuthorBox author={this.props.article.author}></AuthorBox>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  categories: state.categoryReducer.categories
});
export default connect(mapStateToProps)(CardBig);
