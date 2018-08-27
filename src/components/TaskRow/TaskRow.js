import React from 'react';

export default class TaskRow extends React.Component {
  onDelete(item) {
    this.props.deleteTask(item);  
  }

  render() {
    const task = this.props.task;

    return (
      <tr key={task.id}>
        <td>{task.name}</td>
        <td>{task.description}</td>
        <td>{task.date}</td>
        <td>{task.group}</td>
        <td><button onClick={this.onDelete.bind(this, task)}>Delete</button></td>
      </tr>
    );
  }
}