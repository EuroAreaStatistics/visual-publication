import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";
import messages from "./messages";

const Header = () => {
  const intl = useIntl();
  return (
    <Helmet>
      <meta
        name="description"
        content={intl.formatMessage(messages.description)}
      />
      <meta name="keywords" content={intl.formatMessage(messages.keywords)} />
      <meta name="author" content={intl.formatMessage(messages.author)} />
    </Helmet>
  );
};

export default Header;
