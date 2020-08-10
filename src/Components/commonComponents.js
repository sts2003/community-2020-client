import styled from "styled-components";

const BORDER = `1px solid rgb(140, 140, 140)`;
const BORDER_RADIUS = `4px`;

export const WholeWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${BORDER};
  border-radius: ${BORDER_RADIUS};

  display: flex;
  flex-direction: ${(props) => props.direction};

  ${(props) =>
    props.isData &&
    `
    transition : 0.5s;
    cursor: pointer;

  &:hover {
      background: darksalmon;
      color : #fff;
  }
  `}
`;

export const Column = styled.div`
  width: ${(props) => props.width};
  height: 25px;

  ${(props) =>
    props.isHead
      ? `  background: rosybrown;
  color: white;
  line-height: 25px;
  text-align: center;
  `
      : `
  line-height: 25px;
  text-align: center;
  border-bottom: ${BORDER}`};
`;
