import styled from "styled-components";

const StyledButton = styled.button`
  background: #3b1aad;
  width: 50%;
  height: 3rem;
  border: none;
  border-radius: 2rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 5px #000000;
  }
`;

const Button = ({ content = '' }) => {
    return <StyledButton>{content}</StyledButton>;
}

export default Button;