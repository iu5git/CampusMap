"use strict";(self.webpackChunkbmstu_navigator=self.webpackChunkbmstu_navigator||[]).push([[1929],{1929:(t,e,s)=>{s.r(e);var i,n,u=s(168),r=s(3492),a=s(1642),l=s(860),p=s(1971),o=s(2425);class c extends r.Z{get[a.defaultState](){return Object.assign(super[a.defaultState],{inputPartType:o.default,src:"logo.svg",inputsize:"100%"})}get[p.uJ.template](){const t=super[p.uJ.template];return t.content.getElementById("source").prepend(l.r.html(i||(i=(0,u.Z)(['\n      <img src="dropdown.svg" alt="icon" width="18" height="18"></img>\n      ']))).cloneNode(!0)),t.content.append(l.C.html(n||(n=(0,u.Z)(['\n        <style>\n        [part~="source"] {\n          grid-template-columns: 20px 1fr auto;\n        }\n        ::slotted(*) {\n          padding: 4px;\n          background: #E8E8E8;\n          border: 1px solid #5a6162;\n          width: 100%;\n        }\n        [part~="popup"] {\n          width: 150%;\n        }\n        </style>\n      ']))).content),t}static get observedAttributes(){return["title","src","inputsize","value"]}attributeChangedCallback(t,e,s){if(e!==s)switch(t){case"title":break;case"src":this.src=s;break;case"inputsize":this.inputsize=s;break;default:super.attributeChangedCallback(t,e,s)}}[p.uJ.render](t){super[p.uJ.render](t),this[p.uJ.firstRender]&&(this.$img=this.shadowRoot.querySelector("img"),this.$input=this.shadowRoot.getElementById("input")),t.src&&this.$img.setAttribute("src",this[p.uJ.state].src),t.inputsize&&(this.$input.shadowRoot.querySelector('[part~="input"]').style.width=this[p.uJ.state].inputsize),t.inputPartType&&this.addEventListener("close",(t=>{var e,s;t.preventDefault();const i=null===(e=t.detail)||void 0===e||null===(s=e.closeResult)||void 0===s?void 0:s.getAttribute("value");if(i){const t=new CustomEvent("change",{detail:{value:i}});this.dispatchEvent(t)}}))}get src(){return this[p.uJ.state].src}set src(t){this[p.uJ.setState]({src:t})}get inputsize(){return this[p.uJ.state].inputsize}set inputsize(t){this[p.uJ.setState]({inputsize:t})}get value(){return this[p.uJ.state].value}set value(t){this[p.uJ.setState]({value:t})}}customElements.define("se-dropdown",c)}}]);
//# sourceMappingURL=1929.4f67a95e.chunk.js.map