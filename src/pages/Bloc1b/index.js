import React from "react";
import Section from "../../templates/Section";
import RightColumn from "./RightColumn";
import messages from "./messages";
import bloc1a from "../Bloc1a/messages";
import bloc1c from "../Bloc1c/messages";

const Bloc1b = () => {
  return (
    <>
      <Section
        messages={messages}
        script="js/bloc-1b.js"
        prev={bloc1a}
        prevLink="bloc-1a.html"
        next={bloc1c}
        nextLink="bloc-1c.html"
      >
        <RightColumn />
      </Section>
      <script src="js/bloc-1b-onload.js"></script>
    </>
  );
};

export default Bloc1b;
