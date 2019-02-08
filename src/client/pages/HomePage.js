import React from "react";

const Home = () => {
  return (
    <div>
      <div>BigBuy</div>
      <button onClick={() => console.log("Hi there!")}>Compra!</button>
    </div>
  );
};

export default {
  component: Home
};
