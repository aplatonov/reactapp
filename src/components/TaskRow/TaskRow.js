import React from 'react';

export default class TaskRow extends React.Component {
  render() {
    const task = this.props.task;

    return (
      <tr>
        <td>{task.name}</td>
        <td>{task.description}</td>
        <td>{task.date}</td>
        <td>{task.group}</td>
      </tr>
    );
  }
}