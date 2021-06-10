$(document).ready(function () {
  var availableHeight = window.innerHeight * 0.8;
  $("#linechart_simple1").css("height", availableHeight);
  $("#linechart_simple2").css("height", availableHeight);

  function open(nr) {
    var url = "vis/chapter12_" + nr + "/index.html" + "?lang=" + String.locale;
    if (window.innerWidth > 699) {
      var iframe = document.createElement("iframe");
      iframe.src = url;
      var modal = document.getElementById("ModalIframe" + nr);

      if (modal.lastChild.nodeName === "IFRAME") {
        modal.removeChild(modal.lastChild);
      }

      modal.appendChild(iframe);
      $("#ModalIframe" + nr).foundation("open");
    } else {
      window.open(url, "_blank");
    }
  }

  $("#linechart_simple1")
    .parent()
    .next()
    .css("cursor", "pointer")
    .click(function () {
      open(1);
    });
  $("#linechart_simple2")
    .next()
    .css("cursor", "pointer")
    .click(function () {
      open(2);
    });

  var loc = window.location.href;
  var dir = loc.substring(0, loc.lastIndexOf("/"));

  $(".embed").webuiPopover({
    title: _("components.buttons.embed"),
    content: function () {
      var className = $(this).attr("class");
      className = className
        .replace("embed", "")
        .replace("share", "")
        .replace(/ /g, "");
      var frameUrl, embed;
      if (className === "vis1") {
        frameUrl =
          dir + "/vis/chapter12_1/index.html" + "?lang=" + String.locale;
        embed =
          '<textarea style="height: 140px;width:270px;" readonly="">&lt;iframe src="' +
          frameUrl +
          '" height="768" width="1030"&gt;&lt;/iframe&gt;</textarea>';
      } else if (className === "vis2") {
        frameUrl =
          dir + "/vis/chapter12_2/index.html" + "?lang=" + String.locale;
        embed =
          '<textarea style="height: 140px;width:270px;" readonly="">&lt;iframe src="' +
          frameUrl +
          '" height="768" width="1030"&gt;&lt;/iframe&gt;</textarea>';
      }
      return embed;
    },
    closeable: true,
    placement: "top",
  });

  $(".mail").click(function () {
    var className = $(this).attr("class");
    className = className.replace("mail", "").replace(/ /g, "");
    var url, pageDesc;
    if (className === "vis1") {
      url = "vis/chapter12_1/index.html" + "?lang=" + String.locale;
      pageDesc = _("pages.Bloc1b.infographics1");
    } else if (className === "vis2") {
      url = "vis/chapter12_2/index.html" + "?lang=" + String.locale;
      pageDesc = _("pages.Bloc1b.infographics2");
    } else {
      url = window.location.href;
      pageDesc = _("pages.Bloc1b.title");
    }
    var link = document.createElement("a");
    link.href = url;
    var subject = _("title") + " - " + _("pages.Bloc1b.title");
    var body = pageDesc + "\r\n\r\n" + link.href;
    var mailTo =
      "mailto:?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
    window.location = mailTo;
  });
});
