import React from "react";
import { defineMessages } from "react-intl";
import Trans from "../Trans";

const messages = defineMessages({
  mail: "Email",
});

const Mail = ({ className = "", iframe }) => (
  <Trans attr="title" message={messages.mail}>
    <button className={`mail ${className}`} data-iframe={iframe}>
      <span aria-hidden="true" className="fa fa-envelope"></span>
    </button>
  </Trans>
);

export default Mail;
