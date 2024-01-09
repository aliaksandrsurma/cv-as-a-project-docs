"use strict";(self.webpackChunkcv_as_a_project_documentation=self.webpackChunkcv_as_a_project_documentation||[]).push([[1654],{4028:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var a=s(5893),n=s(1151);const c={},r="",i={id:"personal-kb/cheat-sheets/architecture-practice/system design/cache-use-cases-may-go-wrong",title:"cache-use-cases-may-go-wrong",description:"Diagram",source:"@site/docs/personal-kb/cheat-sheets/architecture-practice/system design/cache-use-cases-may-go-wrong.md",sourceDirName:"personal-kb/cheat-sheets/architecture-practice/system design",slug:"/personal-kb/cheat-sheets/architecture-practice/system design/cache-use-cases-may-go-wrong",permalink:"/docs/personal-kb/cheat-sheets/architecture-practice/system design/cache-use-cases-may-go-wrong",draft:!1,unlisted:!1,editUrl:"https://github.com/aliaksandrsurma/cv-as-a-project-docs/edit/main/docs/personal-kb/cheat-sheets/architecture-practice/system design/cache-use-cases-may-go-wrong.md",tags:[],version:"current",frontMatter:{},sidebar:"personalSidebar",previous:{title:"system-design-cheat-sheet",permalink:"/docs/personal-kb/cheat-sheets/architecture-practice/system design/system-design-cheat-sheet"},next:{title:"how-to-improve-API-performance",permalink:"/docs/personal-kb/cheat-sheets/architecture-practice/system design/how-to-improve-API-performance"}},o={},h=[];function d(e){const t={h1:"h1",img:"img",li:"li",ol:"ol",p:"p",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:""}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Diagram",src:s(8664).Z+"",width:"619",height:"720"})}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Thunder herd problem\nThis happens when a large number of keys in the cache expire at the same time. Then the query requests directly hit the database, which overloads the database."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"There are two ways to mitigate this issue: one is to avoid setting the same expiry time for the keys, adding a random number in the configuration; the other is to allow only the core business data to hit the database and prevent non-core data to access the database until the cache is back up."}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsx)(t.li,{children:"Cache penetration\nThis happens when the key doesn\u2019t exist in the cache or the database. The application cannot retrieve relevant data from the database to update the cache. This problem creates a lot of pressure on both the cache and the database."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"To solve this, there are two suggestions. One is to cache a null value for non-existent keys, avoiding hitting the database. The other is to use a bloom filter to check the key existence first, and if the key doesn\u2019t exist, we can avoid hitting the database."}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsx)(t.li,{children:"Cache breakdown\nThis is similar to the thunder herd problem. It happens when a hot key expires. A large number of requests hit the database."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Since the hot keys take up 80% of the queries, we do not set an expiration time for them."}),"\n",(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsx)(t.li,{children:"Cache crash\nThis happens when the cache is down and all the requests go to the database."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"There are two ways to solve this problem. One is to set up a circuit breaker, and when the cache is down, the application services cannot visit the cache or the database. The other is to set up a cluster for the cache to improve cache availability."})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8664:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/cache-use-cases-may-go-wrong-1cd9525208eb780baa22721c4276e69e.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>r});var a=s(7294);const n={},c=a.createContext(n);function r(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);