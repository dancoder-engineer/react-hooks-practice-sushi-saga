import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";


function SushiContainer({sushi, addPlate, takeMoney}) {
  const [firstNo, setFirstNo] = useState(0)
  
  function increaseNo() {
    setFirstNo(firstNo+4)
  }

  function fourSushi() {
    let returnThis = []
    let sushiList = sushi.map(i => <Sushi i={i} addPlate={addPlate}/>)
    //console.log(firstNo)
    returnThis.push(sushiList[firstNo])
    returnThis.push(sushiList[firstNo+1])
    returnThis.push(sushiList[firstNo+2])
    returnThis.push(sushiList[firstNo+3])


    return returnThis 
    

  }


  return (
    <div className="belt">
      {fourSushi()}
      <MoreButton increaseNo={increaseNo} />
    </div>
  );
}

export default SushiContainer;
