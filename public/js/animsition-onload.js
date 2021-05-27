$(document).ready(function () {
  $(".animsition-overlay")
    .animsition({
      inClass: "overlay-slide-in-left",
      outClass: "overlay-slide-out-left",
      overlay: true,
      overlayClass: "animsition-overlay-slide",
      overlayParentElement: "body",
    })
    .one("animsition.inStart", function () {
      $("body").removeClass("bg-init");
      $(this).find(".item").append('<h2 class="target">Callback: Start</h2>');
    })
    .one("animsition.inEnd", function () {
      $(".target", this).html("Callback: End");
    });
});
