import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Container = styled.div`
  text-align: center;
`;
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBthText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBthText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBthText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBthText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBthText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar For New Roofs"
        description="Solar Roof Costs Less Than A New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBthText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description="Solar Roof Costs Less Than A New Roof Plus Solar Panels"
        backgroundImg="accessories.jpg"
        leftBthText="Shop Now"
      />
    </Container>
  );
}

export default Home;
