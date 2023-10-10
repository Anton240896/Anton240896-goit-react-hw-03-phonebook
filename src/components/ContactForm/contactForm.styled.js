import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: row;
  width: 472px;

  padding: 12px;
  margin-top: 28px;
  margin-bottom: 48px;

  button {
    position: absolute;
    top: 130px;
    min-width: 118px;
    height: 49px;
    background-color: white;

    border-radius: 60px;
    border-color: black;
    border: none;
    cursor: pointer;
    box-shadow: 3px 5px 20px rgba(0, 5, 0, 0.1);
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  align-items: 20px;
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: bold;

  input {
    display: block;
    width: 167px;
    margin-left: 5px;
  }
`;
