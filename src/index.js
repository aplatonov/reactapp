import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MainComponent from 'components/MainComponent/MainComponent';

const TASKS = [
  {id: 1, name: 'Забрать Мишку', description: 'Подробно Забрать Мишку', group: 'Выполнить', date: '2018.10.11'},
  {id: 2, name: 'Съесть конфетку', description: 'Подробно Съесть конфетку', group: 'Выполнить'},
  {id: 3, name: 'Погладить Светку', group: 'Выполнить', date: '2018.12.11'},
  {id: 4, name: 'Поднять пингвина', description: 'Подробно Поднять пингвина', group: 'Выполняется'},
  {id: 5, name: 'Посидеть у камина', description: 'Подробно Посидеть у камина', group: 'Выполняется'},
  {id: 6, name: 'Погрызть Тарантино', group: 'Выполнено'},
  {id: 7, name: 'Сделать кислую мину', description: 'Подробно Сделать кислую мину', group: 'Выполнено'},
  {id: 8, name: 'Сварить щавелину', description: 'Подробно Сварить щавелину', group: 'Выполнено', date: '2017.2.21'},
];

ReactDOM.render(
  <MainComponent tasks={TASKS} />,
  document.getElementById('app')
);

module.hot.accept();