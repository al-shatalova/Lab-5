import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function Avatar({ person, size = 350 }) {
    const [isMenuShown, setIsMenuShown] = useState(false);
    const toggleMenu = () => {
        setIsMenuShown(current => !current);
    };

    return (
        <div className="avatar-container">
            <img
                className="avatar"
                src={person.imageId}
                alt={person.name}
                width={size}
                height={size - 80}
            />
            <p className="avatar-name">{person.name}</p>
            <button onClick={toggleMenu}>Подробнее</button>
            {isMenuShown && (
                <div className="additional-menu">
                    <Box about={person.about} />
                </div>
            )}
        </div>
    );
}
function Box({ about }) {
    return (
        <div className="box-menu">
            <p>{about}</p>
        </div>
    );
}
function Avatar2({ person, size = 450 }) {
    const [isMenuShown, setIsMenuShown] = useState(false);

    const toggleMenu = () => {
        setIsMenuShown(!isMenuShown);
    };


    return (
        <div className="avatar-container">
            <img
                className="avatar"
                src={person.imageId}
                alt={person.name}
                width={size}
                height={size - 170}
            />
            <p className="avatar-name">{person.name}</p>
            <button onClick={toggleMenu}>Подробнее</button>
            {isMenuShown && (
                <div className="additional-menu" style={{}}>
                    <Box about={person.about} />
                </div>
            )}
        </div>
    );
}
function App() {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark" style={{ backgroundColor: '#d9d4d9' }}>
  <a class="navbar-brand" href="#">
    RESTORANTE
  </a>
</nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ backgroundColor: '#d9d4d9', padding: '25px' }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarBottom"
                        aria-controls="navbarBottom" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: '#484548' }}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarBottom" style={{ marginLeft: '35%' }}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Основное меню</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Акции</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Контакты</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">О компании</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <h1 style={{backgroundColor:'#0000'}}>Завтраки</h1>
            <div className="avatar-row">
                <Avatar
                    person={{
                        name: 'Картофельная вафля с беконом',
                        imageId:
                            'https://shoko.ru/upload/iblock/bd0/ft05zea9m6fy0jvl2lasmsnc50k6id8j.jpg',
                        about: '450 ₽'
                    }}
                />
                <Avatar
                    person={{
                        name: 'Боул с индейкой',
                        imageId:
                            'https://shoko.ru/upload/iblock/bff/pgbajmio505dcln1dn8tn91x2q7wioxj.jpg',
                        about: '450 ₽'
                    }}
                />
                <Avatar
                    person={{
                        name: 'Драники с беконом и яйцом пашот',
                        imageId:
                            'https://shoko.ru/upload/iblock/815/42ehkvv2ursx1380ok1rb75fsulg2dm9.jpg',
                        about: '450 ₽'
                    }}
                />
                <Avatar
                    person={{
                        name: 'Картофельная вафля с лососем',
                        imageId:
                            'https://shoko.ru/upload/iblock/ce1/9hgnm5uhreccusp2bo6b7n0zoqxm5rm0.jpg',
                        about: '550 ₽'
                    }}
                />
            </div>
            <h1 style={{paddingLeft: '669px'}}>Обеды</h1>
            <div className="avatar-row">
                <Avatar2
                    person={{
                        name: 'Паста Альфредо с курицей',
                        imageId:
                            'https://shoko.ru/upload/iblock/b4f/avz2wh39eq8ld3k0lw7vsk5iebzora98.jpg',
                        about: '450 ₽'
                    }}
                />
                <Avatar2
                    person={{
                        name: 'Гуляш из свинины',
                        imageId:
                            'https://shoko.ru/upload/iblock/9b4/jkam7q88tv7v0l2as2zd32gp6n697oll.jpg',
                        about: '390 ₽'
                    }}
                />
                <Avatar2
                    person={{
                        name: 'Бефстроганов с картофельным пюре',
                        imageId:
                            'https://shoko.ru/upload/iblock/08f/gre7ejvax1ho0vg5nt90avesw53s70k2.jpg',
                        about: '450 ₽'
                    }}
                />
            </div>
        </div>
    );
}

export default App;