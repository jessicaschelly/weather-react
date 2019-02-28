import React, { Component } from 'react';
import '../css/cardMin.css'
import AuthorBox from '../js/authorBox'
import { connect } from 'react-redux';

const cardStyle = {
  width: '18rem'
}

class CardSmall extends Component {
  state = {
    category : {}
  }

  componentDidMount(){
    this.setState({category: this.props.categories.find(
      category => category.id == this.props.article.categoryId
    )});

  }


  render() {
    return (
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="card w3-animate-opacity">
          <div className="card-body">
            <div className="category" style={{  color: this.state.category.color }}>{this.state.category.name}
            </div>
            <h5 className="card-title">{this.props.article.title} </h5>
            <AuthorBox author={this.props.article.author}></AuthorBox>
            <p className="card-text">{this.props.article.text}</p>
          </div>
        </div>
      </div>



    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoryReducer.categories
});
export default connect(mapStateToProps) (CardSmall);
