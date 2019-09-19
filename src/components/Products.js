<<<<<<< HEAD
import React, {useContext} from 'react';
import { ProductContext } from "../contexts/ProductContext";

=======
import React from 'react';
>>>>>>> parent of ea7d9fa... initial push, steps 1-3 cmplt

// Components
import Product from './Product';

<<<<<<< HEAD
 

const Products = () => {

	const { products, addItem } = useContext(ProductContext);


=======
const Products = props => {
>>>>>>> parent of ea7d9fa... initial push, steps 1-3 cmplt
	return (
		<div className="products-container">
			{props.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>


			))}
		</div>
	);
};

export default Products;
