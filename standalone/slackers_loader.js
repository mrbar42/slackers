!function(I,g){"object"==typeof exports&&"object"==typeof module?module.exports=g(require("preact")):"function"==typeof define&&define.amd?define(["preact"],g):"object"==typeof exports?exports.slackers_loader=g(require("preact")):I.slackers_loader=g(I.preact)}(this,function(I){return function(I){function g(C){if(i[C])return i[C].exports;var A=i[C]={exports:{},id:C,loaded:!1};return I[C].call(A.exports,A,A.exports,g),A.loaded=!0,A.exports}var i={};return g.m=I,g.c=i,g.p="",g(0)}([function(I,g,i){"use strict";function C(I){return I&&I.__esModule?I:{default:I}}function A(I){var g=I.text;return(0,b.h)(m.default,{text:g||"",backgroundImage:l()})}function l(){return"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0nMTE0cHgnIGhlaWdodD0nMTE0cHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiCiAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtc3BpbiI+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9Im5vbmUiIGNsYXNzPSJiayI+PC9yZWN0PgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDUwKSI+CiAgICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSgwKSB0cmFuc2xhdGUoMzQgMCkiPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iIzAwMCI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjBzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwcyIgZHVyPSIxcyIKICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgICA8L2NpcmNsZT4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSB0cmFuc2xhdGUoMzQgMCkiPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iIzAwMCI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuMTJzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjEycyIgZHVyPSIxcyIKICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgICA8L2NpcmNsZT4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0icm90YXRlKDkwKSB0cmFuc2xhdGUoMzQgMCkiPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iIzAwMCI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuMjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjI1cyIgZHVyPSIxcyIKICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgICA8L2NpcmNsZT4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0icm90YXRlKDEzNSkgdHJhbnNsYXRlKDM0IDApIj4KICAgICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiMwMDAiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwLjM3cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4KICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMC4zN3MiIGR1cj0iMXMiCiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICAgICAgPC9jaXJjbGU+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSgxODApIHRyYW5zbGF0ZSgzNCAwKSI+CiAgICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjMDAwIj4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC41cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4KICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMC41cyIgZHVyPSIxcyIKICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgICA8L2NpcmNsZT4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0icm90YXRlKDIyNSkgdHJhbnNsYXRlKDM0IDApIj4KICAgICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiMwMDAiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwLjYycyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4KICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMC42MnMiIGR1cj0iMXMiCiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICAgICAgPC9jaXJjbGU+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSgyNzApIHRyYW5zbGF0ZSgzNCAwKSI+CiAgICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjMDAwIj4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC43NXMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuNzVzIiBkdXI9IjFzIgogICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgICAgIDwvY2lyY2xlPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJyb3RhdGUoMzE1KSB0cmFuc2xhdGUoMzQgMCkiPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iIzAwMCI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuODdzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjg3cyIgZHVyPSIxcyIKICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgICA8L2NpcmNsZT4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="}Object.defineProperty(g,"__esModule",{value:!0}),g.default=A;var b=i(1),Z=i(2),m=C(Z);I.exports=g.default},function(g,i){g.exports=I},function(I,g,i){"use strict";function C(I){var g=I.text,i=I.backgroundImage,C=I.children,b=I.className,Z=A(),m=Z.base,c=Z.box,t=Z.icon;return t.backgroundImage="url('"+i+"')",(0,l.h)("div",{className:b,style:m},(0,l.h)("div",{style:c},(0,l.h)("div",{style:t}),g||"",C))}function A(){return{base:{backgroundColor:"rgb(244, 252, 255)",position:"absolute",left:0,right:0,bottom:0,top:0},box:{color:"#ED6C30",textAlign:"center",display:"block",fontSize:"44px",fontWeight:"bold",position:"absolute",width:300,height:405,margin:"auto",left:0,right:0,bottom:0,top:0},icon:{backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",width:230,height:230,margin:"auto"}}}Object.defineProperty(g,"__esModule",{value:!0}),g.default=C;var l=i(1);I.exports=g.default}])});