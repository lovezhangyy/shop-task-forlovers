"use strict";(self["webpackChunkyy2"]=self["webpackChunkyy2"]||[]).push([[927],{7927:function(e,l,t){t.r(l),t.d(l,{default:function(){return j}});var a=t(1116),o=(t(8825),t(2876)),n=(t(2278),t(5185)),i=(t(3349),t(6907)),r=(t(4746),t(3164)),c=(t(6335),t(8480)),u=(t(5590),t(2406)),s=(t(6615),t(6252));const d={style:{"--van-nav-bar-icon-color":"#f19290"}},m={class:"page-container"},w={class:"display_produce"},h={style:{display:"flex","justify-content":"center","align-items":"center"}},v=(0,s._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"},null,-1),p={style:{transform:"translateY(3.5vh)"}},f={style:{transform:"translateY(3.5vh)"}},g={style:{display:"flex","justify-content":"center","align-items":"center"}},y=(0,s._)("br",null,null,-1),_=(0,s._)("br",null,null,-1),b=(0,s._)("br",null,null,-1),k=(0,s._)("br",null,null,-1);function V(e,l,t,V,T,U){const W=u.l2,x=c.Ee,H=r.gN,C=i.zx,j=n.l0,z=o.Vq,L=a.gb;return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",d,[(0,s.Wm)(W,{title:V.title_head,"left-text":"","left-arrow":"",onClickLeft:V.onClickLeft},null,8,["title","onClickLeft"])]),(0,s._)("div",m,[(0,s._)("div",w,[(0,s.Wm)(j,{class:"form-container"},{default:(0,s.w5)((()=>[(0,s._)("div",h,[(0,s.Wm)(x,{width:"64vw",height:"64vw",position:"center",fit:"cover",round:"",src:V.imageUrl,onClick:V.picture},null,8,["src","onClick"])]),v,(0,s._)("div",p,[(0,s.Wm)(H,{label:"📌用户名称",modelValue:V.title,"onUpdate:modelValue":l[0]||(l[0]=e=>V.title=e),readonly:!0},null,8,["modelValue"]),(0,s.Wm)(H,{label:"📝用户详情",modelValue:V.desc,"onUpdate:modelValue":l[1]||(l[1]=e=>V.desc=e),type:"textarea",rows:"3",readonly:!0},null,8,["modelValue"]),(0,s.Wm)(H,{label:"💰pp币总数",modelValue:V.credit,"onUpdate:modelValue":l[2]||(l[2]=e=>V.credit=e),readonly:!0},null,8,["modelValue"]),(0,s.Wm)(H,{label:"⏱更新时间",modelValue:V.updateTime,"onUpdate:modelValue":l[3]||(l[3]=e=>V.updateTime=e),readonly:!0},null,8,["modelValue"]),(0,s.Wm)(H,{label:"📅注册时间",modelValue:V.registerTime,"onUpdate:modelValue":l[4]||(l[4]=e=>V.registerTime=e),readonly:!0},null,8,["modelValue"]),(0,s._)("div",f,[(0,s.Wm)(C,{round:"",block:"",color:"#F19290","native-type":"submit",onClick:V.logout},{default:(0,s.w5)((()=>[(0,s.Uk)(" 退出登录 ")])),_:1},8,["onClick"])])])])),_:1})])]),(0,s.Wm)(z,{show:V.show,"onUpdate:show":l[5]||(l[5]=e=>V.show=e),"close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1,width:V.picturewidth},{default:(0,s.w5)((()=>[(0,s._)("div",g,[(0,s.Wm)(x,{width:"100vw",height:"100vw",position:"center",fit:"cover",src:V.imageUrl},null,8,["src"])])])),_:1},8,["show","width"]),(0,s.Wm)(z,{show:V.show_1,"onUpdate:show":l[6]||(l[6]=e=>V.show_1=e),"show-cancel-button":!1,"show-confirm-button":!1,width:"50vw"},{default:(0,s.w5)((()=>[y,_,(0,s.Wm)(L,{size:"40px",vertical:"","text-size":"15px",color:"#f19290"},{default:(0,s.w5)((()=>[(0,s.Uk)("🚀拼命加载中...")])),_:1}),b,k])),_:1},8,["show"])],64)}var T=t(2262),U=t(6154),W=t(2119),x={setup(){const e=(0,T.iH)();e.value=.8*window.innerWidth;const l=(0,T.iH)(""),t=(0,W.tv)(),a=(0,T.iH)(!1),o=(0,T.iH)(!0),n=()=>t.replace("/User"),i=()=>a.value=!0,r=(0,T.iH)(""),c=(0,T.iH)(""),u=(0,T.iH)(""),d=(0,T.iH)(""),m=(0,T.iH)(""),w=(0,T.iH)(""),h=localStorage.getItem("jwtToken");h||t.replace("/login");const v={Authorization:`Bearer ${h}`},p=()=>{U.Z.post("/api/loginToken?token="+h).then((e=>{if(0==e.data.code)return console.error(e.data.data),void t.replace("/login");console.log(e.data.data)})).catch((e=>{console.error("请求loginToken接口失败",e),t.replace("/login")}))},f=t.currentRoute.value.params.id;let g=f.replace(":","");const y=async()=>{try{const e=await U.Z.get(`/api/selectUser?id=${g}`,{headers:v}),t=e.data.data;r.value=t.userImage,c.value=t.name,l.value=c.value,""==t.userText&&(u.value="😂这个人很懒，没有填写相关的任务详情！"),u.value=t.userText,d.value=t.credit,m.value=t.registerTime,w.value=t.updateTime}catch(e){console.error("获取数据失败",e)}o.value=!1};(0,s.bv)((()=>{p(),y()}));const _=()=>{localStorage.removeItem("jwtToken"),t.replace("/login")};return{picturewidth:e,title_head:l,show:a,show_1:o,picture:i,onClickLeft:n,imageUrl:r,title:c,desc:u,credit:d,registerTime:m,updateTime:w,fetchDataAndFillForm:y,logout:_}}},H=t(3744);const C=(0,H.Z)(x,[["render",V]]);var j=C},5590:function(e,l,t){t(1958),t(368),t(6742),t(7179)}}]);
//# sourceMappingURL=927.0304df9a.js.map