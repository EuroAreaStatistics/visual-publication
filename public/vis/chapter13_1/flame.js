// based on https://www.highcharts.com/demo/flame

String.locale = window.defaultLanguage;
String.toLocaleString(window.availableLanguages);

var value;
var lang = getParameterValue("lang");
if (lang !== "" && lang !== "") {
  for (value in window.availableLanguages) {
    if (value === lang) {
      String.locale = lang;
    }
  }
}


document.title = _("document.title");

var isSimple = /[?&]simple=simple/.test(window.location.search);
if (isSimple) {
  document.querySelector("html").classList.add("simple");
}

function twitterClick() {
  u = window.location.href;
  t = _("twitter-text") + " " + u;
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
  title = "";
  text = "";
  imageUrl = "";

  u = window.location.href;
  t = _("title");

  var url =
    "https://www.facebook.com/sharer/sharer.php?u=" +
    encodeURIComponent(u) +
    "&t=" +
    encodeURIComponent(t);
  var popup = window.open(
    url + "?redirect=facebook",
    "sharer",
    "toolbar=0,status=0,width=626,height=436"
  );
}

window.fetchDataSet(0).then(function(dataset) {
  $("#loader").addClass("invisible");
  $("#global")
    .removeClass("invisible container-fluid")
    .addClass("visible");
  if (!isSimple) {
    $("#navbar-desktop").removeClass("d-none");
    $("#social-container-desktop")
      .append(
        $(
          '<span class="fa-layers fa-fw fa-2x" data-toggle="modal" data-target="#container-modal-embed"><i class="fas fa-circle"></i><i class="fas fa-code fa-inverse" data-fa-transform="shrink-7"></i></span>'
        ).attr("title", _("embed-icon"))
      )
      .append(
        $(
          '<span class="fa-layers fa-2x"><i class="fas fa-circle"></i><i class="fab fa-twitter fa-inverse" data-fa-transform="shrink-7 down-.25 right-.25"></i></span>'
        )
          .attr("title", _("twitter-icon"))
          .click(twitterClick)
      )
      .append(
        $(
          '<span class="fa-layers fa-fw fa-2x"><i class="fas fa-circle"></i><i class="fab fa-facebook-f fa-inverse" data-fa-transform="shrink-7"></i></span>'
        )
          .attr("title", _("facebook-icon"))
          .click(facebookClick)
      );
    $("#bookmark-container").removeClass("d-none");
    $("#bookmark-link")
      .text(_("bookmark_link"))
      .append(
        $('<span class="infolink">')
          .text(_("bookmark_link_key"))
	  .on('click', function () {
             window.downloadDataSet(0);
	  })
      );
    $("#embed-header").prepend(document.createTextNode(_("embed_instruction")));
    $("#embed").html(
      $('<pre class="pre-scrollable">').append(
        $("<code>").text(
          $("<div>")
            .append(
              $('<iframe width="100%" height="800">').attr(
                "src",
                window.location
              )
            )
            .html()
        )
      )
    );
  }

  var colors = ["#003399", "#CC7395", "#069F73"],
    data = [];

  var v, low;
  low = 0;
  v = dataset.value[dataset.dimension.geo.category.index["M30"]];
  data.push({
    name: _("M30"),
    color: colors[0],
    x: -2,
    value: v,
    low: low,
    high: low + v
  });

  low = 0;
  v = dataset.value[dataset.dimension.geo.category.index["M20"]];
  data.push({
    name: _("M20"),
    color: colors[1],
    x: -3,
    value: v,
    low: low,
    high: low + v
  });
  low += v;
  v = dataset.value[dataset.dimension.geo.category.index["L30"]];
  data.push({
    name: _("L30"),
    color: colors[0],
    x: -3,
    value: v,
    low: low,
    high: low + v
  });
  low += v;
  v = dataset.value[dataset.dimension.geo.category.index["L24A"]];
  data.push({
    name: _("L24A"),
    color: colors[0],
    x: -3,
    value: v,
    low: low,
    high: low + v
  });
  low += v;
  v = dataset.value[dataset.dimension.geo.category.index["L40"]];
  data.push({
    name: _("L40"),
    color: colors[0],
    x: -3,
    value: v,
    low: low,
    high: low + v
  });

  low = 0;
  v = dataset.value[dataset.dimension.geo.category.index["M10"]];
  data.push({
    name: _("M10"),
    color: colors[2],
    x: -4,
    value: v,
    low: low,
    high: low + v
  });
  low += v;
  v = dataset.value[dataset.dimension.geo.category.index["L23"]];
  data.push({
    name: _("L23"),
    color: colors[1],
    x: -4,
    value: v,
    low: low,
    high: low + v
  });
  low += v;
  v = dataset.value[dataset.dimension.geo.category.index["L22"]];
  data.push({
    name: _("L22"),
    color: colors[1],
    x: -4,
    value: v,
    low: low,
    high: low + v
  });

  low = 0;
  v = dataset.value[dataset.dimension.geo.category.index["L21"]];
  data.push({
    name: _("L21"),
    color: colors[2],
    x: -5,
    value: v,
    low: low,
    high: low + v
  });
  low += v;
  v = dataset.value[dataset.dimension.geo.category.index["L10"]];
  data.push({
    name: _("L10"),
    color: colors[2],
    x: -5,
    value: v,
    low: low,
    high: low + v
  });
  low += v;

  data.sort(function(a, b) {
    if (a.x < b.x) return -1;
    if (a.x > b.x) return 1;
    if (a.low < b.low) return -1;
    if (a.low > b.low) return 1;
    return 0;
  });

  var inResize = 0;

  function resizeLabels(chart) {
    if (inResize) {
      inResize--;
      return;
    }
    chart.series[0].points.forEach(function(p) {
      p.update(
        {
          dataLabels: {
            enabled: p.shapeArgs.height > 25,
            style: {
              width: "" + (p.shapeArgs.height - 5) + "px"
            }
          }
        },
        false
      );
    });
    inResize++;
    chart.redraw();
  }

Highcharts.setOptions({
    lang: {
       decimalPoint: "decimal_separator".toLocaleString(),
       thousandsSep: "thousands_separator".toLocaleString(),
    }
});

  var chart = new Highcharts.Chart({
    chart: {
      renderTo: "linechart",
      inverted: true,
      events: {
        load: function(ev) {
          var chart = ev.target;
          setTimeout(function() {
            resizeLabels(chart);
          });
        },
        redraw: function(ev) {
          var chart = ev.target;
          setTimeout(function() {
            resizeLabels(chart);
          });
        }
      },
      resetZoomButton: {
        theme: {
          "dominant-baseline": "middle"
        }
      },
      style: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "1rem"
      }
    },
    credits: {
      enabled: false
    },
    title: {
      text: _("indicator01_01_01.title"),
      style: {
        color: "#044aa3",
        fontSize: isSimple ? "1.2rem" : "1.75rem",
        fontWeight: "bolder"
      }
    },
    subtitle: {
      text: _("indicator01_01_01.subTitle"),
      style: {
        color: "#044aa3",
        paddingTop: isSimple ? "5px" : "0",
        fontSize: isSimple ? "0.875rem" : "1.25rem"
      }
    },
    legend: {
      enabled: false
    },
    xAxis: [
      {
        visible: false
      },
      {
        visible: false,
        startOnTick: false,
        endOnTick: false,
        minPadding: 0,
        maxPadding: 0
      }
    ],
    yAxis: [
      {
        visible: false
      },
      {
        visible: false,
        min: 0,
        maxPadding: 0,
        startOnTick: false,
        endOnTick: false
      }
    ],
    series: [
      {
        type: "columnrange",
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          inside: true,
          align: "center",
          crop: true,
          overflow: "allow",
          padding: 0,
          color: "#fff",
          style: {
            textOutline: "none",
            fontSize: isSimple ? "1rem" : "1.5rem",
            fontWeight: "bold",
            textShadow: "none",
            textOverflow: "ellipsis",
            //                textOverflow: 'clip',
            width: "100%"
          }
        },
        point: {
          events: {
            click: function() {
              if (/[?&]simple=simple/.test(window.location.search)) return;
              var point = this,
                chart = point.series.chart,
                series = point.series,
                xAxis = series.xAxis,
                yAxis = series.yAxis;

              if (xAxis.max === point.x || xAxis.userMax === point.x) return;
              if (point.x === -5) {
                var points = series.data.filter(function(p) {
                  return p.x === point.x;
                });
                xAxis.setExtremes(xAxis.min, points[0].x, false);
                yAxis.setExtremes(
                  points.reduce(function(a, b) {
                    return Math.min(a, b.low);
                  }, Infinity),
                  points.reduce(function(a, b) {
                    return Math.max(a, b.high);
                  }, -Infinity),
                  false
                );
              } else if (point.low > 0) {
                var points = series.data.filter(function(p) {
                  return p.x === point.x && p.low > 0;
                });
                xAxis.setExtremes(xAxis.min, points[0].x, false);
                yAxis.setExtremes(
                  points.reduce(function(a, b) {
                    return Math.min(a, b.low);
                  }, Infinity),
                  points.reduce(function(a, b) {
                    return Math.max(a, b.high);
                  }, -Infinity),
                  false
                );
              } else {
                xAxis.setExtremes(xAxis.min, point.x, false);
                yAxis.setExtremes(point.low, point.high, false);
              }

             if (!chart.resetZoomButton) chart.showResetZoom();
              chart.redraw();
            }
          }
        },
        pointPadding: 0,
        groupPadding: 0,
        data: data,
        yAxis: 1,
        xAxis: 1
      }
    ],
    tooltip: {
      headerFormat: "",
      pointFormat: "<b>{point.name}</b>: <b>{point.value}</b>",
// Highcharts' pointFormatter ignores language settings and thousands separator
      pointFormatter: function (format) { return "<b>" + this.name + "</b>: <b>" + Highcharts.numberFormat(this.value, -1) + "</b>"; },
    }
  });

  /*
   */
});
