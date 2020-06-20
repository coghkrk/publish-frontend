import React, { Component } from "react";

export default class CrudListItem extends Component {
  state = {
    isEditMode: false,
  };
  constructor(props) {
    super(props);
    //this bind 처리
    this.doDel = this.doDel.bind(this);
    this.doUp = this.doUp.bind(this);
    this.doDown = this.doDown.bind(this);
    this.doEdit = this.doEdit.bind(this);
    this.doSave = this.doSave.bind(this);

    //ref 생성
    this.refEditName = React.createRef();
    this.refEditPower = React.createRef();
  }
  doDel(e) {
    const { id } = this.props.man;
    //CrudApp.doDel 함수 호출
    this.props.doDel(id);
  }
  doUp(e) {
    const { id } = this.props.man;
    //CrudApp.doUp 함수 호출
    this.props.doUp(id);
  }
  doDown(e) {
    const { id } = this.props.man;
    //CrudApp.doDown 함수 호출
    this.props.doDown(id);
  }
  doEdit(e) {
    this.setState((prevState, props) => {
      return {
        isEditMode: !prevState.isEditMode,
      };
    });
  }
  doSave(e) {
    this.setState((prevState, props) => {
      return {
        isEditMode: !prevState.isEditMode,
      };
    });
    //변경값 생성
    const { id } = this.props.man;
    const newMan = {
      id: id,
      name: this.refEditName.current.value,
      power: Number(this.refEditPower.current.value),
    };
    //CrudApp.doEdit() 함수 호출
    this.props.doEdit(newMan);
  }

  render() {
    const { id, name, power } = this.props.man;
    const formView = (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{power}</td>
        <td>
          <button onClick={this.doDel}>Del</button>
          <button onClick={this.doUp}>Power Up</button>
          <button onClick={this.doDown}>Power Down</button>
          <button onClick={this.doEdit}>Edit</button>
        </td>
      </tr>
    );
    const formEdit = (
      <tr key={id}>
        <td>{id}</td>
        <td>
          <input
            type="text"
            name="name"
            ref={this.refEditName}
            defaultValue={name}
          />
        </td>
        <td>
          <input
            type="text"
            name="name"
            ref={this.refEditPower}
            defaultValue={power}
          />
        </td>
        <td>
          <button onClick={this.doDel}>Del</button>
          <button onClick={this.doUp}>Power Up</button>
          <button onClick={this.doDown}>Power Down</button>
          <button onClick={this.doSave}>save</button>
        </td>
      </tr>
    );
    return this.state.isEditMode === true ? formEdit : formView;
    return (
      //배열문 처리 컴포넌트들은 key값을 넣어줘야 한다 속도를 빠르게 하기 위해서
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{power}</td>
        <td>
          <button onClick={this.doDel}>Del</button>
          <button onClick={this.doUp}>Power Up</button>
          <button onClick={this.doDown}>Power Down</button>
          <button onClick={this.doEdit}>Edit</button>
        </td>
      </tr>
    );
  }
}
