(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(33)},26:function(e,t,n){},28:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),i=n.n(c),l=(n(26),n(18)),o=n(5),u=n(6),m=n.n(u),p=n(9),s=n(10),d=n.n(s),f=function(){var e=Object(a.useRef)(new d.a({id:"example-microapp",audience:"example-microapp"}));Object(a.useEffect)(function(){e.current.initialize()},[]);var t=function(){var t=Object(p.a)(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.current.getToken();case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Workgrid Microapp"),r.a.createElement("p",null,"This is the summary microapp, here are the actions you can perform in summary:"),r.a.createElement("div",{className:"action-block vertical"},r.a.createElement("button",{className:"secondary",onClick:function(){var t=["Altered Title","Awesome Title","Another Title"];e.current.updateTitle(t[Math.floor(Math.random()*t.length)])}},"Change Title"),r.a.createElement("button",{className:"secondary",onClick:t},"Request Token"),r.a.createElement("button",{className:"primary",onClick:function(){e.current.showDetail({url:"".concat(window.location.origin,"/detail"),title:"Microapp Title"})}},"Show Detail")))},h=(n(28),function(){var e=Object(a.useRef)(new d.a({id:"example-microapp",audience:"example-microapp"}));Object(a.useEffect)(function(){e.current.initialize()},[]);var t=function(){var t=Object(p.a)(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.current.getToken();case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Workgrid Microapp"),r.a.createElement("p",null,"This is the detail panel of a microapp. Remember the summary and detail are independent, think of them as two individual tabs in your browser."),r.a.createElement("div",{className:"example-block"},r.a.createElement("label",{for:"example"},"Example Input:"),r.a.createElement("input",{type:"text",placeholder:"Example input",name:"example"})),r.a.createElement("div",{className:"action-block"},r.a.createElement("button",{className:"secondary",onClick:function(){e.current.hideDetail()}},"Hide Detail"),r.a.createElement("button",{className:"primary",onClick:t},"Request Token")))}),E=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{path:"/",exact:!0,component:f}),r.a.createElement(o.a,{path:"/detail",component:h}))};i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.496babe1.chunk.js.map