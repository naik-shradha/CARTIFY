import React, { useState } from "react";
import '../styles/AddCart.css'

const AddCart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  const handleClickInc = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, price: item.price * 2 }; 
      }
      return item;
    });
    setCart(updatedCart); 
  };

  const handleClickDec = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, price: item.price / 2 }; 
      }
      return item;
    });
    setCart(updatedCart); 
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id); 
    setCart(updatedCart); 
  };

  return (
    <div>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt={item.title} />
            <p className="title">{item.title}</p>
          </div>
          <div className="btn">
            <button className="add" onClick={() => handleClickInc(item.id)}>+</button>
            <button className="remove" onClick={() => handleClickDec(item.id)}>-</button>
          </div>
          <div>
            <span className="price">Price : {item.price}Rs</span>
            <br/>
            <button className="remove" onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddCart;
