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
              id="linechart_simple1"
              src="vis/chapter13_1/index.html?simple=simple"
            ></iframe>
          </Trans>
        </div>

        <p className="compareCountry">
          <M>
            <FormattedHTMLMessage
              key="infographicsCaption1"
              defaultMessage="Click to interact and compare countries"
            />
          </M>
        </p>

        <div className="social-menu embed-menu text-center">
          <Embed className="vis1" />
          <Mail className="vis1" />
        </div>

        <div
          className="reveal large text-center"
          id="ModalIframe1"
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
