import React, { Component} from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {

  onDelete = id => {
    if(confirm('Bạn có muốn xóa sản phẩm?')) { // eslint-disable-line
      this.props.onDelete(id);
    }
  }

  render() {
    var {product, index} = this.props;
    var statusName = product.status ? 'Còn hàng' : 'Hết hàng';
    var statusClass = product.status ? 'success' : 'default';
    return (
        <tr>
          <td>{index + 1}</td>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>${product.price}</td>
          <td>
            <span className={`label label-${statusClass}`}>{statusName}</span>
          </td>
          <td>
            <Link
              to={`/products/${product.id}/edit`}
              className="btn btn-primary mr-10"
            ><i className="fa fa-pencil mr-5" aria-hidden="true"></i>Sửa</Link>
            <button 
              type="button" 
              className="btn btn-danger" 
              onClick={() => this.onDelete(product.id)}><i className="fa fa-trash-o mr-5" aria-hidden="true"></i>Xóa</button>
          </td>
        </tr>
    );
  }
}

export default ProductItem;
