import styled, { css } from "styled-components";
export const ButtonStyle = css`
border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  svg{
    height:16px;
  }
  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;
    `}

  ${(props) =>
    props.white &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;    `}
  ${(props) =>
    props.primary &&
    css`
      background-color: #5542f6;
      color: #fff;
      border: 1px solid #5542F6; 
    `}
  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg{
        height:20px  ;
        margin-right: 5px;
      }
    `}
`
export const StyleButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyleButton {...rest}>{children}</StyleButton>;
}