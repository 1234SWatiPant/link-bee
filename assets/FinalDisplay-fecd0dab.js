import{h as H,P,e as a,k as e,l as T,H as $,n as B,q as _,s as q}from"./index-a960c3dc.js";import{e as J}from"./errorHoney-cb967c7f.js";import{D as g}from"./dummyimage-28df07d0.js";function Y(){const h=H(q),b=P(h),[f,i]=a.useState(!0),[j,k]=a.useState(""),[y,S]=a.useState(""),[n,w]=a.useState([]),[r,C]=a.useState(""),[I,v]=a.useState(""),[l,F]=a.useState(g),[c,D]=a.useState(""),[N,E]=a.useState(""),[U,z]=a.useState(""),[d,M]=a.useState(""),[x,L]=a.useState(""),[u,O]=a.useState(window.innerWidth),[o,R]=a.useState(""),m=400,p=window.location.pathname.split("/"),W=p[p.length-1];a.useEffect(()=>{(async()=>{const G=B(b,"users",W),s=await _(G);s.exists()?(S(s.data().bio?s.data().bio:""),k(s.data().profile?s.data().profile:""),w(s.data().arrayOfObject?s.data().arrayOfObject:[]),C(s.data().userID?s.data().userID:""),i(!1),F(s.data().imageURL||g),D(s.data().gradient?s.data().gradient:""),E(s.data().cardBgColor?s.data().cardBgColor:""),z(s.data().cardFontColor?s.data().cardFontColor:""),M(s.data().fontFamily?s.data().fontFamily:""),L(s.data().backIMG?s.data().backIMG:""),R(s.data().bioandprofilecolor?s.data().bioandprofilecolor:"")):(i(!1),v("Invalid userID. User not found."))})()},[]),a.useEffect(()=>{const t=()=>{O(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const A=()=>{window.location.href="/signup"};return e.jsx(e.Fragment,{children:f?e.jsx("main",{className:"align",children:e.jsx("div",{className:"loadingWheel"})}):I?e.jsx("div",{className:"errorContainer",children:e.jsxs("span",{className:"align",children:[e.jsx("img",{style:{marginTop:"8rem"},src:J,alt:""}),e.jsx("br",{}),e.jsx("span",{children:e.jsx("b",{children:"Page doesn't exist. Sign up for this username."})}),e.jsx("br",{}),e.jsx("button",{onClick:A,children:"Sign up"}),e.jsx("br",{})]})}):e.jsxs(e.Fragment,{children:[e.jsx("nav",{style:{background:c,fontFamily:d},className:"FinalDisplayNav",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("img",{src:l,alt:""})}),e.jsxs("li",{children:["@",r]}),e.jsx("li",{onClick:()=>{window.location.href="http://linkbee.online/"},children:e.jsx("button",{children:"link bee"})})]})}),e.jsxs("main",{className:"FinalDisplay_main",style:{fontFamily:d,position:"static",overflow:"auto",backgroundImage:u>=m?c:`url(${x})`,backgroundImage:`url(${x})`,backgroundAttachment:"fixed",backgroundSize:u>=m?"cover":"auto 740px"},children:[e.jsx(T,{style:{zIndex:99999999}}),e.jsx($,{children:e.jsxs("title",{children:["link bee ~ @",r]})}),e.jsx("img",{src:l,alt:""}),e.jsx("br",{}),e.jsx("span",{children:e.jsxs("b",{style:{color:o},children:[" @",r," "]})}),e.jsx("br",{}),e.jsx("span",{style:{marginTop:"-10px",color:o},children:y}),e.jsx("br",{})," ",e.jsx("br",{}),e.jsx("span",{style:{color:o},children:j}),n==null?void 0:n.map(t=>e.jsxs("div",{className:"finalCard slug_finalCard",style:{color:U,background:N},children:[e.jsx("i",{style:{color:`${t.color}`,border:".1px solid black"},className:t.class}),e.jsx("span",{children:t.name}),e.jsx("a",{href:t.link,children:e.jsx("i",{style:{border:".1px solid black"},className:"fa-solid fa-diamond-turn-right"})})]},t.name)),e.jsx("br",{})]})]})})}export{Y as default};
