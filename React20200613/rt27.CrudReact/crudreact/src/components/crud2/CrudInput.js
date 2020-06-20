import React, { Component } from "react";

export default class CrudInput extends Component {
  state = {
    name: "",
    power: 0,
    //input을 처리하기 위한 state는 input의 갯수만큼 만든다
  };
  constructor(props) {
    super(props);
    //this bind 처리
    this.insert = this.insert.bind(this);

    //ref 생성
    this.refUserName = React.createRef();
    this.refUserPower = React.createRef();
  }
  insert(e) {
    //validate 올린 코드 참조
    //newMan 생성
    let newMan = {
      name: this.refUserName.current.value,
      power: Number(this.refUserPower.current.value),
    };
    //부모 CrudApp.insert 함수를 호출
    this.props.insert(newMan);
  }
  render() {
    const { name, power } = this.state;
    return (
      <div>
        <h1>Creat Read Update Delete</h1>
        <div>
          <label htmlFor="">Name : </label>
          <input
            type="text"
            name="name"
            ref={this.refUserName}
            defaultValue={name}
          />
        </div>
        <div>
          <label htmlFor="">Power : </label>
          <input
            type="text"
            name="name"
            ref={this.refUserPower}
            defaultValue={power}
          />
        </div>
        <button onClick={this.insert}>Add</button>
      </div>
    );
  }
}
