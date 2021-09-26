import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const SideCart = (props) => {
  console.log(props);
  let total = 0;
  for (const item of props.cart) {
    total += item.salary;
  }
  return (
    <>
      <div className="mt-3">
        <h2>
          <span style={{ color: "rgb(34, 178, 207)" }}>actor added</span>:{" "}
          {props.cart.length}
        </h2>
        <h3>
          <span style={{ color: "rgb(34, 178, 207)" }}> total cost:</span>
          <span>{total}Rs</span>
        </h3>
        <div>
          {props.cart.map((item) => (
            <Name key={item.id} name={item.name} />
          ))}
        </div>
      </div>
    </>
  );
};

const Name = (props) => {
  return (
    <p className="h6">
      <FontAwesomeIcon icon={faArrowRight} /> {props.name}
    </p>
  );
};

export default SideCart;
