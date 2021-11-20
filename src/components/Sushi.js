import React, {useState} from "react";

function Sushi({i, addPlate}) {

  const [eaten, setEaten] = useState(false)

  function eat() {
    if(!eaten) { setEaten(addPlate(i)) }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={eat}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={i.img_url}
            alt={i.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {i.name} - ${i.price}
      </h4>
    </div>
  );
}

export default Sushi;
