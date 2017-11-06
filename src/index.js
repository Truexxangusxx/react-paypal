import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Tabla from './components/tabla.js';
import Galeria from './components/galeria.js';


let db=[
    {category: "madera", price:"70 s/.", stocked: true, name:"mesa"},
    {category: "madera", price:"30 s/.", stocked: true, name:"silla"},
    {category: "electro", price:"290 s/.", stocked: true, name:"cocina"},
    {category: "electro", price:"400 s/.", stocked: true, name:"refri"},
    {category: "electro", price:"70 s/.", stocked: true, name:"licuadora"},
    {category: "acero", price:"10 s/.", stocked: true, name:"sarten"}
]


let frc=[
    {imagen: "http://via.placeholder.com/150x150", nombre:"Susan Gutierrez", edad: 13, id: 1},
    {imagen: "http://via.placeholder.com/150x150", nombre:"Paola Martinez", edad: 15, id: 2},
    {imagen: "http://via.placeholder.com/150x150", nombre:"Lizeth Palacios", edad: 10, id: 3},
    {imagen: "http://via.placeholder.com/150x150", nombre:"Pamela Ortiz", edad: 9, id: 4},
    {imagen: "http://via.placeholder.com/150x150", nombre:"Jesus Ansel", edad: 8, id: 5},
    {imagen: "http://via.placeholder.com/150x150", nombre:"Franklin Putuquia", edad: 12, id: 6}
]





ReactDOM.render(<App frc={frc}/>, document.getElementById('root'));
//ReactDOM.render(<Tabla store={db} />, document.getElementById('app'));


//ReactDOM.render(<Galeria frc={frc} />, document.getElementById('app'));



registerServiceWorker();
