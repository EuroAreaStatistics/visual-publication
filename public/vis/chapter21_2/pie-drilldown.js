// based on https://www.highcharts.com/demo/pie-drilldown
// and https://www.highcharts.com/docs/chart-concepts/drilldown#async-setup

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

document.title = _("publication.title");

function formatState(state) {
  if (!state.id) {
    return state.text;
  }
  var baseUrl = "img/flags/";
  var $state = $(
    '<span class="flag"><img src="' +
      baseUrl +
      "/" +
      state.element.value +
      '.png"/> ' +
      state.text +
      "</span>"
  );
  return $state;
}

  var countries = [ "EA", "AT", "BE", "CY", "DE", "EE", "EL", "ES", "FI", "FR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PT", "SI", "SK" ].map(function (c) { return {id : c, name: ('general.country.'+c).toLocaleString() }; });
  countries = [countries[0]].concat(countries.slice(1).sort(function (a, b) { return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0); }));
  $('.country-selection select').empty().append(countries.map(function (x) { return $('<option>').attr('value', x.id).text(x.name); }));
$("select").select2({
  theme: "bootstrap4",
  templateResult: formatState,
  templateSelection: formatState,
});

var isSimple = /[?&]simple=simple/.test(window.location.search);
if (isSimple) {
  document.querySelector("html").classList.add("simple");
}

function twitterClick() {
  u = window.location.href;
  t = document.title + ": " + u;
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
  t = oducment.title;

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

window.fetchDataSet(0).then(function (dataset) {
  $("#loader").addClass("invisible");
  $("#global").removeClass("invisible container-fluid").addClass("visible");
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
      .html(_("vis.bookmark_link").replace(/\r\n+/g, '<br>').replace(/<br\/?>\s*<br\/?>/g, '<br>')+" ")
      .append(
        $('<span class="infolink">')
          .text(_("vis.bookmark_link_key"))
          .on("click", function () {
            window.downloadDataSet(0);
          })
      );
    $("#embed-header").prepend(document.createTextNode(_("general.embed-icon")));
    $("#embed").html(
      $('<pre class="pre-scrollable">').append(
        $("<code>").text(
          $("<div>")
            .append(
              $('<iframe width="800" height="800">').attr(
                "src",
                window.location
              )
            )
            .html()
        )
      )
    );
  }

  var latest = Object.keys(dataset.dimension.time.category.index).sort().reverse().slice(0, 2);

  $("#chart-title").text(_("vis.title"));
  $("#chart-drilldown").text(_("vis.subtitle"));
  $("#chart-subtitle").text(_("vis.unit").replace('[Date]', latest[0]));
  drawChart("EA");
  $(".country-selection select").change(function () {
    drawChart($(this).val());
  });

  function getLatestValue(dataset, key) {
    var v, i, k = $.extend({}, key);
    for (i=0; i<key.time.length; i++) {
      k.time = key.time[i];
      v = window.getValue(dataset, k);
      if (v !== null) return [v, k.time];
    }
    return [null, null];
  }

  function getSeries(dataset, key) {
    return Object.keys(dataset.dimension.coicop.category.index)
          .sort()
          .map(function (k) {
            key.coicop = k;
            var v = getLatestValue(dataset, key);
            var dimension = 6 - k.match(/0*$/)[0].length;
            return {
              name: _("vis.product." + k + ".label"),
              drilldown: dataset.extension.drilldown[k],
              y: (v[0] === null || v[0] === 0) ? null : v[0] / 10,
              custom: { date: v[1] === null ? null : ", "+v[1], dimension: dimension },
            };
          })
          .filter(function (d) { return d.y !== null })
          .sort(function (a, b) {
            return a.y < b.y ? 1 : a.y > b.y ? -1 : 0;
          });
  }

  function drawChart(geo) {
    function resizeTooltips() {
      this.tooltip.label.css({width: ''+this.plotWidth+'px'});
    }

    var key = {
      geo: geo,
      time: latest,
    };
    var data = [
      {
        name: _("vis.title"),
        colorByPoint: true,
        data: getSeries(dataset, key),
      },
    ];

    Highcharts.setOptions({
      lang: {
        decimalPoint: "general.decimal_separator".toLocaleString(),
        thousandsSep: "general.thousands_separator".toLocaleString(),
        drillUpText: "◁ "+_("vis.back"),
      },
    });

    var chart = new Highcharts.Chart({
      colors: [
        "#7cb5ec",
        "#434348",
        "#90ed7d",
        "#f7a35c",
        "#8085e9",
        "#f15c80",
        "#e4d354",
        "#2b908f",
        "#f45b5b",
        "#91e8e1",
        "#7c05ec",
        "#437348",
      ],
      chart: {
        renderTo: "linechart",
        style: { fontFamily: 'Open Sans' },
        type: "pie",
        events: {
          load: resizeTooltips,
          redraw: resizeTooltips,
          drillup: function (e) {
            if (this.drilldownLevels.length) {
              $("#chart-drilldown").text(this.drilldownLevels.slice(-1)[0].pointOptions.name);
            } else {
              $("#chart-drilldown").text(_("vis.subtitle"));
            }
            var id = 0;
            if (this.drilldownLevels.length) {
              id = this.drilldownLevels.slice(-1)[0].pointOptions.drilldown;
            }
            $('.infolink').off("click").on("click", function () { window.downloadDataSet(id); })
          },
          drilldown: function (e) {
            $("#chart-drilldown").text(e.point.name);
            var drilldown = e.point.drilldown;
            $('.infolink').off("click").on("click", function () { window.downloadDataSet(drilldown); })
            if (!e.seriesOptions) {
              var chart = this;
              $("#loader").removeClass("invisible");
              $("#global").hide();
              window.fetchDataSet(drilldown).then(function (dataset) {
                var key = {
                  geo: geo,
                  time: latest,
                };
                var series = {
                  name: e.point.name,
                  id: drilldown,
                  data: getSeries(dataset, key),
                };
                var dimension = series.data[0].custom.dimension;
                if (dimension >= 4) {
                  series.tooltip = { valueDecimals: 2 };
                }
                $("#loader").addClass("invisible");
                $("#global").show();
                chart.addSeriesAsDrilldown(e.point, series);
              });
            }
          },
        },
      },
      title: {
        text: null,
      },
      plotOptions: {
        pie: {
          dataLabels: {
            color: "#044aa3",
            enabled: !isSimple,
            useHTML: true,
            style: { width: 280, lineHeight: 1.3, whiteSpace: 'normal', fontSize: '10px' },
            formatter: function (label) {
              var tooltip = this.series.chart.tooltip;
              var pointLabel = $.extend({}, this);
              pointLabel.series = $.extend({}, pointLabel.series);
              pointLabel.series.tooltipOptions = $.extend({}, pointLabel.series.tooltipOptions);
              pointLabel.series.tooltipOptions.pointFormat = '{point.name}: {point.y:.2f}%';
              return tooltip.defaultFormatter.call(pointLabel, tooltip);
            },
          },
        },
      },

      tooltip: {
        style: {
          width: '200px',
          whiteSpace: 'normal',
        },
        valueDecimals: 1,
        headerFormat: '',
        pointFormat:
          '{point.name}: '+_('vis.tooltip').replace('[Value]','{point.y}')+'{point.custom.date}<br/>',
      },
      series: data,
      drilldown: {
        series: [],
        activeDataLabelStyle: { color: '#044aa3', textDecoration: 'none' },
      },
      credits: { enabled: false },
    });
  }
});
