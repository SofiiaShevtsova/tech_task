import styled from "styled-components";
import { Link } from "react-router-dom";

export const BoxForHeader = styled.div`
  display: flex;
  gap: 40px;
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

export const Links = styled(Link)`
  color: #373737;
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

export const HomeMain = styled.div`
  width: 100%;
  padding: 40px;
  background-image: radial-gradient(
    circle,
    rgba(200, 255, 200, 1) 0%,
    rgba(127, 255, 212, 1) 100%
  );
`;

export const TextHome = styled.p`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #373737;
`;

export const ListOfImagesStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  row-gap: 50px;
  column-gap: 30px;
  font-size: 28px;
`;

export const ImageItem = styled.li`
  border-radius: 20px;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  overflow: hidden;
  opacity: 0.8;
  transition: all 0.5s linear;
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;
