import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  height: auto;
  padding: 100px 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #000;

  @media screen and (max-width: 1800px) {
    padding: 100px 140px 100px 100px;
  }

  @media screen and (max-width: 1440px) {
    padding: 100px;
  }

  @media screen and (max-width: 1024px) {
    padding: 100px 100px;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    row-gap: 30px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 1024px) {
    gap: 30px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  color: rgb(255, 255, 255);
  font-family: Montserrat Alternates;
  font-size: 24px;
  font-weight: 500;
  text-align: left;
  text-transform: capitalize;

  @media screen and (max-width: 2560px) {
    font-size: 22px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 18px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;

const Rights = styled.p`
  color: rgb(255, 255, 255);
  font-family: Montserrat Alternates;
  font-size: 24px;
  font-weight: 500;
  text-align: left;

  @media screen and (max-width: 2560px) {
    font-size: 22px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 18px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }

  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;

export default function FooterComponent({ handleRefClick, elRef }) {
  return (
    <Footer ref={elRef}>
      <ButtonsContainer>
        <Button onClick={() => handleRefClick("header")}>home</Button>
        <Button onClick={() => handleRefClick("about")}>about us</Button>
        <Button onClick={() => handleRefClick("vision")}>vision</Button>
        <Button onClick={() => handleRefClick("benefits")}>our benefits</Button>
        <Button onClick={() => handleRefClick("route")}>plan route</Button>
        <Button onClick={() => handleRefClick("reviews")}>reviews</Button>
      </ButtonsContainer>
      <Rights>© 2023 Travel & Go. All rights reserved</Rights>
    </Footer>
  );
}
