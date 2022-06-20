import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  font-family: system-ui;
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 35%;
  border-radius: 5px;
  box-shadow: rgb(0 20 20 / 20%) 0px 0px 8px 0px;
`;

export const ButtonCloseModal = styled.span`
  float: right;
  cursor: pointer;
`;
