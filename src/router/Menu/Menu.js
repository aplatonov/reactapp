import React from 'react';
import {
  Link
} from 'react-router-dom';

export default class Menu extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Инфо</Link>
          </li>
          <li>
            <Link to="/about">About (нет такого роута)</Link>
          </li>
          <li>
            <Link to="/list">Список из задания 4</Link>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}