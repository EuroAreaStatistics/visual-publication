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
  t = document.tite;

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

  $("#chart-title").text(_("vis.indicator01_01_01.title"));
  $("#chart-subtitle").text(_("vis.indicator01_01_01.subtitle"));
  $("#chart-unit").text(_("vis.indicator01_01_01.unit").replace('[Date]', Object.keys(dataset.dimension.time.category.index).sort().reverse()[0]));
  drawChart("EA");
  $(".country-selection select").change(function () {
    drawChart($(this).val());
  });

  function addSpacer(i, a, mid) {
    a.splice(i, 0, mid.length ? mid[0] : {name: ''});
    return a;
  }

  function drawChart(geo) {
    var key = {
      geo: geo,
    };
    var color = "#004996";
    var data = [
      {
        name: _("vis.indicator01_01_01.title"),
        color: color,
        data: Object.keys(dataset.dimension.coicop.category.index)
          .sort()
          .map(function (k, ki) {
            key.coicop = k;
            var value = null;
            Object.keys(dataset.dimension.time.category.index).sort().reverse().slice(0, 1).forEach(function (t, i) {
              if (value === null) {
                key.time = t;
                value = window.getValue(dataset, key);
              }
            });
            var nameKey = "vis.product." + k + ".label";
            var name = nameKey.toLocaleString();
            return {
              name: name === nameKey ? null : name,
              color: k === '000000' ? '#cc7395' : null,
              y: value != null ? value / 10 : null,
              custom: { date: key.time },
            };
          })
          .filter(function (p) {
            return p.y != null && p.name != null;
          })
          .sort(function (a, b) {
            return a.y < b.y ? 1 : a.y > b.y ? -1 : 0;
          }),
      },
    ];
    data.push({
      name: _("vis.indicator01_01_02.title"),
      color: color,
      data: addSpacer(10, data[0].data
         .filter(function (d) { return d.color == null; })
         .filter(function (d, i, a) {
            return !(10 <= i && i < a.length - 10);
          }),
          data[0].data.filter(function (d) { return d.color != null; })
        ),
      visible: false,
      xAxis: 1,
    });

    Highcharts.setOptions({
      lang: {
        decimalPoint: "general.decimal_separator".toLocaleString(),
        thousandsSep: "general.thousands_separator".toLocaleString(),
      },
    });

    var chart = new Highcharts.Chart({
      chart: {
        renderTo: "linechart",
        type: "column",
      },
      legend: { labelFormatter: function ()  {
         return _("vis.indicator01_01_0"+(this.index+1)+".hoverTitle");
      } },
      title: {
        text: null,
      },
      xAxis: [ { type: "category", labels: { enabled: false }, tickPositions: [], visible: false },
               { type: "category", labels: { enabled: false }, tickPositions: [], visible: false } ],
      yAxis: { title: { enabled: false }, minPadding: 0, maxPadding: 0, endOnTick: false, startOnTick: false},
      tooltip: {
        headerFormat: '',
        pointFormat:
          '<span>{point.name}</span>: <b>{point.y:.1f}%</b><br/>',
      },
      plotOptions: {
        column: { minPointLength: 3 },
        series: {
            events: {
                show: function () {
                   $("#chart-title").text(_("vis.indicator01_01_0"+(this.index+1)+".title"));
                   $("#chart-subtitle").text(_("vis.indicator01_01_0"+(this.index+1)+".subtitle"));
                   $("#chart-unit").text(_("vis.indicator01_01_0"+(this.index+1)+".unit").replace('[Date]', Object.keys(dataset.dimension.time.category.index).sort().reverse()[0]));
               },
                legendItemClick: function () {
                    if (this.visible) return false;
                    chart.series[1-this.index].setVisible(false, false);
                    return true;
                }
            }
        }
       },
      series: data,
      credits: { enabled: false },
    });
  }
});
