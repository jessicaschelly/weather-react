import React, { Component } from 'react';
import '../css/appBar.css'
import { connect } from 'react-redux';
import { filterByCategory } from '../actions/articleActions'
import $ from 'jquery'

class AppBar extends Component {

  categoryClick = (categoryId) => {
    console.log(categoryId)
    this.props.filterByCategory(categoryId)

    var toggler = $("#toggler");
    if (toggler.is(":visible") && toggler.attr("aria-expanded") == "true") 
      toggler.click();
  }
  render() {

    return (
      <div className="navbar-container bg-white">
        <nav className="navbar navbar-expand-lg navbar-light">
          <button id="toggler" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src="/menu.png" srcSet="/menu@2x.png 2x" width="24" height="19" alt="Menu"></img>

          </button>

          <a className="navbar-brand" onClick={(e) => this.categoryClick(null, e)} href="#">
            <img src="/logo.png" srcSet="/logo@2x.png 2x" width="45" height="45" alt="Company logo" />
          </a>

          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {this.props.categories.map((category, i) =>
                (<li key={i} className="nav-item">
                  <a className="nav-link" onClick={(e) => this.categoryClick(category.id, e)} href="#">{category.name} <span className="sr-only">(current)</span></a>
                </li>)
              )}

            </ul>

          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoryReducer.categories
});
export default connect(mapStateToProps, { filterByCategory })(AppBar);


