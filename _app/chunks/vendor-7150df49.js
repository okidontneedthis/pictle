function M(){}const rt=e=>e;function Ri(e,t){for(const n in t)e[n]=t[n];return e}function an(e){return e()}function St(){return Object.create(null)}function V(e){e.forEach(an)}function ot(e){return typeof e=="function"}function ki(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let le;function Fc(e,t){return le||(le=document.createElement("a")),le.href=t,e===le.href}function Mi(e){return Object.keys(e).length===0}function cn(e,...t){if(e==null)return M;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function xc(e){let t;return cn(e,n=>t=n)(),t}function jc(e,t,n){e.$$.on_destroy.push(cn(t,n))}function Lc(e,t,n,i){if(e){const r=un(e,t,n,i);return e[0](r)}}function un(e,t,n,i){return e[1]&&i?Ri(n.ctx.slice(),e[1](i(t))):n.ctx}function Bc(e,t,n,i){if(e[2]&&i){const r=e[2](i(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(t.dirty.length,r.length);for(let a=0;a<s;a+=1)o[a]=t.dirty[a]|r[a];return o}return t.dirty|r}return t.dirty}function Uc(e,t,n,i,r,o){if(r){const s=un(t,n,i,o);e.p(s,r)}}function zc(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}const ln=typeof window!="undefined";let fn=ln?()=>window.performance.now():()=>Date.now(),st=ln?e=>requestAnimationFrame(e):M;const H=new Set;function dn(e){H.forEach(t=>{t.c(e)||(H.delete(t),t.f())}),H.size!==0&&st(dn)}function hn(e){let t;return H.size===0&&st(dn),{promise:new Promise(n=>{H.add(t={c:e,f:n})}),abort(){H.delete(t)}}}let Te=!1;function Di(){Te=!0}function Pi(){Te=!1}function $i(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function Fi(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const c=[];for(let u=0;u<t.length;u++){const l=t[u];l.claim_order!==void 0&&c.push(l)}t=c}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let c=0;c<t.length;c++){const u=t[c].claim_order,l=(r>0&&t[n[r]].claim_order<=u?r+1:$i(1,r,f=>t[n[f]].claim_order,u))-1;i[c]=n[l]+1;const d=l+1;n[d]=c,r=Math.max(d,r)}const o=[],s=[];let a=t.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(t[c-1]);a>=c;a--)s.push(t[a]);a--}for(;a>=0;a--)s.push(t[a]);o.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<o.length&&s[c].claim_order>=o[u].claim_order;)u++;const l=u<o.length?o[u]:null;e.insertBefore(s[c],l)}}function xi(e,t){e.appendChild(t)}function pn(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function ji(e){const t=mn("style");return Li(pn(e),t),t.sheet}function Li(e,t){xi(e.head||e,t)}function Bi(e,t){if(Te){for(Fi(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function Vc(e,t,n){Te&&!n?Bi(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function Ui(e){e.parentNode.removeChild(e)}function qc(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function mn(e){return document.createElement(e)}function zi(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function at(e){return document.createTextNode(e)}function Kc(){return at(" ")}function Hc(){return at("")}function Wc(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function Gc(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Yc(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Vi(e){return Array.from(e.childNodes)}function qi(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function gn(e,t,n,i,r=!1){qi(e);const o=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const a=e[s];if(t(a)){const c=n(a);return c===void 0?e.splice(s,1):e[s]=c,r||(e.claim_info.last_index=s),a}}for(let s=e.claim_info.last_index-1;s>=0;s--){const a=e[s];if(t(a)){const c=n(a);return c===void 0?e.splice(s,1):e[s]=c,r?c===void 0&&e.claim_info.last_index--:e.claim_info.last_index=s,a}}return i()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function _n(e,t,n,i){return gn(e,r=>r.nodeName===t,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const a=r.attributes[s];n[a.name]||o.push(a.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(t))}function Xc(e,t,n){return _n(e,t,n,mn)}function Jc(e,t,n){return _n(e,t,n,zi)}function Ki(e,t){return gn(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>at(t),!0)}function Qc(e){return Ki(e," ")}function Zc(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function eu(e,t){e.value=t==null?"":t}function tu(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function nu(e,t,n){e.classList[n?"add":"remove"](t)}function yn(e,t,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,!1,t),i}const ge=new Map;let _e=0;function Hi(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Wi(e,t){const n={stylesheet:ji(t),rules:{}};return ge.set(e,n),n}function Ye(e,t,n,i,r,o,s,a=0){const c=16.666/i;let u=`{
`;for(let I=0;I<=1;I+=c){const $=t+(n-t)*o(I);u+=I*100+`%{${s($,1-$)}}
`}const l=u+`100% {${s(n,1-n)}}
}`,d=`__svelte_${Hi(l)}_${a}`,f=pn(e),{stylesheet:h,rules:m}=ge.get(f)||Wi(f,e);m[d]||(m[d]=!0,h.insertRule(`@keyframes ${d} ${l}`,h.cssRules.length));const v=e.style.animation||"";return e.style.animation=`${v?`${v}, `:""}${d} ${i}ms linear ${r}ms 1 both`,_e+=1,d}function bn(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?o=>o.indexOf(t)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(e.style.animation=i.join(", "),_e-=r,_e||Gi())}function Gi(){st(()=>{_e||(ge.forEach(e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}}),ge.clear())})}let te;function Z(e){te=e}function Ae(){if(!te)throw new Error("Function called outside component initialization");return te}function iu(e){Ae().$$.on_mount.push(e)}function ru(e){Ae().$$.after_update.push(e)}function ou(){const e=Ae();return(t,n)=>{const i=e.$$.callbacks[t];if(i){const r=yn(t,n);i.slice().forEach(o=>{o.call(e,r)})}}}function su(e,t){Ae().$$.context.set(e,t)}const Q=[],Ct=[],he=[],Xe=[],vn=Promise.resolve();let Je=!1;function In(){Je||(Je=!0,vn.then(wn))}function au(){return In(),vn}function ne(e){he.push(e)}function cu(e){Xe.push(e)}const Fe=new Set;let fe=0;function wn(){const e=te;do{for(;fe<Q.length;){const t=Q[fe];fe++,Z(t),Yi(t.$$)}for(Z(null),Q.length=0,fe=0;Ct.length;)Ct.pop()();for(let t=0;t<he.length;t+=1){const n=he[t];Fe.has(n)||(Fe.add(n),n())}he.length=0}while(Q.length);for(;Xe.length;)Xe.pop()();Je=!1,Fe.clear(),Z(e)}function Yi(e){if(e.fragment!==null){e.update(),V(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}let J;function En(){return J||(J=Promise.resolve(),J.then(()=>{J=null})),J}function ee(e,t,n){e.dispatchEvent(yn(`${t?"intro":"outro"}${n}`))}const pe=new Set;let S;function uu(){S={r:0,c:[],p:S}}function lu(){S.r||V(S.c),S=S.p}function Xi(e,t){e&&e.i&&(pe.delete(e),e.i(t))}function fu(e,t,n,i){if(e&&e.o){if(pe.has(e))return;pe.add(e),S.c.push(()=>{pe.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}const Tn={duration:0};function du(e,t,n){let i=t(e,n),r=!0,o;const s=S;s.r+=1;function a(){const{delay:c=0,duration:u=300,easing:l=rt,tick:d=M,css:f}=i||Tn;f&&(o=Ye(e,1,0,u,c,l,f));const h=fn()+c,m=h+u;ne(()=>ee(e,!1,"start")),hn(v=>{if(r){if(v>=m)return d(0,1),ee(e,!1,"end"),--s.r||V(s.c),!1;if(v>=h){const I=l((v-h)/u);d(1-I,I)}}return r})}return ot(i)?En().then(()=>{i=i(),a()}):a(),{end(c){c&&i.tick&&i.tick(1,0),r&&(o&&bn(e,o),r=!1)}}}function hu(e,t,n,i){let r=t(e,n),o=i?0:1,s=null,a=null,c=null;function u(){c&&bn(e,c)}function l(f,h){const m=f.b-o;return h*=Math.abs(m),{a:o,b:f.b,d:m,duration:h,start:f.start,end:f.start+h,group:f.group}}function d(f){const{delay:h=0,duration:m=300,easing:v=rt,tick:I=M,css:$}=r||Tn,X={start:fn()+h,b:f};f||(X.group=S,S.r+=1),s||a?a=X:($&&(u(),c=Ye(e,o,f,m,h,v,$)),f&&I(0,1),s=l(X,m),ne(()=>ee(e,f,"start")),hn(ue=>{if(a&&ue>a.start&&(s=l(a,m),a=null,ee(e,s.b,"start"),$&&(u(),c=Ye(e,o,s.b,s.duration,0,v,r.css))),s){if(ue>=s.end)I(o=s.b,1-o),ee(e,s.b,"end"),a||(s.b?u():--s.group.r||V(s.group.c)),s=null;else if(ue>=s.start){const Ni=ue-s.start;o=s.a+s.d*v(Ni/s.duration),I(o,1-o)}}return!!(s||a)}))}return{run(f){ot(r)?En().then(()=>{r=r(),d(f)}):d(f)},end(){u(),s=a=null}}}function pu(e,t){const n={},i={},r={$$scope:1};let o=e.length;for(;o--;){const s=e[o],a=t[o];if(a){for(const c in s)c in a||(i[c]=1);for(const c in a)r[c]||(n[c]=a[c],r[c]=1);e[o]=a}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function mu(e){return typeof e=="object"&&e!==null?e:{}}function gu(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function _u(e){e&&e.c()}function yu(e,t){e&&e.l(t)}function Ji(e,t,n,i){const{fragment:r,on_mount:o,on_destroy:s,after_update:a}=e.$$;r&&r.m(t,n),i||ne(()=>{const c=o.map(an).filter(ot);s?s.push(...c):V(c),e.$$.on_mount=[]}),a.forEach(ne)}function Qi(e,t){const n=e.$$;n.fragment!==null&&(V(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Zi(e,t){e.$$.dirty[0]===-1&&(Q.push(e),In(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function bu(e,t,n,i,r,o,s,a=[-1]){const c=te;Z(e);const u=e.$$={fragment:null,ctx:null,props:o,update:M,not_equal:r,bound:St(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:St(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};s&&s(u.root);let l=!1;if(u.ctx=n?n(e,t.props||{},(d,f,...h)=>{const m=h.length?h[0]:f;return u.ctx&&r(u.ctx[d],u.ctx[d]=m)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](m),l&&Zi(e,d)),f}):[],u.update(),l=!0,V(u.before_update),u.fragment=i?i(u.ctx):!1,t.target){if(t.hydrate){Di();const d=Vi(t.target);u.fragment&&u.fragment.l(d),d.forEach(Ui)}else u.fragment&&u.fragment.c();t.intro&&Xi(e.$$.fragment),Ji(e,t.target,t.anchor,t.customElement),Pi(),wn()}Z(c)}class vu{$destroy(){Qi(this,1),this.$destroy=M}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!Mi(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const K=[];function Iu(e,t=M){let n;const i=new Set;function r(a){if(ki(e,a)&&(e=a,n)){const c=!K.length;for(const u of i)u[1](),K.push(u,e);if(c){for(let u=0;u<K.length;u+=2)K[u][0](K[u+1]);K.length=0}}}function o(a){r(a(e))}function s(a,c=M){const u=[a,c];return i.add(u),i.size===1&&(n=t(r)||M),a(e),()=>{i.delete(u),i.size===0&&(n(),n=null)}}return{set:r,update:o,subscribe:s}}function An(e){const t=e-1;return t*t*t+1}function wu(e,{delay:t=0,duration:n=400,easing:i=rt}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:i,css:o=>`opacity: ${o*r}`}}function Eu(e,{delay:t=0,duration:n=400,easing:i=An}={}){const r=getComputedStyle(e),o=+r.opacity,s=parseFloat(r.height),a=parseFloat(r.paddingTop),c=parseFloat(r.paddingBottom),u=parseFloat(r.marginTop),l=parseFloat(r.marginBottom),d=parseFloat(r.borderTopWidth),f=parseFloat(r.borderBottomWidth);return{delay:t,duration:n,easing:i,css:h=>`overflow: hidden;opacity: ${Math.min(h*20,1)*o};height: ${h*s}px;padding-top: ${h*a}px;padding-bottom: ${h*c}px;margin-top: ${h*u}px;margin-bottom: ${h*l}px;border-top-width: ${h*d}px;border-bottom-width: ${h*f}px;`}}function Tu(e,{delay:t=0,duration:n=400,easing:i=An,start:r=0,opacity:o=0}={}){const s=getComputedStyle(e),a=+s.opacity,c=s.transform==="none"?"":s.transform,u=1-r,l=a*(1-o);return{delay:t,duration:n,easing:i,css:(d,f)=>`
			transform: ${c} scale(${1-u*f});
			opacity: ${a-l*f}
		`}}function ct(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ot(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function ut(e,t,n){return t&&Ot(e.prototype,t),n&&Ot(e,n),e}function Nt(e){return+e.replace(/px/,"")}function er(e){var t=window.devicePixelRatio,n=getComputedStyle(e),i=Nt(n.getPropertyValue("width")),r=Nt(n.getPropertyValue("height"));e.setAttribute("width",(i*t).toString()),e.setAttribute("height",(r*t).toString())}function A(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=Math.random()*(t-e)+e;return Math.floor(i*Math.pow(10,n))/Math.pow(10,n)}function Rt(e){return e[A(0,e.length)]}var tr=.00125,nr=5e-4,ir=9e-4,rr=1e-5,or=6,sr=80,ar=.9,cr=1.7,ur=.2,lr=.6,fr=.03,dr=.07,kt=15,Mt=82,hr=150,pr=100,mr=250,gr=40,_r=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function Dt(e){var t=1920;return Math.log(e)/Math.log(t)}var Pt=function(){function e(t){ct(this,e);var n=t.initialPosition,i=t.direction,r=t.confettiRadius,o=t.confettiColors,s=t.emojis,a=t.emojiSize,c=t.canvasWidth,u=A(ar,cr,3),l=u*Dt(c);this.confettiSpeed={x:l,y:l},this.finalConfettiSpeedX=A(ur,lr,3),this.rotationSpeed=s.length?.01:A(fr,dr,3)*Dt(c),this.dragForceCoefficient=A(nr,ir,6),this.radius={x:r,y:r},this.initialRadius=r,this.rotationAngle=i==="left"?A(0,.2,3):A(-.2,0,3),this.emojiSize=a,this.emojiRotationAngle=A(0,2*Math.PI),this.radiusYUpdateDirection="down";var d=i==="left"?A(Mt,kt)*Math.PI/180:A(-kt,-Mt)*Math.PI/180;this.absCos=Math.abs(Math.cos(d)),this.absSin=Math.abs(Math.sin(d));var f=A(-hr,0),h={x:n.x+(i==="left"?-f:f)*this.absCos,y:n.y-f*this.absSin};this.currentPosition=Object.assign({},h),this.initialPosition=Object.assign({},h),this.color=s.length?null:Rt(o),this.emoji=s.length?Rt(s):null,this.createdAt=new Date().getTime(),this.direction=i}return ut(e,[{key:"draw",value:function(n){var i=this.currentPosition,r=this.radius,o=this.color,s=this.emoji,a=this.rotationAngle,c=this.emojiRotationAngle,u=this.emojiSize,l=window.devicePixelRatio;o?(n.fillStyle=o,n.beginPath(),n.ellipse(i.x*l,i.y*l,r.x*l,r.y*l,a,0,2*Math.PI),n.fill()):s&&(n.font="".concat(u,"px serif"),n.save(),n.translate(l*i.x,l*i.y),n.rotate(c),n.textAlign="center",n.fillText(s,0,0),n.restore())}},{key:"updatePosition",value:function(n,i){var r=this.confettiSpeed,o=this.dragForceCoefficient,s=this.finalConfettiSpeedX,a=this.radiusYUpdateDirection,c=this.rotationSpeed,u=this.createdAt,l=this.direction,d=i-u;if(r.x>s&&(this.confettiSpeed.x-=o*n),this.currentPosition.x+=r.x*(l==="left"?-this.absCos:this.absCos)*n,this.currentPosition.y=this.initialPosition.y-r.y*this.absSin*d+tr*Math.pow(d,2)/2,this.rotationSpeed-=this.emoji?1e-4:rr*n,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*n%(2*Math.PI);return}a==="down"?(this.radius.y-=n*c,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=n*c,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(n){return this.currentPosition.y<n+pr}}]),e}();function yr(){var e=document.createElement("canvas");return e.style.position="fixed",e.style.width="100%",e.style.height="100%",e.style.top="0",e.style.left="0",e.style.zIndex="1000",e.style.pointerEvents="none",document.body.appendChild(e),e}function br(e){var t=e.confettiRadius,n=t===void 0?or:t,i=e.confettiNumber,r=i===void 0?e.confettiesNumber||(e.emojis?gr:mr):i,o=e.confettiColors,s=o===void 0?_r:o,a=e.emojis,c=a===void 0?e.emojies||[]:a,u=e.emojiSize,l=u===void 0?sr:u;return e.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),e.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:n,confettiNumber:r,confettiColors:s,emojis:c,emojiSize:l}}var vr=function(){function e(t){var n=this;ct(this,e),this.canvasContext=t,this.shapes=[],this.promise=new Promise(function(i){return n.resolvePromise=i})}return ut(e,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var n;(n=this.shapes).push.apply(n,arguments)}},{key:"complete",value:function(){var n;return this.shapes.length?!1:((n=this.resolvePromise)===null||n===void 0||n.call(this),!0)}},{key:"processShapes",value:function(n,i,r){var o=this,s=n.timeDelta,a=n.currentTime;this.shapes=this.shapes.filter(function(c){return c.updatePosition(s,a),c.draw(o.canvasContext),r?c.getIsVisibleOnCanvas(i):!0})}}]),e}(),Au=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ct(this,e),this.activeConfettiBatches=[],this.canvas=t.canvas||yr(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return ut(e,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,er(this.canvas);var n=new Date().getTime(),i=n-this.lastUpdated,r=this.canvas.offsetHeight,o=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(s){return s.processShapes({timeDelta:i,currentTime:n},r,o),o?!s.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(n)}},{key:"queueAnimationFrameIfNeeded",value:function(n){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=n||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=br(n),r=i.confettiRadius,o=i.confettiNumber,s=i.confettiColors,a=i.emojis,c=i.emojiSize,u=this.canvas.getBoundingClientRect(),l=u.width,d=u.height,f=d*5/7,h={x:0,y:f},m={x:l,y:f},v=new vr(this.canvasContext),I=0;I<o/2;I++){var $=new Pt({initialPosition:h,direction:"right",confettiRadius:r,confettiColors:s,confettiNumber:o,emojis:a,emojiSize:c,canvasWidth:l}),X=new Pt({initialPosition:m,direction:"left",confettiRadius:r,confettiColors:s,confettiNumber:o,emojis:a,emojiSize:c,canvasWidth:l});v.addShapes($,X)}return this.activeConfettiBatches.push(v),this.queueAnimationFrameIfNeeded(),v.getBatchCompletePromise()}}]),e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},wr=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[n++];t[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=e[n++],s=e[n++],a=e[n++],c=((r&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],s=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Er={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const o=e[r],s=r+1<e.length,a=s?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,l=o>>2,d=(o&3)<<4|a>>4;let f=(a&15)<<2|u>>6,h=u&63;c||(h=64,s||(f=64)),i.push(n[l],n[d],n[f],n[h])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ir(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):wr(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const o=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const d=r<e.length?n[e.charAt(r)]:64;if(++r,o==null||a==null||u==null||d==null)throw Error();const f=o<<2|a>>4;if(i.push(f),u!==64){const h=a<<4&240|u>>2;if(i.push(h),d!==64){const m=u<<6&192|d;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Su=function(e){try{return Er.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Sn())}function Cn(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ou(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nu(){const e=Sn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Se(){return typeof indexedDB=="object"}function Ce(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;t(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Oe(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="FirebaseError";class oe extends Error{constructor(t,n,i){super(n);this.code=t,this.customData=i,this.name=Ar,Object.setPrototypeOf(this,oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,G.prototype.create)}}class G{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,o=this.errors[t],s=o?Sr(o,i):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new oe(r,a,i)}}function Sr(e,t){return e.replace(Cr,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const Cr=/\{\$([^}]+)}/g;function Ru(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ye(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const o=e[r],s=t[r];if($t(o)&&$t(s)){if(!ye(o,s))return!1}else if(o!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function $t(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Mu(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,o]=i.split("=");t[decodeURIComponent(r)]=decodeURIComponent(o)}}),t}function Du(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Pu(e,t){const n=new Or(e,t);return n.subscribe.bind(n)}class Or{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let r;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Nr(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:i},r.next===void 0&&(r.next=xe),r.error===void 0&&(r.error=xe),r.complete===void 0&&(r.complete=xe);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nr(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function xe(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=1e3,kr=2,Mr=4*60*60*1e3,Dr=.5;function Ft(e,t=Rr,n=kr){const i=t*Math.pow(n,e),r=Math.round(Dr*i*(Math.random()-.5)*2);return Math.min(Mr,i+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){return e&&e._delegate?e._delegate:e}class C{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new Tr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fr(t))try{this.getOrInitializeService({instanceIdentifier:x})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(t=x){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=x){return this.instances.has(t)}getOptions(t=x){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);i===a&&s.resolve(r)}return r}onInit(t,n){var i;const r=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(r,o);const s=this.instances.get(r);return s&&t(s,r),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:$r(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=x){return this.component?this.component.multipleInstances?t:x:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $r(e){return e===x?void 0:e}function Fr(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Pr(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(p||(p={}));const jr={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},Lr=p.INFO,Br={[p.DEBUG]:"log",[p.VERBOSE]:"log",[p.INFO]:"info",[p.WARN]:"warn",[p.ERROR]:"error"},Ur=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=Br[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class lt{constructor(t){this.name=t,this._logLevel=Lr,this._logHandler=Ur,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in p))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jr[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,p.DEBUG,...t),this._logHandler(this,p.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,p.VERBOSE,...t),this._logHandler(this,p.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,p.INFO,...t),this._logHandler(this,p.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,p.WARN,...t),this._logHandler(this,p.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,p.ERROR,...t),this._logHandler(this,p.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vr(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Vr(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Qe="@firebase/app",xt="0.7.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=new lt("@firebase/app"),qr="@firebase/app-compat",Kr="@firebase/analytics-compat",Hr="@firebase/analytics",Wr="@firebase/app-check-compat",Gr="@firebase/app-check",Yr="@firebase/auth",Xr="@firebase/auth-compat",Jr="@firebase/database",Qr="@firebase/database-compat",Zr="@firebase/functions",eo="@firebase/functions-compat",to="@firebase/installations",no="@firebase/installations-compat",io="@firebase/messaging",ro="@firebase/messaging-compat",oo="@firebase/performance",so="@firebase/performance-compat",ao="@firebase/remote-config",co="@firebase/remote-config-compat",uo="@firebase/storage",lo="@firebase/storage-compat",fo="@firebase/firestore",ho="@firebase/firestore-compat",po="firebase",mo="9.6.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="[DEFAULT]",go={[Qe]:"fire-core",[qr]:"fire-core-compat",[Hr]:"fire-analytics",[Kr]:"fire-analytics-compat",[Gr]:"fire-app-check",[Wr]:"fire-app-check-compat",[Yr]:"fire-auth",[Xr]:"fire-auth-compat",[Jr]:"fire-rtdb",[Qr]:"fire-rtdb-compat",[Zr]:"fire-fn",[eo]:"fire-fn-compat",[to]:"fire-iid",[no]:"fire-iid-compat",[io]:"fire-fcm",[ro]:"fire-fcm-compat",[oo]:"fire-perf",[so]:"fire-perf-compat",[ao]:"fire-rc",[co]:"fire-rc-compat",[uo]:"fire-gcs",[lo]:"fire-gcs-compat",[fo]:"fire-fst",[ho]:"fire-fst-compat","fire-js":"fire-js",[po]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=new Map,Ze=new Map;function _o(e,t){try{e.container.addComponent(t)}catch(n){ft.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function P(e){const t=e.name;if(Ze.has(t))return ft.debug(`There were multiple attempts to register component ${t}.`),!1;Ze.set(t,e);for(const n of be.values())_o(n,e);return!0}function se(e,t){return e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},ve=new G("app","Firebase",yo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new C("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ve.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=mo;function Fu(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:On,automaticDataCollectionEnabled:!1},t),i=n.name;if(typeof i!="string"||!i)throw ve.create("bad-app-name",{appName:String(i)});const r=be.get(i);if(r){if(ye(e,r.options)&&ye(n,r.config))return r;throw ve.create("duplicate-app",{appName:i})}const o=new xr(i);for(const a of Ze.values())o.addComponent(a);const s=new bo(e,n,o);return be.set(i,s),s}function Nn(e=On){const t=be.get(e);if(!t)throw ve.create("no-app",{appName:e});return t}function T(e,t,n){var i;let r=(i=go[e])!==null&&i!==void 0?i:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${r}" with version "${t}":`];o&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ft.warn(a.join(" "));return}P(new C(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(e){P(new C("platform-logger",t=>new zr(t),"PRIVATE")),T(Qe,xt,e),T(Qe,xt,"esm2017"),T("fire-js","")}vo("");function Io(e){return Array.prototype.slice.call(e)}function Rn(e){return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function Ne(e,t,n){var i,r=new Promise(function(o,s){i=e[t].apply(e,n),Rn(i).then(o,s)});return r.request=i,r}function wo(e,t,n){var i=Ne(e,t,n);return i.then(function(r){if(!!r)return new ie(r,i.request)})}function Y(e,t,n){n.forEach(function(i){Object.defineProperty(e.prototype,i,{get:function(){return this[t][i]},set:function(r){this[t][i]=r}})})}function dt(e,t,n,i){i.forEach(function(r){r in n.prototype&&(e.prototype[r]=function(){return Ne(this[t],r,arguments)})})}function Re(e,t,n,i){i.forEach(function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})})}function kn(e,t,n,i){i.forEach(function(r){r in n.prototype&&(e.prototype[r]=function(){return wo(this[t],r,arguments)})})}function q(e){this._index=e}Y(q,"_index",["name","keyPath","multiEntry","unique"]);dt(q,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);kn(q,"_index",IDBIndex,["openCursor","openKeyCursor"]);function ie(e,t){this._cursor=e,this._request=t}Y(ie,"_cursor",["direction","key","primaryKey","value"]);dt(ie,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(e){e in IDBCursor.prototype&&(ie.prototype[e]=function(){var t=this,n=arguments;return Promise.resolve().then(function(){return t._cursor[e].apply(t._cursor,n),Rn(t._request).then(function(i){if(!!i)return new ie(i,t._request)})})})});function R(e){this._store=e}R.prototype.createIndex=function(){return new q(this._store.createIndex.apply(this._store,arguments))};R.prototype.index=function(){return new q(this._store.index.apply(this._store,arguments))};Y(R,"_store",["name","keyPath","indexNames","autoIncrement"]);dt(R,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);kn(R,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);Re(R,"_store",IDBObjectStore,["deleteIndex"]);function ae(e){this._tx=e,this.complete=new Promise(function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}})}ae.prototype.objectStore=function(){return new R(this._tx.objectStore.apply(this._tx,arguments))};Y(ae,"_tx",["objectStoreNames","mode"]);Re(ae,"_tx",IDBTransaction,["abort"]);function ke(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new ae(n)}ke.prototype.createObjectStore=function(){return new R(this._db.createObjectStore.apply(this._db,arguments))};Y(ke,"_db",["name","version","objectStoreNames"]);Re(ke,"_db",IDBDatabase,["deleteObjectStore","close"]);function Me(e){this._db=e}Me.prototype.transaction=function(){return new ae(this._db.transaction.apply(this._db,arguments))};Y(Me,"_db",["name","version","objectStoreNames"]);Re(Me,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(e){[R,q].forEach(function(t){e in t.prototype&&(t.prototype[e.replace("open","iterate")]=function(){var n=Io(arguments),i=n[n.length-1],r=this._store||this._index,o=r[e].apply(r,n.slice(0,-1));o.onsuccess=function(){i(o.result)}})})});[q,R].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(t,n){var i=this,r=[];return new Promise(function(o){i.iterateCursor(t,function(s){if(!s){o(r);return}if(r.push(s.value),n!==void 0&&r.length==n){o(r);return}s.continue()})})})});function ht(e,t,n){var i=Ne(indexedDB,"open",[e,t]),r=i.request;return r&&(r.onupgradeneeded=function(o){n&&n(new ke(r.result,o.oldVersion,r.transaction))}),i.then(function(o){return new Me(o)})}function je(e){return Ne(indexedDB,"deleteDatabase",[e])}const Mn="@firebase/installations",pt="0.5.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=1e4,Pn=`w:${pt}`,$n="FIS_v2",Eo="https://firebaseinstallations.googleapis.com/v1",To=60*60*1e3,Ao="installations",So="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},B=new G(Ao,So,Co);function Fn(e){return e instanceof oe&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn({projectId:e}){return`${Eo}/projects/${e}/installations`}function jn(e){return{token:e.token,requestStatus:2,expiresIn:No(e.expiresIn),creationTime:Date.now()}}async function Ln(e,t){const i=(await t.json()).error;return B.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Bn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Oo(e,{refreshToken:t}){const n=Bn(e);return n.append("Authorization",Ro(t)),n}async function Un(e){const t=await e();return t.status>=500&&t.status<600?e():t}function No(e){return Number(e.replace("s","000"))}function Ro(e){return`${$n} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(e,{fid:t}){const n=xn(e),i=Bn(e),r={fid:t,authVersion:$n,appId:e.appId,sdkVersion:Pn},o={method:"POST",headers:i,body:JSON.stringify(r)},s=await Un(()=>fetch(n,o));if(s.ok){const a=await s.json();return{fid:a.fid||t,registrationStatus:2,refreshToken:a.refreshToken,authToken:jn(a.authToken)}}else throw await Ln("Create Installation",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=/^[cdef][\w-]{21}$/,et="";function Po(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=$o(e);return Do.test(n)?n:et}catch{return et}}function $o(e){return Mo(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Map;function qn(e,t){const n=De(e);Kn(n,t),Fo(n,t)}function Kn(e,t){const n=Vn.get(e);if(!!n)for(const i of n)i(t)}function Fo(e,t){const n=xo();n&&n.postMessage({key:e,fid:t}),jo()}let j=null;function xo(){return!j&&"BroadcastChannel"in self&&(j=new BroadcastChannel("[Firebase] FID Change"),j.onmessage=e=>{Kn(e.data.key,e.data.fid)}),j}function jo(){Vn.size===0&&j&&(j.close(),j=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="firebase-installations-database",Bo=1,U="firebase-installations-store";let Le=null;function mt(){return Le||(Le=ht(Lo,Bo,e=>{switch(e.oldVersion){case 0:e.createObjectStore(U)}})),Le}async function Ie(e,t){const n=De(e),r=(await mt()).transaction(U,"readwrite"),o=r.objectStore(U),s=await o.get(n);return await o.put(t,n),await r.complete,(!s||s.fid!==t.fid)&&qn(e,t.fid),t}async function Hn(e){const t=De(e),i=(await mt()).transaction(U,"readwrite");await i.objectStore(U).delete(t),await i.complete}async function Pe(e,t){const n=De(e),r=(await mt()).transaction(U,"readwrite"),o=r.objectStore(U),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await r.complete,a&&(!s||s.fid!==a.fid)&&qn(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(e){let t;const n=await Pe(e,i=>{const r=Uo(i),o=zo(e,r);return t=o.registrationPromise,o.installationEntry});return n.fid===et?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Uo(e){const t=e||{fid:Po(),registrationStatus:0};return Wn(t)}function zo(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(B.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=Vo(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:qo(e)}:{installationEntry:t}}async function Vo(e,t){try{const n=await ko(e,t);return Ie(e,n)}catch(n){throw Fn(n)&&n.customData.serverCode===409?await Hn(e):await Ie(e,{fid:t.fid,registrationStatus:0}),n}}async function qo(e){let t=await jt(e);for(;t.registrationStatus===1;)await zn(100),t=await jt(e);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await gt(e);return i||n}return t}function jt(e){return Pe(e,t=>{if(!t)throw B.create("installation-not-found");return Wn(t)})}function Wn(e){return Ko(e)?{fid:e.fid,registrationStatus:0}:e}function Ko(e){return e.registrationStatus===1&&e.registrationTime+Dn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho({appConfig:e,platformLoggerProvider:t},n){const i=Wo(e,n),r=Oo(e,n),o=t.getImmediate({optional:!0});o&&r.append("x-firebase-client",o.getPlatformInfoString());const s={installation:{sdkVersion:Pn}},a={method:"POST",headers:r,body:JSON.stringify(s)},c=await Un(()=>fetch(i,a));if(c.ok){const u=await c.json();return jn(u)}else throw await Ln("Generate Auth Token",c)}function Wo(e,{fid:t}){return`${xn(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(e,t=!1){let n;const i=await Pe(e.appConfig,o=>{if(!Gn(o))throw B.create("not-registered");const s=o.authToken;if(!t&&Xo(s))return o;if(s.requestStatus===1)return n=Go(e,t),o;{if(!navigator.onLine)throw B.create("app-offline");const a=Qo(o);return n=Yo(e,a),a}});return n?await n:i.authToken}async function Go(e,t){let n=await Lt(e.appConfig);for(;n.authToken.requestStatus===1;)await zn(100),n=await Lt(e.appConfig);const i=n.authToken;return i.requestStatus===0?_t(e,t):i}function Lt(e){return Pe(e,t=>{if(!Gn(t))throw B.create("not-registered");const n=t.authToken;return Zo(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Yo(e,t){try{const n=await Ho(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await Ie(e.appConfig,i),n}catch(n){if(Fn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Hn(e.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ie(e.appConfig,i)}throw n}}function Gn(e){return e!==void 0&&e.registrationStatus===2}function Xo(e){return e.requestStatus===2&&!Jo(e)}function Jo(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+To}function Qo(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Zo(e){return e.requestStatus===1&&e.requestTime+Dn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(e){const t=e,{installationEntry:n,registrationPromise:i}=await gt(t.appConfig);return i?i.catch(console.error):_t(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(e,t=!1){const n=e;return await ns(n.appConfig),(await _t(n,t)).token}async function ns(e){const{registrationPromise:t}=await gt(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e){if(!e||!e.options)throw Be("App Configuration");if(!e.name)throw Be("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Be(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Be(e){return B.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="installations",rs="installations-internal",os=e=>{const t=e.getProvider("app").getImmediate(),n=is(t),i=se(t,"platform-logger");return{app:t,appConfig:n,platformLoggerProvider:i,_delete:()=>Promise.resolve()}},ss=e=>{const t=e.getProvider("app").getImmediate(),n=se(t,Yn).getImmediate();return{getId:()=>es(n),getToken:r=>ts(n,r)}};function as(){P(new C(Yn,os,"PUBLIC")),P(new C(rs,ss,"PRIVATE"))}as();T(Mn,pt);T(Mn,pt,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="/firebase-messaging-sw.js",us="/firebase-cloud-messaging-push-scope",Xn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ls="https://fcmregistrations.googleapis.com/v1",Jn="google.c.a.c_id",fs="google.c.a.c_l",ds="google.c.a.ts",hs="google.c.a.e";var Bt;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Bt||(Bt={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var re;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(re||(re={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ps(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let o=0;o<i.length;++o)r[o]=i.charCodeAt(o);return r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="fcm_token_details_db",ms=5,Ut="fcm_token_object_Store";async function gs(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(Ue))return null;let t=null;return(await ht(Ue,ms,async i=>{var r;if(i.oldVersion<2||!i.objectStoreNames.contains(Ut))return;const o=i.transaction.objectStore(Ut),s=await o.index("fcmSenderId").get(e);if(await o.clear(),!!s){if(i.oldVersion===2){const a=s;if(!a.auth||!a.p256dh||!a.endpoint)return;t={token:a.fcmToken,createTime:(r=a.createTime)!==null&&r!==void 0?r:Date.now(),subscriptionOptions:{auth:a.auth,p256dh:a.p256dh,endpoint:a.endpoint,swScope:a.swScope,vapidKey:typeof a.vapidKey=="string"?a.vapidKey:k(a.vapidKey)}}}else if(i.oldVersion===3){const a=s;t={token:a.fcmToken,createTime:a.createTime,subscriptionOptions:{auth:k(a.auth),p256dh:k(a.p256dh),endpoint:a.endpoint,swScope:a.swScope,vapidKey:k(a.vapidKey)}}}else if(i.oldVersion===4){const a=s;t={token:a.fcmToken,createTime:a.createTime,subscriptionOptions:{auth:k(a.auth),p256dh:k(a.p256dh),endpoint:a.endpoint,swScope:a.swScope,vapidKey:k(a.vapidKey)}}}}})).close(),await je(Ue),await je("fcm_vapid_details_db"),await je("undefined"),_s(t)?t:null}function _s(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="firebase-messaging-database",bs=1,z="firebase-messaging-store";let ze=null;function yt(){return ze||(ze=ht(ys,bs,e=>{switch(e.oldVersion){case 0:e.createObjectStore(z)}})),ze}async function Qn(e){const t=vt(e),i=await(await yt()).transaction(z).objectStore(z).get(t);if(i)return i;{const r=await gs(e.appConfig.senderId);if(r)return await bt(e,r),r}}async function bt(e,t){const n=vt(e),r=(await yt()).transaction(z,"readwrite");return await r.objectStore(z).put(t,n),await r.complete,t}async function vs(e){const t=vt(e),i=(await yt()).transaction(z,"readwrite");await i.objectStore(z).delete(t),await i.complete}function vt({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},_=new G("messaging","Messaging",Is);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(e,t){const n=await wt(e),i=ei(t),r={method:"POST",headers:n,body:JSON.stringify(i)};let o;try{o=await(await fetch(It(e.appConfig),r)).json()}catch(s){throw _.create("token-subscribe-failed",{errorInfo:s})}if(o.error){const s=o.error.message;throw _.create("token-subscribe-failed",{errorInfo:s})}if(!o.token)throw _.create("token-subscribe-no-token");return o.token}async function Es(e,t){const n=await wt(e),i=ei(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let o;try{o=await(await fetch(`${It(e.appConfig)}/${t.token}`,r)).json()}catch(s){throw _.create("token-update-failed",{errorInfo:s})}if(o.error){const s=o.error.message;throw _.create("token-update-failed",{errorInfo:s})}if(!o.token)throw _.create("token-update-no-token");return o.token}async function Zn(e,t){const n=await wt(e),i={method:"DELETE",headers:n};try{const o=await(await fetch(`${It(e.appConfig)}/${t}`,i)).json();if(o.error){const s=o.error.message;throw _.create("token-unsubscribe-failed",{errorInfo:s})}}catch(r){throw _.create("token-unsubscribe-failed",{errorInfo:r})}}function It({projectId:e}){return`${ls}/projects/${e}/registrations`}async function wt({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ei({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:t,p256dh:e}};return i!==Xn&&(r.web.applicationPubKey=i),r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=7*24*60*60*1e3;async function As(e){const t=await Cs(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:k(t.getKey("auth")),p256dh:k(t.getKey("p256dh"))},i=await Qn(e.firebaseDependencies);if(i){if(Os(i.subscriptionOptions,n))return Date.now()>=i.createTime+Ts?Ss(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await Zn(e.firebaseDependencies,i.token)}catch(r){console.warn(r)}return zt(e.firebaseDependencies,n)}else return zt(e.firebaseDependencies,n)}async function ti(e){const t=await Qn(e.firebaseDependencies);t&&(await Zn(e.firebaseDependencies,t.token),await vs(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Ss(e,t){try{const n=await Es(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await bt(e.firebaseDependencies,i),n}catch(n){throw await ti(e),n}}async function zt(e,t){const i={token:await ws(e,t),createTime:Date.now(),subscriptionOptions:t};return await bt(e,i),i.token}async function Cs(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ps(t)})}function Os(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,r=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&i&&r&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Ns(t,e),Rs(t,e),ks(t,e),t}function Ns(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const r=t.notification.image;r&&(e.notification.image=r)}function Rs(e,t){!t.data||(e.data=t.data)}function ks(e,t){if(!t.fcmOptions)return;e.fcmOptions={};const n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);const i=t.fcmOptions.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(e){return typeof e=="object"&&!!e&&Jn in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ni("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");ni("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function ni(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(e){if(!e||!e.options)throw Ve("App Configuration Object");if(!e.name)throw Ve("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw Ve(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ve(e){return _.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=Ds(t);this.firebaseDependencies={app:t,appConfig:r,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(e){try{e.swRegistration=await navigator.serviceWorker.register(cs,{scope:us}),e.swRegistration.update().catch(()=>{})}catch(t){throw _.create("failed-service-worker-registration",{browserErrorMessage:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(e,t){if(!t&&!e.swRegistration&&await ii(e),!(!t&&!!e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw _.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Xn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(e,t){if(!navigator)throw _.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw _.create("permission-blocked");return await Fs(e,t==null?void 0:t.vapidKey),await $s(e,t==null?void 0:t.serviceWorkerRegistration),As(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(e,t,n){const i=js(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[Jn],message_name:n[fs],message_time:n[ds],message_device_time:Math.floor(Date.now()/1e3)})}function js(e){switch(e){case re.NOTIFICATION_CLICKED:return"notification_open";case re.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===re.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Vt(n)):e.onMessageHandler.next(Vt(n)));const i=n.data;Ms(i)&&i[hs]==="1"&&await xs(e,n.messageType,i)}const qt="@firebase/messaging",Kt="0.9.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=e=>{const t=new Ps(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Ls(t,n)),t},Us=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:i=>ri(t,i)}};function zs(){P(new C("messaging",Bs,"PUBLIC")),P(new C("messaging-internal",Us,"PRIVATE")),T(qt,Kt),T(qt,Kt,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(){return typeof window!="undefined"&&Se()&&await Ce()&&Oe()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(e){if(!navigator)throw _.create("only-available-in-window");return e.swRegistration||await ii(e),ti(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(e,t){if(!navigator)throw _.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(e=Nn()){return oi().then(t=>{if(!t)throw _.create("unsupported-browser")},t=>{throw _.create("indexed-db-unsupported")}),se(N(e),"messaging").getImmediate()}async function Hs(e,t){return e=N(e),ri(e,t)}function Ws(e){return e=N(e),Vs(e)}function Gs(e,t){return e=N(e),qs(e,t)}zs();var xu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",deleteToken:Ws,getMessaging:Ks,getToken:Hs,isSupported:oi,onMessage:Gs}),Ys="firebase",Xs="9.6.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */T(Ys,Xs,"app");const Ht="@firebase/performance",tt="0.5.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=tt,Js="FB-PERF-TRACE-START",Qs="FB-PERF-TRACE-STOP",nt="FB-PERF-TRACE-MEASURE",ai="_wt_",ci="_fp",ui="_fcp",li="_fid",fi="@firebase/performance/config",di="@firebase/performance/configexpire",Zs="performance",hi="Performance";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea={["trace started"]:"Trace {$traceName} was started before.",["trace stopped"]:"Trace {$traceName} is not running.",["nonpositive trace startTime"]:"Trace {$traceName} startTime should be positive.",["nonpositive trace duration"]:"Trace {$traceName} duration should be positive.",["no window"]:"Window is not available.",["no app id"]:"App id is not available.",["no project id"]:"Project id is not available.",["no api key"]:"Api key is not available.",["invalid cc log"]:"Attempted to queue invalid cc event",["FB not default"]:"Performance can only start when Firebase app instance is the default one.",["RC response not ok"]:"RC response is not ok",["invalid attribute name"]:"Attribute name {$attributeName} is invalid.",["invalid attribute value"]:"Attribute value {$attributeValue} is invalid.",["invalid custom metric name"]:"Custom metric name {$customMetricName} is invalid",["invalid String merger input"]:"Input for String merger is invalid, contact support team to resolve.",["already initialized"]:"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},b=new G(Zs,hi,ea);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=new lt(hi);O.logLevel=p.INFO;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe,pi;class g{constructor(t){if(this.window=t,!t)throw b.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(t){!this.performance||!this.performance.mark||this.performance.mark(t)}measure(t,n,i){!this.performance||!this.performance.measure||this.performance.measure(t,n,i)}getEntriesByType(t){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(t)}getEntriesByName(t){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(t)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!Oe()?(O.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):Se()?!0:(O.info("IndexedDB is not supported by current browswer"),!1)}setupObserver(t,n){if(!this.PerformanceObserver)return;new this.PerformanceObserver(r=>{for(const o of r.getEntries())n(o)}).observe({entryTypes:[t]})}static getInstance(){return qe===void 0&&(qe=new g(pi)),qe}}function ta(e){pi=e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mi;function na(e){const t=e.getId();return t.then(n=>{mi=n}),t}function Et(){return mi}function ia(e){const t=e.getToken();return t.then(n=>{}),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e,t){const n=e.length-t.length;if(n<0||n>1)throw b.create("invalid String merger input");const i=[];for(let r=0;r<e.length;r++)i.push(e.charAt(r)),t.length>r&&i.push(t.charAt(r));return i.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ke;class w{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=Wt("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=Wt("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return Ke===void 0&&(Ke=new w),Ke}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.VISIBLE=1]="VISIBLE",e[e.HIDDEN=2]="HIDDEN"})(W||(W={}));const ra=["firebase_","google_","ga_"],oa=new RegExp("^[a-zA-Z]\\w*$"),sa=40,aa=100;function ca(){const e=g.getInstance().navigator;return"serviceWorker"in e?e.serviceWorker.controller?2:3:1}function gi(){switch(g.getInstance().document.visibilityState){case"visible":return W.VISIBLE;case"hidden":return W.HIDDEN;default:return W.UNKNOWN}}function ua(){const t=g.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function la(e){return e.length===0||e.length>sa?!1:!ra.some(n=>e.startsWith(n))&&!!e.match(oa)}function fa(e){return e.length!==0&&e.length<=aa}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(e){var t;const n=(t=e.options)===null||t===void 0?void 0:t.appId;if(!n)throw b.create("no app id");return n}function da(e){var t;const n=(t=e.options)===null||t===void 0?void 0:t.projectId;if(!n)throw b.create("no project id");return n}function ha(e){var t;const n=(t=e.options)===null||t===void 0?void 0:t.apiKey;if(!n)throw b.create("no api key");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="0.0.1",ma={loggingEnabled:!0},ga="FIREBASE_INSTALLATIONS_AUTH";function _a(e,t){const n=ya();return n?(Gt(n),Promise.resolve()):Ia(e,t).then(Gt).then(i=>ba(i),()=>{})}function ya(){const e=g.getInstance().localStorage;if(!e)return;const t=e.getItem(di);if(!t||!wa(t))return;const n=e.getItem(fi);if(!!n)try{return JSON.parse(n)}catch{return}}function ba(e){const t=g.getInstance().localStorage;!e||!t||(t.setItem(fi,JSON.stringify(e)),t.setItem(di,String(Date.now()+w.getInstance().configTimeToLive*60*60*1e3)))}const va="Could not fetch config, will use default configs";function Ia(e,t){return ia(e.installations).then(n=>{const i=da(e.app),r=ha(e.app),o=`https://firebaseremoteconfig.googleapis.com/v1/projects/${i}/namespaces/fireperf:fetch?key=${r}`,s=new Request(o,{method:"POST",headers:{Authorization:`${ga} ${n}`},body:JSON.stringify({app_instance_id:t,app_instance_id_token:n,app_id:_i(e.app),app_version:si,sdk_version:pa})});return fetch(s).then(a=>{if(a.ok)return a.json();throw b.create("RC response not ok")})}).catch(()=>{O.info(va)})}function Gt(e){if(!e)return e;const t=w.getInstance(),n=e.entries||{};return n.fpr_enabled!==void 0?t.loggingEnabled=String(n.fpr_enabled)==="true":t.loggingEnabled=ma.loggingEnabled,n.fpr_log_source&&(t.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(t.logEndPointUrl=n.fpr_log_endpoint_url),n.fpr_log_transport_key&&(t.transportKey=n.fpr_log_transport_key),n.fpr_vc_network_request_sampling_rate!==void 0&&(t.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),n.fpr_vc_trace_sampling_rate!==void 0&&(t.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),t.logTraceAfterSampling=Yt(t.tracesSamplingRate),t.logNetworkAfterSampling=Yt(t.networkRequestsSamplingRate),e}function wa(e){return Number(e)>Date.now()}function Yt(e){return Math.random()<=e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tt=1,He;function yi(e){return Tt=2,He=He||Ta(e),He}function Ea(){return Tt===3}function Ta(e){return Aa().then(()=>na(e.installations)).then(t=>_a(e,t)).then(()=>Xt(),()=>Xt())}function Aa(){const e=g.getInstance().document;return new Promise(t=>{if(e&&e.readyState!=="complete"){const n=()=>{e.readyState==="complete"&&(e.removeEventListener("readystatechange",n),t())};e.addEventListener("readystatechange",n)}else t()})}function Xt(){Tt=3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=10*1e3,Sa=5.5*1e3,bi=3,Ca=1e3;let we=bi,F=[],Jt=!1;function Oa(){Jt||($e(Sa),Jt=!0)}function $e(e){setTimeout(()=>{if(we!==0){if(!F.length)return $e(At);Na()}},e)}function Na(){const e=F.splice(0,Ca),t=e.map(i=>({source_extension_json_proto3:i.message,event_time_ms:String(i.eventTime)})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:w.getInstance().logSource,log_event:t};Ra(n,e).catch(()=>{F=[...e,...F],we--,O.info(`Tries left: ${we}.`),$e(At)})}function Ra(e,t){return ka(e).then(n=>(n.ok||O.info("Call to Firebase backend failed."),n.json())).then(n=>{const i=Number(n.nextRequestWaitMillis);let r=At;isNaN(i)||(r=Math.max(i,r));const o=n.logResponseDetails;Array.isArray(o)&&o.length>0&&o[0].responseAction==="RETRY_REQUEST_LATER"&&(F=[...t,...F],O.info("Retry transport request later.")),we=bi,$e(r)})}function ka(e){const t=w.getInstance().getFlTransportFullUrl();return fetch(t,{method:"POST",body:JSON.stringify(e)})}function Ma(e){if(!e.eventTime||!e.message)throw b.create("invalid cc log");F=[...F,e]}function Da(e){return(...t)=>{const n=e(...t);Ma({message:n,eventTime:Date.now()})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let We;function vi(e,t){We||(We=Da($a)),We(e,t)}function de(e){const t=w.getInstance();!t.instrumentationEnabled&&e.isAuto||!t.dataCollectionEnabled&&!e.isAuto||!g.getInstance().requiredApisAvailable()||e.isAuto&&gi()!==W.VISIBLE||(Ea()?Ge(e):yi(e.performanceController).then(()=>Ge(e),()=>Ge(e)))}function Ge(e){if(!Et())return;const t=w.getInstance();!t.loggingEnabled||!t.logTraceAfterSampling||setTimeout(()=>vi(e,1),0)}function Pa(e){const t=w.getInstance();if(!t.instrumentationEnabled)return;const n=e.url,i=t.logEndPointUrl.split("?")[0],r=t.flTransportEndpointUrl.split("?")[0];n===i||n===r||!t.loggingEnabled||!t.logNetworkAfterSampling||setTimeout(()=>vi(e,0),0)}function $a(e,t){return t===0?Fa(e):xa(e)}function Fa(e){const t={url:e.url,http_method:e.httpMethod||0,http_response_code:200,response_payload_bytes:e.responsePayloadBytes,client_start_time_us:e.startTimeUs,time_to_response_initiated_us:e.timeToResponseInitiatedUs,time_to_response_completed_us:e.timeToResponseCompletedUs},n={application_info:Ii(e.performanceController.app),network_request_metric:t};return JSON.stringify(n)}function xa(e){const t={name:e.name,is_auto:e.isAuto,client_start_time_us:e.startTimeUs,duration_us:e.durationUs};Object.keys(e.counters).length!==0&&(t.counters=e.counters);const n=e.getAttributes();Object.keys(n).length!==0&&(t.custom_attributes=n);const i={application_info:Ii(e.performanceController.app),trace_metric:t};return JSON.stringify(i)}function Ii(e){return{google_app_id:_i(e),app_instance_id:Et(),web_app_info:{sdk_version:si,page_url:g.getInstance().getUrl(),service_worker_status:ca(),visibility_state:gi(),effective_connection_type:ua()},application_process_state:0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=100,La="_",Ba=[ci,ui,li];function Ua(e,t){return e.length===0||e.length>ja?!1:t&&t.startsWith(ai)&&Ba.indexOf(e)>-1||!e.startsWith(La)}function za(e){const t=Math.floor(e);return t<e&&O.info(`Metric value should be an Integer, setting the value as : ${t}.`),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t,n,i=!1,r){this.performanceController=t,this.name=n,this.isAuto=i,this.state=1,this.customAttributes={},this.counters={},this.api=g.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${Js}-${this.randomId}-${this.name}`,this.traceStopMark=`${Qs}-${this.randomId}-${this.name}`,this.traceMeasure=r||`${nt}-${this.randomId}-${this.name}`,r&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw b.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw b.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),de(this)}record(t,n,i){if(t<=0)throw b.create("nonpositive trace startTime",{traceName:this.name});if(n<=0)throw b.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(n*1e3),this.startTimeUs=Math.floor(t*1e3),i&&i.attributes&&(this.customAttributes=Object.assign({},i.attributes)),i&&i.metrics)for(const r of Object.keys(i.metrics))isNaN(Number(i.metrics[r]))||(this.counters[r]=Number(Math.floor(i.metrics[r])));de(this)}incrementMetric(t,n=1){this.counters[t]===void 0?this.putMetric(t,n):this.putMetric(t,this.counters[t]+n)}putMetric(t,n){if(Ua(t,this.name))this.counters[t]=za(n);else throw b.create("invalid custom metric name",{customMetricName:t})}getMetric(t){return this.counters[t]||0}putAttribute(t,n){const i=la(t),r=fa(n);if(i&&r){this.customAttributes[t]=n;return}if(!i)throw b.create("invalid attribute name",{attributeName:t});if(!r)throw b.create("invalid attribute value",{attributeValue:n})}getAttribute(t){return this.customAttributes[t]}removeAttribute(t){this.customAttributes[t]!==void 0&&delete this.customAttributes[t]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(t){this.startTimeUs=t}setDuration(t){this.durationUs=t}calculateTraceMetrics(){const t=this.api.getEntriesByName(this.traceMeasure),n=t&&t[0];n&&(this.durationUs=Math.floor(n.duration*1e3),this.startTimeUs=Math.floor((n.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(t,n,i,r){const o=g.getInstance().getUrl();if(!o)return;const s=new L(t,ai+o,!0),a=Math.floor(g.getInstance().getTimeOrigin()*1e3);s.setStartTime(a),n&&n[0]&&(s.setDuration(Math.floor(n[0].duration*1e3)),s.putMetric("domInteractive",Math.floor(n[0].domInteractive*1e3)),s.putMetric("domContentLoadedEventEnd",Math.floor(n[0].domContentLoadedEventEnd*1e3)),s.putMetric("loadEventEnd",Math.floor(n[0].loadEventEnd*1e3)));const c="first-paint",u="first-contentful-paint";if(i){const l=i.find(f=>f.name===c);l&&l.startTime&&s.putMetric(ci,Math.floor(l.startTime*1e3));const d=i.find(f=>f.name===u);d&&d.startTime&&s.putMetric(ui,Math.floor(d.startTime*1e3)),r&&s.putMetric(li,Math.floor(r*1e3))}de(s)}static createUserTimingTrace(t,n){const i=new L(t,n,!1,n);de(i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){const n=t;if(!n||n.responseStart===void 0)return;const i=g.getInstance().getTimeOrigin(),r=Math.floor((n.startTime+i)*1e3),o=n.responseStart?Math.floor((n.responseStart-n.startTime)*1e3):void 0,s=Math.floor((n.responseEnd-n.startTime)*1e3),a=n.name&&n.name.split("?")[0],c={performanceController:e,url:a,responsePayloadBytes:n.transferSize,startTimeUs:r,timeToResponseInitiatedUs:o,timeToResponseCompletedUs:s};Pa(c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=5e3;function Zt(e){!Et()||(setTimeout(()=>Ka(e),0),setTimeout(()=>qa(e),0),setTimeout(()=>Ha(e),0))}function qa(e){const t=g.getInstance(),n=t.getEntriesByType("resource");for(const i of n)Qt(e,i);t.setupObserver("resource",i=>Qt(e,i))}function Ka(e){const t=g.getInstance(),n=t.getEntriesByType("navigation"),i=t.getEntriesByType("paint");if(t.onFirstInputDelay){let r=setTimeout(()=>{L.createOobTrace(e,n,i),r=void 0},Va);t.onFirstInputDelay(o=>{r&&(clearTimeout(r),L.createOobTrace(e,n,i,o))})}else L.createOobTrace(e,n,i)}function Ha(e){const t=g.getInstance(),n=t.getEntriesByType("measure");for(const i of n)en(e,i);t.setupObserver("measure",i=>en(e,i))}function en(e,t){const n=t.name;n.substring(0,nt.length)!==nt&&L.createUserTimingTrace(e,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t,n){this.app=t,this.installations=n,this.initialized=!1}_init(t){this.initialized||((t==null?void 0:t.dataCollectionEnabled)!==void 0&&(this.dataCollectionEnabled=t.dataCollectionEnabled),(t==null?void 0:t.instrumentationEnabled)!==void 0&&(this.instrumentationEnabled=t.instrumentationEnabled),g.getInstance().requiredApisAvailable()?Ce().then(n=>{n&&(Oa(),yi(this).then(()=>Zt(this),()=>Zt(this)),this.initialized=!0)}).catch(n=>{O.info(`Environment doesn't support IndexedDB: ${n}`)}):O.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(t){w.getInstance().instrumentationEnabled=t}get instrumentationEnabled(){return w.getInstance().instrumentationEnabled}set dataCollectionEnabled(t){w.getInstance().dataCollectionEnabled=t}get dataCollectionEnabled(){return w.getInstance().dataCollectionEnabled}}const Ga="[DEFAULT]",Ya=(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(n.name!==Ga)throw b.create("FB not default");if(typeof window=="undefined")throw b.create("no window");ta(window);const r=new Wa(n,i);return r._init(t),r};function Xa(){P(new C("performance",Ya,"PUBLIC")),T(Ht,tt),T(Ht,tt,"esm2017")}Xa();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee="analytics",Ja="firebase_id",Qa="origin",Za=60*1e3,ec="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wi="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=new lt("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function tc(e,t){const n=document.createElement("script");n.src=`${wi}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function nc(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ic(e,t,n,i,r,o){const s=i[r];try{if(s)await t[s];else{const c=(await Ei(n)).find(u=>u.measurementId===r);c&&await t[c.appId]}}catch(a){y.error(a)}e("config",r,o)}async function rc(e,t,n,i,r){try{let o=[];if(r&&r.send_to){let s=r.send_to;Array.isArray(s)||(s=[s]);const a=await Ei(n);for(const c of s){const u=a.find(d=>d.measurementId===c),l=u&&t[u.appId];if(l)o.push(l);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",i,r||{})}catch(o){y.error(o)}}function oc(e,t,n,i){async function r(o,s,a){try{o==="event"?await rc(e,t,n,s,a):o==="config"?await ic(e,t,n,i,s,a):e("set",s)}catch(c){y.error(c)}}return r}function sc(e,t,n,i,r){let o=function(...s){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(o=window[r]),window[r]=oc(o,e,t,n),{gtagCore:o,wrappedGtag:window[r]}}function ac(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(wi))return t;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},E=new G("analytics","Analytics",cc);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=30,lc=1e3;class fc{constructor(t={},n=lc){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ti=new fc;function dc(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function hc(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:dc(i)},o=ec.replace("{app-id}",n),s=await fetch(o,r);if(s.status!==200&&s.status!==304){let a="";try{const c=await s.json();((t=c.error)===null||t===void 0?void 0:t.message)&&(a=c.error.message)}catch{}throw E.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function pc(e,t=Ti,n){const{appId:i,apiKey:r,measurementId:o}=e.options;if(!i)throw E.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:i};throw E.create("no-api-key")}const s=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new _c;return setTimeout(async()=>{a.abort()},n!==void 0?n:Za),Ai({appId:i,apiKey:r,measurementId:o},s,a,t)}async function Ai(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=Ti){const{appId:o,measurementId:s}=e;try{await mc(i,t)}catch(a){if(s)return y.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:o,measurementId:s};throw a}try{const a=await hc(e);return r.deleteThrottleMetadata(o),a}catch(a){if(!gc(a)){if(r.deleteThrottleMetadata(o),s)return y.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:o,measurementId:s};throw a}const c=Number(a.customData.httpStatus)===503?Ft(n,r.intervalMillis,uc):Ft(n,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return r.setThrottleMetadata(o,u),y.debug(`Calling attemptFetch again in ${c} millis`),Ai(e,u,i,r)}}function mc(e,t){return new Promise((n,i)=>{const r=Math.max(t-Date.now(),0),o=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(o),i(E.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function gc(e){if(!(e instanceof oe)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class _c{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yc(){if(Se())try{await Ce()}catch(e){return y.warn(E.create("indexeddb-unavailable",{errorInfo:e}).message),!1}else return y.warn(E.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function bc(e,t,n,i,r,o,s){var a;const c=pc(e);c.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&y.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>y.error(h)),t.push(c);const u=yc().then(h=>{if(h)return i.getId()}),[l,d]=await Promise.all([c,u]);ac()||tc(o,l.measurementId),r("js",new Date);const f=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return f[Qa]="firebase",f.update=!0,d!=null&&(f[Ja]=d),r("config",l.measurementId,f),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t){this.app=t}_delete(){return delete D[this.app.options.appId],Promise.resolve()}}let D={},tn=[];const nn={};let me="dataLayer",Si="gtag",rn,ce,it=!1;function Ic(e){if(it)throw E.create("already-initialized");e.dataLayerName&&(me=e.dataLayerName),e.gtagName&&(Si=e.gtagName)}function wc(){const e=[];if(Cn()&&e.push("This is a browser extension environment."),Oe()||e.push("Cookies are not available."),e.length>0){const t=e.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=E.create("invalid-analytics-context",{errorInfo:t});y.warn(n.message)}}function Ec(e,t,n){wc();const i=e.options.appId;if(!i)throw E.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)y.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw E.create("no-api-key");if(D[i]!=null)throw E.create("already-exists",{id:i});if(!it){nc(me);const{wrappedGtag:o,gtagCore:s}=sc(D,tn,nn,me,Si);ce=o,rn=s,it=!0}return D[i]=bc(e,tn,nn,t,rn,me,n),new vc(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tc(e,t,n,i,r){if(r&&r.global){e("event",n,i);return}else{const o=await t,s=Object.assign(Object.assign({},i),{send_to:o});e("event",n,s)}}async function Ac(e,t,n,i){if(i&&i.global)return e("set",{screen_name:n}),Promise.resolve();{const r=await t;e("config",r,{update:!0,screen_name:n})}}async function Sc(e,t,n,i){if(i&&i.global)return e("set",{user_id:n}),Promise.resolve();{const r=await t;e("config",r,{update:!0,user_id:n})}}async function Cc(e,t,n,i){if(i&&i.global){const r={};for(const o of Object.keys(n))r[`user_properties.${o}`]=n[o];return e("set",r),Promise.resolve()}else{const r=await t;e("config",r,{update:!0,user_properties:n})}}async function Oc(e,t){const n=await e;window[`ga-disable-${n}`]=!t}function Nc(e=Nn()){e=N(e);const t=se(e,Ee);return t.isInitialized()?t.getImmediate():Ci(e)}function Ci(e,t={}){const n=se(e,Ee);if(n.isInitialized()){const r=n.getImmediate();if(ye(t,n.getOptions()))return r;throw E.create("already-initialized")}return n.initialize({options:t})}async function Rc(){if(Cn()||!Oe()||!Se())return!1;try{return await Ce()}catch{return!1}}function kc(e,t,n){e=N(e),Ac(ce,D[e.app.options.appId],t,n).catch(i=>y.error(i))}function Mc(e,t,n){e=N(e),Sc(ce,D[e.app.options.appId],t,n).catch(i=>y.error(i))}function Dc(e,t,n){e=N(e),Cc(ce,D[e.app.options.appId],t,n).catch(i=>y.error(i))}function Pc(e,t){e=N(e),Oc(D[e.app.options.appId],t).catch(n=>y.error(n))}function Oi(e,t,n,i){e=N(e),Tc(ce,D[e.app.options.appId],t,n,i).catch(r=>y.error(r))}const on="@firebase/analytics",sn="0.7.5";function $c(){P(new C(Ee,(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return Ec(i,r,n)},"PUBLIC")),P(new C("analytics-internal",e,"PRIVATE")),T(on,sn),T(on,sn,"esm2017");function e(t){try{const n=t.getProvider(Ee).getImmediate();return{logEvent:(i,r,o)=>Oi(n,i,r,o)}}catch(n){throw E.create("interop-component-reg-failed",{reason:n})}}}$c();var ju=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",getAnalytics:Nc,initializeAnalytics:Ci,isSupported:Rc,logEvent:Oi,setAnalyticsCollectionEnabled:Pc,setCurrentScreen:kc,setUserId:Mc,setUserProperties:Dc,settings:Ic});export{ou as $,mu as A,Qi as B,Ri as C,Iu as D,au as E,Lc as F,Uc as G,zc as H,Bc as I,Bi as J,M as K,Wc as L,qc as M,du as N,jc as O,Eu as P,oi as Q,Au as R,vu as S,zi as T,Jc as U,ne as V,hu as W,nu as X,Tu as Y,wu as Z,V as _,Vi as a,Ct as a0,gu as a1,cu as a2,xc as a3,Fc as a4,eu as a5,Gc as a6,Fu as a7,se as a8,ye as a9,N as aa,Su as ab,ku as ac,Mu as ad,Du as ae,Nn as af,lt as ag,p as ah,$u as ai,Cu as aj,Ou as ak,oe as al,Nu as am,P as an,C as ao,T as ap,G as aq,Cn as ar,Sn as as,Pu as at,Ru as au,xu as av,ju as aw,Yc as b,Xc as c,Ui as d,mn as e,tu as f,Vc as g,Ki as h,bu as i,Zc as j,Kc as k,Hc as l,Qc as m,uu as n,fu as o,lu as p,Xi as q,su as r,ki as s,at as t,ru as u,iu as v,_u as w,yu as x,Ji as y,pu as z};
