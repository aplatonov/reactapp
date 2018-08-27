import React from 'react';

export default class SortBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSortChange = this.handleSortChange.bind(this);
  }
  
  handleSortChange(e) {
    this.props.onSortChange(e.target.value);
  }
  
  render() {
    return (
      <div>
        <select onChange={this.handleSortChange} value={this.props.sort}>
          <option value="">Без сортировки</option>
          <option value="date_asc">Даты по возрастанию</option>
          <option value="date_desc">Даты по убыванию</option>
          <option value="name_asc">Название по возрастанию</option>
          <option value="name_desc">Название по убыванию</option>
        </select>
      </div>
    )
  }
}