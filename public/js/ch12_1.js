!function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(n){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?t(Object(s),!0).forEach((function(t){e(n,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(s,e))}))}return n}var r,s=function(e,t){var n=["lastNObservations","startPeriod"].filter((function(t){return t in e}));return t?t+"/"+e.code.replace(".","/")+encodeURIComponent((n.length?"?":"")+n.map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")):"https://sdw-wsrest.ecb.europa.eu/service/data/"+e.code.replace(".","/")+(n.length?"?":"")+n.map((function(t){return"".concat(t,"=").concat(encodeURIComponent(e[t]))})).join("&")},a=function(e){return function(t){var n=function(e){return function(t){var n=s(e),r=e.description,a=t.structure.links[0].href.split("/")[6],i=t.structure.dimensions.observation[0].values,o=t.structure.dimensions.series,c=t.structure.attributes.series,u="";c.forEach((function(e){!e.values.length||"TITLE_COMPL"!==e.id&&"COMMENT_TS"!==e.id||(u=e.values[0].name)})),u&&(o.forEach((function(e){e.values.length>1&&(u=u.replace(e.values[0].name,""))})),u=(u=(u=u.replace(/- *[,-]/g,"-")).replace(/, *,/g,",")).replace(/^ *, */g,""));var l=["Statistical Data Warehouse code"].concat(o.filter((function(e){return e.values.length>1})).map((function(e){return e.name}))).concat(i.map((function(e){return e.name}))),d=[l],p=function(e){var n=t.dataSets[0].series[e],r=e.split(":"),s=[],c=[a];o.forEach((function(e,t){var n=e.values[r[t]];c.push(n.id),e.values.length>1&&s.push(n.name)})),s.unshift(c.join(".")),i.forEach((function(e,t){var r=n.observations[t];s.push(void 0!==r?r[0]:null)})),d.push(s)};for(var f in t.dataSets[0].series)p(f);var h=[[r],[u],["URL: ".concat(n)],[]],v=XLSX.utils.aoa_to_sheet(h.concat(d));return v["!merges"]=[{s:{r:0,c:0},e:{r:0,c:10}},{s:{r:1,c:0},e:{r:1,c:10}},{s:{r:2,c:0},e:{r:2,c:10}}],v["!cols"]=l.map((function(e,t){var n=e.length;return d.forEach((function(e){e[t]&&e[t].length>n&&(n=e[t].length)})),{width:n+1}})),v}}(e)(t),r=XLSX.utils.book_new();XLSX.utils.book_append_sheet(r,n),XLSX.writeFile(r,"exportedData.xlsx")}},i={},o=[{code:"BSI.M.AT+BE+CY+DE+EE+ES+FI+FR+GR+IE+IT+LT+LU+LV+MT+NL+PT+SI+SK+U2.N.A.L20.A.I.U2.2250.Z01.A",startPeriod:"2010-01",description:"Balance sheet statistics - deposits placed by households (annual growth rates)"},{code:"BSI.M.AT+BE+CY+DE+EE+ES+FI+FR+GR+IE+IT+LT+LU+LV+MT+NL+PT+SI+SK+U2.N.A.L20.A.1.U2.2250.Z01.E",startPeriod:"2010-01",description:"Balance sheet statistics - deposits placed by households (volumes, denominated in euro)"},{code:"BSI.M.AT+BE+CY+DE+EE+ES+FI+FR+GR+IE+IT+LT+LU+LV+MT+NL+PT+SI+SK+U2.N.A.L20.A.I.U2.2240.Z01.A",startPeriod:"2010-01",description:"Balance sheet statistics - deposits placed by companies (annual growth rates)"},{code:"BSI.M.AT+BE+CY+DE+EE+ES+FI+FR+GR+IE+IT+LT+LU+LV+MT+NL+PT+SI+SK+U2.N.A.L20.A.1.U2.2240.Z01.E",startPeriod:"2010-01",description:"Balance sheet statistics - deposits placed by companies (volumes, denominated in euro)"}],c=(r="../../data",function(e){var t=s(e,r);return t in i||(i[t]=new Promise((function(e,n){var r=new XMLHttpRequest;r.addEventListener("load",(function(){this.status>=200&&this.status<400?e(JSON.parse(this.responseText)):n(this.status+" "+this.statusText)})),r.open("GET",t),r.setRequestHeader("Accept","application/json"),r.send()}))),i[t]});o.map((function(e){return s(e)}));window.fetchDataSet=function(e){return c(o[e]).then((t=e,function(e){var r={REF_AREA:"geo",TIME_PERIOD:"time"},s={U2:"EA",GB:"UK",GR:"EL"},a=e.structure.dimensions.series.concat(e.structure.dimensions.observation),i=a.map((function(e){return e.values.length}));i.shift();var o=a.filter((function(e){return 1!=e.values.length})).map((function(e){var t=e.id in r?r[e.id]:e.id,a="geo"===t?e.values.map((function(e){var t=e.id in s?s[e.id]:e.id;return n(n({},e),{},{id:t})})):e.values;return n(n({},e),{},{id:t,values:a})})),c={};Object.keys(e.dataSets[0].series).forEach((function(n){var r=e.dataSets[0].series[n],s=0;n.split(":").forEach((function(e,t){s+=parseInt(e),s*=i[t]})),Object.keys(r.observations).forEach((function(e){var n=r.observations[e][0];1!==t&&3!==t||(n*=.001),c[s+parseInt(e)]=n}))}));var u={};return o.forEach((function(e){u[e.id]={category:{index:{}}},e.values.forEach((function(t,n){u[e.id].category.index[t.id]=n}))})),{class:"dataset",value:c,dimension:u,id:o.map((function(e){return e.id})),size:o.map((function(e){return e.values.length})),extension:{datasetId:"nama_10_gdp"}}}));var t},window.downloadDataSet=function(e){return c(o[e]).then(a(o[e]))},/[?&]simple=simple/.test(window.location.search)&&document.querySelector("html").classList.add("simple")}();
