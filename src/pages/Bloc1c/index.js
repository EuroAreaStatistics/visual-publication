import React from "react";
import Section from "../../templates/Section";
import RightColumn from "./RightColumn";
import messages from "./messages";
import bloc1b from "../Bloc1b/messages";

const Bloc1c = () => {
  return (
    <>
      <Section
        messages={messages}
        script="js/bloc-1c.js"
        prev={bloc1b}
        prevLink="bloc-1b.html"
      >
        <RightColumn />
      </Section>
    </>
  );
};

export default Bloc1c;
