import styled from "styled-components";

//Components
import SectionHComponent from "./SectionH";
import BenefitsItemComponent from "./BenefitsItem";

//Content container
const Benefits = styled.div`
  padding: 100px 140px;

  @media screen and (max-width: 1800px) {
    padding: 100px 140px 0px 100px;
  }

  @media screen and (max-width: 1440px) {
    padding: 100px 0px 0px 100px;
  }

  @media screen and (max-width: 800px) {
    padding: 100px 0px 0px 50px;
  }

  @media screen and (max-width: 400px) {
    padding: 100px 10px 0px 10px;
  }
`;

//Items container
const BenefitsItemsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 50px;
  margin: 50px 0px 0px;
  padding: 0px 250px 0px 0px;

  @media screen and (max-width: 1800px) {
    padding: 0px 200px 0px 0px;
  }

  @media screen and (max-width: 1100px) {
    padding: 0px 100px 0px 0px;
  }
`;

export default function BenefitsComponent({ elRef }) {
  return (
    <Benefits ref={elRef} className="w-full h-auto">
      <SectionHComponent content="our benefits" />
      <BenefitsItemsContainer>
        <BenefitsItemComponent
          headerContent="We plan unusual routes"
          textContent="We meticulously design and implement extraordinary routes, incorporating unique elements, to create an unforgettable experience."
        />
        <BenefitsItemComponent
          headerContent="Suitable for all types of travelling"
          textContent="This versatile option is ideal for a wide range of travel purposes, accommodating various preferences and requirements."
        />
        <BenefitsItemComponent
          headerContent="We think of your budget"
          textContent="We meticulously consider your specific budgetary constraints, ensuring trip will be comfortable and will not go beyond your budget."
        />
        <BenefitsItemComponent
          headerContent="Personal recommendations"
          textContent="We take into account your previous travel experience, your desired itinerary, and create a unique itinerary for each client."
        />
        <BenefitsItemComponent
          headerContent="Discount for our partner hotels"
          textContent="We are offering a special discount exclusively for our valued partner hotels, providing them with exclusive opportunity to enjoy reduced rates."
        />
      </BenefitsItemsContainer>
    </Benefits>
  );
}
