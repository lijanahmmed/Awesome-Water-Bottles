import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import Cart from '../Cart/Cart';

const Bottles = ({ bottlesPromise }) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);

    // useEffect
    useEffect(() => {
        // console.log(storedCartIds, bottles);

        const storedCart = [];

        

        console.log('stored cart', storedCart);
        setCart(storedCart);

    }, [bottles])


    const handleAddToCart = (bottle) => {
        // console.log('bottle will be added to the cart', bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);

        // save the bottle id in the storage
        
    }

    const handleRemoveFromCart = id => {
        console.log('remove item from the cart', id)

        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        
    }

    // console.log(bottles);

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Added to cart: {cart.length}</p>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        handleAddToCart={handleAddToCart}
                        bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;