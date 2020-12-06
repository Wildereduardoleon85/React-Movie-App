(this.webpackJsonpmovieApp=this.webpackJsonpmovieApp||[]).push([[0],{14:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(3),a=c(15),i=c.n(a),r=c(1),l=c(16),o=function(){return Object(n.jsx)("h1",{children:"Movie Database"})},j=function(e){var t=e.handleInput,c=e.handleSubmit;return Object(n.jsxs)("form",{onSubmit:c,children:[Object(n.jsx)("input",{type:"text",placeholder:"Search Movie",onChange:t}),Object(n.jsx)("button",{type:"submit",children:Object(n.jsx)("i",{className:"fas fa-search"})})]})},d=(c(22),function(e){var t=e.results,c=e.getSingle;return Object(n.jsx)("section",{className:"results",children:t.map((function(e){return Object(n.jsxs)("div",{className:"card",style:null===e.poster_path?{display:"none"}:null,onClick:c,children:[Object(n.jsx)("div",{className:"overlay_div",children:Object(n.jsx)("img",{id:e.id,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path)})}),Object(n.jsxs)("div",{className:"captions",children:[Object(n.jsx)("h3",{id:e.id,children:e.title}),Object(n.jsx)("p",{id:e.id,children:e.release_date}),Object(n.jsxs)("div",{id:e.id,className:"rating",children:[Object(n.jsx)("i",{id:e.id,className:"fas fa-star"}),e.vote_average]})]})]},e.id)}))})}),b=(c(23),function(e){var t=e.selected,c=e.closeSingle;return Object(n.jsx)("section",{className:"single",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"image",children:Object(n.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path)})}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("h1",{children:[t.title," ",Object(n.jsxs)("span",{children:["(","".concat(t.release_date.split("-")[0]),")"]})]}),Object(n.jsxs)("p",{className:"subtitle",children:[Object(n.jsxs)("span",{children:["".concat(Math.floor(t.runtime/60),"hr ").concat((30*(t.runtime/60-Math.floor(t.runtime/60))/.5).toFixed(0),"min"),"\xa0 \xa0"]}),t.genres.map((function(e){return Object(n.jsxs)("span",{children:[e.name," \xa0 \xa0"]},e.id)})),Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"fas fa-star"})," ",t.vote_average]})]}),Object(n.jsxs)("div",{className:"overview",children:[Object(n.jsx)("h3",{children:"Overview:"}),Object(n.jsx)("p",{children:t.overview})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Language: "}),Object(n.jsx)("span",{children:t.original_language.toUpperCase()})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Release Date: "}),Object(n.jsx)("span",{children:t.release_date})]}),Object(n.jsxs)("div",{className:"prod",children:[Object(n.jsx)("p",{children:Object(n.jsx)("b",{children:"Production:"})}),Object(n.jsx)("div",{children:t.production_companies.map((function(e){return Object(n.jsxs)("small",{children:[e.name,"\xa0 \xa0"]},e.id)}))})]}),Object(n.jsxs)("div",{className:"links",children:[Object(n.jsx)("a",{href:"https://www.imdb.com/title/".concat(t.imdb_id,"/?ref_=hm_tpks_tt_1_pd_tp1"),target:"_blank",children:"View on IMDB"}),Object(n.jsx)("a",{href:t.homepage,target:"_blank",children:"Home Page"})]}),Object(n.jsx)("button",{onClick:c,children:"Close"})]})]})})}),u=function(e){var t=e.getTopRated,c=e.getUpcoming,s=e.getNowPlaying,a=e.getPopular;return Object(n.jsx)("section",{className:"sort",children:Object(n.jsxs)("nav",{children:[Object(n.jsx)("a",{onClick:t,children:"Top Rated"}),Object(n.jsx)("a",{onClick:s,children:"Now Playing"}),Object(n.jsx)("a",{onClick:a,children:"Popular"}),Object(n.jsx)("a",{onClick:c,children:"Upcoming"})]})})},h=c(4),O=c.n(h),p=(c(14),function(){var e=Object(s.useState)({search:"",results:[],selected:[]}),t=Object(l.a)(e,2),c=t[0],a=t[1];Object(s.useEffect)((function(){i()}),[]);var i=function(){O()("https://api.themoviedb.org/3/movie/now_playing?api_key=b2498ab40cbd0c2889af00915afea30f").then((function(e){var t=e.data.results;a((function(e){return Object(r.a)(Object(r.a)({},e),{},{results:t})}))}))};return document.body.style.background=Object.keys(c.selected).length>0?"black":"url('./img/background.jpg')",document.body.style.backgroundSize=Object.keys(c.selected).length>0?null:"cover",document.body.style.backgroundRepeat=Object.keys(c.selected).length>0?null:"no-repeat",document.body.style.backgroundColor=Object.keys(c.selected).length>0?null:"black",Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{children:Object.keys(c.selected).length>0?null:Object(n.jsx)(o,{})}),Object(n.jsxs)("main",{children:[Object.keys(c.selected).length>0?null:Object(n.jsx)(j,{handleInput:function(e){a((function(t){return Object(r.a)(Object(r.a)({},t),{},{search:e.target.value})}))},handleSubmit:function(e){e.preventDefault(),O()("https://api.themoviedb.org/3/search/movie?api_key=b2498ab40cbd0c2889af00915afea30f&query=".concat(c.search)).then((function(e){var t=e.data.results;a((function(e){return Object(r.a)(Object(r.a)({},e),{},{results:t})}))}))}}),Object.keys(c.selected).length>0?null:Object(n.jsx)(u,{getPopular:function(){O()("https://api.themoviedb.org/3/movie/popular?api_key=b2498ab40cbd0c2889af00915afea30f").then((function(e){var t=e.data.results;a((function(e){return Object(r.a)(Object(r.a)({},e),{},{results:t})}))}))},getNowPlaying:i,getTopRated:function(){O()("https://api.themoviedb.org/3/movie/top_rated?api_key=b2498ab40cbd0c2889af00915afea30f").then((function(e){var t=e.data.results;a((function(e){return Object(r.a)(Object(r.a)({},e),{},{results:t})}))}))},getUpcoming:function(){O()("https://api.themoviedb.org/3/movie/upcoming?api_key=b2498ab40cbd0c2889af00915afea30f").then((function(e){var t=e.data.results;a((function(e){return Object(r.a)(Object(r.a)({},e),{},{results:t})}))}))}}),0===Object.keys(c.results).length?Object(n.jsx)("h1",{style:{textAlign:"center"},children:"Loading..."}):null,Object.keys(c.selected).length>0?null:Object(n.jsx)(d,{results:c.results,getSingle:function(e){O()("https://api.themoviedb.org/3/movie/".concat(e.target.id,"?api_key=b2498ab40cbd0c2889af00915afea30f")).then((function(e){var t=e.data;a((function(e){return Object(r.a)(Object(r.a)({},e),{},{selected:t})}))}))}}),0!==Object.keys(c.selected).length&&Object(n.jsx)(b,{selected:c.selected,closeSingle:function(){a((function(e){return Object(r.a)(Object(r.a)({},e),{},{selected:[]})}))}})]})]})});i.a.render(Object(n.jsx)(p,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.3631d2f4.chunk.js.map