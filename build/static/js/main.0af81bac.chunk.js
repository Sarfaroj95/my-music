(this["webpackJsonprjs-music-app"]=this["webpackJsonprjs-music-app"]||[]).push([[0],{15:function(e,s,t){},21:function(e,s,t){"use strict";t.r(s);var c=t(0),n=t(2),i=t.n(n),a=t(9),r=t.n(a),j=(t(15),t(3)),l=t.p+"static/media/one.56c56c1d.jpeg",u=t.p+"static/media/two.b44bb2d3.jpeg",o=t.p+"static/media/three.84953817.jpeg";var d=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"imgDiv",children:[Object(c.jsx)("img",{src:l,className:"img"}),Object(c.jsx)("img",{src:u,className:"img"}),Object(c.jsx)("img",{src:o,className:"img"})]})})},g=t(5),b=t(4);var m=function(e){return Object(c.jsxs)("div",{className:"c-player--controls",children:[Object(c.jsx)("button",{className:"skip-btn",onClick:function(){return e.SkipSong(!1)},children:Object(c.jsx)(g.a,{icon:b.a})}),Object(c.jsx)("button",{className:"play-btn",onClick:function(){return e.setIsPlaying(!e.isPlaying)},children:Object(c.jsx)(g.a,{icon:e.isPlaying?b.c:b.d})}),Object(c.jsx)("button",{className:"skip-btn",onClick:function(){return e.SkipSong()},children:Object(c.jsx)(g.a,{icon:b.b})})]})};var x=function(e){return Object(c.jsxs)("div",{className:"c-player--details",children:[Object(c.jsx)("div",{className:"details-img",children:Object(c.jsx)("img",{src:e.song.img_src,alt:""})}),Object(c.jsx)("h3",{className:"details-title",children:e.song.title}),Object(c.jsx)("h4",{className:"details-artist",children:e.song.artist})]})};var O=function(e){var s=Object(n.useRef)(null),t=Object(n.useState)(!1),i=Object(j.a)(t,2),a=i[0],r=i[1];return Object(n.useEffect)((function(){a?s.current.play():s.current.pause()})),Object(c.jsxs)("div",{className:"c-player",children:[Object(c.jsx)("audio",{src:e.songs[e.currentSongIndex].src,ref:s}),Object(c.jsx)("h4",{children:"Playing now"}),Object(c.jsx)(x,{song:e.songs[e.currentSongIndex]}),Object(c.jsx)(m,{isPlaying:a,setIsPlaying:r,SkipSong:function(){var s=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];s?e.setCurrentSongIndex((function(){var s=e.currentSongIndex;return++s>e.songs.length-1&&(s=0),s})):e.setCurrentSongIndex((function(){var s=e.currentSongIndex;return--s<0&&(s=e.songs.length-1),s}))}}),Object(c.jsxs)("p",{children:["Next up: ",Object(c.jsxs)("span",{children:[e.songs[e.nextSongIndex].title," by ",e.songs[e.nextSongIndex].artist]})]})]})};var h=function(){var e=Object(n.useState)([{title:"Tui Chara",artist:"Sad singer",img_src:"./images/tui-chara.jpg",src:"./music/Tui-chara.mp3"},{title:"Khairiyat Pucho",artist:"Arijit",img_src:"./images/khairiyat.jpg",src:"./music/kheriyat.mp3"},{title:"Humnava Mere",artist:"Jubin Nautiyal",img_src:"./images/humnava.jpg",src:"./music/Humnava.mp3"},{title:"Khusi Ke Pal",artist:"Shirley Setia",img_src:"./images/khusiki-pal.jpg",src:"./music/khusikipal.mp3"}]),s=Object(j.a)(e,1)[0],t=Object(n.useState)(0),i=Object(j.a)(t,2),a=i[0],r=i[1],l=Object(n.useState)(0),u=Object(j.a)(l,2),o=u[0],g=u[1];return Object(n.useEffect)((function(){g((function(){return a+1>s.length-1?0:a+1}))}),[a]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"main-div",children:Object(c.jsx)(O,{currentSongIndex:a,setCurrentSongIndex:r,nextSongIndex:o,songs:s})}),Object(c.jsx)("div",{className:"sec-div",children:Object(c.jsx)("marquee",{className:"story",children:"\u0986\u0995\u09be\u09b6\u09c7\u09b0 \u09a8\u09c0\u09b2 \u09aa\u09b0\u09bf \u09ae\u09c7\u09b2\u09c7\u099b\u09c7 \u09a6\u09c1\u099f\u09bf \u09a1\u09be\u09a8\u09be \u09ae\u09a8\u09c7\u09b0 \u09ae\u09be\u099d\u09c7 \u09ac\u09be\u09b8\u09be \u09ac\u09be\u0981\u09a7\u09a4\u09c7 \u09a8\u09c7\u0987\u0995\u09cb \u0995\u09cb\u09a8\u09cb \u09ae\u09be\u09a8\u09be \u0985\u099a\u09bf\u09a8 \u09a6\u09c7\u09b6\u09c7 \u09a8\u09bf\u09df\u09c7 \u09af\u09be\u09ac\u09cb, \u09ac\u09be\u0981\u09a7\u09ac\u09cb \u09b8\u09c1\u0996\u09c7\u09b0 \u0998\u09b0 \u09ae\u09a8\u09c7\u09b0 \u09ae\u09be\u099d\u09c7 \u09a5\u09be\u0995\u09ac\u09c7 \u099a\u09bf\u09b0\u0995\u09be\u09b2, \u09b9\u09ac\u09c7\u09a8\u09be \u0995\u0996\u09a8\u09cb \u09aa\u09b0... \u0986\u09b0 \u098f\u0995\u099f\u09be \u0995\u09a5\u09be\u0964 \u0995\u09be\u0993\u0995\u09c7 \u09ad\u09be\u09b2\u09cb \u0995\u09b0\u09c7 \u09a8\u09be \u099a\u09bf\u09a8\u09c7 \u0996\u09be\u09b0\u09be\u09aa \u09ae\u09a8\u09cd\u09a4\u09ac\u09cd\u09af \u0995\u09b0\u09ac\u09c7 \u09a8\u09be\u0964"})}),Object(c.jsx)("div",{className:"Pic",children:Object(c.jsx)(d,{})}),Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:"msg",children:"Love is part of life"})})]})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.0af81bac.chunk.js.map