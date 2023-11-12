import React, { useState } from "react";

function Button() {
  const [countFood, setFoodCount] = useState(0);


  const handleClick = () => {
    if (countFood === 0) {
      setFoodCount(countFood + 1);
      return;
    }

    else if (countFood === 1) {
      setFoodCount(countFood - 1);
      return;
    }
  };

  return (
    <div className="container">
      <div className="btn-container">
        <button
          className="btn"
          onClick={handleClick}
        >
          <span className="material-symbols-rounded"><i className="fa-solid fa-cart-shopping icon"></i></span> {countFood}
        </button>
      </div>
    </div>
  );
}

export default Button;