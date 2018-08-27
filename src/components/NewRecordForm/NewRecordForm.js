import React from 'react';

export default class NewRecordForm extends React.Component {
  addTask(e) {
    e.preventDefault();
    const name = this.name.value;
    const description = this.description.value;
    
    if(!name || !description) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }
  
    const newTask = [name, description];
    this.props.handleNewTaskSubmit(newTask);
  }

  render() {
    return (
      <form onSubmit={this.addTask.bind(this)}>
        Добавить напоминание:
        <br />
        <label>
          Название: <input type="text" value={ this.props.name } ref={ref => ref ? this.name = ref : null} />
        </label>
        <br />
        <label>
          Описание: <textarea value={ this.props.description } ref={ref => ref ? this.description = ref : null} />
        </label>
        <br />
        <input type="submit" value="Сохранить" />
      </form>
    );
  }
}