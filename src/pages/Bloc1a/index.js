import React from "react";
import Section from "../../templates/Section";
import RightColumn from "./RightColumn";
import messages from "./messages";
import bloc1b from "../Bloc1b/messages";
import bloc1 from "../Bloc1/messages";

const Bloc1a = () => {
  return (
    <>
      <Section
        intro={bloc1}
        messages={messages}
        script="js/bloc-1a.js"
        next={bloc1b}
        nextLink="bloc-1b.html"
      >
        <RightColumn />
      </Section>
      <script src="js/bloc-1a-onload.js"></script>
    </>
  );
};

export default Bloc1a;
