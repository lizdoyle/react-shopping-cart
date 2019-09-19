import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

<<<<<<< HEAD
//Context
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";


=======
>>>>>>> parent of ea7d9fa... initial push, steps 1-3 cmplt
function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
<<<<<<< HEAD
		
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart }} >
					<Navigation cart={cart} />
				</CartContext.Provider>
			</ProductContext.Provider>
					{/* Routes */}
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart }} >
					<Route exact path="/" components={Products} />
				</CartContext.Provider>
			</ProductContext.Provider>

				<ProductContext.Provider value={{ products, addItem }}>
					<CartContext.Provider value={{ cart }} >
						<Route path="/cart" components={ShoppingCart} />
					</CartContext.Provider>
				</ProductContext.Provider>
		</div>
	
=======
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}
			/>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
		</div>
>>>>>>> parent of ea7d9fa... initial push, steps 1-3 cmplt
	);
}

export default App;
