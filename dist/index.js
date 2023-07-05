import React from"react";var __assign=function(){return(__assign=Object.assign||function(t){for(var n,o=1,e=arguments.length;o<e;o++)for(var r in n=arguments[o])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)};function __rest(t,n){var o={};for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,r=Object.getOwnPropertySymbols(t);e<r.length;e++)n.indexOf(r[e])<0&&Object.prototype.propertyIsEnumerable.call(t,r[e])&&(o[r[e]]=t[r[e]]);return o}function styleInject(t,n){var o,e,n=(n=void 0===n?{}:n).insertAt;t&&"undefined"!=typeof document&&(o=document.head||document.getElementsByTagName("head")[0],(e=document.createElement("style")).type="text/css","top"===n&&o.firstChild?o.insertBefore(e,o.firstChild):o.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t)))}var css_248z=".storybook-button {\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-weight: 700;\n    border: 0;\n    border-radius: 3em;\n    cursor: pointer;\n    display: inline-block;\n    line-height: 1;\n  }\n  .storybook-button--primary {\n    color: white;\n    background-color: #1ea7fd;\n  }\n  .storybook-button--secondary {\n    color: #333;\n    background-color: transparent;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  }\n  .storybook-button--small {\n    font-size: 12px;\n    padding: 10px 16px;\n  }\n  .storybook-button--medium {\n    font-size: 14px;\n    padding: 11px 20px;\n  }\n  .storybook-button--large {\n    font-size: 16px;\n    padding: 12px 24px;\n  }\n  ",Button=(styleInject(css_248z),function(t){var n=t.primary,n=void 0!==n&&n,o=t.size,o=void 0===o?"medium":o,e=t.backgroundColor,r=t.label,t=__rest(t,["primary","size","backgroundColor","label"]),n=n?"storybook-button--primary":"storybook-button--secondary";return React.createElement("button",__assign({type:"button",className:["storybook-button","storybook-button--".concat(o),n].join(" "),style:{backgroundColor:e}},t),r)});export{Button};