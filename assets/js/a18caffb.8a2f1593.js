"use strict";(self.webpackChunktimekeeping_docs=self.webpackChunktimekeeping_docs||[]).push([[315],{8871:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=n(4848),r=n(8453);const i={sidebar_position:5},c="Run service to receive event from smartcontract",o={id:"golang-services",title:"Run service to receive event from smartcontract",description:"- cd to this project https://github.com/khalt00/Timekeeping-go",source:"@site/docs/golang-services.md",sourceDirName:".",slug:"/golang-services",permalink:"/docsaurus/docs/golang-services",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/golang-services.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Deploy smart contract to mumbai",permalink:"/docsaurus/docs/deploy-smartcontract"},next:{title:"API Endpoints",permalink:"/docsaurus/docs/api-endpoints"}},a={},d=[];function l(e){const s={a:"a",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"run-service-to-receive-event-from-smartcontract",children:"Run service to receive event from smartcontract"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["cd to this project ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"https://github.com/khalt00/Timekeeping-go",children:"https://github.com/khalt00/Timekeeping-go"})})]}),"\n",(0,t.jsx)(s.li,{children:"create a config.yaml file for docker compose use"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'    engine: "postgres"\r\n    host: "db"\r\n    port: "5432"\r\n    database: "attendance"\r\n    username: "postgres"\r\n    password: "postgres"\r\n    sslmode: "disable"\r\n\r\n    alchemy_url: "" #Polygon mumbai wws url\r\n    smart_contract_address: "" # deployed smart contract address\r\n\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Example",src:n(90).A+"",width:"813",height:"478"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Run this command ",(0,t.jsx)(s.strong,{children:"docker compose up -d"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Wait for it to run success. You can use this command to inspect it when it started ",(0,t.jsx)(s.strong,{children:"docker compose logs -f"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Please connect to some posgres client. Suggest using pgadmin on window or dbeaver on linux"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Connection",src:n(6271).A+"",width:"700",height:"544"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Go to our hardhat project, ",(0,t.jsx)(s.strong,{children:"copy"})," all abi"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"ABI",src:n(3086).A+"",width:"1304",height:"722"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Go to Remix IDE, create a new myabi.abi in contracts folder"}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Paste"})," in"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"RemixABI",src:n(9282).A+"",width:"1341",height:"979"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"While still select that abi file, go to Deploy & run transactions"}),"\n",(0,t.jsxs)(s.li,{children:["Copy your smartcontract address to ",(0,t.jsx)(s.strong,{children:"At address"})]}),"\n",(0,t.jsx)(s.li,{children:"It will look something like this"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"RemixConnect",src:n(6935).A+"",width:"1938",height:"901"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Add first record to our record"}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Note: You must be the owner of the contract, or else the owner have to add you to User so you can record attendance"})}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"First record",src:n(3941).A+"",width:"577",height:"592"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"After finish checkedin, check your backend and database."}),"\n",(0,t.jsx)(s.li,{children:"Backend will have log like this"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"BE logs",src:n(2206).A+"",width:"1456",height:"361"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Database will inserted the event"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"DB record",src:n(6012).A+"",width:"1290",height:"599"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Before proceeding to the next step, I apologize for the inconvenience."}),"\n",(0,t.jsx)(s.li,{children:"Run this sql in your sql query for testing purpose"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"INSERT INTO users (username, password_hash, is_admin) VALUES\r\n('admin', 'hashed_password_here', true),\r\n('user1', 'hashed_password_here', false);\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Login",src:n(3318).A+"",width:"1411",height:"488"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Get attendances by employee id"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Get attendances",src:n(4747).A+"",width:"1477",height:"918"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},9282:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/abi-remix-426ae53ac3bb0dd772f0da1f6d2f6aad.png"},3086:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/abi-91a0cf76bed18e5810a5cfe0b0814787.png"},6935:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/add-smartcontract-b62dcf1b4bcfa494c61e537f8d6bc320.png"},2206:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/backend-logs-9c059037d4214c315991d1248bf2bb3c.png"},6271:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/connect-db-a04b31da2fcb66e45813358e9831effa.png"},6012:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/db-record-b3b67ac2ba9c237611375123c38d14c7.png"},4747:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/get-attendances-5567f5b44ecce51688cdcdd611082e87.png"},90:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/golangenv1-91b86eb10d5571ed345a300f7bbc1498.png"},3318:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/login-example-3fad04bf67069e3744736b6c037d803e.png"},3941:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/record-a46bb9453d6f3bb5139e18718faa195a.png"},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var t=n(6540);const r={},i=t.createContext(r);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);