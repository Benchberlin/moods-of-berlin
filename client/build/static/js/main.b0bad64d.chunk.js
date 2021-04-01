(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),c=a.n(l);a(80),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(9),s=a(13),i=a(14),m=a(16),u=a(15),p=a(10),d=(a(23),a(81),a(115)),h=(a(82),a(12)),g=a.n(h),E=function(e,t){return g.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},b=function(e,t){return g.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},f=function(e){g.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null)}))},v=function(e){return r.a.createElement(d.a,{className:"nav row",bg:"info"},r.a.createElement("div",{className:"col-6 pl-3"},r.a.createElement("img",{className:"MoodsLogo",src:".\\Plutchik-wheel.png",alt:"Logo Moods of Berlin"}),r.a.createElement(d.a.Brand,null,"MOODS OF BERLIN"),e.user&&r.a.createElement(d.a.Brand,null,"Welcome ",e.user.username)),r.a.createElement("div",{className:"col-6"},r.a.createElement(d.a.Brand,null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement(d.a.Brand,null,r.a.createElement(o.b,{to:"/about"},"About")),e.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a.Brand,null,r.a.createElement(o.b,{to:"/places"},"Places By Mood")),r.a.createElement(d.a.Brand,null,r.a.createElement(o.b,{to:"/",onClick:function(){return f(e)}},"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a.Brand,null,r.a.createElement(o.b,{to:"/signup"},"Signup")),r.a.createElement(d.a.Brand,null,r.a.createElement(o.b,{to:"/login"},"Login")))))},y=(a(103),function(e){return r.a.createElement("div",{className:"slider",style:{borderTop:"solid 2px white"}},r.a.createElement("div",{className:"bg-info row d-flex"},r.a.createElement("div",{className:"col-lg-6 px-5"},r.a.createElement("img",{src:"\\Plutchik-wheel.png",className:"img-fluid p-5",alt:"Responsive image"})),r.a.createElement("div",{className:"col-lg-6 align-self-center"},r.a.createElement("h6",{style:{fontSize:"2rem"},className:"text-white display-4"},"How do you feel today?"),r.a.createElement("h1",{className:"text-white display-2"},"Moods of Berlin"),r.a.createElement("h6",{style:{fontSize:"2rem"},className:"text-white display-4"},"what would you like to do?"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 containerBox"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 "},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(o.b,{to:"/places"},r.a.createElement("div",{className:"overlay-effect-yellow"}),r.a.createElement("div",{className:"item1"}))),r.a.createElement("div",{className:"col-6"},r.a.createElement(o.b,{to:"/places"},r.a.createElement("div",{className:"overlay-effect-green"}),r.a.createElement("div",{className:"item2"}))))),r.a.createElement("div",{className:"col-6"},r.a.createElement(o.b,{to:"/places"},r.a.createElement("div",{className:"overlay-effect-orange"}),r.a.createElement("div",{className:"item3"})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 "},r.a.createElement(o.b,{to:"/places"},r.a.createElement("div",{className:"overlay-effect-violet"}),r.a.createElement("div",{className:"item4"}))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(o.b,{to:"/places"},r.a.createElement("div",{className:"overlay-effect-turquoise"}),r.a.createElement("div",{className:"item5"}))),r.a.createElement("div",{className:"col-6"},r.a.createElement(o.b,{to:"/places"},r.a.createElement("div",{className:"overlay-effect-red"}),r.a.createElement("div",{className:"item6"})))))),r.a.createElement("div",{className:"row col-9 pullToTop"},r.a.createElement("div",{className:"col-3"},r.a.createElement(o.b,{to:"/places"},r.a.createElement("div",{className:"overlay-effect-blue"}),r.a.createElement("div",{className:"item7"}))),r.a.createElement("div",{className:"col-9"},r.a.createElement(o.b,{to:"/places"},r.a.createElement("div",{className:"overlay-effect-greenyellow"}),r.a.createElement("div",{className:"item8"}))))),r.a.createElement("div",{className:"col-lg-6 p-3"},r.a.createElement("p",null,"We are driven by feelings. We often decide where to go or what to do based on our actual mood.",r.a.createElement("br",null),"Most of the Websites that you can find on the internet recommend you places to visit based on popularity, price, or some other touristic point of view.",r.a.createElement("br",null),r.a.createElement("br",null),"MOODS OF BERLIN recommends places to visit in Berlin, however, based on your actual mood and helps your choice visualizing all the moods and places by colors.",r.a.createElement("br",null),"The categories of the moods and their colorful representation are inspired by the theories of psychologist Robert Plutchik\u2019s.",r.a.createElement("br",null),r.a.createElement("br",null),"If you have been living in a city for some years you must found some places where you go when you feel in a certain way.",r.a.createElement("br",null),"For example, you go to the cinema in case you feel bored, or for a run, if you feel angry in order to get calmed, or visit a place that you love if you feel joyful.",r.a.createElement("br",null),r.a.createElement("br",null),"Our App will help you to save and organize your favorite places and share them with others. Users are able to add a personal description to their beloved places.",r.a.createElement("br",null),"Create a common database in order to inspire others with your own stories and help each other to feel better by finding the perfect place for the given mood."))))}),N=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-5"},r.a.createElement("h2",null,"MOODS OF BERLIN"),r.a.createElement("p",null,"This is the Moods of Berlin web application v1.0.0. It is part of an Ironhack project."),r.a.createElement("p",null,"Created by Jesus, Benjamin and Robert."),r.a.createElement("p",null,"This web App was submitted as a final project during the Ironhack Bootcamp for Web Development in Berlin. It was made with MongoDB, Express.js, React.js, Node.js, Passport.js. APIs used: Mapbox and Cloudinary. The app is deployed to Heroku."),r.a.createElement("h2",null,"Task:"),r.a.createElement("p",null,"Creating a single-page Web application using the MERN stack (MongoDB, Express, React & Node.js) from scratch within 11 days."),r.a.createElement("h2",null,"Project details:"),r.a.createElement("p",null,"The app implements an Yelp-like approach for users who like to discover places in Berlin but are specially interested in what kind of emotions/moods users connect with their recommendations.",r.a.createElement("br",null),"The mood categories and their representation are inspired by the theories of the psychologist Robert Plutchik's."),r.a.createElement("h2",null,"Sources:"),r.a.createElement("ul",null,r.a.createElement("li",null,"MongoDB: https://www.mongodb.com/"),r.a.createElement("li",null,"Express.js: http://expressjs.com"),r.a.createElement("li",null,"React.js: https://reactjs.org/"),r.a.createElement("li",null,"Node.js: http://nodejs.org"),r.a.createElement("li",null,"Passport.js: http://www.passportjs.org/"),r.a.createElement("li",null,"Mapbox: http://mapbox.com"),r.a.createElement("li",null,"Cloudinary: https://cloudinary.com/"),r.a.createElement("li",null,"Heroku: https://www.heroku.com/")),r.a.createElement("h2",null,"Pictures of the starting database and credit of the owners:"),r.a.createElement("p",null,"Bouldergarten // Promo Berlin Akzente",r.a.createElement("br",null),"Tiergarten // KK nationsonline - Wikimedia Commons",r.a.createElement("br",null),"Viktoria Park // Manfred Br\xfcckels - Wikimedia Commons",r.a.createElement("br",null),"Teufelssee // Fridolin freudenfett - Wikimedia Commons",r.a.createElement("br",null),"Tempelhofer Feld // A.Savin - Wikimedia Commons",r.a.createElement("br",null),"Sammlung Boros // // artberlin.de",r.a.createElement("br",null),"Admiralbr\xfccke // J\xf6rg Z\xe4gel - Wikimedia Commons",r.a.createElement("br",null),"Hasenheide // Darkroomduck - Wikimedia Commons",r.a.createElement("br",null),"Berghain // Darkroomduck - Wikimedia Commonsk",r.a.createElement("br",null),"Kampfsport Akademie Berlin // Kodex-Kampfsportakademie",r.a.createElement("br",null),"Zeiss-Gro\xdfplanetarium // Mazbln - Wikimedia Commons",r.a.createElement("br",null),"Radialsystem // Andreas Praefcke - Wikimedia Commons",r.a.createElement("br",null),"Botanischer Garten // Torek - Wikimedia Commons",r.a.createElement("br",null),"Wilhelm-Foerster-Sternwarte // Lienhard Schulz - Wikimedia Commons",r.a.createElement("br",null),"Calisthenics Ground in Volkspark Wilmersdorf // Regina Friedrich - Wikimedia Commons",r.a.createElement("br",null),"Schlossgarten Charlottenburg // Times - Wikimedia Commons",r.a.createElement("br",null),"Mauerpark Flohmarkt // Niels Elgaard Larsen - Wikimedia Commons",r.a.createElement("br",null),"Spandauer Zitadelle // A.Savin - Wikimedia Commons",r.a.createElement("br",null),"Spreepark Pl\xe4nterwald // onkBerlin - Wikimedia Commons",r.a.createElement("br",null),"Oberbaumbr\xfccke // Sarah Jane - Wikimedia Commons",r.a.createElement("br",null),"Kunstquartier Bethanien // tian2992 - Wikimedia Commons",r.a.createElement("br",null),"Freiluftkino Hasenheide // freiluftkino - hasenheide.de",r.a.createElement("br",null),"Jazz Konzert im K\xf6rnerpark // Milena Schl\xf6sser - Wikimedia Commons",r.a.createElement("br",null),"Skywalk, Marzahn // Christoph Stollowsky - tagesspiegel.de")))},k=a(35),x=a.n(k),C=a(52),w=a(54),j=a(53),S=(a(105),a(106),function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"card-columns",style:{margin:"0 35px"}},e.places.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top",src:e.imgPath,alt:e.title}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.title),r.a.createElement("b",null,"Mood: ")," ",e.mood,r.a.createElement("div",{className:e.mood}),r.a.createElement("p",{className:"card-text"}," ",r.a.createElement("b",null,"Address: "),e.street," ",e.zip," ",e.city)),r.a.createElement("div",{className:"card-footer "},r.a.createElement(o.b,{to:"/places/".concat(e._id)},r.a.createElement("button",{type:"button",className:"btn btn-info btn-block"},"See place")))))}))))}),O=(a(107),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-boxes"},r.a.createElement("button",{className:"box",name:"joyful",onClick:this.props.changeMood},"joyful"),r.a.createElement("button",{className:"box",name:"relaxed",onClick:this.props.changeMood},"relaxed"),r.a.createElement("button",{className:"box",name:"energetic",onClick:this.props.changeMood},"energetic"),r.a.createElement("button",{className:"box",name:"bored",onClick:this.props.changeMood},"bored"),r.a.createElement("button",{className:"box",name:"thoughtful",onClick:this.props.changeMood},"thoughtful"),r.a.createElement("button",{className:"box",name:"melancholic",onClick:this.props.changeMood},"melancholic"),r.a.createElement("button",{className:"box",name:"anxious",onClick:this.props.changeMood},"anxious"),r.a.createElement("button",{className:"box",name:"angry",onClick:this.props.changeMood},"angry"))}}]),a}(n.Component)),P=a(55),B=a(46),M=(a(108),function(e){var t=Object(n.useState)({latitude:52.5170365,longitude:13.3888599,width:"100vw",height:"50vh",zoom:10}),a=Object(P.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(null),s=Object(P.a)(o,2),i=s[0],m=s[1];return r.a.createElement(B.c,Object.assign({},l,{mapboxApiAccessToken:e.mapboxToken,onViewportChange:function(e){c(e)}}),e.places.length&&e.places.map((function(t){return r.a.createElement(B.a,{key:t._id,latitude:t.latitude,longitude:t.longitude},""===e.mood&&r.a.createElement("button",{className:"marker-btn",onClick:function(e){e.preventDefault(),m(t)}},r.a.createElement("img",{className:"map-marker",src:"./allColors_marker.png",alt:"mapbox icon"})),"joyful"===e.mood&&r.a.createElement("button",{className:"marker-btn",onClick:function(e){e.preventDefault(),m(t)}},r.a.createElement("img",{className:"map-marker",src:"./joyful_yellow_marker.png",alt:"mapbox icon joyful"})),"relaxed"===e.mood&&r.a.createElement("button",{className:"marker-btn",onClick:function(e){e.preventDefault(),m(t)}},r.a.createElement("img",{className:"map-marker",src:"./relaxed_lightgreen_marker.png",alt:"mapbox icon relaxed"})),"energetic"===e.mood&&r.a.createElement("button",{className:"marker-btn",onClick:function(e){e.preventDefault(),m(t)}},r.a.createElement("img",{className:"map-marker",src:"./energetic_orange_marker.png",alt:"mapbox icon energetic"})),"bored"===e.mood&&r.a.createElement("button",{className:"marker-btn",onClick:function(e){e.preventDefault(),m(t)}},r.a.createElement("img",{className:"map-marker",src:"./bored_green_marker.png",alt:"mapbox icon bored"})),"thoughtful"===e.mood&&r.a.createElement("button",{className:"marker-btn",onClick:function(e){e.preventDefault(),m(t)}},r.a.createElement("img",{className:"map-marker",src:"./thoughtful_turquise_marker.png",alt:"mapbox icon thoughtful"})),"melancholic"===e.mood&&r.a.createElement("button",{className:"marker-btn",onClick:function(e){e.preventDefault(),m(t)}},r.a.createElement("img",{className:"map-marker",src:"./melancholic_blue_marker.png",alt:"mapbox icon melancholic"})),"anxious"===e.mood&&r.a.createElement("button",{className:"marker-btn",onClick:function(e){e.preventDefault(),m(t)}},r.a.createElement("img",{className:"map-marker",src:"./anxious_violet_marker.png",alt:"mapbox icon anxious"})),"angry"===e.mood&&r.a.createElement("button",{className:"marker-btn",onClick:function(e){e.preventDefault(),m(t)}},r.a.createElement("img",{className:"map-marker",src:"./angry_red_marker.png",alt:"mapbox icon angry"})))})),i?r.a.createElement(B.b,{latitude:i.latitude,longitude:i.longitude,onClose:function(){m(null)}},r.a.createElement("div",{className:"popup-text",style:{padding:"7px"}},r.a.createElement("h5",{style:{fontSize:"16px"}},i.title),r.a.createElement("p",{style:{fontSize:"12px"}},i.street," ",i.zip," ",i.city))):null)}),D="pk.eyJ1Ijoicm9iZXJ0Ym96c2lrIiwiYSI6ImNrYWU4bG9kdjAyaDkzNHBuZ3Qxa3UycTEifQ.Z5U143Bdapv2hjhVxyZOXA",T=function(e,t,a,n){return"https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(e,"_").concat(t,"_").concat(a,".json?types=address&access_token=").concat(n)},z=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={places:[],mood:"",loadingMap:!0},e.getAllPlaces=function(){g.a.get("/api/places").then(function(){var t=Object(j.a)(x.a.mark((function t(a){var n,r,l,c,o;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=Object(w.a)(a.data),r=Object(C.a)(n),t.prev=2,r.s();case 4:if((l=r.n()).done){t.next=13;break}return c=l.value,t.next=8,g.a.get(T(c.street,c.city,c.zip,D)).catch((function(e){return e}));case 8:o=t.sent,c.latitude=o.data.features[0].center[1],c.longitude=o.data.features[0].center[0];case 11:t.next=4;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),r.e(t.t0);case 18:return t.prev=18,r.f(),t.finish(18);case 21:e.setState({places:n});case 22:case"end":return t.stop()}}),t,null,[[2,15,18,21]])})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log(e)}))},e.getPlacesByMood=function(t){g.a.get("/api/places/moods?mood=".concat(t)).then(function(){var t=Object(j.a)(x.a.mark((function t(a){var n,r,l,c,o;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(a.data),n=Object(w.a)(a.data),r=Object(C.a)(n),t.prev=3,r.s();case 5:if((l=r.n()).done){t.next=14;break}return c=l.value,t.next=9,g.a.get(T(c.street,c.city,c.zip,D)).catch((function(e){return e}));case 9:o=t.sent,c.latitude=o.data.features[0].center[1],c.longitude=o.data.features[0].center[0];case 12:t.next=5;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(3),r.e(t.t0);case 19:return t.prev=19,r.f(),t.finish(19);case 22:e.setState({places:n});case 23:case"end":return t.stop()}}),t,null,[[3,16,19,22]])})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log(e)}))},e.changeMood=function(t){e.setState({mood:t.target.name},(function(){e.getPlacesByMood(e.state.mood)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getAllPlaces()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,{places:this.state.places,mapboxToken:D,mood:this.state.mood}),r.a.createElement("div",{className:"alert alert-success",style:{margin:"30px 30px 0 30px",borderRadius:"0"},role:"alert"},r.a.createElement("h4",{className:"alert-heading"},"Moods of Berlin"),r.a.createElement("p",null,"Please fill the form to add a Place."),r.a.createElement("hr",null),r.a.createElement(o.b,{to:"/addPlace"},r.a.createElement("button",{type:"button",className:"btn btn-success btn-lg"},"Add a Place"))),r.a.createElement(O,{changeMood:this.changeMood}),this.state.places.length?r.a.createElement(S,{places:this.state.places}):null)}}]),a}(n.Component),_=Object(p.f)(z);function W(){return r.a.createElement(n.Fragment,null,r.a.createElement(_,null))}var F=a(29),A=a(117),I=a(114),U=a(118),L=a(113),R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",message:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(F.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;E(n,r).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/places"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bg-info p-5",style:{borderTop:"solid 2px white"}},r.a.createElement(A.a,{bg:"light",border:"secondary",style:{width:"25rem",margin:"0 auto"},body:!0},r.a.createElement("h2",null,"Signup"),r.a.createElement(I.a,{onSubmit:this.handleSubmit},r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,{htmlFor:"username"},"Username: "),r.a.createElement(I.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username"})),r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,{htmlFor:"password"},"Password: "),r.a.createElement(I.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password"})),this.state.message&&r.a.createElement(U.a,{variant:"danger"},this.state.message),r.a.createElement(L.a,{type:"submit"},"Signup")))))}}]),a}(n.Component),Z=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",message:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(F.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;b(n,r).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/places"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bg-info p-5 ",style:{borderTop:"solid 2px white"}},r.a.createElement(A.a,{bg:"light",border:"secondary",style:{width:"25rem",margin:"0 auto"},body:!0},r.a.createElement("h2",{className:"text-center"},"Log In"),r.a.createElement(I.a,{onSubmit:this.handleSubmit},r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,{htmlFor:"username"},"Username: "),r.a.createElement(I.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username"})),r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,{htmlFor:"password"},"Password: "),r.a.createElement(I.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password"})),this.state.message&&r.a.createElement(U.a,{variant:"danger"},this.state.message),r.a.createElement(L.a,{type:"submit"},"Log In")),r.a.createElement("div",{className:"text-center my-3"},r.a.createElement("p",null," Please go to Sign Up if you are not a user yet")))))}}]),a}(n.Component),H=(a(110),function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"by Jesus Cabrera & Benjamin Chimoy & Robert Bozsik | Ironhack 2020"))}),K=a(26),J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state.title,a=n.state.description,r=n.state.mood,l=n.state.imgPath,c=n.state.street,o=n.state.zip,s=n.state.city;g.a.post("/api/places",{title:t,description:a,mood:r,imgPath:l,street:c,zip:o,city:s}).then((function(){n.setState({title:"",description:"",mood:"",imgPath:"",street:"",zip:"",city:""}),n.props.history.push("/places")})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(F.a)({},a,r))},n.fileSelectHandler=function(e){var t=e.target.files,a=new FormData;a.append("file",t[0]),a.append("upload_preset","moods-of-berlin"),fetch("https://api.cloudinary.com/v1_1/benchberlin/image/upload ",{method:"POST",body:a}).then((function(e){e.json().then((function(e){console.log(Object(K.a)(n)),console.log(e.secure_url),n.setState({imgPath:e.secure_url})}))}))},n.state={title:"",description:"",mood:"",imgPath:"",street:"",zip:"",city:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Title:")),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:function(t){return e.handleChange(t)},className:"form-control",placeholder:"Title","aria-label":"Title","aria-describedby":"basic-addon1"}))),r.a.createElement("div",{className:"input-group my-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Description:")),r.a.createElement("textarea",{type:"text",name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)},className:"form-control","aria-label":"Description"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text"},"Mood:")),r.a.createElement("select",{className:"custom-select",value:this.state.mood,name:"mood",onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",{selected:!0},"Choose..."),r.a.createElement("option",{value:"joyful"},"joyful"),r.a.createElement("option",{value:"relaxed"},"relaxed"),r.a.createElement("option",{value:"energetic"},"energetic"),r.a.createElement("option",{value:"bored"},"bored"),r.a.createElement("option",{value:"thoughtful"},"thoughtful"),r.a.createElement("option",{value:"melancholic"},"melancholic"),r.a.createElement("option",{value:"anxious"},"anxious"),r.a.createElement("option",{value:"angry"},"angry")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Image:"),r.a.createElement("input",{className:"mx-3",type:"file",name:"imgPath",onChange:this.fileSelectHandler}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Street:")),r.a.createElement("input",{type:"text",name:"street",value:this.state.street,onChange:function(t){return e.handleChange(t)},className:"form-control",placeholder:"Street","aria-label":"Street","aria-describedby":"basic-addon1"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Zip:")),r.a.createElement("input",{type:"text",name:"zip",value:this.state.zip,onChange:function(t){return e.handleChange(t)},className:"form-control",placeholder:"Zip","aria-label":"Zip","aria-describedby":"basic-addon1"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text"},"City:")),r.a.createElement("select",{className:"custom-select",value:this.state.city,name:"city",onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",{selected:!0},"Choose..."),r.a.createElement("option",{value:"berlin"},"Berlin")))),r.a.createElement("input",{className:"btn btn-success btn-lg m-3",type:"submit",value:"Submit"})))}}]),a}(n.Component),G=function(e){return r.a.createElement("div",{className:"bg-info p-5",style:{borderTop:"solid 2px white"}},r.a.createElement(A.a,{bg:"light",border:"secondary",style:{width:"70%",margin:"0 auto"},body:!0},r.a.createElement("h1",{className:"text-center"},"Add a Place"),r.a.createElement(J,{history:e.history})))},V=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){var t=n.state.title,a=n.state.description,r=n.state.mood,l=n.state.imgPath,c=n.state.street,o=n.state.zip,s=n.state.city;e.preventDefault(),g.a.put("/api/places/".concat(n.props.thePlace._id),{title:t,description:a,mood:r,imgPath:l,street:c,zip:o,city:s}).then((function(){n.props.getThePlace(),n.props.history.push("/places")})).catch((function(e){return console.log(e)}))},n.handleChangeTitle=function(e){n.setState({title:e.target.value})},n.handleChangeDesc=function(e){n.setState({description:e.target.value})},n.handleChangeMood=function(e){n.setState({mood:e.target.value})},n.handleChangeImgPath=function(e){n.setState({imgPath:e.target.value})},n.handleChangeStreet=function(e){n.setState({street:e.target.value})},n.handleChangeZip=function(e){n.setState({zip:e.target.value})},n.handleChangeCity=function(e){n.setState({city:e.target.value})},n.fileSelectHandler=function(e){var t=e.target.files,a=new FormData;a.append("file",t[0]),a.append("upload_preset","moods-of-berlin"),fetch("https://api.cloudinary.com/v1_1/benchberlin/image/upload ",{method:"POST",body:a}).then((function(e){e.json().then((function(e){console.log(Object(K.a)(n)),console.log(e.secure_url),n.setState({imgPath:e.secure_url})}))}))},n.state={title:n.props.thePlace.title,description:n.props.thePlace.description,mood:n.props.thePlace.mood,imgPath:n.props.thePlace.imgPath,street:n.props.thePlace.street,zip:n.props.thePlace.zip,city:n.props.thePlace.city},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",{className:"text-center"},"Edit form"),r.a.createElement("form",{style:{maxWidth:"80%"},onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Title:")),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:function(t){return e.handleChangeTitle(t)},className:"form-control",placeholder:"Title","aria-label":"Title","aria-describedby":"basic-addon1"}))),r.a.createElement("div",{className:"input-group my-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Description:")),r.a.createElement("textarea",{type:"text",name:"description",value:this.state.description,onChange:function(t){return e.handleChangeDesc(t)},class:"form-control","aria-label":"Description"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text"},"Mood:")),r.a.createElement("select",{className:"custom-select",value:this.state.mood,name:"mood",onChange:function(t){return e.handleChangeMood(t)}},r.a.createElement("option",{selected:!0},"Choose..."),r.a.createElement("option",{value:"joyful"},"joyful"),r.a.createElement("option",{value:"relaxed"},"relaxed"),r.a.createElement("option",{value:"energetic"},"energetic"),r.a.createElement("option",{value:"bored"},"bored"),r.a.createElement("option",{value:"thoughtful"},"thoughtful"),r.a.createElement("option",{value:"melancholic"},"melancholic"),r.a.createElement("option",{value:"anxious"},"anxious"),r.a.createElement("option",{value:"angry"},"angry")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Image:"),r.a.createElement("input",{className:"mx-3",type:"file",name:"imgPath",onChange:this.fileSelectHandler}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Street:")),r.a.createElement("input",{type:"text",name:"street",value:this.state.street,onChange:function(t){return e.handleChangeStreet(t)},className:"form-control",placeholder:"Street","aria-label":"Street","aria-describedby":"basic-addon1"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Zip:")),r.a.createElement("input",{type:"text",name:"zip",value:this.state.zip,onChange:function(t){return e.handleChangeZip(t)},className:"form-control",placeholder:"Zip","aria-label":"Zip","aria-describedby":"basic-addon1"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text"},"City:")),r.a.createElement("select",{className:"custom-select",value:this.state.city,name:"city",onChange:function(t){return e.handleChangeCity(t)}},r.a.createElement("option",{selected:!0},"Choose..."),r.a.createElement("option",{value:"berlin"},"Berlin")))),r.a.createElement("input",{className:"btn btn-success btn-lg mx-1",type:"submit",value:"Submit"})))}}]),a}(n.Component),Y=a(116),q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getSinglePlace=function(){var e=n.props.match.params;g.a.get("/api/places/".concat(e.id)).then((function(e){var t=e.data;n.setState(t)})).catch((function(e){console.log(e)}))},n.deletePlace=function(){var e=n.props.match.params;g.a.delete("/api/places/".concat(e.id)).then((function(){n.props.history.push("/places")})).catch((function(e){console.log(e)}))},n.state={},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getSinglePlace()}},{key:"render",value:function(){var e=this,t=!1,a=this.props.user,n=this.state.owner;return a&&a._id===n&&(t=!0),r.a.createElement("div",null,r.a.createElement("div",{className:"card",style:{margin:"1em auto",width:"80%"},key:this.state._id},r.a.createElement("img",{className:"img-fluid",style:{minWidth:"100%"},src:this.state.imgPath,alt:this.state.title}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.state.title," "),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("b",null,"Mood: ")," ",this.state.mood),r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,"Description: ")," ",this.state.description),r.a.createElement("p",null,r.a.createElement("b",null,"Address: "),this.state.street," ",this.state.zip," ",this.state.city)),t&&r.a.createElement("div",{className:"card-footer"},r.a.createElement(Y.a,null,r.a.createElement(A.a,null,r.a.createElement(A.a.Header,null,r.a.createElement(Y.a.Toggle,{as:L.a,variant:"info",eventKey:"0"},"Edit"),r.a.createElement("button",{type:"button",className:"btn btn-danger mx-2",onClick:function(){return e.deletePlace()}},"Delete"),r.a.createElement("br",null)),r.a.createElement(Y.a.Collapse,{eventKey:"0"},r.a.createElement(A.a.Body,null," ",r.a.createElement(V,Object.assign({thePlace:this.state,getThePlace:this.getSinglePlace},this.props)))))))))}}]),a}(n.Component),Q=a(74),X=function(e){var t=e.component,a=e.user,n=Object(Q.a)(e,["component","user"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,Object.assign({},n,e)):r.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},$=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={user:e.props.user},e.setUser=function(t){e.setState({user:t})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v,{user:this.state.user,setUser:this.setUser}),r.a.createElement(p.b,{exact:!0,path:"/",component:y}),r.a.createElement(p.b,{exact:!0,path:"/about",component:N}),r.a.createElement(X,{exact:!0,path:"/places",user:this.state.user,component:W}),r.a.createElement(p.b,{exact:!0,path:"/addPlace",component:G}),r.a.createElement(p.b,{exact:!0,path:"/places/:id",render:function(t){return r.a.createElement(q,Object.assign({user:e.state.user},t))}}),r.a.createElement(p.b,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(R,Object.assign({setUser:e.setUser},t))}}),r.a.createElement(p.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(Z,Object.assign({setUser:e.setUser},t))}}),r.a.createElement(H,null))}}]),a}(n.Component);g.a.get("/api/auth/loggedin").then((function(e){var t=e.data;c.a.render(r.a.createElement(o.a,null,r.a.createElement($,{user:t})),document.getElementById("root"))})).catch((function(e){console.log(e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,t,a){e.exports=a(111)},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.b0bad64d.chunk.js.map