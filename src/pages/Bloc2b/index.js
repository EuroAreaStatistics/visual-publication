import React from "react";
import Section from "../../templates/Section";
import RightColumn from "./RightColumn";
import messages from "./messages";
import bloc2a from "../Bloc2a/messages";

const Bloc2b = () => {
  return (
    <>
      <Section
        messages={messages}
        script="js/bloc-2b.js"
        prev={bloc2a}
        prevLink="bloc-2a.html"
      >
        <RightColumn />
      </Section>
      <script src="js/bloc-2b-onload.js"></script>
    </>
  );
};

export default Bloc2b;
