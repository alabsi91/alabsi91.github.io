(this["webpackJsonplifesum-app"]=this["webpackJsonplifesum-app"]||[]).push([[8],{65:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return N}));var i=a(6),n=a.n(i),l=a(12),r=a(7),o=a(8),s=a(10),u=a(9),c=a(0),d=a.n(c),m=a(2),y=a(3),N=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).dailyDetailsNutritionSum=function(t){var a=y.d.diary.filter((function(t){return t.date===e.props.date}))[0],i=0;if(a)for(var n in a){if("date"!==n&&"eaten"!==n)i+=a[n].map((function(e){return e=Object.assign({},y.b.filter((function(t){return t.id===e[0]}))[0],{value:e[1],input:e[2]})})).map((function(e){return e[t]*(e.value*e.input/100)})).reduce((function(e,t){return e+t}))}return i},e.remainKcalSum=function(){return Math.round(y.d.userInfo.dailykcal-e.dailyDetailsNutritionSum("kcal"))},e.eatenKcalPercent=function(){return Math.round(Math.round(e.dailyDetailsNutritionSum("kcal"))/y.d.userInfo.dailykcal*100)},e.allCarbSum=function(){return Math.round(y.d.userInfo.dailyCarbs-e.dailyDetailsNutritionSum("carb"))},e.carbPercent=function(){return Math.round(Math.round(e.dailyDetailsNutritionSum("carb"))/y.d.userInfo.dailyCarbs*100)},e.allProteinSum=function(){return Math.round(y.d.userInfo.dailyProtein-e.dailyDetailsNutritionSum("protein"))},e.proteinPercent=function(){return Math.round(Math.round(e.dailyDetailsNutritionSum("protein"))/y.d.userInfo.dailyProtein*100)},e.allFatSum=function(){return Math.round(y.d.userInfo.dailyFat-e.dailyDetailsNutritionSum("fat"))},e.fatPercent=function(){return Math.round(Math.round(e.dailyDetailsNutritionSum("fat"))/y.d.userInfo.dailyFat*100)},e.introPageTransition=Object(l.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("dailyDetailsHandlePage"),a=document.getElementById("dailyDetailsHeader"),t.style.cssText="position: fixed; bottom: 50%; left: 50%; opacity: 0; transform: translate(-50%, 100%); transition: bottom 200ms",a.style.position="relative",e.next=6,Object(m.c)(10);case 6:return t.style.bottom="100%",t.style.opacity="1",e.next=10,Object(m.c)(200);case 10:t.removeAttribute("style"),a.removeAttribute("style");case 12:case"end":return e.stop()}}),e)}))),e.backButtonHandle=function(){return window.history.back()},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){"/summary"===window.location.pathname?Object(m.b)("#dailyDetailsHeader").css("display","none"):this.introPageTransition()}},{key:"render",value:function(){return d.a.createElement("div",{id:"dailyDetailsHandlePage"},d.a.createElement("header",{id:"dailyDetailsHeader"},d.a.createElement("svg",{id:"dailyDetailsBack",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",onClick:this.backButtonHandle},d.a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})),d.a.createElement("p",{id:"dailyDetailsHeaderTitle"},"\u062a\u0640\u0641\u0640\u0627\u0635\u0640\u064a\u0640\u0644 \u0627\u0644\u0640\u064a\u0640\u0648\u0645")),d.a.createElement("div",{style:{backgroundColor:"var(--background-white"}},d.a.createElement("p",{id:"intakeTitle"},"( "+this.props.date+" )  \u0627\u0644\u0645\u0633\u062a\u0647\u0644\u0643\u0629 \u0641\u064a \u064a\u0648\u0645 "),d.a.createElement("div",{className:"intakePercentTitlesContainer"},d.a.createElement("p",{style:{color:this.remainKcalSum()<0?"#FE5F8F":"var(--text-kinda-black)"}},"\u0627\u0644\u0633\u0639\u0631\u0627\u062a"),d.a.createElement("p",{style:{color:this.remainKcalSum()<0?"#FE5F8F":"var(--text-kinda-black)"}},(this.remainKcalSum()<0?-1*this.remainKcalSum()+" \u0632\u0627\u0626\u0640\u0640\u062f\u0629":this.remainKcalSum()+" \u0645\u0640\u062a\u0640\u0628\u0640\u0642\u0640\u064a\u0640\u0629")+" / "+y.d.userInfo.dailykcal)),d.a.createElement("div",{className:"intakePercentContainer"},d.a.createElement("div",{style:{width:this.eatenKcalPercent()+"%",backgroundImage:this.remainKcalSum()<0?"linear-gradient(-225deg, #FE5F8F 0%, #FE5F8F 100%)":"linear-gradient(-225deg, var(--main-color) 0%, var(--second-color) 100%)"}})),d.a.createElement("div",{className:"intakePercentTitlesContainer"},d.a.createElement("p",{style:{color:this.allCarbSum()<0?"#FE5F8F":"var(--text-kinda-black)"}},"\u0627\u0644\u0643\u0631\u0628\u0648\u0647\u064a\u062f\u0631\u0627\u062a"),d.a.createElement("p",{style:{color:this.allCarbSum()<0?"#FE5F8F":"var(--text-kinda-black)"}},(this.allCarbSum()<0?-1*this.allCarbSum()+" \u063a \u0632\u0627\u0626\u0640\u0640\u062f\u0629":this.allCarbSum()+" \u063a \u0645\u0640\u062a\u0640\u0628\u0640\u0642\u0640\u064a\u0640\u0629")+" / "+y.d.userInfo.dailyCarbs+" \u063a")),d.a.createElement("div",{className:"intakePercentContainer"},d.a.createElement("div",{style:{width:this.carbPercent()+"%",backgroundImage:this.allCarbSum()<0?"linear-gradient(-225deg, #FE5F8F 0%, #FE5F8F 100%)":"linear-gradient(-225deg, var(--main-color) 0%, var(--second-color) 100%)"}})),d.a.createElement("div",{className:"intakePercentTitlesContainer"},d.a.createElement("p",{style:{color:this.allProteinSum()<0?"#FE5F8F":"var(--text-kinda-black)"}},"\u0627\u0644\u0628\u0631\u0648\u062a\u064a\u0646"),d.a.createElement("p",{style:{color:this.allProteinSum()<0?"#FE5F8F":"var(--text-kinda-black)"}},(this.allProteinSum()<0?-1*this.allProteinSum()+" \u063a \u0632\u0627\u0626\u0640\u0640\u062f\u0629":this.allProteinSum()+" \u063a \u0645\u0640\u062a\u0640\u0628\u0640\u0642\u0640\u064a\u0640\u0629")+" / "+y.d.userInfo.dailyProtein+" \u063a")),d.a.createElement("div",{className:"intakePercentContainer"},d.a.createElement("div",{style:{width:this.proteinPercent()+"%",backgroundImage:this.allProteinSum()<0?"linear-gradient(-225deg, #FE5F8F 0%, #FE5F8F 100%)":"linear-gradient(-225deg, var(--main-color) 0%, var(--second-color) 100%)"}})),d.a.createElement("div",{className:"intakePercentTitlesContainer"},d.a.createElement("p",{style:{color:this.allFatSum()<0?"#FE5F8F":"var(--text-kinda-black)"}},"\u0627\u0644\u062f\u0647\u0648\u0646"),d.a.createElement("p",{style:{color:this.allFatSum()<0?"#FE5F8F":"var(--text-kinda-black)"}},(this.allFatSum()<0?-1*this.allFatSum()+" \u063a \u0632\u0627\u0626\u0640\u0640\u062f\u0629":this.allFatSum()+" \u063a \u0645\u0640\u062a\u0640\u0628\u0640\u0642\u0640\u064a\u0640\u0629")+" / "+y.d.userInfo.dailyFat+" \u063a")),d.a.createElement("div",{className:"intakePercentContainer"},d.a.createElement("div",{style:{width:this.fatPercent()+"%",backgroundImage:this.allFatSum()<0?"linear-gradient(-225deg, #FE5F8F 0%, #FE5F8F 100%)":"linear-gradient(-225deg, var(--main-color) 0%, var(--second-color) 100%)"}}))),d.a.createElement("p",{id:"infoTitle"},"\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u063a\u0630\u0627\u0626\u064a\u0629"),d.a.createElement("div",{id:"dailyDetailsNutritionInfoDetail"},d.a.createElement("div",{id:"dailyDetailsNutritionInfoTitles"},d.a.createElement("p",{className:"dailyDetailsNutritionInfoMain"},"\u0627\u0644\u0628\u0631\u0648\u062a\u064a\u0646"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoMain"},"\u0627\u0644\u0643\u0631\u0628\u0648\u0647\u064a\u062f\u0631\u0627\u062a"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoSub"},"\u0627\u0644\u0623\u0644\u064a\u0627\u0641"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoSub"},"\u0627\u0644\u0633\u0643\u0631"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoMain"},"\u0627\u0644\u062f\u0647\u0648\u0646"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoSub"},"\u0627\u0644\u062f\u0647\u0648\u0646 \u0627\u0644\u0645\u0634\u0628\u0639\u0629"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoSub"},"\u0627\u0644\u062f\u0647\u0648\u0646 \u0627\u0644\u063a\u064a\u0631 \u0645\u0634\u0628\u0639\u0629"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoMain"},"\u0622\u062e\u0631"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoSub"},"\u0627\u0644\u0643\u0648\u0644\u064a\u0633\u062a\u0631\u0648\u0644"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoSub"},"\u0627\u0644\u0635\u0648\u062f\u064a\u0648\u0645"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoSub"},"\u0627\u0644\u0628\u0648\u062a\u0627\u0633\u064a\u0648\u0645")),d.a.createElement("div",{id:"dailyDetailsNutritionInfoValues"},d.a.createElement("p",{className:"dailyDetailsNutritionInfoMain"},Number(this.dailyDetailsNutritionSum("protein").toFixed(1))," \u063a"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoMain"},Number(this.dailyDetailsNutritionSum("carb").toFixed(1))," \u063a"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoSub"},Number(this.dailyDetailsNutritionSum("fiber").toFixed(1))," \u063a"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoSub"},Number(this.dailyDetailsNutritionSum("sugar").toFixed(1))," \u063a"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoMain"},Number(this.dailyDetailsNutritionSum("fat").toFixed(1))," \u063a"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoSub"},Number(this.dailyDetailsNutritionSum("saturatedFat").toFixed(2))," \u063a"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoSub"},Number(this.dailyDetailsNutritionSum("unsaturatedFat").toFixed(2))," \u063a"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoMain",style:{color:"rgb(0 ,0 ,0 ,0)"}},"......"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoSub"},this.dailyDetailsNutritionSum("cholesterol").toFixed(0)," \u0645\u0644\u063a"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoSub"},this.dailyDetailsNutritionSum("sodium").toFixed(0)," \u0645\u0644\u063a"),d.a.createElement("p",{className:"dailyDetailsNutritionInfoSub"},this.dailyDetailsNutritionSum("potassium").toFixed(0)," \u0645\u0644\u063a"))))}}]),a}(c.Component)}}]);
//# sourceMappingURL=8.91e9dcd5.chunk.js.map