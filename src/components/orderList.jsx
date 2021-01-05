import React, { useState } from "react";
import Order from "../DummyData";
import "../styles/app.scss";

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState("");
  const [selectProduct, setSelectedProduct] = useState("");
  const [selectedCustomer, setSelecetedCustomer] = useState("");
  const [customer_email, setCustomer_email] = useState("");
  const [quantity, setQuiantiy] = useState(" ");

  return (
    <>
      <div className="list">
        <div className="scroller">
          {Order.map(
            ({ id, product, customer_name, customer_email, quantity }) => {
              return (
                <div
                  className="item"
                  value={product}
                  onClick={() => {
                    setSelectedOrder(id);
                    setSelectedProduct(product);
                    setSelecetedCustomer(customer_name);
                    setCustomer_email(customer_email);
                    setQuiantiy(quantity);
                  }}
                >
                  <table>
                    <tr>{customer_email}</tr>
                    <tr>{product}</tr>
                  </table>
                </div>
              );
            }
          )}
        </div>
      </div>
      <h5>
        CustomerName : {selectedCustomer} <br />
        customer_email : {customer_email} <br />
        OrderId : {selectedOrder}
        <br />
        ProductName : {selectProduct}
        <br />
        quantity : {quantity}
      </h5>
    </>
  );
};

export default Orders;
