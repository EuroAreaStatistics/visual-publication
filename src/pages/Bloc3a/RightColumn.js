import React from "react";
import { FormattedHTMLMessage } from "react-intl";
import M from "../../components/AddMessageId";
import Trans from "../../components/Trans";
import Embed from "../../components/buttons/Embed";
import Mail from "../../components/buttons/Mail";
import messages from "./messages";

const RightColumn = () => {
  return (
    <div className="panel">
      <div className="row">
        <div className="iframeContainer">
          <Trans attr="title" message={messages.infographics1}>
            <iframe
              style={{ height: 800 }}
              id="Iframe1"
              data-height="0.44"
              src="vis/chapter31_1/index.html?simple=simple"
            ></iframe>
          </Trans>
        </div>

        <p className="compareCountry">
          <M>
            <FormattedHTMLMessage
              key="infographicsCaption1"
              defaultMessage="Click to enlarge"
            />
          </M>
        </p>

        <div className="social-menu embed-menu text-center">
          <Embed iframe="Iframe1" />
          <Mail iframe="Iframe1" />
        </div>

        <div
          className="reveal large text-center"
          data-iframe="Iframe1"
          data-reveal=""
        >
          <button
            className="close-button"
            data-close=""
            aria-label="Close modal"
            type="button"
          >
            <span aria-hidden="true" data-reset-on-close="">
              &times;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
