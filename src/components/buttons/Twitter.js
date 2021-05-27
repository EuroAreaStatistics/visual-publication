import React from "react";
import { defineMessages } from "react-intl";
import Trans from "../Trans";

const messages = defineMessages({
  twitter: "Twitter",
});

const Twitter = () => (
  <Trans attr="title" message={messages.twitter}>
    <button className="twitter">
      <span aria-hidden="true" className="fa fa-twitter"></span>
    </button>
  </Trans>
);

export default Twitter;
