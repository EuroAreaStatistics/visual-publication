import React from "react";
import { useIntl } from "react-intl";

const Trans = ({ attr, message, children }) => {
  const intl = useIntl();
  return React.cloneElement(children, {
    [attr]: intl.formatMessage(message),
    "data-trans-id": message.id,
    "data-trans-attr": attr,
  });
};

export default Trans;
