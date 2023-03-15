import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MainContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`
export const LoginImg = styled.img`
  width: 550px;
  height: 400px;
`
export const RegisterContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  height: 60vh;
`
export const LoginHead = styled.h1`
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: 550;
  color: #334155;
  line-height: 1.5;
  font-stretch: wider;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  color: #7b8794;
`
export const Input = styled.input`
  width: 40%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
  padding-left: 10px;
  border: 1px solid #7b7b7b;
  background-color: transparent;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 20px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  outline: none;
`
export const Select = styled.select`
  width: 40%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
  padding-left: 10px;
  border: 1px solid #7b7b7b;
  background-color: transparent;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 20px;
  font-family: 'Roboto';
  font-size: 16px;
  color: #334155;
  font-weight: 500;
  outline: none;
  cursor: pointer;
`
export const RegisterBtn = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  border: none;
  background-color: #2563eb;
  outline: none;
  border-radius: 8px;
  width: 120px;
  height: 40px;
  margin-top: 15px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ff0b37;
  margin-top: 0px;
`
