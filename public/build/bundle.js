var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,c;function u(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function a(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e){t.value=null==e?"":e}function b(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function y(t,e,n){t.classList[n?"add":"remove"](e)}function _(t){c=t}function k(){const t=function(){if(!c)throw new Error("Function called outside component initialization");return c}();return(e,n,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=function(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}(e,n,{cancelable:o});return r.slice().forEach((e=>{e.call(t,s)})),!s.defaultPrevented}return!0}}const x=[],w=[],q=[],E=[],C=Promise.resolve();let j=!1;function A(t){q.push(t)}const P=new Set;let U=0;function z(){const t=c;do{for(;U<x.length;){const t=x[U];U++,_(t),B(t.$$)}for(_(null),x.length=0,U=0;w.length;)w.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];P.has(e)||(P.add(e),e())}q.length=0}while(x.length);for(;E.length;)E.pop()();j=!1,P.clear(),_(t)}function B(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const L=new Set;let N;function S(t,e){t&&t.i&&(L.delete(t),t.i(e))}function M(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),N.c.push((()=>{L.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function O(t){t&&t.c()}function R(t,n,s,l){const{fragment:c,on_mount:u,on_destroy:a,after_update:i}=t.$$;c&&c.m(n,s),l||A((()=>{const n=u.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(A)}function T(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(x.push(t),j||(j=!0,C.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,r,s,l,u,a,i,d=[-1]){const p=c;_(e);const m=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:r.target||p.$$.root};i&&i(m.root);let $=!1;if(m.ctx=s?s(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&u(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),$&&D(e,t)),n})):[],m.update(),$=!0,o(m.before_update),m.fragment=!!l&&l(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(f)}else m.fragment&&m.fragment.c();r.intro&&S(e.$$.fragment),R(e,r.target,r.anchor,r.customElement),z()}_(p)}class F{$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(t){let e,n;const o=t[1].default,r=function(t,e,n,o){if(t){const r=u(t,e,n,o);return t[0](r)}}(o,t,t[0],null);return{c(){e=d("button"),r&&r.c(),h(e,"type","submit"),h(e,"class","botao svelte-8fdye6")},m(t,o){i(t,e,o),r&&r.m(e,null),n=!0},p(t,[e]){r&&r.p&&(!n||1&e)&&function(t,e,n,o,r,s){if(r){const l=u(e,n,o,s);t.p(l,r)}}(r,o,t,t[0],n?function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(o,t[0],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[0]),null)},i(t){n||(S(r,t),n=!0)},o(t){M(r,t),n=!1},d(t){t&&f(e),r&&r.d(t)}}}function I(t,e,n){let{$$slots:o={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,o]}class J extends F{constructor(t){super(),H(this,t,I,G,s,{})}}function K(t){let e;return{c(){e=d("span"),e.textContent="Usuário não encontrado!",h(e,"class","erro svelte-senzic")},m(t,n){i(t,e,n)},d(t){t&&f(e)}}}function Q(e){let n,o,r;return{c(){var t,e;n=p("Buscar\n    "),o=d("img"),t=o.src,e=r="/Assets/search-line.svg",l||(l=document.createElement("a")),l.href=e,t!==l.href&&h(o,"src","/Assets/search-line.svg"),h(o,"alt","Ícone de Busca")},m(t,e){i(t,n,e),i(t,o,e)},p:t,d(t){t&&f(n),t&&f(o)}}}function V(t){let e,n,r,s,l,c,u,p,g,b=404===t[1]&&K();return c=new J({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),{c(){e=d("form"),n=d("input"),r=m(),b&&b.c(),s=m(),l=d("div"),O(c.$$.fragment),h(n,"type","text"),h(n,"class","input svelte-senzic"),h(n,"placeholder","Digite um usuário do GitHub"),y(n,"erro-input",404===t[1]),h(l,"class","botao-container svelte-senzic")},m(o,f){var d;i(o,e,f),a(e,n),v(n,t[0]),a(e,r),b&&b.m(e,null),a(e,s),a(e,l),R(c,l,null),u=!0,p||(g=[$(n,"input",t[3]),$(e,"submit",(d=t[2],function(t){return t.preventDefault(),d.call(this,t)}))],p=!0)},p(t,[o]){1&o&&n.value!==t[0]&&v(n,t[0]),(!u||2&o)&&y(n,"erro-input",404===t[1]),404===t[1]?b||(b=K(),b.c(),b.m(e,s)):b&&(b.d(1),b=null);const r={};32&o&&(r.$$scope={dirty:o,ctx:t}),c.$set(r)},i(t){u||(S(c.$$.fragment,t),u=!0)},o(t){M(c.$$.fragment,t),u=!1},d(t){t&&f(e),b&&b.d(),T(c),p=!1,o(g)}}}function W(t,e,n){let o="",r=null;const s=k();return[o,r,async function(){const t=await(e=o,fetch(`https://api.github.com/users/${e}`));var e;const l=await function(t){return fetch(`https://api.github.com/users/${t}/repos?sort=created&per_page=5`)}(o);if(t.ok&&l.ok){const e=await t.json(),o=await l.json();s("aoChangeUser",function(t,e){const n=e.map((t=>({nome:t.name,url:t.url})));return{avatar_url:t.avatar_url,login:t.login,nome:t.name,perfil_url:t.html_url,repositorios_publicos:t.public_repos,seguidores:t.followers,repositorios_recentes:n}}(e,o)),n(1,r=null)}else n(1,r=t.status),s("aoChangeUser",null)},function(){o=this.value,n(0,o)}]}class X extends F{constructor(t){super(),H(this,t,W,V,s,{})}}function Y(e){let n;return{c(){n=d("h1"),n.textContent="Svelte Perfis",h(n,"class","titulo svelte-19r6afm")},m(t,e){i(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class Z extends F{constructor(t){super(),H(this,t,null,Y,s,{})}}function tt(e){let n;return{c(){n=d("div"),n.innerHTML='<span class="acao svelte-9e8kal"></span> \n  <span class="acao svelte-9e8kal"></span> \n  <span class="acao svelte-9e8kal"></span>',h(n,"class","barra-superior svelte-9e8kal")},m(t,e){i(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class et extends F{constructor(t){super(),H(this,t,null,tt,s,{})}}function nt(t,e,n){const o=t.slice();return o[2]=e[n],o}function ot(t){let e,n,o,r,s=t[0].nome+"";return{c(){e=d("div"),n=p("Nome: "),o=d("span"),r=p(s),h(o,"class","svelte-1eodkaq"),h(e,"class","info svelte-1eodkaq")},m(t,s){i(t,e,s),a(e,n),a(e,o),a(o,r)},p(t,e){1&e&&s!==(s=t[0].nome+"")&&g(r,s)},d(t){t&&f(e)}}}function rt(t){let e,n,o,r,s=t[0].repositorios_recentes,l=[];for(let e=0;e<s.length;e+=1)l[e]=st(nt(t,s,e));return{c(){e=d("div"),n=d("h2"),n.textContent="Repositórios Recentes:",o=m(),r=d("ul");for(let t=0;t<l.length;t+=1)l[t].c();h(n,"class","titulo svelte-1eodkaq"),h(e,"class","repositorios svelte-1eodkaq")},m(t,s){i(t,e,s),a(e,n),a(e,o),a(e,r);for(let t=0;t<l.length;t+=1)l[t].m(r,null)},p(t,e){if(1&e){let n;for(s=t[0].repositorios_recentes,n=0;n<s.length;n+=1){const o=nt(t,s,n);l[n]?l[n].p(o,e):(l[n]=st(o),l[n].c(),l[n].m(r,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=s.length}},d(t){t&&f(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(l,t)}}}function st(t){let e,n,o,r,s,l=t[2].nome+"";return{c(){e=d("li"),n=d("a"),o=p(l),s=m(),h(n,"href",r=t[2].url),h(n,"target","_blank"),h(n,"rel","noopener"),h(n,"class","repositorio svelte-1eodkaq")},m(t,r){i(t,e,r),a(e,n),a(n,o),a(e,s)},p(t,e){1&e&&l!==(l=t[2].nome+"")&&g(o,l),1&e&&r!==(r=t[2].url)&&h(n,"href",r)},d(t){t&&f(e)}}}function lt(t){let e,n,o,r,s,l,c,u,$,v,y,_,k,x,w,q,E,C,j,A,P,U,z,B,L,N,D,H=`url(${t[0].avatar_url})`,F=t[0].login+"",G=t[0].seguidores+"",I=t[0].repositorios_publicos+"";n=new et({});let J=t[0].nome&&ot(t),K=t[1]&&rt(t);return{c(){e=d("div"),O(n.$$.fragment),o=m(),r=d("div"),s=d("div"),l=d("a"),c=d("div"),$=m(),v=d("div"),J&&J.c(),y=m(),_=d("div"),k=p("Usuário: "),x=d("span"),w=p(F),q=m(),E=d("div"),C=p("Seguidores: "),j=d("span"),A=p(G),P=m(),U=d("div"),z=p("Repositórios: "),B=d("span"),L=p(I),N=m(),K&&K.c(),h(c,"class","foto-usuario svelte-1eodkaq"),b(c,"background-image",H,!1),h(l,"href",u=t[0].perfil_url),h(l,"target","_blank"),h(l,"rel","noopener"),h(s,"class","foto-container svelte-1eodkaq"),h(x,"class","svelte-1eodkaq"),h(_,"class","info svelte-1eodkaq"),h(j,"class","svelte-1eodkaq"),h(E,"class","info svelte-1eodkaq"),h(B,"class","svelte-1eodkaq"),h(U,"class","info svelte-1eodkaq"),h(v,"class","detalhes-usuario svelte-1eodkaq"),h(r,"class","usuario svelte-1eodkaq"),h(e,"class","card-usuario svelte-1eodkaq")},m(t,u){i(t,e,u),R(n,e,null),a(e,o),a(e,r),a(r,s),a(s,l),a(l,c),a(r,$),a(r,v),J&&J.m(v,null),a(v,y),a(v,_),a(_,k),a(_,x),a(x,w),a(v,q),a(v,E),a(E,C),a(E,j),a(j,A),a(v,P),a(v,U),a(U,z),a(U,B),a(B,L),a(r,N),K&&K.m(r,null),D=!0},p(t,[e]){1&e&&H!==(H=`url(${t[0].avatar_url})`)&&b(c,"background-image",H,!1),(!D||1&e&&u!==(u=t[0].perfil_url))&&h(l,"href",u),t[0].nome?J?J.p(t,e):(J=ot(t),J.c(),J.m(v,y)):J&&(J.d(1),J=null),(!D||1&e)&&F!==(F=t[0].login+"")&&g(w,F),(!D||1&e)&&G!==(G=t[0].seguidores+"")&&g(A,G),(!D||1&e)&&I!==(I=t[0].repositorios_publicos+"")&&g(L,I),t[1]?K?K.p(t,e):(K=rt(t),K.c(),K.m(r,null)):K&&(K.d(1),K=null)},i(t){D||(S(n.$$.fragment,t),D=!0)},o(t){M(n.$$.fragment,t),D=!1},d(t){t&&f(e),T(n),J&&J.d(),K&&K.d()}}}function ct(t,e,n){let o,{usuario:r}=e;return t.$$set=t=>{"usuario"in t&&n(0,r=t.usuario)},t.$$.update=()=>{1&t.$$.dirty&&n(1,o=Boolean(r.repositorios_recentes.length))},[r,o]}class ut extends F{constructor(t){super(),H(this,t,ct,lt,s,{usuario:0})}}function at(t){let e,n;return e=new ut({props:{usuario:t[0]}}),{c(){O(e.$$.fragment)},m(t,o){R(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.usuario=t[0]),e.$set(o)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function it(t){let e,n,r,s,l,c,u,p;r=new Z({}),c=new X({}),c.$on("aoChangeUser",t[1]);let $=t[0]&&at(t);return{c(){e=d("div"),n=d("header"),O(r.$$.fragment),s=m(),l=d("div"),O(c.$$.fragment),u=m(),$&&$.c(),h(l,"class","busca-usuario svelte-yaw091"),h(n,"class","svelte-yaw091"),h(e,"class","app svelte-yaw091")},m(t,o){i(t,e,o),a(e,n),R(r,n,null),a(n,s),a(n,l),R(c,l,null),a(e,u),$&&$.m(e,null),p=!0},p(t,[n]){t[0]?$?($.p(t,n),1&n&&S($,1)):($=at(t),$.c(),S($,1),$.m(e,null)):$&&(N={r:0,c:[],p:N},M($,1,1,(()=>{$=null})),N.r||o(N.c),N=N.p)},i(t){p||(S(r.$$.fragment,t),S(c.$$.fragment,t),S($),p=!0)},o(t){M(r.$$.fragment,t),M(c.$$.fragment,t),M($),p=!1},d(t){t&&f(e),T(r),T(c),$&&$.d()}}}function ft(t,e,n){let o=null;return[o,function(t){n(0,o=t.detail)}]}return new class extends F{constructor(t){super(),H(this,t,ft,it,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
