(this["webpackJsonplifesum-app"]=this["webpackJsonplifesum-app"]||[]).push([[16],{67:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return m}));var n=t(8),r=t(9),s=t(11),i=t(10),l=t(0),o=t.n(l),c=t(5),p=o.a.lazy((function(){return t.e(4).then(t.bind(null,64))})),m=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=a.call.apply(a,[this].concat(s))).mountMealViewer=function(){var a=[window.location.pathname,window.location.hash],t=a[0],n=a[1];"/favorites"===t&&"#Meals"===n?window.history.pushState("","","/favorites#Meals#MealViewer"):"/favorites"===t&&0!==n.length&&window.history.pushState("","","/favorites#Meals#"+n.split("#")[2]+"#MealViewer"),Object(c.updateRenderState)(o.a.createElement(l.Suspense,{fallback:""},o.a.createElement(p,{key:1e3*Math.random(),doAnimation:!0,name:e.props.name,kcal:e.props.kcal})))},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"mealCardContainer",onClick:this.mountMealViewer},o.a.createElement("div",{className:"mealCardIcon"}),o.a.createElement("div",{className:"mealCardInfoContainer"},o.a.createElement("p",{className:"mealCardName"},this.props.name),o.a.createElement("p",{className:"mealCardIngredients"},1===this.props.ingredients?"\u0645\u0643\u0648\u0646 \u0648\u0627\u062d\u062f":2===this.props.ingredients?"\u0645\u0643\u0648\u0646\u0627\u0646":this.props.ingredients,1===this.props.ingredients||2===this.props.ingredients?"":" \u0645\u0643\u0648\u0646\u0627\u062a"),o.a.createElement("p",{className:"mealCardKcal"},Math.round(this.props.kcal)," \u0633\u0639\u0631\u0629 \u062d\u0631\u0627\u0631\u064a\u0629")))}}]),t}(l.Component)}}]);
//# sourceMappingURL=16.55e4db9a.chunk.js.map