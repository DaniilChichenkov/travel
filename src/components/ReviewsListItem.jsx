import styled from "styled-components";

import starImage from "../assets/star.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
  border: 3px solid rgb(0, 0, 0);
  box-sizing: border-box;
  grid-row: 1;
  width: 600px;
  height: 100%;
  padding: 50px 50px 100px 50px;

  @media screen and (max-width: 1800px) {
    width: 500px;
  }

  @media screen and (max-width: 1440px) {
    padding: 40px 40px 80px 40px;
  }

  @media screen and (max-width: 1024px) {
    padding: 30px 30px 60px 30px;
    gap: 15px;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const Name = styled.p`
  color: #000;
  font-family: Montserrat Alternates;
  font-size: 45px;
  font-weight: 500;
  text-align: left;
  text-transform: capitalize;
  margin: 25px 0px 0px;

  @media screen and (max-width: 2560px) {
    font-size: 43px;
  }

  @media screen and (max-width: 1800px) {
    font-size: 38px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 34px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 30px;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin: 15px 0px 0px;
  }
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 45px 0px 0px;

  img {
    width: 50px;
    height: 50px;

    @media screen and (max-width: 1024px) {
      width: 40px;
      height: 40px;
    }

    @media screen and (max-width: 1024px) {
      width: 30px;
      height: 30px;
    }
  }

  @media screen and (max-width: 500px) {
    margin: 20px 0px 0px;
  }
`;

const Text = styled.p`
  color: rgb(0, 0, 0);
  font-family: Montserrat Alternates;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 0%;
  text-align: center;
  margin: 45px 0px 0px;

  @media screen and (max-width: 2560px) {
    font-size: 38px;
  }

  @media screen and (max-width: 1800px) {
    font-size: 34px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 30px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 26px;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin: 20px 0px 0px;
  }
`;

export default function ReviewsListItem({ img, name, stars, text }) {
  //Create star elements
  const starElements = [];
  for (let i = 0; i < stars; i++) {
    starElements.push(<img key={i} src={starImage} />);
  }

  return (
    <Container>
      <ProfileImage src={img} alt="profile" />
      <Name>{name}</Name>
      <StarsContainer>{starElements}</StarsContainer>
      <Text>{text}</Text>
    </Container>
  );
}
