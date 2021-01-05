import React, { useState } from "react";
import Form from "./forms";
import Order from "../dummyData";
import "../styles/app.scss";
const SelectedOrder = ({
  id,
  product,
  customer_name,
  customer_email,
  quantity,
}) => {
  const [showForm, toggleShowForm] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedCustomer, setSelecetedCustomer] = useState("");
  const [email, setCustomer_email] = useState("");
  const [Quantity, setQuiantiy] = useState("");

  return (
    <>
      <div className="currentSelection">
        <h5>
          CustomerName : {customer_name} <br />
          customer_email : {customer_email} <br />
          OrderId : {id}
          <br />
          ProductName : {product}
          <br />
          quantity : {quantity}
        </h5>
      </div>
      <div className="editButton">
        <div class="ui labeled button" tabindex="0">
          <div class="ui button" onClick={() => toggleShowForm(!showForm)}>
            <i class="edit outline icon"></i> Edit this Order
          </div>
        </div>
      </div>
      {showForm ? (
        <>
          <Form
            className="editData"
            id={id}
            product={product}
            customer_name={customer_name}
            customer_email={customer_email}
            quantity={quantity}
          />
        </>
      ) : (
        <>
          <div className="newEntry">
            <div className="ui labeled button" tabIndex="0">
              <div className="ui positive button">
                <i className=""></i> Add new Order
              </div>

              <div className="ui basic left pointing blue label">
                orderCount-{Order.length}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default SelectedOrder;
