import React from "react";
import "../styles/app.scss";
const selectedOrder = ({
  id,
  product,
  customer_name,
  customer_email,
  quantity,
}) => {
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
          <div class="ui button">
            <i class="edit outline icon"></i> Edit this Order
          </div>
        </div>
      </div>
    </>
  );
};
export default selectedOrder;
