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
      <h3>
        <M>
          <FormattedHTMLMessage {...messages.infographics1} />
        </M>
      </h3>

      <div className="iframeContainer">
        <Trans attr="title" message={messages.infographics1}>
          <iframe
            style={{ height: 800 }}
            data-height="0.5"
            id="Iframe1"
            src="vis/chapter21_1/index.html?simple=simple"
          ></iframe>
        </Trans>
      </div>

      <p className="compareCountry">
        <M>
          <FormattedHTMLMessage
            key="infographicsCaption1"
            defaultMessage="Click to enlarge and compare countries"
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

      <div className="row" style={{ marginTop: 10 }}>
        <h3>
          <M>
            <FormattedHTMLMessage {...messages.infographics2} />
          </M>
        </h3>

        <Trans attr="alt" message={messages.infographics2}>
          <iframe
            style={{ height: 800 }}
            data-height="0.5"
            id="Iframe2"
            src="vis/chapter21_2/index.html?simple=simple"
          ></iframe>
        </Trans>

        <p className="compareCountry">
          <M>
            <FormattedHTMLMessage
              key="infographicsCaption2"
              defaultMessage="Click to enlarge and compare countries"
            />
          </M>
        </p>
        <div className="social-menu embed-menu text-center">
          <Embed iframe="Iframe2" />
          <Mail iframe="Iframe2" />
        </div>
      </div>

      <div
        className="reveal large text-center"
        data-iframe="Iframe2"
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

      <div className="row" style={{ marginTop: 10 }}>
        <h3>
          <M>
            <FormattedHTMLMessage {...messages.infographics4} />
          </M>
        </h3>

        <Trans attr="alt" message={messages.infographics4}>
          <iframe
            style={{ height: 800 }}
            data-height="0.44"
            id="Iframe3"
            src="vis/chapter21_3/index.html?simple=simple"
            data-body-click=""
          ></iframe>
        </Trans>

        <p className="compareCountry">
          <M>
            <FormattedHTMLMessage
              key="infographicsCaption4"
              defaultMessage="Click to enlarge and compare countries"
            />
          </M>
        </p>
        <div className="social-menu embed-menu text-center">
          <Embed iframe="Iframe3" />
          <Mail iframe="Iframe3" />
        </div>
      </div>

      <div
        className="reveal large text-center"
        data-iframe="Iframe3"
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
