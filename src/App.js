import "./App.css";
import React, { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
    const [listOfItems, setListOfItems] = React.useState([]);
    const [thePrice, setThePrice] = React.useState(0);

    const addToList = (thingToAdd) => {
        setListOfItems([...listOfItems, thingToAdd])
    }

    const addToPrice = (price) => {
        setThePrice(thePrice + price)
    }

  return (
    <div className="App">
      <div>
          <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
              <BakeryItem name={item.name} description={item.description} price={item.price}
                          image={item.image} addFunction={addToList} addFunctionPrice={addToPrice}>
              </BakeryItem>

          ))}
      </div>

      <div>
        <h2>Cart</h2>
          {listOfItems.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
              <p>{item}</p>
          ))}
          <p>THE PRICE IS {thePrice}</p>
      </div>
    </div>
  );
}

export default App;
