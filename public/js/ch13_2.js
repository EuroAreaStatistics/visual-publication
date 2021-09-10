!function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(n){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(t){e(n,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}var r,a=function(e,t){var n=["lastNObservations","startPeriod"].filter((function(t){return t in e}));return t?t+"/"+e.code.replace(".","/")+encodeURIComponent((n.length?"?":"")+n.map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")):"https://sdw-wsrest.ecb.europa.eu/service/data/"+e.code.replace(".","/")+(n.length?"?":"")+n.map((function(t){return"".concat(t,"=").concat(encodeURIComponent(e[t]))})).join("&")},s=function(e){return function(t){var n=function(e){return function(t){var n=a(e),r=e.description,s=t.structure.links[0].href.split("/")[6],i=t.structure.dimensions.observation[0].values,o=t.structure.dimensions.series,c=t.structure.attributes.series,u="";c.forEach((function(e){!e.values.length||"TITLE_COMPL"!==e.id&&"COMMENT_TS"!==e.id||(u=e.values[0].name)})),u&&(o.forEach((function(e){e.values.length>1&&(u=u.replace(e.values[0].name,""))})),u=(u=(u=u.replace(/- *[,-]/g,"-")).replace(/, *,/g,",")).replace(/^ *, */g,""));var l=["Statistical Data Warehouse code"].concat(o.filter((function(e){return e.values.length>1})).map((function(e){return e.name}))).concat(i.map((function(e){return e.name}))),d=[l],f=function(e){var n=t.dataSets[0].series[e],r=e.split(":"),a=[],c=[s];o.forEach((function(e,t){var n=e.values[r[t]];c.push(n.id),e.values.length>1&&a.push(n.name)})),a.unshift(c.join(".")),i.forEach((function(e,t){var r=n.observations[t];a.push(void 0!==r?r[0]:null)})),d.push(a)};for(var p in t.dataSets[0].series)f(p);var v=[[r],[u],["URL: ".concat(n)],[]],h=XLSX.utils.aoa_to_sheet(v.concat(d));return h["!merges"]=[{s:{r:0,c:0},e:{r:0,c:10}},{s:{r:1,c:0},e:{r:1,c:10}},{s:{r:2,c:0},e:{r:2,c:10}}],h["!cols"]=l.map((function(e,t){var n=e.length;return d.forEach((function(e){e[t]&&e[t].length>n&&(n=e[t].length)})),{width:n+1}})),h}}(e)(t),r=XLSX.utils.book_new();XLSX.utils.book_append_sheet(r,n),XLSX.writeFile(r,"exportedData.xlsx")}},i={},o=[{code:"BSI.M.U2.Y.V.L10+L21+L22+L23+L24A+L30+L40+M10+M20+M30.X+A+L+D.I.U2.2300.Z01.A",lastNObservations:120,description:"Balance sheet statistics - monetary aggregates (annual growth rates) "},{code:"BSI.M.U2.Y.V.L10+L21+L22+L23+L24A+L30+L40+M10+M20+M30.X+A+L+D.1.U2.2300.Z01.E",lastNObservations:120,description:"Balance sheet statistics - monetary aggregates (outstandings, volumes, denominated in euro)"},{code:"BSI.M.U2.Y.V.L10+L21+L22+L23+L24A+L30+L40+M10+M20+M30.X+A+L+D.4.U2.2300.Z01.E",lastNObservations:120,description:"Balance sheet statistics - monetary aggregates (transactions, denominated in euro)"}],c=(r="../../data",function(e){var t=a(e,r);return t in i||(i[t]=new Promise((function(e,n){var r=new XMLHttpRequest;r.addEventListener("load",(function(){this.status>=200&&this.status<400?e(JSON.parse(this.responseText)):n(this.status+" "+this.statusText)})),r.open("GET",t),r.setRequestHeader("Accept","application/json"),r.send()}))),i[t]});o.map((function(e){return a(e)}));window.fetchDataSet=function(e){return c(o[e]).then((t=e,function(e){var r={BS_ITEM:"geo",TIME_PERIOD:"time"},a={},s=["MATURITY_ORIG"],i=e.structure.dimensions.series.concat(e.structure.dimensions.observation).map((function(e){var t=s.indexOf(e.id)<0?e.values:[e.values[0]];return n(n({},e),{},{values:t})})),o=i.map((function(e){return e.values.length}));o.shift();var c=i.filter((function(e){return 1!=e.values.length})).map((function(e){var t=e.id in r?r[e.id]:e.id,s="geo"===t?e.values.map((function(e){var t=e.id in a?a[e.id]:e.id;return n(n({},e),{},{id:t})})):e.values;return n(n({},e),{},{id:t,values:s})})),u={};Object.keys(e.dataSets[0].series).forEach((function(n){var r=e.dataSets[0].series[n],a=0;n.split(":").forEach((function(e,t){s.indexOf(i[t].id)<0&&(a+=parseInt(e)),a*=o[t]})),Object.keys(r.observations).forEach((function(e){var n=r.observations[e][0];t?(n/=1e3,n=parseFloat(n.toFixed(0))):n=parseFloat(n.toFixed(2));var s=a+parseInt(e);s in u&&console.error("duplicate value in position: ".concat(s)),u[s]=n}))}));var l={};return c.forEach((function(e){l[e.id]={category:{index:{}}},e.values.forEach((function(t,n){l[e.id].category.index[t.id]=n}))})),{class:"dataset",value:u,dimension:l,id:c.map((function(e){return e.id})),size:c.map((function(e){return e.values.length})),extension:{datasetId:"nama_10_gdp"}}}));var t},window.downloadDataSet=function(e){return c(o[e]).then(s(o[e]))},/[?&]simple=simple/.test(window.location.search)&&document.querySelector("html").classList.add("simple")}();