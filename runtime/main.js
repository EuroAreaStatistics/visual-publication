/*global $, _, getParameterValue*/

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

$("[data-trans-id]").each(function () {
  const trans = $(this).attr("data-trans-id");
  const attr = $(this).attr("data-trans-attr");
  if (attr) {
    $(this).attr(attr, _(trans));
  } else {
    $(this).html(_(trans));
  }
});

$(".back-link img").attr("src", `images/logo_${String.locale}.svg`);
$(".back-link a").attr("href", (i, t) =>
  t.replace(/([?&]lg=)[^&]*/, `$1${String.locale}`)
);

$("#title1").text(_("title").replace(/:.*/, ":"));
$("#title2").text(_("title").replace(/^[^:]*:?/, ""));

document.documentElement.lang = String.locale;
document.title = _("title");
$('meta[name="description"]').attr("content", _("description"));
$('meta[name="author"]').attr("content", _("author"));
$('meta[name="keywords"]').attr("content", _("keywords"));

$(".menu.language").each(function () {
  $("a", this)
    .first()
    .replaceWith($(`a[href="?lang=${String.locale}"]`, this));
});
