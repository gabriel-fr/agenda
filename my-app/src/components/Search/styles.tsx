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
    margin-right: 10px;

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

  button {
    border: none;
    border-radius: 5px;
    padding: 10px;
    height: 35px;
    width: 55px;
    color: white;
    background-color: #6f95f6;
    font-weight: bold;
  }

  button:hover {
    background-color: #4e7ef8;
  }
`;

export const ModalCompanySection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > * {
    margin-bottom: 16px;
  }
`;

export const ModalContent = styled.div`
  margin-top: 25px;
  font-family: system-ui;

  div {
    font-size: 13px;
    margin-top: 13px;
    font-weight: bold;
  }

  div > div > div {
    margin-top: 6px;
    font-size: 12px;
  }

  div > input {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    width: 98%;
    height: 25px;
    border: 1px solid #ccc;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  div > input:focus {
    box-shadow: 0 0 0 0;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: 0;
  }
`;
