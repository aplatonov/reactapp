import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class TaskgroupRow extends React.Component {
  render() {
    const group = this.props.group;
    return (
      <tr>
        <th colSpan="3">
          {group}
        </th>
      </tr>
    );
  }
}

class TaskRow extends React.Component {
  render() {
    const task = this.props.task;

    return (
      <tr>
        <td>{task.name}</td>
        <td>{task.description}</td>
        <td>{task.date}</td>
      </tr>
    );
  }
}

class TaskTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const filterGroup = this.props.filterGroup;

    const rows = [];
    let lastgroup = null;

    this.props.tasks.forEach((task) => {
      if (task.name.indexOf(filterText) === -1) {
        return;
      }
      if (task.group.indexOf(filterGroup) === -1) {
        return;
      }
      if (task.group !== lastgroup) {
        rows.push(
          <TaskgroupRow
            group={task.group}
            key={task.group} />
        );
      }
      rows.push(
        <TaskRow
          task={task}
          key={task.name}
        />
      );
      lastgroup = task.group;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Описание</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Поиск..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
      </form>
    );
  }
}

class FilterableTaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '', 
      filterGroup: props.filterGroup
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <TaskTable
          tasks={this.props.tasks}
          filterText={this.state.filterText}
          filterGroup={this.state.filterGroup}
        />
      </div>
    );
  }
}


const TASKS = [
  {name: 'Забрать Мишку', description: 'Подробно Забрать Мишку', group: 'Выполнить', date: '2018.10.11'},
  {name: 'Съесть конфетку', description: 'Подробно Съесть конфетку', group: 'Выполнить'},
  {name: 'Погладить Светку', description: 'Подробно Погладить Светку', group: 'Выполнить', date: '2018.12.11'},
  {name: 'Поднять пингвина', description: 'Подробно Поднять пингвина', group: 'Выполняется'},
  {name: 'Посидеть у камина', description: 'Подробно Посидеть у камина', group: 'Выполняется'},
  {name: 'Погрызть Тарантино', description: 'Подробно Погрызть Тарантино', group: 'Выполнено'},
  {name: 'Сделать кислую мину', description: 'Подробно Сделать кислую мину', group: 'Выполнено'},
  {name: 'Сварить щавелину', description: 'Подробно Сварить щавелину', group: 'Выполнено', date: '2017.02.21'},
];

ReactDOM.render(
  <FilterableTaskList tasks={TASKS} filterGroup={'Выполнено'} />,
  document.getElementById('app')
);

module.hot.accept();