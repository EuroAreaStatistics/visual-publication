/*global $, _, getParameterValue*/

import { update } from "./data/bloc-1a.js";

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

document.documentElement.lang = String.locale;
document.title = _("pages.Bloc1a.title");
$('meta[name="description"]').attr("content", _("description"));
$('meta[name="author"]').attr("content", _("author"));
$('meta[name="keywords"]').attr("content", _("keywords"));

$(() => {
  update($('[data-trans-id="pages.Bloc1a.text"]'), _("pages.Bloc1a.text"));

  $("[data-trans-id]").each(function () {
    const trans = $(this).attr("data-trans-id");
    if (trans === "pages.Bloc1a.text") return;
    const attr = $(this).attr("data-trans-attr");
    if (attr) {
      $(this).attr(attr, _(trans));
    } else {
      $(this).html(_(trans));
    }
  });
});
