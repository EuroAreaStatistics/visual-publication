/*global $, _, getParameterValue*/

import { update } from "./data/bloc-3a.js";

String.locale = window.defaultLanguage;
String.toLocaleString(window.availableLanguages);
const lang = getParameterValue("lang");
if (lang !== "" && lang !== "") {
  for (const value in window.availableLanguages) {
    if (value === lang) {
      String.locale = lang;
    }
  }
}

update($('[data-trans-id="pages.Bloc3a.text"]'), _("pages.Bloc3a.text"));

$("[data-trans-id]").each(function () {
  const trans = $(this).attr("data-trans-id");
  if (trans === "pages.Bloc3a.text") return;
  const attr = $(this).attr("data-trans-attr");
  if (attr) {
    $(this).attr(attr, _(trans));
  } else {
    $(this).html(_(trans));
  }
});

document.documentElement.lang = String.locale;
document.title = _("pages.Bloc3a.title");
$('meta[name="description"]').attr("content", _("description"));
$('meta[name="author"]').attr("content", _("author"));
$('meta[name="keywords"]').attr("content", _("keywords"));
