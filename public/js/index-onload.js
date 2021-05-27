$(document).foundation();

$(document).ready(function () {
  $(".animsition-overlay")
    .animsition({
      inClass: "overlay-slide-in-right",
      outClass: "overlay-slide-out-right",
      overlay: true,
      overlayClass: "animsition-overlay-slide",
      overlayParentElement: "body",
    })
    .one("animsition.inStart", function () {
      $(".wide-section").css("visibility", "visible");
      $("body").removeClass("bg-init");

      $(this).find(".item").append('<h2 class="target">Callback: Start</h2>');
    })
    .one("animsition.inEnd", function () {
      $(".target", this).html("Callback: End");
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
});
