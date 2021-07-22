/*global $, _, getParameterValue*/
import { update } from "./data/bloc-1b.js";

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

var isSimple = /[?&]simple=simple/.test(window.location.search);
if (isSimple) {
  document.querySelector("html").classList.add("simple");
}

function twitterClick() {
  var u = window.location.href;
  var t = document.title + ": " + u;
  var url_share_twitter =
    "https://twitter.com/intent/tweet?original_referer=" +
    encodeURIComponent(window.location.href) +
    "&text=" +
    encodeURIComponent(t) +
    "&tw_p=tweetbutton";
  window.open(
    url_share_twitter,
    "_blank",
    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600"
  );
  return false;
}

function facebookClick() {
  var u = window.location.href;
  var t = document.title;

  var url =
    "https://www.facebook.com/sharer/sharer.php?u=" +
    encodeURIComponent(u) +
    "&t=" +
    encodeURIComponent(t);
  window.open(
    url + "?redirect=facebook",
    "sharer",
    "toolbar=0,status=0,width=626,height=436"
  );
  return false;
}

document.documentElement.lang = String.locale;
document.title = _("publication.title");
$("#chart-title").text(_("vis.title"));
$("#chart-drilldown").text(_("vis.subtitle"));
update(
  $("#chart-subtitle"),
  _("vis.unit").replace("[yyyy]", "[Date 2]"),
  "../../"
);

if (!isSimple) {
  $("#navbar-desktop").removeClass("d-none");
  $("#social-container-desktop")
    .append(
      $(
        '<span class="fa-layers fa-fw fa-2x" data-toggle="modal" data-target="#container-modal-embed"><i class="fas fa-circle"></i><i class="fas fa-code fa-inverse" data-fa-transform="shrink-7"></i></span>'
      ).attr("title", _("general.embed-icon"))
    )
    .append(
      $(
        '<span class="fa-layers fa-2x"><i class="fas fa-circle"></i><i class="fab fa-twitter fa-inverse" data-fa-transform="shrink-7 down-.25 right-.25"></i></span>'
      )
        .attr("title", _("general.twitter-icon"))
        .click(twitterClick)
    )
    .append(
      $(
        '<span class="fa-layers fa-fw fa-2x"><i class="fas fa-circle"></i><i class="fab fa-facebook-f fa-inverse" data-fa-transform="shrink-7"></i></span>'
      )
        .attr("title", _("general.facebook-icon"))
        .click(facebookClick)
    );
  $("#bookmark-container").removeClass("d-none");
  $("#bookmark-link")
    .html(_("vis.bookmark_link"))
    .append(
      $("<span> </span>"),
      $('<span class="infolink">')
        .text(_("vis.bookmark_link_key"))
        .on("click", function () {
          window.location =
            "https://www.euro-area-statistics.org/data?project=dp-inflation-c-1-2-2";
        })
    );
  $("#embed-header").prepend(document.createTextNode(_("general.embed-icon")));
  $("#embed").html(
    $('<pre class="pre-scrollable">').append(
      $("<code>").text(
        $("<div>")
          .append(
            $('<iframe width="800" height="800">').attr("src", window.location)
          )
          .html()
      )
    )
  );
}

if (isSimple) {
  $("#linechart")
    .empty()
    .append(
      $('<iframe frameborder="0">').attr(
        "src",
        "https://www.euro-area-statistics.org/dp-inflation-c-1-2-2?cr=oecd&lg=" +
          String.locale +
          "&page=0&embed=2&template=7"
      )
    );
} else {
  $("#linechart")
    .empty()
    .append(
      $('<iframe frameborder="0">').attr(
        "src",
        "https://www.euro-area-statistics.org/dp-inflation-c-1-2-2?cr=oecd&lg=" +
          String.locale +
          "&page=0&embed=3&template=7"
      )
    );
}
