import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl, FormattedHTMLMessage } from "react-intl";
import M from "../../components/AddMessageId";
import Trans from "../../components/Trans";
import Language from "../../components/Language";
import messages from "../../messages";

const Index = () => {
  const intl = useIntl();
  return (
    <>
      <Helmet>
        <title>{intl.formatMessage(messages.title)}</title>
        <link rel="stylesheet" href="css/jquery.webui-popover.css" />
      </Helmet>

      <div
        className="border animsition animsition-overlay"
        data-animsition-overlay="true"
      ></div>

      <div className="wide-section" style={{ visibility: "hidden" }}>
        <div className="large-6 columns homepageCover" data-equalizer-watch="">
          <div className="title-menu">
            <div className="back-link">
              <a href="https://www.euro-area-statistics.org/?lg=en">
                <img width="280" height="69" src="images/logo_en.svg" />
              </a>
            </div>
            <Language />
            <div className="clear-fix"></div>
          </div>
          <div className="title" data-equalizer="bar">
            <h1 id="title1">
              {intl.formatMessage(messages.title).replace(/:.*/, ":")}
            </h1>
            <h1 id="title2">
              {intl.formatMessage(messages.title).replace(/^[^:]*:?/, "")}
            </h1>
          </div>
          <div className="europe" data-equalizer="bar">
            <Trans attr="alt" message={messages.title}>
              <img src="images/cover.jpg" />
            </Trans>
          </div>
        </div>

        <div className="large-6 columns panel textHome">
          <div className="text panel" data-equalizer-watch="">
            <M>
              <FormattedHTMLMessage
                key="introtext"
                tagName="div"
                defaultMessage='<p>Money is an integral part of our daily lives: we earn it, we save it and we spend it.</p>
<p>Money is also at the heart of central banking. Central banks conduct monetary policy with the aim of maintaining price stability – this means preserving the value of money by keeping inflation under control.</p>
<p>Inflation is generally linked to increases in the amount of money in the economy. Reliable data on money and credit (lending) are therefore essential for monetary policy. Central banks collect and publish a broad range of monetary statistics, using them as one of the key elements to support their decision-making on monetary policy. In turn, monetary policy, affects the “price” of money in the economy – i.e. the interest rates on deposits and loans of households and companies.</p>
<p>This interactive publication looks at money and credit from the perspective of central bank statistics. It explains how the ECB defines money for statistical purposes, what types of bank financing are used by households and companies and what interest rates the ECB uses to influence the volume and price of money and credit in the euro area. It presents a readily comprehensible selection of statistics pertaining to these topics, at the euro area level and broken down to the national level, allowing for comparisons between countries. For more in-depth insights, there are links to the relevant sections of the ECB’s <a href="https://sdw.ecb.europa.eu/">Statistical Data Warehouse</a>.</p>
<p>The publication is divided into three chapters, each with interactive visualisations:</p>
<p><strong>1. Money:</strong> this chapter explains the different forms of money captured in the ECB’s statistics, as well as statistical measures of money, known as monetary aggregates.</p>
<p><strong>2. Credit:</strong> this chapter looks at different types of bank loan captured in the ECB’s statistics and examines in more detail developments in loans provided to euro area households and companies.</p>
<p><strong>3. Central bank interest rates:</strong> this chapter examines the key interest rates that the ECB uses as the core instrument to implement monetary policy and that, ultimately, affect the interest rates on deposits and loans of households and companies.</p>'
              />
            </M>

            <div className="text-center" style={{ marginTop: 20 }}>
              <a
                style={{ marginLeft: -10, marginRight: 10 }}
                href="bloc-1.html"
                className="button large"
              >
                <M>
                  <FormattedHTMLMessage
                    key="introbtn"
                    defaultMessage="Go to publication"
                  />
                </M>
              </a>
            </div>
          </div>
        </div>
      </div>
      <script src="js/vendor/jquery.js"></script>
      <script src="js/vendor/what-input.js"></script>
      <script src="js/vendor/foundation.min.js"></script>
      <script src="js/vendor/l10n.js"></script>
      <script src="l10n/localisations.js"></script>
      <script src="js/lang.js"></script>
      <script src="js/main.js"></script>
      <script src="js/app.js"></script>
      <script src="js/jquery.webui-popover.min.js"></script>
      <script src="js/animsition.min.js"></script>
      <script src="js/animsition-onload.js"></script>
      <script src="js/index-onload.js"></script>
    </>
  );
};

export default Index;
