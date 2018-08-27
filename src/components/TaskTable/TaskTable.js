import React from 'react';
import TaskRow from 'components/TaskRow/TaskRow';

export default class TaskTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const filterGroup = this.props.filterGroup;
    const sort = this.props.sort;

    const rows = [];
    let direction = (sort.indexOf('desc') != -1) ? -1 : 1;

    this.props.tasks.forEach((task) => {
      if (task.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
      if (task.group.indexOf(filterGroup) === -1) {
        return;
      }
      
      rows.push(
        <TaskRow
          task={task}
          key={task.id}
          deleteTask={this.props.deleteTask}
        />
      );
    });

    const sorted = rows;
    if (sort && sort != '') {
      let sort_field = sort.substring(0, sort.indexOf('_'));
      const sorted = rows.sort((a, b) => {
        // блин, я так и не нашел, как обращаться к этим конструкциям :(
        if (sort_field == 'date') {
          if (a.props.task.date === undefined && b.props.task.date !== undefined) { return 1; }
          if (a.props.task.date !== undefined && b.props.task.date === undefined) { return -1; }
          if (a.props.task.date === b.props.task.date) { return 0; }
          return a.props.task.date > b.props.task.date ? direction : direction * -1;
        }
        if (sort_field == 'name') {
          if (a.props.task.name === b.props.task.name) { return 0; }
          return a.props.task.name > b.props.task.name ? direction : direction * -1;
        }
      });
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Описание</th>
            <th>Дата</th>
            <th>Группа</th>
          </tr>
        </thead>
        <tbody>{sorted}</tbody>
      </table>
    );
  }
}