import styled from "styled-components";

export const ButtonWrapper = styled.button`
  font-weight: bold;
  border: 1px solid white;
  border-radius: 6px;
  padding: 8px 10px;
  color: ${({ color }) => (color ? color : "black")};
`;
