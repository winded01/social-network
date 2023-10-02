import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./data/state"
const root = ReactDOM.createRoot(document.getElementById('root'));
let renderTree=(state)=>{
  root.render(
    <React.StrictMode>
      <App  state={state} addPost={store.addPost.bind(store)} sendMessage={store.sendMessage.bind(store)} onPostChange={store.onPostChange.bind(store)} onMessageChange={store.onMessageChange.bind(store)}/>
    </React.StrictMode>
  );
}

renderTree(store.getState());
store.subscribe(renderTree);
export default renderTree;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*
let person={//это объект , его можно представить как коробочку в котором храниться много данных в виде пары ключ: значение
  _name:"Hex",//name - это ключ, по которому я могу найти значение - "Hex", таким образом  - person.name
  _age :"15",// то же самое что иname
  getName(){
return this._name;
  },
  setName(name){
    this._name=name;
  }
}
person.setName("Dae");
console.log(person.getName())

let animal={
  _type:"",
  _name:"",
  set(type){
    this._type=type;
  },
  setName(name){
    this._name=name;
  },
  getName(){
    return this._name;
  },
  getType(){
    return this._type;
  }
}
animal.setName("Dima");
console.log(animal.getName())
animal.set("Lion");
console.log(animal.getType())

let car={
  _model:"",
  _year:"",
  _color:"",
  setProperties(model,year,color){
    this._model=model;
    this._year=year;
    this._color=color;
  },
  getModel(){return this._model},
  getYear(){return this._year},
  getColor(){return this._color}
}
car.setProperties("BMW", "2009", "green")
console.log(car.getModel() ,car.getYear(), car.getColor())


//Отличие переменной от свойств объекта
let name="Ned";// ПЕРЕМЕННАЯ  - поименованное  место в памяти где храним одно значение, чтобы сохранить что-то в переменной нужно применить операцию присваивания =
person.name="Иван" // Это свойство объекта, которое так же как и переменная хранит одно значение, но доступ мы можем получить только через имя обЪекта.

//Отличие функций от методов
function SayName(){//функция создается отдельно, т.е ВНЕ класса или объекта, функцию мы вызываем просто указа ее имя - SayName()
  console.log("Ivan")
}
//метод- это функция,котороая создается ВНУТРИ класса или объекта. Иными словами они пренадлежит объекту см. пример на 30 строке. метод мы вызываем только обратившись к объекту - person.sayName(); 
*/