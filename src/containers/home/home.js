import React, { Component } from 'react';

import './home.css';
import Categories from '../../components/categories/categories';
import CategoryFetcher from '../../fetchers/categories/categories';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    this.fetchCategories();
  }

  //helpers
  fetchCategories() {
    CategoryFetcher.all((err, response) => {
      if (err) {
        // Handle Error
      } else {
        this.setState({
          categories: response,
          isLoading: false,
        });
      }
    })
  }

  // Render Methods
  renderLoader() {
    return (
      <div className="loader">
        I am loading...
      </div>
    );
  }
  renderContent() {
    return (
      <div className="Home-wrapper">
        <Categories
            key="categories"
            baseUrl={this.props.match.url}
            categories={this.state.categories}
        />
      </div>
    );
  }
  renderModule() {
    let component = '';
    if (this.state.isLoading) {
      component = this.renderLoader();
    } else {
      component = this.renderContent();
    }

    return component;
  }
  render() {
    return (
      <div className="Home">
        {
          this.renderModule()
        }
      </div>
    );
  }
}

export default Home;
