import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
const dishes = [
  {
    name: 'Блюдо 1',
    image: 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663702360_48-mykaleidoscope-ru-p-krasivaya-podacha-blyud-instagram-51.jpg',
    weight: '150 г',
    composition: 'Ингредиенты: ингредиент 1, ингредиент 2',
    price: 'Цена: 600 рублей',
  },
  {
    name: 'Блюдо 2',
    image: 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663769339_15-mykaleidoscope-ru-p-populyarnie-restorannie-blyuda-yeda-krasiv-16.jpg',
    weight: '200 г',
    composition: 'Ингредиенты: ингредиент 3, ингредиент 4',
    price: 'Цена: 720 рублей',
  },
  {
    name: 'Блюдо 3',
    image: 'https://yoga-in-greece.ru/wp-content/uploads/e/1/5/e156a8b298c7a7b172be4e5e194d68f9.jpeg',
    weight: '180 г',
    composition: 'Ингредиенты: ингредиент 5, ингредиент 6',
    price: 'Цена: 990 рублей',
  },
  {
    name: 'Блюдо 4',
    image: 'https://i9.photo.2gis.com/images/branch/0/30258560073084660_4a03.jpg',
    weight: '150 г',
    composition: 'Ингредиенты: ингредиент 7, ингредиент 8',
    price: 'Цена: 590 рублей',
  },
  {
    name: 'Блюдо 5',
    image: 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663834740_2-mykaleidoscope-ru-p-restorannie-blyuda-yeda-vkontakte-4.jpg',
    weight: '200 г',
    composition: 'Ингредиенты: ингредиент 3, ингредиент 4',
    price: 'Цена: 690 рублей',
  },
  {
    name: 'Блюдо 6',
    image: 'https://fotosdm.ru/wp-content/uploads/2020/04/img9431.jpg',
    weight: '180 г',
    composition: 'Ингредиенты: ингредиент 5, ингредиент 6',
    price: 'Цена: 890 рублей',
  },
  {
    name: 'Блюдо 7',
    image: 'https://www.ivetta.ua/wp-content/uploads/2021/03/4-zamechatelnyh-blyuda-s-mocarelloj.jpg',
    weight: '150 г',
    composition: 'Ингредиенты: ингредиент 1, ингредиент 2',
    price: 'Цена: 600 рублей',
  },
  {
    name: 'Блюдо 8',
    image: 'https://adonius.club/uploads/posts/2022-08/1659631355_11-adonius-club-p-podacha-blyud-v-restorane-krasivo-foto-11.jpg',
    weight: '200 г',
    composition: 'Ингредиенты: ингредиент 3, ингредиент 4',
    price: 'Цена: 720 рублей',
  },
  {
    name: 'Блюдо 9',
    image: 'https://kartinki.pics/uploads/posts/2021-04/1617246443_52-p-firmennoe-blyudo-krasivo-54.jpg',
    weight: '180 г',
    composition: 'Ингредиенты: ингредиент 5, ингредиент 6',
    price: 'Цена: 990 рублей',
  }
];


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
          <button className="btn btn-block btn-danger" onClick={() => alert("Приходите позже")}>
            Ресторан "В самое яблочко"
          </button>
          <button className="btn btn-block btn-primary" onClick={() => alert("Информация об авторе всех наших прекрасных блюд скоро появится!")}>
            Шеф-повар
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