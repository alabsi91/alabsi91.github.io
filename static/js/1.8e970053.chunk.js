(this["webpackJsonplifesum-app"]=this["webpackJsonplifesum-app"]||[]).push([[1],{33:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(7),o=a.n(n),r=a(13),i=a(4),s=a(8),c=a(9),l=a(11),d=a(10),p=a(0),b=a.n(p),f=a(2),m=a(3),v=a(23),u=a(12),h=b.a.lazy((function(){return a.e(0).then(a.bind(null,37))})),g=b.a.lazy((function(){return a.e(16).then(a.bind(null,67))}));u.a.registerPlugin(v.a);var w=!1,y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={alphabet:w},e.renderFoodData=function(e){var t=Object(i.a)(m.d.favorite.food.map((function(e){return e=Object.assign({},m.b.filter((function(t){return t.id===e}))[0])})));return(t=e?t.sort((function(e,t){var a=e.name.toUpperCase(),n=t.name.toUpperCase();return a<n?-1:a>n?1:0})):t).map((function(e){return b.a.createElement(p.Suspense,{fallback:""},b.a.createElement(h,{key:e.id,name:e.name,kcal:e.serving?Math.round(e.kcal/100*e.serving[0][1]):e.kcal,serving:e.serving?e.serving[0][0]:"\u0643\u0644 (100) \u063a\u0631\u0627\u0645",id:e.id,brand:e.brand,description:e.description}))}))},e.renderMealData=function(e){var t=[],a=Object(i.a)(m.d.favorite.meals);for(var n in a=e?a.sort((function(e,t){var a=e.mealName.toUpperCase(),n=t.mealName.toUpperCase();return a<n?-1:a>n?1:0})):m.d.favorite.meals){var o=a[n].content.map((function(e){return e=Object.assign({},m.b.filter((function(t){return t.id===e[0]}))[0],{value:e[1],input:e[2]})})).map((function(e){return e.kcal*(e.value*e.input)/100})).reduce((function(e,t){return e+t}));t.push(b.a.createElement(p.Suspense,{fallback:""},b.a.createElement(g,{key:1e3*Math.random(),name:a[n].mealName,kcal:o,ingredients:a[n].content.length})))}return t},e.switchTabs=function(){var t=Object(r.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.target.style.borderBottom="solid 5px white",!a.target.nextElementSibling||!window.location.hash.includes("#Meals")){t.next=13;break}return Object(f.b)(".searchItemsContainer").removeAttr("style"),Object(f.b)("#favoritePageMealsTab").css("border-bottom","solid 0px white"),window.scrollTo({top:0}),e.scrollHandle("right"),0===e.renderFoodData().length?Object(f.b)("#favoritePageSort").css("display","none"):Object(f.b)("#favoritePageSort").css("display","block"),window.location.hash.includes("Meals")&&6===window.location.hash.length?window.history.replaceState("","","/favorites"):window.history.replaceState("","","/favorites#"+window.location.hash.split("#")[2]),t.next=10,Object(f.c)(200);case 10:Object(f.b)(".mealCardContainer").css("display","none"),t.next=23;break;case 13:if(!a.target.previousElementSibling||window.location.hash.includes("#Meals")){t.next=23;break}return Object(f.b)(".mealCardContainer").removeAttr("style"),Object(f.b)("#favoritePageFoodsTab").css("border-bottom","solid 0px white"),window.scrollTo({top:0}),e.scrollHandle("left"),0===e.renderMealData().length?Object(f.b)("#favoritePageSort").css("display","none"):Object(f.b)("#favoritePageSort").css("display","block"),0===window.location.hash.length?window.history.replaceState("","","/favorites#Meals"):window.history.replaceState("","","/favorites#Meals#"+window.location.hash.split("#")[1]),t.next=22,Object(f.c)(200);case 22:Object(f.b)(".searchItemsContainer").css("display","none");case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.scrollHandle=function(e){var t=document.getElementById("favoritePageBodyContainer"),a=parseFloat(window.getComputedStyle(t).getPropertyValue("width"))+7,n=t.scrollLeft,o=0;window.requestAnimationFrame((function r(){o=Math.min(o+=60,a),t.scrollTo({left:"left"===e?n-o:n+o}),o<a&&window.requestAnimationFrame(r)}))},e.introPageTransition=Object(r.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("favoritePageBack").removeAttribute("style"),t=document.getElementById("favoritePage"),a=document.getElementById("favoritePageHeader"),t.style.cssText="position: fixed; bottom: 50%; left: 50%; opacity: 0; transform: translate(-50%, 100%); transition: bottom 200ms",a.style.position="relative",e.next=7,Object(f.c)(10);case 7:return t.style.bottom="100%",t.style.opacity="1",e.next=11,Object(f.c)(200);case 11:t.removeAttribute("style"),a.removeAttribute("style");case 13:case"end":return e.stop()}}),e)}))),e.introPageFadeTransition=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/favorites"===window.location.pathname&&0===window.location.hash.length&&Object(f.b)("#favoritePageBack").css("display","none"),(t=document.getElementById("favoritePage")).style.opacity="0",t.style.transition="opacity 350ms",e.next=6,Object(f.c)(20);case 6:return t.style.opacity="1",e.next=9,Object(f.c)(350);case 9:t.removeAttribute("style");case 10:case"end":return e.stop()}}),e)}))),e.backButtonHandle=function(){return window.history.back()},e.sortHandle=function(){var e=Object(f.b)("#favoritePagePopUp").getStyle("transform").includes("1");Object(f.b)(".mealPopUp").css("transform","scale(0)"),e?Object(f.b)("#favoritePagePopUp").css("transform","scale(0)"):(Object(f.b)("#favoritePagePopUp").css("transform","scale(1)"),document.addEventListener("click",(function(e){"favoritePagePopUpItems"!==e.target.className&&Object(f.b)("#favoritePagePopUp").css("transform","scale(0)")}),{once:!0}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.doAnimation?this.introPageTransition():this.introPageFadeTransition(),window.scrollTo({top:0}),2===this.props.page||window.location.hash.includes("#Meals")?(Object(f.b)(".searchItemsContainer").css("display","none"),Object(f.b)("#favoritePageMealsTab").css("border-bottom","solid 5px white"),Object(f.b)("#favoritePageFoodsTab").css("border-bottom","solid 0px white"),u.a.to("#favoritePageBodyContainer",{duration:0,scrollTo:"#favoritePageBodymeal"}),0===this.renderMealData().length?Object(f.b)("#favoritePageSort").css("display","none"):Object(f.b)("#favoritePageSort").css("display","block"),2===this.props.page&&window.history.replaceState("","","/favorites#Meals")):(Object(f.b)(".mealCardContainer").css("display","none"),0===this.renderFoodData().length?Object(f.b)("#favoritePageSort").css("display","none"):Object(f.b)("#favoritePageSort").css("display","block"))}},{key:"render",value:function(){var e=this;return b.a.createElement("div",{id:"favoritePage"},b.a.createElement("header",{id:"favoritePageHeader"},b.a.createElement("div",{id:"favoritePageHeaderContainer"},b.a.createElement("p",{id:"favoritePageTitle"},"\u0627\u0644\u0645\u0641\u0636\u0644\u0629"),b.a.createElement("svg",{id:"favoritePageBack",onClick:this.backButtonHandle,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},b.a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))),b.a.createElement("div",{id:"favoritePageTabsContainer"},b.a.createElement("p",{id:"favoritePageFoodsTab",className:"favoritePageTabs",onClick:this.switchTabs},"\u0627\u0644\u0637\u0639\u0627\u0645"),b.a.createElement("p",{id:"favoritePageMealsTab",className:"favoritePageTabs",onClick:this.switchTabs,style:{display:window.location.pathname.includes("CreateNewMeal")||window.location.pathname.includes("EditMeal")?"none":"inline-block"}},"\u0627\u0644\u0648\u062c\u0628\u0627\u062a")),b.a.createElement("svg",{id:"favoritePageSort",onClick:this.sortHandle,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},b.a.createElement("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"})),b.a.createElement("div",{id:"favoritePagePopUp"},b.a.createElement("p",{className:"favoritePagePopUpItems",id:"favoritePagePopUpAB",onClick:function(){w=!0,e.setState({alphabet:w}),Object(f.b)("#favoritePagePopUp").css("transform","scale(0)")}},"\u062a\u0631\u062a\u064a\u0628 \u062d\u0633\u0628 \u0627\u0644\u0623\u0628\u062c\u062f\u064a\u0629"),b.a.createElement("p",{className:"favoritePagePopUpItems",id:"favoritePagePopUpNew",onClick:function(){w=!1,e.setState({alphabet:w}),Object(f.b)("#favoritePagePopUp").css("transform","scale(0)")}},"\u062a\u0631\u062a\u064a\u0628 \u062d\u0633\u0628 \u0627\u0644\u0623\u062d\u062f\u062b"))),b.a.createElement("div",{id:"favoritePageBodyContainer"},b.a.createElement("div",{id:"favoritePageBodyFood"},b.a.createElement("p",{className:"favoritePageIsEmpty",style:{display:0===this.renderFoodData().length?"block":"none"}},0===this.renderFoodData().length?"\u0644\u0627 \u064a\u0648\u062c\u062f \u0637\u0639\u0627\u0645 \u0641\u064a \u0627\u0644\u0645\u0641\u0636\u0644\u0629":""),this.state.alphabet?this.renderFoodData(!0):this.renderFoodData()),b.a.createElement("div",{id:"favoritePageBodymeal"},b.a.createElement("p",{className:"favoritePageIsEmpty",style:{display:0===this.renderMealData().length?"block":"none"}},0===this.renderMealData().length?"\u0644\u0627 \u064a\u0648\u062c\u062f \u0648\u062c\u0628\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0641\u0636\u0644\u0629":""),this.state.alphabet?this.renderMealData(!0):this.renderMealData(!1))))}}]),a}(p.Component)}}]);
//# sourceMappingURL=1.8e970053.chunk.js.map