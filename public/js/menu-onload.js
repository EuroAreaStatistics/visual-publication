$(document).ready(function () {
  $(".menu.language").each(function () {
    $("a", this)
      .first()
      .replaceWith($('a[href="?lang=' + String.locale + '"]', this));
  });

  $(function () {
    $("a").attr("href", function (i, h) {
      if (h === undefined || /#|\/\/|[?&]lang=/.test(h)) return h;
      return (
        h +
        (h.indexOf("?") !== -1
          ? "&lang=" + String.locale
          : "?lang=" + String.locale)
      );
    });
  });

  $(function () {
    $("img").each(function (elem) {
      var h = $(this).attr("src");

      if (h.indexOf("_en") !== -1) {
        var position = h.indexOf("_en");

        var l10nImage = h.slice(0, position + 1);

        var loadImageSrc =
          l10nImage + String.locale + "." + h.slice(position + 4);

        $(this).on("error", function () {
          $(this).attr("src", h);
        });

        $(this).attr("src", loadImageSrc);
      }
    });
  });
});

$(function () {
  $(document).foundation();
});

$(function () {
  var loc = window.location.href; // returns the full URL
  if (/bloc-1/.test(loc)) {
    $(".shade-1").addClass("active");
  }

  if (/bloc-2/.test(loc)) {
    $(".shade-2").addClass("active");
  }

  if (/bloc-3/.test(loc)) {
    $(".shade-3").addClass("active");
  }

  if (/bloc-4/.test(loc)) {
    $(".shade-4").addClass("active");
  }

  if (/bloc-1a/.test(loc)) {
    $(".shade-1").addClass("active");
    $(".submenu1").addClass("active");
    $(".submenuBtn1").addClass("active");
  }
  if (/bloc-1b/.test(loc)) {
    $(".shade-1").addClass("active");
    $(".submenu1").addClass("active");
    $(".submenuBtn2").addClass("active");
  }
  if (/bloc-1c/.test(loc)) {
    $(".shade-1").addClass("active");
    $(".submenu1").addClass("active");
    $(".submenuBtn3").addClass("active");
  }

  if (/bloc-2a/.test(loc)) {
    $(".shade-2").addClass("active");
    $(".submenu2").addClass("active");
    $(".submenuBtn4").addClass("active");
  }
  if (/bloc-2b/.test(loc)) {
    $(".shade-2").addClass("active");
    $(".submenu2").addClass("active");
    $(".submenuBtn5").addClass("active");
  }

  if (/bloc-3a/.test(loc)) {
    $(".shade-3").addClass("active");
    $(".submenu3").addClass("active");
    $(".submenuBtn6").addClass("active");
  }
  if (/bloc-3b/.test(loc)) {
    $(".shade-3").addClass("active");
    $(".submenu3").addClass("active");
    $(".submenuBtn7").addClass("active");
  }

  if (/bloc-4a/.test(loc)) {
    $(".shade-4").addClass("active");
    $(".submenu4").addClass("active");
  }
});
