import _ from"./swiper-3b8881fb.mjs";import{Y as n,o as m,c as u,L as g,Z as c,q as x,O as B,S as a,M as o,u as i}from"./entry-ef17a434.mjs";const V={class:"pb-12"},f={class:"w-full lg:px-12 px-6 mt-12"},P={class:"w-full lg:px-12 px-6 mt-12"},h={class:"w-full lg:px-12 px-6 mt-12"},C={class:"w-full lg:px-12 px-6 mt-12"},I={__name:"index",async setup(b){let e,t;const l=([e,t]=n(()=>c("blog",{pageIndex:1,pageSize:12})),e=await e,t(),e),p=([e,t]=n(()=>c("card",{pageIndex:1,pageSize:12})),e=await e,t(),e),r=([e,t]=n(()=>c("page",{pageIndex:1,pageSize:12})),e=await e,t(),e),d=([e,t]=n(()=>x("introduce").where({recommend:!0}).limit(8).find()),e=await e,t(),e);return(k,y)=>{const s=_,w=B;return m(),u(w,null,{default:g(()=>[a("div",V,[a("section",f,[o(s,{title:"recommend",data:i(d),loop:!0,breakpoints:{1024:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:1,spaceBetween:40},1536:{slidesPerView:2,spaceBetween:40}}},null,8,["data"])]),a("section",P,[o(s,{title:"Blog",data:i(l),cat:{name:"see all",to:"/tag/blog"},breakpoints:{1024:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:1,spaceBetween:40},1536:{slidesPerView:4,spaceBetween:40}}},null,8,["data"])]),a("section",h,[o(s,{title:"fashion",data:i(p),"content-on-image":!0,"image-scale":!0,cat:{name:"see all",to:"/tag/fashion"},breakpoints:{1024:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:2,spaceBetween:40},1536:{slidesPerView:4,spaceBetween:40}}},null,8,["data"])]),a("section",C,[o(s,{title:"page",data:i(r),"image-circle":!0,cat:{name:"see all",to:"/tag/page"},breakpoints:{1024:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:2,spaceBetween:40},1536:{slidesPerView:4,spaceBetween:40}}},null,8,["data"])])])]),_:1})}}};export{I as default};
