import React from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import SortBar from 'components/SortBar/SortBar';
import TaskTable from 'components/TaskTable/TaskTable';
import Select from 'components/Select/Select';
import NewRecordForm from 'components/NewRecordForm/NewRecordForm';

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '', 
      filterGroup: '',
      sort: '',
      tasks: this.props.tasks
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterGroupChange = this.handleFilterGroupChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleFilterGroupChange(filterGroup) {
    this.setState({
      filterGroup: filterGroup
    });
  }

  handleSortChange(sort) {
    this.setState({
      sort: sort
    });
  }

  handleNewTaskSubmit(data) {
    const newTask = {
        id: this.state.tasks.length + 1,
        name: data[0],
        description: data[1],
        group: 'Выполнить',
        date: new Date().getFullYear() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getDate() 
    }
    
    this.setState({tasks: this.state.tasks.concat(newTask)});
  }

  handleOnDeleteTask(item) {
    const tasks = this.state.tasks;
    for(let i=0; i < tasks.length; i++) {
      if(tasks[i].id == item.id) {
        tasks.splice(i, 1);
        for(let i=0; i < tasks.length; i++) {
          tasks[i].id--;
        }
      }
    }
    
    this.setState({tasks: tasks});
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <Select 
          filterGroup={this.state.filterGroup}
          onFilterGroupChange={this.handleFilterGroupChange}
        />
        <SortBar 
          sort={this.state.sort}
          onSortChange={this.handleSortChange}
        />
        <TaskTable
          tasks={this.state.tasks}
          filterText={this.state.filterText}
          filterGroup={this.state.filterGroup}
          sort={this.state.sort}
          deleteTask={this.handleOnDeleteTask.bind(this)}
        />
        <br />
        <NewRecordForm {...this.state} handleNewTaskSubmit={this.handleNewTaskSubmit.bind(this)} />
      </div>
    );
  }
}
