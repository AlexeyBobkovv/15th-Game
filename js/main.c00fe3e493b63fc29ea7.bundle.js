(self.webpackChunkwebpack5_boilerplate=self.webpackChunkwebpack5_boilerplate||[]).push([[179],{421:(e,t,n)=>{"use strict";function o(){scene.style.height="".concat(document.documentElement.clientHeight,"px")}function a(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}const r={isSave:!1,isFinished:!1,startGame:!1,voice:!1,numbersVis:!1,cells:[],image:"",numbersOfMoves:0,sec:0,min:0,cellSize:25,fieldSize:4,sizes:{3:[a(Array(8).keys()),33.3,925],4:[a(Array(15).keys()),25,925],5:[a(Array(24).keys()),20,925],6:[a(Array(35).keys()),16.67,925],7:[a(Array(48).keys()),14.29,925],8:[a(Array(63).keys()),12.5,925]},game:document.querySelector("#game"),main:document.createElement("main"),fieldTop:document.createElement("div"),gameTime:document.createElement("time"),moveCounter:document.createElement("div"),fieldBottom:document.createElement("div"),field:document.createElement("div"),recordField:document.createElement("div"),size:document.createElement("div"),numVisibleBtn:document.createElement("img")};function l(){r.recordField.className="record",r.recordField.innerHTML="Your records:",r.game.append(r.recordField),r.recordField.style.height="".concat(100*r.fieldSize+150,"px");var e=document.createElement("div");e.className="recordRow",r.recordField.append(e);var t=document.createElement("div");t.className="recordColumn",e.append(t),t.innerHTML="#";var n=document.createElement("div");n.className="recordColumn",e.append(n),n.innerHTML="Time";var o=document.createElement("div");o.className="recordColumn",e.append(o),o.innerHTML="Moves";var a=document.createElement("div");if(a.className="recordColumn",e.append(a),a.innerHTML="Size",null!==localStorage.getItem("bestResults")){var c=JSON.parse(localStorage.getItem("bestResults"));if(c.length>5)for(;5!==c.length;)c.shift();for(var l=0;l<c.length;l++){var i=document.createElement("p");i.innerHTML=" ".concat([l+1]," "),t.append(i);var m=document.createElement("p");m.innerHTML="".concat(s(c[l].time[0]),":").concat(s(c[l].time[1])),n.append(m);var u=document.createElement("p");u.innerHTML="".concat(c[l].moves),o.append(u);var d=document.createElement("p");d.innerHTML="".concat(c[l].fieldSize," × ").concat(c[l].fieldSize),a.append(d)}}}function i(){var e={};if(e.moves=r.numbersOfMoves,e.time=[r.min,r.sec],e.fieldSize=r.fieldSize,null!==localStorage.getItem("bestResults")){var t=JSON.parse(localStorage.getItem("bestResults"));t.push(e),localStorage.setItem("bestResults",JSON.stringify(t))}else{var n=[];n.push(e),localStorage.setItem("bestResults",JSON.stringify(n))}}function s(e){return(parseInt(e,10)<10?"0":"")+e}function m(){r.moveCounter.innerHTML="Moves: ".concat(r.numbersOfMoves)}function u(){var e=r.cells[0];switch(event.key){case"ArrowUp":var t;r.cells.forEach((function(n){n.top===e.top+1&&n.left===e.left&&(t=n)}));try{t.element.style.top="".concat(e.top*r.cellSize,"%"),e.element.style.top="".concat(t.top*r.cellSize,"%");var n=e.top;e.top=t.top,t.top=n,d()}catch(e){return}break;case"ArrowDown":var o;r.cells.forEach((function(t){t.top===e.top-1&&t.left===e.left&&(o=t)}));try{o.element.style.top="".concat(e.top*r.cellSize,"%"),e.element.style.top="".concat(o.top*r.cellSize,"%");var a=e.top;e.top=o.top,o.top=a,d()}catch(e){return}break;case"ArrowRight":var c;r.cells.forEach((function(t){t.top===e.top&&t.left===e.left-1&&(c=t)}));try{c.element.style.left="".concat(e.left*r.cellSize,"%"),e.element.style.left="".concat(c.left*r.cellSize,"%");var l=e.left;e.left=c.left,c.left=l,d()}catch(e){return}break;case"ArrowLeft":var i;r.cells.forEach((function(t){t.top===e.top&&t.left===e.left+1&&(i=t)}));try{i.element.style.left="".concat(e.left*r.cellSize,"%"),e.element.style.left="".concat(i.left*r.cellSize,"%");var s=e.left;e.left=i.left,i.left=s,d()}catch(e){return}}}function d(){if(r.numbersOfMoves+=1,m(),r.voice){var e=new Audio;e.src="./assets/audio/movingcell.mp3",e.autoplay=!0}r.startGame=!0,r.isFinished=r.cells.every((function(e){return 0===e.value||e.value-1===e.top*r.fieldSize+e.left})),r.isFinished&&(alert("Ура! Вы решили головоломку за ".concat(r.min," минут ").concat(r.sec," секунд и за ").concat(r.numbersOfMoves," ходов")),i(),l())}function f(e){var t=0;document.querySelectorAll(".cell").forEach((function(e){e.setAttribute("draggable","false")}));var n=r.cells[e],o=r.cells[0];if(!(Math.abs(o.left-n.left)+Math.abs(o.top-n.top)>1)){n.element.setAttribute("draggable","true");o.element.addEventListener("dragover",(function(e){e.preventDefault()})),o.element.addEventListener("dragleave",(function(){o.element.classList.remove("hovered")})),o.element.addEventListener("dragenter",(function(e){e.preventDefault(),o.element.classList.add("hovered")})),o.element.addEventListener("drop",(function(){if(!(++t>1)){if(r.voice){var e=new Audio;e.src="./assets/audio/pop.mp3",e.autoplay=!0}o.element.classList.remove("hovered"),n.element.style.left="".concat(o.left*r.cellSize,"%"),n.element.style.top="".concat(o.top*r.cellSize,"%"),o.element.style.left="".concat(n.left*r.cellSize,"%"),o.element.style.top="".concat(n.top*r.cellSize,"%");var a=o.left,c=o.top;o.left=n.left,o.top=n.top,n.left=a,n.top=c,r.isFinished=r.cells.every((function(e){return 0===e.value||e.value-1===e.top*r.fieldSize+e.left})),r.numbersOfMoves+=1,m(),r.startGame=!0,r.isFinished&&(alert("Ура! Вы решили головоломку за ".concat(r.min," минут ").concat(r.sec," секунд и за ").concat(r.numbersOfMoves," ходов")),i(),l())}})),n.element.addEventListener("dragstart",(function(){setTimeout((function(){n.element.classList.add("hide")}),0)})),n.element.addEventListener("dragend",(function(){n.element.classList.remove("hide")}))}}function p(){r.cellSize=r.sizes[r.fieldSize][1],3==r.fieldSize?(r.fieldTop.style.width="".concat(520,"px"),r.fieldBottom.style.width="".concat(731,"px")):4==r.fieldSize?(r.fieldTop.style.width="".concat(455,"px"),r.fieldBottom.style.width="".concat(731,"px")):(r.fieldTop.style.width="".concat(100*r.fieldSize,"px"),r.fieldBottom.style.width="".concat(140*r.fieldSize,"px")),r.field.style.width="".concat(100*r.fieldSize,"px"),r.field.style.height="".concat(100*r.fieldSize,"px"),r.game.style.height="".concat(r.sizes[r.fieldSize][2],"px");var e=document.createElement("div");e.className="emptycell";r.cells.push({value:0,left:0,top:0,element:e}),e.style.width="".concat(r.cellSize,"%"),e.style.height="".concat(r.cellSize,"%"),e.style.left="".concat(0*r.cellSize,"%"),e.style.top="".concat(0*r.cellSize,"%"),r.field.append(e),document.querySelectorAll(".cell").forEach((function(e){e.remove()}));for(var t,n=r.sizes[r.fieldSize][0].sort((function(){return Math.random()-.5}));!v(n);)n=r.sizes[r.fieldSize][0].sort((function(){return Math.random()-.5}));r.image="./assets/images/".concat((t=15,Math.floor(Math.random()*Math.floor(t))+1),".jpg");for(var o=function(e){var t=document.createElement("div");t.className="cell";var o=n[e-1]+1,a=document.createElement("p");a.className="cellnumber",a.innerHTML=o;var c=e%r.fieldSize,l=(e-c)/r.fieldSize;r.cells.push({value:o,left:c,top:l,element:t}),t.style.backgroundImage="url(".concat(r.image,")"),t.style.backgroundSize=r.field.style.height,t.style.width="".concat(r.cellSize,"%"),t.style.height="".concat(r.cellSize,"%"),t.style.left="".concat(c*r.cellSize,"%"),t.style.top="".concat(l*r.cellSize,"%");var i="".concat(100/(r.fieldSize-1)*((o-1)%r.fieldSize),"%");t.style.backgroundPositionX=i;var s="".concat(100/(r.fieldSize-1)*Math.trunc((o-1)/r.fieldSize),"%");t.style.backgroundPositionY=s,r.field.append(t),t.append(a),t.addEventListener("mousedown",(function(){f(e)}))},a=1;a<=r.fieldSize*r.fieldSize-1;a++)o(a)}function v(e){for(var t=0,n=function(n){0!==e[n]&&(t+=e.filter((function(t,o){return t<e[n]&&o<n})).length)},o=0;o<e.length;o++)n(o);return t+=Math.floor((e.indexOf(0)+1)/r.fieldSize),r.fieldSize%2!=0?t%2==0:t%2!=0}!function e(){!function(){60===r.sec&&(r.sec=0,r.min++);r.gameTime.innerHTML="Time: ".concat(s(r.min),"<span>:</span>").concat(s(r.sec)),r.startGame&&(r.sec+=1)}(),setTimeout(e,1e3)}(),document.addEventListener("keyup",u),n(921),function(){var e=document.getElementById("scene");e.className="scene",new Parallax(e,{pointerEvents:!0})}(),o(),window.onresize=o,r.main.className="main",r.game.append(r.main),function(){r.fieldTop.className="field_top",r.main.append(r.fieldTop),r.gameTime.className="gametime",r.fieldTop.append(r.gameTime);var e=document.createElement("img");e.className="stop_btn",e.src="./assets/images/bages/stop.png",r.fieldTop.append(e),e.addEventListener("click",(function(){r.startGame=!1})),r.moveCounter.className="movecounter",r.fieldTop.append(r.moveCounter),r.field.className="field",r.main.append(r.field),m()}(),function(){var e=[];r.fieldBottom.className="field_bottom",r.main.append(r.fieldBottom);var t=document.createElement("img");e.push(t),t.className="down_btn",t.src="./assets/images/bages/again.png",t.addEventListener("click",(function(){r.cells=[],p(),localStorage.removeItem("btnToSave"),r.startGame=!1,r.numbersOfMoves=0,m(),r.sec=0,r.min=0,r.gameTime.innerHTML="Time: ".concat(s(r.min),"<span>:</span>").concat(s(r.sec)),document.addEventListener("keyup",u)}));var n=document.createElement("img");e.push(n),n.className="down_btn",n.src="./assets/images/bages/save.png",n.addEventListener("click",(function(){localStorage.setItem("image",r.image),localStorage.setItem("cells",JSON.stringify(r.cells)),localStorage.setItem("moves",r.numbersOfMoves),localStorage.setItem("time",JSON.stringify([r.min,r.sec])),localStorage.setItem("fieldSize",r.fieldSize),localStorage.setItem("cellSize",r.cellSize),r.isSave=!0,localStorage.setItem("btnToSave",r.isSave),r.startGame=!1})),e.push(r.numVisibleBtn),r.numVisibleBtn.className="down_btn",r.numVisibleBtn.src="./assets/images/bages/visibility_off.png",r.numVisibleBtn.addEventListener("click",(function(){r.numbersVis=!r.numbersVis,r.numbersVis?(r.numVisibleBtn.src="./assets/images/bages/visibility_on.png",document.querySelectorAll(".cellnumber").forEach((function(e){return e.style.display="flex"}))):(r.numVisibleBtn.src="./assets/images/bages/visibility_off.png",document.querySelectorAll(".cellnumber").forEach((function(e){return e.style.display="none"})))}));var o=document.createElement("img");e.push(o),o.className="down_btn",o.src="./assets/images/bages/sound_off.png",o.addEventListener("click",(function(){r.voice=!r.voice,r.voice?o.src="./assets/images/bages/sound_on.png":o.src="./assets/images/bages/sound_off.png"}));var a=document.createElement("img");e.push(a),a.className="down_btn",a.src="./assets/images/bages/loss.png",a.addEventListener("click",(function(){r.startGame=!1;for(var e=1;e<=r.fieldSize*r.fieldSize-1;e++)r.cells[e].element.style.left="".concat((r.cells[e].value-1)%r.fieldSize*r.cellSize,"%"),r.cells[e].element.style.top="".concat(Math.trunc((r.cells[e].value-1)/r.fieldSize)*r.cellSize,"%");r.isFinished=!0,r.isFinished&&(alert("Ура! Вы решили головоломку за ".concat(r.min," минут ").concat(r.sec," секунд и за ").concat(r.numbersOfMoves," ходов")),i(),l()),document.querySelectorAll(".cell").forEach((function(e){e.style.pointerEvents="none"})),document.removeEventListener("keyup",u)}));var c=document.createElement("img");e.push(c),c.className="down_btn",c.src="./assets/images/bages/choose_field.png",c.addEventListener("click",(function(){!function(){document.querySelectorAll(".down_btn").forEach((function(e){return e.style.display="none"})),document.querySelectorAll(".bg").forEach((function(e){return e.style.display="none"}));for(var e=function(e){var t=document.createElement("div");t.className="bg_size",t.src="./assets/images/bages/Bg_fr_btn.png",r.fieldBottom.append(t);var n=document.createElement("div");n.classList.add("down_size_btn"),n.innerHTML="".concat(e," × ").concat(e),r.startGame=!1,t.append(n),n.addEventListener("click",(function(){for(var e=0;e<6;e++)document.querySelector(".down_size_btn").remove(),document.querySelector(".bg_size").remove();document.querySelector(".bg_size").remove(),document.querySelectorAll(".down_btn").forEach((function(e){return e.style.display="flex"})),document.querySelectorAll(".bg").forEach((function(e){return e.style.display="flex"})),r.fieldSize=n.innerText.slice(0,1),r.cells=[],p(),document.querySelector(".emptycell").remove(),r.numbersOfMoves=0,m(),r.startGame=!1,r.numbersVis=!1,r.numVisibleBtn.src="./assets/images/bages/visibility_off.png",document.querySelectorAll(".cellnumber").forEach((function(e){return e.style.display="none"})),r.sec=0,r.min=0,r.gameTime.innerHTML="Time: ".concat(s(r.min),"<span>:</span>").concat(s(r.sec))}))},t=3;t<=8;t++)e(t);var n=document.createElement("div");n.className="bg_size",n.src="./assets/images/bages/Bg_fr_btn.png",r.fieldBottom.append(n);var o=document.createElement("img");o.className="down_back_btn",o.src="./assets/images/bages/back.png",n.append(o),o.addEventListener("click",(function(){for(var e=0;e<6;e++)document.querySelector(".down_size_btn").remove(),document.querySelector(".bg_size").remove();document.querySelector(".down_back_btn").remove(),document.querySelector(".bg_size").remove(),document.querySelectorAll(".down_btn").forEach((function(e){return e.style.display="flex"})),document.querySelectorAll(".bg").forEach((function(e){return e.style.display="flex"}))})),document.addEventListener("keyup",u)}()})),e.forEach((function(e){var t=document.createElement("div");t.className="bg",t.src="./assets/images/bages/Bg_fr_btn.png",r.fieldBottom.append(t),t.append(e)}))}(),null!==localStorage.getItem("btnToSave")?(!function(){var e=JSON.parse(localStorage.getItem("cells")),t=localStorage.getItem("fieldSize"),n=localStorage.getItem("cellSize"),o=localStorage.getItem("image");r.image=localStorage.getItem("image"),r.cellSize=r.sizes[t][1],3==t?(r.fieldTop.style.width="".concat(520,"px"),r.fieldBottom.style.width="".concat(731,"px")):4==t?(r.fieldTop.style.width="".concat(455,"px"),r.fieldBottom.style.width="".concat(731,"px")):(r.fieldTop.style.width="".concat(100*t,"px"),r.fieldBottom.style.width="".concat(100*t,"px")),r.field.style.width="".concat(100*t,"px"),r.field.style.height="".concat(100*t,"px"),r.game.style.height="".concat(r.sizes[t][2],"px");var a=document.createElement("div");a.className="emptycell";var c=e[0].left,l=e[0].top;r.cells.push({value:0,left:c,top:l,element:a}),a.style.left="".concat(c*n,"%"),a.style.top="".concat(l*n,"%"),r.field.append(a),document.querySelectorAll(".cell").forEach((function(e){e.remove()}));for(var i=function(a){var c=document.createElement("div");c.className="cell";var l=document.createElement("p");l.className="cellnumber",l.innerHTML=e[a].value;var i=e[a].left,s=e[a].top;r.cells.push({value:e[a].value,left:i,top:s,element:c}),c.style.left="".concat(i*n,"%"),c.style.top="".concat(s*n,"%"),c.style.backgroundImage="url(".concat(o,")"),c.style.backgroundSize=r.field.style.height,c.style.width="".concat(n,"%"),c.style.height="".concat(n,"%"),c.style.left="".concat(i*n,"%"),c.style.top="".concat(s*n,"%");var m="".concat(100/(t-1)*((e[a].value-1)%t),"%");c.style.backgroundPositionX=m;var u="".concat(100/(t-1)*Math.trunc((e[a].value-1)/t),"%");c.style.backgroundPositionY=u,r.field.append(c),c.append(l),c.addEventListener("mousedown",(function(){f(a)}))},s=1;s<=t*t-1;s++)i(s);localStorage.removeItem("btnToSave")}(),r.sec=JSON.parse(localStorage.getItem("time"))[1],r.min=JSON.parse(localStorage.getItem("time"))[0],r.numbersOfMoves=JSON.parse(localStorage.getItem("moves")),m()):p(),null!==localStorage.getItem("bestResults")&&l()},922:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(15),a=n.n(o),c=n(645),r=n.n(c)()(a());r.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const l=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(o)for(var c=0;c<this.length;c++){var r=this[c][0];null!=r&&(a[r]=!0)}for(var l=0;l<e.length;l++){var i=[].concat(e[l]);o&&a[i[0]]||(n&&(i[2]?i[2]="".concat(n," and ").concat(i[2]):i[2]=n),t.push(i))}},t}},15:e=>{"use strict";function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,a=!1,c=void 0;try{for(var r,l=e[Symbol.iterator]();!(o=(r=l.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(e){a=!0,c=e}finally{try{o||null==l.return||l.return()}finally{if(a)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}e.exports=function(e){var n=t(e,4),o=n[1],a=n[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),l="/*# ".concat(r," */"),i=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[o].concat(i).concat([l]).join("\n")}return[o].join("\n")}},921:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var o=n(379),a=n.n(o),c=n(922),r={insert:"head",singleton:!1};a()(c.Z,r);const l=c.Z.locals||{}},379:(e,t,n)=>{"use strict";var o,a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},c=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function l(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function i(e,t){for(var n={},o=[],a=0;a<e.length;a++){var c=e[a],i=t.base?c[0]+t.base:c[0],s=n[i]||0,m="".concat(i," ").concat(s);n[i]=s+1;var u=l(m),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(r[u].references++,r[u].updater(d)):r.push({identifier:m,updater:g(d,t),references:1}),o.push(m)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=n.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var r=c(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var m,u=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function d(e,t,n,o){var a=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var c=document.createTextNode(a),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(c,r[t]):e.appendChild(c)}}function f(e,t,n){var o=n.css,a=n.media,c=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,v=0;function g(e,t){var n,o,a;if(t.singleton){var c=v++;n=p||(p=s(t)),o=d.bind(null,n,c,!1),a=d.bind(null,n,c,!0)}else n=s(t),o=f.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=i(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var a=l(n[o]);r[a].references--}for(var c=i(e,t),s=0;s<n.length;s++){var m=l(n[s]);0===r[m].references&&(r[m].updater(),r.splice(m,1))}n=c}}}}},0,[[421,666]]]);