(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),i=a(20),o=a.n(i),r=(a(27),a(7)),l=a(2),h=a(9),j=a(11),m=a(12),p=a(14),d=a(13),b=(a(28),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container-contact",children:[Object(n.jsxs)("div",{className:"contact-id",children:["\u041a\u043e\u043d\u0442\u0430\u043a\u0442: ",this.props.id]}),Object(n.jsxs)("div",{className:"contact-info",children:[Object(n.jsxs)("div",{className:"contact-name",children:["\u0406\u043c'\u044f: ",this.props.firstName," ",this.props.lastName]}),Object(n.jsxs)("div",{className:"contact-number",children:["\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443: ",this.props.phone]})]})]})}}]),a}(c.Component)),u=[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319521",gender:"male"}],O=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={contacts:u,search:""},e.handleSearchChange=function(t){var a=u.filter((function(e){return"".concat(e.firstName," ").concat(e.lastName).toLowerCase().includes(t.target.value.toLowerCase())||e.phone.includes(t.target.value)}));e.setState({contacts:a}),e.setState({search:t.target.value})},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"input-search",children:Object(n.jsx)("input",{type:"text",value:this.state.search,onChange:this.handleSearchChange,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0430\u043d\u0456 \u0434\u043b\u044f \u043f\u043e\u0448\u0443\u043a\u0443"})}),this.state.contacts.map((function(e,t){return Object(c.createElement)(b,Object(h.a)(Object(h.a)({},e),{},{id:t+1,key:t}))}))]})}}]),a}(c.Component),g=(a(29),function(e){var t=e.name,a=e.nickname,c=e.photo,s=e.content,i=e.postPhoto;return Object(n.jsxs)("div",{className:"postItem",children:[Object(n.jsx)("div",{className:"postItemPhoto",children:Object(n.jsx)("img",{src:c,alt:""})}),Object(n.jsxs)("div",{className:"postItemContainer",children:[Object(n.jsxs)("div",{className:"postItemInfo",children:[Object(n.jsxs)("div",{className:"itemInfoAboutPerson",children:[Object(n.jsx)("div",{className:"personName",children:t}),Object(n.jsx)("div",{className:"personNickname",children:a})]}),Object(n.jsx)("div",{className:"itemContent",children:s})]}),Object(n.jsx)("div",{className:"postPhoto",children:Object(n.jsx)("img",{src:i,alt:""})})]})]})}),f=[{id:1,name:"Ross Eustace Geller",nickname:"@ross_unagi",photo:"https://upload.wikimedia.org/wikipedia/ru/thumb/f/f2/Ross_Geller.jpg/274px-Ross_Geller.jpg",content:"\u041f\u043e\u0434\u043e\u0431\u0430\u044e\u0442\u044c\u0441\u044f \u043c\u0435\u043d\u0456 \u043d\u0430\u0448\u0456 \u0444\u043e\u0442\u043e) \u0412\u043e\u043d\u0438 \u0437\u0430\u0432\u0436\u0434\u0438 \u0442\u0430\u043a\u0456 \u0446\u0456\u043a\u0430\u0432\u0456...",postPhoto:"https://gator.radiotrek.rv.ua/media/gallery/full/f/r/friends.jpg"},{id:2,name:"Joseph Francis Tribbiani",nickname:"@your_sweet",photo:"https://upload.wikimedia.org/wikipedia/uk/b/bb/Joey_Tribbiani.jpg",content:"\u0410\u0433\u0430, \u044f\u043a \u0442\u043e\u0434\u0456, \u043a\u043e\u043b\u0438 \u043d\u0430\u043c \u043f\u0440\u0438\u043d\u0435\u0441\u043b\u0438 \u043f\u043e\u0440\u043d\u043e\u0433\u0440\u0430\u0444\u0456\u0447\u043d\u0438\u0439 \u0442\u043e\u0440\u0442 :)",postPhoto:"https://s3.eu-central-1.amazonaws.com/img.hromadske.ua/posts/134177/friends-30-5jpg/medium.jpg"},{id:3,name:"Monica E. Geller",nickname:"@monica_garmonika",photo:"https://upload.wikimedia.org/wikipedia/ru/e/e4/Monicaegeller.jpg",content:"\u0410 \u043f\u0430\u043c'\u044f\u0442\u0430\u0454\u0442\u0435, \u044f\u043a \u043c\u0438 \u0445\u043e\u0442\u0456\u043b\u0438 \u043f\u043e\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044f home \u0432\u0456\u0434\u0435\u043e \u0420\u043e\u0441\u0430 \u0456 \u0420\u0435\u0439\u0447\u0435\u043b?",postPhoto:"https://images.unian.net/photos/2019_11/thumb_files/400_0_1573631299-6900.jpeg?0.8646077519716482"},{id:4,name:"Rachel Karen Green",nickname:"@ralph_rachel",photo:"https://upload.wikimedia.org/wikipedia/ru/e/ec/Jennifer_Aniston_as_Rachel_Green.jpg",content:"\u041f\u0456\u0441\u043b\u044f \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u0434\u0443 \u0414\u0436\u043e\u0457 \u0432\u0438\u0440\u0456\u0448\u0438\u0432 \u0443\u0442\u043e\u0447\u043d\u0438\u0442\u0438 \u0434\u0435\u044f\u043a\u0456 \u0440\u0435\u0447\u0456 \u0432 \u0420\u043e\u0441\u0430",postPhoto:"https://bituk.media/wp-content/uploads/2020/09/5cf89e2ca8097.jpg"},{id:5,name:"Phoebe Buffay",nickname:"@filangi",photo:"https://upload.wikimedia.org/wikipedia/ru/thumb/b/b1/Phoebe_buffay.jpg/274px-Phoebe_buffay.jpg",content:"\u0423\u0433\u0443, \u0430 \u0441\u0435\u0441\u0442\u0440\u0430 \u0442\u0432\u043e\u044f \u043d\u0435 \u043c\u043e\u0433\u043b\u0430 \u0432\u0456\u0434\u0456\u0440\u0432\u0430\u0442\u0438 \u043f\u043e\u0433\u043b\u044f\u0434...",postPhoto:"https://imgclf.112.ua/original/2019/11/18/407906.jpg?timestamp=1574084479"}];var x=function(){return Object(n.jsx)("div",{children:f.map((function(e){return Object(c.createElement)(g,Object(h.a)(Object(h.a)({},e),{},{key:e.id}))}))})},v=(a(30),function(){return Object(n.jsxs)("div",{className:"congratulation",children:[Object(n.jsx)("h1",{children:"\u0412\u0456\u0442\u0430\u044e \u043d\u0430 \u043d\u0430\u0448\u043e\u043c\u0443 \u0441\u0430\u0439\u0442\u0456!"}),Object(n.jsx)("img",{src:"https://pngimg.com/uploads/welcome/welcome_PNG32.png"})]})}),N=(a(31),function(){return Object(n.jsxs)("nav",{className:"navMenu",children:[Object(n.jsx)(r.b,{to:"/main",className:"link",activeClassName:"active-link",children:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"}),Object(n.jsx)(r.b,{to:"/posts",className:"link",activeClassName:"active-link",children:"\u041f\u0443\u0431\u043b\u0456\u043a\u0430\u0446\u0456\u0457"}),Object(n.jsx)(r.b,{to:"/photo",className:"link",activeClassName:"active-link",children:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0456\u0457"}),Object(n.jsx)(r.b,{to:"/contacts",className:"link",activeClassName:"active-link",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"})]})}),k=(a(37),a.p+"static/media/auto_1.edee0627.jpg"),w=a.p+"static/media/auto_2.79d14f90.jpg",_=a.p+"static/media/auto_3.3019a986.jpg",P=a.p+"static/media/auto_4.1c19aac4.jpg",C=function(){return Object(n.jsxs)("div",{className:"photos-container",children:[Object(n.jsxs)("div",{className:"photo",children:[Object(n.jsx)("h3",{children:"First Photo"}),Object(n.jsx)("img",{src:k})]}),Object(n.jsxs)("div",{className:"photo",children:[Object(n.jsx)("h3",{children:"Second Photo"}),Object(n.jsx)("img",{src:w})]}),Object(n.jsxs)("div",{className:"photo",children:[Object(n.jsx)("h3",{children:"Third Photo"}),Object(n.jsx)("img",{src:_})]}),Object(n.jsxs)("div",{className:"photo",children:[Object(n.jsx)("h3",{children:"Fourth Photo"}),Object(n.jsx)("img",{src:P})]})]})};var y=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(r.a,{children:[Object(n.jsx)(N,{}),Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{path:"/main",component:v}),Object(n.jsx)(l.b,{path:"/posts",component:x}),Object(n.jsx)(l.b,{path:"/photo",component:C}),Object(n.jsx)(l.b,{path:"/contacts",component:O}),Object(n.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(n.jsx)(l.a,{to:"/main"})}})]})]})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),I()}},[[38,1,2]]]);
//# sourceMappingURL=main.b237d4c8.chunk.js.map