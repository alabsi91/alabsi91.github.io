(this["webpackJsonplifesum-app"]=this["webpackJsonplifesum-app"]||[]).push([[13],{49:function(e,t,a){"use strict";function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return i}))},78:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return N}));var i=a(6),n=a.n(i),r=a(12),l=a(49),o=a(7),c=a(8),s=a(10),d=a(9),m=a(0),u=a.n(m),p=a(2),f=a(3),h=a(16),w=a(5),v=a(11),b=u.a.lazy((function(){return a.e(7).then(a.bind(null,51))}));function E(e){return u.a.createElement(m.Fragment,null,u.a.createElement("option",{className:"itemViewerSelectItems",value:e.servingValue},e.servingName))}var N=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={selectValue:e.props.data.serving?e.props.data.serving[0][1]:1,inputValue:e.props.data.serving?1:100},e.editHandle=function(){Object(w.updateRenderState)(u.a.createElement(m.Suspense,{fallback:""},u.a.createElement(b,{key:100*Math.random(),id:e.props.data.id}))),window.history.replaceState("","",window.location.pathname+"/EditFood")},e.trashCanHandle=function(){var t=[e.props.data.id,e.props.value,e.props.input,e.props.mealName,window.location.pathname],a=t[0],i=t[1],n=t[2],r=t[3],l=t[4];if("/CreateNewMeal"===l||"/EditMeal"===l){var o=f.d.favorite.tmpMeal.mealContent.findIndex((function(e){return e[0]===a&&e[1]===i&&e[2]===n}));f.d.favorite.tmpMeal.mealContent.splice(o,1)}else{var c=f.d.diary.filter((function(e){return e.date===Object(h.a)(h.b)}))[0],s=f.d.diary.indexOf(c),d=f.d.diary[s][r].findIndex((function(e){return e[0]===a&&e[1]===i&&e[2]===n}));f.d.diary[s][r].splice(d,1),0===f.d.diary[s][r].length&&delete f.d.diary[s][r]}window.history.back()},e.okButtonHandle=function(){var t=[e.props.data.id,e.props.value,e.props.input,window.location.pathname],a=t[0],i=t[1],n=t[2],r=t[3],o=f.d.diary.filter((function(e){return e.date===Object(h.a)(h.b)}))[0],c="selectMeal"===window.location.hash.split("#")[1]?document.getElementById("itemViewerSelectMeal").value:window.location.pathname.includes("diary")?e.props.mealName:window.location.hash.split("#")[1],s=[a,Number(e.state.selectValue),Number(e.state.inputValue)];if(r.includes("diary")){var d=document.getElementById("itemViewerSelectMeal").value,m=f.d.diary.indexOf(o),u=f.d.diary[m][c].findIndex((function(e){return e[0]===a&&e[1]===i&&e[2]===n}));c!==d?(f.d.diary[m][c].splice(u,1),0===f.d.diary[m][c].length&&delete f.d.diary[m][c],f.d.diary[m][d]?f.d.diary[m][d].push(s):f.d.diary[m][d]=[s]):f.d.diary[m][c].splice(u,1,s)}else if("/CreateNewMeal/search"===r||"/CreateNewMeal/favorites"===r||"/CreateNewMeal/recentlyAdded"===r||"/CreateNewMeal/categoriesList"===r||"/EditMeal/search"===r||"/EditMeal/favorites"===r||"/EditMeal/recentlyAdded"===r||"/EditMeal/categoriesList"===r)f.d.favorite.tmpMeal.mealContent.push(s);else if("/CreateNewMeal"===r||"/EditMeal"===r){var p=f.d.favorite.tmpMeal.mealContent.findIndex((function(e){return e[0]===a&&e[1]===i&&e[2]===n}));f.d.favorite.tmpMeal.mealContent.splice(p,1,s)}else o?o[c]?o[c].push(s):o[c]=[s]:f.d.diary.push(Object(l.a)({date:Object(h.a)(h.b)},c,[s]));window.history.back()},e.calcNutrition=function(t){return e.state.inputValue*e.state.selectValue/100*t},e.renderSelectMenu=function(){if(e.props.data.serving)return e.props.data.serving.map((function(e){return u.a.createElement(E,{key:1e3*Math.random(),servingName:e[0],servingValue:e[1]})}))},e.chechFavorite=function(){f.d.favorite.food.includes(e.props.data.id)&&Object(p.b)("#itemViewerFavouriteButtonFill").css("fill","white")},e.addOrRemoveFavorite=function(){f.d.favorite.food.includes(e.props.data.id)?(f.d.favorite.food.splice(f.d.favorite.food.indexOf(e.props.data.id),1),Object(p.b)("#itemViewerFavouriteButtonFill").css("fill","none"),e.showToast("\u062a\u0645\u062a \u0627\u0644\u0625\u0632\u0627\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0641\u0636\u0644\u0629")):(f.d.favorite.food.unshift(e.props.data.id),Object(p.b)("#itemViewerFavouriteButtonFill").css("fill","white"),e.showToast("\u062a\u0645\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0641\u0636\u0644\u0629"))},e.showToast=function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(p.b)("#itemViewerToast").text(t).css("display","block"),e.next=3,Object(p.f)(20);case 3:return Object(p.b)("#itemViewerToast").css("opacity",1).css("bottom","75px"),e.next=6,Object(p.f)(1500);case 6:return Object(p.b)("#itemViewerToast").css("opacity",0).css("bottom","0px"),e.next=9,Object(p.f)(350);case 9:Object(p.b)("#itemViewerToast").removeAttr("style");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.calcFatPercent=function(){return Math.min(Math.max(Math.round(9*e.props.data.fat/e.props.data.kcal*100),0),100)},e.calcProteinPercent=function(){return Math.min(Math.max(Math.round(4*e.props.data.protein/e.props.data.kcal*100),0),100)},e.CarbPercent=function(){return Math.min(Math.max(Math.round(4*e.props.data.carb/e.props.data.kcal*100),0),100)},e.calcCarbPercent=function(){return e.CarbPercent()>15?Math.min(Math.max(100-(e.calcFatPercent()+e.calcProteinPercent()),0),100):e.CarbPercent()},e.addProgressBars=function(){Object(p.a)("#nutritionInfoCrabsPercent",{input:e.calcCarbPercent(),R:40,width:5,fillColor:"none",progressColor:"var(--text-kinda-black)",textColor:"var(--text-kinda-black)",backgroundColor:"var(--background-gray)",lineCap:"none"}),Object(p.a)("#nutritionInfoProteinPercent",{input:e.calcProteinPercent(),R:40,width:5,fillColor:"none",progressColor:"var(--text-kinda-black)",textColor:"var(--text-kinda-black)",backgroundColor:"var(--background-gray)",lineCap:"none"}),Object(p.a)("#nutritionInfoFatPercent",{input:e.calcFatPercent(),R:40,width:5,fillColor:"none",progressColor:"var(--text-kinda-black)",textColor:"var(--text-kinda-black)",backgroundColor:"var(--background-gray)",lineCap:"none"});var t=document.createElement("p"),a=document.createElement("p"),i=document.createElement("p");t.classList.add("percentTitles"),a.classList.add("percentTitles"),i.classList.add("percentTitles"),t.innerHTML="\u0627\u0644\u0643\u0631\u0628\u0648\u0647\u064a\u062f\u0631\u0627\u062a",a.innerHTML="\u0627\u0644\u0628\u0631\u0648\u062a\u064a\u0646",i.innerHTML="\u0627\u0644\u062f\u0647\u0648\u0646",document.getElementById("nutritionInfoCrabsPercent").append(t),document.getElementById("nutritionInfoProteinPercent").append(a),document.getElementById("nutritionInfoFatPercent").append(i)},e.introPageTransition=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("itemViewerPage"),a=document.getElementById("itemViewerHeader"),t.style.cssText="position: fixed; bottom: 50%; left: 50%; opacity: 0; transform: translate(-50%, 100%); transition: bottom 200ms",a.style.position="relative",e.next=6,Object(p.f)(10);case 6:return t.style.bottom="100%",t.style.opacity="1",e.next=10,Object(p.f)(200);case 10:t.removeAttribute("style"),a.removeAttribute("style");case 12:case"end":return e.stop()}}),e)}))),e.backButtonHandle=function(){return window.history.back()},e.checkHash=function(){var e;switch(window.location.hash.split("#")[1]){case"breakfast":e="\u0627\u0644\u0641\u0637\u0648\u0631";break;case"lunch":e="\u0627\u0644\u063a\u062f\u0627\u0621";break;case"dinner":e="\u0627\u0644\u0639\u0634\u0627\u0621";break;case"snacks":e="\u0648\u062c\u0628\u0629 \u062e\u0641\u064a\u0641\u0629"}return e},e.okButtonAnimation=function(){v.a.timeline({repeat:-1,repeatDelay:3,delay:3}).to("#itemViewerOkButtonAnimation1",{duration:1,scale:1.4,opacity:0,transformOrigin:"center"},"Label").to("#itemViewerOkButtonAnimation2",{duration:1,scale:1.4,opacity:0,transformOrigin:"center",delay:.3},"Label-=0.6")},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.introPageTransition(),this.addProgressBars(),this.chechFavorite(),window.location.pathname.includes("diary")?(this.setState({selectValue:this.props.value,inputValue:this.props.input}),document.getElementById("itemViewerSelectMeal").value=this.props.mealName):("/CreateNewMeal"===window.location.pathname||"/EditMeal"===window.location.pathname||window.location.pathname.includes("recentlyAdded"))&&this.setState({selectValue:this.props.value,inputValue:this.props.input}),this.okButtonAnimation()}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{id:"itemViewerPage"},u.a.createElement("p",{id:"itemViewerToast"}),u.a.createElement("header",{id:"itemViewerHeader"},u.a.createElement("svg",{id:"itemViewerBackButton",onClick:this.backButtonHandle,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})),u.a.createElement("p",{id:"itemViewerHeaderTitle"},this.checkHash(),u.a.createElement("svg",{id:"itemViewerTrashCan",style:{display:window.location.pathname.includes("diary")||"/CreateNewMeal"===window.location.pathname||"/EditMeal"===window.location.pathname?"block":"none"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",onClick:this.trashCanHandle},u.a.createElement("path",{d:"M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"}))),u.a.createElement("svg",{id:"itemViewerFavouriteButton",onClick:this.addOrRemoveFavorite,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",style:{display:window.location.hash.includes("addedByUsers")?"none":"block"}},u.a.createElement("path",{id:"itemViewerFavouriteButtonFill",fill:"none",d:"M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"}),u.a.createElement("path",{d:"M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"})),u.a.createElement("svg",{id:"itemViewerEdit",onClick:this.editHandle,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",style:{display:window.location.hash.includes("addedByUsers")?"block":"none"}},u.a.createElement("path",{d:"M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"}))),u.a.createElement("div",{id:"itemViewerHeaderButtonsContainer"},u.a.createElement("p",{id:"itemViewerHeaderItemName"},this.props.data.name),u.a.createElement("div",{id:"itemViewerOkButtonBg",onClick:this.okButtonHandle},u.a.createElement("svg",{id:"itemViewerOkButton",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"}))),u.a.createElement("div",{id:"itemViewerOkButtonAnimation1"}),u.a.createElement("div",{id:"itemViewerOkButtonAnimation2"})),u.a.createElement("div",{id:"itemViewerInputsContainer"},u.a.createElement("input",{id:"itemViewerInput",inputMode:"numeric",autoComplete:"off",value:this.state.inputValue,onChange:function(t){t.target.value=Object(p.d)(t.target.value),e.setState({inputValue:t.target.value<0?0:Number(t.target.value)})},onClick:function(e){return e.target.select()}}),u.a.createElement("select",{id:"itemViewerSelectServing",value:this.state.selectValue,onChange:function(t){return e.setState({selectValue:Number(t.target.value)})}},this.renderSelectMenu(),u.a.createElement("option",{className:"itemViewerSelectServingItems",value:"1"},"\u063a\u0631\u0627\u0645"))),u.a.createElement("div",{style:{backgroundColor:"var(--background-white)"}},u.a.createElement("select",{id:"itemViewerSelectMeal",style:{display:window.location.hash.includes("selectMeal")||window.location.pathname.includes("diary")?"block":"none"}},u.a.createElement("option",{className:"itemViewerSelectMealItems",value:"breakfast"},"\u0627\u0644\u0641\u0637\u0648\u0631"),u.a.createElement("option",{className:"itemViewerSelectMealItems",value:"lunch"},"\u0627\u0644\u063a\u062f\u0627\u0621"),u.a.createElement("option",{className:"itemViewerSelectMealItems",value:"dinner"},"\u0627\u0644\u0639\u0634\u0627\u0621"),u.a.createElement("option",{className:"itemViewerSelectMealItems",value:"snacks"},"\u0648\u062c\u0628\u0629 \u062e\u0641\u064a\u0641\u0629")),u.a.createElement("p",{id:"itemViewerKcal"},Math.round(this.calcNutrition(this.props.data.kcal)),u.a.createElement("span",null,"\u0633\u0639\u0631\u0629 \u062d\u0631\u0627\u0631\u064a\u0629"))),u.a.createElement("div",{id:"itemViewerNutritionInfoContainer"},u.a.createElement("p",{id:"itemViewerNutritionInfoTitle"},"\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u063a\u0630\u0627\u0626\u064a\u0629"),u.a.createElement("p",{id:"itemViewerNutritionInfoSubTitle",style:{display:this.props.data.id.includes("addedByUsers")?"none":"block"}},"\u062a\u0645 \u062a\u0648\u062b\u064a\u0642\u0647",u.a.createElement("svg",{className:"searchItemsVerified",viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"},u.a.createElement("g",null,u.a.createElement("circle",{cx:"64",cy:"64",fill:"#4ce797",r:"43.125"}),u.a.createElement("circle",{cx:"64",cy:"64",fill:"var(--background-white)",r:"34.544"}),u.a.createElement("path",{d:"m58.211 81.479a3.894 3.894 0 0 1 -2.694-1.079l-11.569-11.1a3.892 3.892 0 1 1 5.388-5.618l8.59 8.239 20.468-24.03a3.893 3.893 0 1 1 5.927 5.048l-23.147 27.171a3.893 3.893 0 0 1 -2.767 1.364c-.065.003-.13.005-.196.005z",fill:"#4ce797"})))),u.a.createElement("p",{id:"itemViewerNutritionInfoSubTitle",style:{display:this.props.data.id.includes("addedByUsers")?"block":"none"}},"\u0627\u0636\u064a\u0641 \u0645\u0646 \u0642\u0628\u0644 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",u.a.createElement("svg",{className:"searchItemsVerified",style:{display:this.props.data.id.includes("addedByUsers")?"inline-block":"none"},enableBackground:"new 0 0 24 24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},u.a.createElement("path",{d:"m17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75-3.028 6.75-6.75 6.75z",fill:"#2196f3"}),u.a.createElement("path",{d:"m17.25 21c-.552 0-1-.448-1-1v-5.5c0-.552.448-1 1-1s1 .448 1 1v5.5c0 .552-.448 1-1 1z",fill:"#fff"}),u.a.createElement("path",{d:"m20 18.25h-5.5c-.552 0-1-.448-1-1s.448-1 1-1h5.5c.552 0 1 .448 1 1s-.448 1-1 1z",fill:"#fff"}),u.a.createElement("path",{d:"m23.98 3.66v.04c0 .97-.38 1.9-1.07 2.59l-1.94 1.98-5.25-5.22 1.92-1.96c.69-.7 1.62-1.1 2.61-1.11.98.03 1.92.38 2.63 1.08.7.69 1.1 1.61 1.1 2.6z",fill:"#f44336"}),u.a.createElement("path",{d:"m5.15 18.79-2.59-2.59c-.06.07-.11.14-.14.23l-2.38 6.56c-.09.28-.03.58.18.79.14.14.33.22.53.22.09 0 .17-.01.26-.04l6.56-2.38c.09-.03.16-.08.23-.14z",fill:"#ffe082"}),u.a.createElement("path",{d:"m8.5 17.25c0 1.04.18 2.04.52 2.97l-1.22 1.22-2.65-2.65 3.61-3.65c-.17.67-.26 1.38-.26 2.11z",fill:"#ffb300"}),u.a.createElement("path",{d:"m20.97 8.27-.75.75c-.93-.34-1.93-.52-2.97-.52-.75 0-1.48.1-2.18.28l3.18-3.21 2.71 2.69z",fill:"#ffb300"}),u.a.createElement("path",{d:"m18.25 5.57-3.18 3.21c-3.1.8-5.54 3.25-6.31 6.36l-3.61 3.65-2.59-2.59.08-.08 12.53-12.52.55-.55z",fill:"#ffc107"}),u.a.createElement("path",{d:"m17.25 10.5c-3.723 0-6.75 3.027-6.75 6.75s3.027 6.75 6.75 6.75v-3c-.553 0-1-.447-1-1v-1.75h-1.75c-.553 0-1-.447-1-1s.447-1 1-1h1.75v-1.75c0-.553.447-1 1-1z",fill:"#1d83d4"}),u.a.createElement("path",{d:"m17.25 18.25h-1v1.75c0 .553.447 1 1 1zm0-4.75c-.553 0-1 .447-1 1v1.75h1z",fill:"#dedede"}),u.a.createElement("path",{d:"m17.25 16.25h-1-1.75c-.553 0-1 .447-1 1s.447 1 1 1h1.75 1z",fill:"#dedede"}),u.a.createElement("path",{d:"m20.97 8.27-.75.75c-.93-.34-1.93-.52-2.97-.52-.75 0-1.48.1-2.18.28l3.18-3.21 2.71 2.69z",fill:"#ffb300"}),u.a.createElement("path",{d:"m22.91 1.09-4.568 4.568 2.628 2.612 1.94-1.979c.69-.69 1.07-1.62 1.07-2.59v-.041c0-.976-.388-1.883-1.07-2.57z",fill:"#d43a2f"}),u.a.createElement("path",{d:"m5.18 18.82-4.96 4.96c.14.14.33.22.53.22l.26-.04 6.56-2.38c.09-.03.16-.08.23-.14z",fill:"#dec371"}),u.a.createElement("path",{d:"m8.727 15.273-3.547 3.547 2.62 2.62 1.22-1.221c-.34-.93-.52-1.93-.52-2.97 0-.681.078-1.346.227-1.976z",fill:"#de9c00"}))),u.a.createElement("div",{id:"nutritionInfoPercentContainer"},u.a.createElement("div",{id:"nutritionInfoCrabsPercent"}),u.a.createElement("div",{id:"nutritionInfoProteinPercent"}),u.a.createElement("div",{id:"nutritionInfoFatPercent"})),u.a.createElement("div",{id:"itemViewerNutritionInfoDetail"},u.a.createElement("div",{id:"itemViewerNutritionInfoTitles"},u.a.createElement("p",{className:"itemViewerNutritionInfoMain"},"\u0627\u0644\u0628\u0631\u0648\u062a\u064a\u0646"),u.a.createElement("p",{className:"itemViewerNutritionInfoMain"},"\u0627\u0644\u0643\u0631\u0628\u0648\u0647\u064a\u062f\u0631\u0627\u062a"),u.a.createElement("p",{className:"itemViewerNutritionInfoSub"},"\u0627\u0644\u0623\u0644\u064a\u0627\u0641"),u.a.createElement("p",{className:"itemViewerNutritionInfoSub"},"\u0627\u0644\u0633\u0643\u0631"),u.a.createElement("p",{className:"itemViewerNutritionInfoMain"},"\u0627\u0644\u062f\u0647\u0648\u0646"),u.a.createElement("p",{className:"itemViewerNutritionInfoSub"},"\u0627\u0644\u062f\u0647\u0648\u0646 \u0627\u0644\u0645\u0634\u0628\u0639\u0629"),u.a.createElement("p",{className:"itemViewerNutritionInfoSub"},"\u0627\u0644\u062f\u0647\u0648\u0646 \u0627\u0644\u063a\u064a\u0631 \u0645\u0634\u0628\u0639\u0629"),u.a.createElement("p",{className:"itemViewerNutritionInfoMain"},"\u0622\u062e\u0631"),u.a.createElement("p",{className:"itemViewerNutritionInfoSub"},"\u0627\u0644\u0643\u0648\u0644\u064a\u0633\u062a\u0631\u0648\u0644"),u.a.createElement("p",{className:"itemViewerNutritionInfoSub"},"\u0627\u0644\u0635\u0648\u062f\u064a\u0648\u0645"),u.a.createElement("p",{className:"itemViewerNutritionInfoSub"},"\u0627\u0644\u0628\u0648\u062a\u0627\u0633\u064a\u0648\u0645")),u.a.createElement("div",{id:"itemViewerNutritionInfoValues"},u.a.createElement("p",{className:"itemViewerNutritionInfoMain"},Number(this.calcNutrition(this.props.data.protein).toFixed(1))," \u063a"),u.a.createElement("p",{className:"itemViewerNutritionInfoMain"},Number(this.calcNutrition(this.props.data.carb).toFixed(1))," \u063a"),u.a.createElement("p",{className:"itemViewerNutritionInfoSub"},Number(this.calcNutrition(this.props.data.fiber).toFixed(1))," \u063a"),u.a.createElement("p",{className:"itemViewerNutritionInfoSub"},Number(this.calcNutrition(this.props.data.sugar).toFixed(1))," \u063a"),u.a.createElement("p",{className:"itemViewerNutritionInfoMain"},Number(this.calcNutrition(this.props.data.fat).toFixed(1))," \u063a"),u.a.createElement("p",{className:"itemViewerNutritionInfoSub"},Number(this.calcNutrition(this.props.data.saturatedFat).toFixed(2))," \u063a"),u.a.createElement("p",{className:"itemViewerNutritionInfoSub"},Number(this.calcNutrition(this.props.data.unsaturatedFat).toFixed(2))," \u063a"),u.a.createElement("p",{className:"itemViewerNutritionInfoMain",style:{visibility:"hidden"}},"......"),u.a.createElement("p",{className:"itemViewerNutritionInfoSub"},this.calcNutrition(this.props.data.cholesterol).toFixed(0)," \u0645\u0644\u063a"),u.a.createElement("p",{className:"itemViewerNutritionInfoSub"},this.calcNutrition(this.props.data.sodium).toFixed(0)," \u0645\u0644\u063a"),u.a.createElement("p",{className:"itemViewerNutritionInfoSub"},this.calcNutrition(this.props.data.potassium).toFixed(0)," \u0645\u0644\u063a")))))}}]),a}(m.Component)}}]);
//# sourceMappingURL=13.63fefa1a.chunk.js.map