parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"MEoy":[function(require,module,exports) {

},{"./..\\fonts\\avant-garde-gothic-std-book.otf":[["avant-garde-gothic-std-book.57166d57.otf","z2eV"],"z2eV"],"./..\\fonts\\avant-garde-gothic-std-extra-light.otf":[["avant-garde-gothic-std-extra-light.d0e955b3.otf","wHTl"],"wHTl"]}],"pBGv":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"xNmf":[function(require,module,exports) {
var process = require("process");
var e=require("process");(function(){var n,r,t,o,u,i;"undefined"!=typeof performance&&null!==performance&&performance.now?module.exports=function(){return performance.now()}:null!=e&&e.hrtime?(module.exports=function(){return(n()-u)/1e6},r=e.hrtime,o=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),i=1e9*e.uptime(),u=o-i):Date.now?(module.exports=function(){return Date.now()-t},t=Date.now()):(module.exports=function(){return(new Date).getTime()-t},t=(new Date).getTime())}).call(this);
},{"process":"pBGv"}],"oXMl":[function(require,module,exports) {
var global = arguments[3];
for(var e=arguments[3],n=require("performance-now"),t="undefined"==typeof window?e:window,a=["moz","webkit"],l="AnimationFrame",c=t["request"+l],o=t["cancel"+l]||t["cancelRequest"+l],r=0;!c&&r<a.length;r++)c=t[a[r]+"Request"+l],o=t[a[r]+"Cancel"+l]||t[a[r]+"CancelRequest"+l];if(!c||!o){var i=0,u=0,f=[],m=1e3/60;c=function(e){if(0===f.length){var t=n(),a=Math.max(0,m-(t-i));i=a+t,setTimeout(function(){var e=f.slice(0);f.length=0;for(var n=0;n<e.length;n++)if(!e[n].cancelled)try{e[n].callback(i)}catch(t){setTimeout(function(){throw t},0)}},Math.round(a))}return f.push({handle:++u,callback:e,cancelled:!1}),u},o=function(e){for(var n=0;n<f.length;n++)f[n].handle===e&&(f[n].cancelled=!0)}}module.exports=function(e){return c.call(t,e)},module.exports.cancel=function(){o.apply(t,arguments)},module.exports.polyfill=function(e){e||(e=t),e.requestAnimationFrame=c,e.cancelAnimationFrame=o};
},{"performance-now":"xNmf"}],"J4Nk":[function(require,module,exports) {
"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function o(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}module.exports=o()?Object.assign:function(o,c){for(var a,i,s=n(o),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))t.call(a,u)&&(s[u]=a[u]);if(r){i=r(a);for(var b=0;b<i.length;b++)e.call(a,i[b])&&(s[i[b]]=a[i[b]])}}return s};
},{}],"JiJE":[function(require,module,exports) {
const t=require("raf"),i=require("object-assign"),e={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:(t,i,e)=>i<e?t<i?i:t>e?e:t:t<e?e:t>i?i:t,data:(t,i)=>e.deserialize(t.getAttribute("data-"+i)),deserialize:t=>"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t),camelCase:t=>t.replace(/-+(.)?/g,(t,i)=>i?i.toUpperCase():""),accelerate(t){e.css(t,"transform","translate3d(0,0,0) rotate(0.0001deg)"),e.css(t,"transform-style","preserve-3d"),e.css(t,"backface-visibility","hidden")},transformSupport(t){let i=document.createElement("div"),n=!1,s=null,o=!1,h=null,a=null;for(let r=0,l=e.vendors.length;r<l;r++)if(null!==e.vendors[r]?(h=e.vendors[r][0]+"transform",a=e.vendors[r][1]+"Transform"):(h="transform",a="transform"),void 0!==i.style[a]){n=!0;break}switch(t){case"2D":o=n;break;case"3D":if(n){let t=document.body||document.createElement("body"),e=document.documentElement,n=e.style.overflow,r=!1;document.body||(r=!0,e.style.overflow="hidden",e.appendChild(t),t.style.overflow="hidden",t.style.background=""),t.appendChild(i),i.style[a]="translate3d(1px,1px,1px)",o=void 0!==(s=window.getComputedStyle(i).getPropertyValue(h))&&s.length>0&&"none"!==s,e.style.overflow=n,t.removeChild(i),r&&(t.removeAttribute("style"),t.parentNode.removeChild(t))}}return o},css(t,i,n){let s=e.propertyCache[i];if(!s)for(let o=0,h=e.vendors.length;o<h;o++)if(s=null!==e.vendors[o]?e.camelCase(e.vendors[o][1]+"-"+i):i,void 0!==t.style[s]){e.propertyCache[i]=s;break}t.style[s]=n}},n=30,s={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null};class o{constructor(t,n){this.element=t;const o={calibrateX:e.data(this.element,"calibrate-x"),calibrateY:e.data(this.element,"calibrate-y"),invertX:e.data(this.element,"invert-x"),invertY:e.data(this.element,"invert-y"),limitX:e.data(this.element,"limit-x"),limitY:e.data(this.element,"limit-y"),scalarX:e.data(this.element,"scalar-x"),scalarY:e.data(this.element,"scalar-y"),frictionX:e.data(this.element,"friction-x"),frictionY:e.data(this.element,"friction-y"),originX:e.data(this.element,"origin-x"),originY:e.data(this.element,"origin-y"),pointerEvents:e.data(this.element,"pointer-events"),precision:e.data(this.element,"precision"),relativeInput:e.data(this.element,"relative-input"),clipRelativeInput:e.data(this.element,"clip-relative-input"),hoverOnly:e.data(this.element,"hover-only"),inputElement:document.querySelector(e.data(this.element,"input-element")),selector:e.data(this.element,"selector")};for(let i in o)null===o[i]&&delete o[i];i(this,s,o,n),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}initialise(){void 0===this.transform2DSupport&&(this.transform2DSupport=e.transformSupport("2D"),this.transform3DSupport=e.transformSupport("3D")),this.transform3DSupport&&e.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}doReadyCallback(){this.onReady&&this.onReady()}updateLayers(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(let t=0;t<this.layers.length;t++){let i=this.layers[t];this.transform3DSupport&&e.accelerate(i),i.style.position=t?"absolute":"relative",i.style.display="block",i.style.left=0,i.style.top=0;let n=e.data(i,"depth")||0;this.depthsX.push(e.data(i,"depth-x")||n),this.depthsY.push(e.data(i,"depth-y")||n)}}updateDimensions(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}updateBounds(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}queueCalibration(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}enable(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=t(this.onAnimationFrame))}disable(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),t.cancel(this.raf))}calibrate(t,i){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===i?this.calibrateY:i}invert(t,i){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===i?this.invertY:i}friction(t,i){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===i?this.frictionY:i}scalar(t,i){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===i?this.scalarY:i}limit(t,i){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===i?this.limitY:i}origin(t,i){this.originX=void 0===t?this.originX:t,this.originY=void 0===i?this.originY:i}setInputElement(t){this.inputElement=t,this.updateDimensions()}setPosition(t,i,n){i=i.toFixed(this.precision)+"px",n=n.toFixed(this.precision)+"px",this.transform3DSupport?e.css(t,"transform","translate3d("+i+","+n+",0)"):this.transform2DSupport?e.css(t,"transform","translate("+i+","+n+")"):(t.style.left=i,t.style.top=n)}onOrientationTimer(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}onMotionTimer(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}onCalibrationTimer(){this.calibrationFlag=!0}onWindowResize(){this.updateDimensions()}onAnimationFrame(){this.updateBounds();let i=this.inputX-this.calibrationX,n=this.inputY-this.calibrationY;(Math.abs(i)>this.calibrationThreshold||Math.abs(n)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?n:this.inputY,this.motionY=this.calibrateY?i:this.inputX):(this.motionX=this.calibrateX?i:this.inputX,this.motionY=this.calibrateY?n:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=e.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=e.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(let t=0;t<this.layers.length;t++){let i=this.layers[t],e=this.depthsX[t],n=this.depthsY[t],s=this.velocityX*(e*(this.invertX?-1:1)),o=this.velocityY*(n*(this.invertY?-1:1));this.setPosition(i,s,o)}this.raf=t(this.onAnimationFrame)}rotate(t,i){let e=(t||0)/n,s=(i||0)/n,o=this.windowHeight>this.windowWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=e,this.calibrationY=s),this.inputX=e,this.inputY=s}onDeviceOrientation(t){let i=t.beta,e=t.gamma;null!==i&&null!==e&&(this.orientationStatus=1,this.rotate(i,e))}onDeviceMotion(t){let i=t.rotationRate.beta,e=t.rotationRate.gamma;null!==i&&null!==e&&(this.motionStatus=1,this.rotate(i,e))}onMouseMove(t){let i=t.clientX,e=t.clientY;if(this.hoverOnly&&(i<this.elementPositionX||i>this.elementPositionX+this.elementWidth||e<this.elementPositionY||e>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(i=Math.max(i,this.elementPositionX),i=Math.min(i,this.elementPositionX+this.elementWidth),e=Math.max(e,this.elementPositionY),e=Math.min(e,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(i-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(e-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(i-this.windowCenterX)/this.windowRadiusX,this.inputY=(e-this.windowCenterY)/this.windowRadiusY)}destroy(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(let t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}version(){return"3.1.0"}}module.exports=o;
},{"raf":"oXMl","object-assign":"J4Nk"}],"uBxZ":[function(require,module,exports) {
"use strict";require("./scss/index.scss");var e=r(require("../node_modules/parallax-js/src/parallax.js"));function r(e){return e&&e.__esModule?e:{default:e}}var s=document.getElementById("scene"),t=new e.default(s,{relativeInput:!0});t.friction(.05,.25),t.limit(40,1e3);
},{"./scss/index.scss":"MEoy","../node_modules/parallax-js/src/parallax.js":"JiJE"}]},{},["uBxZ"], null)
//# sourceMappingURL=src.c354d325.js.map