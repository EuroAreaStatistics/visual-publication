import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";
import Section from "../../templates/Section";
import RightColumn from "./RightColumn";
import messages from "./messages";

const Bloc3a = () => {
  const intl = useIntl();
  return (
    <>
      <Section messages={messages} script="js/bloc-3a.js">
        <RightColumn />
      </Section>
      <Helmet>
        <title>{intl.formatMessage(messages.title)}</title>
      </Helmet>
    </>
  );
};

export default Bloc3a;
