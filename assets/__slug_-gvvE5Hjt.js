import{U as u,d as p,e as h,b as g}from"./VCard-sWOlWS7o.js";import{a7 as _,a9 as x,aa as r,ac as i,ad as a,o as t,ah as C,F as s,al as k,am as l,aj as d,I as V,ar as v,ab as w,ak as B,as as N}from"./index-QnU18LP6.js";import"./index-G8mkhOT6.js";const U=d("div",null,"Author",-1),b=_({__name:"UserCard",setup(m){const{gif:e}=u();return(n,o)=>{const c=x("router-link");return r(),i(g,{class:"mx-auto","max-width":"400"},{default:a(()=>[t(C,{class:"align-end text-white",height:"400",src:s(e).images.original.webp,cover:""},{default:a(()=>[t(p,null,{default:a(()=>[k(l(s(e).title),1)]),_:1})]),_:1},8,["src"]),t(h,null,{default:a(()=>[U,t(c,{class:"link",to:"/author/"+s(e).id},{default:a(()=>[d("div",null,l(s(e).slug),1)]),_:1},8,["to"])]),_:1})]),_:1})}}}),y={class:"d"},j=_({__name:"[_slug]",setup(m){const e=N(),{getGif:n}=u(),o=V(!1);return v(async()=>{await n(e.params._slug),o.value=!0}),(c,G)=>{const f=b;return r(),w("div",y,[o.value?(r(),i(f,{key:0})):B("",!0)])}}});export{j as default};
