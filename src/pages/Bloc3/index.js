import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl, FormattedHTMLMessage } from "react-intl";
import M from "../../components/AddMessageId";
import Trans from "../../components/Trans";
import Menu from "../../components/Menu";
import texts from "../../messages";
import messages from "./messages";
import bloc3a from "../Bloc3a/messages";
import bloc3b from "../Bloc3b/messages";

const Bloc3 = () => {
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
                  <a className="bloc-link" href="bloc-3a.html"></a>
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
                          <img src="images/icones/chapter-3.svg" width="100" />
                        </Trans>
                      </div>
                      <div className="medium-12 columns">
                        <a href="bloc-3a.html" className="button round small">
                          <M>
                            <FormattedHTMLMessage {...texts.explore} />
                          </M>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="medium-6 columns">
                  <a className="bloc-link" href="bloc-3a.html"></a>
                  <div className="panel" data-equalizer="">
                    <div className="row">
                      <div className="medium-8 columns">
                        <h3>
                          <M>
                            <FormattedHTMLMessage {...bloc3a.title} />
                          </M>
                        </h3>
                        <p>
                          <M>
                            <FormattedHTMLMessage {...bloc3a.summary} />
                          </M>
                        </p>
                      </div>
                      <div className="medium-4 text-center columns">
                        <Trans attr="alt" message={bloc3a.title}>
                          <img src="images/icones/chapter-3-1.svg" />
                        </Trans>
                      </div>
                      <div className="medium-12 columns">
                        <a href="bloc-3a.html" className="button round small">
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
                  <a className="bloc-link" href="bloc-3b.html"></a>
                  <div className="panel" data-equalizer="">
                    <div className="row">
                      <div className="medium-8 columns">
                        <h3>
                          <M>
                            <FormattedHTMLMessage {...bloc3b.title} />
                          </M>
                        </h3>
                        <p>
                          <M>
                            <FormattedHTMLMessage {...bloc3b.summary} />
                          </M>
                        </p>
                      </div>
                      <div className="medium-4 text-center columns">
                        <Trans attr="alt" message={bloc3b.title}>
                          <img src="images/icones/chapter-3-2.svg" />
                        </Trans>
                      </div>
                      <div className="medium-12 columns">
                        <a href="bloc-3b.html" className="button round small">
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
      <script src="js/app.js"></script>
      <script src="js/vendor/what-input.js"></script>
      <script src="js/vendor/l10n.js"></script>
      <script src="l10n/localisations.js"></script>
      <script src="js/lang.js"></script>
      <script src="js/bloc-3.js"></script>
      <script src="js/modernizr.custom.js"></script>
      <script src="js/jquery.webui-popover.min.js"></script>
      <script src="js/animsition.js"></script>
      <script src="js/menu-onload.js"></script>
    </>
  );
};

export default Bloc3;
