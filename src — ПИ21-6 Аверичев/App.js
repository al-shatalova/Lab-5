import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

const dishes = [
  { id: 1, title: "4 сезона", description: "Средняя 30 см, традиционное тесто, 600 г", url: "https://cdn.dodostatic.net/static/Img/Products/d51fa179760041f0831e63fa21c39402_584x584.jpeg", price: 600, height: 300, width: 200, ingredients:["колбаса", "сыр", "помидоры"]},
  { id: 2, title: "Аррива!", description: "Средняя 30 см, традиционное тесто, 600 г", url: "https://i5.photo.2gis.com/images/branch/40/5629499581400005_cce7.jpg", price: 590, height: 300, width: 650, ingredients:["колбаса", "сыр", "помидоры"] },
  { id: 3, title: "Овощи и грибы ",  description: " Средняя 30 см, традиционное тесто, 600 г", url: "https://i4.photo.2gis.com/images/branch/94/13229323952588043_08f1.jpg", price: 670, height: 300, width: 200, ingredients:["колбаса", "сыр", "помидоры"] },
];
const dishes2 = [
  { id: 1, title: "Додо",  description: "Средняя 30 см, традиционное тесто, 600 г", url: "https://klin.japanesesushi.ru/wp-content/uploads/2021/06/ovochnaya1080x720-1080x720-1.jpg", price: 690, height: 200, width: 200, ingredients:["грибы", "сыр", "помидоры"]},
  { id: 2, title: "Пицца с яйцом",  description: "Средняя 30 см, традиционное тесто, 600 г", url: "https://as-mangal-adler.ru/upload/iblock/073/8e7v96fhwnls2p6ebc3kh556vvuxd5w7.jpg", price: 600, height: 200, width: 200, ingredients:["яйцо", "сыр", "помидоры"]},
  { id: 3, title: "Сырная",  description: "Средняя 30 см, традиционное тесто, 600 г", url: "https://sergiev-posad.japanesesushi.ru/wp-content/uploads/2021/06/chetiri-sira1080x720-1080x720-1.jpg", price: 620, height: 200, width: 200, ingredients:["колбаса", "сыр", "помидоры"] },
]
function NavigationBar({ onSearchChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Додо Пицца</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Поиск"
            aria-label="Найдём подходящее"
            onChange={onSearchChange}
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Поиск
          </button>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Корзина
          </button>
        </form>
      </div>
    </nav>
  );
}
function Card({children}){
  return(
      <div className="card">{children}</div>
  );
}
function Dish(props) {
    const [shownIngredients, setStateIngredients] = useState(false);
  return (
      <Card>
        <img src={props.url} className="card-img-top" height = {props.height} width = {props.width} alt="Book Image" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href="#" className="btn btn-primary">В корзину</a>
            <a href="#" className="btn btn-primary2">Купить за {props.price} руб.</a>
            <button className="btn ingredients-btn" onClick={(event) => setStateIngredients(!shownIngredients)}>{shownIngredients ? 'Скрыть' : 'Отобразить'}</button>
            {shownIngredients && (
                <div>
                    <ul>
                        {props.ingredients.map((ingredient) => (
                            <div>
                                <li>{ingredient}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </div>
      </Card>
  );
}


function Menu() {
  
  const moredishes = dishes.map((dish) => (
      <Dish key={dish.id} {...dish} />
  ))
  const moredishes2 = dishes2.map((dish) => (
      <Dish key={dish.id} {...dish} />
  ))
  return (
      <div>
        <NavigationBar />
        <div className="dishes-container">
          {moredishes}
        </div>
        <div className="dishes-container2">
          {moredishes2}
        </div>
      </div>
  );
}

function App() {
  return (
      <Menu />
  );
}

export default App;