(this.webpackJsonpmusicvisualizer=this.webpackJsonpmusicvisualizer||[]).push([[0],{49:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var o=a(1),s=a.n(o),n=a(16),l=a.n(n),u=a(11),r=a(12),i=a(7),c=a(14),m=a(13),g=a(79),d=a(69),h=a(77),p=a(78),y=a(82),v=a(62),C=a(80),b=a(70),f=a(71),k=a(72),M=a(73),E=a(74),j=a(75),O=function(e){return s.a.createElement(C.a,e)},L=function(e){return s.a.createElement(v.a,Object.assign({justify:"evenly",direction:"row"},e),s.a.createElement(O,{icon:e.isLocked?s.a.createElement(b.a,null):s.a.createElement(f.a,null),onClick:e.toggleLock,a11yTitle:e.isLocked?"Unlock Menu":"Lock Menu"}),s.a.createElement(O,{icon:e.isPlay?s.a.createElement(k.a,null):s.a.createElement(M.a,null),onClick:e.togglePlay,a11yTitle:e.isPlay?"Pause":"Resume"}),s.a.createElement(O,{icon:e.isMute?s.a.createElement(E.a,null):s.a.createElement(j.a,null),onClick:e.toggleMute,a11yTitle:e.isMute?"Ummute":"Mute"}))},V=a(28),w=a(81),T=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var o;return Object(u.a)(this,a),(o=t.call(this,e)).state=Object(V.a)({},e.musicControlValues),o.updateVolume=o.updateVolume.bind(Object(i.a)(o)),o.updateRandomness=o.updateRandomness.bind(Object(i.a)(o)),o}return Object(r.a)(a,[{key:"updateVolume",value:function(e){var t=this;this.setState({volume:e.target.value},(function(){return t.props.updateMusic(t.state)}))}},{key:"updateRandomness",value:function(e){var t=this;this.setState({randomness:e.target.value},(function(){return t.props.updateMusic(t.state)}))}},{key:"render",value:function(){return s.a.createElement(y.a,Object.assign({rows:["xsmall","xsmall","medium"],columns:["auto","auto","auto"],areas:[["volume","volume","volume"],["randomness","randomness","medControls2"],["largeControls1","largeControls2","largeControls3"]],gap:"small"},this.props),s.a.createElement(v.a,{gridArea:"volume"},s.a.createElement(w.a,{a11yTitle:"Volume Control",id:"volume",min:0,max:100,step:5,value:this.state.volume,onChange:this.updateVolume})),s.a.createElement(v.a,null,s.a.createElement(w.a,{gridArea:"randomness",a11yTitle:"Randomness Control",id:"randomness",min:0,max:100,step:5,value:this.state.randomness,onChange:this.updateRandomness})))}}]),a}(s.a.Component),S=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var o;return Object(u.a)(this,a),(o=t.call(this,e)).state=Object(V.a)({},e.VisualControlValues),o.updateSpores=o.updateSpores.bind(Object(i.a)(o)),o}return Object(r.a)(a,[{key:"updateSpores",value:function(e){var t=this;this.setState({numSpores:e.target.value},(function(){return t.props.updateVisuals(t.state)}))}},{key:"render",value:function(){return s.a.createElement(y.a,Object.assign({rows:["small","medium","large"],columns:["auto","auto"],areas:[["spores","smallControls2"],["medControls1","medControls1"],["largeControls1","largeControls2"]],gap:"small"},this.props),s.a.createElement(v.a,null,s.a.createElement(w.a,{gridArea:"spores",a11yTitle:"Spores Control",id:"spores",min:0,max:10,step:1,value:this.state.numSpores,onChange:this.updateSpores})))}}]),a}(s.a.Component);var P=function(e){return e.show?s.a.createElement(p.a,Object.assign({},e,{full:!0,plain:!0}),s.a.createElement(y.a,{rows:["xsmall","large","xsmall"],columns:["auto","auto"],areas:[["otherControls","otherControls"],["musicControls","visualControls"],["footer","footer"]],gap:"small"},s.a.createElement(L,Object.assign({gridArea:"otherControls",a11yTitle:"Other Controls"},e)),s.a.createElement(T,{gridArea:"musicControls",a11yTitle:"Music Controls",musicControlValues:e.musicControlValues,updateMusic:e.updateMusicControlValues}),s.a.createElement(S,{gridArea:"visualControls",a11yTitle:"Visual Controls",visualControlValues:e.visualControlValues,updateVisuals:e.updateVisualControlValues}),s.a.createElement(v.a,{gridArea:"footer",a11yTitle:"Footer information",background:"light-2"}))):null},x=function(e){return s.a.createElement(v.a,Object.assign({},e,{fill:!0}))},A=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var o;return Object(u.a)(this,a),(o=t.call(this,e)).state={showMenu:!0,toggleLayerLocked:!1,isPlay:!0,isMute:!1,musicControls:{volume:50,randomness:25},visualControls:{numSpores:3}},o.showToggleLayer=o.showToggleLayer.bind(Object(i.a)(o)),o.toggleLock=o.toggleLock.bind(Object(i.a)(o)),o.togglePlay=o.togglePlay.bind(Object(i.a)(o)),o.toggleMute=o.toggleMute.bind(Object(i.a)(o)),o.onKeyPress=o.onKeyPress.bind(Object(i.a)(o)),o.updateMusic=o.updateMusic.bind(Object(i.a)(o)),o.updateVisuals=o.updateVisuals.bind(Object(i.a)(o)),o}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.mouseTimeoutHide=setTimeout((function(){return e.setState({showMenu:!1})}),1e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.mouseTimeoutHide)}},{key:"showToggleLayer",value:function(){var e=this;clearTimeout(this.mouseTimeoutHide),this.setState({showMenu:!0}),this.state.toggleLayerLocked||(this.mouseTimeoutHide=setTimeout((function(){return e.setState({showMenu:!1})}),1e3))}},{key:"toggleLock",value:function(){this.setState((function(e){return{toggleLayerLocked:!e.toggleLayerLocked}}),this.showToggleLayer)}},{key:"togglePlay",value:function(){this.setState((function(e){return{isPlay:!e.isPlay}}))}},{key:"toggleMute",value:function(){this.setState((function(e){return{isMute:!e.isMute}}))}},{key:"onKeyPress",value:function(e){var t="KeyM",a="Space",o="KeyL",s=!1;e.code===t?(s=!0,this.toggleMute()):e.code===a?(s=!0,this.togglePlay()):e.code===o&&(s=!0,this.toggleLock()),s&&this.showToggleLayer()}},{key:"updateMusic",value:function(e){this.setState({musicControls:e})}},{key:"updateVisuals",value:function(e){this.setState({visualControls:e})}},{key:"render",value:function(){return s.a.createElement(g.a,{full:!0},s.a.createElement(d.a,{target:"document",onTab:this.showToggleLayer,onKeyDown:this.onKeyPress},s.a.createElement(h.a,{onMouseMove:this.showToggleLayer,fill:!0},s.a.createElement(x,null,"Volume: ",this.state.musicControls.volume,s.a.createElement("br",null),"Randomness: ",this.state.musicControls.randomness,s.a.createElement("br",null),"Spores: ",this.state.visualControls.numSpores),s.a.createElement(P,{show:this.state.showMenu,isLocked:this.state.toggleLayerLocked,toggleLock:this.toggleLock,isPlay:this.state.isPlay,togglePlay:this.togglePlay,isMute:this.state.isMute,toggleMute:this.toggleMute,musicControlValues:this.state.musicControls,visualControlValues:this.state.visualControls,updateMusicControlValues:this.updateMusic,updateVisualControlValues:this.updateVisuals}))))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.08cfe187.chunk.js.map