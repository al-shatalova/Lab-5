import logo from './logo.svg';
import './App.css';
import {useState} from "react"; // Состояние


const dataArray = [ // Объект
    {imgSrc: '1.jpg', name: 'Мясной пир', description: 'Очень вкусный пир!' }, // Внутри свойства(props)
    {imgSrc: '2.jpg', name: 'Брускетта с пастрами', description: 'Очень вкусные брускетты!' },
    {imgSrc: '3.jpg', name: 'Джерки собственного производства', description: 'Это наше производство!' },
    {imgSrc: '4.jpg', name: 'Специалитет плато', description: 'Очень вкусное блюдо!' },
    {imgSrc: '5.jpg', name: 'Антипасти', description: 'Как паста, только анти' },
    {imgSrc: '6.jpg', name: 'Сырное плато', description: 'Оочень много сыра!' },
];

function generateElements(dataArray) { // Функциональный компонент
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showDescriptionIndex, setShowDescriptionIndex] = useState(false); // Хук

    const handleShowDescription = (index) => {
        setShowDescriptionIndex(index === showDescriptionIndex ? false : index);
    };

    return dataArray.map((item, index) => (
        <div key={index} className="scale">
            <br></br>
            <img src={item.imgSrc} alt={item.name} />
            <p>{item.name}</p>
            {showDescriptionIndex === index ? <p className="description">{item.description}</p> : false}
            <button onClick={() => handleShowDescription(index)}>
                Подробнее
            </button>
        </div>

    ));
}

function ComponentMenu() { // Функциональный компонент
    return <div className="angry-grid">{generateElements(dataArray)}</div>;
}


function App() {
    return (
    <div className="App">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-black">
            <a className="navbar-brand text-white namerest" href="#">Ресторан RUN</a>
            <button className="navbar-toggler but" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#">Главная страница <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Блюдо дня</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Скидка века</a>
                    </li>
                </ul>
            </div>
        </nav>
        <ComponentMenu></ComponentMenu>
    </div>
  );
}

export default App;
