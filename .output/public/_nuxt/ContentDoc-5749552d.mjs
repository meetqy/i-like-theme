import d from"./ContentRenderer-018b701a.mjs";import w from"./ContentQuery-a81897fe.mjs";import{u as h,w as q,a as g,b as C,e as D,f as _,h as b,i as s}from"./entry-ef17a434.mjs";import"./ContentRendererMarkdown-7a5f81c6.mjs";import"./asyncData-ced6eccc.mjs";const y=(c,e=g())=>{const f=h(c);q(()=>h(c),(o=f)=>{if(!e.path||!o)return;const t=Object.assign({},(o==null?void 0:o.head)||{});t.title=t.title||(o==null?void 0:o.title),t.meta=[...t.meta||[]];const u=(t==null?void 0:t.description)||(o==null?void 0:o.description);u&&t.meta.filter(p=>p.name==="description").length===0&&t.meta.push({name:"description",content:u});const r=(t==null?void 0:t.image)||(o==null?void 0:o.image);if(r&&t.meta.filter(p=>p.property==="og:image").length===0&&(typeof r=="string"&&t.meta.push({property:"og:image",content:t.image}),typeof r=="object")){const p=["src","secure_url","type","width","height","alt"];for(const n of p)n==="src"&&r.src?t.meta.push({property:"og:image",content:r[n]}):r[n]&&t.meta.push({property:`og:${n}`,content:r[n]})}C(()=>D(t))},{immediate:!0})},O=_({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:()=>g().path},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(c){const e=b(),{tag:f,excerpt:m,path:o,query:t,head:u}=c,r=Object.assign(t||{},{path:o,find:"one"}),p=(n,i)=>s("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:n,data:i},null,2));return s(w,r,{default:e!=null&&e.default?({data:n,refresh:i,isPartial:a})=>{var l;return u&&y(n),(l=e.default)==null?void 0:l.call(e,{doc:n,refresh:i,isPartial:a,excerpt:m,...this.$attrs})}:({data:n})=>(u&&y(n),s(d,{value:n,excerpt:m,tag:f,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):p("default",n)})),empty:n=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,n))||s("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":n=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,n))||s("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{O as default};
