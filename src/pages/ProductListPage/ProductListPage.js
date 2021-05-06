import React, { Component} from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import callApi from './../../callapi/apiCall';
import {Link} from 'react-router-dom';
import {actDeleteProductRequest, actFetchProductsRequest} from './../../actions/index';

class ProductListPage extends Component {
  
  constructor(props){
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {

    var {products} = this.props;
    
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">             
        <Link to="/products/add" className="btn btn-primary mb-10"><i className="fa fa-plus mr-5" aria-hidden="true"></i>
          Thêm sản phẩm
        </Link>
        <ProductList>
          {this.showProducts(products)}
        </ProductList> 
      </div>
    );
  }

  onDelete = id => {
    this.props.onDeleteProduct(id);
  }


  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem 
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        )
      })
      return result;
    }
  }

}

const mapStateToProps = state => {
  return {
    products : state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts : () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct : (id) => {
      dispatch(actDeleteProductRequest(id));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
