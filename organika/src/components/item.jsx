import React, { Component } from 'react'; //imrc
import "./item.css"
import QuantityPicker from './quantityPicker';

class Item extends Component { //cc
    state = {  };

    render() { 
        return ( 
          <div className="item-bar">
             <img src={"/images/products/" + this.props.product.image} alt="item" />
            
             <h6>{this.props.product.title}</h6>
             <label>Total: ${this.props.product.price.toFixed(2)}</label>
             <br></br>
             <label>Price: ${this.props.product.price.toFixed(2)}</label>
             <div className="item-controls">
             <QuantityPicker></QuantityPicker>
             
               <button className="btn btn-sm btn-light btn-add">
               <i className="fa fa-cart-plus" aria-hidden="true"></i>
             </button>
             </div>
          </div> )
    }
}
 
export default Item;