webpackJsonp([10],{CT3Z:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("RX7x"),n=e("uNrK"),r=!1;var i=function(t){r||e("NbAF")},o=e("VU/8")(a.a,n.a,!1,i,"data-v-24c6185e",null);o.options.__file="pages/_id.vue",s.default=o.exports},NbAF:function(t,s,e){var a=e("s8oo");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("62aa5c76",a,!1,{sourceMap:!1})},RX7x:function(t,s,e){"use strict";var a=e("YFWx");s.a={name:"id",asyncData:function(t){var s=t.params,e=t.error;return a.a.get("/api/users/"+s.id).then(function(t){return{user:t.data}}).catch(function(t){e({statusCode:404,message:"User not found"})})},head:function(){return{title:"User: "+this.user.name}}}},s8oo:function(t,s,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])},uNrK:function(t,s,e){"use strict";var a=function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"container"},[s("img",{staticClass:"logo",attrs:{src:e("iPC3"),alt:"Nuxt.js Logo"}}),s("h1",{staticClass:"title"},[this._v("\n    User\n  ")]),s("h2",{staticClass:"info"},[this._v("\n    "+this._s(this.user.name)+"\n  ")]),s("nuxt-link",{staticClass:"button",attrs:{to:"/"}},[this._v("\n    Users\n  ")])],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};s.a=n}});