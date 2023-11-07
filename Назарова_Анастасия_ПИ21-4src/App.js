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
                    <Box calories={person.calories} />
                </div>
            )}
        </div>
    );
}
function Box({ calories }) {
    return (
        <div className="box-menu">
            <p>Калорийность: {calories} ккал</p>
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
                <div className="additional-menu">
                    <Box calories={person.calories} />
                </div>
            )}
        </div>
    );
}
function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: '#484548' }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: '#484548' }}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Главная <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Наша кухня</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false">
                                Меню
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Наша кухня</a>
                                <a className="dropdown-item" href="#">Издательсов</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Книга</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Поиск..." aria-label="Поиск"/>

                    </form>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</button>
                </div>
            </nav>

            {/* Второе меню */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: '#d9d4d9', marginTop: '20px', padding: '15px' }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarBottom"
                        aria-controls="navbarBottom" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: '#484548' }}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarBottom" style={{ marginLeft: '35%' }}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Напитки</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Вегетарианское меню</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Новые блюда</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Популярные блюда</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <h1>Новинки</h1>
            <div className="avatar-row">
                <Avatar
                    person={{
                        name: 'Шницель',
                        imageId:
                            'https://img1.wsimg.com/isteam/stock/gp9bNYK/:/rs=w:710,h:355,cg:true,m/cr=w:710,h:355',
                        calories: '534'
                    }}
                />
                <Avatar
                    person={{
                        name: 'Картофельный салат',
                        imageId:
                            'https://img1.wsimg.com/isteam/stock/23439/:/rs=w:710,h:355,cg:true,m/cr=w:710,h:355',
                        calories: '234'
                    }}
                />
                <Avatar
                    person={{
                        name: 'Баварская окрошка',
                        imageId:
                            'https://img1.wsimg.com/isteam/stock/23429/:/rs=w:710,h:355,cg:true,m/cr=w:710,h:355',
                        calories: '523'
                    }}
                />
                <Avatar
                    person={{
                        name: 'Гуляш',
                        imageId:
                            'https://img1.wsimg.com/isteam/stock/QBknBlK/:/rs=w:710,h:355,cg:true,m/cr=w:710,h:355',
                        calories: '320'
                    }}
                />
            </div>
            <h1>Горячее</h1>
            <div className="avatar-row">
                <Avatar2
                    person={{
                        name: 'Дунайская рыба',
                        imageId:
                            'https://img1.wsimg.com/isteam/stock/11856/:/rs=w:710,h:355,cg:true,m/cr=w:710,h:355',
                        calories: '670'
                    }}
                />
                <Avatar2
                    person={{
                        name: 'Австрийский крем-суп',
                        imageId:
                            'https://img1.wsimg.com/isteam/stock/45876/:/rs=w:710,h:355,cg:true,m/cr=w:710,h:355',
                        calories: '451'
                    }}
                />
                <Avatar2
                    person={{
                        name: 'Кнодели',
                        imageId:
                            'https://img1.wsimg.com/isteam/stock/50047/:/rs=w:710,h:355,cg:true,m/cr=w:710,h:355',
                        calories: '531'
                    }}
                />
            </div>
        </div>
    );
}

export default App;
