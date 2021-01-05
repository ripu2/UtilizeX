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
  const [showNewForm, toggleShowNewForm] = useState(false);

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
        <div className="ui labeled button" tabIndex="0">
          <div className="ui button" onClick={() => toggleShowForm(!showForm)}>
            <i className="edit outline icon"></i> Edit this Order
          </div>
        </div>
      </div>
      {showForm ? (
        <>
          <Form
            className="editData"
            message="Add the required field"
            disableStatus="disabled"
            buttonMessage="save changes"
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
              <div
                className="ui positive button"
                onClick={() => toggleShowNewForm(!showNewForm)}
              >
                <i className=""></i> Add new Order
              </div>

              <div className="ui basic left pointing blue label">
                orderCount-{Order.length}
              </div>
            </div>
          </div>
          {showNewForm ? (
            <>
              <Form
                className="editData"
                message="Add the required field"
                disableStatus=""
                buttonMessage="Add to collection"
                id="auto Generated"
              />
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};
export default SelectedOrder;
