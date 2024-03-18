import styled from "styled-components";

//Components
import SectionHComponent from "./SectionH";
import SectionSubHComponent from "./SectionSubH";
import SectionTextComponent from "./SectionText";

//Images
import imgMedium from "../assets/1.png";
import imgLarge from "../assets/2.png";
import imgSmallOne from "../assets/3.png";
import imgSmallTwo from "../assets/4.png";

//Content container
const Vision = styled.div`
  padding: 100px 300px 0px 145px;

  @media screen and (max-width: 2560px) {
    padding: 100px 250px 0px 145px;
  }

  @media screen and (max-width: 1800px) {
    padding: 100px 250px 0px 100px;
  }

  @media screen and (max-width: 1100px) {
    padding: 100px 200px 0px 100px;
  }

  @media screen and (max-width: 800px) {
    padding: 100px 100px 0px 50px;
  }

  @media screen and (max-width: 500px) {
    padding: 100px 50px 0px;
  }

  @media screen and (max-width: 400px) {
    padding: 100px 10px 0px 10px;
  }
`;

//Header container
const VisionHeaderContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 50px;
  padding: 0px 500px 0px 0px;

  @media screen and (max-width: 2560px) {
    padding: 0px 450px 0px 0px;
  }

  @media screen and (max-width: 1800px) {
    padding: 0px 400px 0px 0px;
  }

  @media screen and (max-width: 1440px) {
    padding: 0px 200px 0px 0px;
    gap: 40px;
  }

  @media screen and (max-width: 1024px) {
    padding: 0px 150px 0px 0px;
  }

  @media screen and (max-width: 600px) {
    padding: 0px;
  }
`;

//Grid container
const VisionGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 500px);
  grid-template-rows: repeat(4, auto);
  grid-column-gap: 35px;
  grid-row-gap: 35px;
  margin: 50px 0px 0px;

  @media screen and (max-width: 2560px) {
    grid-template-columns: repeat(4, 450px);
  }

  @media screen and (max-width: 2200px) {
    grid-template-columns: repeat(4, 400px);
  }

  @media screen and (max-width: 2000px) {
    grid-template-columns: repeat(4, 350px);
  }

  @media screen and (max-width: 1800px) {
    grid-template-columns: repeat(4, 300px);
  }

  @media screen and (max-width: 1700px) {
    grid-template-columns: repeat(4, 250px);
  }

  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(4, 200px);
  }

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(4, 150px);
    grid-template-rows: repeat(7, auto);
  }

  @media screen and (max-width: 1100px) {
    grid-template-rows: repeat(7, auto);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(7, auto);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(4, 70px);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(4, 50px);
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(4, 30px);
  }
`;

//Image medium
const ImageMedium = styled.img`
  width: 100%;
  height: 100%;
  grid-column: 1 / span 2;
  grid-row: 1 / span 3;

  @media screen and (max-width: 1300px) {
    grid-column: 1 / span 4;
    grid-row: 1 / span 2;
  }
`;

//Image large
const ImageLarge = styled.img`
  grid-column: 3 / span 2;
  grid-row: 1 / span 4;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1300px) {
    grid-column: 1 / span 4;
    grid-row: 3 / span 3;
  }
`;

//Image small
const ImageSmall = styled.img`
  grid-row: 4;
  grid-column: ${(props) => (props.$first ? 1 : 2)};
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1300px) {
    grid-row: 6 / span 2;
    grid-column: ${(props) => (props.$first ? "1 / span 2" : "3 / span 2")};
  }
`;

export default function VisionComponent({ elRef }) {
  return (
    <Vision ref={elRef}>
      <VisionHeaderContainer>
        <SectionHComponent content="Our vision" />
        <SectionSubHComponent content="Traveler's DNA: we'll help you travel the world" />
        <SectionTextComponent content="We believe in travel and we believe that everyone, regardless of age, gender and financial status, should have the opportunity to explore the world through travel, and our main goal is to help you with that!" />
      </VisionHeaderContainer>
      <VisionGridContainer>
        <ImageMedium src={imgMedium} alt="Medium" />
        <ImageLarge src={imgLarge} alt="Large" />
        <ImageSmall $first={true} src={imgSmallOne} alt="Small" />
        <ImageSmall src={imgSmallTwo} alt="Small" />
      </VisionGridContainer>
    </Vision>
  );
}
