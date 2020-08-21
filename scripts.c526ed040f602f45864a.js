var ScrollOut=function(){"use strict";function e(e,t,n){return t>e?t:n<e?n:e}function t(e){return+(e>0)-+(e<0)}var n,r={};function o(e){return"-"+e[0].toLowerCase()}function i(e){return r[e]||(r[e]=e.replace(/([A-Z])/g,o))}function l(e,t){return e&&0!==e.length?e.nodeName?[e]:[].slice.call(e[0].nodeName?e:(t||document.documentElement).querySelectorAll(e)):[]}function c(e,t){for(var n in t)n.indexOf("_")&&e.setAttribute("data-"+i(n),t[n])}var s=[];function f(){n=0,s.slice().forEach((function(e){return e()})),u()}function u(){!n&&s.length&&(n=requestAnimationFrame(f))}function a(e,t,n,r){return"function"==typeof e?e(t,n,r):e}function d(){}return function(r){r=r||{},console.log(opt);var o,f,v,h,g=r.onChange||d,m=r.onHidden||d,p=r.onShown||d,w=r.onScroll||d,X=r.cssProps?(o=r.cssProps,function(e,t){for(var n in t)n.indexOf("_")&&(!0===o||o[n])&&e.style.setProperty("--"+i(n),Math.round(1e4*t[n])/1e4)}):d,Y=r.scrollingElement,b=Y?l(Y)[0]:window,D=Y?l(Y)[0]:document.documentElement,E=!1,L={},P=[];function _(){P=l(r.targets||"[data-scroll]",l(r.scope||D)[0]).map((function(e){return{element:e}}))}function H(){var o=D.clientWidth,i=D.clientHeight,l=t(-f+(f=D.scrollLeft||window.pageXOffset)),c=t(-v+(v=D.scrollTop||window.pageYOffset)),d=D.scrollLeft/(D.scrollWidth-o||1),g=D.scrollTop/(D.scrollHeight-i||1);E=E||L.scrollDirX!==l||L.scrollDirY!==c||L.scrollPercentX!==d||L.scrollPercentY!==g,L.scrollDirX=l,L.scrollDirY=c,L.scrollPercentX=d,L.scrollPercentY=g;for(var m,p=!1,w=0;w<P.length;w++){var X=P[w],Y=X.element,_=Y,H=0,W=0;do{H+=_.offsetLeft,W+=_.offsetTop,_=_.offsetParent}while(_&&_!==b);var x,O=Y.clientHeight||Y.offsetHeight||0,y=Y.clientWidth||Y.offsetWidth||0,C=(e(H+y,f,f+o)-e(H,f,f+o))/y,S=(e(W+O,v,v+i)-e(W,v,v+i))/O,T=1===C?0:t(H-f),q=1===S?0:t(W-v),z=e((f-(y/2+H-o/2))/(o/2),-1,1),F=e((v-(O/2+W-i/2))/(i/2),-1,1);x=r.offset?a(r.offset,Y,X,D)<=v?1:0:(a(r.threshold,Y,X,D)||0)<C*S?1:0;var N=X.visible!==x;(X._changed||N||X.visibleX!==C||X.visibleY!==S||X.index!==w||X.elementHeight!==O||X.elementWidth!==y||X.offsetX!==H||X.offsetY!==W||X.intersectX!=X.intersectX||X.intersectY!=X.intersectY||X.viewportX!==z||X.viewportY!==F)&&(p=!0,X._changed=!0,X._visibleChanged=N,X.visible=x,X.elementHeight=O,X.elementWidth=y,X.index=w,X.offsetX=H,X.offsetY=W,X.visibleX=C,X.visibleY=S,X.intersectX=T,X.intersectY=q,X.viewportX=z,X.viewportY=F,X.visible=x)}h||!E&&!p||(s.push(m=A),u(),h=function(){!(s=s.filter((function(e){return e!==m}))).length&&n&&(cancelAnimationFrame(n),n=0)})}function A(){W(),E&&(E=!1,c(D,{scrollDirX:L.scrollDirX,scrollDirY:L.scrollDirY}),X(D,L),w(D,L,P));for(var e=P.length-1;e>-1;e--){var t=P[e],n=t.element,o=t.visible,i=n.hasAttribute("data-scroll-once");t._changed&&(t._changed=!1,X(n,t)),t._visibleChanged&&(c(n,{scroll:o?"in":"out"}),g(n,t,D),(o?p:m)(n,t,D)),o&&!r.once&&i&&P.splice(e,1),o&&r.once&&!keep&&P.splice(e,1)}}function W(){h&&(h(),h=void 0)}_(),H(),A();var x=0,O=function(){x=x||setTimeout((function(){x=0,H()}),0)};return window.addEventListener("resize",O),b.addEventListener("scroll",O),{index:_,update:H,teardown:function(){W(),window.removeEventListener("resize",O),b.removeEventListener("scroll",O)}}}}();