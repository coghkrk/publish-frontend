import React, { Component } from "react";
import CrudInput from "./CrudInput.js";
import CrudList from "./CrudList.js";

export default class CrudApp extends Component {
  state = {
    user: {
      id: 0,
      name: "",
      power: 0,
    },
    list: [
      { id: 1, name: "슈퍼맨", power: 100 },
      { id: 2, name: "아쿠아맨", power: 300 },
      { id: 3, name: "스파이더맨", power: 500 },
      { id: 4, name: "배트맨", power: 30 },
    ],
  };
  constructor(props) {
    super(props);

    //this bind처리
    this.insert = this.insert.bind(this);
    this.doDel = this.doDel.bind(this);
    this.doUp = this.doUp.bind(this);
    this.doDown = this.doDown.bind(this);
    this.doEdit = this.doEdit.bind(this);
  }
  insert(user) {
    //input에 입력한 값들을 list에 추가하기
    console.log(user);

    const max = this.state.list.reduce((a, b) => {
      return a.id > b.id ? a.id : b.id;
    });
    const newMan = {
      id: max + 1,
      name: user.name,
      power: user.power,
    };
    // newMan과 this.state.list를 합치기
    let listCopy = { ...this.state.list, newMan };

    this.setState({
      list: listCopy,
    });
  }
  doDel(id) {
    //배열에서 삭제=> splice(index, count)
    let listCopy = this.state.list.filter((man) => {
      return man.id !== id;
    });
    this.setState({
      list: listCopy,
    });
  }
  doUp(id) {
    //100씩 증가
    let listCopy = this.state.list.map((man) => {
      if (man.id === id) {
        man.power = Number(man.power) + 100;
      }
      return man;
    });
    this.setState({
      list: listCopy,
    });
  }
  doDown(id) {
    //50씩 감소
    let listCopy = this.state.list.map((man) => {
      if (man.id === id) {
        man.power = Number(man.power) - 50;
      }
      return man;
    });
    this.setState({
      list: listCopy,
    });
  }
  doEdit(user) {
    //선택한 사람 정보를 input에 보여주기
    let listCopy = this.state.list.map(function (man) {
      if (man.id === this.id) {
        return this;
      } else {
        return man;
      }
    }, user);
    this.setState({
      list: listCopy,
    });
  }
  render() {
    return (
      <div>
        <CrudInput insert={this.insert} />
        <hr />
        <CrudList
          list={this.state.list}
          doDel={this.doDel}
          doUp={this.doUp}
          doDown={this.doDown}
          doEdit={this.Edit}
        />
      </div>
    ); //state를 다 넘기고 싶을땐 {...this.state.list}
    //state를 하나만 넘기고 싶을땐 {this.state.list}
  }
}
