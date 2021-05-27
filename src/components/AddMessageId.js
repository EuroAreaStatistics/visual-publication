import React from "react";

const AddMessageId = ({ children }) => {
  const tagName =
    children.props.tagName == null ? "span" : children.props.tagName;
  return React.cloneElement(children, null, (t) =>
    React.createElement(tagName, {
      "data-trans-id": children.props.id,
      dangerouslySetInnerHTML: { __html: t },
    })
  );
};

export default AddMessageId;
