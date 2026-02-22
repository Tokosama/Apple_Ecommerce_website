import { primary } from "@/lib/color";
import styled, { css } from "styled-components";

export const ButtonStyle = css`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: "Roboto";
  font-weight: 700;
  transition: all 0.2s ease-in-out;

  svg {
    height: 16px;
    margin-right: 5px;
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    transform: translateY(-2px); /* effet levé */
  }

  &:active {
    transform: translateY(1px); /* effet enfoncé */
  }

  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}

  /* -------- Couleurs -------- */
  /* white */
  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;

      &:hover {
        background-color: #f0f0f0;
      }

      &:active {
        background-color: #e0e0e0;
      }
    `}
  ${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      &:active {
        background-color: rgba(255, 255, 255, 0.2);
      }
    `}

  /* black */
  ${(props) =>
    props.black &&
    !props.outline &&
    css`
      background-color: #000;
      color: #fff;

      &:hover {
        background-color: #111;
      }

      &:active {
        background-color: #222;
      }
    `}
  ${(props) =>
    props.black &&
    props.outline &&
    css`
      background-color: transparent;
      color: #000;
      border: 1px solid #000;

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }

      &:active {
        background-color: rgba(0, 0, 0, 0.1);
      }
    `}

  /* primary */
  ${(props) =>
    props.primary &&
    !props.outline &&
    css`
      background-color: ${primary};
      color: #fff;
      border: 1px solid ${primary};

      &:hover {
        background-color: darken(${primary}, 80%);
      }

      &:active {
        background-color: darken(${primary}, 10%);
      }
    `}
  ${(props) =>
    props.primary &&
    props.outline &&
    css`
      background-color: transparent;
      color: ${primary};
      border: 1px solid ${primary};

      &:hover {
        background-color: ${primary}10; /* léger overlay */
      }

      &:active {
        background-color: ${primary}20;
      }
    `}

  /* -------- Taille -------- */
  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;

      svg {
        height: 20px;
        margin-right: 5px;
      }
    `}
`;

export const StyleButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyleButton {...rest}>{children}</StyleButton>;
}