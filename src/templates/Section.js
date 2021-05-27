import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl, FormattedHTMLMessage } from "react-intl";
import M from "../components/AddMessageId";
import Menu from "../components/Menu";
import Facebook from "../components/buttons/Facebook";
import Mail from "../components/buttons/Mail";
import Twitter from "../components/buttons/Twitter";

const Section = ({
  messages,
  intro,
  script,
  prev,
  prevLink,
  next,
  nextLink,
  children,
}) => {
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
          <div className="bloc-full">
            <div className="row containeur" data-equalizer="">
              <div
                className="medium-6 columns bloc-left"
                data-equalizer-watch=""
              >
                <div className="panel">
                  <div className="row">
                    {intro && (
                      <>
                        <h3>
                          <M>
                            <FormattedHTMLMessage {...intro.title} />
                          </M>
                        </h3>
                        <M>
                          <FormattedHTMLMessage tagName="div" {...intro.text} />
                        </M>
                      </>
                    )}
                    <h3>
                      <M>
                        <FormattedHTMLMessage {...messages.title} />
                      </M>
                    </h3>
                    <M>
                      <FormattedHTMLMessage tagName="div" {...messages.text} />
                    </M>
                  </div>

                  <div className="social-menu">
                    <Facebook />
                    <Twitter />
                    <Mail className="bloc" />
                  </div>
                  <div className="pagination">
                    <div className="small-6 columns text-left">
                      {prev && (
                        <a href={prevLink}>
                          <i className="fa fa-arrow-left"></i>
                          <M>
                            <FormattedHTMLMessage {...prev.title} />
                          </M>
                        </a>
                      )}
                    </div>

                    <div className="small-6 columns text-right">
                      {next && (
                        <a href={nextLink}>
                          <M>
                            <FormattedHTMLMessage {...next.title} />
                          </M>
                          <i className="fa fa-arrow-right"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="medium-6 columns bloc-right"
                data-equalizer-watch=""
              >
                {children}
              </div>
            </div>
          </div>
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
      <script src="js/animsition.min.js"></script>
      <script src="js/animsition-onload.js"></script>
      <script src="js/section-onload.js"></script>
    </>
  );
};

export default Section;
