"use strict";(self["webpackChunkyy2"]=self["webpackChunkyy2"]||[]).push([[571],{3571:function(e,l,a){a.r(l),a.d(l,{default:function(){return L}});var t=a(1116),o=(a(8825),a(2876)),n=(a(2278),a(5185)),i=(a(3349),a(3164)),u=(a(6335),a(8480)),r=(a(5590),a(3579)),c=(a(492),a(2406)),d=(a(6615),a(6252));const s={style:{"--van-nav-bar-icon-color":"#f19290"}},m={class:"page-container"},p={class:"display_produce"},w=(0,d._)("br",null,null,-1),h={key:0},v={style:{transform:"translate(0px, -10px)"}},f={key:1},g={style:{display:"flex","justify-content":"center","align-items":"center"}},y=(0,d._)("br",null,null,-1),k=(0,d._)("br",null,null,-1),b=(0,d._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"},null,-1),V={style:{display:"flex","justify-content":"center","align-items":"center"}},_=(0,d._)("br",null,null,-1),W=(0,d._)("br",null,null,-1),H=(0,d._)("br",null,null,-1),T=(0,d._)("br",null,null,-1);function U(e,l,a,U,x,C){const D=c.l2,N=r.HY,P=u.Ee,z=i.gN,L=n.l0,j=o.Vq,q=t.gb;return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d._)("div",s,[(0,d.Wm)(D,{title:"仓库商品","left-text":"","left-arrow":"",onClickLeft:U.onClickLeft},null,8,["onClickLeft"])]),(0,d._)("div",m,[(0,d._)("div",p,[w,null===U.resData?((0,d.wg)(),(0,d.iD)("div",h,[(0,d._)("div",v,[(0,d.Wm)(N,{"image-size":"26rem",description:"😭仓库商品不见啦，快去购买一个吧！"})])])):(0,d.kq)("",!0),U.resData?((0,d.wg)(),(0,d.iD)("div",f,[(0,d.Wm)(L,{class:"form-container"},{default:(0,d.w5)((()=>[(0,d._)("div",g,[(0,d.Wm)(P,{width:"50vw",height:"50vw",position:"center",fit:"cover",round:"",src:U.imageUrl,onClick:U.picture},null,8,["src","onClick"])]),y,k,b,(0,d.Wm)(z,{label:"📌商品名称",modelValue:U.title,"onUpdate:modelValue":l[0]||(l[0]=e=>U.title=e),readonly:!0},null,8,["modelValue"]),(0,d.Wm)(z,{label:"📝商品详情",modelValue:U.desc,"onUpdate:modelValue":l[1]||(l[1]=e=>U.desc=e),type:"textarea",rows:"3",readonly:!0},null,8,["modelValue"]),(0,d.Wm)(z,{label:"🧩商品数量",modelValue:U.num,"onUpdate:modelValue":l[2]||(l[2]=e=>U.num=e),readonly:!0},null,8,["modelValue"]),(0,d.Wm)(z,{label:"🤖商品对象",modelValue:U.useName,"onUpdate:modelValue":l[3]||(l[3]=e=>U.useName=e),readonly:!0},null,8,["modelValue"]),(0,d.Wm)(z,{label:"🎁核实情况",modelValue:U.checkProduce,"onUpdate:modelValue":l[4]||(l[4]=e=>U.checkProduce=e),readonly:!0},null,8,["modelValue"]),(0,d.Wm)(z,{label:"⏱更新时间",modelValue:U.updateTime,"onUpdate:modelValue":l[5]||(l[5]=e=>U.updateTime=e),readonly:!0},null,8,["modelValue"]),(0,d.Wm)(z,{label:"📅注册时间",modelValue:U.registerTime,"onUpdate:modelValue":l[6]||(l[6]=e=>U.registerTime=e),readonly:!0},null,8,["modelValue"])])),_:1})])):(0,d.kq)("",!0)])]),(0,d.Wm)(j,{show:U.show,"onUpdate:show":l[7]||(l[7]=e=>U.show=e),"close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1,width:U.picturewidth},{default:(0,d.w5)((()=>[(0,d._)("div",V,[(0,d.Wm)(P,{width:"100vw",height:"100vw",position:"center",fit:"cover",src:U.imageUrl},null,8,["src"])])])),_:1},8,["show","width"]),(0,d.Wm)(j,{show:U.show_1,"onUpdate:show":l[8]||(l[8]=e=>U.show_1=e),"show-cancel-button":!1,"show-confirm-button":!1,width:"50vw"},{default:(0,d.w5)((()=>[_,W,(0,d.Wm)(q,{size:"40px",vertical:"","text-size":"15px",color:"#f19290"},{default:(0,d.w5)((()=>[(0,d.Uk)("🚀拼命加载中...")])),_:1}),H,T])),_:1},8,["show"])],64)}var x=a(2262),C=a(6154),D=a(2119),N={setup(){const e=(0,x.iH)();e.value=.8*window.innerWidth;const l=(0,D.tv)(),a=(0,x.iH)(!1),t=(0,x.iH)(!0),o=()=>a.value=!0,n=()=>l.replace("/Room"),i=(0,x.iH)(""),u=(0,x.iH)(""),r=(0,x.iH)(""),c=(0,x.iH)(""),s=(0,x.iH)(""),m=(0,x.iH)(""),p=(0,x.iH)(""),w=(0,x.iH)(""),h=(0,x.iH)(""),v=(0,x.iH)(""),f=localStorage.getItem("jwtToken");f||l.replace("/login");const g={Authorization:`Bearer ${f}`},y=()=>{C.Z.post("/api/loginToken?token="+f).then((e=>{0==e.data.code&&(console.error(e.data.data),l.replace("/login")),console.log(e.data.data)})).catch((e=>{console.error("请求loginToken接口失败",e),l.replace("/login")}))};(0,d.bv)((()=>{V(),y()}));const k=l.currentRoute.value.params.id;let b=k.replace(":","");const V=async()=>{try{const e=await C.Z.get(`/api/idRoom?id=${b}`,{headers:g});v.value=e.data.data;const l=e.data.data;i.value=l.produceImage,u.value=l.produceName,""==l.produceText?r.value="😂这个人很懒，没有填写相关的商品详情！":r.value=l.produceText,c.value=l.produceCredit,s.value=l.produceNum,m.value=l.useName,console.log(l.checkProduce),1==l.checkProduce?p.value="🥰商品已成功兑现":p.value="🧸商品还没能兑现呢，快去兑现吧！",w.value=l.registerTime,h.value=l.updateTime}catch(e){console.error("获取数据失败",e)}t.value=!1};return{resData:v,picturewidth:e,show:a,show_1:t,picture:o,onClickLeft:n,imageUrl:i,title:u,desc:r,credit:c,num:s,useName:m,checkProduce:p,registerTime:w,updateTime:h,fetchDataAndFillForm:V}}},P=a(3744);const z=(0,P.Z)(N,[["render",U]]);var L=z},5590:function(e,l,a){a(1958),a(368),a(6742),a(7179)}}]);
//# sourceMappingURL=571.e20c1f9d.js.map