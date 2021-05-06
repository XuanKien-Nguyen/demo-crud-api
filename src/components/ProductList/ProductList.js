import React, { Component} from 'react';


class ProductList extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Danh sách sản phẩm</h3>
              </div>
              
              <div className="panel-body">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>MÃ</th>
                      <th>TÊN SẢN PHẨM</th>
                      <th>GIÁ</th>
                      <th>TRẠNG THÁI</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.children}
                  </tbody>
                </table>
              </div>
          </div>
      </div>
    );
  }
}

export default ProductList;
