(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),u=a(5),l=a.n(u),i=a(7),s=a(13),m=a(14),p=a(6),d=a(21),f=a.n(d);a(65),a(69);f.a.initializeApp({apiKey:"AIzaSyBbpslB4ust5scIx4G-po5hS8ob9JwKcCk",authDomain:"react-app-pruebas.firebaseapp.com",databaseURL:"https://react-app-pruebas.firebaseio.com",projectId:"react-app-pruebas",storageBucket:"react-app-pruebas.appspot.com",messagingSenderId:"369508618314",appId:"1:369508618314:web:0c75fb1aa0dbfac67756b3"});var b=f.a.firestore(),h=new f.a.auth.GoogleAuthProvider,E=a(4),v=a(28),g=a(2),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(s.a)(t,2),r=a[0],c=a[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},u=function(e){var t=e.target;c(Object(g.a)(Object(g.a)({},r),{},Object(v.a)({},t.name,t.value)))};return[r,u,o]},j=a(15),y=a.n(j),O="[Auth] Login",N="[Auth] Logout",w="[UI] Set Error",x="[UI] Remove Error",k="[UI] Start loading",C="[UI] Finish loading",S="[Notes] New note",A="[Notes] Set active note",I="[Notes] Load note",L="[Notes] Updated note",P="[Notes] Delete note",J="[Notes] Logout Cleaning",D=function(e){return{type:w,payload:e}},U=function(){return{type:C}},R=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.collection("".concat(t,"/journal/notes")).get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(g.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/marcela/upload",(a=new FormData).append("upload_preset","react-journal"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/marcela/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(4),e.t0;case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),W=function(e,t){return{type:A,payload:Object(g.a)({id:e},t)}},F=function(e,t){return{type:S,payload:{id:e,note:t}}},G=function(e){return function(){var t=Object(i.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e);case 2:n=t.sent,a(T(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return{type:I,payload:e}},z=function(e){return function(){var t=Object(i.a)(l.a.mark((function t(a,n){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,e.url||delete e.url,delete(c=Object(g.a)({},e)).id,t.next=6,b.doc("".concat(r,"/journal/notes/").concat(e.id)).update(c);case 6:a(q(e.id,c)),y.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},q=function(e,t){return{type:L,payload:{id:e,note:Object(g.a)({id:e},t)}}},K=function(e){return{type:P,payload:e}},X=function(e,t){return function(a){a({type:k}),f.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(M(t.uid,t.displayName)),a(U())})).catch((function(e){console.log(e.message),a(U()),y.a.fire("Error",e.message,"error")}))}},M=function(e,t){return{type:O,payload:{uid:e,displayName:t}}},V=function(){return{type:N}},H=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return e.ui})).loading,a=_({email:"marcela19409@gmail.com",password:"123456"}),n=Object(s.a)(a,2),c=n[0],o=n[1],u=c.email,l=c.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Login"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(X(u,l))},className:"animate__animated animate__fadeIn animate__faster"},r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:u,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:l,onChange:o}),r.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit",disabled:t},"Login"),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",null,"Login with social networks"),r.a.createElement("div",{className:"google-btn",onClick:function(){e((function(e){f.a.auth().signInWithPopup(h).then((function(t){var a=t.user;e(M(a.uid,a.displayName))}))}))}},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with google")))),r.a.createElement(m.b,{to:"/auth/register",className:"link"},"Create new account")))},Q=a(56),Y=a.n(Q),Z=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return e.ui})).msgError,a=_({name:"Lina",email:"marcela19409@gmail.com",password:"123456",password2:"123456"}),n=Object(s.a)(a,2),c=n[0],o=n[1],u=c.name,p=c.email,d=c.password,b=c.password2,h=function(){return 0===u.trim().length?(e(D("Name is required")),!1):Y.a.isEmail(p)?d!==b||d.length<5?(e(D("Password should be at least 6 characters and match each other")),!1):(e({type:x}),!0):(e(D("Email is not valid")),!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Register"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),h()&&e(function(e,t,a){return function(n){f.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(i.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:a});case 3:n(M(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),y.a.fire("Error",e.message,"error")}))}}(p,d,u))},className:"animate__animated animate__fadeIn animate__faster"},t&&r.a.createElement("div",{className:"auth__alert-error"},t),r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:u,onChange:o}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:p,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:d,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Confirm Password",name:"password2",className:"auth__input",value:b,onChange:o}),r.a.createElement("button",{className:"btn btn-primary btn-block mb-5",type:"submit"},"Register"),r.a.createElement(m.b,{to:"/auth/login",className:"link"},"Already registered?")))},$=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/JournalApp/auth/login",component:H}),r.a.createElement(p.b,{exact:!0,path:"/JournalApp/auth/register",component:Z}),r.a.createElement(p.a,{to:"/JournalApp/auth/login"}))))},ee=a(57),te=a.n(ee),ae=function(e){var t=e.id,a=e.date,n=e.title,c=e.body,o=e.url,u=Object(E.b)(),l=te()(a);return r.a.createElement("div",{className:"journal__entry pointer animate__animated animate__fadeIn animate__faster",onClick:function(){u(W(t,{date:a,title:n,body:c,url:o}))}},o&&r.a.createElement("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(o,")")}}),r.a.createElement("div",{className:"journal__entry-body"},r.a.createElement("p",{className:"journal__entry-title"},n),r.a.createElement("p",{className:"journal__entry-content"},c)),r.a.createElement("div",{className:"journal__entry-box"},r.a.createElement("span",null,l.format("dddd")),r.a.createElement("h4",null,l.format("Do"))))},ne=function(){var e=Object(E.c)((function(e){return e.notes})).notes;return r.a.createElement("div",{className:"journal__entries"},e.map((function(e){return r.a.createElement(ae,Object.assign({key:e.id},e))})))},re=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return e.auth})).name;return r.a.createElement("aside",{className:"journal__sidebar"},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("i",{className:"far fa-moon"}),r.a.createElement("span",null,t)),r.a.createElement("button",{className:"btn",onClick:function(){e(function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.auth().signOut();case 2:t(V()),t({type:J});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Logout")),r.a.createElement("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(i.a)(l.a.mark((function e(t,a){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=4,b.collection("".concat(n,"/journal/notes")).add(r);case 4:c=e.sent,t(W(c.id,r)),t(F(c.id,r));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"far fa-calendar-plus fa-5x"}),r.a.createElement("p",{className:"mt-5"},"New entry")),r.a.createElement(ne,null))},ce=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("span",null,"JournalApp"),r.a.createElement("input",{id:"fileSelector",name:"file",type:"file",style:{display:"none"},onChange:function(t){var a=t.target.files[0];a&&e(function(e){return function(){var t=Object(i.a)(l.a.mark((function t(a,n){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().notes.active,y.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){y.a.showLoading()}}),t.next=4,B(e);case 4:c=t.sent,r.url=c,a(z(r)),y.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(a))}}),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()}},"Picture"),r.a.createElement("button",{className:"btn",onClick:function(){e(z(t))}},"Save")))},oe=function(){var e=Object(E.c)((function(e){return e.notes})).active,t=_(e),a=Object(s.a)(t,3),c=a[0],o=a[1],u=a[2],m=c.body,p=c.title,d=c.id,f=Object(n.useRef)(e.id),h=Object(E.b)();Object(n.useEffect)((function(){e.id!==f.current&&(u(e),f.current=e.id)}),[e,u]),Object(n.useEffect)((function(){h(W(c.id,Object(g.a)({},c)))}),[c,h]);return r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(ce,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",name:"title",value:p,onChange:o}),r.a.createElement("textarea",{placeholder:"What happened today",className:"notes__text-area",name:"body",value:m,onChange:o}),e.url&&r.a.createElement("div",{className:"notes__image"},r.a.createElement("img",{src:e.url,alt:"imagen"}))),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){h(function(e){return function(){var t=Object(i.a)(l.a.mark((function t(a,n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,t.next=3,b.doc("".concat(r,"/journal/notes/").concat(e)).delete();case 3:a(K(e));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(d))}},"Delete"))},ue=function(){return r.a.createElement("div",{className:"nothing__main-content"},r.a.createElement("p",null,"Select something",r.a.createElement("br",null),"create an entry!"),r.a.createElement("i",{className:"far fa-star fa-4x mt-5"}))},le=function(){var e=Object(E.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster"},r.a.createElement(re,null),r.a.createElement("main",null,e?r.a.createElement(oe,null):r.a.createElement(ue,null)))},ie=a(29),se=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ie.a)(e,["isAuthenticated","component"]);return r.a.createElement(p.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(p.a,{to:"/JournalApp/"}):r.a.createElement(a,e)}}))},me=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ie.a)(e,["isAuthenticated","component"]);return r.a.createElement(p.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(p.a,{to:"/JournalApp/auth/login"})}}))},pe=function(){var e=Object(E.b)(),t=Object(n.useState)(!0),a=Object(s.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(!1),d=Object(s.a)(u,2),b=d[0],h=d[1];return Object(n.useEffect)((function(){f.a.auth().onAuthStateChanged(function(){var t=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===a||void 0===a?void 0:a.uid)?(e(M(a.uid,a.displayName)),h(!0),e(G(a.uid))):h(!1),o(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,o,h]),c?r.a.createElement("h1",null,r.a.createElement("i",{className:"fa fa-spinner fa-spin"})," Wait..."):r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(p.d,null,r.a.createElement(se,{path:"/JournalApp/auth",isAuthenticated:b,component:$}),r.a.createElement(me,{path:"/JournalApp/",isAuthenticated:b,component:le}),r.a.createElement(p.a,{to:"/JournalApp/auth/login"})))))},de=a(16),fe=a(58),be={loading:!1,msgError:null},he=a(39),Ee={notes:[],active:null},ve="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.d,ge=Object(de.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{uid:t.payload.uid,name:t.payload.displayName};case N:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(g.a)(Object(g.a)({},e),{},{msgError:t.payload});case x:return Object(g.a)(Object(g.a)({},e),{},{msgError:null});case k:return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case C:return Object(g.a)(Object(g.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(g.a)(Object(g.a)({},e),{},{active:Object(g.a)({},t.payload)});case I:return Object(g.a)(Object(g.a)({},e),{},{notes:Object(he.a)(t.payload)});case S:return Object(g.a)(Object(g.a)({},e),{},{notes:[t.payload].concat(Object(he.a)(e.notes))});case L:return Object(g.a)(Object(g.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case P:return Object(g.a)(Object(g.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case J:return Object(g.a)(Object(g.a)({},e),{},{active:null,notes:[]});default:return e}}}),_e=Object(de.e)(ge,ve(Object(de.a)(fe.a))),je=function(){return r.a.createElement(E.a,{store:_e},r.a.createElement(pe,null))};a(152);o.a.render(r.a.createElement(je,null),document.getElementById("root"))},59:function(e,t,a){e.exports=a(153)}},[[59,1,2]]]);
//# sourceMappingURL=main.44ecc242.chunk.js.map