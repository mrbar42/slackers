!function(M,L){"object"==typeof exports&&"object"==typeof module?module.exports=L(require("preact")):"function"==typeof define&&define.amd?define(["preact"],L):"object"==typeof exports?exports.slackers_unauthorized=L(require("preact")):M.slackers_unauthorized=L(M.preact)}(this,function(M){return function(M){function L(t){if(u[t])return u[t].exports;var j=u[t]={exports:{},id:t,loaded:!1};return M[t].call(j.exports,j,j.exports,L),j.loaded=!0,j.exports}var u={};return L.m=M,L.c=u,L.p="",L(0)}([function(M,L,u){"use strict";function t(M){return M&&M.__esModule?M:{default:M}}function j(M){var L=M.text;return(0,e.h)(I.default,{text:L||"Unauthorized",backgroundImage:i()})}function i(){return"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KICAgIDxwYXRoIGZpbGw9IiNGQ0MyMUIiIGQ9Ik0xNi4wMSwzMi45QzM1LjI5LDQuMDIsNjcuNS05LjE1LDEwMS42Myw4LjIyYzIyLjg0LDExLjYzLDMwLjc5LDM5LjIyLDIwLjg2LDcxLjY0CiAgICAgIGMtNC4wOSwxMy4zNyw2LjE0LDE1LjY0LDUuNDgsMjIuNzRjLTEuMjksMTMuODgtMjguNDksMjUuMjctNjMuNjQsMjUuMjdjLTM1LjE2LDAtNjIuNzItMTEuMzYtNjMuNjYtMjUuMjcKICAgICAgQy0xLjIzLDc0LjU0LDMuNzEsNTEuMzUsMTYuMDEsMzIuOSIvPgogIDwvZz4KCTxwYXRoIGZpbGw9IiMyRjJGMkYiIGQ9Ik04OC45Nyw2My44MWwtNS4xNiwxLjkxYy0yLjMxLDAuODgtMy4yNCw0LjU3LTIuMDcsOC4zMWwxMC4yMiwzMi41M2MxLjIzLDMuOSw1LjQ4LDUuOTIsOS41LDQuNTEKCQlsOC45Ni0zLjE3YzQuMDYtMS40NCw1LjY4LTUuNTYsMy41OS05LjJsLTE3LjI3LTMwLjJDOTQuNzgsNjUuMDMsOTEuMyw2Mi45NSw4OC45Nyw2My44MXogTTEwNy41OCwxMDQuODZsLTYuMzIsMi4yNAoJCWMtMi4wNiwwLjczLTQuMzEtMC4zMy01LjA1LTIuMzVjLTAuNzMtMi4wMywwLjIzLTQuMjEsMi4xMy00Ljg5bDUuODgtMi4xMWMxLjkxLTAuNjgsNC4yOCwwLjMzLDUuMjgsMi4yNgoJCUMxMTAuNSwxMDEuOTYsMTA5LjY0LDEwNC4xMywxMDcuNTgsMTA0Ljg2eiIvPgoJPHBhdGggZmlsbD0iIzJGMkYyRiIgZD0iTTQzLjgzLDMyLjA1Yy01LjQzLTEuNDctNi4zOC03LjcyLTMuODYtMTIuMTdjMS45OS0zLjExLDUuMzEtNC43LDguMTEtNC4zNGMyLjk0LDAuNCw1Ljc1LDIuOTQsNS44OCw2Ljc3CgkJQzU0LjE3LDI4LDQ5Ljg1LDMzLjU3LDQzLjgzLDMyLjA1eiIvPgoJPHBhdGggZmlsbD0iIzJGMkYyRiIgZD0iTTc0LjMzLDM2LjY4YzMuOTQsNC40MiwxMC4zNywyLjM4LDEzLjQ1LTIuMWMyLjA2LTMuMzUsMi4wNS03LjIzLDAuMzktOS43MQoJCWMtMS43Ni0yLjU3LTUuNTEtNC4wMi05LjI0LTIuMzRDNzMuMzksMjUuMDQsNzAuMDYsMzEuNzMsNzQuMzMsMzYuNjh6Ii8+Cgk8cGF0aCBmaWxsPSIjMkYyRjJGIiBkPSJNODkuMDksNzMuNGMtMC43NS0wLjA5LTEuNDgtMC41LTEuOTUtMS4xOGwtNy43OC0xMS40M2wtMTAuMDgsMy4wM2MtMS4wMiwwLjMyLTIuMTQtMC4wOC0yLjc4LTAuOTYKCQlsLTYuNDEtOC43MmwtMTIuMiw0LjFjLTEuMDIsMC4zNC0yLjE0LTAuMDMtMi43Ny0wLjkybC00LjgyLTYuNzRsLTguODksNC4wNGMtMC45NiwwLjQ0LTIuMDksMC4xOC0yLjc5LTAuNjRsLTQuMzUtNS4xNAoJCWwtNS42MiwyLjIyYy0xLjIxLDAuNDgtMi41OC0wLjE0LTMuMDQtMS4zOGMtMC40Ny0xLjI1LDAuMTItMi42MywxLjMzLTMuMTJsNy4xNS0yLjg0YzAuOTMtMC4zNywxLjk5LTAuMDksMi42NSwwLjY4bDQuMjksNS4wMwoJCWw5LjAyLTQuMTJjMS4wNC0wLjQ4LDIuMjgtMC4xNCwyLjk2LDAuOEw0Ny45NSw1M2wxMi4xNi00LjExYzEuMDMtMC4zNSwyLjE2LDAuMDIsMi44MSwwLjg5bDYuNDYsOC43MmwxMC4xNS0zLjA3CgkJYzEuMDctMC4zMywyLjI0LDAuMSwyLjg4LDEuMDRsOC45MiwxMy4wMWMwLjgyLDEuMiwwLjU0LDIuNzctMC42MiwzLjUzQzkwLjIyLDczLjM0LDg5LjY1LDczLjQ1LDg5LjA5LDczLjR6Ii8+CjwvZz4KPC9zdmc+Cg=="}Object.defineProperty(L,"__esModule",{value:!0}),L.default=j;var e=u(1),D=u(2),I=t(D);M.exports=L.default},function(L,u){L.exports=M},function(M,L,u){"use strict";function t(M){var L=M.text,u=M.backgroundImage,t=M.children,e=M.className,D=j(),I=D.base,w=D.box,o=D.icon;return o.backgroundImage="url('"+u+"')",(0,i.h)("div",{className:e,style:I},(0,i.h)("div",{style:w},(0,i.h)("div",{style:o}),L||"",t))}function j(){return{base:{backgroundColor:"rgb(244, 252, 255)",position:"absolute",left:0,right:0,bottom:0,top:0},box:{color:"#ED6C30",textAlign:"center",display:"block",fontSize:"44px",fontWeight:"bold",position:"absolute",width:300,height:405,margin:"auto",left:0,right:0,bottom:0,top:0},icon:{backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",width:230,height:230,margin:"auto"}}}Object.defineProperty(L,"__esModule",{value:!0}),L.default=t;var i=u(1);M.exports=L.default}])});