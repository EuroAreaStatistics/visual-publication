import React from "react";
import Section from "../../templates/Section";
import RightColumn from "./RightColumn";
import messages from "./messages";
import bloc3a from "../Bloc3a/messages";

const Bloc3b = () => {
  return (
    <>
      <Section
        messages={messages}
        script="js/bloc-3b.js"
        prev={bloc3a}
        prevLink="bloc-3a.html"
      >
        <RightColumn />
      </Section>
      <script src="js/bloc-3b-onload.js"></script>
    </>
  );
};

export default Bloc3b;
