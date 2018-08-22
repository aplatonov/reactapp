import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  render() {
    return (
      <input
        type="text"
        placeholder="Поиск..."
        value={this.props.filterText}
        onChange={this.handleFilterTextChange}
      />
    );
  }
}