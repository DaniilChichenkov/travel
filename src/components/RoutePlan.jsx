import { useState } from "react";
import DateTime from "react-datetime";
import styled from "styled-components";

import "react-datetime/css/react-datetime.css";

//Components
import SectionHComponent from "./SectionH";

//Images
import img from "../assets/image 1.png";

//Container
const RoutePlan = styled.div`
  width: 100%;
  padding: 100px 150px 0px 150px;

  @media screen and (max-width: 2560px) {
    padding: 100px 140px 0px 140px;
  }

  @media screen and (max-width: 1800px) {
    padding: 100px 140px 0px 100px;
  }

  @media screen and (max-width: 1300px) {
    padding: 100px 250px 0px 100px;
  }

  @media screen and (max-width: 800px) {
    padding: 100px 50px 0px 50px;
  }

  @media screen and (max-width: 400px) {
    padding: 100px 10px 0px 10px;
  }
`;

//Content container
const RoutePlanContentContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1 auto;
  grid-column-gap: 135px;
  margin: 65px 0px;

  @media screen and (max-width: 1800px) {
    grid-column-gap: 100px;
  }

  @media screen and (max-width: 1300px) {
    grid-template-rows: 2 auto;
    grid-row-gap: 100px;
  }
`;

//Form
const RoutePlanForm = styled.form`
  width: 100%;
  grid-column: 1;
  grid-row: 1;
  display: grid;
  grid-template-rows: repeat(8, auto);
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 60px;

  @media screen and (max-width: 2560px) {
    grid-row-gap: 55px;
  }

  @media screen and (max-width: 1800px) {
    grid-row-gap: 50px;
  }

  @media screen and (max-width: 1440px) {
    grid-row-gap: 45px;
  }

  @media screen and (max-width: 1300px) {
    grid-row: 2;
    grid-column: 1 / span 2;
  }

  @media screen and (max-width: 800px) {
    padding: 0px 150px 0px 0px;
  }

  @media screen and (max-width: 600px) {
    padding: 0px 100px 0px 0px;
    grid-template-rows: repeat(10, auto);
  }
`;

//Form input container
const FormInputRow = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, auto);
  align-items: end;

  @media screen and (max-width: 600px) {
    grid-template-rows: repeat(2, auto);
  }
`;

//Regular input (Text / Email / Phone / Locations)
const FormRegularInput = styled.input`
  grid-column: span 5;
  grid-row: span 1;
  color: #000;
  opacity: 1;
  font-family: Montserrat Alternates;
  font-size: 32px;
  font-weight: 400;
  text-align: left;
  box-sizing: border-box;
  border-bottom: 3px solid rgb(0, 0, 0);
  padding: 0px 0px 16px 0px;
  &::placeholder {
    color: #000;
  }

  @media screen and (max-width: 2560px) {
    font-size: 30px;
  }

  @media screen and (max-width: 1800px) {
    font-size: 20px;
  }
`;

//Form dates
const FormDateInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(1, auto);
  box-sizing: border-box;
  border-bottom: 3px solid rgb(0, 0, 0);
  height: 100%;
  align-items: end;
  padding: 0px 0px 16px 0px;
  position: relative;
  //If starting date
  ${(props) =>
    props.$startingDate &&
    `
    grid-column: 1 / span 2;

    @media screen and (max-width: 600px) {
      grid-row: 1 / span 1;
      grid-column: 1 / span 5;
    }
  `}

  //If end date
  ${(props) =>
    props.$endDate &&
    `
    grid-column: 4 / span 2;
    grid-row: span 1;

    @media screen and (max-width: 600px) {
      grid-row: 2 / span 1;
      grid-column: 1 / span 5;
      margin: 45px 0px 0px;
    }
  `}

  //Date picker position
  .date-picker {
    grid-column: 10;
    top: 140px;

    @media screen and (max-width: 2560px) {
      top: 100px;
    }

    @media screen and (max-width: 1440px) {
      top: 70px;
    }

    @media screen and (max-width: 1024px) {
      top: 30px;
    }

    @media screen and (max-width: 800px) {
      top: 60px;
      grid-column: 1;
    }

    @media screen and (max-width: 600px) {
      //For datepicker of starting date
      ${(props) =>
        props.$startingDate &&
        `
        top: 30px;
      `}
      //For datepicker of ending date
      ${(props) =>
        props.$endDate &&
        `
        top: 80px;
      `}
    }
  }
