var P=Object.defineProperty;var $=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var O=(n,t,s)=>t in n?P(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,g=(n,t)=>{for(var s in t||(t={}))A.call(t,s)&&O(n,s,t[s]);if($)for(var s of $(t))D.call(t,s)&&O(n,s,t[s]);return n};import{j as b,N as v,u as W,r as m,a as j,L as T,b as G,H as M,S as _,R,c as F,d as U}from"./vendor.913d3b14.js";const K=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const r of c)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(c){const r={};return c.integrity&&(r.integrity=c.integrity),c.referrerpolicy&&(r.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?r.credentials="include":c.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(c){if(c.ep)return;c.ep=!0;const r=s(c);fetch(c.href,r)}};K();const e=b.exports.jsx,l=b.exports.jsxs,k=b.exports.Fragment,H=()=>e("header",{className:"header",children:e("div",{className:"wrapper",children:l("div",{className:"header-container",children:[e("div",{className:"brand",children:l(v,{to:"/",children:[e("span",{role:"img","aria-label":"football",children:"\u26BD\uFE0F"})," ","League App"]})}),e("nav",{children:l("ul",{className:"unstyled",children:[e("li",{children:e(v,{activeClassName:"active",to:"/table",children:"table"})}),e("li",{children:e(v,{activeClassName:"active",to:"/weeks",children:"weeks"})})]})})]})})}),q=()=>{const{pathname:n}=W();return m.exports.useEffect(()=>{window.scrollTo(0,0)},[n]),null},y=()=>e("div",{className:"wrapper",children:"Loading..."}),x="https://football-server.eliamartani.now.sh/api",N=n=>j.get(`${x}${n}`).then(({data:t})=>t).catch(t=>(console.error("\u{1F4A3}",t),null)),z="/teams/",B=({table:n})=>{const t=n.map((s,o)=>{const c=`${x}/logos/${s.teamId}`,r=`${z}${s.teamId}`,a=o+1;return l("tr",{children:[e("td",{children:a}),e("td",{children:l(T,{to:r,children:[e("img",{src:c,alt:s.teamName,loading:"lazy"}),e("span",{children:s.teamName})]})}),e("td",{children:e("strong",{children:s.points})}),e("td",{children:s.won}),e("td",{children:s.drawn}),e("td",{children:s.lost}),e("td",{children:s.goals}),e("td",{children:s.goalsConceded}),e("td",{children:s.goalsDifference})]},s.teamId)});return e(k,{children:t})};const V=({table:n})=>l("table",{className:"table-result",children:[e("thead",{children:l("tr",{children:[e("th",{title:"Position",children:e("span",{children:"Position"})}),e("th",{title:"Team",children:"Team"}),l("th",{title:"Points",children:["P",e("span",{children:"oints"})]}),l("th",{title:"Won",children:["W",e("span",{children:"on"})]}),l("th",{title:"Drawn",children:["D",e("span",{children:"rawn"})]}),l("th",{title:"Lost",children:["L",e("span",{children:"ost"})]}),e("th",{title:"Goals For",children:"GF"}),e("th",{title:"Goals Against",children:"GA"}),e("th",{title:"Goals Difference",children:"GD"})]})}),e("tbody",{children:e(B,{table:n})})]}),S=(n,t)=>{const s=t?n.indexOf(t):-1;return[s,s===0?1:0]},E=({teams:n,teamIds:t,score:s})=>{const[o,c]=n,[r,a]=t,[i,d]=s,h={team:o,teamId:r,score:i,winner:i>d},u={team:c,teamId:a,score:d,winner:d>i};return[h,u]},L=(n="")=>{const t=Number(n);return isNaN(t)?0:t-1},J=({id:n,results:t})=>{const s=parseInt(n!=null?n:"",10),o={matches:0,points:0,won:0,drawn:0,lost:0,goals:0,goalsConceded:0,goalsDifference:0};return t==null||t.forEach(c=>{const[r,a]=S(c.teamIds,s),i=E(c),d=i[r],h=i[a],u=I(d,h);for(const f in u)o[f]+=u[f]}),o},Q=(n,t)=>{const s={};for(const o in n)s[n[o]]=[];for(const o of t)for(const c of o){const r=E(c);for(const a of c.teams){const[i,d]=S(c.teams,a),h=r[i],u=r[d];s[a].push({team:h,opponent:u})}}return s},X=n=>{var s,o;const t=[];for(const c in n){const r=n[c],a={drawn:0,goals:0,goalsConceded:0,goalsDifference:0,lost:0,matches:0,points:0,teamId:(o=(s=r[0])==null?void 0:s.team)==null?void 0:o.teamId,teamName:c,won:0};for(const i of r){const d=I(i.team,i.opponent);for(const h in d)a[h]+=d[h]}t.push(a)}return t},Y=(n,t)=>{const s=Q(n,t);return X(s).sort((r,a)=>{const i=a.points-r.points,d=a.goalsDifference-r.goalsDifference,h=a.goals-r.goals;return i||d||h})},I=(n,t)=>{const s=n.score>t.score?1:0,o=n.score===t.score?1:0,c=n.score<t.score?1:0,r=s*3||o;return{matches:1,points:r,won:s,drawn:o,lost:c,goals:n.score,goalsConceded:t.score,goalsDifference:n.score-t.score}},Z="/teams",ee="/weeks",te=()=>{const[n,t]=m.exports.useState([]);return m.exports.useEffect(()=>{const s=[N(Z),N(ee)];Promise.all(s).then(([o,c])=>{const r=Y(o,c);t(r)})},[]),n.length?e("div",{className:"table",children:l("div",{className:"wrapper",children:[e("h1",{children:"Ranking"}),e(V,{table:n})]})}):e(y,{})};const ne="/teams/",se=({teamId:n,team:t,score:s,winner:o})=>{const c=`${x}/logos/${n}`,r=`${ne}${n}`;return l("div",{className:`result-team ${o?"winner":""}`,children:[e("div",{className:"result-team-image",children:e(T,{to:r,children:e("img",{src:c,alt:t,loading:"lazy"})})}),e("div",{className:"result-team-name",children:e(T,{to:r,children:t})}),e("div",{className:"result-team-score",children:s})]},n)};const oe=n=>{const s=E(n).map(o=>e(se,g({},o),o.teamId));return e("div",{className:"result",children:s})},C=({matches:n})=>{if(!n.length)return e("p",{children:"No results found"});const t=n.map((s,o)=>e(oe,g({},s),o));return e(k,{children:t})},ce={matches:"Matches",points:"Points",won:"Wins",drawn:"Draws",lost:"Losses",goals:"Goals",goalsConceded:"Goals Conceded"},re=({rows:n})=>{const t=Object.entries(ce).map(([s,o])=>l("tr",{children:[e("th",{children:o}),e("td",{children:n==null?void 0:n[s]})]},s));return e(k,{children:t})};const ae=({rows:n})=>e("table",{className:"table-object",children:e("tbody",{children:e(re,{rows:n})})});const le="/teams/",ie=({match:n})=>{var f;const[t,s]=m.exports.useState(),[o,c]=m.exports.useState(),[r,a]=m.exports.useState(!1),i=()=>a(!r),d=(f=t==null?void 0:t.results)!=null?f:[];if(m.exports.useEffect(()=>{const p=n.params.index;N(`${le}${p}`).then(w=>{s(w),a(!1)})},[n.params.index]),m.exports.useEffect(()=>{if(!t)return;const p=J(t);c(p)},[t]),!t)return e(y,{});const h=`${x}/logos/${t==null?void 0:t.id}`,u=`${r?"Close":"Open"} team stats`;return e("div",{className:"team",children:e("div",{className:"wrapper",children:l("div",{className:"container",children:[l("aside",{children:[e("img",{src:h,alt:t==null?void 0:t.name,loading:"lazy"}),e("h1",{children:t==null?void 0:t.name}),e("button",{className:"toggle-info",onClick:i,children:u}),e("div",{className:`team-info ${r?"collapsed":""}`,children:e(ae,{rows:o})})]}),l("main",{children:[e("h2",{children:"Results"}),e(C,{matches:d})]})]})})})},de="/weeks/",he=({weeks:n})=>{const t=n.map(s=>e("li",{children:e(v,{activeClassName:"active",to:`${de}${s}`,children:s})},s));return e("ul",{className:"unstyled",children:t})},me=({chosenWeek:n,handleChange:t,weeks:s})=>{const o=s.map(c=>e("option",{value:c,children:c},c));return e("select",{defaultValue:n,onChange:t,children:o})};const ue=n=>l("div",{className:"week-links",children:[e(he,g({},n)),e(me,g({},n))]}),pe="/weeks",fe="/weeks/",ge=({match:n})=>{var u,f;const t=G(),s=L(n.params.index),[o,c]=m.exports.useState(),[r,a]=m.exports.useState(s),i=p=>{t.push(`${fe}${p.target.value}`)};m.exports.useEffect(()=>{N(pe).then(p=>{p&&c(p)})},[]),m.exports.useEffect(()=>{const p=L(n.params.index);a(p)},[n.params.index]);const d={chosenWeek:r+1,weeks:Array((u=o==null?void 0:o.length)!=null?u:0).fill(0).map((p,w)=>w+1),handleChange:i},h=(f=o==null?void 0:o[r])!=null?f:[];return(o==null?void 0:o.length)?e("div",{className:"weeks",children:e("div",{className:"wrapper",children:l("div",{className:"container",children:[l("aside",{children:[e("h1",{children:"Weeks"}),e(ue,g({},d))]}),l("main",{children:[l("h1",{children:["Results for week #",r+1]}),e(C,{matches:h})]})]})})}):e(y,{})},ve=()=>l(M,{children:[e(q,{}),e(H,{}),l(_,{children:[e(R,{path:"/weeks/:index",component:ge}),e(R,{path:"/teams/:index",component:ie}),e(R,{path:"/table",component:te}),e(F,{from:"/",to:"/weeks/1"})]})]});U.render(e(ve,{}),document.querySelector("#root"));
