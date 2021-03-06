window.configuration = {
    data: {
        url_dev: '//www.development.ec.europa.eu/dsws-wd/dsws/rest/data/v2.1/json/',
        // url_dev_serve: '//www.development.ec.europa.eu/eurostat/cache/infographs/circulareconomy/data/',
        // url_dev_serve: '//www.acceptance.ec.europa.eu/eurostat/cache/infographs/circulareconomy/data/',
        url_dev_serve: 'http://localhost:8080/data/',
        // url_dev_serve: '//ec.europa.eu/eurostat/cache/infographs/circulareconomy/data/',
        url_acc: '//www.acceptance.ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/',
        url_prod: '//ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/',
        url_local: 'http://localhost:8080/data/',
        lang: 'en',
        countriesEu: [
            'EU28', 'EA19'
        ],
        countriesEuAggregate: [
          'EA'
      ],              
        countriesOthers: [
"AT","BE","CY","DE","EE","ES","FI","FR","EL","IE","IT","LT","LU","LV","MT","NL","PT","SI","SK"
        ],
        countriesEfta: [
        ],
        simpleDefaultCountries: ['EA'],
        iconColorNotSelected: '#044AA3',
        iconColorSelected: '#CC7395',
        countryColors: {
          'EU28':	'#003399',
          'EU':	'#003399',
          'EA19':	'#F56426',
          'EA':	'#004996',
          'others': ['#069F73', '#CC79A7', '#5EB3E5',	'#D36027','#000000', '#0773B3', '#8214A0', '#0AB45A', '#00A0FA',
            '#AA0A3C', '#006E82', '#FA78FA', '#14D2DC', '#005AC8', '#FA7850', '#FA5D7D', '#A05FBE', '#55550B',
            '#46AA96', '#501937', '#959595', '#DE2D26', '#146964', '#C80F9B', '#005B78', '#636363', '#64AA2D',
            '#192D23', '#9C9CD2', '#5FB996', '#0A695A', '#7299AD'
          ] 
        }
    }
};
