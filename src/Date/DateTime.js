import React from "react";

const DateTime = () => {
  let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

const res = cities.filter((city, index, arr) =>{
  return city.population>3000000;
})
console.log(cities);

console.log(res);

 

  return <div>DateTime</div>;
};

export default DateTime;
