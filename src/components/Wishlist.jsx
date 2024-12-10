import React from 'react'
import Products from './Products'
import { useSelector } from 'react-redux'

const Wishlist = () => {
  const products = useSelector(state=> state.wishlist.value)
  console.log(products)
  return (
    <div>
      Wishlist
      {products.map((product) => (
        <div
          className="flex border gap-5 justify-between my-4"
          key={product.id}
        >
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Wishlist