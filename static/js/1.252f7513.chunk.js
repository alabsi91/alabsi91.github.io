(this["webpackJsonpmy-daily-calories"]=this["webpackJsonpmy-daily-calories"]||[]).push([[1],{93:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n=a(5),r=a.n(n),i=a(7),c=a(12),o=a(8),l=a(9),s=a(11),d=a(10),h=a(0),u=a.n(h),m=(a(94),a(6)),w=a(4),p=a(2),f=a(1),v=u.a.lazy((function(){return a.e(6).then(a.bind(null,91))})),b=u.a.lazy((function(){return Promise.resolve().then(a.bind(null,19))})),g=u.a.lazy((function(){return Promise.resolve().then(a.bind(null,25))})),y=u.a.lazy((function(){return a.e(3).then(a.bind(null,95))})),k=u.a.lazy((function(){return a.e(0).then(a.bind(null,89))})),E=u.a.lazy((function(){return a.e(5).then(a.bind(null,90))})),O="",C=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={searchData:"",favoritesData:""},e.removeDuplicates=function(e,t){var a=[],n={};for(var r in e)n[e[r][t]]=e[r];for(r in n)a.push(n[r]);return a},e.searchOnChangeHandle=function(){var t=document.getElementById("searchBar").value;if(O=t,t.length>0?Object(p.a)("#searchOption").css({display:"none"}):Object(p.a)("#searchOption").removeAttr("style"),0===t.length&&Object(p.a)("#searchNoResults").css({display:"none"}),t.includes("delete")&&window.localStorage.removeItem(t.split(" ")[1]),t.includes("localStorage")&&alert(JSON.stringify(Object.keys(window.localStorage),null,"\t")),t.length>1){var a=f.b.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())})),n=f.b.filter((function(e){return e.brand?-1!==e.brand.toLowerCase().indexOf(t.toLowerCase()):""})),r=e.removeDuplicates([].concat(Object(c.a)(a),Object(c.a)(n)),"id"),i=f.i.favorite.food.map((function(e){return e=Object.assign({},f.b.filter((function(t){return t.id===e}))[0])})),o=i.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())})),l=i.filter((function(e){return e.brand?-1!==e.brand.toLowerCase().indexOf(t.toLowerCase()):""})),s=e.removeDuplicates([].concat(Object(c.a)(o),Object(c.a)(l)),"id");0===r.length?Object(p.a)("#searchNoResults").css({display:"block"}):Object(p.a)("#searchNoResults").removeAttr("style"),e.setState({searchData:r.sort((function(e,t){var a=e.name.toUpperCase(),n=t.name.toUpperCase();return a<n?-1:a>n?1:0})).map((function(e){return u.a.createElement(h.Suspense,{fallback:"",key:100*Math.random()},u.a.createElement(b,{key:e.id,name:e.name,kcal:e.serving?Math.round(e.kcal/100*e.serving[0][1]):e.kcal,serving:e.serving?e.serving[0][0]:"\u0643\u0644 (100) \u063a\u0631\u0627\u0645",id:e.id,brand:e.brand,description:e.description}))})),favoritesData:s.map((function(e){return u.a.createElement(h.Suspense,{fallback:"",key:100*Math.random()},u.a.createElement(b,{key:e.id,name:e.name,kcal:e.serving?Math.round(e.kcal/100*e.serving[0][1]):e.kcal,serving:e.serving?e.serving[0][0]:"\u0643\u0644 (100) \u063a\u0631\u0627\u0645",id:e.id,brand:e.brand,description:e.description}))}))})}else t.length<3&&e.setState({searchData:"",favoritesData:""})},e.introPageTransition=Object(i.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("SearchPage"),a=document.getElementById("searchPageHeader"),Object(p.a)(t).animate({position:"fixed",bottom:"50%",left:"50%",opacity:"0",transform:"translate(-50%, 100%)"},{bottom:"100%",opacity:"1"},{duration:200,cleanUp:!0,transition:"bottom"}),Object(p.a)(a).animate({position:"relative"},{},{duration:200,cleanUp:!0,transition:"none"});case 4:case"end":return e.stop()}}),e)}))),e.introPageFadeTransition=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(p.a)("#SearchPage").animate({opacity:"0"},{opacity:"1"},{transition:"opacity",cleanUp:!0,duration:350});case 1:case"end":return e.stop()}}),e)}))),e.backButtonHandle=function(){return window.history.back()},e.favoriteButtonHandle=function(){Object(m.updateRenderState)(u.a.createElement(h.Suspense,{fallback:"",key:100*Math.random()},u.a.createElement(g,{key:100*Math.random(),doAnimation:!0}))),window.location.pathname.includes("CreateNewMeal")?window.history.pushState("","","/CreateNewMeal/favorites"):window.location.pathname.includes("EditMeal")?window.history.pushState("","","/EditMeal/favorites"):window.history.pushState("","","/favorites#"+window.location.hash.split("#")[1])},e.recentButtonHandle=function(){Object(m.updateRenderState)(u.a.createElement(h.Suspense,{fallback:"",key:100*Math.random()},u.a.createElement(y,{key:100*Math.random(),doAnimation:!0}))),window.location.pathname.includes("CreateNewMeal")?window.history.pushState("","","/CreateNewMeal/recentlyAdded"):window.location.pathname.includes("EditMeal")?window.history.pushState("","","/EditMeal/recentlyAdded"):window.history.pushState("","","/recentlyAdded#"+window.location.hash.split("#")[1])},e.categoriesButtonHandle=function(){Object(m.updateRenderState)(u.a.createElement(h.Suspense,{fallback:"",key:100*Math.random()},u.a.createElement(v,{key:100*Math.random()}))),window.location.pathname.includes("CreateNewMeal")?window.history.pushState("","","/CreateNewMeal/categoriesList"):window.location.pathname.includes("EditMeal")?window.history.pushState("","","/EditMeal/categoriesList"):window.history.pushState("","","/categoriesList"+window.location.hash)},e.creatNewMealHandle=function(){f.i.favorite.tmpMeal.mealName="",f.i.favorite.tmpMeal.mealContent=[],Object(m.updateRenderState)(u.a.createElement(h.Suspense,{fallback:"",key:100*Math.random()},u.a.createElement(k,{key:100*Math.random(),doAnimation:!0}))),window.history.pushState("","","/CreateNewMeal")},e.creatNewFoodHandle=function(){Object(m.updateRenderState)(u.a.createElement(h.Suspense,{fallback:"",key:100*Math.random()},u.a.createElement(E,{key:100*Math.random()}))),window.history.pushState("","","/CreateNewFood")},e.checkHash=function(){var e;if(window.location.pathname.includes("CreateNewMeal")||window.location.pathname.includes("EditMeal"))e="\u0625\u0636\u0627\u0641\u0629 \u0637\u0639\u0627\u0645 \u0625\u0644\u0649 \u0627\u0644\u0648\u062c\u0628\u0629";else switch(window.location.hash.split("#")[1]){case"breakfast":e="\u0627\u0644\u0641\u0637\u0648\u0631";break;case"lunch":e="\u0627\u0644\u063a\u062f\u0627\u0621";break;case"dinner":e="\u0627\u0644\u0639\u0634\u0627\u0621";break;case"snacks":e="\u0648\u062c\u0628\u0629 \u062e\u0641\u064a\u0641\u0629"}return e},e.toggleCreateNew=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("none"!==Object(p.a)("#createNewBG").getStyle("display")){e.next=10;break}return Object(p.a)("#createNewBG").css({display:"block"}),Object(p.a)("#createNewContainer").css({display:"block"}),e.next=6,Object(w.f)(20);case 6:Object(p.a)("#createNewBG").css({opacity:1}),Object(p.a)("#createNewContainer").css({opacity:1}),e.next=16;break;case 10:return Object(p.a)("#createNewBG").css({opacity:0}),Object(p.a)("#createNewContainer").css({opacity:0}),e.next=14,Object(w.f)(350);case 14:Object(p.a)("#createNewBG").removeAttr("style"),Object(p.a)("#createNewContainer").removeAttr("style");case 16:case"end":return e.stop()}}),e)}))),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.doAnimation?this.introPageTransition():this.introPageFadeTransition(),Object(p.a)("#searchBar").val=O,this.searchOnChangeHandle(),window.addEventListener("popstate",(function(){"/"!==window.location.pathname&&"/EditMeal"!==window.location.pathname&&"/CreateNewMeal"!==window.location.pathname||(O="")}),{once:!0})}},{key:"render",value:function(){return u.a.createElement(h.Fragment,null,u.a.createElement("div",{id:"createNewBG",onClick:this.toggleCreateNew}),u.a.createElement("div",{id:"createNewContainer"},u.a.createElement("p",{onClick:this.creatNewFoodHandle},"\u0625\u0646\u0640\u0640\u0640\u0634\u0640\u0640\u0640\u0627\u0621 \u0637\u0640\u0640\u0640\u0639\u0640\u0640\u0640\u0627\u0645 \u062c\u0640\u0640\u0640\u062f\u064a\u0640\u0640\u0640\u062f"),u.a.createElement("p",{onClick:this.creatNewMealHandle},"\u0625\u0646\u0640\u0640\u0640\u0634\u0640\u0640\u0640\u0627\u0621 \u0648\u062c\u0640\u0640\u0640\u0628\u0640\u0640\u0640\u0629 \u062c\u0640\u0640\u0640\u062f\u064a\u0640\u0640\u0640\u062f\u0629")),u.a.createElement("div",{id:"SearchPage"},u.a.createElement("header",{id:"searchPageHeader"},u.a.createElement("div",{id:"searchPageHeaderTopContainer"},u.a.createElement("p",{id:"searchPageHeaderTitle"},this.checkHash()),u.a.createElement("svg",{id:"searchPageBack",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",onClick:this.backButtonHandle},u.a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))),u.a.createElement("input",{id:"searchBar",placeholder:"\u0628\u062d\u062b",autoComplete:"off",type:"search",onChange:this.searchOnChangeHandle})),u.a.createElement("div",{id:"searchResultsfavorite"},u.a.createElement("p",{className:"searchResultsTitles"},this.state.favoritesData.length>0?"\u0627\u0644\u0645\u0641\u0636\u0644\u0629":""),this.state.favoritesData),u.a.createElement("div",{id:"searchResults"},u.a.createElement("p",{className:"searchResultsTitles"},this.state.searchData.length>0?"\u0627\u0644\u0646\u062a\u0627\u0626\u062c":""),this.state.searchData),u.a.createElement("p",{id:"searchNoResults"},"\u0644\u0627 \u064a\u0648\u062c\u062f \u0646\u062a\u0627\u0626\u062c"),u.a.createElement("div",{id:"searchOption"},u.a.createElement("p",{onClick:this.categoriesButtonHandle},u.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M21.639 14l-1.333 8h-16.612l-1.333-8h19.278zm2.361-2h-24l2 12h20l2-12zm-19.226-2l2.667-8h9.117l2.667 8h2.107l-3.332-10h-12l-3.333 10h2.107zm3.248-5l-.333 1h8.621l-.333-1h-7.955zm-.667 2l-.333 1h9.955l-.333-1h-9.289zm10.29 3l-.333-1h-10.624l-.333 1h11.29zm-8.956-7l-.333 1h7.288l-.334-1h-6.621zm6.311 13h-6v2h6v-2z"})),"\u0627\u0644\u0623\u0635\u0646\u0627\u0641"),u.a.createElement("p",{onClick:this.recentButtonHandle},u.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M11 6v8h7v-2h-5v-6h-2zm-8.4 9.397l-1.799.906c-.302-.784-.521-1.607-.652-2.46l1.998-.159c.1.59.253 1.162.453 1.713zm4.393 7.501l.669-1.899c-.549-.265-1.068-.577-1.555-.933l-1.413 1.443c.708.545 1.478 1.012 2.299 1.389zm-5.319-4.795c.44.741.956 1.43 1.539 2.058l1.404-1.433c-.431-.471-.814-.982-1.149-1.528l-1.794.903zm10.322-18.103c-2.79 0-5.349.964-7.385 2.562l-2.183-2.183-1.356 7.013 7.015-1.354-2.05-2.049c1.666-1.245 3.724-1.989 5.959-1.989 5.516 0 10.003 4.486 10.003 10s-4.487 10-10.003 10c-.848 0-1.668-.118-2.455-.317l-.665 1.894c.996.267 2.039.423 3.12.423 6.629 0 12.004-5.373 12.004-12s-5.375-12-12.004-12zm-11.996 11.849l2.015-.161c.027-.703.125-1.386.288-2.047h-2.076c-.142.714-.217 1.453-.227 2.208z"})),"\u0627\u0644\u0645\u0636\u0627\u0641\u0629 \u0645\u0624\u062e\u0631\u0627\u064b"),u.a.createElement("p",{onClick:this.favoriteButtonHandle},u.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"})),"\u0627\u0644\u0645\u0641\u0636\u0644\u0629"),u.a.createElement("p",{id:"createNew",onClick:this.toggleCreateNew,style:{display:window.location.pathname.includes("CreateNewMeal")||window.location.pathname.includes("EditMeal")?"none":"grid"}},u.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"})),"\u0625\u0646\u0634\u0627\u0621 \u062c\u062f\u064a\u062f"))))}}]),a}(h.Component)},94:function(e,t,a){}}]);
//# sourceMappingURL=1.252f7513.chunk.js.map