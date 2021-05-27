import React from "react";
import Section from "../../templates/Section";
import RightColumn from "./RightColumn";
import messages from "./messages";
import bloc2b from "../Bloc2b/messages";
import bloc2 from "../Bloc2/messages";

const Bloc2a = () => {
  return (
    <>
      <Section
        intro={bloc2}
        messages={messages}
        script="js/bloc-2a.js"
        next={bloc2b}
        nextLink="bloc-2b.html"
      >
        <RightColumn />
      </Section>
    </>
  );
};

export default Bloc2a;
