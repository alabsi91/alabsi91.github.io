(this["webpackJsonplifesum-app"]=this["webpackJsonplifesum-app"]||[]).push([[18],{36:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var n=t(7),r=t.n(n),s=t(13),l=t(8),c=t(9),i=t(11),o=t(10),m=t(0),u=t.n(m),d=t(2),f=t(3),p=t(1),h=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).bmi=function(){return f.d.userInfo.weight/Math.pow(f.d.userInfo.height/100,2)},e.bmiArrowAnim=function(){var a=e.bmi(),t=document.getElementById("bmiArrow");if(a>35)p.v.to(t,{duration:.7,left:"calc(100% - 7px)",delay:.3});else if(a<0)t.style.left="calc(0% - 7px)";else{var n=Math.round(100*a/35);p.v.to(t,{duration:.7,left:"calc(".concat(n,"% - 7px)"),delay:.3})}},e.bmiRange=function(){var a,t,n,r=e.bmi(),s=f.d.userInfo.age;return r<18.5&&s>=20?(a="\u0646\u0642\u0635 \u0648\u0632\u0646",t="\u0639\u0644\u064a\u0643 \u0627\u0643\u062a\u0633\u0627\u0628 \u0628\u0639\u0636 \u0627\u0644\u0648\u0632\u0646",n="#d0a50b"):r>=18.5&&r<24.9&&s>=20?(a="\u0648\u0632\u0646 \u0637\u0628\u064a\u0639\u064a",t="\u0639\u0644\u064a\u0643 \u0627\u0644\u062d\u0641\u0627\u0638 \u0639\u0644\u0649 \u0648\u0632\u0646\u0643",n="#40ff45"):r>=24.9&&r<29.9&&s>=20?(a="\u0648\u0632\u0646 \u0632\u0627\u0626\u062f",t="\u0639\u0644\u064a\u0643 \u062e\u0633\u0627\u0631\u0629 \u0628\u0639\u0636 \u0627\u0644\u0648\u0632\u0646",n="#d0a50b"):r>=29.9&&s>=20?(a="\u0628\u062f\u0627\u0646\u0629",t="\u0639\u0644\u064a\u0643 \u062e\u0633\u0627\u0631\u0629 \u0627\u0644\u0648\u0632\u0646",n="#dc2900"):s<=18&&(a="\u0637\u0641\u0644 \u0623\u0648 \u0645\u0631\u0627\u0647\u0642"),[a,t,n]},e.HarrisBenedictBMR=function(){var e=f.d.userInfo.gender,a=f.d.userInfo.weight,t=f.d.userInfo.height,n=f.d.userInfo.age,r="male"===e?66.47+13.75*a+5.003*t-6.755*n:655.1+9.563*a+1.85*t-4.676*n;return Math.round(r)},e.MifflinStJeorBMR=function(){var e=f.d.userInfo.gender,a=f.d.userInfo.weight,t=f.d.userInfo.height,n=f.d.userInfo.age,r="male"===e?10*a+6.25*t-5*n+5:10*a+6.25*t-5*n-161;return Math.round(r)},e.activityMultipier=function(){return Math.round(e.state.bmr*f.d.userInfo.activity)},e.ibw=function(e){var a,t=f.d.userInfo.gender,n=f.d.userInfo.height;switch(e){case"broca":a="male"===t?n-100-.1*(n-100):n-100+.15*(n-100);break;case"devine":a="male"===t?50+2.3*(n/2.54-60):45.5+2.3*(n/2.54-60);break;case"robinson":a="male"===t?52+1.9*(n/2.54-60):49+1.7*(n/2.54-60);break;case"millier":a="male"===t?56.2+1.41*(n/2.54-60):53.1+1.36*(n/2.54-60);break;case"hamwi":a="male"===t?48+2.7*(n/2.54-60):45.5+2.2*(n/2.54-60);break;case"lemmens":a=22*Math.pow(n/100,2)}return Math.round(a)},e.lbm=function(e){var a,t=f.d.userInfo.gender,n=f.d.userInfo.height,r=f.d.userInfo.weight;switch(e){case"boer":a="male"===t?.407*r+.267*n-19.2:.252*r+.473*n-48.3;break;case"james":a="male"===t?1.1*r-128*Math.pow(r/n,2):1.07*r-148*Math.pow(r/n,2);break;case"hume":a="male"===t?.3281*r+.33929*n-29.5336:.29569*r+.41813*n-43.2933}var s=Math.round(100*a/r),l=Math.round(100-s);return[Math.round(a),s,l]},e.tbw=function(){var e=f.d.userInfo.gender,a=f.d.userInfo.weight,t=f.d.userInfo.height,n=f.d.userInfo.age,r="male"===e?2.447-.09156*n+.1074*t+.3362*a:.1069*t-2.097+.2466*a;return Math.round(r)},e.centerSelect=function(){var e=Object(s.a)(r.a.mark((function e(a){var t,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById(a),(n=document.createElement("p")).style.fontSize="calc(16px + 6 * ((var(--vw) - 320px) / 680))",n.style.display="inline-block",n.innerHTML=t.options[t.selectedIndex].innerHTML,document.body.appendChild(n),s=parseFloat(window.getComputedStyle(n).getPropertyValue("width"))/2+"px)",n.remove(),t.style.removeProperty("width"),e.next=11,Object(d.c)(5);case 11:t.style.width="99%",t.style.paddingLeft="calc(50% - "+s;case 13:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),e.introPageFadeTransition=Object(s.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=document.getElementById("measuresPage")).style.opacity="0",a.style.transition="opacity 350ms",e.next=5,Object(d.c)(20);case 5:return a.style.opacity="1",e.next=8,Object(d.c)(350);case 8:a.removeAttribute("style");case 9:case"end":return e.stop()}}),e)}))),e.infoHandle=function(){var e=Object(s.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.v.to("#".concat(a,"Card"),{duration:.15,scaleY:0}),p.v.to("#".concat(a,"Card"),{duration:.15,delay:.15,scaleY:1}),e.next=4,Object(d.c)(150);case 4:Object(d.b)("#".concat(a,"Card > *")).css("display","none"),Object(d.b)("#".concat(a,"Card > .measureInfoClose")).css("display","block"),Object(d.b)("#".concat(a,"Card > .infoPara")).css("display","block");case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),e.infoClosehandle=function(){var e=Object(s.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.v.to("#".concat(a,"Card"),{duration:.15,scaleY:0}),p.v.to("#".concat(a,"Card"),{duration:.15,delay:.15,scaleY:1}),e.next=4,Object(d.c)(150);case 4:Object(d.b)("#".concat(a,"Card > *")).removeAttr("style"),Object(d.b)("#".concat(a,"Card > .measureInfoClose")).removeAttr("style"),Object(d.b)("#".concat(a,"Card > .infoPara")).removeAttr("style");case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),e.forMoreInfoAnimation=function(){var e=Object(d.b)("#forMoreInfo").getStyle("width"),a=window.innerWidth<=400?"160px":"180px";p.v.timeline({delay:1.5}).to("#forMoreInfo",{duration:.3,scale:1},"a").to("#bmiCard > .measureInfo",{duration:.3,fill:"white"},"a").to("#forMoreInfo",{duration:.3,width:a}).to("#forMoreInfo",{duration:.3,width:e},"+=3").to("#forMoreInfo",{duration:.3,scale:0},"+=0.2").to("#bmiCard > .measureInfo",{duration:.3,clearProps:"fill"},"-=0.5")},e.state={bmr:e.HarrisBenedictBMR(),ibw:e.ibw("broca"),lbm:e.lbm("boer")},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.introPageFadeTransition(),window.scrollTo({top:0}),this.bmiArrowAnim(),this.forMoreInfoAnimation(),this.centerSelect("bmrSelect"),this.centerSelect("ibwSelect"),this.centerSelect("lbmSelect")}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{id:"measuresPage"},u.a.createElement("header",{id:"measuresPageHeader"},u.a.createElement("p",{id:"measuresPageHeaderTitle"},"\u062d\u0627\u0633\u0628\u0629 \u0645\u0642\u0627\u064a\u064a\u0633 \u0627\u0644\u062c\u0633\u0645")),u.a.createElement("div",{className:"cardContainer",id:"bmiCard"},u.a.createElement("div",{id:"forMoreInfo"},u.a.createElement("p",{id:"forMoreInfoPara"},"\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a")),u.a.createElement("svg",{className:"measureInfo",onClick:function(){return e.infoHandle("bmi")},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})),u.a.createElement("svg",{className:"measureInfoClose",onClick:function(){return e.infoClosehandle("bmi")},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})),u.a.createElement("p",{className:"mainTitles"},"\u0645\u0624\u0634\u0631 \u0643\u062a\u0644\u0629 \u0627\u0644\u062c\u0633\u0645 ( BMI )"),u.a.createElement("p",{className:"subTitles"},"\u0645\u0624\u0634\u0631 \u0643\u062a\u0644\u0629 \u062c\u0633\u0645\u0643"),u.a.createElement("p",{className:"results"},this.bmi().toFixed(1)),u.a.createElement("p",{className:"subTitles",style:{color:this.bmiRange()[2]}},this.bmiRange()[0]),u.a.createElement("div",{id:"bmibar"},u.a.createElement("span",{id:"bmiArrow"})),u.a.createElement("p",{className:"subTitles"},this.bmiRange()[1]),u.a.createElement("p",{className:"infoPara"},u.a.createElement("span",null,"\u0645\u0624\u0634\u0631 \u0643\u062a\u0644\u0629 \u0627\u0644\u062c\u0633\u0645"),u.a.createElement("br",null),"\u064a\u0645\u0643\u0646 \u0644\u0645\u0624\u0634\u0631 \u0643\u062a\u0644\u0629 \u0627\u0644\u062c\u0633\u0645 \u0625\u062e\u0628\u0627\u0631\u0643 \u0628\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0632\u0627\u0626\u062f \u0648\u0644\u0643\u0646 \u0644\u0627 \u064a\u0645\u0643\u0646 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0645\u0639\u064a\u0627\u0631\u0627\u064b \u062f\u0642\u064a\u0642\u0627\u064b \u0644\u0627\u062e\u0628\u0627\u0631\u0643 \u0628\u0648\u0632\u0646 \u0627\u0644\u062f\u0647\u0648\u0646 \u0627\u0644\u0632\u0627\u0626\u062f\u0629 \u0644\u0623\u0646\u0647 \u0644\u0627 \u064a\u0645\u064a\u0632 \u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 \u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0632\u0627\u0626\u062f \u0644\u0644\u0639\u0636\u0644\u0627\u062a \u0623\u0648 \u0644\u0644\u062f\u0647\u0648\u0646 \u0623\u0648 \u0644\u0644\u0639\u0638\u0627\u0645 . \u0639\u0644\u0649 \u0639\u0643\u0633 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u060c \u0645\u0624\u0634\u0631 \u0643\u062a\u0644\u0629 \u0627\u0644\u062c\u0633\u0645 \u0644\u0644\u0628\u0627\u0644\u063a\u064a\u0646 \u0644\u0627 \u064a\u062a\u0623\u062b\u0631 \u0628\u0627\u0644\u0639\u0645\u0631 \u0623\u0648 \u0627\u0644\u062c\u0646\u0633 \u0623\u0648 \u0627\u0644\u0643\u062a\u0644\u0629 \u0627\u0644\u0639\u0636\u0644\u064a\u0629. \u0627\u0644\u062d\u0645\u0644 \u064a\u0624\u062b\u0631 \u0623\u064a\u0636\u0627\u064b \u0639\u0644\u0649 \u0645\u0624\u0634\u0631 \u0643\u062a\u0644\u0629 \u0627\u0644\u062c\u0633\u0645 \u0644\u0647\u0630\u0627 \u0627\u0644\u0633\u0628\u0628 \u064a\u062c\u0628 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0648\u0632\u0646 \u0645\u0627 \u0642\u0628\u0644 \u0627\u0644\u062d\u0645\u0644 \u0644\u062d\u0633\u0627\u0628 \u0645\u0624\u0634\u0631 \u0643\u062a\u0644\u0629 \u0627\u0644\u062c\u0633\u0645.")),u.a.createElement("div",{className:"cardContainer",id:"bmrCard"},u.a.createElement("svg",{className:"measureInfo",onClick:function(){return e.infoHandle("bmr")},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})),u.a.createElement("svg",{className:"measureInfoClose",onClick:function(){return e.infoClosehandle("bmr")},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})),u.a.createElement("p",{className:"mainTitles"},"\u0627\u0644\u0627\u0633\u062a\u0642\u0644\u0627\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064a ( BMR )"),u.a.createElement("div",{className:"selectContainer"},u.a.createElement("p",{className:"selectTitle"},"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0639\u0627\u062f\u0644\u0629"),u.a.createElement("select",{id:"bmrSelect",className:"selectEquation",onChange:function(a){"Harris"===a.target.value?e.setState({bmr:e.HarrisBenedictBMR()}):e.setState({bmr:e.MifflinStJeorBMR()}),e.centerSelect("bmrSelect")}},u.a.createElement("option",{value:"Harris"},"Harris Benedict Equation"),u.a.createElement("option",{value:"Mifflin"},"Mifflin-St Jeor Equation"))),u.a.createElement("p",{className:"subTitles"},"\u0645\u0639\u062f\u0644 \u0627\u0633\u062a\u0642\u0644\u0627\u0628\u0643 \u0627\u0644\u0623\u0633\u0627\u0633\u064a"),u.a.createElement("p",{className:"results"},this.state.bmr,u.a.createElement("span",{className:"resultsUnits"},"\u0633\u0639\u0631\u0629 \u0641\u064a \u0627\u0644\u064a\u0648\u0645")),u.a.createElement("p",{className:"subTitles"},"\u0627\u0644\u0633\u0639\u0631\u0627\u062a \u0627\u0644\u062d\u0631\u0627\u0631\u064a\u0629 \u0627\u0644\u0644\u0627\u0632\u0645\u0629 \u064a\u0648\u0645\u064a\u0627\u064b"),u.a.createElement("p",{className:"results"},this.activityMultipier(),u.a.createElement("span",{className:"resultsUnits"},"\u0633\u0639\u0631\u0629 \u0641\u064a \u0627\u0644\u064a\u0648\u0645")),u.a.createElement("p",{className:"infoPara"},u.a.createElement("span",null,"\u0645\u0639\u062f\u0644 \u0627\u0644\u0627\u0633\u062a\u0642\u0644\u0627\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064a"),u.a.createElement("br",null),"\u0645\u0639\u062f\u0644 \u0627\u0644\u0623\u064a\u0636 \u0627\u0644\u0623\u0633\u0627\u0633\u064a \u0623\u0648 \u0645\u0639\u062f\u0644 \u0627\u0644\u0627\u0633\u062a\u0642\u0644\u0627\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064a \u0647\u0648 \u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u062a\u064a \u062a\u0633\u062a\u062e\u062f\u0645 \u0644\u0648\u0635\u0641 \u0627\u0644\u0627\u0633\u062a\u0642\u0644\u0627\u0628 (\u0627\u0644\u0623\u064a\u0636) \u060c \u0648\u0647\u064a \u0642\u064a\u0645\u0629 \u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u062a\u064a \u064a\u062a\u0637\u0644\u0628\u0647\u0627 \u0627\u0644\u062c\u0633\u0645 \u062e\u0644\u0627\u0644 \u064a\u0648\u0645 \u0648\u0627\u062d\u062f \u0644\u0625\u0639\u0627\u062f\u0629 \u0635\u064a\u0627\u0646\u0629 \u0648\u0638\u0627\u0626\u0641\u0647 \u0639\u0646\u062f\u0645\u0627 \u064a\u0643\u0648\u0646 \u0627\u0644\u062c\u0633\u0645 \u0641\u064a \u062d\u0627\u0644\u0629 \u0631\u0627\u062d\u0629 \u062a\u0627\u0645\u0629 \u0648\u0641\u064a \u062d\u0627\u0644\u0629 \u0627\u0644\u064a\u0642\u0638\u0629 \u0635\u0628\u0627\u062d\u0627\u064b \u0648\u0641\u064a \u062d\u0627\u0644\u0629 \u0639\u062f\u0645 \u0646\u0634\u0627\u0637 \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u0647\u0636\u0645 \u0648\u062a\u062d\u062a \u062f\u0631\u062c\u0629 \u0627\u0644\u062d\u0631\u0627\u0631\u0629 \u0627\u0644\u0639\u0627\u062f\u064a\u0629 \u0644\u0644\u063a\u0631\u0641\u0629 ( 28 \u062f\u0631\u062c\u0629 \u0645\u0626\u0648\u064a\u0629). \u0643\u0645\u0627 \u062a\u0648\u0641\u0631 \u0644\u0643 \u0627\u0644\u062d\u0627\u0633\u0628\u0629 \u0627\u0645\u0643\u0627\u0646\u064a\u0629 \u062d\u0633\u0627\u0628 \u0627\u0644\u0633\u0639\u0631\u0627\u062a \u0627\u0644\u064a\u0648\u0645\u064a\u0629 \u0627\u0644\u0644\u0627\u0632\u0645\u0629 \u0644\u0644\u062d\u0641\u0627\u0638 \u0639\u0644\u0649 \u0627\u0644\u0648\u0632\u0646 \u0648\u0630\u0644\u0643 \u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 \u0646\u0634\u0627\u0637\u0643 \u0627\u0644\u064a\u0648\u0645\u064a.")),u.a.createElement("div",{className:"cardContainer",id:"ibwCard"},u.a.createElement("svg",{className:"measureInfo",onClick:function(){return e.infoHandle("ibw")},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})),u.a.createElement("svg",{className:"measureInfoClose",onClick:function(){return e.infoClosehandle("ibw")},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})),u.a.createElement("p",{className:"mainTitles"},"\u0648\u0632\u0646 \u0627\u0644\u062c\u0633\u0645 \u0627\u0644\u0645\u062b\u0627\u0644\u064a ( IBW )"),u.a.createElement("div",{className:"selectContainer"},u.a.createElement("p",{className:"selectTitle"},"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0639\u0627\u062f\u0644\u0629"),u.a.createElement("select",{id:"ibwSelect",className:"selectEquation",onChange:function(a){e.setState({ibw:e.ibw(a.target.value)}),e.centerSelect("ibwSelect")}},u.a.createElement("option",{value:"broca"},"The Borca Index"),u.a.createElement("option",{value:"devine"},"The Davine Formula"),u.a.createElement("option",{value:"robinson"},"Robinson Formula"),u.a.createElement("option",{value:"millier"},"The Miller Formula"),u.a.createElement("option",{value:"hamwi"},"The Hamwi Formula"),u.a.createElement("option",{value:"lemmens"},"Lemmens Formula"))),u.a.createElement("p",{className:"subTitles"},"\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0645\u062b\u0627\u0644\u064a \u0644\u062c\u0633\u0645\u0643"),u.a.createElement("p",{className:"results"},this.state.ibw,u.a.createElement("span",{className:"resultsUnits"},"\u0643\u064a\u0644\u0648\u063a\u0631\u0627\u0645")),u.a.createElement("p",{className:"infoPara"},u.a.createElement("span",null,"\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0645\u062b\u0627\u0644\u064a \u0644\u0644\u062c\u0633\u0645"),u.a.createElement("br",null),"\u064a\u0634\u064a\u0631 (IBW) \u0625\u0644\u0649 \u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0645\u062b\u0627\u0644\u064a \u0644\u0644\u062c\u0633\u0645 \u0627\u0633\u062a\u0646\u0627\u062f\u0627\u064b \u0625\u0644\u0649 \u062c\u0646\u0633\u0643 \u0648\u0637\u0648\u0644\u0643. \u062a\u0645 \u062a\u0642\u062f\u064a\u0645 (IBW) \u0641\u064a \u0627\u0644\u0648\u0627\u0642\u0639 \u0644\u062a\u0642\u062f\u064a\u0631 \u0627\u0644\u062c\u0631\u0639\u0627\u062a \u0644\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0637\u0628\u064a \u060c \u0648\u0644\u0627 \u064a\u062a\u0639\u0644\u0642 \u0639\u0644\u0649 \u0627\u0644\u0625\u0637\u0644\u0627\u0642 \u0628\u0627\u0644\u062c\u0627\u0630\u0628\u064a\u0629 \u0627\u0644\u0628\u0635\u0631\u064a\u0629 \u0627\u0644\u0645\u062a\u0635\u0648\u0631\u0629 \u0641\u064a \u0627\u0644\u0645\u062c\u062a\u0645\u0639. \u0627\u0644\u064a\u0648\u0645 \u064a\u062a\u0645 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 (IBW) \u0639\u0644\u0649 \u0646\u0637\u0627\u0642 \u0648\u0627\u0633\u0639 \u0641\u064a \u0627\u0644\u0645\u062c\u0627\u0644\u0627\u062a \u0627\u0644\u0631\u064a\u0627\u0636\u064a\u0629 \u060c \u062d\u064a\u062b \u064a\u062a\u0645 \u062a\u0635\u0646\u064a\u0641 \u0627\u0644\u0631\u064a\u0627\u0636\u064a\u064a\u0646 \u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 \u0648\u0632\u0646 \u0627\u0644\u062c\u0633\u0645. \u0644\u0627\u062d\u0638 \u0623\u0646 (IBW) \u0644\u064a\u0633 \u0645\u0642\u064a\u0627\u0633\u0627\u064b \u0645\u062b\u0627\u0644\u064a\u0627\u064b. \u0641\u0627\u0644\u0645\u0639\u0627\u062f\u0644\u0627\u062a \u0644\u0627 \u062a\u0623\u062e\u0630 \u0641\u064a \u0627\u0644\u0627\u0639\u062a\u0628\u0627\u0631 \u0627\u0644\u0646\u0633\u0628 \u0627\u0644\u0645\u0626\u0648\u064a\u0629 \u0644\u0644\u062f\u0647\u0648\u0646 \u0648\u0627\u0644\u0639\u0636\u0644\u0627\u062a \u0641\u064a \u0627\u0644\u062c\u0633\u0645. \u0647\u0630\u0627 \u064a\u0639\u0646\u064a \u0623\u0646\u0647 \u0645\u0646 \u0627\u0644\u0645\u0645\u0643\u0646 \u0644\u0644\u0631\u064a\u0627\u0636\u064a\u064a\u0646 \u0627\u0644\u0630\u064a\u0646 \u064a\u062a\u0645\u062a\u0639\u0648\u0646 \u0628\u0644\u064a\u0627\u0642\u0629 \u0639\u0627\u0644\u064a\u0629 \u0648\u0635\u062d\u0629 \u062c\u064a\u062f\u0629 \u0623\u0646 \u064a\u0639\u062a\u0628\u0631\u0648\u0627 \u064a\u0639\u0627\u0646\u0648\u0646 \u0645\u0646 \u0632\u064a\u0627\u062f\u0629 \u0627\u0644\u0648\u0632\u0646 \u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 (IBW). \u0644\u0647\u0630\u0627 \u0627\u0644\u0633\u0628\u0628 \u064a\u062c\u0628 \u0627\u0644\u0646\u0638\u0631 \u0625\u0644\u0649 (IBW) \u0645\u0646 \u0645\u0646\u0638\u0648\u0631 \u0623\u0646\u0647 \u0645\u0642\u064a\u0627\u0633 \u063a\u064a\u0631 \u0643\u0627\u0645\u0644 \u0648\u0644\u064a\u0633 \u0628\u0627\u0644\u0636\u0631\u0648\u0631\u0629 \u0645\u0624\u0634\u0631\u0627\u064b \u0639\u0644\u0649 \u0627\u0644\u0635\u062d\u0629 \u060c \u0623\u0648 \u0648\u0632\u0646\u0627\u064b \u064a\u062c\u0628 \u0623\u0646 \u064a\u0633\u0639\u0649 \u0627\u0644\u0634\u062e\u0635 \u0644\u062a\u062d\u0642\u064a\u0642\u0647 \u0628\u0627\u0644\u0636\u0631\u0648\u0631\u0629. \u064a\u062a\u0645 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0635\u064a\u063a \u0645\u062e\u062a\u0644\u0641\u0629 \u0644\u062d\u0633\u0627\u0628 (IBW). \u064a\u0645\u0643\u0646\u0643 \u062a\u063a\u064a\u064a\u0631 \u0627\u0644\u0635\u064a\u063a\u0629 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u0633\u062f\u0644\u0629.")),u.a.createElement("div",{className:"cardContainer",id:"lbmCard"},u.a.createElement("svg",{className:"measureInfo",onClick:function(){return e.infoHandle("lbm")},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})),u.a.createElement("svg",{className:"measureInfoClose",onClick:function(){return e.infoClosehandle("lbm")},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})),u.a.createElement("p",{className:"mainTitles"},"\u0643\u062a\u0644\u0629 \u0639\u0636\u0644\u0627\u062a \u0627\u0644\u062c\u0633\u0645 ( LBM )"),u.a.createElement("div",{className:"selectContainer"},u.a.createElement("p",{className:"selectTitle"},"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0639\u0627\u062f\u0644\u0629"),u.a.createElement("select",{id:"lbmSelect",className:"selectEquation",onChange:function(a){e.setState({lbm:e.lbm(a.target.value)}),e.centerSelect("lbmSelect")}},u.a.createElement("option",{value:"boer"},"The Boer Formula"),u.a.createElement("option",{value:"james"},"The James Formula"),u.a.createElement("option",{value:"hume"},"The Hume Formula"))),u.a.createElement("p",{className:"subTitles"},"\u0643\u062a\u0644\u0629 \u0627\u0644\u0639\u0636\u0644\u0627\u062a \u0641\u064a \u062c\u0633\u0645\u0643"),u.a.createElement("p",{className:"results"},this.state.lbm[0],u.a.createElement("span",{className:"resultsUnits"},"\u0643\u064a\u0644\u0648\u063a\u0631\u0627\u0645")),u.a.createElement("p",{className:"subTitles"},"\u0646\u0633\u0628\u0629 \u0643\u062a\u0644\u0629 \u0627\u0644\u0639\u0636\u0644\u0627\u062a \u0641\u064a \u062c\u0633\u0645\u0643"),u.a.createElement("p",{className:"results"},this.state.lbm[1],u.a.createElement("span",{className:"resultsUnits"}," % ")),u.a.createElement("p",{className:"subTitles"},"\u0646\u0633\u0628\u0629 \u0643\u062a\u0644\u0629 \u0627\u0644\u062f\u0647\u0648\u0646 \u0641\u064a \u062c\u0633\u0645\u0643"),u.a.createElement("p",{className:"results"},this.state.lbm[2],u.a.createElement("span",{className:"resultsUnits"}," % ")),u.a.createElement("p",{className:"infoPara"},u.a.createElement("span",null,"\u0643\u062a\u0644\u0629 \u0627\u0644\u0639\u0636\u0644\u0627\u062a \u0641\u064a \u0627\u0644\u062c\u0633\u0645"),u.a.createElement("br",null),"\u062a\u0642\u0648\u0645 \u062d\u0627\u0633\u0628\u0629 (LBM) \u0628\u062d\u0633\u0627\u0628 \u0643\u062a\u0644\u0629 \u0627\u0644\u0639\u0636\u0644\u0627\u062a \u0641\u064a \u0627\u0644\u062c\u0633\u0645 \u0627\u0644\u0645\u0642\u062f\u0631\u0629 \u0644\u0644\u0634\u062e\u0635 \u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 \u0648\u0632\u0646 \u0627\u0644\u062c\u0633\u0645 \u0648\u0627\u0644\u0637\u0648\u0644 \u0648\u0627\u0644\u062c\u0646\u0633 \u0648\u0627\u0644\u0639\u0645\u0631. \u0644\u0623\u063a\u0631\u0627\u0636 \u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629 \u060c \u062a\u0648\u0641\u0631 \u0627\u0644\u0622\u0644\u0629 \u0627\u0644\u062d\u0627\u0633\u0628\u0629 \u0645\u0639\u0627\u062f\u0644\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629.")),u.a.createElement("div",{className:"cardContainer",id:"tbwCard"},u.a.createElement("svg",{className:"measureInfo",onClick:function(){return e.infoHandle("tbw")},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})),u.a.createElement("svg",{className:"measureInfoClose",onClick:function(){return e.infoClosehandle("tbw")},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})),u.a.createElement("p",{className:"mainTitles"},"\u062d\u062c\u0645 \u0645\u064a\u0627\u0647 \u0627\u0644\u062c\u0633\u0645 ( TBW )"),u.a.createElement("p",{className:"subTitles"},"\u0627\u0644\u062d\u062c\u0645 \u0627\u0644\u0643\u0644\u064a \u0644\u0644\u0645\u064a\u0627\u0647 \u0641\u064a \u062c\u0633\u0645\u0643"),u.a.createElement("p",{className:"results"},this.tbw(),u.a.createElement("span",{className:"resultsUnits"},"\u0644\u062a\u0631")),u.a.createElement("p",{className:"infoPara"},u.a.createElement("span",null,"\u0627\u0644\u062d\u062c\u0645 \u0627\u0644\u0643\u0644\u064a \u0644\u0644\u0645\u064a\u0627\u0647 \u0641\u064a \u0627\u0644\u062c\u0633\u0645"),u.a.createElement("br",null),"\u062a\u0633\u062a\u062e\u062f\u0645 \u062d\u0627\u0633\u0628\u0629 \u062d\u062c\u0645 \u0627\u0644\u0645\u064a\u0627\u0647 \u0627\u0644\u0643\u0644\u064a \u0641\u064a \u0627\u0644\u062c\u0633\u0645 \u0627\u0644\u0639\u0645\u0631 \u0648\u0627\u0644\u0637\u0648\u0644 \u0648\u0627\u0644\u0648\u0632\u0646 \u0648\u0627\u0644\u062c\u0646\u0633 \u0644\u062a\u0642\u062f\u064a\u0631 \u062d\u062c\u0645 \u0627\u0644\u0645\u0627\u0621 \u0641\u064a \u062c\u0633\u0645\u0643. \u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 \u0635\u064a\u063a\u0629 \u0648\u0636\u0639\u0647\u0627 \u0627\u0644\u062f\u0643\u062a\u0648\u0631 \u0648\u0627\u062a\u0633\u0648\u0646 \u0648\u0641\u0631\u064a\u0642\u0647 \u0648\u0627\u0644\u062a\u064a \u0648\u0635\u0641\u062a \u0641\u064a \u0639\u0627\u0645 1980.")))}}]),t}(m.Component)}}]);
//# sourceMappingURL=18.d8ef6aed.chunk.js.map