import React, { useState } from "react";
import Orders from "../dummyData";
const Form = ({ id, product, customer_name, customer_email, quantity }) => {
  const [selectedOrder, setSelectedOrder] = useState(id);
  const [selectedProduct, setSelectedProduct] = useState(product);
  const [selectedCustomer, setSelecetedCustomer] = useState(customer_name);
  const [selectCustomer_email, setCustomer_email] = useState(customer_email);
  const [selectQuantity, setQuiantiy] = useState(quantity);
  const editDoc = (e, id, newName, newEmail, newQuantity) => {
    e.preventDefault();

    console.log(newEmail);
    console.log(newName);
    console.log(newQuantity);
    for (var i in Orders) {
      if (Orders[i].id === id) {
        Orders[i].customer_email = newEmail;
        Orders[i].customer_name = newName;
        Orders[i].quantity = newQuantity;
        console.log(Orders[i]);
        break;
      }
    }
  };
  return (
    <>
      <form class="ui form">
        <h3>Change the attributes you want to edit</h3>
        <div class="field">
          <label>OrdeId</label>
          <input type="text" name="orderId" value={id} disabled />
        </div>
        <div class="field">
          <label>Product Name</label>
          <input type="text" name="product" value={product} disabled />
        </div>
        <div class="field">
          <label>NewEmail</label>
          <input
            type="email"
            name="email"
            value={selectCustomer_email}
            onChange={(e) => setCustomer_email(e.target.value)}
            placeholder="if no change, write previous email"
          />
        </div>
        <div class="field">
          <label>New Customer Name</label>
          <input
            type="text"
            name="name"
            value={selectedCustomer}
            onChange={(e) => setSelecetedCustomer(e.target.value)}
            placeholder="if no change, write previous name"
          />
        </div>
        <div class="field">
          <label>New Quantity</label>
          <input
            type="text"
            name="quantity"
            value={selectQuantity}
            onChange={(e) => setQuiantiy(e.target.value)}
            placeholder="if no change, write previous quantity"
          />
        </div>

        <button
          class="ui button"
          type="submit"
          onClick={(e) =>
            editDoc(
              e,
              id,
              selectedCustomer,
              selectCustomer_email,
              selectQuantity
            )
          }
        >
          Save Changes
        </button>
      </form>
    </>
  );
};
export default Form;
