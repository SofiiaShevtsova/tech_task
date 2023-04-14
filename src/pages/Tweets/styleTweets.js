import styled from "styled-components";
import { Link } from "react-router-dom";

export const BoxForHeader = styled.div`
  display: flex;
  padding: 20px 40px;
  align-items: center;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  border-bottom: 5px dashed rgb(235, 216, 255);

  color: #373737;
  background-color: rgba(92, 211, 168, 1);
`;

export const LinkBack = styled(Link)`
  color: #373737;
  margin-right: 150px;
  transition: all 0.5s linear;
  &:hover {
    transform: scale(1.2);
    color: blue;
  }
`;

export const LabelSelect = styled.label`
  margin-right: 20px;
`;

export const Select = styled.select`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  border-radius: 20px;
  padding: 10px;
  color: #373737;
  background-color: rgba(92, 211, 168, 1);
  outline: none;
`;
