(this["webpackJsonplifesum-app"]=this["webpackJsonplifesum-app"]||[]).push([[5],{38:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},58:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(38),r=a(4),c=a(6),i=a.n(c),s=a(12),o=a(7),l=a(8),u=a(10),d=a(9),m=a(0),p=a.n(m),b=a(3),h=a(15),f=a(2),v=p.a.lazy((function(){return a.e(0).then(a.bind(null,37))})),w="",y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];return(e=t.call.apply(t,[this].concat(l))).state={meal:w.length>0?w:window.location.hash.split("#")[1]?window.location.hash.split("#")[1]:"breakfast"},e.introPageFadeTransition=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=document.getElementById("recentPage")).style.opacity="0",t.style.transition="opacity 350ms",e.next=5,Object(f.c)(20);case 5:return t.style.opacity="1",e.next=8,Object(f.c)(350);case 8:t.removeAttribute("style");case 9:case"end":return e.stop()}}),e)}))),e.introPageTransition=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("recentPage"),a=document.getElementById("recentHeader"),t.style.cssText="position: fixed; bottom: 50%; left: 50%; opacity: 0; transform: translate(-50%, 100%); transition: bottom 200ms",a.style.position="relative",e.next=6,Object(f.c)(10);case 6:return t.style.bottom="100%",t.style.opacity="1",e.next=10,Object(f.c)(200);case 10:t.removeAttribute("style"),a.removeAttribute("style");case 12:case"end":return e.stop()}}),e)}))),e.getRecentMeal=function(e,t){var a=b.d.diary.filter((function(e){return e.date===Object(h.a)(t)}))[0];if(a&&a[e])return a[e].map((function(e){return e=Object.assign({},b.b.filter((function(t){return t.id===e[0]}))[0],{value:e[1],input:e[2]})})).map((function(e){return p.a.createElement(m.Suspense,{fallback:"",key:100*Math.random()},p.a.createElement(v,{key:e.id+1e3*Math.random(),name:e.name,kcal:Math.round(e.kcal/100*(e.value*e.input)),serving:1===e.value?e.input+" \u063a\u0631\u0627\u0645 ":e.input+"  "+e.serving.filter((function(t){return t[1]===e.value}))[0][0],id:e.id,brand:e.brand,description:e.description,value:e.value,input:e.input}))}))},e.addAllButtonHandle=function(t,a,c){var i,s=b.d.diary.filter((function(e){return e.date===Object(h.a)(c)}))[0];s&&s[a]&&(i=Object(r.a)(s[a]));var o,l=b.d.diary.filter((function(e){return e.date===Object(h.a)(h.b)}))[0];if(window.location.pathname.includes("CreateNewMeal")||window.location.pathname.includes("EditMeal"))(o=b.d.favorite.tmpMeal.mealContent).push.apply(o,Object(r.a)(i)),e.showToast("\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0639\u0644\u0649 \u0627\u0644\u0648\u062c\u0628\u0629");else if(l){var u;l[t]?(u=l[t]).push.apply(u,Object(r.a)(i)):l[t]=i,e.showToast("\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0639\u0644\u0649 "+e.checkHash(t))}else e.showToast("\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0639\u0644\u0649 "+e.checkHash(t)),b.d.diary.push(Object(n.a)({date:Object(h.a)(h.b)},t,i))},e.renderRecent=function(){for(var t=[],a=function(a){e.getRecentMeal(e.state.meal,a)&&t.push([p.a.createElement(m.Fragment,{key:1e3*Math.random()},p.a.createElement("p",{id:"recentDateText"},Object(h.a)(a)),p.a.createElement("p",{className:"recentAddAll",onClick:function(){return e.addAllButtonHandle(window.location.hash.split("#")[1],e.state.meal,a)}},"\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0643\u0644 \u2193"),p.a.createElement("div",null,e.getRecentMeal(e.state.meal,a)))])},n=0;n>-8;n--)a(n);return t},e.selectMealHandle=function(t){e.setState({meal:t.target.value}),w=t.target.value},e.backButtonHandle=function(){return window.history.back()},e.checkHash=function(e){var t;switch(e){case"breakfast":t="\u0627\u0644\u0641\u0637\u0648\u0631";break;case"lunch":t="\u0627\u0644\u063a\u062f\u0627\u0621";break;case"dinner":t="\u0627\u0644\u0639\u0634\u0627\u0621";break;case"snacks":t="\u0648\u062c\u0628\u0629 \u062e\u0641\u064a\u0641\u0629"}return t},e.showToast=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(f.b)("#recentToast").text(t).css("display","block"),e.next=3,Object(f.c)(20);case 3:return Object(f.b)("#recentToast").css("opacity",1).css("bottom","75px"),e.next=6,Object(f.c)(2e3);case 6:return Object(f.b)("#recentToast").css("opacity",0).css("bottom","0px"),e.next=9,Object(f.c)(350);case 9:Object(f.b)("#recentToast").removeAttr("style");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.doAnimation?this.introPageTransition():this.introPageFadeTransition(),window.addEventListener("popstate",(function(){("/"===window.location.pathname||window.location.pathname.includes("search"))&&(w="")}))}},{key:"render",value:function(){return p.a.createElement("div",{id:"recentPage"},p.a.createElement("p",{id:"recentToast"}),p.a.createElement("header",{id:"recentHeader"},p.a.createElement("p",{id:"recentHeaderTitle"},"\u0627\u0644\u0645\u0636\u0627\u0641\u0629 \u0645\u0624\u062e\u0631\u0627\u064b"),p.a.createElement("svg",{id:"recentBack",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",onClick:this.backButtonHandle},p.a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))),p.a.createElement("select",{id:"recentSelectMeal",value:this.state.meal,onChange:this.selectMealHandle},p.a.createElement("option",{className:"itemViewerSelectMealItems",value:"breakfast"},"\u0627\u0644\u0641\u0637\u0648\u0631"),p.a.createElement("option",{className:"itemViewerSelectMealItems",value:"lunch"},"\u0627\u0644\u063a\u062f\u0627\u0621"),p.a.createElement("option",{className:"itemViewerSelectMealItems",value:"dinner"},"\u0627\u0644\u0639\u0634\u0627\u0621"),p.a.createElement("option",{className:"itemViewerSelectMealItems",value:"snacks"},"\u0648\u062c\u0628\u0629 \u062e\u0641\u064a\u0641\u0629")),p.a.createElement("p",{id:"recentNoResults",style:{display:this.renderRecent().length>0?"none":"block"}},"\u0644\u0627 \u064a\u0648\u062c\u062f \u0639\u0646\u0627\u0635\u0631 \u0645\u0636\u0627\u0641\u0629 \u0641\u064a \u0622\u062e\u0631 \u0627\u0633\u0628\u0648\u0639 \u0639\u0644\u0649 ",this.checkHash(this.state.meal)),p.a.createElement("div",null,this.renderRecent()))}}]),a}(m.Component)}}]);
//# sourceMappingURL=5.2ac15e03.chunk.js.map