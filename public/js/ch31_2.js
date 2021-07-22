!function(){"use strict";function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function u(i){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?t(Object(a),!0).forEach(function(e){var t,n,r;t=i,r=a[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(a,e))})}return i}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(u){var t=u.dataSets[0].series,e=u.structure.attributes.observation,c=u.structure.dimensions.observation[0],l=e.map(function(e,t){return[t,e]}).filter(function(e){return"OBS_STATUS"===s(e,2)[1].id})[0],f=u.structure.dimensions.series,d={};Object.keys(t).forEach(function(o){var s=t[o];Object.keys(s.observations).forEach(function(e){var t,n,r=s.observations[e],i=null===r[0],a=(t=r,l?l[1].values[t[l[0]+1]]:{A:"Normal value"});i||-1===p.indexOf(a.id)?(!i&&v&&console.log(u.structure.links[0].href.split("/").slice(-2,-1).concat((n=o.split(":"),f.map(function(e,t){return e.values[n[t]]}).map(function(e){return e.id}))).join("."),"removed ".concat(a.id," (").concat(a.name,")"),c.values[e].name),delete s.observations[e]):d[e]=!0}),0===Object.keys(s.observations).length&&delete t[o]});for(var n=c.values,r=[],i=!1,a=0,o=0;a<n.length;a++)d[a]&&(r.push([a,o]),a!==o&&(i=!0),o++);return c.values=n.filter(function(e,t){return d[t]}),i&&Object.keys(t).forEach(function(e){var i=t[e],a={};r.forEach(function(e){var t=s(e,2),n=t[0],r=t[1];n in i.observations&&(a[r]=i.observations[n])}),i.observations=a}),u}function b(t,e){var n=["lastNObservations","startPeriod"].filter(function(e){return e in t});return e?e+"/"+t.code.replace(".","/")+encodeURIComponent((n.length?"?":"")+n.map(function(e){return"".concat(e,"=").concat(t[e])}).join("&")):"https://sdw-wsrest.ecb.europa.eu/service/data/"+t.code.replace(".","/")+(n.length?"?":"")+n.map(function(e){return"".concat(e,"=").concat(encodeURIComponent(t[e]))}).join("&")}function i(m){return function(t){function u(e){return!m.singleTimePeriod||e.name===i}var e=b(m),n=m.description,c=t.structure.links[0].href.split("/")[6],l=t.structure.dimensions.observation[0].values,f=t.structure.dimensions.series,r=t.structure.attributes.series,i=l.map(function(e){return e.name}).sort().reverse()[0],a="";r.forEach(function(e){!e.values.length||"TITLE_COMPL"!==e.id&&"COMMENT_TS"!==e.id||(a=e.values[0].name)}),a&&(f.forEach(function(e){1<e.values.length&&(a=a.replace(e.values[0].name,""))}),a=(a=(a=a.replace(/- *[,-]/g,"-")).replace(/, *,/g,",")).replace(/^ *, */g,"")),m.methodology&&(a=m.methodology);function o(e){var i=t.dataSets[0].series[e],r=e.split(":"),a=[],o=[c];f.forEach(function(e,t){var n=e.values[r[t]];o.push(n.id),1<e.values.length&&a.push(n.name)}),a.unshift(o.join("."));var s=!1;l.forEach(function(e,t){if(u(e)){var n=i.observations[t],r=void 0!==n?n[0]:null;null!==r&&(s=!0),a.push(r)}}),s&&d.push(a)}var s=["Statistical Data Warehouse code"].concat(f.filter(function(e){return 1<e.values.length}).map(function(e){return e.name})).concat(l.filter(u).map(function(e){return e.name})),d=[s];for(var v in t.dataSets[0].series)o(v);var p=[[n],[a],["URL: ".concat(e)],[]],h=XLSX.utils.aoa_to_sheet(p.concat(d));return h["!merges"]=[{s:{r:0,c:0},e:{r:0,c:10}},{s:{r:1,c:0},e:{r:1,c:10}},{s:{r:2,c:0},e:{r:2,c:10}}],h["!cols"]=s.map(function(e,t){var n=e.length;return d.forEach(function(e){e[t]&&e[t].length>n&&(n=e[t].length)}),{width:n+1}}),h}}var a,v="undefined"!=typeof window&&/debug/.test(window.location.hash),p=["A","P","U"],o={},c=[{code:"SUR.Q.I8.N.ECFIN.CNS051_MN.R1+R2+R3+R4",lastNObservations:2,description:"Business and consumer surveys - qualitative and quantitative inflation perceptions",methodology:"Annual percentage changes"},{code:"SUR.Q.I8.N.ECFIN.CNS051_MN.E1+E2+E3",lastNObservations:2,description:"Business and consumer surveys - qualitative and quantitative inflation perceptions",methodology:"Annual percentage changes"},{code:"SUR.Q.I8.N.ECFIN.CNS051_MN.SM+SF",lastNObservations:2,description:"Business and consumer surveys - qualitative and quantitative inflation perceptions",methodology:"Annual percentage changes"},{code:"SUR.Q.I8.N.ECFIN.CNS051_MN.A1+A2+A3+A4",lastNObservations:2,description:"Business and consumer surveys - qualitative and quantitative inflation perceptions",methodology:"Annual percentage changes"}],l=(a="../../data",function(e){var r=b(e,a);return r in o||(o[r]=new Promise(function(e,t){var n=new XMLHttpRequest;n.addEventListener("load",function(){200<=this.status&&this.status<400?e(JSON.parse(this.responseText)):t(this.status+" "+this.statusText)}),n.open("GET",r),n.setRequestHeader("Accept","application/json"),n.send()}).then(function(e){return n(e)})),o[r]});c.map(function(e){return b(e)});window.fetchDataSet=function(e){return l(c[e]).then(function(t){var r={REF_AREA:"geo",TIME_PERIOD:"time"},i={I8:"EA",GB:"UK",GR:"EL"},e=t.structure.dimensions.series.concat(t.structure.dimensions.observation),a=e.map(function(e){return e.values.length});a.shift();var n=e.filter(function(e){return 1!=e.values.length||e.id in r}).map(function(e){var t=e.id in r?r[e.id]:e.id,n="geo"===t?e.values.map(function(e){var t=e.id in i?i[e.id]:e.id;return u(u({},e),{},{id:t})}):e.values;return u(u({},e),{},{id:t,values:n})}),o={};Object.keys(t.dataSets[0].series).forEach(function(e){var n=t.dataSets[0].series[e],r=0;e.split(":").forEach(function(e,t){r+=parseInt(e),r*=a[t]}),Object.keys(n.observations).forEach(function(e){var t=n.observations[e][0];o[r+parseInt(e)]=t})});var s={};return n.forEach(function(i){s[i.id]={category:{index:{}}},i.values.forEach(function(e,t){var n=e.id;if("time"===i.id){var r=n.split("-Q");n=r[0]+"-"+("0"+(3*r[1]-2)).slice(-2)}s[i.id].category.index[n]=t})}),{class:"dataset",value:o,dimension:s,id:n.map(function(e){return e.id}),size:n.map(function(e){return e.values.length}),extension:{datasetId:"nama_10_gdp"}}})},window.downloadDataSet=function(e){return l(c[e]).then((r=c[e],function(e){var t=i(r)(e),n=XLSX.utils.book_new();XLSX.utils.book_append_sheet(n,t),XLSX.writeFile(n,"exportedData.xlsx")}));var r},/[?&]simple=simple/.test(window.location.search)&&document.querySelector("html").classList.add("simple")}();
