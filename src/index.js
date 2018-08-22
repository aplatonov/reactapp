import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MainComponent from 'components/MainComponent/MainComponent';

const TASKS = [
  {name: 'Забрать Мишку', description: 'Подробно Забрать Мишку', group: 'Выполнить', date: '2018.10.11'},
  {name: 'Съесть конфетку', description: 'Подробно Съесть конфетку', group: 'Выполнить'},
  {name: 'Погладить Светку', group: 'Выполнить', date: '2018.12.11'},
  {name: 'Поднять пингвина', description: 'Подробно Поднять пингвина', group: 'Выполняется'},
  {name: 'Посидеть у камина', description: 'Подробно Посидеть у камина', group: 'Выполняется'},
  {name: 'Погрызть Тарантино', group: 'Выполнено'},
  {name: 'Сделать кислую мину', description: 'Подробно Сделать кислую мину', group: 'Выполнено'},
  {name: 'Сварить щавелину', description: 'Подробно Сварить щавелину', group: 'Выполнено', date: '2017.02.21'},
];

ReactDOM.render(
  <MainComponent tasks={TASKS} />,
  document.getElementById('app')
);

module.hot.accept();