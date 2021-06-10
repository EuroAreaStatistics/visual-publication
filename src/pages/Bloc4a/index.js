import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";
import SectionFreeStyle from "../../templates/SectionFreeStyle";
import Trans from "../../components/Trans";
import messages from "./messages";

const Bloc4a = () => {
  const intl = useIntl();
  return (
    <>
      <SectionFreeStyle messages={messages} script="js/bloc-4a.js">
        <noscript>
          <Trans attr="title" message={messages.infographics1}>
            <iframe style={{ marginTop: 0 }} src="vis/chapter4_1/"></iframe>
          </Trans>
        </noscript>
      </SectionFreeStyle>
      <Helmet>
        <title>{intl.formatMessage(messages.title)}</title>
      </Helmet>
      <script src="js/bloc-4a-onload.js"></script>
    </>
  );
};

export default Bloc4a;
