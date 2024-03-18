import styled from "styled-components";

//Components
import SectionHComponent from "./SectionH";
import SectionTextComponent from "./SectionText";

//Content container
const About = styled.div`
  padding: 100px 500px 0px 145px;

  @media screen and (max-width: 2560px) {
    padding: 100px 400px 0px 145px;
  }

  @media screen and (max-width: 1800px) {
    padding: 100px 350px 0px 100px;
  }

  @media screen and (max-width: 1440px) {
    padding: 100px 300px 0px 100px;
  }

  @media screen and (max-width: 1024px) {
    padding: 100px 200px 0px 100px;
  }

  @media screen and (max-width: 800px) {
    padding: 100px 100px 0px 50px;
  }

  @media screen and (max-width: 400px) {
    padding: 100px 10px 0px 10px;
  }
`;

export default function AboutComponent({ elRef, inView }) {
  return (
    <About ref={elRef} className="w-full h-auto">
      <SectionHComponent content="about us" />
      <SectionTextComponent content="Welcome to our world of transformative travel experiences! At our core, we embody a revolutionary approach to exploring the world. We firmly believe that travel should ignite your senses, invigorate your spirit, and challenge the ordinary. Our dedicated team curates exhilarating journeys, meticulously crafting unique itineraries that cater to diverse tastes and preferences. Join us on our extraordinary adventures and let the magic of travel redefine your perception of exploration." />
    </About>
  );
}
