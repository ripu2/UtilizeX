import React, { useState } from "react";
import Orders from "../dummyData";
const Form = ({
  id,
  product,
  customer_name,
  customer_email,
  quantity,
  message,
  disableStatus,
  buttonMessage,
}) => {
  const [selectedCustomer, setSelecetedCustomer] = useState(customer_name);
  const [selectCustomer_email, setCustomer_email] = useState(customer_email);
  const [selectQuantity, setQuiantiy] = useState(quantity);
  const [selectedProduct, setSelectedProduct] = useState(product);
  var mongoObjectId = function () {
    var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
    return (
      timestamp +
      "xxxxxxxxxxxxxxxx"
        .replace(/[x]/g, function () {
          return ((Math.random() * 16) | 0).toString(16);
        })
        .toLowerCase()
    );
  };
  const editDoc = (e, id, newName, newEmail, newQuantity, newProduct) => {
    var found = false;
    var target = 0;
    e.preventDefault();
    for (var i in Orders) {
      if (Orders[i].id === id) {
        target = i;
        found = true;
        break;
      }
    }
    if (found) {
      Orders[target].customer_email = newEmail;
      Orders[target].customer_name = newName;
      Orders[target].quantity = newQuantity;
      Orders[target].product = newProduct;
    } else {
      Orders.unshift({
        customer_name: selectedCustomer,
        customer_email: selectCustomer_email,
        product: selectedProduct,
        quantity: selectQuantity,
        id: mongoObjectId(),
      });
    }
  };
  return (
    <>
      <form class="ui form">
        <h3>{message}</h3>
        <div class="field">
          <label>OrdeId</label>
          <input type="text" name="orderId" value={id} disabled />
        </div>
        <div class="field">
          <label>Product Name</label>
          <input
            type="text"
            name="product"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          />
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
              selectQuantity,
              selectedProduct
            )
          }
        >
          {buttonMessage}
        </button>
      </form>
    </>
  );
};
export default Form;
