"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[593],{375:function(n,e,t){t.d(e,{Z:function(){return a}});var r,i=t(168),o=t(924).ZP.div(r||(r=(0,i.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n  z-index: 1200;\n"]))),s=t(137),l=t(184),a=function(){return(0,l.jsx)(o,{children:(0,l.jsx)(s.Nx,{width:"200",color:"#b23d"})})}},14:function(n,e,t){t.d(e,{Z:function(){return m}});var r,i=t(168),o=t(924),s=o.ZP.div(r||(r=(0,i.Z)(["\n  max-width: 256px;\n  height: 410px;\n\n  &:hover {\n    box-shadow: 0 0 19px rgba(33, 33, 33, 0.2);\n    scale: 0.99;\n  }\n  transition: all 250ms linear;\n"]))),l="style_header__PiJnG",a="style_thumb__JgdSN",c=t(330),p=t(689),u=t(87),x=t(184);var d,f=function(n){var e=n.movie,t=(0,p.TH)();return(0,x.jsx)("li",{children:(0,x.jsx)(u.rU,{title:e.title,style:{textDecoration:"none"},to:"/movies/".concat(e.id),state:{from:t},children:(0,x.jsxs)(s,{children:[(0,x.jsx)("div",{className:a,children:(0,x.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w600_and_h900_bestv2/".concat(e.poster_path):"https://usagif.com/wp-content/uploads/2021/4fh5wi/pepefrg-4.gif",alt:"".concat(e.title," poster")})}),(0,x.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,x.jsxs)("h2",{className:l,children:[" ",e.title]}),(0,x.jsxs)("p",{style:{display:"flex",gap:"5px"},color:"inherit",children:[(0,x.jsx)(c.PHX,{size:"20px"}),e.vote_average," "]})]})]})})})},h=o.ZP.ul(d||(d=(0,i.Z)(["\n  max-width: 1120px;\n  display: flex;\n  column-gap: 32px;\n  row-gap: 36px;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding-bottom: 15px;\n"]))),m=function(n){var e=n.movies;return(0,x.jsx)(h,{children:e.map((function(n){return(0,x.jsx)(f,{movie:n},n.id)}))})}},593:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,i,o,s=t(439),l=t(168),a=t(924),c=a.ZP.form(r||(r=(0,l.Z)(["\n  flex-basis: 412px;\n  display: flex;\n  position: relative;\n  justify-content: center;\n  padding-bottom: 30px;\n"]))),p=a.ZP.input(i||(i=(0,l.Z)(["\n  font-size: 16px;\n  flex-basis: 412px;\n  border-radius: 25px;\n  background-color: #fff;\n  outline: none;\n  padding: 12px 40px 12px 24px;\n"]))),u=a.ZP.button(o||(o=(0,l.Z)(["\n  position: absolute;\n  top: 7px;\n  right: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  outline: none;\n  color: #cc1459;\n  background-color: transparent;\n  cursor: pointer;\n  transition: color 250ms linear;\n  &:hover {\n    color: green;\n  }\n"]))),x=t(202),d=t(184),f=function(n){var e=n.setSearch;return(0,d.jsxs)(c,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.filmName.value;0!==t.length?e({query:t}):console.log("reject")},children:[(0,d.jsx)(p,{type:"text",placeholder:"Search movies.......",name:"filmName"}),(0,d.jsx)(u,{type:"submit",children:(0,d.jsx)(x.U41,{color:"inherit",size:"30px"})})]})},h=t(791),m=t(87),v=t(530),g=t(14),j=t(375),y=function(){var n=(0,h.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],i=(0,h.useState)(!1),o=(0,s.Z)(i,2),l=o[0],a=o[1],c=(0,h.useState)(!1),p=(0,s.Z)(c,2),u=p[0],x=p[1],y=(0,m.lr)(),b=(0,s.Z)(y,2),Z=b[0],w=b[1],_=Z.get("query");return(0,h.useEffect)((function(){_&&(x(!0),(0,v.qF)(_).then((function(n){if(n.results.length>0)return a(!1),void r(n.results);a(!0)})).catch((function(n){return console.log(n)})).finally((function(){return x(!1)})))}),[_]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[u&&(0,d.jsx)(j.Z,{}),(0,d.jsx)(f,{setSearch:w})]}),l?(0,d.jsx)("div",{children:"VOID"}):(0,d.jsx)(g.Z,{movies:t})]})}}}]);
//# sourceMappingURL=593.f4a43f86.chunk.js.map