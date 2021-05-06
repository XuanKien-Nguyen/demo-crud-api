import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions';
import {connect} from 'react-redux';


class ProductActionPage extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      checkStatus: ''
    };
  }

  //lifecycles hook
  componentDidMount(){
    var {match} = this.props;
    if(match){
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps && nextProps.itemEditing) {
      var {itemEditing} = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        checkStatus: itemEditing.status
      })
    }
  }
  
  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    })
  }

  onSave = event => {
    event.preventDefault();
    var {id, txtName, txtPrice, checkStatus} = this.state;
    var {history} = this.props;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: checkStatus
    };
    if(id){ // Update
      this.props.onUpdateProduct(product);
    }else{
      this.props.onAddProduct(product);
    }
    history.goBack();
  }

  render() {
    var {txtName, txtPrice, checkStatus} = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">             
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên sản phẩm: </label>
            <input 
              type="text" 
              className="form-control" 
              name="txtName"
              value = {txtName}
              onChange = {this.onChange}  
            />
          </div>
          <div className="form-group">
            <label>Giá: </label>
            <input 
              type="text" 
              className="form-control"  
              name="txtPrice"
              value = {txtPrice}
              onChange = {this.onChange}    
            />
          </div>
          <div className="form-group">
            <label>Trạng thái: </label>
          </div>
          <div className="checkbox">
            <label>
              <input 
                type="checkbox" 
                name="checkStatus"
                value={checkStatus}
                onChange={this.onChange}
                checked={checkStatus}
              />
              Còn hàng
            </label>
          </div>
          <Link to="/product-list" className="btn btn-danger mr-10"><i className="fa fa-reply mr-5"></i>
            Trở lại
          </Link>
          <button type="submit" className="btn btn-primary"><i className="fa fa-check mr-5"></i>Lưu</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct : (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
