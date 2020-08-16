(this["webpackJsonphomestuck-bookclub-guesses"]=this["webpackJsonphomestuck-bookclub-guesses"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),s=(a(93),a(36)),l=a(31),i=a(12),u=a(151),d=a(152),m=a(153),p=a(154),g=a(146),f=Object(g.a)((function(e){return{banner:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},space:{flex:"1 1 auto"},icon:{height:"25px"}}})),E=a(149),h=a(168),b=a(164),w=a(167),v=Object(g.a)((function(e){return{root:{padding:"0 10px",width:"max-content"},item:{},select:{minWidth:"200px",width:"max-content","&:before":{borderColor:e.palette.secondary.contrastText},"&:after":{borderColor:e.palette.secondary.contrastText}},icon:{fill:e.palette.secondary.contrastText},label:{color:e.palette.secondary.contrastText,marginLeft:"10px"}}}));function k(e){var t,a=v();return r.a.createElement(E.a,{className:a.root,disabled:void 0!==e.selected},r.a.createElement(h.a,{className:a.label,htmlFor:e.id},"User"),r.a.createElement(b.a,{inputProps:{name:"user",id:e.id,classes:{icon:a.icon}},value:null===(t=e.selected)||void 0===t?void 0:t.name,onChange:function(t){return e.setSelected(e.options.filter((function(e){return e.name===t.target.value}))[0])},className:a.select,style:{color:void 0!==e.selected?e.selected.color:"black"}},e.options.map((function(e){return r.a.createElement(w.a,{className:a.item,style:{color:e.color},value:e.name},e.name)}))))}var y=[{name:"genialConcusser",color:"#b22222"},{name:"tempestuousGeometrist",color:"#f2a400"},{name:"exceptionallyBaptised",color:"#ffd633"},{name:"catgirlAfficionado",color:"#416600"},{name:"annoyinglyAnxious",color:"#008141"},{name:"crabbyGastropod",color:"#00997a"},{name:"asinineCalculator",color:"#00d5f2"},{name:"trollCynic",color:"#0715cd"},{name:"tiredAstronomer",color:"#ff6ff2"}];function x(e){var t=f();return r.a.createElement("header",null,r.a.createElement(u.a,{position:"static"},r.a.createElement(d.a,{className:t.banner,variant:"dense"},r.a.createElement(l.b,{to:"/"},r.a.createElement(m.a,null,r.a.createElement("img",{src:"/sburb.png",className:t.icon}))),r.a.createElement(p.a,{variant:"h6",noWrap:!0},"Homestuck Book Club Guesser"),r.a.createElement("div",{className:t.space}),r.a.createElement(k,{id:"people",options:y,selected:e.user,setSelected:function(t){return e.setUser(t)}}))))}var O=a(155),j=a(156),_=a(157),S=Object(g.a)((function(e){return{root:{display:"flex",marginBottom:"15px"},picture:{width:"150px",height:"150px"},title:{fontFamily:'"Courier New", monospace',fontWeight:"bold"},subtitle:{fontFamily:'"Courier New", monospace',fontWeight:"bold"},content:{flex:"1 auto"},choose:{padding:0,width:"150px",height:"150px"},arrow:{margin:"63px 63px"},link:{textDecoration:"none"}}}));function N(e){var t=S();return r.a.createElement(O.a,{className:t.root},r.a.createElement(j.a,{className:t.picture,component:"img",src:e.image,title:e.title}),r.a.createElement(_.a,{className:t.content},r.a.createElement(p.a,{className:t.title,variant:"h5"},e.title),r.a.createElement(p.a,{className:t.subtitle,variant:"subtitle1",color:"textSecondary"},"".concat(e.firstPage," \u2013 ").concat(e.lastPage))),e.showButton?r.a.createElement(l.b,{className:t.link,to:"/week/".concat(e.id)},r.a.createElement(m.a,{className:t.choose},r.a.createElement(p.a,{variant:"h6"},"==>"))):r.a.createElement(r.a.Fragment,null))}var T=a(20),C=a(78),I=a.n(C).a.create({baseURL:"https://hsbcguesserapi.azurewebsites.net/"}),W={type:"GET_WEEKS_START"},P={type:"GET_WEEKS_ERROR"};function B(){return function(e){return e(W),I.get("/week").then((function(t){return e({type:"GET_WEEKS_SUCCESS",data:t.data})})).catch((function(t){return e(P)}))}}var G={weeks:[],status:"unloaded"},R=function(e){return e.week};function F(){var e=Object(T.c)(R),t=Object(T.b)(),a=[];switch("unloaded"===e.status&&B()(t),e.status){case"loaded":e.weeks.forEach((function(e){a.push(r.a.createElement(N,{id:e.id,title:e.name,firstPage:e.firstPage,lastPage:e.lastPage,image:e.pictureSrc,showButton:!0}))}))}return r.a.createElement(r.a.Fragment,null,a)}var A=a(162),K=a(163),U=a(80),M=Object(U.a)({palette:{primary:{main:"#efefef",contrastText:"black"},secondary:{main:"#969696",light:"#f2f2f2",contrastText:"white"}},typography:{fontFamily:'"Courier New", courier, monospace',body1:{fontWeight:"bold"},h6:{fontWeight:"bold"}}}),z=a(158),D=a(160),J=a(60),L=a(165),H=a(161),$=a(45),q={},Q=function(e){return e.pages};function V(e){return function(t){return t(function(e){return{type:"get_pages_start",weekId:e}}(e)),I.get("/week/".concat(e,"/page")).then((function(a){return t(function(e,t){return{type:"get_pages_success",weekId:e,data:t}}(e,a.data))})).catch((function(a){return t(function(e){return{type:"get_pages_error",weekId:e}}(e))}))}}var X=a(159),Y=a(166),Z=Object(g.a)((function(e){return{pageCard:{width:"220px",height:"280px"},pageButton:{width:"220px",height:"280px",fontSize:"3em"}}}));function ee(e){var t=Z();return r.a.createElement(O.a,{className:t.pageCard},r.a.createElement(m.a,{className:t.pageButton,onClick:e.onAdd},"+"))}function te(e){var t=Z();return r.a.createElement(O.a,{className:t.pageCard},r.a.createElement(p.a,null,e.pageNumber),r.a.createElement(p.a,null,e.description))}function ae(e){var t=Object(T.c)(Q),a=Object(n.useState)(!1),c=Object(s.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(t[e.weekId]),u=Object(s.a)(i,2),d=u[0],m=u[1],p=Object(T.b)();Object(n.useEffect)((function(){m(t[e.weekId])}),[t]);var g=[];if(void 0===d)V(e.weekId)(p);else switch(d.status){case"unloaded":V(e.weekId)(p),g.push(r.a.createElement(z.a,null));break;case"loading":g.push(r.a.createElement(z.a,null));break;case"loaded":d.pages.forEach((function(e){g.push(r.a.createElement(te,e))})),g.push(r.a.createElement(ee,{weekId:e.weekId,onAdd:function(){return l(!0)}}));break;case"errored":g.push(r.a.createElement("span",null,"Error"))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{container:!0,spacing:3,justify:"space-evenly"},g),r.a.createElement(Y.a,{open:o,onClose:function(){return l(!1)}},r.a.createElement("span",null,"hello world")))}function ne(e){var t=Object(n.useState)("pages"),a=Object(s.a)(t,2),c=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{id:e.week.id,title:e.week.name,firstPage:e.week.firstPage,lastPage:e.week.lastPage,image:e.week.pictureSrc,showButton:!1}),r.a.createElement(J.a,{value:c},r.a.createElement(L.a,{onChange:function(e,t){o(t)},variant:"fullWidth"},r.a.createElement(D.a,{value:"pages",label:"Pages",wrapped:!0}),r.a.createElement(D.a,{value:"answer",label:"My Answer",disabled:void 0===e.user,wrapped:!0}),r.a.createElement(D.a,{value:"guesses",label:"My Guesses",disabled:void 0===e.user,wrapped:!0})),r.a.createElement(H.a,{value:"pages"},r.a.createElement(ae,{weekId:e.week.id})),r.a.createElement(H.a,{value:"answer"},"Item Two"),r.a.createElement(H.a,{value:"guesses"},"Item Three")))}function re(e){var t=Object(i.f)().id,a=[],n=Object(T.c)(R),c=Object(T.b)();switch(n.status){case"unloaded":B()(c),a.push(r.a.createElement(z.a,null));break;case"loading":a.push(r.a.createElement(z.a,null));break;case"errored":a.push(r.a.createElement(p.a,null,"There was an error loading the weeks"));break;default:var o=n.weeks.filter((function(e){return e.id===parseInt(t)}))[0];void 0!==o&&a.push(r.a.createElement(ne,{week:o,user:e.user}))}return r.a.createElement(r.a.Fragment,null,a)}var ce=Object(g.a)((function(e){return{container:{marginTop:"10px"}}}));var oe=function(){var e=Object(n.useState)(void 0),t=Object(s.a)(e,2),a=t[0],c=t[1],o=ce();return r.a.createElement(A.a,{theme:M},r.a.createElement(l.a,null,r.a.createElement(x,{user:a,setUser:function(e){return c(e)}}),r.a.createElement(K.a,{className:o.container,maxWidth:"lg"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/week/:id"},r.a.createElement(re,{user:a})),r.a.createElement(i.a,{path:"/"},r.a.createElement(F,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=a(32),le=Object(se.combineReducers)({week:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_WEEKS_START":return{weeks:[],status:"loading"};case"GET_WEEKS_SUCCESS":return{weeks:t.data,status:"loaded"};case"GET_WEEKS_ERROR":return{weeks:[],status:"errored"};default:return e}},pages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"get_pages_start":return e[t.weekId]={status:"loading",pages:[]},Object($.a)({},e);case"get_pages_error":return e[t.weekId]={status:"errored",pages:[]},Object($.a)({},e);case"get_pages_success":return e[t.weekId]={status:"loaded",pages:t.data},Object($.a)({},e);case"add_page_success":case"add_page_error":return e[t.weekId]={status:"unloaded",pages:[]},Object($.a)({},e);default:return e}}}),ie=a(79),ue=Object(se.createStore)(le,Object(ie.composeWithDevTools)());o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T.a,{store:ue},r.a.createElement(oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a(116)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.15ce8414.chunk.js.map