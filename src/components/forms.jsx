import React, { useState } from "react";

const Form = ({ id, product, customer_name, customer_email, quantity }) => {
  const [selectedOrder, setSelectedOrder] = useState(id);
  const [selectedProduct, setSelectedProduct] = useState(product);
  const [selectedCustomer, setSelecetedCustomer] = useState(customer_name);
  const [selectCustomer_email, setCustomer_email] = useState(customer_email);
  const [selectQuantity, setQuiantiy] = useState(quantity);
  const editDoc = (e, param) => {
    e.preventDefault();
    console.log("param");
  };
  return (
    <>
      <form class="ui form">
        <div class="field">
          <label>OrdeId</label>
          <input type="text" name="orderId" value={id} disabled />
        </div>
        <div class="field">
          <label>Product Name</label>
          <input type="text" name="product" value={product} disabled />
        </div>
        <div class="field">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div class="field">
          <label>Customer Name</label>
          <input type="text" name="name" placeholder="Full Name" />
        </div>
        <div class="field">
          <label>Quantity</label>
          <input type="text" name="quantity" placeholder="Number" />
        </div>

        <button class="ui button" type="submit" onClick={(e) => editDoc(e)}>
          Submit
        </button>
      </form>
    </>
  );
};
export default Form;
