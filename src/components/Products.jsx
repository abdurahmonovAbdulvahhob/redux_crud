import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/wishlist-slice";

const DATA = [
  {
    id: 1,
    title: "Galaxy s22",
    price: 899,
  },
  {
    id: 2,
    title: "Iphone 12",
    price: 1099,
  },
  {
    id: 3,
    title: "Samsung Galaxy S21",
    price: 799,
  },
  {
    id: 4,
    title: "Xiaomi Mi 11",
    price: 699,
  },
];

const Products = () => {
  const dispatch = useDispatch()
  return <div>Products
    {DATA.map((product) => (
      <div className="flex border gap-5 justify-between my-4" key={product.id}>
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <button className="bg-red-600 rounded-lg py-1 px-3" onClick={()=>dispatch(addItem(product))}>like</button>
        <hr />
      </div>
    ))}
  
  </div>;
};

export default Products;
