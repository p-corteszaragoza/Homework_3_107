import React, { Component } from 'react'; //imrc
import Item from "./item";
import "./catalog.css"
import ItemService from './../services/itemServices';

class Catalog extends Component { //cc
    state = {  
      items: []
    };

    constructor(){
      super();
    }
    // display element on the screen
    render() { 
        return ( 
          <div className="catalog-container">
            <h3>Our amazing catalog with {this.state.items.length} products</h3>
          
           { this.state.items.map((product) => (
             <Item key={product._id} product ={product}></Item>
             ))}
          </div>
       );
    }

    // called after the render function
    componentDidMount() {
      console.log("Catalog did mount");

      // call the service to get the list of items
      var itemServices = new ItemService();
      var items = itemServices.getCatalog();
      console.log(items);
      this.setState({items: items});

    }
}
 
export default Catalog;