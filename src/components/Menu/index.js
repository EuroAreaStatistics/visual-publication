import React from "react";
import { defineMessages, FormattedHTMLMessage } from "react-intl";
import M from "../AddMessageId";
import Info from "../Info";
import Trans from "../Trans";
import Language from "../Language";
import bloc1 from "../../pages/Bloc1/messages";
import bloc1a from "../../pages/Bloc1a/messages";
import bloc1b from "../../pages/Bloc1b/messages";
import bloc1c from "../../pages/Bloc1c/messages";
import bloc2 from "../../pages/Bloc2/messages";
import bloc2a from "../../pages/Bloc2a/messages";
import bloc2b from "../../pages/Bloc2b/messages";
import bloc3 from "../../pages/Bloc3/messages";
import bloc3a from "../../pages/Bloc3a/messages";
import bloc3b from "../../pages/Bloc3b/messages";
import bloc4a from "../../pages/Bloc4a/messages";

const messages = defineMessages({
  home: "Home",
  info: "Information",
});

const Menu = () => {
  return (
    <div id="menu">
      <div className="wide-menu-color left hide-for-small-only hide-for-medium-only">
        <Language />
        <div className="shade-0">
          <ul>
            <li className="menuHome">
              <Trans attr="title" message={messages.home}>
                <a
                  href="index.html"
                  data-tooltip=""
                  aria-haspopup="true"
                  className="has-tip right"
                  data-disable-hover="false"
                  tabIndex="4"
                ></a>
              </Trans>
            </li>

            <li className="menuInfo">
              <Trans attr="title" message={messages.info}>
                <a
                  data-open="infoModal"
                  data-tooltip=""
                  aria-haspopup="true"
                  className="has-tip right"
                  data-disable-hover="false"
                  tabIndex="4"
                ></a>
              </Trans>
            </li>
            <div
              className="reveal large"
              style={{ fontSize: 14, overflowY: "auto" }}
              id="infoModal"
              data-reveal=""
            >
              <div className="medium-12 medium-centered columns">
                <Info />
              </div>
              <button
                className="close-button"
                data-close=""
                aria-label="Close modal"
                type="button"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </ul>
        </div>

        <div className="shade-1">
          <span className="chapterTitle">
            <M>
              <FormattedHTMLMessage key="chapter1" defaultMessage="Chapter 1" />
            </M>
          </span>
          <Trans attr="title" message={bloc1.title}>
            <a
              href="bloc-1.html"
              data-tooltip=""
              aria-haspopup="true"
              className="has-tip left"
              data-disable-hover="false"
              tabIndex="4"
            ></a>
          </Trans>

          <ul className="submenu submenu1">
            <li className="submenuBtn1">
              <Trans attr="title" message={bloc1a.title}>
                <a
                  href="bloc-1a.html"
                  data-tooltip=""
                  aria-haspopup="true"
                  className="has-tip right"
                  data-disable-hover="false"
                  tabIndex="4"
                ></a>
              </Trans>
            </li>
            <li className="submenuBtn2">
              <Trans attr="title" message={bloc1b.title}>
                <a
                  href="bloc-1b.html"
                  data-tooltip=""
                  aria-haspopup="true"
                  className="has-tip right"
                  data-disable-hover="false"
                  tabIndex="4"
                ></a>
              </Trans>
            </li>
            <li className="submenuBtn3">
              <Trans attr="title" message={bloc1c.title}>
                <a
                  href="bloc-1c.html"
                  data-tooltip=""
                  aria-haspopup="true"
                  className="has-tip right"
                  data-disable-hover="false"
                  tabIndex="4"
                ></a>
              </Trans>
            </li>
          </ul>
        </div>

        <div className="shade-2">
          <span className="chapterTitle">
            <M>
              <FormattedHTMLMessage key="chapter2" defaultMessage="Chapter 2" />
            </M>
          </span>

          <Trans attr="title" message={bloc2.title}>
            <a
              href="bloc-2.html"
              data-tooltip=""
              aria-haspopup="true"
              className="has-tip left"
              data-disable-hover="false"
              tabIndex="4"
            ></a>
          </Trans>
          <ul className="submenu submenu2">
            <li className="submenuBtn4">
              <Trans attr="title" message={bloc2a.title}>
                <a
                  href="bloc-2a.html"
                  data-tooltip=""
                  aria-haspopup="true"
                  className="has-tip right"
                  data-disable-hover="false"
                  tabIndex="4"
                ></a>
              </Trans>
            </li>
            <li className="submenuBtn5">
              <Trans attr="title" message={bloc2b.title}>
                <a
                  href="bloc-2b.html"
                  data-tooltip=""
                  aria-haspopup="true"
                  className="has-tip right"
                  data-disable-hover="false"
                  tabIndex="4"
                ></a>
              </Trans>
            </li>
          </ul>
        </div>

        <div className="shade-3">
          <span className="chapterTitle">
            <M>
              <FormattedHTMLMessage key="chapter3" defaultMessage="Chapter 3" />
            </M>
          </span>

          <Trans attr="title" message={bloc3.title}>
            <a
              href="bloc-3.html"
              data-tooltip=""
              aria-haspopup="true"
              className="has-tip left"
              data-disable-hover="false"
              tabIndex="4"
            ></a>
          </Trans>
          <ul className="submenu submenu3">
            <li className="submenuBtn6">
              <Trans attr="title" message={bloc3a.title}>
                <a
                  href="bloc-3a.html"
                  data-tooltip=""
                  aria-haspopup="true"
                  className="has-tip right"
                  data-disable-hover="false"
                  tabIndex="4"
                ></a>
              </Trans>
            </li>
            <li className="submenuBtn7">
              <Trans attr="title" message={bloc3b.title}>
                <a
                  href="bloc-3b.html"
                  data-tooltip=""
                  aria-haspopup="true"
                  className="has-tip right"
                  data-disable-hover="false"
                  tabIndex="4"
                ></a>
              </Trans>
            </li>
          </ul>
        </div>

        <div className="shade-4">
          <span className="chapterTitle">
            <M>
              <FormattedHTMLMessage key="chapter4" defaultMessage="Chapter 4" />
            </M>
          </span>

          <Trans attr="title" message={bloc4a.title}>
            <a
              href="bloc-4a.html"
              data-tooltip=""
              aria-haspopup="true"
              className="has-tip left"
              data-disable-hover="false"
              tabIndex="4"
            ></a>
          </Trans>
        </div>
      </div>

      <div className="mobile-menu hide-for-large">
        <nav
          className="title-bar"
          data-responsive-toggle="mobile-menu"
          data-hide-for="large"
        >
          <button className="menu-icon" type="button" data-toggle=""></button>
          <div className="title-bar-title">
            <M>
              <FormattedHTMLMessage key="menu" defaultMessage="Menu" />
            </M>
          </div>
          <Language />
        </nav>

        <nav className="top-bar" id="mobile-menu">
          <ul className="vertical menu full-width" data-accordion-menu="">
            <li className="has-submenu">
              <a href="index.html">
                <span aria-hidden="true" className="fa fa-home"></span>
                <M>
                  <FormattedHTMLMessage {...messages.home} />
                </M>
              </a>
            </li>
            <li className="has-submenu">
              <a href="bloc-1.html">
                <span style={{ paddingLeft: 16 }} />
                <M>
                  <FormattedHTMLMessage {...bloc1.title} />
                </M>
              </a>
              <ul className="submenu menu vertical nested" data-submenu="">
                <li>
                  <a href="bloc-1a.html">
                    <M>
                      <FormattedHTMLMessage {...bloc1a.title} />
                    </M>
                  </a>
                </li>
                <li>
                  <a href="bloc-1b.html">
                    <M>
                      <FormattedHTMLMessage {...bloc1b.title} />
                    </M>
                  </a>
                </li>
                <li>
                  <a href="bloc-1c.html">
                    <M>
                      <FormattedHTMLMessage {...bloc1c.title} />
                    </M>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="bloc-2.html">
                <span style={{ paddingLeft: 16 }} />
                <M>
                  <FormattedHTMLMessage {...bloc2.title} />
                </M>
              </a>
              <ul className="submenu menu vertical nested " data-submenu="">
                <li>
                  <a href="bloc-2a.html">
                    <M>
                      <FormattedHTMLMessage {...bloc2a.title} />
                    </M>
                  </a>
                </li>
                <li>
                  <a href="bloc-2b.html">
                    <M>
                      <FormattedHTMLMessage {...bloc2b.title} />
                    </M>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="bloc-3.html">
                <span style={{ paddingLeft: 16 }} />
                <M>
                  <FormattedHTMLMessage {...bloc3.title} />
                </M>
              </a>
              <ul className="submenu menu vertical nested " data-submenu="">
                <li>
                  <a href="bloc-3a.html">
                    <M>
                      <FormattedHTMLMessage {...bloc3a.title} />
                    </M>
                  </a>
                </li>
                <li>
                  <a href="bloc-3b.html">
                    <M>
                      <FormattedHTMLMessage {...bloc3b.title} />
                    </M>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="bloc-4a.html">
                <span style={{ paddingLeft: 16 }} />
                <M>
                  <FormattedHTMLMessage {...bloc4a.title} />
                </M>
              </a>
            </li>

            <li className="has-submenu">
              <a data-open="infoModal2">
                <span aria-hidden="true" className="fa fa-info-circle"></span>
                <M>
                  <FormattedHTMLMessage {...messages.info} />
                </M>
              </a>
            </li>

            <div
              className="reveal large"
              id="infoModal2"
              data-reveal=""
              style={{ overflowY: "auto" }}
            >
              <div className="small-8 small-centered columns">
                <Info />
              </div>
              <button
                className="close-button"
                data-close=""
                aria-label="Close modal"
                type="button"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </ul>
        </nav>
      </div>

      <script src="js/vendor/foundation.min.js"></script>
      <script src="js/vendor/l10n.js"></script>
      <script src="l10n/localisations.js"></script>
      <script src="js/lang.js"></script>
      <script src="js/menu.js"></script>
    </div>
  );
};

export default Menu;
