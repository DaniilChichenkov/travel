import styled from "styled-components";

const SectionSubH = styled.p`
  color: rgb(0, 0, 0);
  font-family: Montserrat Alternates;
  font-size: 45px;
  font-weight: 500;
  letter-spacing: 0%;
  text-align: left;
  margin: 50px 0px 0px;

  @media screen and (max-width: 2560px) {
    font-size: 40px;
    margin: 45px 0px 0px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 35px;
    margin: 40px 0px 0px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 30px;
    margin: 35px 0px 0px;
  }

  @media screen and (max-width: 800px) {
    font-size: 25px;
    margin: 30px 0px 0px;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin: 20px 0px 0px;
  }
`;

export default function SectionSubHComponent({ content }) {
  return <SectionSubH>{content}</SectionSubH>;
}
