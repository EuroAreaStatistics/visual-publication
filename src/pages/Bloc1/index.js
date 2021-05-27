import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl, FormattedHTMLMessage } from "react-intl";
import M from "../../components/AddMessageId";
import Trans from "../../components/Trans";
import Menu from "../../components/Menu";
import texts from "../../messages";
import messages from "./messages";
import bloc1a from "../Bloc1a/messages";
import bloc1b from "../Bloc1b/messages";
import bloc1c from "../Bloc1c/messages";

const Bloc1 = () => {
  const intl = useIntl();
  return (
    <>
      <Helmet>
        <html className="no-js" />
        <title>{intl.formatMessage(messages.title)}</title>
        <script src="js/vendor/jquery.js" />
      </Helmet>

      <div
        id="bloc"
        className="border animsition animsition-overlay"
        data-animsition-overlay="true"
      >
        <Menu />

        <div className="wide-section bloc">
          <div className="bloc-intro">
            <div className="row containeur" data-equalizer="">
              <div className="row medium-12 introBlock">
                <div className="medium-6 columns">
                  <a className="bloc-link" href="bloc-1a.html"></a>
                  <div className="panel" data-equalizer="">
                    <div className="row">
                      <div className="medium-8 columns">
                        <h3>
                          <M>
                            <FormattedHTMLMessage {...messages.title} />
                          </M>
                        </h3>
                        <p>
                          <M>
                            <FormattedHTMLMessage {...messages.summary} />
                          </M>
                        </p>
                      </div>
                      <div className="medium-4 text-center columns">
                        <Trans attr="alt" message={messages.title}>
                          <img src="images/bloc-1/main.svg" />
                        </Trans>
                      </div>
                      <div className="medium-12 columns">
                        <a href="bloc-1a.html" className="button round small">
                          <M>
                            <FormattedHTMLMessage {...texts.explore} />
                          </M>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="medium-6 columns">
                  <a className="bloc-link" href="bloc-1a.html"></a>
                  <div className="panel" data-equalizer="">
                    <div className="row">
                      <div className="medium-8 columns">
                        <h3>
                          <M>
                            <FormattedHTMLMessage {...bloc1a.title} />
                          </M>
                        </h3>
                        <p>
                          <M>
                            <FormattedHTMLMessage {...bloc1a.summary} />
                          </M>
                        </p>
                      </div>
                      <div className="medium-4 text-center columns">
                        <Trans attr="alt" message={bloc1a.title}>
                          <img src="images/bloc-1/section-1.svg" />
                        </Trans>
                      </div>
                      <div className="medium-12 columns">
                        <a href="bloc-1a.html" className="button round small">
                          <M>
                            <FormattedHTMLMessage {...texts.explore} />
                          </M>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row medium-12 introBlock">
                <div className="medium-6 columns">
                  <a className="bloc-link" href="bloc-1b.html"></a>
                  <div className="panel" data-equalizer="">
                    <div className="row">
                      <div className="medium-8 columns">
                        <h3>
                          <M>
                            <FormattedHTMLMessage {...bloc1b.title} />
                          </M>
                        </h3>
                        <p>
                          <M>
                            <FormattedHTMLMessage {...bloc1b.summary} />
                          </M>
                        </p>
                      </div>
                      <div className="medium-4 text-center columns">
                        <Trans attr="alt" message={bloc1b.title}>
                          <img src="images/bloc-1/section-2.svg" />
                        </Trans>
                      </div>
                      <div className="medium-12 columns">
                        <a href="bloc-1b.html" className="button round small">
                          <M>
                            <FormattedHTMLMessage {...texts.explore} />
                          </M>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="medium-6 columns">
                  <a className="bloc-link" href="bloc-1c.html"></a>
                  <div className="panel" data-equalizer="">
                    <div className="row">
                      <div className="medium-8 columns">
                        <h3>
                          <M>
                            <FormattedHTMLMessage {...bloc1c.title} />
                          </M>
                        </h3>
                        <p>
                          <M>
                            <FormattedHTMLMessage {...bloc1c.summary} />
                          </M>
                        </p>
                      </div>
                      <div className="medium-4 text-center  columns">
                        <Trans attr="alt" message={bloc1c.title}>
                          <img src="images/bloc-1/section-3.svg" />
                        </Trans>
                      </div>
                      <div className="medium-12 columns">
                        <a href="bloc-1c.html" className="button round small">
                          <M>
                            <FormattedHTMLMessage {...texts.explore} />
                          </M>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="js/vendor/what-input.js"></script>
      <script src="js/vendor/l10n.js"></script>
      <script src="l10n/localisations.js"></script>
      <script src="js/lang.js"></script>
      <script src="js/bloc-1.js"></script>
      <script src="js/app.js"></script>
      <script src="js/modernizr.custom.js"></script>
      <script src="js/jquery.webui-popover.min.js"></script>
      <script src="js/animsition.min.js"></script>
      <script src="js/animsition-onload.js"></script>
    </>
  );
};

export default Bloc1;
