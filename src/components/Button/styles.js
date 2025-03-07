import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #565656;
  border-radius: 1.5rem;
  position: relative;

  color: #ffff;
  padding: 0.2rem 1rem;
  min-width: 120px;
  width: 100%;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      min-width: 167px;
      height: 2rem;

      background: #e4105d;

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 1.5rem;
      }

      &:hover{
        opacity: 0.6;
        scale: 1.005;
        cursor: pointer;
      }
    `}}
`;
