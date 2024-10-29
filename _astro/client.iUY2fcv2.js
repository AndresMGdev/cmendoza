const ce="modulepreload",ae=function(e){return"/cmendoza/"+e},q={},ue=function(t,_,l){let o=Promise.resolve();if(_&&_.length>0){const r=document.getElementsByTagName("link");o=Promise.all(_.map(i=>{if(i=ae(i),i in q)return;q[i]=!0;const c=i.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!l)for(let n=r.length-1;n>=0;n--){const h=r[n];if(h.href===i&&(!c||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":ce,c||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),c)return new Promise((n,h)=>{f.addEventListener("load",n),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})}))}return o.then(()=>t()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})};var H,p,Z,fe,S,G,ee,I,C={},te=[],pe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,F=Array.isArray;function w(e,t){for(var _ in t)e[_]=t[_];return e}function _e(e){var t=e.parentNode;t&&t.removeChild(e)}function x(e,t,_){var l,o,r,i={};for(r in t)r=="key"?l=t[r]:r=="ref"?o=t[r]:i[r]=t[r];if(arguments.length>2&&(i.children=arguments.length>3?H.call(arguments,2):_),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)i[r]===void 0&&(i[r]=e.defaultProps[r]);return M(e,i,l,o,null)}function M(e,t,_,l,o){var r={type:e,props:t,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Z,__i:-1,__u:0};return o==null&&p.vnode!=null&&p.vnode(r),r}function A(e){return e.children}function N(e,t){this.props=e,this.context=t}function P(e,t){if(t==null)return e.__?P(e.__,e.__i+1):null;for(var _;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null)return _.__e;return typeof e.type=="function"?P(e):null}function ne(e){var t,_;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null){e.__e=e.__c.base=_.__e;break}return ne(e)}}function J(e){(!e.__d&&(e.__d=!0)&&S.push(e)&&!R.__r++||G!==p.debounceRendering)&&((G=p.debounceRendering)||ee)(R)}function R(){var e,t,_,l,o,r,i,c,u;for(S.sort(I);e=S.shift();)e.__d&&(t=S.length,l=void 0,r=(o=(_=e).__v).__e,c=[],u=[],(i=_.__P)&&((l=w({},o)).__v=o.__v+1,p.vnode&&p.vnode(l),j(i,l,o,_.__n,i.ownerSVGElement!==void 0,32&o.__u?[r]:null,c,r??P(o),!!(32&o.__u),u),l.__.__k[l.__i]=l,le(c,l,u),l.__e!=r&&ne(l)),S.length>t&&S.sort(I));R.__r=0}function oe(e,t,_,l,o,r,i,c,u,s,f){var n,h,a,v,k,y=l&&l.__k||te,d=t.length;for(_.__d=u,de(_,t,y),u=_.__d,n=0;n<d;n++)(a=_.__k[n])!=null&&typeof a!="boolean"&&typeof a!="function"&&(h=a.__i===-1?C:y[a.__i]||C,a.__i=n,j(e,a,h,o,r,i,c,u,s,f),v=a.__e,a.ref&&h.ref!=a.ref&&(h.ref&&V(h.ref,null,a),f.push(a.ref,a.__c||v,a)),k==null&&v!=null&&(k=v),65536&a.__u||h.__k===a.__k?u=re(a,u,e):typeof a.type=="function"&&a.__d!==void 0?u=a.__d:v&&(u=v.nextSibling),a.__d=void 0,a.__u&=-196609);_.__d=u,_.__e=k}function de(e,t,_){var l,o,r,i,c,u=t.length,s=_.length,f=s,n=0;for(e.__k=[],l=0;l<u;l++)(o=e.__k[l]=(o=t[l])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?M(null,o,null,null,o):F(o)?M(A,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?M(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,c=he(o,_,i=l+n,f),o.__i=c,r=null,c!==-1&&(f--,(r=_[c])&&(r.__u|=131072)),r==null||r.__v===null?(c==-1&&n--,typeof o.type!="function"&&(o.__u|=65536)):c!==i&&(c===i+1?n++:c>i?f>u-i?n+=c-i:n--:n=c<i&&c==i-1?c-i:0,c!==l+n&&(o.__u|=65536))):(r=_[l])&&r.key==null&&r.__e&&(r.__e==e.__d&&(e.__d=P(r)),O(r,r,!1),_[l]=null,f--);if(f)for(l=0;l<s;l++)(r=_[l])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=P(r)),O(r,r))}function re(e,t,_){var l,o;if(typeof e.type=="function"){for(l=e.__k,o=0;l&&o<l.length;o++)l[o]&&(l[o].__=e,t=re(l[o],t,_));return t}return e.__e!=t&&(_.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function he(e,t,_,l){var o=e.key,r=e.type,i=_-1,c=_+1,u=t[_];if(u===null||u&&o==u.key&&r===u.type)return _;if(l>(u!=null&&!(131072&u.__u)?1:0))for(;i>=0||c<t.length;){if(i>=0){if((u=t[i])&&!(131072&u.__u)&&o==u.key&&r===u.type)return i;i--}if(c<t.length){if((u=t[c])&&!(131072&u.__u)&&o==u.key&&r===u.type)return c;c++}}return-1}function K(e,t,_){t[0]==="-"?e.setProperty(t,_??""):e[t]=_==null?"":typeof _!="number"||pe.test(t)?_:_+"px"}function U(e,t,_,l,o){var r;e:if(t==="style")if(typeof _=="string")e.style.cssText=_;else{if(typeof l=="string"&&(e.style.cssText=l=""),l)for(t in l)_&&t in _||K(e.style,t,"");if(_)for(t in _)l&&_[t]===l[t]||K(e.style,t,_[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=_,_?l?_.u=l.u:(_.u=Date.now(),e.addEventListener(t,r?X:Q,r)):e.removeEventListener(t,r?X:Q,r);else{if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,_))}}function Q(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(p.event?p.event(e):e)}function X(e){return this.l[e.type+!0](p.event?p.event(e):e)}function j(e,t,_,l,o,r,i,c,u,s){var f,n,h,a,v,k,y,d,m,b,D,E,z,L,W,g=t.type;if(t.constructor!==void 0)return null;128&_.__u&&(u=!!(32&_.__u),r=[c=t.__e=_.__e]),(f=p.__b)&&f(t);e:if(typeof g=="function")try{if(d=t.props,m=(f=g.contextType)&&l[f.__c],b=f?m?m.props.value:f.__:l,_.__c?y=(n=t.__c=_.__c).__=n.__E:("prototype"in g&&g.prototype.render?t.__c=n=new g(d,b):(t.__c=n=new N(d,b),n.constructor=g,n.render=ye),m&&m.sub(n),n.props=d,n.state||(n.state={}),n.context=b,n.__n=l,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),g.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=w({},n.__s)),w(n.__s,g.getDerivedStateFromProps(d,n.__s))),a=n.props,v=n.state,n.__v=t,h)g.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(g.getDerivedStateFromProps==null&&d!==a&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(d,b),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(d,n.__s,b)===!1||t.__v===_.__v)){for(t.__v!==_.__v&&(n.props=d,n.state=n.__s,n.__d=!1),t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(T){T&&(T.__=t)}),D=0;D<n._sb.length;D++)n.__h.push(n._sb[D]);n._sb=[],n.__h.length&&i.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(d,n.__s,b),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(a,v,k)})}if(n.context=b,n.props=d,n.__P=e,n.__e=!1,E=p.__r,z=0,"prototype"in g&&g.prototype.render){for(n.state=n.__s,n.__d=!1,E&&E(t),f=n.render(n.props,n.state,n.context),L=0;L<n._sb.length;L++)n.__h.push(n._sb[L]);n._sb=[]}else do n.__d=!1,E&&E(t),f=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++z<25);n.state=n.__s,n.getChildContext!=null&&(l=w(w({},l),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(k=n.getSnapshotBeforeUpdate(a,v)),oe(e,F(W=f!=null&&f.type===A&&f.key==null?f.props.children:f)?W:[W],t,_,l,o,r,i,c,u,s),n.base=t.__e,t.__u&=-161,n.__h.length&&i.push(n),y&&(n.__E=n.__=null)}catch(T){t.__v=null,u||r!=null?(t.__e=c,t.__u|=u?160:32,r[r.indexOf(c)]=null):(t.__e=_.__e,t.__k=_.__k),p.__e(T,t,_)}else r==null&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=ve(_.__e,t,_,l,o,r,i,u,s);(f=p.diffed)&&f(t)}function le(e,t,_){t.__d=void 0;for(var l=0;l<_.length;l++)V(_[l],_[++l],_[++l]);p.__c&&p.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(r){r.call(o)})}catch(r){p.__e(r,o.__v)}})}function ve(e,t,_,l,o,r,i,c,u){var s,f,n,h,a,v,k,y=_.props,d=t.props,m=t.type;if(m==="svg"&&(o=!0),r!=null){for(s=0;s<r.length;s++)if((a=r[s])&&"setAttribute"in a==!!m&&(m?a.localName===m:a.nodeType===3)){e=a,r[s]=null;break}}if(e==null){if(m===null)return document.createTextNode(d);e=o?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,d.is&&d),r=null,c=!1}if(m===null)y===d||c&&e.data===d||(e.data=d);else{if(r=r&&H.call(e.childNodes),y=_.props||C,!c&&r!=null)for(y={},s=0;s<e.attributes.length;s++)y[(a=e.attributes[s]).name]=a.value;for(s in y)a=y[s],s=="children"||(s=="dangerouslySetInnerHTML"?n=a:s==="key"||s in d||U(e,s,null,a,o));for(s in d)a=d[s],s=="children"?h=a:s=="dangerouslySetInnerHTML"?f=a:s=="value"?v=a:s=="checked"?k=a:s==="key"||c&&typeof a!="function"||y[s]===a||U(e,s,a,y[s],o);if(f)c||n&&(f.__html===n.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(n&&(e.innerHTML=""),oe(e,F(h)?h:[h],t,_,l,o&&m!=="foreignObject",r,i,r?r[0]:_.__k&&P(_,0),c,u),r!=null)for(s=r.length;s--;)r[s]!=null&&_e(r[s]);c||(s="value",v!==void 0&&(v!==e[s]||m==="progress"&&!v||m==="option"&&v!==y[s])&&U(e,s,v,y[s],!1),s="checked",k!==void 0&&k!==e[s]&&U(e,s,k,y[s],!1))}return e}function V(e,t,_){try{typeof e=="function"?e(t):e.current=t}catch(l){p.__e(l,_)}}function O(e,t,_){var l,o;if(p.unmount&&p.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||V(l,null,t)),(l=e.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(r){p.__e(r,t)}l.base=l.__P=null,e.__c=void 0}if(l=e.__k)for(o=0;o<l.length;o++)l[o]&&O(l[o],t,_||typeof e.type!="function");_||e.__e==null||_e(e.__e),e.__=e.__e=e.__d=void 0}function ye(e,t,_){return this.constructor(e,_)}function B(e,t,_){var l,o,r,i;p.__&&p.__(e,t),o=(l=typeof _=="function")?null:_&&_.__k||t.__k,r=[],i=[],j(t,e=(!l&&_||t).__k=x(A,null,[e]),o||C,C,t.ownerSVGElement!==void 0,!l&&_?[_]:o?null:t.firstChild?H.call(t.childNodes):null,r,!l&&_?_:o?o.__e:t.firstChild,l,i),le(r,e,i)}function ie(e,t){B(e,t,ie)}H=te.slice,p={__e:function(e,t,_,l){for(var o,r,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(e)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,l||{}),i=o.__d),i)return o.__E=o}catch(c){e=c}throw e}},Z=0,fe=function(e){return e!=null&&e.constructor==null},N.prototype.setState=function(e,t){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof e=="function"&&(e=e(w({},_),this.props)),e&&w(_,e),e!=null&&this.__v&&(t&&this._sb.push(t),J(this))},N.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),J(this))},N.prototype.render=A,S=[],ee=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,I=function(e,t){return e.__v.__b-t.__v.__b},R.__r=0;const se=({value:e,name:t,hydrate:_=!0})=>e?x(_?"astro-slot":"astro-static-slot",{name:t,dangerouslySetInnerHTML:{__html:e}}):null;se.shouldComponentUpdate=()=>!1;var Y=se;const $=new Map;var me=e=>async(t,_,{default:l,...o},{client:r})=>{if(!e.hasAttribute("ssr"))return;for(const[u,s]of Object.entries(o))_[u]=x(Y,{value:s,name:u});if(e.dataset.preactSignals){const{signal:u}=await ue(()=>import("./signals.module.seZw_sit.js"),__vite__mapDeps([]));let s=JSON.parse(e.dataset.preactSignals);for(const[f,n]of Object.entries(s)){if(!$.has(n)){const h=u(_[f]);$.set(n,h)}_[f]=$.get(n)}}(r!=="only"?ie:B)(x(t,_,l!=null?x(Y,{value:l}):l),e),e.addEventListener("astro:unmount",()=>B(null,e),{once:!0})};export{N as b,me as c,p as l,fe as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}