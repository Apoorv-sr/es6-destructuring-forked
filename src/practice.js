const cars = [
  {
    model: "Honda Civic",
    //The top colour refers to the first item in the array below:
    //i.e. hondaTopColour = "black"
    coloursByPopularity: ["black", "silver"],
    speedStats: {
      topSpeed: 140,
      zeroToSixty: 8.5
    }
  },
  {
    model: "Tesla Model 3",
    coloursByPopularity: ["red", "white"],
    speedStats: {
      topSpeed: 150,
      zeroToSixty: 3.2
    }
  }
];

function stats(temp) {
  // console.log(temp);
  let topSpeed = temp.speedStats.topSpeed;
  let color = temp.coloursByPopularity[0];
  return [topSpeed, color];
}

export default cars;
export { stats };
