import React from 'react';
import {
  Link
} from 'react-router-dom';

export default class TaskRow extends React.Component {
  onDelete(item) {
    this.props.deleteTask(item);  
  }

  render() {
    const task = this.props.task;

    return (
      <tr key={task.id}>
        <td><Link to={{pathname: `/list/${task.id}`}}>{task.name}</Link></td>
        <td>{task.description}</td>
        <td>{task.date}</td>
        <td>{task.group}</td>
        <td><button onClick={this.onDelete.bind(this, task)}>Delete</button></td>
      </tr>
    );
  }
}