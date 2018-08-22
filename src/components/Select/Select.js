import React from 'react';

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterGroupChange = this.handleFilterGroupChange.bind(this);
  }

  handleFilterGroupChange(e) {
    this.props.onFilterGroupChange(e.target.value);
  }
  
  render(){
    return (
      <select onChange={this.handleFilterGroupChange} value={this.props.filterGroup}>
        <option value="">Выберите группу</option>
        <option value="Выполнить">Выполнить</option>
        <option value="Выполняется">Выполняется</option>
        <option value="Выполнено">Выполнено</option>
      </select>
    )
  }
}