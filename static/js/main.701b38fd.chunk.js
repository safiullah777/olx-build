(this.webpackJsonpolx=this.webpackJsonpolx||[]).push([[0],{71:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s(3),c=s.n(n),i=s(32),l=s.n(i),o=(s(71),s(23)),r=s(16),d=s(25),j=s(24),m=s(54),b=s.n(m),h=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"categories",children:[Object(a.jsxs)("h4",{className:"all",children:["ALL CATEGORIES ",Object(a.jsx)(b.a,{className:"downarrow"})]}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("a",{href:"",children:Object(a.jsx)("li",{children:"Mobile Phones"})}),Object(a.jsx)("a",{href:"",children:Object(a.jsx)("li",{children:"Cars"})}),Object(a.jsx)("a",{href:"",children:Object(a.jsx)("li",{children:"Motorcycles"})}),Object(a.jsx)("a",{href:"",children:Object(a.jsx)("li",{children:"Houses"})}),Object(a.jsx)("a",{href:"",children:Object(a.jsx)("li",{children:"Tv-Video-Audio"})}),Object(a.jsx)("a",{href:"",children:Object(a.jsx)("li",{children:"Tablets"})}),Object(a.jsx)("a",{href:"",children:Object(a.jsx)("li",{children:"Land & Ports"})})]})]})}}]),s}(c.a.Component),u=s(101),x=s(56),p=s.n(x),g=s(55),O=s.n(g),f=s(102),y=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"image"}),Object(a.jsxs)("div",{className:"recom",children:[Object(a.jsx)("span",{children:"Fresh recommendations"}),Object(a.jsx)("div",{className:"cards",style:{position:"relative"},children:Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:"https://apollo-singapore.akamaized.net:443/v1/files/b2j6d53d6eru3-PK/image;s=272x0",alt:""}),Object(a.jsx)(f.a,{style:{position:"absolute",left:"225px"},control:Object(a.jsx)(u.a,{icon:Object(a.jsx)(O.a,{}),checkedIcon:Object(a.jsx)(p.a,{}),name:"checkedH"}),label:""}),Object(a.jsx)("h3",{style:{margin:"10px 25px 0px"},children:"Rs 19,000,000"}),Object(a.jsx)("div",{style:{margin:"0px 20px",fontSize:"14px"},children:"toyota corolla"}),Object(a.jsx)("div",{style:{margin:"0px 20px",fontSize:"14px",color:"gray"},children:"toyaota col=rolla 2017 model"}),Object(a.jsx)("div",{style:{margin:"10px 20px",fontSize:"10px",color:"gray"},id:"location",children:"KARACHI"})]})})]})]})}}]),s}(c.a.Component),v=s(38),N=s.n(v),C=s(39),k=s.n(C),L=s(40),S=s.n(L),E=s(41),B=s.n(E),T=s(42),_=s.n(T),I=s(43),P=s.n(I),w=s(18),A=s.n(w),R=(c.a.Component,s(100)),M=s(58).a.initializeApp({apiKey:"AIzaSyBql1TakT9rLF1KwAJGfGF4j9Z0SxLPoP8",authDomain:"olx-assignment777.firebaseapp.com",databaseURL:"https://olx-assignment777.firebaseio.com",projectId:"olx-assignment777",storageBucket:"olx-assignment777.appspot.com",messagingSenderId:"823650516167",appId:"1:823650516167:web:941a47ecbca7c5af4152e2",measurementId:"G-KQGP7HK4YR"}),F=(c.a.Component,function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).upload_file=function(t){var s=M.storage().ref().child("images/"+e.state._file[t].name).put(e.state._file[0]);s.on("state_changed",(function(e){console.log(e)}),(function(e){}),(function(){s.snapshot.ref.getDownloadURL().then((function(e){console.log("File available at",e);var t=[];t.push(e),console.log(t)}))}))},e.send_data=function(){M.database().ref("Data").push({category:e.state.category,condition:e.state.condition,type:e.state.type,company:e.state.company,title:e.state.title,description:e.state.description,price:e.state.price,_state:e.state._state,city:e.state.city,neighbourhood:e.state.neighbourhood,name:e.state.name,phone_no:e.state.phone_no,file:e.state._file,imageURL:e.state.imageURL})},e.state={category:"",condition:"",type:"",company:"",title:"",description:"",price:"",_state:"",city:"",neighbourhood:"",name:"",phone_no:"",_file:[],imageURL:[]},e}return Object(r.a)(s,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"heading",children:"POST YOUR AD"}),Object(a.jsxs)("div",{className:"choose",children:[console.log(this.state._file),Object(a.jsx)("h3",{children:"CHOOSE A CATEGORY"}),Object(a.jsxs)("ul",{className:"list",children:[Object(a.jsxs)("li",{onClick:function(){document.getElementsByClassName("choose")[0].style="display:none",document.getElementsByClassName("details")[0].style="display:block !important",e.setState({category:"Mobiles/Tabs"})},children:[Object(a.jsx)(N.a,{})," ",Object(a.jsx)("span",{className:"item",children:"Mobiles/Tabs"}),Object(a.jsx)(A.a,{className:"forwardarrow"})]}),Object(a.jsxs)("li",{onClick:function(){document.getElementsByClassName("choose")[0].style="display:none",document.getElementsByClassName("details")[0].style="display:block !important",e.setState({category:"Vehicles"})},children:[Object(a.jsx)(k.a,{}),Object(a.jsx)("span",{className:"item",children:"Vehicles"}),Object(a.jsx)(A.a,{className:"forwardarrow"})]}),Object(a.jsxs)("li",{onClick:function(){document.getElementsByClassName("choose")[0].style="display:none",document.getElementsByClassName("details")[0].style="display:block !important",e.setState({category:"Property for Sale"})},children:[Object(a.jsx)(S.a,{}),Object(a.jsx)("span",{className:"item",children:"Property for Sale"}),Object(a.jsx)(A.a,{className:"forwardarrow"})]}),Object(a.jsxs)("li",{onClick:function(){document.getElementsByClassName("choose")[0].style="display:none",document.getElementsByClassName("details")[0].style="display:block !important",e.setState({category:"Electronics & Home Appliances"})},children:[Object(a.jsx)(B.a,{}),Object(a.jsx)("span",{className:"item",children:"Electronics & Home Appliances"}),Object(a.jsx)(A.a,{className:"forwardarrow"})]}),Object(a.jsxs)("li",{onClick:function(){document.getElementsByClassName("choose")[0].style="display:none",document.getElementsByClassName("details")[0].style="display:block !important",e.setState({category:"Furniture & Home Decor"})},children:[Object(a.jsx)(_.a,{}),Object(a.jsx)("span",{className:"item",children:"Furniture & Home Decor"}),Object(a.jsx)(A.a,{className:"forwardarrow"})]}),Object(a.jsxs)("li",{onClick:function(){document.getElementsByClassName("choose")[0].style="display:none",document.getElementsByClassName("details")[0].style="display:block !important",e.setState({category:"Books, Sports & Hobbies"})},children:[Object(a.jsx)(P.a,{}),Object(a.jsx)("span",{className:"item",children:"Books, Sports & Hobbies"}),Object(a.jsx)(A.a,{className:"forwardarrow"})]})]})]}),Object(a.jsxs)("div",{className:"details",children:[Object(a.jsxs)("div",{className:"head",children:[Object(a.jsx)("h3",{children:"Selected Categories"}),Object(a.jsx)("span",{className:"selected-cat",children:this.state.category})]}),Object(a.jsxs)("div",{className:"lower",children:[Object(a.jsx)("h3",{children:"INCLUDE SOME details"}),Object(a.jsxs)("div",{className:"condition",children:[Object(a.jsx)("span",{children:"Condition *"}),Object(a.jsx)("button",{onClick:function(t){e.setState({condition:t.target.innerText});for(var s=document.getElementsByClassName("focus"),a=0;a<s.length;a++)s[a].classList.remove("focus");t.target.classList.add("focus")},children:"New"}),Object(a.jsx)("button",{onClick:function(t){e.setState({condition:t.target.innerText});for(var s=document.getElementsByClassName("focus"),a=0;a<s.length;a++)s[a].classList.remove("focus");t.target.classList.add("focus")},children:"Used"})]}),Object(a.jsxs)("div",{className:"condition",children:[Object(a.jsx)("span",{children:"Mobile/Tablet *"}),Object(a.jsx)("button",{onClick:function(t){e.setState({type:t.target.innerText});for(var s=document.getElementsByClassName("mobtab"),a=0;a<s.length;a++)s[a].classList.remove("mobtab");e.setState({mobtab:"Mobile"}),t.target.classList.add("mobtab")},children:"Mobile"}),Object(a.jsx)("button",{onClick:function(t){e.setState({type:t.target.innerText});for(var s=document.getElementsByClassName("mobtab"),a=0;a<s.length;a++)s[a].classList.remove("mobtab");e.setState({mobtab:"Tablet"}),t.target.classList.add("mobtab")},children:"Tablet"})]}),"Mobile"===this.state.mobtab?Object(a.jsxs)("div",{className:"mobdiv",children:[Object(a.jsx)("span",{className:"make",children:"make*"}),Object(a.jsxs)("select",{onChange:function(t){return e.setState({company:t.target[t.target.selectedIndex].value})},onClick:function(e){e.target.classList.add("mobfocus")},className:"moblist company",id:"moblist",width:"100%",children:[Object(a.jsx)("option",{value:""}),Object(a.jsx)("option",{selected:!0,value:"Apple",children:"Apple"}),Object(a.jsx)("option",{value:"Samsung",children:"Samsung"})]})]}):"Tablet"===this.state.mobtab&&Object(a.jsxs)("div",{className:"tablist condition",children:[Object(a.jsx)("button",{onClick:function(t){e.setState({company:t.target.innerText});for(var s=document.getElementsByClassName("tablet"),a=0;a<s.length;a++)s[a].classList.remove("tablet");t.target.classList.add("tablet")},children:"Apple"}),Object(a.jsx)("button",{onClick:function(t){e.setState({company:t.target.innerText});for(var s=document.getElementsByClassName("tablet"),a=0;a<s.length;a++)s[a].classList.remove("tablet");t.target.classList.add("tablet")},children:"Dany Tabs"}),Object(a.jsx)("button",{onClick:function(t){e.setState({company:t.target.innerText});for(var s=document.getElementsByClassName("tablet"),a=0;a<s.length;a++)s[a].classList.remove("tablet");t.target.classList.add("tablet")},children:"Q Tabs"}),Object(a.jsx)("button",{onClick:function(t){e.setState({company:t.target.innerText});for(var s=document.getElementsByClassName("tablet"),a=0;a<s.length;a++)s[a].classList.remove("tablet");t.target.classList.add("tablet")},children:"Samsung"}),Object(a.jsx)("button",{onClick:function(t){e.setState({company:t.target.innerText});for(var s=document.getElementsByClassName("tablet"),a=0;a<s.length;a++)s[a].classList.remove("tablet");t.target.classList.add("tablet")},children:"Other Tablets"})]}),Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("span",{className:"make",children:"ad title*"}),Object(a.jsx)("input",{type:"text",maxLength:"70",onClick:function(e){e.target.classList.remove("red"),e.target.classList.add("titleinput1"),document.getElementsByClassName("checktext")[0].innerText="Mention the key features of your item (e.g. brand, model, age, type)",document.getElementsByClassName("checktext")[0].classList.remove("red1")},onChange:function(t){return e.setState({title:t.target.value}),document.getElementsByClassName("counter")[0].innerText=t.target.value.length+"/70",t.target.value.length>=5&&(t.target.classList.remove("red"),document.getElementsByClassName("checktext")[0].classList.remove("red1"))},onBlur:function(e){e.target.value.length<5&&(e.target.classList.add("red"),document.getElementsByClassName("checktext")[0].classList.add("red1"),document.getElementsByClassName("checktext")[0].innerText="A minimum length of 5 characters is required. Please edit the field.")},className:"titleinput"}),Object(a.jsx)("span",{className:"checktext",children:"Mention the key features of your item (e.g. brand, model, age, type)"}),Object(a.jsx)("span",{className:"counter",children:"0/70"})]}),Object(a.jsxs)("div",{className:"description",children:[Object(a.jsx)("span",{className:"make",children:"description*"}),Object(a.jsx)("textarea",{onChange:function(t){return e.setState({description:t.target.value}),document.getElementsByClassName("counter")[1].innerText=t.target.value.length+"/4096",t.target.value.length>=20&&(t.target.classList.remove("red"),document.getElementsByClassName("checktext")[1].classList.remove("red1"))},onClick:function(e){e.target.classList.add("titleinput1"),e.target.classList.remove("red"),document.getElementsByClassName("checktext")[1].innerText="Include condition, features and reason for selling",document.getElementsByClassName("checktext")[1].classList.remove("red1")},name:"",onBlur:function(e){e.target.value.length<20&&(e.target.classList.add("red"),document.getElementsByClassName("checktext")[1].classList.add("red1"),document.getElementsByClassName("checktext")[1].innerText="A minimum length of 20 characters is required. Please edit the field.")},id:"description",maxLength:"4096"}),Object(a.jsx)("span",{className:"checktext",children:"Include condition, features and reason for selling"}),Object(a.jsx)("span",{className:"counter",children:"0/4096"})]}),Object(a.jsxs)("div",{className:"price",children:[Object(a.jsx)("h3",{children:"SET A PRICE"}),Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("span",{className:"make",children:"price*"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"rs",children:"Rs"}),Object(a.jsx)("input",{onChange:function(t){return e.setState({price:t.target.value})},id:"price",type:"number",onClick:function(e){e.target.classList.add("titleinput1")},className:"titleinput"})]})]})]}),Object(a.jsxs)("div",{id:"photo",children:[Object(a.jsx)("h3",{children:"UPLOAD UPO 12 PHOtOS"}),Object(a.jsxs)("div",{className:"photos",children:[Object(a.jsx)("input",{type:"file",name:"",onChange:function(t){return e.state._file[0]=t.target.files[0],e.upload_file(0),e.setState({_file:e.state._file})},className:"addphoto",id:""}),Object(a.jsx)("input",{type:"file",name:"",onChange:function(t){return e.state._file[1]=t.target.files[0],e.upload_file(1),e.setState({_file:e.state._file})},className:"addphoto",id:""}),Object(a.jsx)("input",{type:"file",name:"",onChange:function(t){return e.state._file[2]=t.target.files[0],e.upload_file(2),e.setState({_file:e.state._file})},className:"addphoto",id:""}),Object(a.jsx)("input",{type:"file",name:"",onChange:function(t){return e.state._file[3]=t.target.files[0],e.upload_file(3),e.setState({_file:e.state._file})},className:"addphoto",id:""})]})]}),Object(a.jsxs)("div",{className:"condition title",children:[Object(a.jsx)("h3",{children:"CONFIRM YOUR LOCATION"}),Object(a.jsx)("span",{children:"State*"}),Object(a.jsxs)("select",{className:"titleinput",onChange:function(t){return e.setState({_state:t.target[t.target.selectedIndex].value}),t.target[t.target.selectedIndex].value.length>0?(document.getElementById("city").classList.remove("none"),document.getElementById("city").classList.add("block")):document.getElementById("city").classList.add("none")},placeholder:"enter your state",name:"",id:"",onClick:function(e){e.target.classList.add("titleinput1")},children:[Object(a.jsx)("option",{value:""}),Object(a.jsx)("option",{value:"Sindh",children:"Sindh"}),Object(a.jsx)("option",{value:"Punjab",children:"Panjab"}),Object(a.jsx)("option",{value:"Punjab",children:"Balochistan"}),Object(a.jsx)("option",{value:"Punjab",children:"Khyber Pakhtunkhwa"}),Object(a.jsx)("option",{value:"Punjab",children:"Northen Areas"}),Object(a.jsx)("option",{value:"Punjab",children:"Islamabad Capital Territory"})]}),Object(a.jsxs)("div",{id:"city",className:"condition none",children:[Object(a.jsx)("span",{children:"City*"}),Object(a.jsx)("input",{type:"text",onChange:function(t){return e.setState({city:t.target.value}),t.target.value.length>=3?(document.getElementById("neighbourhood").classList.remove("none"),document.getElementById("neighbourhood").classList.add("block")):document.getElementById("neighbourhood").classList.add("none")},placeholder:"enter your city name",className:"titleinput",onClick:function(e){e.target.classList.add("titleinput1")}})]}),Object(a.jsxs)("div",{id:"neighbourhood",className:"condition none",children:[Object(a.jsx)("span",{children:"Neighbourhood*"}),Object(a.jsx)("input",{type:"text",className:"titleinput",onChange:function(t){e.setState({neighbourhood:t.target.value})},onClick:function(e){e.target.classList.add("titleinput1")}})]})]}),Object(a.jsxs)("div",{className:"condition title",children:[Object(a.jsx)("h3",{children:"REVIEW YOUR DETAILS"}),Object(a.jsx)("span",{children:"Name"}),Object(a.jsx)("input",{type:"text",onChange:function(t){e.setState({name:t.target.value})},className:"titleinput",onClick:function(e){e.target.classList.add("titleinput1")}}),Object(a.jsx)("span",{children:"Mobile Phone Number*"}),Object(a.jsx)("input",{type:"text",className:"titleinput",onChange:function(t){e.setState({phone_no:t.target.value})},onClick:function(e){e.target.classList.add("titleinput1")}})]}),Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"condition title",children:Object(a.jsx)(R.a,{variant:"contained",onClick:function(){e.send_data()},children:"Postnow"})})})]})]})]})}}]),s}(c.a.Component)),H=s.p+"static/media/olx.c43bc258.png",U=s(47),D=s.n(U),z=s(57),K=s.n(z),G=s(44),Y=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"header",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:H,alt:"",className:"logo"}),Object(a.jsx)("div",{className:"search",children:Object(a.jsx)(D.a,{className:"search1",style:{fontSize:35}})}),Object(a.jsx)("input",{type:"search",name:"",id:"search"}),Object(a.jsx)("input",{type:"search",name:"",id:"search2",placeholder:"Find Cars, Mobile Phones and more..."}),Object(a.jsx)("div",{className:"search1",children:Object(a.jsx)(D.a,{style:{fontSize:35},className:"search_icon"})}),Object(a.jsxs)("h4",{className:"login",children:["Login ",Object(a.jsx)("span",{})]}),Object(a.jsx)(G.b,{to:"/postad",children:Object(a.jsxs)("button",{className:"sell-btn",children:[Object(a.jsx)(K.a,{className:"addicon"})," SELL"]})})]})})}}]),s}(c.a.Component);var V=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Y,{}),Object(a.jsx)(h,{}),Object(a.jsx)(y,{})]})},q=s(10);var J=function(){return Object(a.jsxs)(G.a,{children:[Object(a.jsx)(q.a,{path:"/",exact:!0,component:V}),Object(a.jsx)(q.a,{path:"/postad",exact:!0,component:F})]})},Q=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,103)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))};s(81);l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root")),Q()}},[[82,1,2]]]);
//# sourceMappingURL=main.701b38fd.chunk.js.map