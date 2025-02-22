var Mn=Array.isArray,Jt=Array.prototype.indexOf,Yn=Array.from,Hn=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,Qt=Object.getOwnPropertyDescriptors,jn=Object.prototype,Bn=Array.prototype,tn=Object.getPrototypeOf;const Un=()=>{};function Vn(t){return t()}function mt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,gt=4,Q=8,it=16,I=32,j=64,G=128,w=256,K=512,v=1024,x=2048,P=4096,b=8192,tt=16384,nn=32768,At=65536,Gn=1<<17,rn=1<<19,kt=1<<20,dt=Symbol("$state"),Kn=Symbol("legacy props"),$n=Symbol("");function Dt(t){return t===this.v}function en(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function It(t){return!en(t,this.v)}function ln(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function an(t){throw new Error("https://svelte.dev/e/effect_orphan")}function un(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zn(){throw new Error("https://svelte.dev/e/hydration_failed")}function zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Wn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Xn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let nt=!1;function Jn(){nt=!0}const Qn=1,tr=2,nr=4,rr=8,er=16,lr=1,sr=2,ar=4,ur=8,or=16,fr=1,ir=2,_n="[",cn="[!",vn="]",Rt={},_r=Symbol();function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let f=null;function Et(t){f=t}function cr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},nt&&!n&&(f.l={s:null,u:null,r1:[],r2:_t(!1)})}function vr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=o,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];W(s.effect),z(s.reaction),Ft(s.fn)}}finally{W(r),z(e)}}f=n.p,n.m=!0}return{}}function rt(){return!nt||f!==null&&f.l===null}function _t(t,n){var r={f:0,v:t,reactions:null,equals:Dt,rv:0,wv:0};return r}function pr(t){return pn(_t(t))}function hr(t,n=!1){var e;const r=_t(t);return n||(r.equals=It),nt&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function pn(t){return u!==null&&!m&&u.f&T&&(g===null?xn([t]):g.push(t)),t}function dr(t,n){return u!==null&&!m&&rt()&&u.f&(T|it)&&(g===null||!g.includes(t))&&fn(),hn(t,n)}function hn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Kt(),St(t,x),rt()&&o!==null&&o.f&v&&!(o.f&(I|j))&&(k===null?Sn([t]):k.push(t))),n}function St(t,n){var r=t.reactions;if(r!==null)for(var e=rt(),l=r.length,s=0;s<l;s++){var a=r[s],i=a.f;i&x||!e&&a===o||(A(a,n),i&(v|w)&&(i&T?St(a,P):lt(a)))}}let q=!1;function Er(t){q=t}let D;function M(t){if(t===null)throw xt(),Rt;return D=t}function yr(){return M(F(D))}function wr(t){if(q){if(F(D)!==null)throw xt(),Rt;D=t}}function Tr(){for(var t=0,n=D;;){if(n.nodeType===8){var r=n.data;if(r===vn){if(t===0)return n;t-=1}else(r===_n||r===cn)&&(t+=1)}var e=F(n);n.remove(),n=e}}var yt,dn,Ot,Ct;function mr(){if(yt===void 0){yt=window,dn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Ot=ht(n,"firstChild").get,Ct=ht(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function st(t=""){return document.createTextNode(t)}function at(t){return Ot.call(t)}function F(t){return Ct.call(t)}function gr(t,n){if(!q)return at(t);var r=at(D);if(r===null)r=D.appendChild(st());else if(n&&r.nodeType!==3){var e=st();return r==null||r.before(e),M(e),e}return M(r),r}function Ar(t,n){if(!q){var r=at(t);return r instanceof Comment&&r.data===""?F(r):r}return D}function kr(t,n=1,r=!1){let e=q?D:t;for(var l;n--;)l=e,e=F(e);if(!q)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=st();return e===null?l==null||l.after(a):e.before(a),M(a),a}return M(e),e}function Dr(t){t.textContent=""}function Nt(t){var n=T|x,r=u!==null&&u.f&T?u:null;return o===null||r!==null&&r.f&w?n|=w:o.f|=kt,{ctx:f,deps:null,effects:null,equals:Dt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function Ir(t){const n=Nt(t);return n.equals=It,n}function bt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)O(n[r])}}function En(t){for(var n=t.parent;n!==null;){if(!(n.f&T))return n;n=n.parent}return null}function yn(t){var n,r=o;W(En(t));try{bt(t),n=Zt(t)}finally{W(r)}return n}function qt(t){var n=yn(t),r=(R||t.f&w)&&t.deps!==null?P:v;A(t,r),t.equals(n)||(t.v=n,t.wv=Kt())}function Pt(t){o===null&&u===null&&an(),u!==null&&u.f&w&&o===null&&sn(),ct&&ln()}function wn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var l=(t&j)!==0,s=o,a={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var i=C;try{wt(!0),vt(a),a.f|=nn}catch(p){throw O(a),p}finally{wt(i)}}else n!==null&&lt(a);var y=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(kt|G))===0;if(!y&&!l&&e&&(s!==null&&wn(a,s),u!==null&&u.f&T)){var _=u;(_.effects??(_.effects=[])).push(a)}return a}function Rr(t){const n=L(Q,null,!1);return A(n,v),n.teardown=t,n}function xr(t){Pt();var n=o!==null&&(o.f&I)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Ft(t);return e}}function Sr(t){return Pt(),Tn(t)}function Or(t){const n=L(j,t,!0);return(r={})=>new Promise(e=>{r.outro?An(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Ft(t){return L(gt,t,!1)}function Tn(t){return L(Q,t,!0)}function Cr(t,n=[],r=Nt){const e=n.map(r);return mn(()=>t(...e.map(Fn)))}function mn(t,n=0){return L(Q|it|n,t,!0)}function Nr(t,n=!0){return L(Q|I,t,!0,n)}function Lt(t){var n=t.teardown;if(n!==null){const r=ct,e=u;Tt(!0),z(null);try{n.call(null)}finally{Tt(r),z(e)}}}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function gn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&I||O(n),n=r}}function O(t,n=!0){var r=!1;if((n||t.f&rn)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:F(e);e.remove(),e=s}r=!0}Mt(t,n&&!r),J(t,0),A(t,tt);var a=t.transitions;if(a!==null)for(const y of a)y.stop();Lt(t);var i=t.parent;i!==null&&i.first!==null&&Yt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Yt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function An(t,n){var r=[];Ht(t,r,!0),kn(r,()=>{O(t),n&&n()})}function kn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Ht(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&At)!==0||(e.f&I)!==0;Ht(e,n,s?r:!1),e=l}}}function br(t){jt(t,!0)}function jt(t,n){if(t.f&b){t.f^=b,t.f&v||(t.f^=v),B(t)&&(A(t,x),lt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&At)!==0||(r.f&I)!==0;jt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}const Dn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let $=!1,Z=!1,ut=[],ot=[];function Bt(){$=!1;const t=ut.slice();ut=[],mt(t)}function Ut(){Z=!1;const t=ot.slice();ot=[],mt(t)}function qr(t){$||($=!0,queueMicrotask(Bt)),ut.push(t)}function Pr(t){Z||(Z=!0,Dn(Ut)),ot.push(t)}function In(){$&&Bt(),Z&&Ut()}const Vt=0,Rn=1;let U=!1,V=Vt,Y=!1,H=null,C=!1,ct=!1;function wt(t){C=t}function Tt(t){ct=t}let S=[],N=0;let u=null,m=!1;function z(t){u=t}let o=null;function W(t){o=t}let g=null;function xn(t){g=t}let c=null,E=0,k=null;function Sn(t){k=t}let Gt=1,X=0,R=!1;function Kt(){return++Gt}function B(t){var h;var n=t.f;if(n&x)return!0;if(n&P){var r=t.deps,e=(n&w)!==0;if(r!==null){var l,s,a=(n&K)!==0,i=e&&o!==null&&!R,y=r.length;if(a||i){var _=t,p=_.parent;for(l=0;l<y;l++)s=r[l],(a||!((h=s==null?void 0:s.reactions)!=null&&h.includes(_)))&&(s.reactions??(s.reactions=[])).push(_);a&&(_.f^=K),i&&p!==null&&!(p.f&w)&&(_.f^=w)}for(l=0;l<y;l++)if(s=r[l],B(s)&&qt(s),s.wv>t.wv)return!0}(!e||o!==null&&!R)&&A(t,v)}return!1}function On(t,n){for(var r=n;r!==null;){if(r.f&G)try{r.fn(t);return}catch{r.f^=G}r=r.parent}throw U=!1,t}function Cn(t){return(t.f&tt)===0&&(t.parent===null||(t.parent.f&G)===0)}function et(t,n,r,e){if(U){if(r===null&&(U=!1),Cn(n))throw t;return}r!==null&&(U=!0);{On(t,n);return}}function $t(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&T?$t(s,n,!1):n===s&&(r?A(s,x):s.f&v&&A(s,P),lt(s))}}function Zt(t){var pt;var n=c,r=E,e=k,l=u,s=R,a=g,i=f,y=m,_=t.f;c=null,E=0,k=null,u=_&(I|j)?null:t,R=(_&w)!==0&&(!C||l===null||y),g=null,Et(t.ctx),m=!1,X++;try{var p=(0,t.fn)(),h=t.deps;if(c!==null){var d;if(J(t,E),h!==null&&E>0)for(h.length=E+c.length,d=0;d<c.length;d++)h[E+d]=c[d];else t.deps=h=c;if(!R)for(d=E;d<h.length;d++)((pt=h[d]).reactions??(pt.reactions=[])).push(t)}else h!==null&&E<h.length&&(J(t,E),h.length=E);if(rt()&&k!==null&&!m&&h!==null&&!(t.f&(T|P|x)))for(d=0;d<k.length;d++)$t(k[d],t);return l!==null&&X++,p}finally{c=n,E=r,k=e,u=l,R=s,g=a,Et(i),m=y}}function Nn(t,n){let r=n.reactions;if(r!==null){var e=Jt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&T&&(c===null||!c.includes(n))&&(A(n,P),n.f&(w|K)||(n.f^=K),bt(n),J(n,0))}function J(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Nn(t,r[e])}function vt(t){var n=t.f;if(!(n&tt)){A(t,v);var r=o,e=f;o=t;try{n&it?gn(t):Mt(t),Lt(t);var l=Zt(t);t.teardown=typeof l=="function"?l:null,t.wv=Gt;var s=t.deps,a}catch(i){et(i,t,r,e||t.ctx)}finally{o=r}}}function zt(){if(N>1e3){N=0;try{un()}catch(t){if(H!==null)et(t,H,null);else throw t}}N++}function Wt(t){var n=t.length;if(n!==0){zt();var r=C;C=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&v||(l.f^=v);var s=Pn(l);bn(s)}}finally{C=r}}}function bn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(tt|b)))try{B(e)&&(vt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Yt(e):e.fn=null))}catch(l){et(l,e,null,e.ctx)}}}function qn(){if(Y=!1,N>1001)return;const t=S;S=[],Wt(t),Y||(N=0,H=null)}function lt(t){V===Vt&&(Y||(Y=!0,queueMicrotask(qn))),H=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(j|I)){if(!(r&v))return;n.f^=v}}S.push(n)}function Pn(t){var n=[],r=t.first;t:for(;r!==null;){var e=r.f,l=(e&I)!==0,s=l&&(e&v)!==0,a=r.next;if(!s&&!(e&b)){if(e&gt)n.push(r);else if(l)r.f^=v;else{var i=u;try{u=r,B(r)&&vt(r)}catch(p){et(p,r,null,r.ctx)}finally{u=i}}var y=r.first;if(y!==null){r=y;continue}}if(a===null){let p=r.parent;for(;p!==null;){if(t===p)break t;var _=p.next;if(_!==null){r=_;continue t}p=p.parent}}r=a}return n}function Xt(t){var n=V,r=S;try{zt();const l=[];V=Rn,S=l,Y=!1,Wt(r);var e=t==null?void 0:t();return In(),(S.length>0||l.length>0)&&Xt(),N=0,H=null,e}finally{V=n,S=r}}async function Fr(){await Promise.resolve(),Xt()}function Fn(t){var n=t.f,r=(n&T)!==0;if(u!==null&&!m){g!==null&&g.includes(t)&&on();var e=u.deps;t.rv<X&&(t.rv=X,c===null&&e!==null&&e[E]===t?E++:c===null?c=[t]:(!R||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,s=l.parent;s!==null&&!(s.f&w)&&(l.f^=w)}return r&&(l=t,B(l)&&qt(l)),t.v}function Lr(t){var n=m;try{return m=!0,t()}finally{m=n}}const Ln=-7169;function A(t,n){t.f=t.f&Ln|n}function Mr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(dt in t)ft(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&dt in r&&ft(r)}}}function ft(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ft(t[e],n)}catch{}const r=tn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Qt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{gr as $,u as A,mr as B,at as C,F as D,At as E,Rt as F,Er as G,_n as H,M as I,yr as J,vn as K,xt as L,Zn as M,Dr as N,Yn as O,Or as P,st as Q,cr as R,dt as S,vr as T,_r as U,Sr as V,mt as W,Vn as X,Mr as Y,Nt as Z,Cr as _,Bn as a,wr as a0,kr as a1,dn as a2,fr as a3,ir as a4,cn as a5,Tr as a6,br as a7,An as a8,Ft as a9,$n as aA,Qt as aB,Rr as aC,en as aD,Tn as aa,qr as ab,zn as ac,Gn as ad,Ir as ae,ar as af,It as ag,hr as ah,ur as ai,Kn as aj,sr as ak,lr as al,or as am,Xt as an,pr as ao,Fr as ap,b as aq,hn as ar,tr as as,Ht as at,kn as au,Qn as av,er as aw,nr as ax,rr as ay,Pr as az,Xn as b,dr as c,ht as d,o as e,Wn as f,Fn as g,tn as h,Mn as i,Jn as j,mn as k,Nr as l,O as m,Un as n,jn as o,q as p,D as q,Ar as r,_t as s,f as t,xr as u,nt as v,Lr as w,Hn as x,z as y,W as z};
