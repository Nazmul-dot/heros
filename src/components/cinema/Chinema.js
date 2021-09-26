import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import SideCart from "../sidebar/SideCart";

const Chinema = () => {
  const [actor, setActor] = useState([]);
  const [cart, setcart] = useState([]);
  useEffect(() => {
    fetch("fakedb.JSON")
      .then((res) => res.json())
      .then((data) => setActor(data));
  }, []);

  const handlechange = (item) => {
    console.log(item);
    setcart([...cart, item]);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row gap-5">
              {actor.map((item) => (
                <Cart key={item.id} item={item} handlechange={handlechange} />
              ))}
            </div>
          </div>

          <div className="col-3 ">
            <SideCart cart={cart} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chinema;
