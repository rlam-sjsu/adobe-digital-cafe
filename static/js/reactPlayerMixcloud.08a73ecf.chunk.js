(self.webpackChunkreact_spectrum_adobe_digital_cafe=self.webpackChunkreact_spectrum_adobe_digital_cafe||[]).push([[667],{2732:function(e,t,n){var r,a=n(2122).default,o=n(6690).default,u=n(9728).default,l=n(6115).default,i=n(1655).default,c=n(6389).default,s=n(4704).default,f=Object.create,p=Object.defineProperty,d=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyNames,m=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,h=function(e,t,n,r){if(t&&"object"===typeof t||"function"===typeof t){var a,o=s(y(t));try{var u=function(){var o=a.value;v.call(e,o)||o===n||p(e,o,{get:function(){return t[o]},enumerable:!(r=d(t,o))||r.enumerable})};for(o.s();!(a=o.n()).done;)u()}catch(l){o.e(l)}finally{o.f()}}return e},g=function(e,t,n){return function(e,t,n){t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==typeof t?t+"":t,n),n},b={};!function(e,t){for(var n in t)p(e,n,{get:t[n],enumerable:!0})}(b,{default:function(){return _}}),e.exports=(r=b,h(p({},"__esModule",{value:!0}),r));var k=function(e,t,n){return n=null!=e?f(m(e)):{},h(!t&&e&&e.__esModule?n:p(n,"default",{value:e,enumerable:!0}),e)}(n(2791)),P=n(135),w=n(365),_=function(e){"use strict";i(n,e);var t=c(n);function n(){var e;return o(this,n),e=t.apply(this,arguments),g(l(e),"callPlayer",P.callPlayer),g(l(e),"duration",null),g(l(e),"currentTime",null),g(l(e),"secondsLoaded",null),g(l(e),"mute",(function(){})),g(l(e),"unmute",(function(){})),g(l(e),"ref",(function(t){e.iframe=t})),e}return u(n,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this;(0,P.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then((function(e){t.player=e.PlayerWidget(t.iframe),t.player.ready.then((function(){t.player.events.play.on(t.props.onPlay),t.player.events.pause.on(t.props.onPause),t.player.events.ended.on(t.props.onEnded),t.player.events.error.on(t.props.error),t.player.events.progress.on((function(e,n){t.currentTime=e,t.duration=n})),t.props.onReady()}))}),this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}},{key:"setVolume",value:function(e){}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.config,r=t.match(w.MATCH_URL_MIXCLOUD)[1],o=(0,P.queryString)(a(a({},n.options),{},{feed:"/".concat(r,"/")}));return k.default.createElement("iframe",{key:r,ref:this.ref,style:{width:"100%",height:"100%"},src:"https://www.mixcloud.com/widget/iframe/?".concat(o),frameBorder:"0",allow:"autoplay"})}}]),n}(k.Component);g(_,"displayName","Mixcloud"),g(_,"canPlay",w.canPlay.mixcloud),g(_,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerMixcloud.08a73ecf.chunk.js.map