import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
            width={size + 20}
            height={size}
        />
          {isShown && <p>{book.name}</p>}
      </div>
  );
}
function Avatar2({book, size = 400, isShown}) {
    return (
        <div className="a">
        <img
            className="avatar"
            src={getImageUrl(book)}
            width={size + 20}
            height={size}
        />
          {isShown && <p>{book.name}</p>}
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
                          <a className="nav-link" href="#">Menu</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Basket</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Drinks</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Hot food</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Cold food</a>
                      </li>
                  </ul>
              </div>
          </nav>
      </header>
      <body>
      <h1>MENU</h1>
      {!isShown &&
      <button onClick={handleClick} className="butt">DISH NAMES</button>}
      {isShown &&
          <button onClick={handleClick} className="butt">ONLY IMAGES</button>}
      <Card>
        <Avatar2
            book={{
              name: 'Blueberry-flavored Ice Cream',
              imageId: 'https://avatars.mds.yandex.net/i?id=a29f20a41975a0ddeadf201dbc240a2280d30aa6-9100075-images-thumbs&n=13',
              
            }}
            isShown={isShown}
        />
        <Avatar2
            book={{
              name: 'Blueberry Pancakes',
              imageId: 'https://avatars.mds.yandex.net/i?id=989e45cc93dbec6f53a865cf00ffc3f2418b82c8-10527650-images-thumbs&n=13',
            
            }}
            isShown={isShown}
        />
        
      </Card>
      <Card>
      <Avatar
            book={{
              name: 'Blue Cupcakes',
              imageId: 'https://avatars.mds.yandex.net/i?id=f1cf9920dea36ce21dfc065a765e6c3c339f809b-9843573-images-thumbs&n=13',
              
            }}
            isShown={isShown}
        />
        <Avatar
            book={{
              name: 'Blue Pizza',
              imageId: 'https://avatars.mds.yandex.net/i?id=e0592f9e0e35c000dac1dc86147bee2a-5285455-images-thumbs&n=13',
            
            }}
            isShown={isShown}
        />
        <Avatar
            book={{
              name: 'Blue Porridge',
              imageId: 'https://avatars.mds.yandex.net/i?id=36e902428cc883b0f89fd6fa6ceec8845146fa5a-7547218-images-thumbs&n=13',
               
            }}
            isShown={isShown}
        />
        <Avatar
            book={{
              name: 'Blue Pie',
              imageId: 'https://avatars.mds.yandex.net/i?id=065b882b06adaae731a41cf195826820a942d7e7-10986596-images-thumbs&n=13',
               
            }}
            isShown={isShown}
        />
      </Card>
      </body>
      </html>
  );
}

export default App;