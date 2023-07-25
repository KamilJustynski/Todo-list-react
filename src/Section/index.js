import React from "react";
import { SectionContainer, SectionBox, SectionHeader } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionContainer>
    <SectionBox>
      <SectionHeader>{title}</SectionHeader>
      {extraHeaderContent}
    </SectionBox>
    {body}
  </SectionContainer>
);

export default Section;