`;

//Form date label
const FormDateLabel = styled.label`
  //Label (Text)
  ${(props) =>
    props.$text &&
    `
      color: #000;
      font-family: Montserrat Alternates;
      font-size: 32px;
      font-weight: 400;
      margin: 0px;
      grid-column: 1 / span 5;
      grid-row: span 1;

      @media screen and (max-width: 2560px) {
        font-size: 30px;
      }

      @media screen and (max-width: 1800px) {
        font-size: 20px;
      }
    `}

  //Label (Triangle)
    ${(props) =>
    props.$triangle &&
    `
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 24px 12px 0 12px;
      border-color: #000 transparent transparent transparent;
      transform: rotate(0deg);
      transition: transform 0.2s linear;
      grid-column: 10;
      grid-row: span 1;
      cursor: pointer;

      @media screen and (max-width: 1440px) {
        transform: scale(0.7);
      }
`}
`;

//Budget input container
const FormBudgetInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(1, auto);
  box-sizing: border-box;
  height: 100%;
  align-items: end;
  grid-column: 1 / span 2;

  @media screen and (max-width: 600px) {
    grid-column: 1 / span 5;
    grid-row: 1 / span 1;
  }
`;

//Budget input
const FormBudgetInputContainerText = styled.input`
  color: #000;
  font-family: Montserrat Alternates;
  font-size: 32px;
  font-weight: 400;
  line-height: 39px;
  letter-spacing: 0%;
  text-align: left;
  border-bottom: 3px solid #000;
  padding: 0px 0px 16px 0px;
  grid-column: 1 / span 5;
  &::placeholder {
    color: #000;
  }

  @media screen and (max-width: 2560px) {
    font-size: 30px;
  }

  @media screen and (max-width: 1800px) {
    font-size: 20px;
  }
`;

//Currensy selection container
const CurrencySelectionContainer = styled.div`
  grid-column: 8 / span 3;
  border-bottom: 3px solid #000;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, auto);
  align-items: center;
  position: relative;
`;

//Selected currency text
const SelectedCurrencyText = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-family: Montserrat Alternates;
  font-size: 32px;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  grid-column: 1 / span 2;
  padding: 0px 0px 16px 0px;

  @media screen and (max-width: 2560px) {
    font-size: 28px;
  }

  @media screen and (max-width: 1800px) {
    font-size: 20px;
  }
`;

//Currency list toggle button
const CurrencyListToggler = styled.button`
  width: 0px;
  height: 0px;
  border-style: solid;
  margin: 0px 0px 16px 0px;
  border-width: 24px 12px 0 12px;
  border-color: #000 transparent transparent transparent;
  transform: rotate(0deg);
  cursor: pointer;
  grid-column: 3 / span 1;

  @media screen and (max-width: 1440px) {
    transform: scale(0.7);
  }
