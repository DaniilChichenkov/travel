import styled from "styled-components";

//Components
import SectionHComponent from "./SectionH";
import ReviewsListItem from "./ReviewsListItem";

//Images
import img1 from "../assets/profile1.png";
import img2 from "../assets/profile2.png";
import img3 from "../assets/profile3.png";

//Content container
const Reviews = styled.div`
  width: 100%;
  height: auto;
  padding: 100px 0px 140px 140px;
  overflow: hidden;

  @media screen and (max-width: 1800px) {
    padding: 100px 0px 100px 100px;
  }

  @media screen and (max-width: 1440px) {
    padding: 100px 0px 140px 100px;
  }

  @media screen and (max-width: 800px) {
    padding: 100px 0px 140px 50px;
  }

  @media screen and (max-width: 400px) {
    padding: 100px 10px 100px 10px;
  }
`;

//Reviews list
const ReviewsList = styled.div`
  width: auto;
  display: grid;
  grid-template-rows: repeat(1, auto);
  grid-template-columns: repeat(autofill, minmax(230px, 1fr));
  grid-column-gap: 100px;
  overflow: scroll;
  margin: 50px 0px 0px;

  @media screen and (max-width: 1800px) {
    grid-template-columns: repeat(autofill, minmax(200px, 1fr));
  }
`;

export default function ReviewsComponent({ elRef }) {
  return (
    <Reviews ref={elRef}>
      <SectionHComponent content="our clients reviews" />
      <ReviewsList>
        <ReviewsListItem
          img={img1}
          stars={5}
          name="John T."
          text="Their attention to detail is unparalleled! The unique routes they planned for me were incredibly exciting, and despite my budget constraints, I never felt compromised. Truly an excellent service!"
        />
        <ReviewsListItem
          img={img2}
          stars={4}
          name="John T."
          text="Thanks to their personalized recommendations, I experienced a journey that felt truly mine. Their partner hotel discounts were a real bonus. I'm already planning my next adventure with them!"
        />
        <ReviewsListItem
          img={img3}
          stars={3}
          name="John T."
          text="Travel has never been this transformative! They designed an itinerary that catered perfectly to my tastes, making experience. A fantastic platform for all types of "
        />
      </ReviewsList>
    </Reviews>
  );
}
