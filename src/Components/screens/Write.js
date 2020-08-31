import React from "react";
import styled from "styled-components";
import { C_Btn } from "../commonComponents";
import { D_Btn } from "../commonComponents";
import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || `column`};
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 60px;
`;

const TextInput = styled.input`
  width: 640px;
  height: 30px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  margin: 10px 0px;
  transition: 0.5s;

  padding: 0px 10px;
  &:focus {
    box-shadow: 2px 3px 3px #777;
  }
`;

const TextArea = styled.textarea`
  width: 640px;
  height: 300px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  margin: 10px 0px;
  transition: 0.5s;
  resize: none;

  padding: 10px;
  &:focus {
    box-shadow: 2px 3px 3px #777;
  }
`;

class Write extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      description: "",
    };
  }

  render() {
    const { title, description, author } = this.state;
    return (
      <Wrapper>
        <Title>게시글 작성하기({this.props.match.params.boardType})</Title>
        <TextInput
          type="text"
          placeholder="Title..."
          name="title"
          value={title}
          onChange={this._valueChangeHandler}
        />
        <TextInput
          type="text"
          placeholder="Author..."
          name="author"
          value={author}
          onChange={this._valueChangeHandler}
        />
        <TextArea
          placeholder="Description..."
          name="description"
          value={description}
          onChange={this._valueChangeHandler}
        />

        <Wrapper direction={`row`}>
          <C_Btn onClick={this._writeHandler}>작성하기</C_Btn>
          <D_Btn onClick={() => this.props.history.goBack()}>작성취소</D_Btn>
        </Wrapper>
      </Wrapper>
    );
  }

  _valueChangeHandler = (e) => {
    let nextState = {};

    nextState[e.target.name] = e.target.value;

    this.setState(nextState);
  };

  _writeHandler = async () => {
    const { title, description, author } = this.state;

    if (!title || title.trim() === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!author || author.trim() === "") {
      alert("작성자를 입력해주세요.");
      return;
    }
    if (!description || description.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    const inputData = {
      title: title,
      author: author,
      description: description,
      type: this.props.match.params.boardType,
    };

    await axios
      .post("/api/writeBoard", {
        params: { inputData },
      })
      .then((response) => {
        if (response.data === 0) {
          alert("등록실패 !");
        } else {
          alert("게시글 등록완료 !");
          this.props.history.push(`/${this.props.match.params.boardType}board`);
        }
      });
  };
}

export default Write;
