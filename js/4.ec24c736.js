(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"727a":function(t,a,e){t.exports=e.p+"img/lets-start.58db76e5.png"},"8b24":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("q-page",[a("div",{staticClass:"column",staticStyle:{height:"calc(100vh - 100px)"}},[a("p",{staticClass:"text-center text-h3 q-mt-auto"},[t._v("Tap the image to get started.")]),a("div",{staticClass:"q-mt-md q-mb-auto text-center"},[a("img",{attrs:{src:e("727a"),alt:"",width:"300"},on:{click:function(a){t.startConfig=!0}}})])]),a("q-dialog",{model:{value:t.startConfig,callback:function(a){t.startConfig=a},expression:"startConfig"}},[a("q-card",[a("q-card-section",{staticClass:"row justify-between q-pb-none"},[a("div",{staticClass:"text-h5"},[t._v("How do you start?")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),a("q-card-section",[a("q-btn",{staticClass:"q-mt-md full-width",attrs:{label:"start anew",icon:"open_in_new",size:"20px",color:"primary",to:"/task"}}),a("q-btn",{staticClass:"q-mt-md full-width",attrs:{label:"open json data",icon:"file_upload",size:"20px",color:"primary"},on:{click:t.btnclick}}),a("input",{ref:"input",staticClass:"hidden",attrs:{type:"file",accept:"application/json"},on:{change:t.fileHandle}})],1)],1)],1)],1)},i=[],n={data(){return{startConfig:!1}},methods:{btnclick(){this.$refs.input.click()},async fileHandle(){const t=this.$refs.input.files[0];if(!t)return;let a=new FileReader;a.readAsText(t),a.onload=()=>{this.$router.push({name:"TaskPage",params:{taskList:JSON.parse(a.result)}})}}}},o=n,c=e("2877"),l=e("9989"),r=e("24e8"),p=e("f09f"),d=e("a370"),u=e("9c40"),f=e("7f67"),m=e("eebe"),h=e.n(m),b=Object(c["a"])(o,s,i,!1,null,null,null);a["default"]=b.exports;h()(b,"components",{QPage:l["a"],QDialog:r["a"],QCard:p["a"],QCardSection:d["a"],QBtn:u["a"]}),h()(b,"directives",{ClosePopup:f["a"]})}}]);