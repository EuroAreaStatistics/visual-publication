import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";
import Menu from "../components/Menu";

const SectionFreeStyle = ({ messages, script, children }) => {
  const intl = useIntl();
  return (
    <>
      <Helmet>
        <html className="no-js" />
        <title>{intl.formatMessage(messages.title)}</title>
        <link rel="stylesheet" href="css/jquery.webui-popover.css" />
        <script src="js/vendor/jquery.js"></script>
      </Helmet>

      <div
        id="bloc"
        className="border animsition animsition-overlay"
        data-animsition-overlay="true"
      >
        <Menu />

        <div className="wide-section bloc">
          <div className="bloc-full">{children}</div>
        </div>
      </div>

      <script src="js/vendor/what-input.js"></script>
      <script src="js/vendor/l10n.js"></script>
      <script src="l10n/localisations.js"></script>
      <script src="js/lang.js"></script>
      <script src={script}></script>
      <script src="js/app.js"></script>
      <script src="js/modernizr.custom.js"></script>
      <script src="js/jquery.webui-popover.min.js"></script>
      <script src="js/animsition.js"></script>
      <script src="js/menu-onload.js"></script>
    </>
  );
};

export default SectionFreeStyle;
