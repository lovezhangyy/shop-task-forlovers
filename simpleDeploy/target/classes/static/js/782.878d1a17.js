"use strict";(self["webpackChunkyy2"]=self["webpackChunkyy2"]||[]).push([[782],{7782:function(e,l,t){t.r(l),t.d(l,{default:function(){return L}});var a=t(1116),o=(t(8825),t(2876)),n=(t(2278),t(5185)),i=(t(3349),t(3164)),r=(t(6335),t(8480)),u=(t(5590),t(2406)),c=(t(6615),t(6252));const s={style:{"--van-nav-bar-icon-color":"#f19290"}},d={class:"page-container"},m={class:"display_produce"},w=(0,c._)("br",null,null,-1),h={style:{display:"flex","justify-content":"center","align-items":"center"}},p=(0,c._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"},null,-1),v={style:{transform:"translateY(12vw)"}},f=(0,c._)("br",null,null,-1),g={style:{display:"flex","justify-content":"center","align-items":"center"}},_=(0,c._)("br",null,null,-1),y=(0,c._)("br",null,null,-1),b=(0,c._)("br",null,null,-1),k=(0,c._)("br",null,null,-1);function V(e,l,t,V,T,W){const U=u.l2,H=r.Ee,x=i.gN,C=n.l0,L=o.Vq,j=a.gb;return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c._)("div",s,[(0,c.Wm)(U,{title:V.title_head,"left-text":"","left-arrow":"",onClickLeft:V.onClickLeft},null,8,["title","onClickLeft"])]),(0,c._)("div",d,[(0,c._)("div",m,[w,(0,c.Wm)(C,{class:"form-container_user"},{default:(0,c.w5)((()=>[(0,c._)("div",h,[(0,c.Wm)(H,{width:"65vw",height:"65vw",position:"center",fit:"cover",round:"",src:V.imageUrl,onClick:V.picture},null,8,["src","onClick"])]),p,(0,c._)("div",v,[(0,c.Wm)(x,{label:"📌用户名称",modelValue:V.title,"onUpdate:modelValue":l[0]||(l[0]=e=>V.title=e),readonly:!0},null,8,["modelValue"]),(0,c.Wm)(x,{label:"📝用户详情",modelValue:V.desc,"onUpdate:modelValue":l[1]||(l[1]=e=>V.desc=e),type:"textarea",rows:"3",readonly:!0},null,8,["modelValue"]),(0,c.Wm)(x,{label:"💰pp币总数",modelValue:V.credit,"onUpdate:modelValue":l[2]||(l[2]=e=>V.credit=e),readonly:!0},null,8,["modelValue"]),(0,c.Wm)(x,{label:"⏱更新时间",modelValue:V.updateTime,"onUpdate:modelValue":l[3]||(l[3]=e=>V.updateTime=e),readonly:!0},null,8,["modelValue"]),(0,c.Wm)(x,{label:"📅注册时间",modelValue:V.registerTime,"onUpdate:modelValue":l[4]||(l[4]=e=>V.registerTime=e),readonly:!0},null,8,["modelValue"]),f])])),_:1})])]),(0,c.Wm)(L,{show:V.show,"onUpdate:show":l[5]||(l[5]=e=>V.show=e),"close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1,width:V.picturewidth},{default:(0,c.w5)((()=>[(0,c._)("div",g,[(0,c.Wm)(H,{width:"100vw",height:"100vw",position:"center",fit:"cover",src:V.imageUrl},null,8,["src"])])])),_:1},8,["show","width"]),(0,c.Wm)(L,{show:V.show_1,"onUpdate:show":l[6]||(l[6]=e=>V.show_1=e),"show-cancel-button":!1,"show-confirm-button":!1,width:"50vw"},{default:(0,c.w5)((()=>[_,y,(0,c.Wm)(j,{size:"40px",vertical:"","text-size":"15px",color:"#f19290"},{default:(0,c.w5)((()=>[(0,c.Uk)("🚀拼命加载中...")])),_:1}),b,k])),_:1},8,["show"])],64)}var T=t(2262),W=t(6154),U=t(2119),H={setup(){const e=(0,T.iH)();e.value=.8*window.innerWidth;const l=(0,T.iH)(""),t=(0,U.tv)(),a=(0,T.iH)(!1),o=(0,T.iH)(!0),n=()=>t.replace("/"),i=()=>a.value=!0,r=(0,T.iH)(""),u=(0,T.iH)(""),s=(0,T.iH)(""),d=(0,T.iH)(""),m=(0,T.iH)(""),w=(0,T.iH)(""),h=localStorage.getItem("jwtToken");h||t.replace("/login");const p={Authorization:`Bearer ${h}`},v=()=>{W.Z.post("/api/loginToken?token="+h).then((e=>{if(0==e.data.code)return console.error(e.data.data),void t.replace("/login");console.log(e.data.data)})).catch((e=>{console.error("请求loginToken接口失败",e),t.replace("/login")}))},f=t.currentRoute.value.params.id;let g=f.replace(":","");const _=async()=>{try{const e=await W.Z.get(`/api/selectUser?id=${g}`,{headers:p}),t=e.data.data;r.value=t.userImage,u.value=t.name,l.value=u.value,""==t.userText&&(s.value="😂这个人很懒，没有填写相关的任务详情！"),s.value=t.userText,d.value=t.credit,m.value=t.registerTime,w.value=t.updateTime}catch(e){console.error("获取数据失败",e)}o.value=!1};return(0,c.bv)((()=>{v(),_()})),{picturewidth:e,title_head:l,show:a,show_1:o,picture:i,onClickLeft:n,imageUrl:r,title:u,desc:s,credit:d,registerTime:m,updateTime:w}}},x=t(3744);const C=(0,x.Z)(H,[["render",V]]);var L=C},5590:function(e,l,t){t(1958),t(368),t(6742),t(7179)}}]);
//# sourceMappingURL=782.878d1a17.js.map