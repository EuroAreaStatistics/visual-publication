$(document).ready(function () {
  $("[data-height]").css("height", function () {
    return window.innerHeight * $(this).attr("data-height");
  });

  function langUrl(url) {
    url = url
      .replace(/([?&])simple=simple&/g, "$1")
      .replace(/([?&])simple=simple$/g, "");
    return (
      url + (url.indexOf("?") !== -1 ? "&" : "?") + "lang=" + String.locale
    );
  }

  function open(url, modal, indicator) {
    url = langUrl(url);
    if (indicator != null) {
      url += (url.indexOf("?") !== -1 ? "&" : "?") + "indicator=" + indicator;
    }
    if (window.innerWidth > 699) {
      var iframe = document.createElement("iframe");
      iframe.src = url;

      if (modal.lastChild.nodeName === "IFRAME") {
        modal.removeChild(modal.lastChild);
      }

      modal.appendChild(iframe);
      $(modal).foundation("open");
    } else {
      window.open(url, "_blank");
    }
  }

  $("div.reveal[data-iframe]").each(function () {
    var modal = this;
    var iframe = $(document.getElementById(modal.dataset.iframe));
    function onClick() {
      open(iframe.attr("src"), modal, iframe[0].contentWindow.categorySelected);
    }
    iframe
      .closest(".row, .panel")
      .children(".compareCountry")
      .children("span")
      .css("cursor", "pointer")
      .click(onClick);
    if (iframe.attr("data-body-click") != null) {
      iframe.on("load", function () {
        $(this).contents().find("body").on("click", onClick);
      });
    }
  });

  $(".embed").webuiPopover({
    title: _("components.buttons.embed"),
    content: function () {
      var iframe = this.dataset.iframe;
      var url = langUrl(document.getElementById(iframe).src);
      var link = document.createElement("a");
      link.href = url;
      return (
        '<textarea style="height: 140px;width:270px;" readonly="">&lt;iframe src="' +
        link.href +
        '" height="768" width="1030"&gt;&lt;/iframe&gt;</textarea>'
      );
    },
    closeable: true,
    placement: "top",
  });

  $(".mail").click(function () {
    var url, pageDesc;
    var id = this.dataset.iframe;
    if (id != null) {
      var iframe = document.getElementById(id);
      var url = langUrl(iframe.src);
      pageDesc = _(iframe.dataset.transId);
    } else {
      url = window.location.href;
      pageDesc = document.title;
    }
    var link = document.createElement("a");
    link.href = url;
    var subject = _("title") + " - " + document.title;
    var body = pageDesc + "\r\n\r\n" + link.href;
    var mailTo =
      "mailto:?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
    window.location = mailTo;
  });
});
