import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f1e3cb;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #f1e3cb;
  color: #3c4245;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `};

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ffacb7;
      color: #ffacb7;
    `};

  ${(props) =>
    props.isFilled &&
    css`
      color: #ffacb7;
    `};

  input {
    background: #f1e3cb;
    flex: 1;
    border: 0;
    color: #3c4245;

    &::placeholder {
      color: #666360;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: #f4ede8;
    transition: background-color 5000s ease-in-out 0s;
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
