import React from "react";
import Main from "../../common/Main";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { SectionWrapper } from "./styled.js";

export default () => (
  <Main>
    <Header title="O autorze" />
    <Section
      title="Kamil Justyński"
      body={
        <>
          <SectionWrapper>
            Miło mi, że wpadłeś dowiedzieć się czegos o mnie! Jestem
            początkującym programistą <strong>front-end developer.</strong>
            <br />
            Kodowanie stało się moim hobby po napisaniu pierwszych paru linijek
            i zobaczeniu efektów. Codziennie spędzam po 2-3h nauki oraz podjąłem
            studia w kierunku Informatyki w biznesie na specjalizacji front-end
            developer. Moje zaparcie dążenia do celu jest ogromne- stąd równiez
            zapadła decyzja, aby jak najszybciej znaleźć swoją pierwszą pracę i
            doskonalić się wsród bardziej wyszkolonych specjalistów!
          </SectionWrapper>
        </>
      }
    />
  </Main>
);