`;

//Currency list
const CurrencyList = styled.div`
  width: 100%;
  height: auto;
  border: 3px solid #000;
  background-color: #fff;
  z-index: 10;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  bottom: -200px;
  display: ${(props) => (props.$open ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;

  @media screen and (max-width: 2560px) {
    bottom: -180px;
  }

  @media screen and (max-width: 1440px) {
    bottom: -135px;
  }
`;

//Currency list item
const CurrencyListItem = styled.button`
  color: rgba(0, 0, 0, 0.7);
  font-family: Montserrat Alternates;
  font-size: 32px;
  font-weight: 400;
  text-align: left;

  @media screen and (max-width: 2560px) {
    font-size: 30px;
  }

  @media screen and (max-width: 1800px) {
    font-size: 20px;
  }
`;

//Guests counter container
const FormGuestsInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(1, auto);
  box-sizing: border-box;
  border-bottom: 3px solid #000;
  height: 100%;
  align-items: end;
  padding: 0px 0px 16px 0px;
  grid-column: 4 / span 2;

  @media screen and (max-width: 600px) {
    grid-column: 1 / span 5;
    grid-row: 2 / span 1;
    margin: 45px 0px 0px;
  }
`;

//Guests counter text
const GuestsInputContainerText = styled.p`
  color: #000;
  font-family: Montserrat Alternates;
  font-size: 32px;
  font-weight: 400;
  text-align: left;
  text-transform: capitalize;
  grid-column: 1 / span 5;

  @media screen and (max-width: 2560px) {
    font-size: 30px;
  }

  @media screen and (max-width: 1800px) {
    font-size: 20px;
  }
`;

//Guests counter container
const CounterContainer = styled.div`
  grid-column: 8 / span 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

//Action buttons
const CounterContainerActionButton = styled.button`
  color: rgba(0, 0, 0, 0.7);
  font-family: Montserrat Alternates;
  font-size: 32px;
  font-weight: 500;
  text-align: left;

  @media screen and (max-width: 2560px) {
    font-size: 30px;
  }

  @media screen and (max-width: 1800px) {
    font-size: 20px;
  }
`;

//Counter value text
const CounterValueText = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-family: Montserrat Alternates;
  font-size: 32px;
  font-weight: 500;
  text-align: left;

  @media screen and (max-width: 2560px) {
    font-size: 30px;
  }

  @media screen and (max-width: 1800px) {
    font-size: 20px;
  }
`;

//Submit button
const FormSubmitButton = styled.button`
  grid-column: 1 / span 2;
  border: 5px solid rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: Montserrat Alternates;
  font-size: 40px;
  font-weight: 400;
  text-transform: uppercase;
  padding: 25px;

  @media screen and (max-width: 2560px) {
    font-size: 38px;
  }

  @media screen and (max-width: 1800px) {
    font-size: 20px;
  }

  @media screen and (max-width: 1440px) {
    margin: 20px 0px 0px;
  }

  @media screen and (max-width: 600px) {
    grid-column: 1 / span 3;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
    grid-column: 1 / span 4;
  }
`;

//Image
const Image = styled.img`
  width: 100%;
  height: 100%;
  grid-row: 1;
  grid-column: 2;

  @media screen and (max-width: 1300px) {
    grid-row: 1;
    grid-column: 1 / span 2;
  }
`;

export default function RoutePlanComponent({ elRef }) {
  //Guests counter
  const [counter, setCounter] = useState(0);

  //Starting date state
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [selectedStartdDate, setSelectedStartDate] = useState(undefined);

  //Ending date state
  const [endDateOpen, setEndDateOpen] = useState(false);
  const [selectedEndDate, setSelectedEndDate] = useState(undefined);

  //Currency
  const [selectedCurrency, setSelectedCurrency] = useState("eur");
  const [currencyListOpen, setCurrencyListOpen] = useState(false);

  //Handle counter click
  function handleCounterClick(action) {
    if (action === "dec") {
      if (counter > 0) {
        setCounter((prev) => prev - 1);
      }
    } else {
      setCounter((prev) => prev + 1);
    }
  }

  //Handle currency change
  function handleCurrencyChange(newCurrency) {
    setSelectedCurrency(newCurrency);
    //Close currency selection list
    setCurrencyListOpen(false);
  }

  //Handle end date select event
  function handleDateSelect(e, type) {
    //Format date
    let date = e._d;
    let formatedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    //Set state for start date
    if (type == "start") {
      setSelectedStartDate(formatedDate);

      //Set state for end date
    } else {
      setSelectedEndDate(formatedDate);
    }
  }

  //Starting date classes
  let startingDateClasses = "date-picker absolute";
  //If !startDateOpen - add "hidden" class
  startDateOpen ? null : (startingDateClasses += " hidden");

  //End date classes
  let endDateClasses = "date-picker absolute";
  //If !startDateOpen - add "hidden" class
  endDateOpen ? null : (endDateClasses += " hidden");

  return (
    <RoutePlan ref={elRef}>
      <SectionHComponent content="route PLAN generator" />
      <RoutePlanContentContainer>
        {/* Form */}
        <RoutePlanForm>
          {/* Name */}
          <FormInputRow>
            <FormRegularInput type="text" placeholder="Full name" />
          </FormInputRow>

          {/* Email */}
          <FormInputRow>
            <FormRegularInput type="email" placeholder="E-mail" />
          </FormInputRow>

          {/* Tel */}
          <FormInputRow>
            <FormRegularInput type="tel" placeholder="Phone" />
          </FormInputRow>

          {/* Dates */}
          <FormInputRow>
            {/* Starting date */}
            <FormDateInputContainer $startingDate>
              <FormDateLabel $text htmlFor="startingDate">
                {selectedStartdDate ? selectedStartdDate : "Starting date"}
              </FormDateLabel>
              <FormDateLabel
                onClick={() => setStartDateOpen((prev) => !prev)}
                $triangle
                htmlFor="startingDate"
              />
              {/* Date picker */}
              <DateTime
                className={startingDateClasses}
                timeFormat={false}
                $startingDate
                //Select event
                onChange={(e) => {
                  handleDateSelect(e, "start");

                  //Close date picker
                  setStartDateOpen((prev) => !prev);
                }}
                open={startDateOpen}
              />
            </FormDateInputContainer>

            {/* End date */}
            <FormDateInputContainer $endDate>
              <FormDateLabel $text htmlFor="endDate">
                {selectedEndDate ? selectedEndDate : "End date"}
              </FormDateLabel>
              <FormDateLabel
                onClick={() => setEndDateOpen((prev) => !prev)}
                $triangle
                htmlFor="endDate"
              />
              {/* Date picker */}
              <DateTime
                className={endDateClasses}
                timeFormat={false}
                $endDate
                //Select event
                onChange={(e) => {
                  handleDateSelect(e, "end");
                  //Close date picker after selection
                  setEndDateOpen((prev) => !prev);
                }}
                open={endDateOpen}
              />
            </FormDateInputContainer>
          </FormInputRow>

          {/* Budget / Guests */}
          <FormInputRow>
            {/* Budget */}
            <FormBudgetInputContainer>
              {/* Text */}
              <FormBudgetInputContainerText
                type="number"
                placeholder="Budget"
              />

              {/* Currency selection */}
              <CurrencySelectionContainer>
                {/* Selected currency */}
                <SelectedCurrencyText>{selectedCurrency}</SelectedCurrencyText>
                {/* Currency list toggler */}
                <CurrencyListToggler
                  type="button"
                  onClick={() => setCurrencyListOpen((prev) => !prev)}
                />
                {/* Currency list */}
                <CurrencyList $open={currencyListOpen}>
                  {/* Eur */}
                  <CurrencyListItem
                    type="button"
                    onClick={() => handleCurrencyChange("EUR")}
                  >
                    Eur
                  </CurrencyListItem>
                  {/* Usd */}
                  <CurrencyListItem
                    type="button"
                    onClick={() => handleCurrencyChange("USD")}
                  >
                    Usd
                  </CurrencyListItem>
                  {/* Pound */}
                  <CurrencyListItem
                    type="button"
                    onClick={() => handleCurrencyChange("POU")}
                  >
                    Pound
                  </CurrencyListItem>
                </CurrencyList>
              </CurrencySelectionContainer>
            </FormBudgetInputContainer>
            {/* Guests */}
            <FormGuestsInputContainer>
              <GuestsInputContainerText>travelers</GuestsInputContainerText>
              {/* Counter */}
              <CounterContainer>
                <CounterContainerActionButton
                  onClick={() => handleCounterClick("dec")}
                  type="button"
                >
                  -
                </CounterContainerActionButton>
                <CounterValueText>{counter}</CounterValueText>
                <CounterContainerActionButton
                  onClick={() => handleCounterClick("inc")}
                  type="button"
                >
                  +
                </CounterContainerActionButton>
              </CounterContainer>
            </FormGuestsInputContainer>
          </FormInputRow>
          {/* Prefered location */}
          <FormInputRow>
            <FormRegularInput type="text" placeholder="Preferred location" />
          </FormInputRow>
          {/* Additional location */}
          <FormInputRow>
            <FormRegularInput type="text" placeholder="Add location(s)" />
          </FormInputRow>
          {/* Submit btn */}
          <FormInputRow>
            <FormSubmitButton type="submit">plan route</FormSubmitButton>
          </FormInputRow>
        </RoutePlanForm>

        {/* Image */}
        <Image src={img} alt="image" />
      </RoutePlanContentContainer>
    </RoutePlan>
  );
}
