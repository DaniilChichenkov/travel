import { useRef, useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

//Components
import HeaderComponent from "./components/Header";
import AboutComponent from "./components/About";
import VisionComponent from "./components/Vision";
import BenefitsComponent from "./components/Benefits";
import RoutePlanComponent from "./components/RoutePlan";
import ReviewsComponent from "./components/Reviews";
import FooterComponent from "./components/Footer";
import SideMenuComponent from "./components/SideMenu";

//Context
import IntersectionContext from "./components/IntersectionContext";

export default function App() {
  //Manage width of screen
  const [widthOfScreen, setWidthOfScreen] = useState(window.innerWidth);

  //Add window resize observer
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  //Handle window resize
  function handleWindowResize() {
    setWidthOfScreen(window.innerWidth);
  }

  //Calc threshold
  let calcThreshold;
  if (widthOfScreen < 400) {
    calcThreshold = "xs";
  } else if (widthOfScreen < 600) {
    calcThreshold = "s";
  } else if (widthOfScreen < 1000) {
    calcThreshold = "m";
  } else if (widthOfScreen < 1500) {
    calcThreshold = "l";
  } else {
    calcThreshold = "xl";
  }

  //Header ref
  const headerRef = useRef();
  const { ref: headerInViewRef, inView: headerInView } = useInView({
    threshold: 1,
  });
  const setHeaderRef = useCallback(
    (node) => {
      headerRef.current = node;
      headerInViewRef(node);
    },
    [headerInViewRef]
  );

  //About ref
  const aboutRef = useRef();
  const { ref: aboutInViewRef, inView: aboutInView } = useInView({
    threshold: calcThreshold == "xs" ? 0.6 : 1,
  });
  const setAboutRef = useCallback(
    (node) => {
      aboutRef.current = node;
      aboutInViewRef(node);
    },
    [aboutInViewRef]
  );

  //Vision ref
  const visionRef = useRef();
  const { ref: visionInViewRef, inView: visionInView } = useInView({
    threshold: calcThreshold == "xs" ? 0.2 : calcThreshold == "s" ? 0.4 : 0.6,
  });
  const setVisionRef = useCallback(
    (node) => {
      visionRef.current = node;
      visionInViewRef(node);
    },
    [visionInViewRef]
  );

  //Benefits ref
  const benefitsRef = useRef();
  const { ref: benefitsInViewRef, inView: benefitsInView } = useInView({
    threshold:
      calcThreshold == "xs"
        ? 0.2
        : calcThreshold == "s"
        ? 0.4
        : calcThreshold == "m"
        ? 0.6
        : 0.8,
  });
  const setBenefitsRef = useCallback(
    (node) => {
      benefitsRef.current = node;
      benefitsInViewRef(node);
    },
    [benefitsInViewRef]
  );

  //Route ref
  const routeRef = useRef();
  const { ref: routeInViewRef, inView: routeInView } = useInView({
    threshold:
      calcThreshold == "xs"
        ? 0.2
        : calcThreshold == "s"
        ? 0.4
        : calcThreshold == "m"
        ? 0.6
        : 0.8,
  });
  const setRouteRef = useCallback(
    (node) => {
      routeRef.current = node;
      routeInViewRef(node);
    },
    [routeInViewRef]
  );

  //Reviews ref
  const reviewsRef = useRef();
  const { ref: reviewsInViewRef, inView: reviewsInView } = useInView({
    threshold: calcThreshold == "xs" ? 0.4 : calcThreshold == "s" ? 0.6 : 0.8,
  });
  const setReviewsRef = useCallback(
    (node) => {
      reviewsRef.current = node;
      reviewsInViewRef(node);
    },
    [reviewsInViewRef]
  );

  //Footer ref
  const footerRef = useRef();

  //Handle ref click
  function handleRefClick(ref) {
    switch (ref) {
      case "header":
        headerRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "vision":
        visionRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "benefits":
        benefitsRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "route":
        routeRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "reviews":
        reviewsRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      default:
        console.log("Error");
    }
  }

  return (
    <IntersectionContext.Provider
      value={{
        header: headerRef,
        headerView: headerInView,

        about: aboutRef,
        aboutView: aboutInView,

        vision: visionRef,
        visionView: visionInView,

        benefits: benefitsRef,
        benefitsView: benefitsInView,

        route: routeRef,
        routeView: routeInView,

        reviews: reviewsRef,
        reviewsView: reviewsInView,

        footer: footerRef,
      }}
    >
      <div className="w-screen h-auto flex flex-col items-center justify-start">
        <SideMenuComponent handleRefClick={handleRefClick} />
        <HeaderComponent
          elRef={setHeaderRef}
          inView={headerInView}
          handleRefClick={handleRefClick}
        />
        <AboutComponent elRef={setAboutRef} inView={aboutInView} />
        <VisionComponent elRef={setVisionRef} inView={visionInView} />
        <BenefitsComponent elRef={setBenefitsRef} inView={benefitsInView} />
        <RoutePlanComponent elRef={setRouteRef} inView={routeInView} />
        <ReviewsComponent elRef={setReviewsRef} inView={reviewsInView} />
        <FooterComponent elRef={footerRef} handleRefClick={handleRefClick} />
      </div>
    </IntersectionContext.Provider>
  );
}
