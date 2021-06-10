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
      <div className="iframeContainer">
        <Trans attr="title" message={messages.infographics1}>
          <iframe
            style={{ height: 800 }}
            id="linechart_simple1"
            src="vis/chapter21_1/index.html?simple=simple"
          ></iframe>
        </Trans>
      </div>

      <p className="compareCountry">
        <M>
          <FormattedHTMLMessage
            key="infographicsCaption1"
            defaultMessage="Click to enlarge and interact"
          />
        </M>
      </p>

      <div className="social-menu embed-menu text-center">
        <Embed className="vis1" />
        <Mail className="vis1" />
      </div>

      <div
        className="reveal large text-center"
        id="ModalIframe21_1"
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
      <div className="row" style={{ marginTop: 10 }}>
        <Trans attr="title" message={messages.infographics2}>
          <iframe
            style={{ height: 800 }}
            id="linechart_simple2"
            src="vis/chapter21_2/index.html?simple=simple"
          ></iframe>
        </Trans>

        <p className="compareCountry">
          <M>
            <FormattedHTMLMessage
              key="infographicsCaption2"
              defaultMessage="Click to enlarge and interact"
            />
          </M>
        </p>
        <div className="social-menu embed-menu text-center">
          <Embed className="vis2" />
          <Mail className="vis2" />
        </div>
      </div>

      <div
        className="reveal large text-center"
        id="ModalIframe21_2"
        data-reveal=""
      >
        <button
          className="close-button"
          data-close=""
          aria-label="Close modal"
          type="button"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default RightColumn;
