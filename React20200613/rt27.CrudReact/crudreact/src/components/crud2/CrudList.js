import React, { Component } from "react";
import CrudListItem from "./CrudListItem.js";

export default class CrudList extends Component {
  render() {
    /*
        const items = elements.map(function (value, key) => {
        return <li key={key}>{value}</li>;
      })
     */
    const rows = this.props.list;
    const trs = rows.map((man, index) => {
      return (
        <CrudListItem
          key={index}
          man={man}
          doDel={this.props.doDel}
          doUp={this.props.doUp}
          doDown={this.props.doDown}
          doEdit={this.props.Edit}
        />
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>POWER</th>
            <th>CRUD</th>
          </tr>
        </thead>
        <tbody>{trs}</tbody>
      </table>
    );
  }
}
