(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{24:function(e,t,i){},31:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i(11),d=i.n(c),r=(i(24),i(16)),l=i(32),o=i(33),s=i(34),a=i(35),j=i(10),b=i(17),u=Object(b.a)({name:"todos",initialState:[{id:1,title:"We believe if"},{id:2,title:"We believe it"}],reducers:{addTodo:function(e,t){var i={id:Object(b.b)(),date:(new Date).toISOString(),title:t.payload.todo,description:t.payload.desc};e.push(i)},removeTodo:function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))}}}),h=u.actions,x=h.addTodo,O=h.removeTodo,p=(u.reducer,i(2)),f=function(){var e=Object(n.useState)(),t=Object(r.a)(e,2),i=t[0],c=t[1],d=Object(n.useState)(),b=Object(r.a)(d,2),u=b[0],h=b[1],O=Object(j.a)();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{children:"Scheduled Creator"}),Object(p.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),O(x({todo:i,desc:u})),console.log({todo:i,desc:u})},children:[Object(p.jsx)(o.a,{children:"Title"}),Object(p.jsx)(s.a,{style:{width:"98%"},type:"text",value:i,onChange:function(e){return c(e.target.value)}}),Object(p.jsx)(o.a,{children:" Description"}),Object(p.jsx)(s.a,{style:{width:"98%",height:"20vh",marginTop:3},type:"text",value:u,onChange:function(e){return h(e.target.value)}}),Object(p.jsx)(a.a,{color:"primary",children:"Add Todo"})]})]})},v=function(e){var t=e.id,i=e.title,n=Object(j.a)();return Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:i}),Object(p.jsx)("button",{onClick:function(){n(O({id:t}))},style:{float:"right"},children:"remove"})]},t)},g=function(){return[{id:1,title:"We believe if"},{id:2,title:"We believe it"}].map((function(e){return Object(p.jsx)("ul",{style:{listStyleType:"none",background:"#cdc",padding:"15px",height:"3vh"},children:Object(p.jsx)(v,{id:e.id,title:e.title})})}))},m=i(36);function y(e){return Object(p.jsxs)("div",{style:{marginLeft:10,float:"right"},children:[Object(p.jsx)("span",{style:{marginRight:4},children:e.title}),Object(p.jsx)(m.a,{style:{background:"blue",width:"12vh",fontSize:"1.3em",padding:"6px",height:"60px",borderRadius:"50%",color:"white"},children:e.num})]})}var S=function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y,{title:"All",num:"2"}),Object(p.jsx)(y,{title:"New",num:"8"}),Object(p.jsx)(y,{title:"Completed",num:"3"})]})};function w(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{style:{marginTop:"4px"},children:[Object(p.jsxs)("span",{style:{fontSize:"2em",fontWeight:"bolder"},children:[" ","My Scheduler"]}),Object(p.jsx)(S,{})]}),Object(p.jsxs)("div",{style:{marginTop:"0px"},children:[Object(p.jsx)("div",{style:{width:"40%",border:"1px solid black",padding:3,float:"left"},children:Object(p.jsx)(f,{})}),Object(p.jsxs)("div",{style:{width:"56%",marginLeft:3,border:"1px solid black",padding:3,float:"left"},children:[Object(p.jsx)("h6",{children:"Scheduled Item"}),Object(p.jsx)(g,{})]})]})]})}var T=document.getElementById("root");d.a.render(Object(p.jsx)(n.StrictMode,{children:Object(p.jsx)(w,{})}),T)}},[[31,1,2]]]);
//# sourceMappingURL=main.93aaff83.chunk.js.map