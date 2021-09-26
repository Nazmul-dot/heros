import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./cart.css";
const Cart = (props) => {
  //   console.log(props.item);
  const { name, role, age, country, salary, image } = props.item;
  //   console.log(name, role, age, country, salary, image);
  return (
    <>
      <div className="card col-4 pt-2" style={{ width: "18rem" }}>
        <div className="text-center">
          <img
            src={image}
            className="card-img-top  rounded-circle "
            style={{ height: "85px", width: "85px" }}
            alt=""
          />
        </div>
        <div className="card-body text-white">
          <h5>
            name : <small>{name}</small>
          </h5>
          <h5>
            role : <small>{role}</small>
          </h5>
          <h5>
            age : <small>{age}</small>
          </h5>
          <h5>
            country : <small>{country}</small>
          </h5>
          <h5>
            salary : <small>{salary}</small>
          </h5>
          <div style={{ textAlign: "center" }} className="my-3">
            <button
              onClick={() => props.handlechange(props.item)}
              className="btn btn-danger"
            >
              <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
