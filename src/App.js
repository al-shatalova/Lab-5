import React, { useState } from 'react';
import './App.css';

const dishes = [
  {
    name: 'Куриные биточки',
    image: '/images/dish1.jpeg',
    weight: '150 г',
    composition: 'Ингредиенты: ингредиент 1, ингредиент 2',
    price: 'Цена: $10',
  },
  {
    name: 'Блюдо 2',
    image: '/images/dish2.jpeg',
    weight: '200 г',
    composition: 'Ингредиенты: ингредиент 3, ингредиент 4',
    price: 'Цена: $12',
  },
  {
    name: 'Блюдо 3',
    image: '/images/dish3.jpeg',
    weight: '180 г',
    composition: 'Ингредиенты: ингредиент 5, ингредиент 6',
    price: 'Цена: $15',
  },
  {
    name: 'Блюдо 4',
    image: '/images/dish4.jpeg',
    weight: '150 г',
    composition: 'Ингредиенты: ингредиент 7, ингредиент 8',
    price: 'Цена: $10',
  },
  {
    name: 'Блюдо 5',
    image: '/images/dish5.jpeg',
    weight: '200 г',
    composition: 'Ингредиенты: ингредиент 3, ингредиент 4',
    price: 'Цена: $12',
  },
  {
    name: 'Блюдо 6',
    image: '/images/dish6.jpeg',
    weight: '180 г',
    composition: 'Ингредиенты: ингредиент 5, ингредиент 6',
    price: 'Цена: $15',
  },
  {
    name: 'Блюдо 7',
    image: '/images/dish7.jpeg',
    weight: '150 г',
    composition: 'Ингредиенты: ингредиент 1, ингредиент 2',
    price: 'Цена: $10',
  },
  {
    name: 'Блюдо 8',
    image: '/images/dish8.jpeg',
    weight: '200 г',
    composition: 'Ингредиенты: ингредиент 3, ингредиент 4',
    price: 'Цена: $12',
  },
  {
    name: 'Блюдо 9',
    image: '/images/dish9.jpeg',
    weight: '180 г',
    composition: 'Ингредиенты: ингредиент 5, ингредиент 6',
    price: 'Цена: $15',
  }
];

// function App() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [expandedDishDetails, setExpandedDishDetails] = useState(Array(dishes.length).fill(false));

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const toggleDishDetails = () => {
//     setExpandedDishDetails((prevState) => prevState.map(() => true)); // Открываем детали для всех блюд
//   };

//   const renderDishesTable = () => {
//     const rows = [];
//     for (let i = 0; i < dishes.length; i += 3) {
//       const row = dishes.slice(i, i + 3);
//       rows.push(
//         <div key={i} className="row">
//           {row.map((dish, index) => (
//             <div key={index} className="col-md-4">
//               <div className="dish-card">
//                 <hr className="my-1" />
//                 <img
//                   src={dish.image}
//                   alt={dish.name}
//                   className="rounded-circle"
//                   style={{ maxWidth: '100%', height: 'auto' }}
//                 />
//                 <h3>{dish.name}</h3>
//                 <p>Граммовка: {dish.weight}</p>
//                 <hr className="my-1" />
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => toggleDishDetails(index)}
//                 >
//                   Подробнее
//                 </button>
//                 {expandedDishDetails[index] && (
//                   <div className="dish-details">
//                     <p>{dish.composition}</p>
//                     <p>{dish.price}</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       );
//     }
//     return rows;
//   };

//   return (
//     <div className="App">
//       <nav>
//         <div className="btn-group" style={{ width: '100%' }}>
//           <button className="btn btn-block" onClick={toggleMenu}>
//             Меню
//           </button>
//           <button className="btn btn-block btn-danger" onClick={() => alert("Раздел 'О ресторане' в разработке")}>
//             Ресторан "У Бога"
//           </button>
//           <button className="btn btn-block btn-primary" onClick={() => alert("Раздел 'Об авторе' в разработке")}>
//             Об авторе
//           </button>
//         </div>
//       </nav>
//       {showMenu && renderDishesTable()}
//     </div>
//   );
// }

// export default App;

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [expandedDishDetails, setExpandedDishDetails] = useState(Array(dishes.length).fill(false));

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleAllDishDetails = () => {
    setExpandedDishDetails((prevState) => prevState.map(() => true)); // Открываем детали для всех блюд
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
                {expandedDishDetails[i + index] && (
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
            Ресторан "У Бога"
          </button>
          <button className="btn btn-block btn-primary" onClick={() => alert("Раздел 'Об авторе' в разработке")}>
            Об авторе
          </button>
        </div>
      </nav>
      {showMenu && (
        <div>
          <button className="btn btn-primary" onClick={toggleAllDishDetails}>
            Подробнее
          </button>
          {renderDishesTable()}
        </div>
      )}
    </div>
  );
}

export default App;