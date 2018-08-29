import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import './style.css';
import MainComponent from './components/MainComponent/MainComponent';
import Menu from './router/Menu/Menu';
import Home from './router/Home/Home';

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

class List extends React.Component {
  render() {
    return (
      <MainComponent tasks={TASKS} />
    );
  }
}

const AppRouter = () => (
  <Router>
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={List} />
        <Route path="/list/:id" component={ListItem} />
        <Route render={props => <div>404 Not Found Route</div>} />
      </Switch>
    </div>
  </Router>
);

const find = id => TASKS.find(p => p.id == id);

const ListItem = props => {
  const task = find(props.match.params.id);
  return (
    <div>
      <h2>Информация о задаче</h2>
      <div>Наименование {task.name}</div>
      <div>Описание {task.description}</div>
      <div>Группа {task.group}</div>
      <div>Дата {task.date}</div>
    </div>
  );
};

ReactDOM.render(
  <AppRouter />,
  document.getElementById('app')
);

module.hot.accept();