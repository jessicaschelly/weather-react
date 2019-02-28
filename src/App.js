import React, { Component } from 'react';
import AppBar from './js/appBar';
import CardBig from './js/cardBig';
import CardMedium from './js/cardMedium';
import CardSmall from './js/cardSmall';
import './css/animation.css'
import './App.css'
import { connect } from 'react-redux';
import { updateArticleList } from './actions/articleActions'
import { updateCategoryList } from './actions/categoryAction'

class App extends Component {

  componentDidMount() {
    this.props.updateArticleList();
    this.props.updateCategoryList();
  }

  render() {

    var filteredArticles = this.props.articles;

    if (this.props.categoryFilter != null)
      filteredArticles = filteredArticles.filter(article => article.categoryId == this.props.categoryFilter)
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <AppBar></AppBar>
        <div className="container">
          {filteredArticles.length == 0 && this.props.articles.length != 0 &&
            
            <div className="empty">
            <img src = "sorry.png" srcSet="sorry@2x.png 2x"></img>
            <div>
            No articles found for this category.</div>
            </div>
            }
            {this.props.articles.length == 0 &&
            <div className="spinner">
              <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>}
          <div className="row">
            {filteredArticles.map((article, i) => {
              if (i == 0)
                return (<CardBig key={i} article={article} />)
              if (i == 1 || i == 2)
                return (<CardMedium key={i} article={article} />)
            })}

          </div>
          {filteredArticles.length > 2 &&
            <hr></hr>}
          <div className="row">

            {filteredArticles.map((article, i) => {
              if (i > 2) {
                return (<CardSmall key={i} article={article} />)
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  articles: state.articleReducer.articles,
  categories: state.categoryReducer.categories,
  categoryFilter: state.articleReducer.categoryFilter
});
export default connect(mapStateToProps, {updateArticleList, updateCategoryList}) (App)
