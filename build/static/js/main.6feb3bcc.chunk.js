(this["webpackJsonprjs-music-app"]=this["webpackJsonprjs-music-app"]||[]).push([[0],{15:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(2),i=n.n(c),r=n(9),a=n.n(r),j=(n(15),n(3));n.p,n.p,n.p;var l=n(5),o=n(4);var u=function(e){return Object(s.jsxs)("div",{className:"c-player--controls",children:[Object(s.jsx)("button",{className:"skip-btn",onClick:function(){return e.SkipSong(!1)},children:Object(s.jsx)(l.a,{icon:o.a})}),Object(s.jsx)("button",{className:"play-btn",onClick:function(){return e.setIsPlaying(!e.isPlaying)},children:Object(s.jsx)(l.a,{icon:e.isPlaying?o.c:o.d})}),Object(s.jsx)("button",{className:"skip-btn",onClick:function(){return e.SkipSong()},children:Object(s.jsx)(l.a,{icon:o.b})})]})};var g=function(e){return Object(s.jsxs)("div",{className:"c-player--details",children:[Object(s.jsx)("div",{className:"details-img",children:Object(s.jsx)("img",{src:e.song.img_src,alt:""})}),Object(s.jsx)("h3",{className:"details-title",children:e.song.title}),Object(s.jsx)("h4",{className:"details-artist",children:e.song.artist})]})};var b=function(e){var t=Object(c.useRef)(null),n=Object(c.useState)(!1),i=Object(j.a)(n,2),r=i[0],a=i[1];return Object(c.useEffect)((function(){r?t.current.play():t.current.pause()})),Object(s.jsxs)("div",{className:"c-player",children:[Object(s.jsx)("audio",{src:e.songs[e.currentSongIndex].src,ref:t}),Object(s.jsx)(g,{song:e.songs[e.currentSongIndex]}),Object(s.jsx)(u,{isPlaying:r,setIsPlaying:a,SkipSong:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return++t>e.songs.length-1&&(t=0),t})):e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return--t<0&&(t=e.songs.length-1),t}))}}),Object(s.jsxs)("p",{children:["Next up: ",Object(s.jsx)("span",{children:e.songs[e.nextSongIndex].title})]})]})};var d=function(){var e=Object(c.useState)([{title:"Ghar Se The Chale",artist:"Arijit Singh",img_src:"./images/arin.jpeg",src:"./music/gharse.mp3"},{title:"Khairiyat Pucho",artist:"Arijit Singh",img_src:"./images/jaidul.jpeg",src:"./music/kheriyat.mp3"}]),t=Object(j.a)(e,1)[0],n=Object(c.useState)(0),i=Object(j.a)(n,2),r=i[0],a=i[1],l=Object(c.useState)(0),o=Object(j.a)(l,2),u=o[0],g=o[1];return Object(c.useEffect)((function(){g((function(){return r+1>t.length-1?0:r+1}))}),[r]),Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("div",{className:"main-div",children:Object(s.jsx)(b,{currentSongIndex:r,setCurrentSongIndex:a,nextSongIndex:u,songs:t})})})};a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.6feb3bcc.chunk.js.map