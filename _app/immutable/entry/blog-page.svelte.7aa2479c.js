import{S as D,i as I,s as J,k as d,q as g,a as x,l as p,m as v,r as b,h as u,c as A,b as E,C as m,D as q,J as U,n as B,u as C}from"../chunks/index.27c03b23.js";import{b as H}from"../chunks/paths.b677d8f9.js";function L(o,a,h){const s=o.slice();return s[1]=a[h],s}function S(o){let a,h,s,n=o[1].meta.title+"",r,l,e,i=o[1].meta.date+"",t,c;return{c(){a=d("li"),h=d("h2"),s=d("a"),r=g(n),e=g(`
      Published `),t=g(i),c=x(),this.h()},l(_){a=p(_,"LI",{});var f=v(a);h=p(f,"H2",{});var k=v(h);s=p(k,"A",{href:!0});var P=v(s);r=b(P,n),P.forEach(u),k.forEach(u),e=b(f,`
      Published `),t=b(f,i),c=A(f),f.forEach(u),this.h()},h(){B(s,"href",l=""+(H+o[1].path))},m(_,f){E(_,a,f),m(a,h),m(h,s),m(s,r),m(a,e),m(a,t),m(a,c)},p(_,f){f&1&&n!==(n=_[1].meta.title+"")&&C(r,n),f&1&&l!==(l=""+(H+_[1].path))&&B(s,"href",l),f&1&&i!==(i=_[1].meta.date+"")&&C(t,i)},d(_){_&&u(a)}}}function j(o){let a,h,s,n,r=o[0].posts,l=[];for(let e=0;e<r.length;e+=1)l[e]=S(L(o,r,e));return{c(){a=d("h1"),h=g("Blog"),s=x(),n=d("ul");for(let e=0;e<l.length;e+=1)l[e].c()},l(e){a=p(e,"H1",{});var i=v(a);h=b(i,"Blog"),i.forEach(u),s=A(e),n=p(e,"UL",{});var t=v(n);for(let c=0;c<l.length;c+=1)l[c].l(t);t.forEach(u)},m(e,i){E(e,a,i),m(a,h),E(e,s,i),E(e,n,i);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(n,null)},p(e,[i]){if(i&1){r=e[0].posts;let t;for(t=0;t<r.length;t+=1){const c=L(e,r,t);l[t]?l[t].p(c,i):(l[t]=S(c),l[t].c(),l[t].m(n,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=r.length}},i:q,o:q,d(e){e&&u(a),e&&u(s),e&&u(n),U(l,e)}}}function w(o,a,h){let{data:s}=a;return o.$$set=n=>{"data"in n&&h(0,s=n.data)},[s]}class F extends D{constructor(a){super(),I(this,a,w,j,J,{data:0})}}export{F as default};
