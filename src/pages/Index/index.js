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
        <div className="large-6 columns homepageCover">
          <div className="title-menu">
            <div className="back-link">
              <a href="https://www.euro-area-statistics.org/?lg=en">
                <img width="280" height="69" src="images/logo_en.svg" />
              </a>
            </div>
            <Language />
            <div className="clear-fix"></div>
          </div>
          <div className="title">
            <a href="bloc-1.html">
              <h1 id="title1">
                {intl.formatMessage(messages.title).replace(/:.*/, ":")}
              </h1>
              <h1 id="title2">
                {intl.formatMessage(messages.title).replace(/^[^:]*:?/, "")}
              </h1>
            </a>
          </div>
          <div className="cover">
            <a href="bloc-1.html">
              <Trans attr="alt" message={messages.title}>
                <img src="images/cover.png" />
              </Trans>
            </a>
          </div>
        </div>

        <div className="large-6 columns panel textHome">
          <div className="text panel">
            <M>
              <FormattedHTMLMessage
                key="introtext"
                tagName="div"
                defaultMessage='<p>In a market economy, prices for goods and services can change at any time.</p>
<p>Inflation is the term used for these price changes. It is important to measure it reliably and to keep it stable because when people and businesses feel confident that they know what the rate of inflation will be in the future they can make long-term plans. As a result, the economy functions better.</p>
<p>This interactive publication looks at inflation from the statistical perspective. It explains in detail what inflation is and how it is measured by statistical offices at the national and European levels. It helps to clarify how inflation is a factor in central banks’ tasks and how the European Central Bank (ECB) monitors inflation. It also gives reasons why people may perceive inflation to be higher or lower than the officially measured inflation rate.</p>
<p>The publication presents easy to understand statistics on inflation using interactive visuals that allow inflation rates to be compared across countries. The visuals also offer a more in-depth view of the various goods and services included in the “shopping basket” that is used for officially calculating inflation.</p>
<p>You can also calculate your own inflation rate based on your own shopping basket of goods and services and compare it with the inflation rate for your country. Is your personal inflation rate above or below the average inflation rate for your country?</p>
<p>This publication is divided into the following four chapters, each with interactive visuals:</p>
<p><strong>1. What is inflation? </strong>This chapter explains the concept of inflation, why the inflation rate matters and how and why it differs across countries and over time.</p>
<p><strong>2. How is inflation measured? </strong>This chapter looks at the method used to calculate the inflation rate. It explains which goods and services are included in the calculation and describes the challenges encountered.</p>
<p><strong>3. Officially measured inflation and perceived inflation</strong>. <a name="_Hlk66207708"></a>This chapter explores how people perceive inflation, compares perceived inflation with officially measured inflation and explains the differences between the two.</p>
<p class="MsoNormal"><strong>4. Personal inflation calculator.</strong> In this chapter you can calculate your own inflation rate based on the goods and services that you buy and compare it with officially calculated inflation rates.</p>'
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
                    defaultMessage="Explore further"
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
      <script src="js/animsition.js"></script>
      <script src="js/index-onload.js"></script>
    </>
  );
};

export default Index;
