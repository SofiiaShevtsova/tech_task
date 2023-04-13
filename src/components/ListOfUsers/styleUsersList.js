import styled from "styled-components";

export const BoxForCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

export const BoxForPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const BtnPagination = styled.button`
  display: block;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(92, 211, 168, 1);
  border-radius: 20px;
  border: none;
      font-family: "Montserrat";
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;

    color: #373737;

  &[disabled] {
  background-color: rgba(235, 216, 255, 1);
  }
`;

export const Page = styled.p`
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;

    color: #373737;
`
