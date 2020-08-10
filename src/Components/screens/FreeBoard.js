import React from "react";
import { WholeWrapper, Wrapper, Column } from "../commonComponents";

class FreeBoard extends React.Component {
  render() {
    return (
      <WholeWrapper>
        <Wrapper width="960px" height="25px" direction="row">
          <Column width={"5%"} isHead={true}>
            번호
          </Column>
          <Column width={"40%"} isHead={true}>
            제목
          </Column>
          <Column width={"15%"} isHead={true}>
            작성자
          </Column>
          <Column width={"20%"} isHead={true}>
            작성일
          </Column>
          <Column width={"20%"} isHead={true}>
            조회수
          </Column>
        </Wrapper>
        {/* --- DATA AREA START ---*/}
        <Wrapper width="960px" height="25px" direction="row" isData={true}>
          <Column width={"5%"} isHead={false}>
            1
          </Column>
          <Column width={"40%"} isHead={false}>
            ㅎㅇ
          </Column>
          <Column width={"15%"} isHead={false}>
            오민형
          </Column>
          <Column width={"20%"} isHead={false}>
            2020/08/10
          </Column>
          <Column width={"20%"} isHead={false}>
            0
          </Column>
        </Wrapper>
        {/* --- DATA AREA END ---*/}

        {/* --- DATA AREA START ---*/}
        <Wrapper width="960px" height="25px" direction="row" isData={true}>
          <Column width={"5%"} isHead={false}>
            2
          </Column>
          <Column width={"40%"} isHead={false}>
            ㅂㅇ
          </Column>
          <Column width={"15%"} isHead={false}>
            오민형
          </Column>
          <Column width={"20%"} isHead={false}>
            2020/08/10
          </Column>
          <Column width={"20%"} isHead={false}>
            0
          </Column>
        </Wrapper>
        {/* --- DATA AREA END ---*/}

        {/* --- DATA AREA START ---*/}
        <Wrapper width="960px" height="25px" direction="row" isData={true}>
          <Column width={"5%"} isHead={false}>
            3
          </Column>
          <Column width={"40%"} isHead={false}>
            ㅎㅇㅎㅇ
          </Column>
          <Column width={"15%"} isHead={false}>
            오민형
          </Column>
          <Column width={"20%"} isHead={false}>
            2020/08/10
          </Column>
          <Column width={"20%"} isHead={false}>
            0
          </Column>
        </Wrapper>
        {/* --- DATA AREA END ---*/}
      </WholeWrapper>
    );
  }
}

export default FreeBoard;