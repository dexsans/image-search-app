import styled from "styled-components";

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  width: 80%;
  height: 3rem;
  padding: 1rem;
  outline: none;
  color: #463082;
  font-size: 1rem;
  font-weight: bold;
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
  }
`;

const Input = ({ type = '', placeholder = '' }) => {
    return <StyledInput type={type} placeholder={placeholder} />;
}
export default Input;