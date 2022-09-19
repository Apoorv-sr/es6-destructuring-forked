// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
// import animals from "./data.js";
import cars, { stats } from "./practice";

// console.log(animals);
// let [cat, dog] = animals;
//see above we have destructured animals object,now the above code is same as cat=animals[0],dog=animals[1];
// console.log(cat);
//now we will destructure the object cat see below
// let { name, sound } = cat;
// console.log(name, sound);
//note we can give any name while destructurin an array but if we have to destructure an object then the name should be same as the actual key name like here we have given the name name and sound but if we would have written let {n,d}=cat,then it would not had worked and n and d will have undefined value,but while destructuring an array we can give any name

// console.log(cars);
//now we will destrucuture the car array imported

let [honda, tesla] = cars;
//console.log(tesla);
//now we need topspeed and teslaTopColour in our code so we need to destrucutre the tesla object,so we can paas the tesla object to a function that will return an array containing both the values like

let [teslaTopSpeed, teslaTopColour] = stats(tesla);
let [hondaTopSpeed, hondaTopColour] = stats(honda);
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
