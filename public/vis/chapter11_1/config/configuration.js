window.configuration = {
  data: {
    url_dev: '//www.development.ec.europa.eu/dsws-wd/dsws/rest/data/v2.1/json/',
    // url_dev_serve: '//www.development.ec.europa.eu/eurostat/cache/infographs/circulareconomy/data/',
    // url_dev_serve: '//www.acceptance.ec.europa.eu/eurostat/cache/infographs/circulareconomy/data/',
    url_dev_serve: 'http://localhost:8081/data/',
    // url_dev_serve: '//ec.europa.eu/eurostat/cache/infographs/circulareconomy/data/',
    url_acc: '//www.acceptance.ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/',
    url_prod: '//ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/',
    url_local: 'http://localhost:8080/data/',
    lang: 'en',
    currentEU: 'EU28',
    currentEA: 'EA19',
    countriesEu: [
      'EU28', 'EA19'
    ],
    countriesEuAggregate: [
      'EU', 'EA'
    ],
    countriesOthers: [
    ],
    countriesEfta: [
      'NO', 'CH', 'IS'
    ],
    iconColorNotSelected: '#044AA3',
    iconColorSelected: '#D36027',
    codes: {
      CP: ['ALLD', 'ALLC'],
      ALLD: ["10P1", "10P2", "20P1", "20P2", "50P0", "50P1", "50P2"],
      ALLC: ["10N1", "10N2", "10P0", "20N1", "20N2", "20P0", "50N1", "50N2"],
    },
    colorways: {
      ALLD: '#069F73',
      ALLC: '#5EB3E5',
    },
    information_link_1: 'http://ec.europa.eu/eurostat/statistics-explained/index.php?title=Glossary:COICOP_HICP',
    information_link_2: 'http://ec.europa.eu/eurostat/statistics-explained/index.php?title=Household_consumption_by_purpose'
  }
}
