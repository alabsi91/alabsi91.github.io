(this["webpackJsonplifesum-app"]=this["webpackJsonplifesum-app"]||[]).push([[2],{62:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var n,r=a(6),o=a(4),i=a.n(o),l=a(7),c=a(8),s=a(9),u=a(11),d=a(10),m=a(0),p=a.n(m),M=a(2),f=a(3),b=a(5),C=a(12),N=p.a.lazy((function(){return a.e(1).then(a.bind(null,56))})),h=p.a.lazy((function(){return a.e(0).then(a.bind(null,60))})),v=p.a.lazy((function(){return a.e(3).then(a.bind(null,65))})),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];return(e=t.call.apply(t,[this].concat(s))).getData=function(){var e=f.i.favorite.tmpMeal.mealContent;return e.length>0?e.map((function(e){return e=Object.assign({},f.b.filter((function(t){return t.id===e[0]}))[0],{value:e[1],input:e[2]})})):void 0},e.calcNutrition=function(t){var a=e.getData();return a?a.map((function(e){return e[t]*(e.value*e.input)/100})).reduce((function(e,t){return e+t})):0},e.renderMealCards=function(){var t=e.getData();if(t)return t.map((function(e){return p.a.createElement(m.Suspense,{fallback:"",key:100*Math.random()},p.a.createElement(h,{key:e.id+1e3*Math.random(),name:e.name,kcal:Math.round(e.kcal/100*(e.value*e.input)),serving:1===e.value?e.input+" \u063a\u0631\u0627\u0645 ":e.input+"  "+e.serving.filter((function(t){return t[1]===e.value}))[0][0],id:e.id,brand:e.brand,description:e.description,value:e.value,input:e.input}))}))},e.introPageTransition=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("CreateMealPage"),a=document.getElementById("CreateMealHeader"),t.style.cssText="position: fixed; bottom: 50%; left: 50%; opacity: 0; transform: translate(-50%, 100%); transition: bottom 200ms",a.style.position="relative",e.next=6,Object(M.e)(10);case 6:return t.style.bottom="100%",t.style.opacity="1",e.next=10,Object(M.e)(200);case 10:t.removeAttribute("style"),a.removeAttribute("style");case 12:case"end":return e.stop()}}),e)}))),e.introPageFadeTransition=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=document.getElementById("CreateMealPage")).style.opacity="0",t.style.transition="opacity 350ms",e.next=5,Object(M.e)(20);case 5:return t.style.opacity="1",e.next=8,Object(M.e)(350);case 8:t.removeAttribute("style");case 9:case"end":return e.stop()}}),e)}))),e.proteinPercent=function(){return Math.min(Math.max(Math.round(4*e.calcNutrition("protein")/e.calcNutrition("kcal")*100),0),100)},e.fatPercent=function(){return Math.min(Math.max(Math.round(9*e.calcNutrition("fat")/e.calcNutrition("kcal")*100),0),100)},e.carbPercent=function(){return Math.min(Math.max(Math.round(4*e.calcNutrition("carb")/e.calcNutrition("kcal")*100),0),100)},e.CalcCarbPercent=function(){return e.carbPercent()>15?Math.min(Math.max(100-(e.fatPercent()+e.proteinPercent()),0),100):e.carbPercent()},e.addProgressBars=function(){Object(M.a)("#CreateMealNutritionInfoCrabsPercent",{input:e.CalcCarbPercent(),R:40,width:5,fillColor:"none",progressColor:"var(--text-kinda-black)",textColor:"var(--text-kinda-black)",backgroundColor:"var(--background-gray)",lineCap:"none"}),Object(M.a)("#CreateMealNutritionInfoProteinPercent",{input:e.proteinPercent(),R:40,width:5,fillColor:"none",progressColor:"var(--text-kinda-black)",textColor:"var(--text-kinda-black)",backgroundColor:"var(--background-gray)",lineCap:"none"}),Object(M.a)("#CreateMealNutritionInfoFatPercent",{input:e.fatPercent(),R:40,width:5,fillColor:"none",progressColor:"var(--text-kinda-black)",textColor:"var(--text-kinda-black)",backgroundColor:"var(--background-gray)",lineCap:"none"});var t=document.createElement("p"),a=document.createElement("p"),n=document.createElement("p");t.classList.add("CreateMealPercentTitles"),a.classList.add("CreateMealPercentTitles"),n.classList.add("CreateMealPercentTitles"),t.innerHTML="\u0627\u0644\u0643\u0631\u0628\u0648\u0647\u064a\u062f\u0631\u0627\u062a",a.innerHTML="\u0627\u0644\u0628\u0631\u0648\u062a\u064a\u0646",n.innerHTML="\u0627\u0644\u062f\u0647\u0648\u0646",document.getElementById("CreateMealNutritionInfoCrabsPercent").append(t),document.getElementById("CreateMealNutritionInfoProteinPercent").append(a),document.getElementById("CreateMealNutritionInfoFatPercent").append(n)},e.backButtonHandle=function(){return window.history.back()},e.createMealButtonHandle=function(){var t=[f.i.favorite.tmpMeal.mealName.toLowerCase(),f.i.favorite.tmpMeal.mealContent],a=t[0],n=t[1],o=!1;for(var i in f.i.favorite.meals)f.i.favorite.meals[i].mealName.toLowerCase()===a&&(o=!0);a.length>0&&n.length>0&&!o?(f.i.favorite.meals.unshift({mealName:a.toString(),content:Object(r.a)(n)}),f.i.favorite.tmpMeal.mealName="",f.i.favorite.tmpMeal.mealContent=[],setTimeout((function(){window.history.pushState("","","/favorites"),Object(b.updateRenderState)([p.a.createElement(m.Suspense,{fallback:"",key:100*Math.random()},p.a.createElement(N,{key:100*Math.random(),page:2})),p.a.createElement(C.a,{key:100*Math.random()})])}),100),e.props.goBackOnce?window.history.go(-1):window.history.go(-2)):o?(Object(M.b)("#CreateMealNameInputContainer").css("border-color","red"),e.showToast("\u0647\u0630\u0627 \u0627\u0644\u0627\u0633\u0645 \u0645\u0648\u062c\u0648\u062f \u0628\u0627\u0644\u0641\u0639\u0644"),window.scrollTo({top:0})):0===a.length?(Object(M.b)("#CreateMealNameInputContainer").css("border-color","red"),e.showToast("\u0627\u062f\u062e\u0644 \u0627\u0633\u0645 \u0627\u0644\u0648\u062c\u0628\u0629"),window.scrollTo({top:0})):0===n.length&&(Object(M.b)("#addFoodToMeal").css("border-color","red"),e.showToast("\u0642\u0645 \u0628\u0625\u0636\u0627\u0641\u0629 \u0637\u0639\u0627\u0645 \u0625\u0644\u0649 \u0627\u0644\u0648\u062c\u0628\u0629")),Object(f.f)()},e.createMealEditModeButtonHandle=function(){var t=[f.i.favorite.tmpMeal.mealName.toLowerCase(),e.props.oldName?e.props.oldName.toLowerCase():n.toLowerCase(),f.i.favorite.tmpMeal.mealContent,f.i.favorite.meals],a=t[0],o=t[1],i=t[2],l=t[3],c=!1;for(var s in l)l[s].mealName.toLowerCase()===a&&l[s].mealName.toLowerCase()!==o&&(c=!0);if(a.length>0&&i.length>0&&!c){var u=l.indexOf(l.filter((function(e){return e.mealName===o}))[0]);l[u].content=Object(r.a)(i),l[u].mealName=a,window.history.go(-2)}else c?(Object(M.b)("#CreateMealNameInputContainer").css("border-color","red"),e.showToast("\u0647\u0630\u0627 \u0627\u0644\u0627\u0633\u0645 \u0645\u0648\u062c\u0648\u062f \u0628\u0627\u0644\u0641\u0639\u0644"),window.scrollTo({top:0})):0===a.length?(Object(M.b)("#CreateMealNameInputContainer").css("border-color","red"),e.showToast("\u0627\u062f\u062e\u0644 \u0627\u0633\u0645 \u0627\u0644\u0648\u062c\u0628\u0629"),window.scrollTo({top:0})):0===i.length&&(Object(M.b)("#addFoodToMeal").css("border","solid 1px red"),e.showToast("\u0642\u0645 \u0628\u0625\u0636\u0627\u0641\u0629 \u0637\u0639\u0627\u0645 \u0625\u0644\u0649 \u0627\u0644\u0648\u062c\u0628\u0629"));Object(f.f)()},e.addFoodToMealHandle=function(){Object(b.updateRenderState)(p.a.createElement(m.Suspense,{fallback:"",key:100*Math.random()},p.a.createElement(v,{key:100*Math.random(),doAnimation:!0}))),e.props.editMode?window.history.pushState("","","/EditMeal/search"):window.history.pushState("","","/CreateNewMeal/search")},e.mealNameInputOnChangeHandle=function(e){return f.i.favorite.tmpMeal.mealName=e.target.value},e.showToast=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(M.b)("#CreateMealToast").text(t).css("display","block"),e.next=3,Object(M.e)(20);case 3:return Object(M.b)("#CreateMealToast").css("opacity",1).css("bottom","75px"),e.next=6,Object(M.e)(2e3);case 6:return Object(M.b)("#CreateMealToast").css("opacity",0).css("bottom","0px"),e.next=9,Object(M.e)(350);case 9:Object(M.b)("#CreateMealToast").removeAttr("style");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.doAnimation?this.introPageTransition():this.introPageFadeTransition(),this.props.oldName&&(n=this.props.oldName),this.addProgressBars(),Object(M.b)("#CreateMealNameInputContainer input").node.value=f.i.favorite.tmpMeal.mealName}},{key:"render",value:function(){return p.a.createElement("div",{id:"CreateMealPage"},p.a.createElement("p",{id:"CreateMealToast"}),p.a.createElement("header",{id:"CreateMealHeader"},p.a.createElement("svg",{id:"CreateMealBack",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",onClick:this.backButtonHandle},p.a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})),p.a.createElement("p",{id:"CreateMealHeaderTitle"},this.props.editMode?"\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0648\u062c\u0628\u0629":"\u0625\u0646\u0634\u0627\u0621 \u0648\u062c\u0628\u0629 \u062c\u062f\u064a\u062f\u0629")),p.a.createElement("div",{id:"CreateMealNameInput"},p.a.createElement("div",{id:"CreateMealNameInputContainer"},p.a.createElement("p",null,"\u0627\u062f\u062e\u0640\u0640\u0644 \u0627\u0633\u0640\u0640\u0645 \u0627\u0644\u0640\u0640\u0648\u062c\u0640\u0640\u0628\u0640\u0640\u0629"),p.a.createElement("input",{type:"text",placeholder:"\u0627\u0633\u0640\u0640\u0645 \u0627\u0644\u0640\u0640\u0648\u062c\u0640\u0640\u0628\u0640\u0640\u0629",onClick:function(e){Object(M.b)("#CreateMealNameInputContainer").removeAttr("style")},onChange:this.mealNameInputOnChangeHandle})),p.a.createElement("p",{id:"addFoodToMeal",onClick:this.addFoodToMealHandle},p.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},p.a.createElement("path",{d:"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"})),"\u0625\u0636\u0640\u0627\u0641\u0640\u0629 \u0637\u0640\u0639\u0640\u0627\u0645 \u0625\u0644\u0640\u0649 \u0627\u0644\u0640\u0648\u062c\u0640\u0628\u0640\u0629")),p.a.createElement("p",{id:"CreateMealDone",onClick:this.props.editMode?this.createMealEditModeButtonHandle:this.createMealButtonHandle},this.props.editMode?"\u062d\u0641\u0638 \u0627\u0644\u062a\u063a\u064a\u0631\u0627\u062a":"\u0625\u0646\u0640\u0634\u0640\u0627\u0621 \u0648\u062d\u0640\u0641\u0640\u0638 \u0627\u0644\u0640\u0648\u062c\u0640\u0628\u0640\u0629"),p.a.createElement("div",{id:"CreateMealCards"},this.renderMealCards()),p.a.createElement("div",{id:"CreateMealNutritionInfoContainer"},p.a.createElement("p",{id:"CreateMealNutritionInfoTitle"},"\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u063a\u0630\u0627\u0626\u064a\u0629"),p.a.createElement("div",{id:"CreateMealNutritionInfoPercentContainer"},p.a.createElement("div",{id:"CreateMealNutritionInfoCrabsPercent"}),p.a.createElement("div",{id:"CreateMealNutritionInfoProteinPercent"}),p.a.createElement("div",{id:"CreateMealNutritionInfoFatPercent"})),p.a.createElement("div",{id:"CreateMealNutritionInfoDetail"},p.a.createElement("div",{id:"CreateMealNutritionInfoTitles"},p.a.createElement("p",{className:"CreateMealNutritionInfoMain"},"\u0627\u0644\u0633\u0639\u0631\u0627\u062a \u0627\u0644\u062d\u0631\u0627\u0631\u064a\u0629"),p.a.createElement("p",{className:"CreateMealNutritionInfoMain"},"\u0627\u0644\u0628\u0631\u0648\u062a\u064a\u0646"),p.a.createElement("p",{className:"CreateMealNutritionInfoMain"},"\u0627\u0644\u0643\u0631\u0628\u0648\u0647\u064a\u062f\u0631\u0627\u062a"),p.a.createElement("p",{className:"CreateMealNutritionInfoSub"},"\u0627\u0644\u0623\u0644\u064a\u0627\u0641"),p.a.createElement("p",{className:"CreateMealNutritionInfoSub"},"\u0627\u0644\u0633\u0643\u0631"),p.a.createElement("p",{className:"CreateMealNutritionInfoMain"},"\u0627\u0644\u062f\u0647\u0648\u0646"),p.a.createElement("p",{className:"CreateMealNutritionInfoSub"},"\u0627\u0644\u062f\u0647\u0648\u0646 \u0627\u0644\u0645\u0634\u0628\u0639\u0629"),p.a.createElement("p",{className:"CreateMealNutritionInfoSub"},"\u0627\u0644\u062f\u0647\u0648\u0646 \u0627\u0644\u063a\u064a\u0631 \u0645\u0634\u0628\u0639\u0629"),p.a.createElement("p",{className:"CreateMealNutritionInfoMain"},"\u0622\u062e\u0631"),p.a.createElement("p",{className:"CreateMealNutritionInfoSub"},"\u0627\u0644\u0643\u0648\u0644\u064a\u0633\u062a\u0631\u0648\u0644"),p.a.createElement("p",{className:"CreateMealNutritionInfoSub"},"\u0627\u0644\u0635\u0648\u062f\u064a\u0648\u0645"),p.a.createElement("p",{className:"CreateMealNutritionInfoSub"},"\u0627\u0644\u0628\u0648\u062a\u0627\u0633\u064a\u0648\u0645")),p.a.createElement("div",{id:"CreateMealNutritionInfoValues"},p.a.createElement("p",{className:"CreateMealNutritionInfoMain"},Number(this.calcNutrition("kcal").toFixed(1))),p.a.createElement("p",{className:"CreateMealNutritionInfoMain"},Number(this.calcNutrition("protein").toFixed(1))," \u063a"),p.a.createElement("p",{className:"CreateMealNutritionInfoMain"},Number(this.calcNutrition("carb").toFixed(1))," \u063a"),p.a.createElement("p",{className:"CreateMealNutritionInfoSub"},Number(this.calcNutrition("fiber").toFixed(1))," \u063a"),p.a.createElement("p",{className:"CreateMealNutritionInfoSub"},Number(this.calcNutrition("sugar").toFixed(1))," \u063a"),p.a.createElement("p",{className:"CreateMealNutritionInfoMain"},Number(this.calcNutrition("fat").toFixed(1))," \u063a"),p.a.createElement("p",{className:"CreateMealNutritionInfoSub"},Number(this.calcNutrition("saturatedFat").toFixed(2))," \u063a"),p.a.createElement("p",{className:"CreateMealNutritionInfoSub"},Number(this.calcNutrition("unsaturatedFat").toFixed(2))," \u063a"),p.a.createElement("p",{className:"CreateMealNutritionInfoMain",style:{visibility:"hidden"}},"......"),p.a.createElement("p",{className:"CreateMealNutritionInfoSub"},this.calcNutrition("cholesterol").toFixed(0)," \u0645\u0644\u063a"),p.a.createElement("p",{className:"CreateMealNutritionInfoSub"},this.calcNutrition("sodium").toFixed(0)," \u0645\u0644\u063a"),p.a.createElement("p",{className:"CreateMealNutritionInfoSub"},this.calcNutrition("potassium").toFixed(0)," \u0645\u0644\u063a")))))}}]),a}(m.Component)}}]);
//# sourceMappingURL=2.a0116f13.chunk.js.map