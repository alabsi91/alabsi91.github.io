(this["webpackJsonplifesum-app"]=this["webpackJsonplifesum-app"]||[]).push([[13],{57:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n,r=a(3),o=a.n(r),i=a(7),c=a(8),l=a(9),s=a(19),u=a(11),m=a(10),d=a(0),f=a.n(d),g=a(4),h=a(2),p=a(16);function v(){n.prompt(),n.userChoice.then((function(e){"accepted"===e.outcome?(Object(h.b)("#addToHomeSettingsContainer").css("display","none"),console.log("User accepted the install prompt")):console.log("User dismissed the install prompt")}))}window.addEventListener("beforeinstallprompt",(function(e){return n=e}));var y=function(e){Object(u.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,l=new Array(n),u=0;u<n;u++)l[u]=arguments[u];return(e=t.call.apply(t,[this].concat(l))).state={kcal:g.i.userInfo.dailykcal,carbGrams:g.i.userInfo.dailyCarbs,protienGrams:g.i.userInfo.dailyProtein,fatGrams:g.i.userInfo.dailyFat,carbPercent:Math.min(Math.max(Math.round(4*g.i.userInfo.dailyCarbs/g.i.userInfo.dailykcal*100),0),100),proteinPercent:Math.min(Math.max(Math.round(4*g.i.userInfo.dailyProtein/g.i.userInfo.dailykcal*100),0),100),fatPercent:Math.min(Math.max(Math.round(9*g.i.userInfo.dailyFat/g.i.userInfo.dailykcal*100),0),100)},e.checkWeightGoal=function(){g.i.userInfo.goalWeight<g.i.userInfo.weight?Object(h.b)("#weightGoal").text("\u062e\u0633\u0627\u0631\u0629 \u0627\u0644\u0648\u0632\u0646"):g.i.userInfo.goalWeight===g.i.userInfo.weight?Object(h.b)("#weightGoal").text("\u0627\u0644\u062d\u0641\u0627\u0638 \u0639\u0644\u0649 \u0627\u0644\u0648\u0632\u0646"):g.i.userInfo.goalWeight>g.i.userInfo.weight&&Object(h.b)("#weightGoal").text("\u0627\u0643\u062a\u0633\u0627\u0628 \u0627\u0644\u0648\u0632\u0646")},e.centerSelect=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.getElementById(t),(n=document.createElement("p")).classList.add("centerSelect"),n.innerHTML=a.options[a.selectedIndex].innerHTML,document.body.appendChild(n),r=parseFloat(window.getComputedStyle(n).getPropertyValue("width"))/2+"px)",n.remove(),a.style.width="0px",e.next=10,Object(h.g)(20);case 10:a.style.removeProperty("width"),a.style.paddingRight="calc(50% - "+r;case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.HarrisBenedictBMR=function(){var e;return"male"===g.i.userInfo.gender?e=66.47+13.75*g.i.userInfo.weight+5.003*g.i.userInfo.height-6.755*g.i.userInfo.age:"female"===g.i.userInfo.gender&&(e=655.1+9.563*g.i.userInfo.weight+1.85*g.i.userInfo.height-4.676*g.i.userInfo.age),100*Math.round(Math.round(e)/100)},e.autoAssign=function(){var t,a,n,r,o=e.HarrisBenedictBMR(),i=g.i.userInfo.goalWeight,c=g.i.userInfo.weight,l=g.i.userInfo.activity;i<c?(t=o,a=Math.round(.5*t/4),n=Math.round(.25*t/4),r=Math.round(.25*t/9)):i===c?(t=Math.round(o*l),a=Math.round(.55*t/4),n=Math.round(.2*t/4),r=Math.round(.25*t/9)):i>c&&(t=Math.round(o*l+500),a=Math.round(.55*t/4),n=Math.round(.2*t/4),r=Math.round(.25*t/9)),g.i.userInfo.dailykcal=t,g.i.userInfo.dailyCarbs=a,g.i.userInfo.dailyProtein=n,g.i.userInfo.dailyFat=r,e.setState({kcal:g.i.userInfo.dailykcal,carbGrams:g.i.userInfo.dailyCarbs,protienGrams:g.i.userInfo.dailyProtein,fatGrams:g.i.userInfo.dailyFat,carbPercent:Math.min(Math.max(Math.round(4*g.i.userInfo.dailyCarbs/g.i.userInfo.dailykcal*100),0),100),proteinPercent:Math.min(Math.max(Math.round(4*g.i.userInfo.dailyProtein/g.i.userInfo.dailykcal*100),0),100),fatPercent:Math.min(Math.max(Math.round(9*g.i.userInfo.dailyFat/g.i.userInfo.dailykcal*100),0),100)})},e.moveSwitch=function(e,t){"on"===e?(Object(h.b)("#"+t+"SwitchContainer").css("background-color","var(--main-color)"),Object(h.b)("#"+t+"SwitchButton").css("left","90%").css("border","solid 1px var(--main-color)"),p.a.to("#"+t+"SettingsContainer",{duration:.2,background:"linear-gradient(90deg, var(--second-color)  100%, rgba(0,0,0,0) 100%)"}),Object(h.b)("#"+t+"SettingsContainer p").css("color","white")):"off"===e&&(Object(h.b)("#"+t+"SwitchContainer").css("background-color","whitesmoke").css("border","solid 1px lightgray"),Object(h.b)("#"+t+"SwitchButton").css("left","0px").css("border","solid 1px lightgray"),p.a.to("#"+t+"SettingsContainer",{duration:.2,background:"linear-gradient(90deg, var(--second-color)  0%, rgba(0,0,0,0) 0%)"}),Object(h.b)("#"+t+"SettingsContainer p").removeAttr("style"))},e.tipSwitchButton=function(t){"false"===t?(e.moveSwitch("on","tips"),window.localStorage.setItem("tips",!0)):(e.moveSwitch("off","tips"),window.localStorage.setItem("tips",!1))},e.darkModeOnOff=function(e){"on"===e?(document.documentElement.style.setProperty("--background-gray","#18191a"),document.documentElement.style.setProperty("--background-white","#242526"),document.documentElement.style.setProperty("--background-kinda-white","#3a3b3c"),document.documentElement.style.setProperty("--text-kinda-black","#e4e6eb"),document.documentElement.style.setProperty("--text-gray","#a7aaae"),document.documentElement.style.setProperty("--select-background-image","url(".concat(a(40),")"))):"off"===e&&(document.documentElement.style.setProperty("--background-gray","#f5f5f5"),document.documentElement.style.setProperty("--background-white","white"),document.documentElement.style.setProperty("--background-kinda-white","#fafaf5"),document.documentElement.style.setProperty("--text-kinda-black","#2b2b2b"),document.documentElement.style.setProperty("--text-gray","#646464"),document.documentElement.style.setProperty("--select-background-image","url(".concat(a(69),")")))},e.autoDarkModeAnimation=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=document.getElementById("darkmodeSettingsContainer"),n=document.getElementById("autoDarkmodeSettingsContainer"),"on"!==t){e.next=10;break}r=window.getComputedStyle(a).getPropertyValue("height"),n.style.borderWidth="1.5px",n.style.height=r,a.style.borderBottomLeftRadius="0px",a.style.borderBottomRightRadius="0px",e.next=15;break;case 10:return n.style.height="0px",e.next=13,Object(h.g)(150);case 13:n.style.borderWidth="0px",a.removeAttribute("style");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.darkmodeSwitchButton=function(t){"false"===t?(e.moveSwitch("on","darkmode"),e.darkModeOnOff("on"),e.autoDarkModeAnimation("on"),window.localStorage.setItem("darkMode",!0)):(e.moveSwitch("off","darkmode"),e.darkModeOnOff("off"),e.autoDarkModeAnimation("off"),e.moveSwitch("off","autoDarkmode"),window.localStorage.setItem("darkMode",!1),window.localStorage.setItem("autoDarkMode",!1))},e.autoDarkmodeSwitchButton=function(t){if("false"===t){e.moveSwitch("on","autoDarkmode"),Object(h.e)("\u0645\u0646 \u0627\u0644\u0633\u0627\u0639\u0629 20:00 \u0648\u062d\u062a\u0649 \u0627\u0644\u0633\u0627\u0639\u0629 7:00","info");var a=(new Date).getHours();if(a>=20||a<=6)e.darkModeOnOff("on");else{e.darkModeOnOff("off");var n=Object(s.a)(e);window.setInterval((function(){var e=(new Date).getHours();(e>=20||e<=6)&&n.darkModeOnOff("on")}),6e4)}window.localStorage.setItem("autoDarkMode",!0)}else e.moveSwitch("off","autoDarkmode"),e.darkModeOnOff("on"),window.localStorage.setItem("autoDarkMode",!1)},e.changeThemeColor=function(t,a){var n=[t,a];document.documentElement.style.setProperty("--main-color",n[0]),document.documentElement.style.setProperty("--second-color",n[1]),document.querySelector("meta[name=theme-color]").setAttribute("content",n[0]),window.localStorage.setItem("theme",JSON.stringify(n)),e.setInputDefaultColor()},e.setInputDefaultColor=function(){var e=JSON.parse(window.localStorage.getItem("theme"));Object(h.b)("#selectMainColor").val(e[0]),Object(h.b)("#selectSecondColor").val(e[1])},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){window.scrollTo({top:0}),this.checkWeightGoal(),"true"===window.localStorage.getItem("tips")&&this.moveSwitch("on","tips"),"true"===window.localStorage.getItem("darkMode")&&(this.moveSwitch("on","darkmode"),this.autoDarkModeAnimation("on")),"true"===window.localStorage.getItem("autoDarkMode")&&this.moveSwitch("on","autoDarkmode"),document.getElementById("addToHomeSettingsContainer").addEventListener("click",v),this.centerSelect("activity"),this.centerSelect("gender"),this.setInputDefaultColor(),document.getElementById("settingsPage").style.opacity="1"}},{key:"componentWillUnmount",value:function(){Object(g.f)()}},{key:"render",value:function(){var e=this;return f.a.createElement("div",{id:"settingsPage"},f.a.createElement("header",{id:"settingsPageHeader"},f.a.createElement("p",{id:"settingsPageHeaderTitle"},"\u0627\u0644\u0625\u0639\u0640\u0640\u062f\u0627\u062f\u0627\u062a")),f.a.createElement(h.c,null),f.a.createElement("div",{id:"UserContainer"},f.a.createElement("div",{id:"userPic",style:{backgroundImage:g.d?"url(".concat(g.d,")"):""}}),f.a.createElement("p",{id:"userName"},g.c?g.c:"\u0645\u0633\u062a\u062e\u062f\u0645 \u063a\u064a\u0631 \u0645\u0633\u062c\u0644"),f.a.createElement("button",{id:"logOut",onClick:g.e},"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c")),f.a.createElement("p",{className:"containerTitles"},"\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0634\u062e\u0635\u064a\u0629"),f.a.createElement("div",{id:"personalInfoContainer"},f.a.createElement("div",{className:"settingsItemsContainer",style:{height:"53px"}},f.a.createElement("p",{className:"personalInfoTitles"},"\u0627\u0644\u0647\u062f\u0641"),f.a.createElement("p",{id:"weightGoal"})),f.a.createElement("div",{className:"settingsItemsContainer"},f.a.createElement("p",{className:"personalInfoTitles"},"\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0645\u0631\u0627\u062f \u062a\u062d\u0642\u064a\u0642\u0647"),f.a.createElement("p",{className:"settingsUnits"},"\u0643\u063a"),f.a.createElement("input",{className:"personalInfoInputs",id:"goalWeight",autoComplete:"off",inputMode:"numeric",placeholder:"\u0643\u063a",onClick:function(e){return e.target.select()},defaultValue:g.i.userInfo.goalWeight,onChange:function(t){t.target.value=Object(h.f)(t.target.value),g.i.userInfo.goalWeight=Number(t.target.value),e.checkWeightGoal()}})),f.a.createElement("div",{className:"settingsItemsContainer"},f.a.createElement("p",{className:"personalInfoTitles"},"\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u062d\u0627\u0644\u064a"),f.a.createElement("p",{className:"settingsUnits"},"\u0643\u063a"),f.a.createElement("input",{className:"personalInfoInputs",id:"weight",autoComplete:"off",inputMode:"numeric",placeholder:"\u0643\u063a",onClick:function(e){return e.target.select()},defaultValue:g.i.userInfo.weight,onChange:function(t){t.target.value=Object(h.f)(t.target.value),g.i.userInfo.weight=Number(t.target.value),e.checkWeightGoal()}})),f.a.createElement("div",{className:"settingsItemsContainer"},f.a.createElement("p",{className:"personalInfoTitles"},"\u0627\u0644\u0637\u0648\u0644"),f.a.createElement("p",{className:"settingsUnits"},"\u0633\u0645"),f.a.createElement("input",{className:"personalInfoInputs",id:"height",autoComplete:"off",inputMode:"numeric",placeholder:"\u0633\u0645",defaultValue:g.i.userInfo.height,onClick:function(e){return e.target.select()},onChange:function(e){e.target.value=Object(h.f)(e.target.value),g.i.userInfo.height=Number(e.target.value)}})),f.a.createElement("div",{className:"settingsItemsContainer"},f.a.createElement("p",{className:"personalInfoTitles"},"\u0627\u0644\u0639\u0645\u0631"),f.a.createElement("p",{className:"settingsUnits"},"\u0633\u0646\u0629"),f.a.createElement("input",{className:"personalInfoInputs",id:"age",autoComplete:"off",inputMode:"numeric",placeholder:"\u0633\u0646\u0629",defaultValue:g.i.userInfo.age,onClick:function(e){return e.target.select()},onChange:function(e){e.target.value=Object(h.f)(e.target.value),g.i.userInfo.age=Number(e.target.value)}})),f.a.createElement("div",{className:"settingsItemsContainer"},f.a.createElement("p",{className:"personalInfoTitles"},"\u0627\u0644\u062c\u0646\u0633"),f.a.createElement("select",{id:"gender",className:"personalInfoInputs",defaultValue:g.i.userInfo.gender,onChange:function(t){g.i.userInfo.gender=t.target.value,e.centerSelect("gender")}},f.a.createElement("option",{value:"male"},"\u0630\u0643\u0631"),f.a.createElement("option",{value:"female"},"\u0623\u0646\u062b\u0649"))),f.a.createElement("div",{className:"settingsItemsContainer"},f.a.createElement("p",{className:"personalInfoTitles"},"\u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u0646\u0634\u0627\u0637"),f.a.createElement("select",{id:"activity",className:"personalInfoInputs",defaultValue:g.i.userInfo.activity,onChange:function(t){g.i.userInfo.activity=t.target.value,e.centerSelect("activity")}},f.a.createElement("option",{value:1.2},"\u0643\u062b\u064a\u0631 \u0627\u0644\u062c\u0644\u0648\u0633"),f.a.createElement("option",{value:1.375},"\u0642\u0644\u064a\u0644 \u0627\u0644\u0646\u0634\u0627\u0637"),f.a.createElement("option",{value:1.55},"\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0646\u0634\u0627\u0637"),f.a.createElement("option",{value:1.725},"\u0643\u062b\u064a\u0631 \u0627\u0644\u0646\u0634\u0627\u0637"),f.a.createElement("option",{value:1.9},"\u0639\u0627\u0644\u064a \u0627\u0644\u0646\u0634\u0627\u0637")))),f.a.createElement("p",{className:"containerTitles"},"\u0625\u0639\u0640\u0640\u062f\u0627\u062f\u062a \u0627\u0644\u0640\u062a\u0640\u063a\u0640\u0630\u064a\u0640\u0629"),f.a.createElement("div",{id:"macrosInfoContainer"},f.a.createElement("div",{className:"settingsItemsContainer"},f.a.createElement("p",{className:"personalInfoTitles"},"\u0627\u0644\u0633\u0639\u0631\u0627\u062a \u0627\u0644\u064a\u0648\u0645\u064a\u0629"),f.a.createElement("p",{className:"settingsUnits"},"\u0633\u0639\u0631\u0629"),f.a.createElement("input",{id:"dailykcal",className:"personalInfoInputs",autoComplete:"off",inputMode:"numeric",placeholder:"\u0633\u0639\u0631\u0629",onClick:function(e){return e.target.select()},value:this.state.kcal,onChange:function(t){t.target.value=Object(h.f)(t.target.value),g.i.userInfo.dailykcal=Number(t.target.value),g.i.userInfo.dailyCarbs=Math.round(Number(t.target.value)*e.state.carbPercent/100/4),g.i.userInfo.dailyProtein=Math.round(Number(t.target.value)*e.state.proteinPercent/100/4),g.i.userInfo.dailyFat=Math.round(Number(t.target.value)*e.state.fatPercent/100/9),e.setState({kcal:g.i.userInfo.dailykcal,carbGrams:g.i.userInfo.dailyCarbs,protienGrams:g.i.userInfo.dailyProtein,fatGrams:g.i.userInfo.dailyFat})}})),f.a.createElement("div",{id:"macrosContainer"},f.a.createElement("div",{id:"macrosCarbPrecent",style:{width:this.state.carbPercent+"%"}},this.state.carbPercent+"%"),f.a.createElement("div",{id:"macrosProteinPrecent",style:{width:this.state.proteinPercent+"%"}},this.state.proteinPercent+"%"),f.a.createElement("div",{id:"macrosFatPrecent",style:{width:this.state.fatPercent+"%"}},this.state.fatPercent+"%")),f.a.createElement("div",{id:"carbContainer"},f.a.createElement("div",{className:"macroSettingsFlexContainer"},f.a.createElement("p",{id:"carbTitle",className:"macrosPercentTitles"},"\u0627\u0644\u0643\u0631\u0628\u0648\u0647\u064a\u062f\u0631\u0627\u062a"),f.a.createElement("div",{style:{width:"15%",display:"flex"}},"%",f.a.createElement("input",{id:"carbInput",className:"macrosPercentInputs",autoComplete:"off",inputMode:"numeric",onClick:function(e){return e.target.select()},value:this.state.carbPercent,onChange:function(t){t.target.value=Math.min(Math.max(Object(h.f)(t.target.value),0),100-(e.state.fatPercent+e.state.proteinPercent)),g.i.userInfo.dailyCarbs=Math.round(e.state.kcal*(Number(t.target.value)/100)/4),console.log(e.state.kcal),e.setState({carbPercent:Number(t.target.value),carbGrams:g.i.userInfo.dailyCarbs})}})),f.a.createElement("p",{id:"carbKcal",className:"macrosPercentKcal"},4*this.state.carbGrams,f.a.createElement("span",{className:"macrosPercentSpan"}," \u0633\u0639\u0631\u0629")),f.a.createElement("p",{id:"carbGram",className:"macrosPercentGram"},this.state.carbGrams,f.a.createElement("span",{className:"macrosPercentSpan"}," \u063a"))),f.a.createElement("input",{type:"range",min:"0",max:"100",id:"carbSlider",className:"settingSlider",value:this.state.carbPercent,onChange:function(t){t.target.value=Math.min(Math.max(Object(h.f)(t.target.value),0),100-(e.state.fatPercent+e.state.proteinPercent)),g.i.userInfo.dailyCarbs=Math.round(e.state.kcal*Number(t.target.value)/100/4),e.setState({carbPercent:Number(t.target.value),carbGrams:g.i.userInfo.dailyCarbs})}})),f.a.createElement("div",{id:"proteinContainer"},f.a.createElement("div",{className:"macroSettingsFlexContainer"},f.a.createElement("p",{id:"proteinTitle",className:"macrosPercentTitles"},"\u0627\u0644\u0640\u0640\u0628\u0640\u0640\u0640\u0631\u0648\u062a\u0640\u0640\u064a\u0640\u0640\u0640\u0646"),f.a.createElement("div",{style:{width:"15%",display:"flex"}},"%",f.a.createElement("input",{id:"proteinInput",className:"macrosPercentInputs",autoComplete:"off",inputMode:"numeric",onClick:function(e){return e.target.select()},value:this.state.proteinPercent,onChange:function(t){t.target.value=Math.min(Math.max(Object(h.f)(t.target.value),0),100-(e.state.carbPercent+e.state.fatPercent)),g.i.userInfo.dailyProtein=Math.round(e.state.kcal*Number(t.target.value)/100/4),e.setState({proteinPercent:Number(t.target.value),protienGrams:g.i.userInfo.dailyProtein})}})),f.a.createElement("p",{id:"proteinKcal",className:"macrosPercentKcal"},4*this.state.protienGrams,f.a.createElement("span",{className:"macrosPercentSpan"}," \u0633\u0639\u0631\u0629")),f.a.createElement("p",{id:"proteinGram",className:"macrosPercentGram"},this.state.protienGrams,f.a.createElement("span",{className:"macrosPercentSpan"}," \u063a"))),f.a.createElement("input",{type:"range",min:"0",max:"100",id:"proteinSlider",className:"settingSlider",value:this.state.proteinPercent,onChange:function(t){t.target.value=Math.min(Math.max(Object(h.f)(t.target.value),0),100-(e.state.carbPercent+e.state.fatPercent)),g.i.userInfo.dailyProtein=Math.round(e.state.kcal*Number(t.target.value)/100/4),e.setState({proteinPercent:Number(t.target.value),protienGrams:g.i.userInfo.dailyProtein})}})),f.a.createElement("div",{id:"fatContainer"},f.a.createElement("div",{className:"macroSettingsFlexContainer"},f.a.createElement("p",{id:"fatTitle",className:"macrosPercentTitles"},"\u0627\u0644\u0640\u0640\u0640\u0640\u0640\u062f\u0647\u0640\u0640\u0640\u0640\u0640\u0640\u0648\u0646"),f.a.createElement("div",{style:{width:"15%",display:"flex"}},"%",f.a.createElement("input",{id:"fatInput",className:"macrosPercentInputs",autoComplete:"off",inputMode:"numeric",onClick:function(e){return e.target.select()},value:this.state.fatPercent,onChange:function(t){t.target.value=Math.min(Math.max(Object(h.f)(t.target.value),0),100-(e.state.carbPercent+e.state.proteinPercent)),g.i.userInfo.dailyFat=Math.round(e.state.kcal*Number(t.target.value)/100/9),e.setState({fatPercent:Number(t.target.value),fatGrams:g.i.userInfo.dailyFat})}})),f.a.createElement("p",{id:"fatKcal",className:"macrosPercentKcal"},9*this.state.fatGrams,f.a.createElement("span",{className:"macrosPercentSpan"}," \u0633\u0639\u0631\u0629")),f.a.createElement("p",{id:"fatGram",className:"macrosPercentGram"},this.state.fatGrams,f.a.createElement("span",{className:"macrosPercentSpan"}," \u063a"))),f.a.createElement("input",{type:"range",min:"0",max:"100",id:"fatSlider",className:"settingSlider",value:this.state.fatPercent,onChange:function(t){t.target.value=Math.min(Math.max(Object(h.f)(t.target.value),0),100-(e.state.carbPercent+e.state.proteinPercent)),g.i.userInfo.dailyFat=Math.round(e.state.kcal*Number(t.target.value)/100/9),e.setState({fatPercent:Number(t.target.value),fatGrams:g.i.userInfo.dailyFat})}})),f.a.createElement("button",{id:"autoAssign",onClick:this.autoAssign},"\u062a\u0640\u0639\u0640\u064a\u0640\u064a\u0640\u0646 \u062a\u0640\u0644\u0640\u0642\u0640\u0627\u0626\u0640\u064a")),f.a.createElement("p",{className:"containerTitles"},"\u0625\u0639\u0640\u0640\u062f\u0627\u062f\u062a \u0627\u0644\u0640\u062a\u0640\u0637\u0640\u0628\u0640\u064a\u0640\u0642"),f.a.createElement("div",{id:"appSettingsContainer"},f.a.createElement("div",{id:"tipsSettingsContainer"},f.a.createElement("p",null,"\u0625\u0638\u0640\u0640\u0647\u0640\u0640\u0627\u0631 \u0646\u0640\u0640\u0635\u0640\u0640\u0627\u0626\u0640\u0640\u062d \u0639\u0640\u0640\u0627\u0645\u0640\u0640\u0629"),f.a.createElement("div",{id:"tipsSwitchContainer",onClick:function(){return e.tipSwitchButton(window.localStorage.getItem("tips"))}},f.a.createElement("div",{id:"tipsSwitchButton"}))),f.a.createElement("div",{id:"darkmodeSettingsContainer"},f.a.createElement("p",null,"\u062a\u0640\u0634\u063a\u0640\u064a\u0640\u0644 \u0627\u0644\u0640\u0648\u0636\u0640\u0639 \u0627\u0644\u0640\u0644\u0640\u064a\u0640\u0644\u0640\u064a"),f.a.createElement("div",{id:"darkmodeSwitchContainer",onClick:function(){return e.darkmodeSwitchButton(window.localStorage.getItem("darkMode"))}},f.a.createElement("div",{id:"darkmodeSwitchButton"}))),f.a.createElement("div",{id:"autoDarkmodeSettingsContainer"},f.a.createElement("p",null,"\u062a\u063a\u0639\u064a\u0644 \u062a\u0644\u0642\u0627\u0626\u064a \u0644\u0644\u0648\u0636\u0640\u0639 \u0627\u0644\u0644\u064a\u0644\u064a"),f.a.createElement("div",{id:"autoDarkmodeSwitchContainer",onClick:function(){return e.autoDarkmodeSwitchButton(window.localStorage.getItem("autoDarkMode"))}},f.a.createElement("div",{id:"autoDarkmodeSwitchButton"}))),f.a.createElement("div",{className:"settingsItemsContainer",style:{paddingTop:"3%"}},f.a.createElement("p",{className:"personalInfoTitles"},"\u0627\u062e\u0640\u0640\u062a\u0640\u0640\u0631 \u0623\u0644\u0640\u0648\u0627\u0646 \u0627\u0644\u0640\u062a\u0640\u0637\u0640\u0628\u0640\u064a\u0640\u0642"),f.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},f.a.createElement("div",{className:"themeColorContainer",style:{background:"linear-gradient(to right, #41cd8c, #45d0dd)"},onClick:function(){return e.changeThemeColor("#41cd8c","#45d0dd")}}),f.a.createElement("div",{className:"themeColorContainer",style:{background:"linear-gradient(to right, #517fa4, #243949)"},onClick:function(){return e.changeThemeColor("#517fa4","#243949")}}),f.a.createElement("div",{className:"themeColorContainer",style:{background:"linear-gradient(to right, #099a97, #15cda8)"},onClick:function(){return e.changeThemeColor("#099a97","#15cda8")}}),f.a.createElement("div",{className:"themeColorContainer",style:{background:"linear-gradient(to right, #e52d27  , #b31217)"},onClick:function(){return e.changeThemeColor("#e52d27","#b31217")}})),f.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},f.a.createElement("div",{className:"themeColorContainer",style:{background:"linear-gradient(to right, #799F0C, #ACBB78)"},onClick:function(){return e.changeThemeColor("#799F0C","#ACBB78")}}),f.a.createElement("div",{className:"themeColorContainer",style:{background:"linear-gradient(to right, #9e6496, #42275a)"},onClick:function(){return e.changeThemeColor("#9e6496","#42275a")}}),f.a.createElement("div",{className:"themeColorContainer",style:{background:"linear-gradient(to right, #c71d6f, #fd68a3)"},onClick:function(){return e.changeThemeColor("#c71d6f","#fd68a3")}}),f.a.createElement("div",{className:"themeColorContainer",style:{background:"linear-gradient(to right, #ed6ea0, #ec8c69)"},onClick:function(){return e.changeThemeColor("#ed6ea0","#ec8c69")}})),f.a.createElement("div",{id:"customThemeColor"},f.a.createElement("p",{className:"personalInfoTitles"},"\u0644\u0648\u0646 \u0645\u062e\u0635\u0635"),f.a.createElement("input",{id:"selectSecondColor",type:"color",onChange:function(e){var t=JSON.parse(window.localStorage.getItem("theme"));t[1]=e.target.value,document.documentElement.style.setProperty("--second-color",t[1]),window.localStorage.setItem("theme",JSON.stringify(t))}}),f.a.createElement("input",{id:"selectMainColor",type:"color",onChange:function(e){var t=JSON.parse(window.localStorage.getItem("theme"));t[0]=e.target.value,document.documentElement.style.setProperty("--main-color",t[0]),document.querySelector("meta[name=theme-color]").setAttribute("content",t[0]),window.localStorage.setItem("theme",JSON.stringify(t))}}))),f.a.createElement("div",{id:"addToHomeSettingsContainer",style:{display:n?"block":"none"}},f.a.createElement("p",null,"\u0627\u0644\u0640\u062a\u0640\u062b\u0640\u0628\u0640\u064a\u062a \u0643\u0640\u062a\u0640\u0637\u0628\u0640\u064a\u0640\u0642 \u0648\u064a\u0640\u0628")),f.a.createElement("div",{id:"shareSettingsContainer",onClick:function(){navigator.share&&navigator.share({title:"\u0633\u0639\u0631\u0627\u062a\u064a \u0627\u0644\u064a\u0648\u0645\u064a\u0629",text:document.querySelector("title").innerHTML,url:window.location.origin}).then((function(){return console.log("Successful share")})).catch((function(e){return console.log("Error sharing",e)}))},style:{display:navigator.share?"block":"none"}},f.a.createElement("p",null,"\u0645\u0640\u0634\u0640\u0627\u0631\u0643\u0640\u0629 \u0631\u0627\u0628\u0640\u0637 \u0627\u0644\u0640\u062a\u0640\u0637\u0640\u0628\u0640\u064a\u0640\u0642"))))}}]),r}(d.Component)},69:function(e,t,a){e.exports=a.p+"static/media/down-arrow-black.ca29e37c.svg"}}]);
//# sourceMappingURL=13.1a6a557a.chunk.js.map