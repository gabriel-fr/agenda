import styled from "styled-components";

export const ShearchBar = styled.div`
  height: 50px;
  background-color: #bf72d4;
  color: white;
  align-items: center;
  display: flex;

  span:nth-child(1) {
    margin-left: 25px;
    font-weight: bold;
  }

  span:nth-child(2) {
    margin-left: 25%;
    margin-right: auto;

    input {
      height: 35px;
      width: 500px;
      border: none;
      border-radius: 7px;
    }
    input:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
  }
`;
