import React, { Component } from 'react';

import './categories.css';
import Header from '../header/header';
import {
  Link
} from 'react-router-dom';

class Categories extends Component {

  // render methods
  renderEmptyState() {
    return (
      <div className="Categories-empty">
        <Header>
          Nothing to see here
        </Header>
      </div>
    );
  }
  renderCategories() {
    return this.props.categories.map((category, index) => {
      return (
        <Link key={`category-${index}`}
            to={`${this.props.baseUrl}categories/${category.id}`}
        >
          <Category
              key={`category-${index}`}
              category={category}
          />
        </Link>
      )
    });
  }
  renderModule() {
    let component = '';
    if (this.props.categories && this.props.categories.length > 0) {
      component = this.renderCategories();
    } else {
      component = this.renderEmptyState();
    }

    return component;
  }
  render() {
    return (
      <div className="Categories">
        {
          this.renderModule()
        }
      </div>
    );
  }
}

const Category = (props) => (
  <div className="Categories-item">
    {
      props.category.name
    }
  </div>
);

export default Categories;
