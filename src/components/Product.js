import React, {Component} from 'react';


class Product extends Component {
  render(){
	return (
	    <div className="App">
	      	<h1> {this.props.name} </h1>
	    	<h3> {this.props.age} </h3>
	    </div>
	);
  }
}

export default Product;