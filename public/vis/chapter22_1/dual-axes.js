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

window.fetchDataSet(0).then(function (dataset) {
  $("#loader").addClass("invisible");
  $("#global").removeClass("invisible container-fluid").addClass("visible");
  document.getElementById('chart_subtitle').innerHTML = document.getElementById('chart_subtitle').innerHTML.replace(/2015(-01)?(&nbsp;| )=(&nbsp;| )100/, dataset.extension.index.replace(' = ', '\u00a0=\u00a0'));
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

  Highcharts.setOptions({
    lang: {
      decimalPoint: "general.decimal_separator".toLocaleString(),
      thousandsSep: "general.thousands_separator".toLocaleString(),
    },
  });

  var categories = Object.keys(dataset.dimension.time.category.index).sort();

  drawChart("EA");
  $(".country-selection select").change(function () {
    drawChart($(this).val());
  });

  function drawChart(geo) {
  var key = {
    geo: geo,
  };

  // dataset[0] ICP.M.?.N.000000.4.ANR Inflation growth rates
  var colorLeft = "#cc7395";
  key.ICP_SUFFIX = 'ANR';
  var dataLeft = categories.map(function (t) {
    key.time = t;
    return getValue(dataset, key);
  });

 // dataset[1] ICP.M.?.N.000000.4.INX Inflation index
  key.ICP_SUFFIX = 'INX';
  var colorRight = '#004996';
  var dataRight = categories.map(function (t) {
    key.time = t;
    return getValue(dataset, key);
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
        crosshair: true,
        tickPositions: categories.map(function (c, i) { return i; }).filter(function (i) { return /-01$/.test(categories[i]); }),
        labels: { formatter: function () { return this.value.split('-')[0]; } },
      },
    ],
    yAxis: [
      {
        // left yAxis
        title: {
          text: null,
        },
      },
      {
        // right yAxis
        title: {
          text: null,
        },
        opposite: true,
      },
    ],
    tooltip: {
      shared: true,
    },
    series: [
      {
        name: _("vis.indicator01_01_01.hoverTitle"),
        type: "column",
        data: dataLeft,
        tooltip: { valueSuffix: '%' },
        color: colorLeft,
      },
      {
        name: _("vis.indicator01_01_02.hoverTitle"),
        type: "line",
        marker: {enabled : false},
        data: dataRight,
        color: colorRight,
        tooltip: { valueDecimals: 0 },
        lineWidth: 2,
        yAxis: 1,
      },
    ],
  });
}
});
