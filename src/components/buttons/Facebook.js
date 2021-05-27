import React from "react";
import { defineMessages } from "react-intl";
import Trans from "../Trans";

const messages = defineMessages({
  facebook: "Facebook",
});

const Facebook = () => (
  <Trans attr="title" message={messages.facebook}>
    <button className="facebook">
      <span aria-hidden="true" className="fa fa-facebook-square"></span>
    </button>
  </Trans>
);

export default Facebook;
