import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  //let sushi = []
  const [sushi, setSushi] = useState([])
  const [money, setMoney] = useState(100)
  const [plates, setPlates] = useState([])


  function addPlate(data) {
    if(data.price <= money) {
    setPlates([...plates, data])
    setMoney(money - data.price)
    return true
    }
    else { return false }
  }

  useEffect(() => {
    fetch(API)
    .then (res => res.json())
    .then (data => {
      setSushi(data)
      console.log(data)
    })
  }, [])

 

  return (
    <div className="app">
      <SushiContainer sushi={sushi} addPlate={addPlate}/>
      <Table money={money} plates={plates}/>
    </div>
  );
}

export default App;
