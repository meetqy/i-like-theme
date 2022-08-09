import{W as O,$ as E,D as T,a as j,X as I,o as m,c as k,O as f,H as o,Y as C,A as $,Q as y,Z as D,G as L,a0 as S,u as _,a1 as V,a2 as H,a3 as P,a4 as q,a5 as z,L as A,a6 as M,a7 as F}from"./entry-0effd9e2.mjs";import{S as G,a as Q}from"./swiper-slide-60886f4c.mjs";function U(s,a,d,l){const p=O();return s.params.createElements&&Object.keys(l).forEach(i=>{if(!d[i]&&d.auto===!0){let r=s.$el.children(`.${l[i]}`)[0];r||(r=p.createElement("div"),r.className=l[i],s.$el.append(r)),d[i]=r,a[i]=r}}),d}function W(s){let{swiper:a,extendParams:d,on:l,emit:p}=s;d({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function i(e){let t;return e&&(t=E(e),a.params.uniqueNavElements&&typeof e=="string"&&t.length>1&&a.$el.find(e).length===1&&(t=a.$el.find(e))),t}function r(e,t){const n=a.params.navigation;e&&e.length>0&&(e[t?"addClass":"removeClass"](n.disabledClass),e[0]&&e[0].tagName==="BUTTON"&&(e[0].disabled=t),a.params.watchOverflow&&a.enabled&&e[a.isLocked?"addClass":"removeClass"](n.lockClass))}function u(){if(a.params.loop)return;const{$nextEl:e,$prevEl:t}=a.navigation;r(t,a.isBeginning&&!a.params.rewind),r(e,a.isEnd&&!a.params.rewind)}function b(e){e.preventDefault(),!(a.isBeginning&&!a.params.loop&&!a.params.rewind)&&(a.slidePrev(),p("navigationPrev"))}function c(e){e.preventDefault(),!(a.isEnd&&!a.params.loop&&!a.params.rewind)&&(a.slideNext(),p("navigationNext"))}function v(){const e=a.params.navigation;if(a.params.navigation=U(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(e.nextEl||e.prevEl))return;const t=i(e.nextEl),n=i(e.prevEl);t&&t.length>0&&t.on("click",c),n&&n.length>0&&n.on("click",b),Object.assign(a.navigation,{$nextEl:t,nextEl:t&&t[0],$prevEl:n,prevEl:n&&n[0]}),a.enabled||(t&&t.addClass(e.lockClass),n&&n.addClass(e.lockClass))}function x(){const{$nextEl:e,$prevEl:t}=a.navigation;e&&e.length&&(e.off("click",c),e.removeClass(a.params.navigation.disabledClass)),t&&t.length&&(t.off("click",b),t.removeClass(a.params.navigation.disabledClass))}l("init",()=>{a.params.navigation.enabled===!1?N():(v(),u())}),l("toEdge fromEdge lock unlock",()=>{u()}),l("destroy",()=>{x()}),l("enable disable",()=>{const{$nextEl:e,$prevEl:t}=a.navigation;e&&e[a.enabled?"removeClass":"addClass"](a.params.navigation.lockClass),t&&t[a.enabled?"removeClass":"addClass"](a.params.navigation.lockClass)}),l("click",(e,t)=>{const{$nextEl:n,$prevEl:g}=a.navigation,h=t.target;if(a.params.navigation.hideOnClick&&!E(h).is(g)&&!E(h).is(n)){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===h||a.pagination.el.contains(h)))return;let w;n?w=n.hasClass(a.params.navigation.hiddenClass):g&&(w=g.hasClass(a.params.navigation.hiddenClass)),p(w===!0?"navigationShow":"navigationHide"),n&&n.toggleClass(a.params.navigation.hiddenClass),g&&g.toggleClass(a.params.navigation.hiddenClass)}});const B=()=>{a.$el.removeClass(a.params.navigation.navigationDisabledClass),v(),u()},N=()=>{a.$el.addClass(a.params.navigation.navigationDisabledClass),x()};Object.assign(a.navigation,{enable:B,disable:N,update:u,init:v,destroy:x})}const X=s=>(M("data-v-2c9768aa"),s=s(),F(),s),Y={class:"capitalize text-xl font-semibold tracking-widest absolute left-0 top-0 w-full h-8"},Z={class:"absolute right-0 top-0 flex justify-center items-center h-8"},J={key:0,class:"btn btn-xs normal-case btn-link pt-1 pr-0"},K=X(()=>o("div",{class:"btn-group"},[o("div",{class:"cu-swiper-button-prev"},[o("span",{class:"material-symbols-outlined !text-base text-center"}," arrow_back_ios_new ")]),o("div",{class:"cu-swiper-button-next"},[o("span",{class:"material-symbols-outlined !text-base"}," arrow_forward_ios ")])],-1)),R={class:"group overflow-hidden rounded-box"},aa={class:"w-full h-24 bottom-0 transition-colors duration-300 left-0 z-40 px-4 absolute bg-base-100/20 md:group-hover:bg-base-100/80"},ea={class:"text-lg mt-4 mb-2 font-medium capitalize"},ta=j({__name:"swiper",props:{data:null,title:null,breakpoints:null,cat:null,loop:{type:Boolean},allowTouchMove:{type:Boolean}},setup(s){const a=s,d=[W],l=i=>{setTimeout(()=>{i.navigation.init(),i.navigation.update()},100)},p=i=>{};return(i,r)=>{const u=A,b=I("lazy");return m(),k(_(Q),{"allow-touch-move":a.allowTouchMove,modules:d,navigation:{nextEl:".cu-swiper-button-next",prevEl:".cu-swiper-button-prev"},breakpoints:a.breakpoints,loop:a.loop,class:"!pt-16",onSwiper:l,onClick:p},{default:f(()=>[o("h3",Y,C(s.title),1),o("div",Z,[s.cat?(m(),$("div",J,[y(u,{to:s.cat.to},{default:f(()=>[D(C(s.cat.name),1)]),_:1},8,["to"])])):L("",!0),K]),(m(!0),$(z,null,S(a.data,c=>(m(),k(_(G),{key:c._id},{default:f(()=>[o("div",R,[y(u,{to:c._path},{default:f(()=>[V(o("img",{class:q(["aspect-square transition-transform cursor-zoom-in rounded-box border bg-base-200/20 md:group-hover:scale-125",["rounded-box w-full max-w-screen-md  aspect-video  object-contain border-base-300 "]])},null,512),[[b,_(H)(_(P)(c.previews[0],c._path,{format:"webp",w:960}))]]),o("div",aa,[o("p",ea,C(c.title),1),o("p",null,[(m(!0),$(z,null,S(c.tags.slice(0,3),v=>(m(),k(u,{key:v,to:`/tag/${v}`,class:"btn btn-xs mr-2 font-normal btn-primary relative z-50"},{default:f(()=>[D(C(v),1)]),_:2},1032,["to"]))),128))])])]),_:2},1032,["to"])])]),_:2},1024))),128))]),_:1},8,["allow-touch-move","navigation","breakpoints","loop"])}}});var ia=T(ta,[["__scopeId","data-v-2c9768aa"]]);export{ia as default};