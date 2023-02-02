import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styled from "styled-components/native";

const insuranceBenefits = [
  { name: "Glasses", description: "Prescription glasses for clear vision." },
  { name: "Orthotics", description: "Orthotics for support and comfort." },
  { name: "Massage", description: "Professional massage to relieve tension." },
  {
    name: "Nutritionist",
    description: "Consult with a registered nutritionist for healthy eating.",
  },
  {
    name: "Physiotherapist",
    description:
      "Consult with a licensed physiotherapist for physical therapy.",
  },
  {
    name: "Psychologist",
    description: "Consult with a registered psychologist for mental health.",
  },
];

const Container = styled.View`
  flex: 1;
  background-color: #f1f1f1;
  padding: 20px;
`;

const BenefitContainer = styled.TouchableOpacity`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const BenefitText = styled.Text`
  font-size: 20px;
  color: #333;
`;

const Tooltip = styled.View`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 80%;
  align-items: center;
`;
// transform: translate(-50%, -50%);

const TooltipText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #333;
`;

export const InterestedBenefitsScreen = ({ navigation }) => {
  const [selectedBenefits, setSelectedBenefits] = useState([]);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipText, setTooltipText] = useState("");

  const handleBenefitPress = (benefit) => {
    if (selectedBenefits.includes(benefit)) {
      setSelectedBenefits(selectedBenefits.filter((b) => b !== benefit));
    } else {
      setSelectedBenefits([...selectedBenefits, benefit]);
    }
  };

  const handleTooltipPress = (description) => {
    setTooltipText(description);
    setTooltipVisible(!tooltipVisible);
  };

  return (
    <Container>
      {insuranceBenefits.map((benefit, index) => (
        <BenefitContainer
          key={index}
          onPress={() => handleBenefitPress(benefit)}
        >
          <BenefitText>{benefit.name}</BenefitText>
          <TouchableOpacity
            onPress={() => handleTooltipPress(benefit.description)}
          >
            <Text>?</Text>
          </TouchableOpacity>
        </BenefitContainer>
      ))}
      {tooltipVisible && (
        <Tooltip>
          <TooltipText>{tooltipText}</TooltipText>
        </Tooltip>
      )}
    </Container>
  );
};
