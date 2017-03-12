/*!
 * Copyright 2017 by Ding
 * @author Ding <ding-js@outlook.com>
 */
var ding4=webpackJsonpding_id_([4],{113:function(t,e,n){"use strict";function i(t,e){c.innerHTML=t,h.innerHTML=e}function r(){new s.Snake(u,{width:600,height:600,scroeCallback:function(t){var e=this.speed,n=1+5*Math.ceil(t/5);e!==n&&(this.speed=n),i(t,this.speed)}})}function o(){for(var t=[],e=1;e<=10;e++)t.push({scroe:5*e,speed:1+5*e});var n=0;new s.Snake(u,{width:600,height:600,scroeCallback:function(e){var r=t[n];return e>=r.scroe?(n>=t.length-1?this.endGame("没有关卡啦!"):(this.speed=r.speed,this.nextLevel("按空格进入下一关"),n++,i(1,r.speed)),!1):void i(e,this.speed)}})}function a(){for(var t=[],e=1;e<=10;e++)t.push({scroe:5*e,speed:1+3*e});var n=0,r=new s.Snake(u,{height:600,width:600,scroeCallback:function(e){var o=t[n];return e>=o.scroe?(n>=t.length-1?this.endGame("没有关卡啦!"):(this.speed=o.speed,r.fillWall(20),this.nextLevel("按空格进入下一关"),n++,i(1,o.speed)),!1):void i(e,this.speed)}});r.fillWall(20)}Object.defineProperty(e,"__esModule",{value:!0}),n(263);var s=n(280),u=document.querySelector("#snake-wrapper"),c=document.querySelector("#scroe-info"),h=document.querySelector("#speed-info"),f=document.querySelector("#mode-group");f.addEventListener("change",function(t){var e=t.target;if("input"===e.tagName.toLowerCase()&&"radio"===e.type&&e.checked)switch(e.blur(),u.innerHTML="",i(0,1),e.value){case"common":r();break;case"level":o();break;case"escape":a();break;default:return}}),r()},263:function(t,e){},274:function(t,e){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(t){if(h===setTimeout)return setTimeout(t,0);if((h===n||!h)&&setTimeout)return h=setTimeout,setTimeout(t,0);try{return h(t,0)}catch(e){try{return h.call(null,t,0)}catch(e){return h.call(this,t,0)}}}function o(t){if(f===clearTimeout)return clearTimeout(t);if((f===i||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){y&&d&&(y=!1,d.length?p=d.concat(p):v=-1,p.length&&s())}function s(){if(!y){var t=r(a);y=!0;for(var e=p.length;e;){for(d=p,p=[];++v<e;)d&&d[v].run();v=-1,e=p.length}d=null,y=!1,o(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var h,f,l=t.exports={};!function(){try{h="function"==typeof setTimeout?setTimeout:n}catch(t){h=n}try{f="function"==typeof clearTimeout?clearTimeout:i}catch(t){f=i}}();var d,p=[],y=!1,v=-1;l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new u(t,e)),1!==p.length||y||r(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=c,l.addListener=c,l.once=c,l.off=c,l.removeListener=c,l.removeAllListeners=c,l.emit=c,l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},280:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=n(281);!function(t){t[t.empty=0]="empty",t[t.wall=1]="wall",t[t.body=2]="body",t[t.head=3]="head",t[t.footer=4]="footer",t[t.food=5]="food"}(i||(i={}));var o;!function(t){t[t.left=0]="left",t[t.right=1]="right",t[t.up=2]="up",t[t.down=3]="down"}(o||(o={}));var a;!function(t){t[t.beforeStart=0]="beforeStart",t[t.afterEnd=1]="afterEnd",t[t.pause=2]="pause",t[t.normal=3]="normal"}(a||(a={}));var s=function(){function t(t,e){var n=this;this._boxes=[],this._snake=[],this._food=[],this._wall=[],this._drop=[],this._keys=[],this._status=a.beforeStart,this._speed=1,this._boxTypes=(l={},l[i.empty]={},l[i.wall]={background:"brown"},l[i.head]={background:"#555",render:function(t,e,i,r){var o=r/14,a=n._direction[n._snakeDirection],s=r/2,u=[{x:e+s+a.x*o*3+(0===a.x?2.5*o:0),y:i+s+a.y*o*3+(0===a.y?2.5*o:0)},{x:e+s+a.x*o*3+(0===a.x?2.5*-o:0),y:i+s+a.y*o*3+(0===a.y?2.5*-o:0)}];t.fillStyle="#fff",u.forEach(function(e){t.beginPath(),t.arc(e.x,e.y,2*o,0,2*Math.PI),t.fill()})}},l[i.body]={background:"#888"},l[i.footer]={background:"#888"},l[i.food]={background:"orange"},l),this._direction=(d={},d[o.left]={x:-1,y:0,keyCode:[65,37],opposite:o.right},d[o.right]={x:1,y:0,keyCode:[68,39],opposite:o.left},d[o.up]={x:0,y:-1,keyCode:[87,38],opposite:o.down},d[o.down]={x:0,y:1,keyCode:[83,40],opposite:o.up},d),this.update=function(){var t=n._speed>30?1:300-10*n._speed,e=n._keys,r=e.length;if(r>0)for(var o=r-1;o>=0;o--){var a=e[o];if(a!==n._snakeDirection&&a!==n._direction[n._snakeDirection].opposite){n._snakeDirection=a,n._keys=e.slice(o+1);break}}var s=n._snake,u=n._direction[n._snakeDirection],c=n._content,h=s[0],f=s[s.length-1],l=h.xIndex+u.x,d=h.yIndex+u.y,p=n.getBox(l,d),y=function(){switch(s.forEach(function(t){delete t.animateX,delete t.animateY}),p.type){case i.empty:f.type=i.empty,n._drop=[s.pop()];break;case i.food:var t=n.eat(p);if(void 0!==t&&!t)return;break;default:return}s.unshift(p),s.forEach(function(t){t.type=i.body}),s[0].type=i.head,s[s.length-1].type=i.footer,n.draw(),n.update()};if(p&&l>=0&&l<c.colums&&d>=0&&d<c.rows){var v=[n.createTween(h,p,t)];if(p.type===i.body||p.type===i.footer)return n.draw(),void n.endGame("红烧蛇肉!");if(p.type===i.wall)return n.draw(),void n.endGame("撞墙!");for(var o=1,m=s.length;o<m;o++){var w=s[o],g=s[o-1];v.push(n.createTween(w,g,t))}requestAnimationFrame(function(){n.updateAnimation(v,y)})}else n.endGame("撞边界啦!")};var r={width:t.offsetWidth,height:t.offsetHeight,sideLength:18};Object.assign(r,e);var s=r.sideLength,u=r.width%s/2,c=r.height%s/2,h=r.width-2*c,f=r.height-2*u;this._content={x:c,y:u,width:h,height:f,rows:h/s,colums:f/s},this._container=t,this._options=r,this.init();var l,d}return t.prototype.init=function(){var t=this,e=this._options,n=document.createElement("canvas"),r=n.getContext("2d"),o=this._content,s=e.sideLength;Object.assign(n,{width:e.width,height:e.height}),this._canvas=n,this._ctx=r,this._container.appendChild(n);for(var u=0;u<o.colums;u++){for(var c=[],h=0;h<o.rows;h++)c.push({x:o.x+u*s,y:o.y+h*s,xIndex:u,yIndex:h,type:i.empty});this._boxes.push(c)}document.addEventListener("keydown",function(e){var n=t._direction,i=e.keyCode,r=t._status;switch(i){case 32:switch(e.preventDefault(),r){case a.pause:t.continue();break;case a.normal:t.pause();break;case a.beforeStart:t.start();break;case a.afterEnd:t.reStart()}}if(r===a.normal)for(var o in n)n[o].keyCode.indexOf(i)>-1&&(e.preventDefault(),t._keys.push(+o))}),this.info("按空格开始!")},t.prototype.getBox=function(t,e){var n=this._boxes,i=n[t];if(i)return i[e]},t.prototype.info=function(t,e){void 0===e&&(e=4);var n=this._ctx,i=this._options,r=this._content;n.save(),n.fillStyle="rgba(0,0,0,.15)",n.fillRect(r.x,r.y,r.width,r.height),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",n.font=i.sideLength*e+"px serif",Array.isArray(t)||(t=[t]),t.forEach(function(t,o){n.fillText(t,i.width/2,i.height/3+i.sideLength*e*1.1*o,r.width-2*i.sideLength)}),n.restore()},t.prototype.draw=function(){var t=this._options,e=this._ctx,n=this._content,i=this._boxTypes,r=t.sideLength;e.clearRect(0,0,t.width,t.height),e.save(),e.strokeStyle="#ddd",e.lineWidth=1;for(var o=0;o<=n.colums;o++){var a=n.x+o*r;e.moveTo(a,n.y),e.lineTo(a,n.y+n.height)}for(var s=0;s<=n.rows;s++){var u=n.y+s*r;e.moveTo(n.x,u),e.lineTo(n.x+n.width,u)}e.stroke(),e.restore(),this._drop.concat(this._wall,this._food,this._snake).forEach(function(t){var n=i[t.type],o=t.animateX?t.animateX:t.x,a=t.animateY?t.animateY:t.y;n.background&&(e.save(),e.fillStyle=n.background,e.fillRect(o,a,r,r),e.restore()),n.render&&(e.save(),n.render(e,o,a,r),e.restore())})},t.prototype.updateAnimation=function(t,e){var n=this,i=function(i){var r=!0;t.forEach(function(t){t.tween.update(i),t.isCompleted||(r=!1)}),n.draw(),r?e():n.updateAnimation(t,e)};this._animation={cb:i,id:requestAnimationFrame(i),tweens:t}},t.prototype.createTween=function(t,e,n){var i={tween:new r.Tween({x:t.x,y:t.y}).to({x:e.x,y:e.y},n).onUpdate(function(){Object.assign(t,{animateX:this.x,animateY:this.y})}).onComplete(function(){i.isCompleted=!0}).start(),isCompleted:!1,startTime:(new Date).getTime(),spend:0};return i},t.prototype.start=function(){var t=this,e=[6,5,4,3].map(function(e){return t.getBox(e,4)});this._snakeDirection=o.right,this._snake=e,this.createFood(),this.draw(),this.update(),this._status=a.normal},t.prototype.reStart=function(){var t=this._boxes;t.forEach(function(t){t.forEach(function(t){t.type!==i.empty&&t.type!==i.wall&&(t.type=i.empty)})}),this.start()},t.prototype.pauseGame=function(t){this._status===a.normal&&(cancelAnimationFrame(this._animation.id),this._animation.tweens.forEach(function(t){t.isCompleted||(t.spend=(new Date).getTime()-t.startTime,t.tween.stop())}),t())},t.prototype.pause=function(){var t=this;this.pauseGame(function(){t.info("Pause"),t._status=a.pause})},t.prototype.continue=function(){var t=this;this._status===a.pause&&(this._animation.tweens.forEach(function(t){t.isCompleted||t.tween.start(t.spend)}),requestAnimationFrame(function(e){t._animation.cb(e),t._status=a.normal}))},t.prototype.eat=function(t){var e=this._snake.length-3,n=this._food;if(this._food=n.splice(n.indexOf(t)),this.createFood(),this._options.scroeCallback)return this._options.scroeCallback.call(this,e)},t.prototype.endGame=function(t){this._status===a.normal&&(this.info([t]),this._status=a.afterEnd)},t.prototype.createFood=function(){var t=this._content,e=Math.floor(Math.random()*t.colums),n=Math.floor(Math.random()*t.rows),r=this.getBox(e,n);return r.type!==i.empty?this.createFood():(r.type=i.food,this._food.push(r),r)},t.prototype.nextLevel=function(t){var e=this;this.pauseGame(function(){e.info(t),e._status=a.afterEnd})},t.prototype.fillWall=function(t){for(var e=this._content,n=0;n<t;){var r=this.getBox(Math.floor(Math.random()*e.colums),Math.floor(Math.random()*e.rows));r.type===i.empty&&(r.type=i.wall,this._wall.push(r),n++)}},Object.defineProperty(t.prototype,"speed",{get:function(){return this._speed},set:function(t){this._speed=t},enumerable:!0,configurable:!0}),t}();e.Snake=s},281:function(t,e,n){(function(n){var i,r,o=o||function(){var t=[];return{getAll:function(){return t},removeAll:function(){t=[]},add:function(e){t.push(e)},remove:function(e){var n=t.indexOf(e);n!==-1&&t.splice(n,1)},update:function(e,n){if(0===t.length)return!1;var i=0;for(e=void 0!==e?e:o.now();i<t.length;)t[i].update(e)||n?i++:t.splice(i,1);return!0}}}();"undefined"==typeof window&&"undefined"!=typeof n?o.now=function(){var t=n.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?o.now=window.performance.now.bind(window.performance):void 0!==Date.now?o.now=Date.now:o.now=function(){return(new Date).getTime()},o.Tween=function(t){var e,n=t,i={},r={},a={},s=1e3,u=0,c=!1,h=!1,f=!1,l=0,d=null,p=o.Easing.Linear.None,y=o.Interpolation.Linear,v=[],m=null,w=!1,g=null,_=null,x=null;this.to=function(t,e){return r=t,void 0!==e&&(s=e),this},this.start=function(t){o.add(this),h=!0,w=!1,d=void 0!==t?t:o.now(),d+=l;for(var e in r){if(r[e]instanceof Array){if(0===r[e].length)continue;r[e]=[n[e]].concat(r[e])}void 0!==n[e]&&(i[e]=n[e],i[e]instanceof Array==!1&&(i[e]*=1),a[e]=i[e]||0)}return this},this.stop=function(){return h?(o.remove(this),h=!1,null!==x&&x.call(n,n),this.stopChainedTweens(),this):this},this.end=function(){return this.update(d+s),this},this.stopChainedTweens=function(){for(var t=0,e=v.length;t<e;t++)v[t].stop()},this.delay=function(t){return l=t,this},this.repeat=function(t){return u=t,this},this.repeatDelay=function(t){return e=t,this},this.yoyo=function(t){return c=t,this},this.easing=function(t){return p=t,this},this.interpolation=function(t){return y=t,this},this.chain=function(){return v=arguments,this},this.onStart=function(t){return m=t,this},this.onUpdate=function(t){return g=t,this},this.onComplete=function(t){return _=t,this},this.onStop=function(t){return x=t,this},this.update=function(t){var o,h,x;if(t<d)return!0;w===!1&&(null!==m&&m.call(n,n),w=!0),h=(t-d)/s,h=h>1?1:h,x=p(h);for(o in r)if(void 0!==i[o]){var b=i[o]||0,k=r[o];k instanceof Array?n[o]=y(k,x):("string"==typeof k&&(k="+"===k.charAt(0)||"-"===k.charAt(0)?b+parseFloat(k):parseFloat(k)),"number"==typeof k&&(n[o]=b+(k-b)*x))}if(null!==g&&g.call(n,x),1===h){if(u>0){isFinite(u)&&u--;for(o in a){if("string"==typeof r[o]&&(a[o]=a[o]+parseFloat(r[o])),c){var M=a[o];a[o]=r[o],r[o]=M}i[o]=a[o]}return c&&(f=!f),d=void 0!==e?t+e:t+l,!0}null!==_&&_.call(n,n);for(var I=0,T=v.length;I<T;I++)v[I].start(d+s);return!1}return!0}},o.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1)}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-o.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*o.Easing.Bounce.In(2*t):.5*o.Easing.Bounce.Out(2*t-1)+.5}}},o.Interpolation={Linear:function(t,e){var n=t.length-1,i=n*e,r=Math.floor(i),a=o.Interpolation.Utils.Linear;return e<0?a(t[0],t[1],i):e>1?a(t[n],t[n-1],n-i):a(t[r],t[r+1>n?n:r+1],i-r)},Bezier:function(t,e){for(var n=0,i=t.length-1,r=Math.pow,a=o.Interpolation.Utils.Bernstein,s=0;s<=i;s++)n+=r(1-e,i-s)*r(e,s)*t[s]*a(i,s);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,r=Math.floor(i),a=o.Interpolation.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(r=Math.floor(i=n*(1+e))),a(t[(r-1+n)%n],t[r],t[(r+1)%n],t[(r+2)%n],i-r)):e<0?t[0]-(a(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(a(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):a(t[r?r-1:0],t[r],t[n<r+1?n:r+1],t[n<r+2?n:r+2],i-r)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=o.Interpolation.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,r){var o=.5*(n-t),a=.5*(i-e),s=r*r,u=r*s;return(2*e-2*n+o+a)*u+(-3*e+3*n-2*o-a)*s+o*r+e}}},function(n){i=[],r=function(){return o}.apply(e,i),!(void 0!==r&&(t.exports=r))}(this)}).call(e,n(274))},288:function(t,e,n){n(18),t.exports=n(113)}},[288]);