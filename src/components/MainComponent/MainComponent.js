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
      sort: ''
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
          tasks={this.props.tasks}
          filterText={this.state.filterText}
          filterGroup={this.state.filterGroup}
          sort={this.state.sort}
        />
        <br />
        <NewRecordForm onNewRecordSubmit={this.handleNewRecordSubmit} />
      </div>
    );
  }
}
