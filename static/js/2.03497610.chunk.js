(this["webpackJsonpmy-daily-calories"]=this["webpackJsonpmy-daily-calories"]||[]).push([[2],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n,r,i=a(88),o=a(12),l=a(5),c=a.n(l),m=a(7),s=a(8),u=a(9),d=a(11),p=a(10),f=a(0),b=a.n(f),w=(a(98),a(4)),h=a(2),v=a(1),N=a(6),E=a(13),k=b.a.lazy((function(){return Promise.resolve().then(a.bind(null,19))})),V=b.a.lazy((function(){return a.e(0).then(a.bind(null,89))})),y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var l=arguments.length,u=new Array(l),d=0;d<l;d++)u[d]=arguments[d];return(e=t.call.apply(t,[this].concat(u))).getMealData=function(){return v.i.favorite.meals.filter((function(t){return t.mealName===(e.props.name?e.props.name:n)}))[0].content.map((function(e){return e=Object.assign({},v.b.filter((function(t){return t.id===e[0]}))[0],{value:e[1],input:e[2]})}))},e.renderFoodsInTheMeal=function(){return e.getMealData().map((function(e){return b.a.createElement(f.Suspense,{fallback:"",key:100*Math.random()},b.a.createElement(k,{key:e.id+1e3*Math.random(),name:e.name,kcal:Math.round(e.kcal/100*(e.value*e.input)),serving:1===e.value?e.input+" \u063a\u0631\u0627\u0645 ":e.input+"  "+e.serving.filter((function(t){return t[1]===e.value}))[0][0],id:e.id,brand:e.brand,description:e.description,value:e.value,input:e.input}))}))},e.sumNutrition=function(t){return e.getMealData().map((function(e){return e.value*e.input/100*e[t]})).reduce((function(e,t){return e+t}))},e.fatPercent=function(){return Math.min(Math.max(Math.round(9*e.sumNutrition("fat")/(e.props.kcal?e.props.kcal:r)*100),0),100)},e.proteinPercent=function(){return Math.min(Math.max(Math.round(4*e.sumNutrition("protein")/(e.props.kcal?e.props.kcal:r)*100),0),100)},e.carbPercent=function(){return Math.min(Math.max(Math.round(4*e.sumNutrition("carb")/(e.props.kcal?e.props.kcal:r)*100),0),100)},e.CalcCarbPercent=function(){return e.carbPercent()>15?Math.min(Math.max(100-(e.fatPercent()+e.proteinPercent()),0),100):e.carbPercent()},e.introPageTransition=Object(m.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("mealViewerPage"),a=document.getElementById("mealViewerHeader"),t.style.cssText="position: fixed; bottom: 50%; left: 50%; opacity: 0; transform: translate(-50%, 100%); transition: bottom 200ms",a.style.position="relative",e.next=6,Object(w.f)(10);case 6:return t.style.bottom="100%",t.style.opacity="1",e.next=10,Object(w.f)(200);case 10:t.removeAttribute("style"),a.removeAttribute("style");case 12:case"end":return e.stop()}}),e)}))),e.introPageFadeTransition=Object(m.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=document.getElementById("mealViewerPage")).style.opacity="0",t.style.transition="opacity 350ms",e.next=5,Object(w.f)(20);case 5:return t.style.opacity="1",e.next=8,Object(w.f)(350);case 8:t.removeAttribute("style");case 9:case"end":return e.stop()}}),e)}))),e.okButtonHandle=function(){var t,a=v.i.favorite.meals.filter((function(t){return t.mealName===(e.props.name?e.props.name:n)}))[0].content,r="#Meals#MealViewer"===window.location.hash?Object(h.a)("#mealViewerSelectMeal").val():window.location.hash.split("#")[2],l=v.i.diary.filter((function(e){return e.date===Object(E.a)(E.b)}))[0];l?l[r]?(t=l[r]).push.apply(t,Object(o.a)(a)):l[r]=Object(o.a)(a):v.i.diary.push(Object(i.a)({date:Object(E.a)(E.b)},r,Object(o.a)(a)));Object(v.f)(),window.history.back()},e.trashButtonHandle=function(){var t=v.i.favorite.meals.indexOf(v.i.favorite.meals.filter((function(t){return t.mealName===(e.props.name?e.props.name:n)}))[0]);v.i.favorite.meals.splice(t,1),Object(v.f)(),window.history.back()},e.editHandle=function(){var t=v.i.favorite.meals.indexOf(v.i.favorite.meals.filter((function(t){return t.mealName===(e.props.name?e.props.name:n)}))[0]);v.i.favorite.tmpMeal.mealName=e.props.name?e.props.name:n,v.i.favorite.tmpMeal.mealContent=Object(o.a)(v.i.favorite.meals[t].content),Object(N.updateRenderState)(b.a.createElement(f.Suspense,{fallback:"",key:100*Math.random()},b.a.createElement(V,{key:100*Math.random(),doAnimation:!0,editMode:!0,oldName:e.props.name?e.props.name:n}))),window.history.pushState("","","/EditMeal")},e.backButtonHandle=function(){return window.history.back()},e.addProgressBars=function(){Object(w.a)("#mealNutritionInfoCrabsPercent",{input:e.CalcCarbPercent(),R:40,width:5,fillColor:"none",progressColor:"var(--text-kinda-black)",textColor:"var(--text-kinda-black)",backgroundColor:"var(--background-gray)",lineCap:"none"}),Object(w.a)("#mealNutritionInfoProteinPercent",{input:e.proteinPercent(),R:40,width:5,fillColor:"none",progressColor:"var(--text-kinda-black)",textColor:"var(--text-kinda-black)",backgroundColor:"var(--background-gray)",lineCap:"none"}),Object(w.a)("#mealNutritionInfoFatPercent",{input:e.fatPercent(),R:40,width:5,fillColor:"none",progressColor:"var(--text-kinda-black)",textColor:"var(--text-kinda-black)",backgroundColor:"var(--background-gray)",lineCap:"none"});var t=document.createElement("p"),a=document.createElement("p"),n=document.createElement("p");t.classList.add("mealPercentTitles"),a.classList.add("mealPercentTitles"),n.classList.add("mealPercentTitles"),t.innerHTML="\u0627\u0644\u0643\u0631\u0628\u0648\u0647\u064a\u062f\u0631\u0627\u062a",a.innerHTML="\u0627\u0644\u0628\u0631\u0648\u062a\u064a\u0646",n.innerHTML="\u0627\u0644\u062f\u0647\u0648\u0646",document.getElementById("mealNutritionInfoCrabsPercent").append(t),document.getElementById("mealNutritionInfoProteinPercent").append(a),document.getElementById("mealNutritionInfoFatPercent").append(n)},e.toggleConfirm=Object(m.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("none"!==Object(h.a)("#mealViewerConfirmBG").getStyle("display")){e.next=10;break}return Object(h.a)("#mealViewerConfirmBG").css({display:"block"}),Object(h.a)("#mealViewerConfirmContainer").css({display:"block"}),e.next=6,Object(w.f)(20);case 6:Object(h.a)("#mealViewerConfirmBG").css({opacity:1}),Object(h.a)("#mealViewerConfirmContainer").css({opacity:1,bottom:"50%"}),e.next=16;break;case 10:return Object(h.a)("#mealViewerConfirmBG").css({opacity:0}),Object(h.a)("#mealViewerConfirmContainer").css({opacity:0}),e.next=14,Object(w.f)(350);case 14:Object(h.a)("#mealViewerConfirmBG").removeAttr("style"),Object(h.a)("#mealViewerConfirmContainer").removeAttr("style");case 16:case"end":return e.stop()}}),e)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.doAnimation?this.introPageTransition():this.introPageFadeTransition(),this.addProgressBars(),this.props.name&&(n=this.props.name,r=this.props.kcal)}},{key:"render",value:function(){return b.a.createElement(f.Fragment,null,b.a.createElement("div",{id:"mealViewerConfirmBG",onClick:this.toggleConfirm}),b.a.createElement("div",{id:"mealViewerConfirmContainer"},b.a.createElement("p",null,"\u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641 \u0647\u0630\u0647 \u0627\u0644\u0648\u062c\u0628\u0629 \u0645\u0646 \u0627\u0644\u0645\u0641\u0636\u0644\u0629\u061f"),b.a.createElement("button",{onClick:this.trashButtonHandle},"\u0646\u0639\u0645"),b.a.createElement("button",{onClick:this.toggleConfirm},"\u0644\u0627")),b.a.createElement("div",{id:"mealViewerPage"},b.a.createElement("header",{id:"mealViewerHeader"},b.a.createElement("svg",{id:"mealViewerBackButton",onClick:this.backButtonHandle,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},b.a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})),b.a.createElement("svg",{id:"mealViewerTrashCan",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",onClick:this.toggleConfirm},b.a.createElement("path",{d:"M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"})),b.a.createElement("svg",{id:"mealViewerEdit",onClick:this.editHandle,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},b.a.createElement("path",{d:"M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"}))),b.a.createElement("div",{id:"mealViewerHeaderButtonsContainer"},b.a.createElement("p",{id:"mealViewerHeaderItemName"},this.props.name?this.props.name:n),b.a.createElement("div",{id:"mealViewerOkButtonBg",onClick:this.okButtonHandle},b.a.createElement("svg",{id:"mealViewerOkButton",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},b.a.createElement("path",{d:"M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"}))),b.a.createElement("div",{id:"mealViewerOkButtonAnimation1"}),b.a.createElement("div",{id:"mealViewerOkButtonAnimation2"})),b.a.createElement("p",{id:"mealViewerKcal"},Math.round(this.props.kcal||0===this.props.kcal?this.props.kcal:r),b.a.createElement("span",null,"\u0633\u0639\u0631\u0629 \u062d\u0631\u0627\u0631\u064a\u0629")),b.a.createElement("div",{id:"mealViewerSelectMealContainer",style:{display:"#Meals#MealViewer"===window.location.hash?"block":"none"}},b.a.createElement("select",{id:"mealViewerSelectMeal"},b.a.createElement("option",{className:"itemViewerSelectMealItems",value:"breakfast"},"\u0627\u0644\u0641\u0637\u0648\u0631"),b.a.createElement("option",{className:"itemViewerSelectMealItems",value:"lunch"},"\u0627\u0644\u063a\u062f\u0627\u0621"),b.a.createElement("option",{className:"itemViewerSelectMealItems",value:"dinner"},"\u0627\u0644\u0639\u0634\u0627\u0621"),b.a.createElement("option",{className:"itemViewerSelectMealItems",value:"snacks"},"\u0648\u062c\u0628\u0629 \u062e\u0641\u064a\u0641\u0629"))),b.a.createElement("div",{id:"mealNutritionInfoPercentContainer"},b.a.createElement("div",{id:"mealNutritionInfoCrabsPercent"}),b.a.createElement("div",{id:"mealNutritionInfoProteinPercent"}),b.a.createElement("div",{id:"mealNutritionInfoFatPercent"})),b.a.createElement("div",{id:"foodsInTheMealContainer"},b.a.createElement("p",{className:"mealViewerInfoTitles"},"\u0627\u0644\u0637\u0639\u0627\u0645 \u0627\u0644\u0645\u0648\u062c\u0648\u062f \u0641\u064a \u0627\u0644\u0648\u062c\u0628\u0629"),this.renderFoodsInTheMeal()),b.a.createElement("p",{className:"mealViewerInfoTitles"},"\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u063a\u0630\u0627\u0626\u064a\u0629 \u0644\u0644\u0648\u062c\u0628\u0629"),b.a.createElement("div",{id:"mealViewerNutritionInfoDetail"},b.a.createElement("div",{id:"mealViewerNutritionInfoTitles"},b.a.createElement("p",{className:"mealViewerNutritionInfoMain"},"\u0627\u0644\u0628\u0631\u0648\u062a\u064a\u0646"),b.a.createElement("p",{className:"mealViewerNutritionInfoMain"},"\u0627\u0644\u0643\u0631\u0628\u0648\u0647\u064a\u062f\u0631\u0627\u062a"),b.a.createElement("p",{className:"mealViewerNutritionInfoSub"},"\u0627\u0644\u0623\u0644\u064a\u0627\u0641"),b.a.createElement("p",{className:"mealViewerNutritionInfoSub"},"\u0627\u0644\u0633\u0643\u0631"),b.a.createElement("p",{className:"mealViewerNutritionInfoMain"},"\u0627\u0644\u062f\u0647\u0648\u0646"),b.a.createElement("p",{className:"mealViewerNutritionInfoSub"},"\u0627\u0644\u062f\u0647\u0648\u0646 \u0627\u0644\u0645\u0634\u0628\u0639\u0629"),b.a.createElement("p",{className:"mealViewerNutritionInfoSub"},"\u0627\u0644\u062f\u0647\u0648\u0646 \u0627\u0644\u063a\u064a\u0631 \u0645\u0634\u0628\u0639\u0629"),b.a.createElement("p",{className:"mealViewerNutritionInfoMain"},"\u0622\u062e\u0631"),b.a.createElement("p",{className:"mealViewerNutritionInfoSub"},"\u0627\u0644\u0643\u0648\u0644\u064a\u0633\u062a\u0631\u0648\u0644"),b.a.createElement("p",{className:"mealViewerNutritionInfoSub"},"\u0627\u0644\u0635\u0648\u062f\u064a\u0648\u0645"),b.a.createElement("p",{className:"mealViewerNutritionInfoSub"},"\u0627\u0644\u0628\u0648\u062a\u0627\u0633\u064a\u0648\u0645")),b.a.createElement("div",{id:"mealViewerNutritionInfoValues"},b.a.createElement("p",{className:"mealViewerNutritionInfoMain"},Number(this.sumNutrition("protein").toFixed(1))," \u063a"),b.a.createElement("p",{className:"mealViewerNutritionInfoMain"},Number(this.sumNutrition("carb").toFixed(1))," \u063a"),b.a.createElement("p",{className:"mealViewerNutritionInfoSub"},Number(this.sumNutrition("fiber").toFixed(1))," \u063a"),b.a.createElement("p",{className:"mealViewerNutritionInfoSub"},Number(this.sumNutrition("sugar").toFixed(1))," \u063a"),b.a.createElement("p",{className:"mealViewerNutritionInfoMain"},Number(this.sumNutrition("fat").toFixed(1))," \u063a"),b.a.createElement("p",{className:"mealViewerNutritionInfoSub"},Number(this.sumNutrition("saturatedFat").toFixed(2))," \u063a"),b.a.createElement("p",{className:"mealViewerNutritionInfoSub"},Number(this.sumNutrition("unsaturatedFat").toFixed(2))," \u063a"),b.a.createElement("p",{className:"mealViewerNutritionInfoMain",style:{visibility:"hidden"}},"......"),b.a.createElement("p",{className:"mealViewerNutritionInfoSub"},this.sumNutrition("cholesterol").toFixed(0)," \u0645\u0644\u063a"),b.a.createElement("p",{className:"mealViewerNutritionInfoSub"},this.sumNutrition("sodium").toFixed(0)," \u0645\u0644\u063a"),b.a.createElement("p",{className:"mealViewerNutritionInfoSub"},this.sumNutrition("potassium").toFixed(0)," \u0645\u0644\u063a")))))}}]),a}(f.Component)},88:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},98:function(e,t,a){}}]);
//# sourceMappingURL=2.03497610.chunk.js.map