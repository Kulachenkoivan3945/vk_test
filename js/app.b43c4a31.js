(function(){"use strict";var e={3020:function(e,s,t){var i=t(9242),o=t(3396);function r(e,s,t,i,r,n){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a,null,{default:(0,o.w5)((({Component:s})=>[((0,o.wg)(),(0,o.j4)(o.Ob,null,[e.$route.meta.keepAlive?((0,o.wg)(),(0,o.j4)((0,o.LL)(s),{key:0})):(0,o.kq)("",!0)],1024)),e.$route.meta.keepAlive?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)((0,o.LL)(s),{key:0}))])),_:1})}var n={name:"App",components:{},data(){return{}},created(){localStorage.getItem("sourceList")&&this.$store.commit("setSourceList",JSON.parse(localStorage.getItem("sourceList"))),localStorage.getItem("friendsInSource")&&this.$store.commit("setFriendsInSource",JSON.parse(localStorage.getItem("friendsInSource")))}},a=t(89);const l=(0,a.Z)(n,[["render",r]]);var u=l,c=(t(7658),t(65)),h=(0,c.MT)({state:{apiConfig:{appID:"51774176",version:"5.154"},searchResults:[],sourceList:[],friendsInSource:[]},getters:{isInSourceList:e=>s=>{let t=e.sourceList.findIndex((e=>e.id==s));return-1!=t},getFriendsInSource:e=>e.friendsInSource},mutations:{setSourceList(e,s){e.sourceList=s},setFriendsInSource(e,s){e.friendsInSource=s,localStorage.setItem("friendsInSource",JSON.stringify(e.friendsInSource))},setSearchResults(e,s){e.searchResults=s},addToSourceList(e,s){e.sourceList.push(s),localStorage.setItem("sourceList",JSON.stringify(e.sourceList))},removeFromSourceList(e,s){let t=e.sourceList.findIndex((e=>e.id==s.id));e.sourceList.splice(t,1),localStorage.setItem("sourceList",JSON.stringify(e.sourceList))}},actions:{},modules:{}}),d=t(2483);const g={class:"home"},A={class:"search"},p={class:"search-results"},f={class:"source-list"},m={class:"friends"};function w(e,s,t,i,r,n){const a=(0,o.up)("SearchBar"),l=(0,o.up)("UsersList");return(0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("section",A,[(0,o.Wm)(a,{onOnSearched:n.setSearchResults},null,8,["onOnSearched"])]),(0,o._)("section",p,[r.isSearchListShowed?((0,o.wg)(),(0,o.j4)(l,{key:0,items:e.searchResults,startState:!1,mode:"search",title:"Количество результатов по вашему запросу : ",onOnHide:s[0]||(s[0]=e=>r.isSearchListShowed=!1)},null,8,["items"])):(0,o.kq)("",!0)]),(0,o._)("section",f,[r.isConnected?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:0,class:"btn-add",onClick:s[1]||(s[1]=(...e)=>n.logIn&&n.logIn(...e))}," Авторизоваться (без этого функционал недоступен) ")),r.isSourceListShowed?((0,o.wg)(),(0,o.j4)(l,{key:2,items:e.sourceList,startState:r.isSourceListShowed,mode:"source",title:"Количество пользователей в исходном списке : ",onOnHide:s[3]||(s[3]=e=>r.isSourceListShowed=!1)},null,8,["items","startState"])):((0,o.wg)(),(0,o.iD)("button",{key:1,class:"btn-add",onClick:s[2]||(s[2]=e=>r.isSourceListShowed=!0)},"Показать исходный список"))]),(0,o._)("section",m,[r.isFriendsListShowed?((0,o.wg)(),(0,o.j4)(l,{key:1,items:r.friendsList,startState:r.isFriendsListShowed,mode:"friends",title:"Количество пользователей в списке друзей: ",onOnHide:s[5]||(s[5]=e=>r.isFriendsListShowed=!1)},null,8,["items","startState"])):((0,o.wg)(),(0,o.iD)("button",{key:0,class:"btn-add",onClick:s[4]||(s[4]=(...e)=>n.buildFriendsList&&n.buildFriendsList(...e))},"Построить"))])])}var L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAlxJREFUOE+dVTGLE0EUfm9OjYeeIZCAYJEU1wVC2oA7k+5ATOOSSlTUykYshCtOlMMDRbn8hCtULIRdEGNtZpJ06YUgh0o0kAQ5OCMRzD6ZIRvGdfdAq5m3M++b9733vbdYr9dXAADG4zHqNZfLUWjb++hZaEf9UAPaH/VeKbVFRJsAsKodAeAnIjY45/cXtnk49LPBsVqtHgs/NJvNs7PZ7DMAsIVjsFhDm1Kp1HqtVvsUB6bvGkD9WqvVWp1MJocLgGY+n68XCoVf2h4MBiv7+/vPiaiu7XQ6nSmXy9/jaC8pSyk/AEAeEbc55zshNXtVSt0mol0AGAkhztm0w3wbQCu6mRBiLQ4sdJZSfgOAtaQoDeV2u30hCILXiPjITnxcAZRSd4joKWPsmuM4L6PFMRF6nqepNBhjlxzHeWNHGHXodDrn5/P5O0R86LrudrQ4BtD3/Y0gCN4i4hPO+dZR0vA87y4RPWaMXXYc51X0rqHc7/dPDIfDqdabEOJ0tHq2LaU8AIBTmUwmXSqVfkTvLnUopXwPAOuIuOu67maczpRS94joAQB8EUIUjpSNFaW+J7PZ7MVisTjTOVRKnRyNRh4AbBjxIr7gnF9PlE0YTa/Xy0yn068AYLoHAExfawyrc0zXIOIzzvnNRMr2a0qpW0SkxX1mAXSIiDuc80a73b4SBMFeCOq67g07PcvWS+rNuCHg+/5VG9SO9I9pE5fkpIeSIl1W+V/AwqhtUCHEcZMGe3xF52KcwKMp6Ha7ZcbYQaVS+ajPDGXt+D9gcfn9a2Ingcf9DuJ+G78BR57ZovdonTQAAAAASUVORK5CYII=";const I=e=>((0,o.dD)("data-v-75c4f367"),e=e(),(0,o.Cn)(),e),k={for:"searchBar"},v=I((()=>(0,o._)("img",{src:L,alt:""},null,-1))),S={key:0,class:"auto-complete"},y={key:0},_=["onClick"],D={key:1};function C(e,s,t,r,n,a){const l=(0,o.up)("UserInfoMin");return(0,o.wg)(),(0,o.iD)("div",{class:"search-container",onMouseleave:s[4]||(s[4]=e=>n.isSearched=!1),onMouseover:s[5]||(s[5]=e=>n.isSearched=!0)},[(0,o._)("label",k,[v,(0,o.wy)((0,o._)("input",{type:"search",id:"searchBar",name:"searchBar","onUpdate:modelValue":s[0]||(s[0]=e=>n.query=e),onInput:s[1]||(s[1]=(...e)=>a.fastSearch&&a.fastSearch(...e)),onKeydown:s[2]||(s[2]=(0,i.D2)(((...e)=>a.search&&a.search(...e)),["enter"])),placeholder:"Введите запрос..."},null,544),[[i.nr,n.query]]),(0,o._)("button",{onClick:s[3]||(s[3]=(...e)=>a.search&&a.search(...e))},"найти")]),(0,o.Wm)(i.uT,{name:"fade"},{default:(0,o.w5)((()=>[n.isSearched&&""!=n.query?((0,o.wg)(),(0,o.iD)("div",S,[n.autoCompleteResults.length>0?((0,o.wg)(),(0,o.iD)("ul",y,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.autoCompleteResults,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e,onClick:s=>a.selectQueryItem(e)},[(0,o.Wm)(l,{userInfo:e},null,8,["userInfo"])],8,_)))),128))])):((0,o.wg)(),(0,o.iD)("p",D,"По вашему запросу ничего не найдено"))])):(0,o.kq)("",!0)])),_:1})],32)}var b=t(7020),O=t.n(b);class F{constructor(){this.appID="51776175",this.v="5.154",this.init()}init(){O().init({apiId:this.appID})}checkConnection(e){O().Auth.getLoginStatus(e)}login(e){O().Auth.login(e)}getInfo(e,s,t){s.v=this.v,O().Api.call(e,s,t)}}var E=new F,N=t(7139);const R={class:"user-info-min"},U=["src"];function z(e,s,t,i,r,n){return(0,o.wg)(),(0,o.iD)("div",R,[(0,o._)("img",{src:t.userInfo.photo_50,alt:""},null,8,U),(0,o._)("p",null,(0,N.zw)(t.userInfo.first_name)+" "+(0,N.zw)(t.userInfo.last_name),1)])}var M={name:"UserInfoMin",props:["userInfo"]};const P=(0,a.Z)(M,[["render",z],["__scopeId","data-v-83c710fa"]]);var x=P,Y=t(4806),B=t.n(Y),V={name:"SearchBar",components:{UserInfoMin:x},data(){return{query:"",autoCompleteResults:[],isSearched:!1}},watch:{query(e){document.querySelector(".search-container").style.maxHeight=""!=e?"400px":"40px"},isSearched(e){document.querySelector(".search-container").style.maxHeight=e?"400px":"40px"}},methods:{selectQueryItem(e){this.query=`${e.first_name} ${e.last_name}`,this.search()},search(){this.isSearched=!1,E.getInfo("users.search",{q:this.query,fields:"sex,photo_100,bdate",count:100,language:"ru"},(e=>{try{this.$store.commit("setSearchResults",e.response.items),this.$emit("onSearched")}catch{this.isSearched=!1,this.$emit("onSearched"),this.$store.commit("setSearchResults",[])}}))},fastSearch:B().debounce((function(){this.isSearched=!0,E.getInfo("users.search",{q:this.query,fields:"photo_50",count:5,language:"ru"},(e=>{try{this.autoCompleteResults=e.response.items}catch{this.isSearched=!1,this.autoCompleteResults=[]}}))}),200)},created(){},mounted(){}};const H=(0,a.Z)(V,[["render",C],["__scopeId","data-v-75c4f367"]]);var q=H,W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAFdQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Dim1fwAAABx0Uk5TADNCAT04QcpQSchMy8lcT0jS1VvW3FFGTQJHQIpKf1gAAAABYktHRBycBEEHAAAACXBIWXMAAAAnAAAAJwEqCZFPAAAAgElEQVQ4y92QWQ6AMAgFcae1rnX3/vdUE2MECweQP5gJLQ/gRxXFCZukGWnzAik3tqQDdMQwVc1XEiPAiRHkL0PgjyHy21D4ZTStxgGarvcah3YYJ42byk8ONX6+j7Jx/180nvsE43V/0CD5BAyW38dILcsP3Uz6bFnZym2HH9UBeZEFV9HKSGUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDItMTRUMTA6MzU6MDIrMDE6MDD1ZNrFAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTAyLTE0VDEwOjM1OjAyKzAxOjAwhDlieQAAAEZ0RVh0c29mdHdhcmUASW1hZ2VNYWdpY2sgNi43LjgtOSAyMDE2LTA2LTE2IFExNiBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZ+a/NLYAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6aGVpZ2h0ADUxMsDQUFEAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANTEyHHwD3AAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNDg3MDY0OTAy20ZKigAAABN0RVh0VGh1bWI6OlNpemUAMy4zNktCQoE1tJQAAABPdEVYdFRodW1iOjpVUkkAZmlsZTovLy4vdXBsb2Fkcy9jYXJsb3NwcmV2aS9rd2dOSmNOLzExNTcvMTQ4NzA4NjM0NS1jcm9zc184MTU3Ny5wbmcXpSMbAAAAAElFTkSuQmCC";const T={class:"list-control"},J={key:0},Z=["id"],j={key:0,class:"list-pages"},G=["onClick"];function Q(e,s,t,r,n,a){const l=(0,o.up)("UserInfoFull");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",T,[(0,o._)("h3",null,(0,N.zw)(t.title)+" "+(0,N.zw)(t.items.length),1),(0,o._)("img",{src:W,alt:"",onClick:s[0]||(s[0]=(...e)=>a.hideList&&a.hideList(...e))})]),(0,o.Wm)(i.uT,{name:"fade-to-top"},{default:(0,o.w5)((()=>[a.showedResults.length>0?((0,o.wg)(),(0,o.iD)("div",J,[(0,o._)("ul",{id:t.mode+"List"},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.showedResults,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o.Wm)(l,{userInfo:e,mode:t.mode,isNoActions:"friends"===t.mode},null,8,["userInfo","mode","isNoActions"])])))),128))],8,Z),t.items.length/n.showedCount>1?((0,o.wg)(),(0,o.iD)("div",j,[(0,o._)("span",{onClick:s[1]||(s[1]=e=>a.getToPage(-1)),class:(0,N.C_)({"active-page":0==e.n})},"В начало",2),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.pagesList,((e,s)=>((0,o.wg)(),(0,o.iD)("span",{key:e,class:(0,N.C_)({"active-page":e==n.activePage}),onClick:e=>a.getToPage(s)},(0,N.zw)(e+1),11,G)))),128)),(0,o._)("span",{onClick:s[2]||(s[2]=e=>a.getToPage(-2)),class:(0,N.C_)({"active-page":e.n==Math.ceil(t.items.length/n.showedCount)-1})},"В конец",2)])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)])),_:1})],64)}const X={class:"user-info"},K=["src"],$={class:"user-data"},ee={class:"name"},se={class:"bdate"},te={class:"sex"},ie={key:0,class:"friends"},oe={key:0,class:"actions"};function re(e,s,t,r,n,a){return(0,o.wg)(),(0,o.iD)("div",{class:(0,N.C_)(["user-info-full",{"friend-card":"friends"===t.mode}]),style:(0,N.j5)({"background-color":a.panelBgColor}),onClick:s[2]||(s[2]=(...e)=>a.toPage&&a.toPage(...e))},[(0,o._)("div",X,[(0,o._)("img",{src:t.userInfo.photo_100,alt:""},null,8,K),(0,o._)("div",$,[(0,o._)("p",ee,(0,N.zw)(t.userInfo.first_name)+" "+(0,N.zw)(t.userInfo.last_name),1),(0,o._)("p",se,"Дата рождения: "+(0,N.zw)(a.bDate),1),(0,o._)("p",te,"Пол: "+(0,N.zw)(a.sex),1),"friends"==t.mode?((0,o.wg)(),(0,o.iD)("p",ie,"В друзьях у: "+(0,N.zw)(t.userInfo.commomFriends.length)+" пользователя",1)):(0,o.kq)("",!0)])]),t.isNoActions?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",oe,[a.isInSorceList?((0,o.wg)(),(0,o.iD)("button",{key:1,class:"btn-add btn-added",onClick:s[1]||(s[1]=(0,i.iM)(((...e)=>a.removeFromSourceList&&a.removeFromSourceList(...e)),["stop"]))},"Удалить")):((0,o.wg)(),(0,o.iD)("button",{key:0,class:"btn-add",onClick:s[0]||(s[0]=(0,i.iM)(((...e)=>a.addToSourceList&&a.addToSourceList(...e)),["stop"]))},"Добавить"))]))],6)}var ne={name:"UserInfoFull",props:["userInfo","mode","isNoActions"],data(){return{}},computed:{isInSorceList(){return this.$store.getters.isInSourceList(this.userInfo.id)},sex(){switch(this.userInfo.sex){case 1:return"Ж";case 2:return"М";default:return"*"}},bDate(){return this.userInfo.bdate?this.userInfo.bdate:"не указана"},panelBgColor(){if("friends"!==this.mode)return"white";{let e=255-20*(this.userInfo.commomFriends.length-1),s=255-20*(this.userInfo.commomFriends.length-1)*.5;e<=0&&(e=20),s<=0&&(s=20);let t=`rgba(${e},${s},255,0.8)`;return t}}},methods:{toPage(){"friends"===this.mode&&(this.$store.commit("setFriendsInSource",this.userInfo.commomFriends),this.$router.push(`/user/${this.userInfo.id}`))},addToSourceList(){this.$store.commit("addToSourceList",this.userInfo),this.isInSorceList=!0},removeFromSourceList(){this.$store.commit("removeFromSourceList",this.userInfo),this.isInSorceList=!1}}};const ae=(0,a.Z)(ne,[["render",re],["__scopeId","data-v-33f39b0e"]]);var le=ae,ue={name:"UsersList",components:{UserInfoFull:le},props:["items","startState","mode","title"],data(){return{showedCount:20,activePage:0,isShowed:this.startState,pagesList:[0,1,2,3,4]}},computed:{pagesCount(){return Math.ceil(this.items.length/this.showedCount)},showedResults(){return JSON.parse(JSON.stringify(this.items)).splice(this.showedCount*this.activePage,this.showedCount)}},watch:{showedResults(e){e.length>0&&(this.isShowed=!0)},items(e){this.setPagesCount(Math.ceil(e.length/this.showedCount))}},methods:{setPagesCount(e){this.pagesList=[];for(let s=0;s<e;s++)if(this.pagesList.push(s),4==s)return},getToPage(e){this.activePage=this.getNextPageNumber(e);let s=document.querySelector(`#${this.mode}List`);s.scrollIntoView({behavior:"smooth"})},getNextPageNumber(e){if(-2==e){if(5==this.pagesList.length){this.pagesList=[];for(let e=5;e>=1;e--)this.pagesList.push(this.pagesCount-e);return this.pagesList[4]}return this.pagesList[this.pagesList.length-1]}if(-1==e){if(5==this.pagesList.length){this.pagesList=[];for(let e=0;e<=4;e++)this.pagesList.push(e)}return this.pagesList[0]}switch(e){case 0:if(this.activePage==this.pagesList[0])return this.pagesList[0];if(this.activePage==this.pagesList[1]){if(0==this.pagesList[0])return this.pagesList[0];{let e=JSON.parse(JSON.stringify(this.pagesList));return this.pagesList=[],e.forEach((e=>{e-=1,this.pagesList.push(e)})),this.pagesList[1]}}if(this.activePage>=this.pagesList[2]){if(0==this.pagesList[0])return this.pagesList[0];if(1==this.pagesList[0]){let e=JSON.parse(JSON.stringify(this.pagesList));return this.pagesList=[],e.forEach((e=>{e-=1,this.pagesList.push(e)})),this.pagesList[1]}{let e=JSON.parse(JSON.stringify(this.pagesList));return this.pagesList=[],e.forEach((e=>{e-=2,this.pagesList.push(e)})),this.pagesList[2]}}break;case 1:if(this.activePage==this.pagesList[0])return this.pagesList[1];if(this.activePage==this.pagesList[1])return this.pagesList[1];if(this.activePage>=this.pagesList[2]){if(0==this.pagesList[0])return this.pagesList[1];{let e=JSON.parse(JSON.stringify(this.pagesList));return this.pagesList=[],e.forEach((e=>{e-=1,this.pagesList.push(e)})),this.pagesList[2]}}break;case 2:return this.pagesList[2];case 3:if(this.activePage>=this.pagesList[3])return this.pagesList[3];if(this.activePage<=this.pagesList[2]){if(this.pagesList[4]==this.pagesCount-1)return this.pagesList[3];{let e=JSON.parse(JSON.stringify(this.pagesList));return this.pagesList=[],e.forEach((e=>{e+=1,this.pagesList.push(e)})),this.pagesList[2]}}break;case 4:if(this.activePage==this.pagesList[4])return this.pagesList[4];if(this.activePage<=this.pagesList[3]){if(this.pagesList[4]==this.pagesCount-1)return this.pagesList[4];if(this.pagesList[4]==this.pagesCount-2||this.activePage==this.pagesList[3]){let e=JSON.parse(JSON.stringify(this.pagesList));return this.pagesList=[],e.forEach((e=>{e+=1,this.pagesList.push(e)})),this.pagesList[3]}{let e=JSON.parse(JSON.stringify(this.pagesList));return this.pagesList=[],e.forEach((e=>{e+=2,this.pagesList.push(e)})),this.pagesList[2]}}break}},hideList(){this.$emit("onHide")}},mounted(){}};const ce=(0,a.Z)(ue,[["render",Q],["__scopeId","data-v-93b0ad2e"]]);var he=ce,de={name:"HomeView",components:{SearchBar:q,UsersList:he},data(){return{isSearchListShowed:!1,isSourceListShowed:!0,isFriendsListShowed:!1,friendsList:[],isConnected:!1}},computed:{...(0,c.rn)({searchResults:e=>e.searchResults,sourceList:e=>e.sourceList})},methods:{setSearchResults(){this.isSearchListShowed=!0,console.log(1)},buildFriendsList(){this.friendsList=[];for(let e=0;e<this.sourceList.length;e++)this.getUserFriends(this.sourceList[e].id);this.isFriendsListShowed=!0},sortUsers(e,s){switch(s){case 0:e.sort(((e,s)=>e.last_name.toLowerCase().localeCompare(s.last_name.toLowerCase())));break;case 1:e.sort(((e,s)=>e.first_name.toLowerCase().localeCompare(s.first_name.toLowerCase())));break;case 2:e.sort(((e,s)=>s.commomFriends.length-e.commomFriends.length));break;default:return e}},getUserFriends(e){E.getInfo("friends.get",{user_id:e,fields:"sex,photo_100,bdate"},(s=>{s.response.items.forEach((s=>{s.commomFriends=[e];let t=this.friendsList.findIndex((e=>e.id===s.id));-1===t?this.friendsList.push(s):this.friendsList[t].commomFriends.push(e)})),this.sortUsers(this.friendsList,0)}))},logIn(){E.checkConnection((e=>{console.log(e),"connected"!==e.status?E.login((e=>{console.log(e),"connected"===e.status?this.isConnected=!0:this.isConnected=!1})):this.isConnected=!0}))}},mounted(){this.logIn()}};const ge=(0,a.Z)(de,[["render",w],["__scopeId","data-v-2126a80c"]]);var Ae=ge,pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAYpJREFUWIXtls1KAlEYht/vzLTqh6KgqBsIlNDGFkmbWtUdRJuuoFvpOgpaZ7gJWiiEgyaNtRBcBCIMBLZQKs752jgkOer8eNzkuzzM4Xn5ft45wEz/XRTlUiKVyQqDL2S3e16r1b7iGDCiwA0DOUHCEubc7urK8o3rujKqARHm42R6b98wkCOipd6RZZoLW1HhAGCGgQvBdx6cmVsKfPhcfWxoN+AHl0oeOeXyaxw4EGAIR8Bf4sLHGtANH2lgGnBgyBYk0+mpwAGfIUykMlkhfldNJxz404IdyzoA6JaIFr0zxeqKmGJPe78kcdGx7TzQVwE/OAAIEqfRAnu4TIVLAHkgZBLqUJAWXBPRRPtPzMWnXgsGiuv9bAYi17YnOgeeBlrgVEoFpeiYmT8AgIg2BOg+aVnbOgyECiIdlQgdxZM2MXbBdM9EoA3XaSJwxOgyESrj/EzgW2SrMV5FoZLQqZQKUuLEW1EAdqfz3owKByK8it1W821tffMBxPPddvusXq9/xjEw00w/eCX7a2GhnhIAAAAASUVORK5CYII=";const fe=e=>((0,o.dD)("data-v-6c378a80"),e=e(),(0,o.Cn)(),e),me={class:"user"},we={class:"user-info"},Le=fe((()=>(0,o._)("img",{src:pe,alt:""},null,-1))),Ie=fe((()=>(0,o._)("p",null,"Вернуться назад",-1))),ke=[Le,Ie],ve=["src"],Se={class:"user-data"},ye={class:"name"},_e={class:"bdate"},De={class:"sex"},Ce={class:"user-content"},be={class:"user-friends"},Oe=fe((()=>(0,o._)("h2",null,"Друзья из исходного списка:",-1))),Fe={class:"user-wall"},Ee=fe((()=>(0,o._)("h2",null,"Записи со стены пользователя",-1))),Ne={key:0},Re={key:1},Ue={key:2};function ze(e,s,t,i,r,n){const a=(0,o.up)("UserInfoFull"),l=(0,o.up)("UserPost");return(0,o.wg)(),(0,o.iD)("div",me,[(0,o._)("div",we,[(0,o._)("div",{class:"go-back",onClick:s[0]||(s[0]=(...e)=>n.toMain&&n.toMain(...e))},ke),(0,o._)("img",{class:"user-photo",src:r.userInfo.photo_200,alt:""},null,8,ve),(0,o._)("div",Se,[(0,o._)("p",ye,(0,N.zw)(r.userInfo.first_name)+" "+(0,N.zw)(r.userInfo.last_name),1),(0,o._)("p",_e,"Дата рождения: "+(0,N.zw)(n.bDate),1),(0,o._)("p",De,"Пол: "+(0,N.zw)(n.sex),1)])]),(0,o._)("div",Ce,[(0,o._)("div",be,[Oe,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.sourceFriends,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o.Wm)(a,{"user-info":e,"is-no-actions":!0},null,8,["user-info"])])))),128))])]),(0,o._)("div",Fe,[Ee,r.isPrivate?((0,o.wg)(),(0,o.iD)("p",Ne,"У пользователя закрытый аккаунт")):0==r.userWall.length?((0,o.wg)(),(0,o.iD)("p",Re,"У пользователя нет записей")):((0,o.wg)(),(0,o.iD)("ul",Ue,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.userWall,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o.Wm)(l,{"item-info":e},null,8,["item-info"])])))),128))]))])])])}const Me=e=>((0,o.dD)("data-v-6ac3cacd"),e=e(),(0,o.Cn)(),e),Pe={class:"user-post"},xe={class:"post-date"},Ye={class:"post-text"},Be={class:"post-content"},Ve={key:0,class:"photos post-content-item"},He=["src"],qe={key:1,class:"videos photos"},We=["src"],Te={key:2,class:"audios"},Je=["src"],Ze={key:3,class:"links"},je=["href"],Ge={key:0,class:"link-image-wrapper"},Qe=["src"],Xe={key:1,class:"link-no-image"},Ke=Me((()=>(0,o._)("p",null,"Ссылка",-1))),$e={key:0},es={key:1},ss={class:"post-content repost"},ts={class:"post-text"},is={key:0,class:"photos"},os=["src"],rs={key:1,class:"videos photos"},ns=["src"],as={key:2,class:"audios"},ls=["src"],us={key:3,class:"links"},cs=["href"],hs={key:0,class:"link-image-wrapper"},ds=["src"],gs={key:1,class:"link-no-image"},As=Me((()=>(0,o._)("p",null,"Ссылка",-1))),ps={key:0},fs={key:1};function ms(e,s,t,i,r,n){return(0,o.wg)(),(0,o.iD)("div",Pe,[(0,o._)("p",xe,(0,N.zw)(n.postDate),1),(0,o._)("p",Ye,(0,N.zw)(t.itemInfo.text),1),(0,o._)("div",Be,[n.postInfo.photos.length>0?((0,o.wg)(),(0,o.iD)("div",Ve,[(0,o._)("ul",{class:(0,N.C_)(n.gridClass(n.postInfo.photos))},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.postInfo.photos,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o._)("img",{src:e,alt:""},null,8,He)])))),128))],2)])):(0,o.kq)("",!0),n.postInfo.videos.length>0?((0,o.wg)(),(0,o.iD)("div",qe,[(0,o._)("ul",{class:(0,N.C_)(n.gridClass(n.postInfo.videos))},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.postInfo.videos,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o._)("img",{src:e,alt:""},null,8,We)])))),128))],2)])):(0,o.kq)("",!0),n.postInfo.audios.length>0?((0,o.wg)(),(0,o.iD)("div",Te,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.postInfo.audios,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o._)("div",null,[(0,o._)("p",null,(0,N.zw)(e.artist),1),(0,o._)("p",null,(0,N.zw)(e.title),1)]),(0,o._)("audio",{src:e.url,controls:""},null,8,Je)])))),128))])])):(0,o.kq)("",!0),n.postInfo.links.length>0?((0,o.wg)(),(0,o.iD)("div",Ze,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.postInfo.links,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o._)("a",{href:e.url},[""!=e.photo?((0,o.wg)(),(0,o.iD)("div",Ge,[(0,o._)("div",null,[(0,o._)("p",null,(0,N.zw)(e.title),1)]),(0,o._)("img",{src:e.photo},null,8,Qe)])):((0,o.wg)(),(0,o.iD)("div",Xe,[Ke,e.title?((0,o.wg)(),(0,o.iD)("p",$e,(0,N.zw)(e.title),1)):((0,o.wg)(),(0,o.iD)("p",es,(0,N.zw)(e.url),1))]))],8,je)])))),128))])])):(0,o.kq)("",!0)]),(0,o._)("div",ss,[(0,o._)("p",ts,(0,N.zw)(n.repostInfo.text),1),n.repostInfo.photos.length>0?((0,o.wg)(),(0,o.iD)("div",is,[(0,o._)("ul",{class:(0,N.C_)(n.gridClass(n.repostInfo.photos))},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.repostInfo.photos,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o._)("img",{src:e,alt:""},null,8,os)])))),128))],2)])):(0,o.kq)("",!0),n.repostInfo.videos.length>0?((0,o.wg)(),(0,o.iD)("div",rs,[(0,o._)("ul",{class:(0,N.C_)(n.gridClass(n.repostInfo.videos))},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.repostInfo.videos,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o._)("img",{src:e,alt:""},null,8,ns)])))),128))],2)])):(0,o.kq)("",!0),n.repostInfo.audios.length>0?((0,o.wg)(),(0,o.iD)("div",as,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.repostInfo.audios,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o._)("div",null,[(0,o._)("p",null,(0,N.zw)(e.artist),1),(0,o._)("p",null,(0,N.zw)(e.title),1)]),(0,o._)("audio",{src:e.url,controls:""},null,8,ls)])))),128))])])):(0,o.kq)("",!0),n.repostInfo.links.length>0?((0,o.wg)(),(0,o.iD)("div",us,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.repostInfo.links,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o._)("a",{href:e.url},[""!=e.photo?((0,o.wg)(),(0,o.iD)("div",hs,[(0,o._)("div",null,[(0,o._)("p",null,(0,N.zw)(e.title),1)]),(0,o._)("img",{src:e.photo},null,8,ds)])):((0,o.wg)(),(0,o.iD)("div",gs,[As,e.title?((0,o.wg)(),(0,o.iD)("p",ps,(0,N.zw)(e.title),1)):((0,o.wg)(),(0,o.iD)("p",fs,(0,N.zw)(e.url),1))]))],8,cs)])))),128))])])):(0,o.kq)("",!0)])])}var ws={name:"UserPost",props:["itemInfo"],data(){return{}},computed:{postDate(){let e=new Date(1e3*this.itemInfo.date),s=e.getFullYear(),t=e.getMonth(),i=e.getDate();return`${i}-${t}-${s}`},isRepost(){return this.itemInfo.copy_history},postInfo(){let e=[],s=[],t=[],i=[],o=this.itemInfo.text;return this.itemInfo.attachments.length>0&&this.itemInfo.attachments.forEach((o=>{if("audio"===o.type&&e.push(o.audio),"photo"===o.type&&s.push(o.photo.sizes[o.photo.sizes.length-1].url),"video"===o.type&&i.push(o.video.image[o.video.image.length-1].url),"link"===o.type){let e="",s="";o.link.photo&&(s=o.link.photo.sizes[o.link.photo.sizes.length-1].url),o.link.title&&(e=o.link.title),t.push({photo:s,title:e,url:o.link.url})}})),{audios:e,photos:s,text:o,links:t,videos:i}},repostInfo(){let e=[],s=[],t=[],i=[],o="";return this.itemInfo.copy_history&&(o=this.itemInfo.copy_history[0].text,this.itemInfo.copy_history[0].attachments&&this.itemInfo.copy_history[0].attachments.length>0&&this.itemInfo.copy_history[0].attachments.forEach((o=>{if("audio"===o.type&&e.push(o.audio),"photo"===o.type&&s.push(o.photo.sizes[o.photo.sizes.length-1].url),"video"===o.type&&t.push(o.video.image[o.video.image.length-1].url),"link"===o.type){let e="",s="";o.link.photo&&(s=o.link.photo.sizes[o.link.photo.sizes.length-1].url),o.link.title&&(e=o.link.title),i.push({photo:s,title:e,url:o.link.url})}}))),{audios:e,photos:s,text:o,links:i,videos:t}}},methods:{gridClass(e){let s=e.length;return 1==s?"grid-1-el":2==s?"grid-2-el":3==s?"grid-3-el":"grid-more-el"}}};const Ls=(0,a.Z)(ws,[["render",ms],["__scopeId","data-v-6ac3cacd"]]);var Is=Ls,ks={name:"UserView",components:{UserInfoFull:le,UserPost:Is},data(){return{sourceFriends:[],user_id:this.$route.params.id,userInfo:{},userWall:[],isPrivate:!1}},computed:{sex(){switch(this.userInfo.sex){case 1:return"Ж";case 2:return"М";default:return"*"}},bDate(){return this.userInfo.bdate?this.userInfo.bdate:"не указана"},...(0,c.rn)({sourceList:e=>e.sourceList})},watch:{},methods:{toMain(){this.$router.back()},getUserFriends(){let e=this.$store.getters.getFriendsInSource;e=e.join(","),E.getInfo("users.get",{user_ids:e,fields:"sex,photo_100,bdate"},(e=>{this.sourceFriends=e.response}))},getUserInfo(){E.getInfo("users.get",{user_ids:this.user_id,fields:"sex,photo_200,bdate"},(e=>{this.userInfo=e.response[0]}))},getUserWall(){E.getInfo("wall.get",{owner_id:this.user_id},(e=>{e.error?this.isPrivate=!0:this.userWall=e.response.items}))}},created(){this.getUserFriends(),this.getUserInfo(),this.getUserWall()}};const vs=(0,a.Z)(ks,[["render",ze],["__scopeId","data-v-6c378a80"]]);var Ss=vs;const ys=[{path:"/",name:"home",component:Ae,meta:{keepAlive:!0}},{path:"/user/:id",name:"user",component:Ss,meta:{keepAlive:!1}}],_s=(0,d.p7)({history:(0,d.r5)(),routes:ys});var Ds=_s;(0,i.ri)(u).use(Ds).use(h).mount("#app")}},s={};function t(i){var o=s[i];if(void 0!==o)return o.exports;var r=s[i]={id:i,loaded:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}t.m=e,function(){var e=[];t.O=function(s,i,o,r){if(!i){var n=1/0;for(c=0;c<e.length;c++){i=e[c][0],o=e[c][1],r=e[c][2];for(var a=!0,l=0;l<i.length;l++)(!1&r||n>=r)&&Object.keys(t.O).every((function(e){return t.O[e](i[l])}))?i.splice(l--,1):(a=!1,r<n&&(n=r));if(a){e.splice(c--,1);var u=o();void 0!==u&&(s=u)}}return s}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,o,r]}}(),function(){t.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(s,{a:s}),s}}(),function(){t.d=function(e,s){for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};t.O.j=function(s){return 0===e[s]};var s=function(s,i){var o,r,n=i[0],a=i[1],l=i[2],u=0;if(n.some((function(s){return 0!==e[s]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(l)var c=l(t)}for(s&&s(i);u<n.length;u++)r=n[u],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(c)},i=self["webpackChunkvk_test"]=self["webpackChunkvk_test"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(3020)}));i=t.O(i)})();
//# sourceMappingURL=app.b43c4a31.js.map