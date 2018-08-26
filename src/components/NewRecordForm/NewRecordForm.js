import React from 'react';

export default class NewRecordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', description: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeDescription(event) {
    this.setState({description: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Добавить напоминание:
        <br />
        <label>
          Название: <input type="text" value={ this.state.name } onChange={ this.handleChangeName } />
        </label>
        <br />
        <label>
          Описание: <textarea value={ this.state.description } onChange={ this.handleChangeDescription } />
        </label>
        <br />
        <input type="submit" value="Сохранить" />
      </form>
    );
  }
}