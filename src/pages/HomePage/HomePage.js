import React, { Component} from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div className='container'>
        <Link to="/product-list" className="btn btn-lg btn-primary home-page">
          Sang trang quản lý sản phẩm<i className="fa fa-angle-right ml-10"></i>
        </Link>
      </div>
    );
  }
}

export default HomePage;
