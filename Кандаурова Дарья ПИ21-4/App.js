import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import {useState} from "react";

export function getImageUrl(person) {
  return (
      person.imageId
  );
}

function Card({ children }) {
  return (
      <div className="container">
        {children}
      </div>
  );
}

function Avatar({book, size = 200, isShown}) {
  return (
      <div className="a">
        <img
            className="avatar"
            src={getImageUrl(book)}
            alt={book.name}
            width={size + 20}
            height={size}
        />
        <p>{book.name}</p>
          {isShown && <p>{book.price}</p>}
      </div>
  );
}

function App() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        setIsShown(!isShown);
    };
  return (
      <html>
      <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="collapse navbar-collapse">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <a className="nav-link" href="#">Меню</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Горячие блюда</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Закуски</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Напитки</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Завтраки</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Бизнес ланч</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Филиалы</a>
                      </li>
                  </ul>
              </div>
          </nav>
      </header>
      <body>
      <h1>Горячие блюда</h1>
      {!isShown &&
      <button onClick={handleClick} className="butt">Показать цены</button>}
      {isShown &&
          <button onClick={handleClick} className="butt">Скрыть цены</button>}
      <Card>
        <Avatar
            book={{
              name: 'Паста карбонара',
              imageId: 'https://topfood.club/assets/cache_image/uploads/recipes/2021-11-11-jinghu-543_756x0_62c.jpg',
              price: "500"
            }}
            isShown={isShown}
        />
        <Avatar
            book={{
              name: 'Паста болоньезе',
              imageId: 'https://www.maggi.ru/data/images/recept/img640x500/recept_15148_m9of.jpg',
                price: "600"
            }}
            isShown={isShown}
        />
        <Avatar
            book={{
              name: 'Феттучини альфредо',
              imageId: 'https://e0.edimdoma.ru/data/recipes/0009/5379/95379-ed4_wide.jpg?1628788176',
                price: "400"
            }}
            isShown={isShown}
        />
      </Card>
      <Card>
          <Avatar
              book={{
                  name: "Пицца маргарита",
                  imageId: 'https://static.1000.menu/img/content-v2/ef/27/10853/picca-margarita-v-domashnix-usloviyax_1608783820_4_max.jpg',
                  price: "800"
              }}
              isShown={isShown}
          />
          <Avatar
              book={{
                  name: 'Пицца пепперони',
                  imageId: 'https://media.istockphoto.com/id/521403691/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B8%D0%B9-%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D1%8F%D1%8F-%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D0%BF%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8.jpg?s=612x612&w=0&k=20&c=_VeGBLIkUWbhyRijGdBcuB80I4D66009wJvyHmDhiLA=',
                  price: "850"
              }}
              isShown={isShown}
          />
          <Avatar
              book={{
                  name: 'Лазанья мясная',
                  imageId: 'https://fasol.tv/upload/iblock/f03/7tpqjk37izsfegtztrptl0yw0puvaomq.jpg',
                  price: "650"
              }}
              isShown={isShown}
          />
      </Card>
      </body>
      </html>
  );
}

export default App;
