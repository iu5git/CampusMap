/*! For license information please see 8083.cab1e164.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbmstu_navigator=self.webpackChunkbmstu_navigator||[]).push([[8083,6711],{6711:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r,dragmove:()=>r});let i=!1;const l=[],n=void 0!==window.ontouchstart,r=function(e,t,o,r,a,p){i||document.addEventListener(n?"touchmove":"mousemove",(function(e){let t=e;e.touches&&(t=e.touches[0]);for(let o=0;o<l.length;o++)l[o](t.clientX,t.clientY)})),i=!0;let s=!1,w=!1,d=0,v=0,u=0,c=0;t.addEventListener(n?"touchstart":"mousedown",(function(t){if(t.stopPropagation(),t.preventDefault(),"false"===e.dataset.dragEnabled)return;let o=t;t.touches&&(o=t.touches[0]),s=!0,d=e.offsetLeft-o.clientX,v=e.offsetTop-o.clientY})),document.addEventListener(n?"touchend":"mouseup",(function(){a&&w&&a(e,o,parseInt(e.style.left),parseInt(e.style.top)),s=!1,w=!1})),document.addEventListener(n?"touchmove":"mousemove",(function(){p&&w&&p(e,parseInt(e.style.left),parseInt(e.style.top))})),l.push((function(t,o){if(s){if(w||(w=!0,r&&r(e,u,c)),u=t+d,c=o+v,"true"===e.dataset.dragBoundary){if(u<1||u>=window.innerWidth-e.offsetWidth)return;if(c<1||c>=window.innerHeight-e.offsetHeight)return}e.style.left=u+"px",e.style.top=c+"px"}}))}},8083:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var i=o(6711);const l={name:"overview_window",init(e){let{_$:t}=e;const o=this,{$id:l,$click:n}=o.svgCanvas,r={};l("sidepanel_content").insertAdjacentHTML("beforeend",'<div id="overview_window_content_pane" style="width:100%; word-wrap:break-word;  display:inline-block; margin-top:20px;"><div id="overview_window_content" style="position:relative; padding-left:15px; top:0px;"><div style="background-color:#A0A0A0; display:inline-block; overflow:visible;"><svg id="overviewMiniView" width="132" height="100" x="0" y="0" viewBox="0 0 4800 3600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use x="0" y="0" xlink:href="#svgroot"> </use></svg><div id="overview_window_view_box" style="min-width:50px; min-height:50px; position:absolute; top:30px; left:30px; z-index:5; background-color:rgba(255,0,102,0.3);"></div></div></div></div>');const a=()=>{const{workarea:e}=o,t=parseFloat(getComputedStyle(e,null).height.replace("px","")),i=parseFloat(getComputedStyle(e,null).width.replace("px","")),n=e.scrollLeft,r=e.scrollTop,a=parseFloat(getComputedStyle(l("svgcanvas"),null).width.replace("px","")),p=parseFloat(getComputedStyle(l("svgcanvas"),null).height.replace("px","")),s=parseFloat(getComputedStyle(l("overviewMiniView"),null).width.replace("px","")),w=parseFloat(getComputedStyle(l("overviewMiniView"),null).height.replace("px","")),d=n/a*s,v=r/p*w,u=i/a*s,c=t/p*w;l("overview_window_view_box").style.minWidth=u+"px",l("overview_window_view_box").style.minHeight=c+"px",l("overview_window_view_box").style.top=v+"px",l("overview_window_view_box").style.left=d+"px"};l("workarea").addEventListener("scroll",(()=>{r.viewBoxDragging||a()})),l("workarea").addEventListener("resize",a),a();const p=function(){const e=parseFloat(getComputedStyle(l("svgroot"),null).width.replace("px","")),t=parseFloat(getComputedStyle(l("svgroot"),null).height.replace("px","")),o=t/e*parseFloat(getComputedStyle(l("overviewMiniView"),null).width.replace("px",""));l("overviewMiniView").setAttribute("viewBox","640 480 "+e+" "+t),l("overviewMiniView").setAttribute("height",o),a()};p(),r.viewBoxDragging=!1;const s=function(){const e=parseFloat(getComputedStyle(l("svgcanvas"),null).width.replace("px","")),t=parseFloat(getComputedStyle(l("svgcanvas"),null).height.replace("px","")),o=parseFloat(getComputedStyle(l("overviewMiniView"),null).width.replace("px","")),i=parseFloat(getComputedStyle(l("overviewMiniView"),null).height.replace("px","")),n=parseFloat(getComputedStyle(l("overview_window_view_box"),null).getPropertyValue("left").replace("px",""))/o*e,r=parseFloat(getComputedStyle(l("overview_window_view_box"),null).getPropertyValue("top").replace("px",""))/i*t;l("workarea").scrollLeft=n,l("workarea").scrollTop=r},w=document.querySelector("#overview_window_view_box"),d=document.querySelector("#overviewMiniView");return(0,i.dragmove)(w,w,d,(()=>{r.viewBoxDragging=!0,s()}),((e,t,o,i)=>{e.offsetLeft+e.offsetWidth>parseFloat(getComputedStyle(t,null).width.replace("px",""))?e.style.left=parseFloat(getComputedStyle(t,null).width.replace("px",""))-e.offsetWidth+"px":e.offsetLeft<0&&(e.style.left="0px"),e.offsetTop+e.offsetHeight>parseFloat(getComputedStyle(t,null).height.replace("px",""))?e.style.top=parseFloat(getComputedStyle(t,null).height.replace("px",""))-e.offsetHeight+"px":e.offsetTop<0&&(e.style.top="0px"),r.viewBoxDragging=!1,s()}),(function(){s()})),n(l("overviewMiniView"),(e=>{const t=e.offsetX||e.originalEvent.layerX,o=e.offsetY||e.originalEvent.layerY,i=parseFloat(getComputedStyle(l("overviewMiniView"),null).width.replace("px","")),n=parseFloat(getComputedStyle(l("overviewMiniView"),null).height.replace("px","")),r=parseFloat(getComputedStyle(l("overview_window_view_box"),null).getPropertyValue("min-width").replace("px","")),a=parseFloat(getComputedStyle(l("overview_window_view_box"),null).getPropertyValue("min-height").replace("px",""));let p=t-.5*r,w=o-.5*a;p<0&&(p=0),w<0&&(w=0),p+r>i&&(p=i-r),w+a>n&&(w=n-a),l("overview_window_view_box").style.top=w+"px",l("overview_window_view_box").style.left=p+"px",s()})),{name:"overview window",canvasUpdated:p,workareaResized:a}}}}}]);
//# sourceMappingURL=8083.cab1e164.chunk.js.map