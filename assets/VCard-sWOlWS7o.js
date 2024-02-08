import{g as m,av as ee,aw as ae,a as g,ax as te,I as ne,p as V,Q as o,b as A,d as p,H as le,e as D,f as L,h as R,u as w,k as z,J as se,n as b,o as n,ah as N,$ as h,l as ie,ae as _,m as de,R as ce,c as re,S as ue,T as ve,U as oe,i as me,V as ge,j as ye,W as fe,X as ke,Y as be,w as B,Z as Ce,_ as he,ay as Ie}from"./index-QnU18LP6.js";import{m as G,u as F,g as $,V as I,a as Ve,R as Ae,b as Se}from"./index-G8mkhOT6.js";function S(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return m()({name:t??ee(ae(e.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...g()},setup(a,s){let{slots:i}=s;return()=>{var c;return te(a.tag,{class:[e,a.class],style:a.style},(c=i.default)==null?void 0:c.call(i))}}})}const C=ne([]),ze=()=>({getGif:async l=>{const t=`https://api.giphy.com/v1/gifs/${l}?&api_key=3mB1le5R8wQa1Ca0KSeF65sGslXfTJKA`;try{const s=await(await fetch(t)).json();C.value=[],C.value=s==null?void 0:s.data}catch(a){console.log(a)}},gif:C}),Pe=V({start:Boolean,end:Boolean,icon:o,image:String,text:String,...g(),...A(),...p(),...le(),...D(),...L(),...G({variant:"flat"})},"VAvatar"),T=m()({name:"VAvatar",props:Pe(),setup(e,l){let{slots:t}=l;const{themeClasses:a}=R(e),{colorClasses:s,colorStyles:i,variantClasses:c}=F(e),{densityClasses:u}=w(e),{roundedClasses:v}=z(e),{sizeClasses:r,sizeStyles:d}=se(e);return b(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,s.value,u.value,v.value,r.value,c.value,e.class],style:[i.value,d.value,e.style]},{default:()=>{var y;return[e.image?n(N,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(h,{key:"icon",icon:e.icon},null):((y=t.default)==null?void 0:y.call(t))??e.text,$(!1,"v-avatar")]}})),{}}}),xe=m()({name:"VCardActions",props:g(),setup(e,l){let{slots:t}=l;return ie({VBtn:{slim:!0,variant:"text"}}),b(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),_e=S("v-card-subtitle"),Be=S("v-card-title"),Te=V({appendAvatar:String,appendIcon:o,prependAvatar:String,prependIcon:o,subtitle:[String,Number],title:[String,Number],...g(),...A()},"VCardItem"),pe=m()({name:"VCardItem",props:Te(),setup(e,l){let{slots:t}=l;return b(()=>{var r;const a=!!(e.prependAvatar||e.prependIcon),s=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),c=!!(i||t.append),u=!!(e.title!=null||t.title),v=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[s&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(I,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(_,null,[e.prependAvatar&&n(T,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(h,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[u&&n(Be,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),v&&n(_e,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(r=t.default)==null?void 0:r.call(t)]),c&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(I,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(_,null,[e.appendIcon&&n(h,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(T,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),De=S("v-card-text"),Le=V({appendAvatar:String,appendIcon:o,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:o,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...de(),...g(),...A(),...ce(),...re(),...ue(),...ve(),...oe(),...p(),...Ve(),...D(),...L(),...G({variant:"elevated"})},"VCard"),Ne=m()({name:"VCard",directives:{Ripple:Ae},props:Le(),setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:s}=R(e),{borderClasses:i}=me(e),{colorClasses:c,colorStyles:u,variantClasses:v}=F(e),{densityClasses:r}=w(e),{dimensionStyles:d}=ge(e),{elevationClasses:y}=ye(e),{loaderClasses:j}=fe(e),{locationStyles:U}=ke(e),{positionClasses:E}=be(e),{roundedClasses:H}=z(e),f=Se(e,t),J=B(()=>e.link!==!1&&f.isLink.value),k=B(()=>!e.disabled&&e.link!==!1&&(e.link||f.isClickable.value));return b(()=>{const K=J.value?"a":e.tag,M=!!(a.title||e.title!=null),O=!!(a.subtitle||e.subtitle!=null),Q=M||O,X=!!(a.append||e.appendAvatar||e.appendIcon),W=!!(a.prepend||e.prependAvatar||e.prependIcon),Y=!!(a.image||e.image),Z=Q||W||X,q=!!(a.text||e.text!=null);return Ce(n(K,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":k.value},s.value,i.value,c.value,r.value,y.value,j.value,E.value,H.value,v.value,e.class],style:[u.value,d.value,U.value,e.style],href:f.href.value,onClick:k.value&&f.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var P;return[Y&&n("div",{key:"image",class:"v-card__image"},[a.image?n(I,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(N,{key:"image-img",cover:!0,src:e.image},null)]),n(Ie,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),Z&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),q&&n(De,{key:"text"},{default:()=>{var x;return[((x=a.text)==null?void 0:x.call(a))??e.text]}}),(P=a.default)==null?void 0:P.call(a),a.actions&&n(xe,null,{default:a.actions}),$(k.value,"v-card")]}}),[[he("ripple"),k.value&&e.ripple]])}),{}}});export{ze as U,T as V,xe as a,Ne as b,S as c,Be as d,De as e};
