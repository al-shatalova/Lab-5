import './App.css';
import {useState} from 'react';

// компонент grid столбик
function GridObject({image, text}) {
    return (
        <>
            <img src={image} alt="image"></img>
            <p className={"text"}>{text}</p>
        </>
    )
}

// компонент ссылки в хедере
function HeaderPunkt({ classname, name }) {
    return (
        <a href={'.'} className={classname}>{name}</a>
    );
}

// компонент кнопки с хуками
function Button({id, image, text, text2}) {
    // использование хука (переменная, которая меняется и функция, которая меняет
    const [showComponent, setShowComponent] = useState(false);
    // функция, которая вызывается в компоненте, она меняет его состояние
    const toggleComponent = () => {
        setShowComponent(!showComponent);
    };

    return (
        <>
            <button id={id} onClick={toggleComponent}>
                {showComponent ? <div id={id}><GridObject image={image} text={text}></GridObject></div>
                    : <div id={id}><GridObject image={image} text={text2}></GridObject></div>}
            </button>
        </>
    )
}
// использование объектов со свойствами (props)
const arrayheader = [
    {name: 'Гурманика', classname: 'componyname'},
    {name: 'доставка', classname: 'e4_14'},
    {name: 'о нас', classname: 'e4_18'},
    {name: 'КОРЗИНА', classname: 'e4_42'},
    {name: 'рестораны', classname: 'e4_17'},
    {name: 'акции', classname: 'e4_16'},
];

const grid1 = [
    {gridid: 'item-0', imgSrc: 'image_4.png', text: 'Шашлык куриный 90 гр 165 руб', text2: 'Шашлык куриный'},
    {gridid: 'item-1',imgSrc: 'image_5.png', text: 'Картофель жареный с грибами 200 гр 240 руб', text2: 'Картофель жареный с грибами' },
    {gridid: 'item-2',imgSrc: 'image_6.png', text: 'Куриная грудка су-вид 200 гр 340 руб', text2: 'Куриная грудка су-вид' }
];

const grid2 = [
    {gridid: 'item-0', imgSrc: 'image_7.png', text: 'Салат Греческий 200 гр 310 руб', text2: 'Салат Греческий'},
    {gridid: 'item-1',imgSrc: 'image_8.png', text: 'Булочка с маком 200 гр 150 руб', text2: 'Булочка с маком' },
    {gridid: 'item-2',imgSrc: 'image_9.png', text: 'Морс клюква-брусника 500 гр 175 руб', text2: 'Морс клюква-брусника ' }
];

// компонент генератора хедера со стролочной функцией
function HeaderGenerator({array}) {
    // стрелочная функция по списку с использованием реквизитов
    return array.map((item) => (
        <HeaderPunkt name={item.name} classname={item.classname}></HeaderPunkt>
    ));
}
// компонент grid столбик
function GridGenerator({array}) {
    // стрелочная функция по списку с использованием реквизитов
    return array.map((item) => (
            <Button id={item.gridid} image={item.imgSrc}
                    text={item.text} text2={item.text2}></Button>
    ));
}

function App() {
    return (
        <>
            {/* в качестве аргументов передаются свойства */}
            <div className="panel"></div>
            <a href={'.'} className="logo"></a>
              <HeaderGenerator array={arrayheader}></HeaderGenerator>
              <a href={'.'} className="account"></a>
              <div className="angry-grid">
                  <GridGenerator array={grid1}></GridGenerator>
              </div>
              <div className="angry-grid">
                  <GridGenerator array={grid2}></GridGenerator>
              </div>
            <div className="e4_22"></div>
        </>
  );
}

export default App;
