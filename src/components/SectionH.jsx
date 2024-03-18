import styled from "styled-components";

const SectionH = styled.h2`
  color: rgb(0, 0, 0);
  font-family: Montserrat Alternates;
  font-size: 85px;
  font-weight: 600;
  text-align: left;
  text-transform: uppercase;
  position: relative;

  @media screen and (max-width: 2560px) {
    font-size: 80px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 70px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 60px;
  }

  @media screen and (max-width: 800px) {
    font-size: 50px;
  }

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

export default function SectionHComponent({ content }) {
  return <SectionH>{content}</SectionH>;
}
