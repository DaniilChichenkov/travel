import styled from "styled-components";
import { useInView } from "react-intersection-observer";

//Header
const Header = styled.header`
  background-image: url("src/assets/BGPicture.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 330px 145px;

  @media screen and (max-width: 2560px) {
    padding: 300px 145px;
  }

  @media screen and (max-width: 1800px) {
    padding: 300px 100px;
  }

  @media screen and (max-width: 1440px) {
    padding: 270px 100px;
  }

  @media screen and (max-width: 1024px) {
    padding: 240px 100px;
  }

  @media screen and (max-width: 800px) {
    padding: 150px 50px;
  }

  @media screen and (max-width: 400px) {
    padding: 150px 10px;
  }
`;

//First text
const HeaderFirstText = styled.p`
  color: rgb(255, 255, 255);
  font-family: Montserrat Alternates;
  font-size: 48px;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;

  @media screen and (max-width: 2560px) {
    font-size: 44px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 40px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 36px;
  }

  @media screen and (max-width: 800px) {
    font-size: 26px;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

//Second text
const HeaderSecondText = styled.h1`
  color: rgb(255, 255, 255);
  font-family: Montserrat Alternates;
  font-size: 96px;
  font-weight: 700;
  text-align: left;
  text-transform: uppercase;
  margin: 20px 0px 0px;

  @media screen and (max-width: 2560px) {
    font-size: 86px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 76px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 66px;
  }

  @media screen and (max-width: 800px) {
    font-size: 54px;
  }

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

//Button
const HeaderButton = styled.button`
  box-sizing: border-box;
  border: 5px solid rgb(255, 255, 255);
  background: rgba(255, 255, 255, 0);
  color: rgb(255, 255, 255);
  font-family: Montserrat Alternates;
  font-size: 50px;
  font-weight: 400;
  text-align: left;
  padding: 30px 50px;
  margin: 90px 0px 0px;

  @media screen and (max-width: 2560px) {
    font-size: 45px;
    padding: 25px 45px;
    margin: 70px 0px 0px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 40px;
    padding: 20px 40px;
    margin: 55px 0px 0px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 35px;
    padding: 15px 35px;
    margin: 45px 0px 0px;
  }

  @media screen and (max-width: 800px) {
    font-size: 30px;
    margin: 35px 0px 0px;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin: 20px 0px 0px;
  }
`;

export default function HeaderComponent({ elRef, handleRefClick, inView }) {
  return (
    <Header ref={elRef} className="w-full h-auto">
      <HeaderFirstText>NOT JUST ENTERTAINMENT. WHOLE LIFE</HeaderFirstText>
      <HeaderSecondText>IT'S TIME TO TRAVEL</HeaderSecondText>
      <HeaderButton onClick={() => handleRefClick("route")}>
        PLAN ROUTE
      </HeaderButton>
    </Header>
  );
}
