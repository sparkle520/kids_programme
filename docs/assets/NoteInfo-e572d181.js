import{z as _,_ as x,u as y,a as k,A as N,s as I,c as S,m as w,o as B,b as j,n as C,e as o,f as s,g as t,t as a,k as i,h as f,F as D,r as L,x as R,p as T,j as V}from"./index-44f81212.js";import{u as $}from"./note-38a7b855.js";const p=n=>{n?(_("--note_info_main_bg","#0b0e14"),_("--note_top_mid_box_h1_color","#ffff"),_("--read_btn_color","#fff"),_("--read_btn_bg","#2d3041"),_("--foot_bg","#242b3d")):(_("--note_info_main_bg","#fdfbfb"),_("--note_top_mid_box_h1_color","#ffff"),_("--read_btn_color","#ec3755"),_("--read_btn_bg","#ffff"),_("--foot_bg","#e96969"))};const c=n=>(T("data-v-319663d9"),n=n(),V(),n),F={id:"note_info_main",class:"flex flex_direction_column"},M={class:"note_top_box flex flex_direction_row relative"},z=["src"],A={key:1,class:"top_box_bg absolute",src:"https://pic.imgdb.cn/item/65cefd5f9f345e8d03620d1c.jpg",alt:""},E={class:"note_top_inner_box flex flex_direction_row"},U={class:"note_top_left_box"},q=["src"],G={key:1,src:"https://pic.imgdb.cn/item/65cefd5f9f345e8d03620d1c.jpg",alt:""},H={class:"note_top_mid_box flex flex_direction_column"},J={key:0,class:"load_status"},K={key:1,class:"finished_status"},O={key:0},P={key:1},Q=c(()=>t("div",{class:"note_top_right_box"},[t("div",{class:"card flex flex_direction_column"})],-1)),W={class:"note_directory_box flex flex_direction_column relative"},X=c(()=>t("h1",null,"目录",-1)),Y=c(()=>t("div",{class:"foot"},null,-1)),Z={__name:"NoteInfo",setup(n){const d=y();d.$subscribe((h,l)=>{p(l.theme)});const r=$(),m=k(),{params:b}=N();I(r);const v=S(),e=w();return B(()=>{e.value=r.get_note_by_id(b.id)}),j(()=>{p(d.theme),window.scrollTo(0,0)}),(h,l)=>{const g=C("NoteDirectoryList");return o(),s("div",F,[t("div",M,[e.value.img!=""?(o(),s("img",{key:0,class:"top_box_bg absolute",src:e.value.img,alt:""},null,8,z)):(o(),s("img",A)),t("div",E,[t("div",U,[e.value.img!=""?(o(),s("img",{key:0,src:e.value.img,alt:""},null,8,q)):(o(),s("img",G))]),t("div",H,[t("h1",null,a(e.value.name),1),t("p",null,a(e.value.short_message),1),t("span",null,[i(" 状态："),e.value.is_finished?(o(),s("span",K,"已完结 ")):(o(),s("span",J,"连载中... "))]),t("span",null,"更新时间："+a(e.value.update_date.split("?")[0])+"-"+a(e.value.update_date.split("?")[1])+"-"+a(e.value.update_date.split("?")[2])+" "+a(e.value.update_date.split("?")[3]),1),t("span",null,[i("作者："),e.value.author!=""?(o(),s("span",O,a(e.value.author),1)):(o(),s("span",P,a(f(m).name),1))]),t("span",null,"分类："+a(e.value.classification),1),t("span",null,[i("标签："),(o(!0),s(D,null,L(e.value.tags.split("?"),u=>(o(),s("span",null,a(u)+" ",1))),256))]),t("button",{class:"read_btn relative",onClick:l[0]||(l[0]=u=>f(v).push(`/note/book/${e.value.id}/1`))}," 点击阅读 ")]),Q])]),t("div",W,[X,R(g,{id:e.value.id,data:e.value.directory_list,class:"note_directory",col:"3"},null,8,["id","data"])]),Y])}}},oe=x(Z,[["__scopeId","data-v-319663d9"]]);export{oe as default};
