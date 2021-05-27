import React from "react";
import { defineMessages } from "react-intl";
import Trans from "../Trans";

const messages = defineMessages({
  embed: "Embed",
});

const Embed = ({ className = "", iframe }) => (
  <Trans attr="title" message={messages.embed}>
    <button className={`embed ${className}`} data-iframe={iframe}>
      <span aria-hidden="true" className="fa fa-code"></span>
    </button>
  </Trans>
);

export default Embed;
