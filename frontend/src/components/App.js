import React, { Component } from 'react';
import { getCategories } from '../actions/category';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    return (
      <div className="App">
        {this.props.categories.map(c => `cat: ${c.name}`)}
      </div>
    );
  }
}

function mapStateToProps({ category }) {
  return {
    categories: category.categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: data => dispatch(getCategories(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
