import{m as b,p as C,r as w,s as P,v as g,w as O,x as k,u as A}from"./entry-0effd9e2.mjs";const z=()=>null;function R(...r){var p,y,h,v,m,D,_;const f=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(f);let[t,l,e={}]=r;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=(p=e.server)!=null?p:!0,e.default=(y=e.default)!=null?y:z,e.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),e.lazy=(v=(h=e.lazy)!=null?h:e.defer)!=null?v:!1,e.initialCache=(m=e.initialCache)!=null?m:!0;const a=b(),i=k();if(i&&!i._nuxtOnBeforeMountCbs){const o=i._nuxtOnBeforeMountCbs=[];i&&(C(()=>{o.forEach(s=>{s()}),o.splice(0,o.length)}),w(()=>o.splice(0,o.length)))}const u=()=>e.initialCache&&a.payload.data[t]!==void 0,n={data:P((D=a.payload.data[t])!=null?D:e.default()),pending:g(!u()),error:g((_=a.payload._errors[t])!=null?_:null)};n.refresh=(o={})=>a._asyncDataPromises[t]?a._asyncDataPromises[t]:o._initial&&u()?a.payload.data[t]:(n.pending.value=!0,a._asyncDataPromises[t]=Promise.resolve(l(a)).then(s=>{e.transform&&(s=e.transform(s)),e.pick&&(s=B(s,e.pick)),n.data.value=s,n.error.value=null}).catch(s=>{n.error.value=s,n.data.value=A(e.default())}).finally(()=>{n.pending.value=!1,a.payload.data[t]=n.data.value,n.error.value&&(a.payload._errors[t]=!0),delete a._asyncDataPromises[t]}),a._asyncDataPromises[t]);const c=()=>n.refresh({_initial:!0}),x=e.server!==!1&&a.payload.serverRendered;{x&&a.isHydrating&&t in a.payload.data?n.pending.value=!1:i&&a.payload.serverRendered&&(a.isHydrating||e.lazy)?i._nuxtOnBeforeMountCbs.push(c):c(),e.watch&&O(e.watch,()=>n.refresh());const o=a.hook("app:data:refresh",s=>{if(!s||s.includes(t))return n.refresh()});i&&w(o)}const d=Promise.resolve(a._asyncDataPromises[t]).then(()=>n);return Object.assign(d,n),d}function E(r){const f=r?Array.isArray(r)?r:[r]:void 0;return b().callHook("app:data:refresh",f)}function B(r,f){const t={};for(const l of f)t[l]=r[l];return t}export{E as r,R as u};