import React from "react";
import styled from "styled-components";
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

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      desc: "",
    };
  }
  componentDidMount = async () => {
    const inputData = {
      id: this.props.match.params.id,
    };

    await axios
      .post("/api/getDetail", {
        params: { inputData },
      })
      .then((response) =>
        this.setState({
          title: response.data.title,
          author: response.data.author,
          desc: response.data.description,
        })
      );
  };

  render() {
    const { title, author, desc } = this.state;
    return (
      <Wrapper>
        <Title>게시글 상세 보기</Title>
        <TextInput type="text" readOnly={true} value={title} />
        <TextInput type="text" readOnly={true} value={author} />
        <TextArea readOnly={true} value={desc} />

        <Wrapper direction={`row`}>
          <D_Btn onClick={() => this.props.history.goBack()}>목록으로</D_Btn>
        </Wrapper>
      </Wrapper>
    );
  }
}

export default Detail;
