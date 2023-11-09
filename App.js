import React, { useState } from 'react';
import './App.css';
import a from './images/dish2.jpg'
import b from './images/фото2.jpg'
import c from './images/фото3.jpg'
import d from './images/фото4.jpg'




const dishes = [
  {
    name: 'Курочка с картошечкой',
    image: a,
    weight: '300 г',
    composition: 'Ингредиенты: курица 2, картошка 2',
    price: 'Цена: $10',
  },
  {
    name: 'Мяско из духовки',
    image: b,
    weight: '600 г',
    composition: 'Ингредиенты: духовка 1, мяско много',
    price: 'Цена: $15',
  },
  {
    name: 'Рыбка с картошечкой',
    image: c,
    weight: '500 г',
    composition: 'Ингредиенты: рыбка 1, картошка 3',
    price: 'Цена: $25',
  },
  {
    name: 'Мясо с овощами',
    image: d,
    weight: '1000 г',
    composition: 'Ингредиенты: мясо 1, овощи много',
    price: 'Цена: $100',
  }
];

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [expandedDishDetails, setExpandedDishDetails] = useState(Array(dishes.length).fill(false));

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDishDetails = () => {
    setExpandedDishDetails((prevState) => prevState.map(() => true));
  };

  const renderDishesTable = () => {
    const rows = [];
    for (let i = 0; i < dishes.length; i += 3) {
      const row = dishes.slice(i, i + 3);
      rows.push(
        <div key={i} className="row">
          {row.map((dish, index) => (
            <div key={index} className="col-md-4">
              <div className="dish-card">
                <hr className="my-1" />
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="rounded-circle"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                <h3>{dish.name}</h3>
                <p>Граммовка: {dish.weight}</p>
                <hr className="my-1" />
                <button
                  className="btn btn-primary"
                  onClick={() => toggleDishDetails(index)}
                >
                  Подробнее
                </button>
                {expandedDishDetails[index] && (
                  <div className="dish-details">
                    <p>{dish.composition}</p>
                    <p>{dish.price}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="App">
      <nav>
        <div className="btn-group" style={{ width: '100%' }}>
          <button className="btn btn-block" onClick={toggleMenu}>
            Меню
          </button>
          <button className="btn btn-block btn-danger" onClick={() => alert("Раздел 'О ресторане' в разработке")}>
            Ресторан "Веселье"
          </button>
          <button className="btn btn-block btn-primary" onClick={() => alert("Раздел 'Об авторе' в разработке")}>
            Об авторе
          </button>
        </div>
      </nav>
      {showMenu && renderDishesTable()}
    </div>
  );
}

export default App;