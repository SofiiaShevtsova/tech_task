import styled from "styled-components";
import bgrImage from "../../images/picture2x-min.png";

const cardsStyle = {
  BoxForCard: styled.div`
    width: 380px;
    height: 460px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-image: linear-gradient(
      135deg,
      rgba(71, 28, 169, 1) 0%,
      rgba(87, 54, 163, 1) 50%,
      rgba(75, 42, 153, 1) 75%
    );
    border-radius: 20px;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  `,
  BoxForLogo: styled.div`
    height: 100%;
    background-image: url(${bgrImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 20px;
  `,
  Logo: styled.img`
    width: 76px;
    height: 22px;
  `,
  BoxForUser: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 10px solid rgba(235, 216, 255, 1);

    font-family: "Montserrat";
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;

    color: #ebd8ff;
  `,
  Avatar: styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 10px solid rgba(235, 216, 255, 1);
    margin: -45px 0 26px 0;
  `,
  Tweets: styled.p`
    margin-bottom: 16px;
  `,
  Followers: styled.p`
    margin-bottom: 26px;
  `,
};

export const Button = styled.button`
  width: 196px;
  padding: 15px;
  border-radius: 10px;
  border: none;
  margin-bottom: 36px;
  background-color: ${(p) => p.colorButton};

  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;
  color: #373737;
  transition: all 0.5s linear;
  &:hover {
    transform: scale(1.2);
    color: blue;
  }
`;

export default cardsStyle;
