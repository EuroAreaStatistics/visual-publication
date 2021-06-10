import React from "react";
import Section from "../../templates/Section";
import RightColumn from "./RightColumn";
import messages from "./messages";
import bloc3b from "../Bloc3b/messages";
import bloc3 from "../Bloc3/messages";

const Bloc3a = () => {
  return (
    <>
      <Section
        intro={bloc3}
        messages={messages}
        script="js/bloc-3a.js"
        next={bloc3b}
        nextLink="bloc-3b.html"
      >
        <RightColumn />
      </Section>
      <script src="js/bloc-3a-onload.js"></script>
    </>
  );
};

export default Bloc3a;
