import styled from "styled-components";

//Container
const BenefitsItem = styled.div`
  width: 45%;
  height: auto;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

//Item h
const BenefitsItemH = styled.p`
  color: rgb(0, 0, 0);
  font-family: Montserrat Alternates;
  font-size: 42px;
  font-weight: 600;
  letter-spacing: 0%;
  text-align: left;

  @media screen and (max-width: 2560px) {
    font-size: 40px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 36px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 34px;
  }

  @media screen and (max-width: 800px) {
    font-size: 30px;
  }

  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;

//Item text
const BenefitsItemText = styled.p`
  color: rgb(0, 0, 0);
  font-family: Montserrat Alternates;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 0%;
  text-align: left;
  margin: 5px 0px 0px;

  @media screen and (max-width: 2560px) {
    font-size: 38px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 34px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 30px;
  }

  @media screen and (max-width: 800px) {
    font-size: 26px;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

export default function BenefitsItemComponent({ headerContent, textContent }) {
  return (
    <BenefitsItem>
      <BenefitsItemH>{headerContent}</BenefitsItemH>
      <BenefitsItemText>{textContent}</BenefitsItemText>
    </BenefitsItem>
  );
}
