import styled from "styled-components";

const SectionText = styled.p`
  color: rgb(0, 0, 0);
  font-family: Montserrat Alternates;
  font-size: 40px;
  font-weight: 400;
  text-align: left;
  margin: 50px 0px 0px;

  @media screen and (max-width: 2560px) {
    font-size: 38px;
    margin: 45px 0px 0px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 36px;
    margin: 40px 0px 0px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 34px;
    margin: 35px 0px 0px;
  }

  @media screen and (max-width: 800px) {
    font-size: 30px;
    margin: 30px 0px 0px;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin: 20px 0px 0px;
  }
`;

export default function SectionTextComponent({ content }) {
  return <SectionText>{content}</SectionText>;
}
