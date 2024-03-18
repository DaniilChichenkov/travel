import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

//Context
import IntersectionContext from "./IntersectionContext";

const SideMenu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 40px;
  top: 300px;
  right: 100px;
  z-index: 100;

  @media screen and (max-width: 2560px) {
    top: 250px;
    right: 90px;
  }

  @media screen and (max-width: 1440px) {
    top: 200px;
    transform: scale(0.95);
    right: 75px;
  }

  @media screen and (max-width: 1024px) {
    top: 150px;
    transform: scale(0.9);
    right: 65px;
  }

  @media screen and (max-width: 800px) {
    top: 100px;
    transform: scale(0.8);
    right: 10px;
  }

  @media screen and (max-width: 600px) {
    top: 70px;
    transform: scale(0.7);
    right: 0px;
  }
`;

const SideMenuRow = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  gap: 15px;

  //Rectangles
  &::before {
    display: block;
    content: "";
    position: absolute;
    width: 4px;
    height: 42px;
    background-color: ${(props) =>
      props.$white === undefined ? "#fff" : props.$white ? "#fff" : "#000"};
    transition: 0.2s background-color linear;
    right: 18px;
    top: -40px;
  }

  &:last-of-type {
    &::after {
      display: block;
      content: "";
      position: absolute;
      width: 4px;
      height: 42px;
      background-color: ${(props) =>
        props.$white === undefined ? "#fff" : props.$white ? "#fff" : "#000"};
      transition: 0.2s background-color linear;
      right: 18px;
      top: 40px;
    }
  }
`;

const SideMenuText = styled.p`
  color: ${(props) =>
    props.$white === undefined ? "#fff" : props.$white ? "#fff" : "#000"};
  transition: 0.2s color linear;
  font-family: Montserrat Alternates;
  font-weight: 500;
  text-align: right;
  font-size: 24px;
`;

const SideMenuEllipse = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid
    //Change border color depends on which element is now under the side menu
    ${(props) =>
      props.$white === undefined ? "#fff" : props.$white ? "#fff" : "#000"};
  transition: 0.2s border linear;
  border-radius: 50%;
  transition: 0.2s background-color linear;
  background-color: ${(props) =>
    props.$active ? (props.$white ? "#fff" : "#000") : "transparent"};
`;

export default function SideMenuComponent({ handleRefClick }) {
  //State of buttons (Intersection)
  const [buttonsIntersections, setButtonsIntersections] = useState({
    homeRef: undefined,
    aboutRef: undefined,
    visionRef: undefined,
    benefitsRef: undefined,
    routeRef: undefined,
    reviewsRef: undefined,
  });

  //Buttons refs
  const refs = {
    homeRef: useRef(),
    aboutRef: useRef(),
    visionRef: useRef(),
    benefitsRef: useRef(),
    routeRef: useRef(),
    reviewsRef: useRef(),
  };

  //Intersection context
  const {
    header,
    footer,
    headerView,
    aboutView,
    visionView,
    benefitsView,
    routeView,
    reviewsView,
  } = useContext(IntersectionContext);

  //Add window scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Handle scroll intersections
  function handleScroll() {
    //Check each button
    for (let buttonRef in refs) {
      //Get button
      let buttonElement = refs[buttonRef].current;

      //Check for intersection with header and footer
      if (
        (buttonElement.getBoundingClientRect().top <
          header.current.getBoundingClientRect().bottom &&
          buttonElement.getBoundingClientRect().bottom <
            header.current.getBoundingClientRect().bottom) ||
        (buttonElement.getBoundingClientRect().bottom >
          footer.current.getBoundingClientRect().top &&
          buttonElement.getBoundingClientRect().top >
            footer.current.getBoundingClientRect().top)
      ) {
        //Set intersection state of button as "true"
        setButtonsIntersections((prev) => ({
          ...prev,
          [buttonRef]: true,
        }));
      } else {
        setButtonsIntersections((prev) => ({
          ...prev,
          [buttonRef]: false,
        }));
      }

      //Check for intersection with footer
    }
  }

  return (
    <SideMenu>
      {/* Home */}
      <SideMenuRow
        ref={refs.homeRef}
        onClick={() => {
          handleRefClick("header");
        }}
        $white={buttonsIntersections.homeRef}
      >
        <SideMenuText $white={buttonsIntersections.homeRef}>home</SideMenuText>
        <SideMenuEllipse
          $white={buttonsIntersections.homeRef}
          $active={headerView}
        />
      </SideMenuRow>

      {/* About */}
      <SideMenuRow
        ref={refs.aboutRef}
        onClick={() => {
          handleRefClick("about");
        }}
        $white={buttonsIntersections.aboutRef}
      >
        <SideMenuText $white={buttonsIntersections.aboutRef}>
          about
        </SideMenuText>
        <SideMenuEllipse
          $active={aboutView}
          $white={buttonsIntersections.aboutRef}
        />
      </SideMenuRow>

      {/* Vision */}
      <SideMenuRow
        ref={refs.visionRef}
        onClick={() => {
          handleRefClick("vision");
        }}
        $white={buttonsIntersections.visionRef}
        $active={visionView}
      >
        <SideMenuText $white={buttonsIntersections.visionRef}>
          vision
        </SideMenuText>
        <SideMenuEllipse
          $active={visionView}
          $white={buttonsIntersections.visionRef}
        />
      </SideMenuRow>

      {/* Benefits */}
      <SideMenuRow
        ref={refs.benefitsRef}
        onClick={() => {
          handleRefClick("benefits");
        }}
        $white={buttonsIntersections.benefitsRef}
        $active={benefitsView}
      >
        <SideMenuText $white={buttonsIntersections.benefitsRef}>
          benefits
        </SideMenuText>
        <SideMenuEllipse
          $active={benefitsView}
          $white={buttonsIntersections.benefitsRef}
        />
      </SideMenuRow>

      {/* Route */}
      <SideMenuRow
        ref={refs.routeRef}
        onClick={() => {
          handleRefClick("route");
        }}
        $white={buttonsIntersections.routeRef}
        $active={routeView}
      >
        <SideMenuText $white={buttonsIntersections.routeRef}>
          route
        </SideMenuText>
        <SideMenuEllipse
          $active={routeView}
          $white={buttonsIntersections.routeRef}
        />
      </SideMenuRow>

      {/* Reviews */}
      <SideMenuRow
        ref={refs.reviewsRef}
        onClick={() => {
          handleRefClick("reviews");
        }}
        $white={buttonsIntersections.reviewsRef}
      >
        <SideMenuText $white={buttonsIntersections.reviewsRef}>
          reviews
        </SideMenuText>
        <SideMenuEllipse
          $active={reviewsView}
          $white={buttonsIntersections.reviewsRef}
        />
      </SideMenuRow>
    </SideMenu>
  );
}
