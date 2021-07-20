// based on https://www.highcharts.com/demo/combo-dual-axes

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
document.getElementById('chart_heading').innerHTML = _("vis.indicator01_01_01.title");
document.getElementById('chart_title').innerHTML = _("vis.indicator01_01_01.subtitle");
document.getElementById('chart_subtitle').innerHTML = _("vis.indicator01_01_01.unit");

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
  t = document.title;

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

window.fetchDataSet(0).then(function (dataset0) {
  window.fetchDataSet(1).then(function (dataset1) {
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
        .text(_("vis.bookmark_link")+" ")
        .append(
          $('<span class="infolink">')
            .text(_("vis.bookmark_link_key"))
            .on("click", function () {
              window.downloadDataSets();
            })
        );
      $("#embed-header").prepend(
        document.createTextNode(_("general.embed-icon"))
      );
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

    Highcharts.setOptions({
      lang: {
        decimalPoint: "general.decimal_separator".toLocaleString(),
        thousandsSep: "general.thousands_separator".toLocaleString(),
      },
    });

    var quarters = ["01", "04", "07", "10"];

    var categories = Object.keys(dataset0.dimension.time.category.index).map(
      function (k) {
        var m = k.split("-Q");
        return m[0] + "-" + quarters[parseInt(m[1]) - 1];
      }
    );

    categories = categories
      .concat(
        Object.keys(dataset1.dimension.time.category.index).filter(function (
          k
        ) {
          return categories.indexOf(k) == -1;
        })
      )
      .sort();

    var key = {
      geo: "EA",
    };

    // dataset0 SUR.Q.I8.N.ECFIN.CNS051_50.TT Perceived inflation - median
    var colorLeft = "#cc7395";
    var dataLeft = categories.map(function (t) {
      var m = t.split("-");
      var q = quarters.indexOf(m[1]);
      if (q !== -1) {
        key.time = m[0] + "-Q" + (q + 1).toString();
        return getValue(dataset0, key);
      } else {
        return null;
      }
    });

    // dataset1 ICP.M.I8.N.000000.4.ANR HICP inflation - annual change rate
    var colorRight = "#004996";
    var dataRight = categories.map(function (t) {
      key.time = t;
      return getValue(dataset1, key);
    });

    var chart = new Highcharts.Chart({
      chart: {
        renderTo: "linechart",
      },
      credits: { enabled: false },
      title: {
        text: null,
      },
      xAxis: [
        {
          categories: categories,
          tickPositions: categories.map(function (c, i) { return i; }).filter(function (i) { return /-01$/.test(categories[i]); }),
          labels: { formatter: function () { return this.value.split('-')[0]; } },
          tickmarkPlacement: "on",
        },
      ],
      yAxis: { title: { text: null } },
      tooltip: {
        shared: true,
        valueDecimals: 1,
        valueSuffix: '%',
      },
      series: [
        {
          name: _("vis.indicator01_01_01.hoverTitle"),
          type: "line",
          marker: { enabled: false },
          data: dataLeft,
          color: colorLeft,
          lineWidth: 4,
          connectNulls: true,
        },
        {
          name: _("vis.indicator01_01_02.hoverTitle"),
          type: "line",
          marker: { enabled: false },
          data: dataRight,
          color: colorRight,
          lineWidth: 4,
        },
      ],
    });
  });
});
