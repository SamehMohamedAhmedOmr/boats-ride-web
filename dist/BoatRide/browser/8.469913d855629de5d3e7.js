(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{XRsc:function(e,t,b){"use strict";b.r(t),b.d(t,"AboutModule",(function(){return u}));var c=b("ofXK"),i=b("tyNb"),n=b("fXoL"),a=b("aqYh"),o=b("qJwI"),r=b("sYmb");const s=[{path:"",component:(()=>{class e{constructor(e,t,b){this.resizeServiceService=e,this.seoService=t,this.cdr=b,this.numberofcells=2}ngOnInit(){this.getSeo(),this.numberofcells=this.resizeServiceService.checkWindowSize()}onResize(e){this.numberofcells=this.resizeServiceService.checkWindowSize()}getSeo(){this.seoService.Seo("about").subscribe(e=>{this.seoService.updateMetaTags(e),this.cdr.markForCheck()})}}return e.\u0275fac=function(t){return new(t||e)(n.Rb(a.a),n.Rb(o.a),n.Rb(n.h))},e.\u0275cmp=n.Lb({type:e,selectors:[["app-main-about"]],hostBindings:function(e,t){1&e&&n.jc("resize",(function(e){return t.onResize(e)}),!1,n.Bc)},decls:142,vars:73,consts:[[1,"page-banner","inner-banner-height"],[1,"image-layer",2,"background-image","url('./assets/images/background/banner-1.jpg')"],[1,"banner-inner"],[1,"auto-container"],[1,"inner-container","clearfix"],[1,"inner-banner-height-title"],[1,"page-nav"],[1,"bread-crumb","clearfix"],[3,"routerLink"],[1,"welcome-section"],["data-wow-delay","0ms","data-wow-duration","1500ms",1,"title-box","wow","fadeInUp"],[2,"text-align","center","font-size","18px"],[2,"color","#5f727f"],["data-wow-delay","0ms","data-wow-duration","1500ms",1,"image-box","wow","fadeInUp"],["src","assets/images/resource/b3f4a732-aee6-4c62-a3ae-c51398a00ade-h.jpeg","alt",""],[1,"testimonials-section-three"],[1,"image-layer","left-layer",2,"background-image","url(./assets/images/background/image-10.png)"],[1,"sec-title","centered"],[1,"lower-text"],[1,"carousel-box"],[1,"testimonial-carousel-three","owl-theme","owl-carousel"],[1,"about-section-three"],[1,"bg-image-layer",2,"background-image","url(./assets/images/background/image-10.jpg)"],["data-wow-delay","0ms","data-wow-duration","1500ms",1,"image-box-left","wow","slideInLeft"],[1,"image-layer",2,"background-image","url(./assets/images/resource/team-1.jpg)"],[1,"content-outer","clearfix"],[1,"content-inner"],[1,"signature"],["src","assets/images/resource/signature.png","alt","","title",""],[1,"features-section"],[1,"row","clearfix"],[1,"feature-block","col-lg-4","col-md-6","col-sm-12"],[1,"inner-box"],[1,"icon-box"],[1,"octagonWrap"],[1,"octagon"],[1,"icon","flaticon-scuba"],[1,"content"],[1,"text"],[1,"link-box"],[1,"icon","flaticon-boat-race"],[1,"feature-block","col-lg-4","col-md-12","col-sm-12"],[1,"icon","flaticon-wallet"],["data-wow-delay","0ms","data-wow-duration","1500ms",1,"subscribe-section","style-two","wow","fadeInUp"],[1,"inner"],[1,"title"],[1,"subtitle"],[1,"default-form","subscribe-form-two"],["method","post","action","http://st.ourhtmldemo.com/new/sailing-demo/contact.html"],[1,"form-group","col-lg-4","col-md-6","col-sm-12"],[1,"field-inner"],["type","text","name","field-name","required","","value","",3,"placeholder"],["type","email","name","field-name","required","","value","",3,"placeholder"],[1,"form-group","col-lg-4","col-md-12","col-sm-12"],["type","submit",1,"theme-btn","btn-style-three"],[1,"btn-title"]],template:function(e,t){1&e&&(n.Xb(0,"section",0),n.Sb(1,"div",1),n.Xb(2,"div",2),n.Xb(3,"div",3),n.Xb(4,"div",4),n.Xb(5,"h1",5),n.Oc(6),n.nc(7,"translate"),n.Wb(),n.Xb(8,"div",6),n.Xb(9,"ul",7),n.Xb(10,"li"),n.Xb(11,"a",8),n.Oc(12),n.nc(13,"translate"),n.Wb(),n.Wb(),n.Xb(14,"li"),n.Oc(15),n.nc(16,"translate"),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Xb(17,"section",9),n.Xb(18,"div",3),n.Xb(19,"div",10),n.Xb(20,"h2"),n.Oc(21),n.nc(22,"translate"),n.Xb(23,"strong"),n.Oc(24),n.nc(25,"translate"),n.Wb(),n.Wb(),n.Xb(26,"p",11),n.Xb(27,"span",12),n.Oc(28),n.nc(29,"translate"),n.Wb(),n.Wb(),n.Xb(30,"p",11),n.Xb(31,"span",12),n.Oc(32),n.nc(33,"translate"),n.Wb(),n.Wb(),n.Wb(),n.Xb(34,"div",13),n.Sb(35,"img",14),n.Wb(),n.Wb(),n.Wb(),n.Xb(36,"section",15),n.Sb(37,"div",16),n.Xb(38,"div",3),n.Xb(39,"div",17),n.Xb(40,"h2"),n.Xb(41,"strong"),n.Oc(42),n.nc(43,"translate"),n.Wb(),n.Wb(),n.Xb(44,"div",18),n.Oc(45),n.nc(46,"translate"),n.Wb(),n.Xb(47,"div",18),n.Oc(48),n.nc(49,"translate"),n.Wb(),n.Wb(),n.Wb(),n.Xb(50,"div",3),n.Xb(51,"div",19),n.Sb(52,"div",20),n.Wb(),n.Wb(),n.Wb(),n.Xb(53,"section",21),n.Sb(54,"div",22),n.Xb(55,"div",23),n.Sb(56,"div",24),n.Wb(),n.Xb(57,"div",3),n.Xb(58,"div",25),n.Xb(59,"div",26),n.Xb(60,"h2"),n.Oc(61),n.nc(62,"translate"),n.Sb(63,"br"),n.Oc(64),n.nc(65,"translate"),n.Sb(66,"br"),n.Oc(67),n.nc(68,"translate"),n.Wb(),n.Xb(69,"div",27),n.Sb(70,"img",28),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Xb(71,"section",29),n.Xb(72,"div",3),n.Xb(73,"div",30),n.Xb(74,"div",31),n.Xb(75,"div",32),n.Xb(76,"div",33),n.Xb(77,"div",34),n.Sb(78,"div",35),n.Wb(),n.Sb(79,"span",36),n.Wb(),n.Xb(80,"div",37),n.Xb(81,"h4"),n.Oc(82),n.nc(83,"translate"),n.Wb(),n.Xb(84,"div",38),n.Oc(85),n.nc(86,"translate"),n.Wb(),n.Sb(87,"div",39),n.Wb(),n.Wb(),n.Wb(),n.Xb(88,"div",31),n.Xb(89,"div",32),n.Xb(90,"div",33),n.Xb(91,"div",34),n.Sb(92,"div",35),n.Wb(),n.Sb(93,"span",40),n.Wb(),n.Xb(94,"div",37),n.Xb(95,"h4"),n.Oc(96),n.nc(97,"translate"),n.Wb(),n.Xb(98,"div",38),n.Oc(99),n.nc(100,"translate"),n.Wb(),n.Sb(101,"div",39),n.Wb(),n.Wb(),n.Wb(),n.Xb(102,"div",41),n.Xb(103,"div",32),n.Xb(104,"div",33),n.Xb(105,"div",34),n.Sb(106,"div",35),n.Wb(),n.Sb(107,"span",42),n.Wb(),n.Xb(108,"div",37),n.Xb(109,"h4"),n.Oc(110),n.nc(111,"translate"),n.Wb(),n.Xb(112,"div",38),n.Oc(113),n.nc(114,"translate"),n.Wb(),n.Sb(115,"div",39),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Xb(116,"section",43),n.Xb(117,"div",3),n.Xb(118,"div",44),n.Xb(119,"div",45),n.Xb(120,"h4"),n.Oc(121),n.nc(122,"translate"),n.Wb(),n.Xb(123,"div",46),n.Oc(124),n.nc(125,"translate"),n.Wb(),n.Wb(),n.Xb(126,"div",47),n.Xb(127,"form",48),n.Xb(128,"div",30),n.Xb(129,"div",49),n.Xb(130,"div",50),n.Sb(131,"input",51),n.nc(132,"translate"),n.Wb(),n.Wb(),n.Xb(133,"div",49),n.Xb(134,"div",50),n.Sb(135,"input",52),n.nc(136,"translate"),n.Wb(),n.Wb(),n.Xb(137,"div",53),n.Xb(138,"button",54),n.Xb(139,"span",55),n.Oc(140),n.nc(141,"translate"),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Wb(),n.Wb()),2&e&&(n.Bb(6),n.Qc("",n.oc(7,25,"about")," "),n.Bb(5),n.rc("routerLink","/"),n.Bb(1),n.Pc(n.oc(13,27,"home")),n.Bb(3),n.Pc(n.oc(16,29,"about")),n.Bb(6),n.Qc("",n.oc(22,31,"welcometo")," "),n.Bb(3),n.Pc(n.oc(25,33,"boatride")),n.Bb(4),n.Pc(n.oc(29,35,"t1")),n.Bb(4),n.Pc(n.oc(33,37,"t2")),n.Bb(10),n.Qc("",n.oc(43,39,"boatrental")," "),n.Bb(3),n.Pc(n.oc(46,41,"t3")),n.Bb(3),n.Pc(n.oc(49,43,"t4")),n.Bb(13),n.Qc("\u201c",n.oc(62,45,"t5")," "),n.Bb(3),n.Qc("",n.oc(65,47,"t6")," "),n.Bb(3),n.Qc(" ",n.oc(68,49,"t7"),".\u201d"),n.Bb(15),n.Pc(n.oc(83,51,"luxuaryyacht")),n.Bb(3),n.Pc(n.oc(86,53,"topic1")),n.Bb(11),n.Pc(n.oc(97,55,"safety")),n.Bb(3),n.Pc(n.oc(100,57,"topic2")),n.Bb(11),n.Pc(n.oc(111,59,"value")),n.Bb(3),n.Qc("",n.oc(114,61,"topic3")," "),n.Bb(8),n.Pc(n.oc(122,63,"newsub")),n.Bb(3),n.Pc(n.oc(125,65,"newssubtopic")),n.Bb(7),n.sc("placeholder",n.oc(132,67,"yourname")),n.Bb(4),n.sc("placeholder",n.oc(136,69,"email")),n.Bb(5),n.Pc(n.oc(141,71,"subnow")))},directives:[i.i],pipes:[r.d],styles:[".carousel-dots[_ngcontent-%COMP%]{background-color:#d3d3d3!important;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important;right:47%!important;bottom:20%!important}"]}),e})()},{path:"**",redirectTo:"",pathMatch:"full"}];let l=(()=>{class e{}return e.\u0275mod=n.Pb({type:e}),e.\u0275inj=n.Ob({factory:function(t){return new(t||e)},imports:[[i.j.forChild(s)],i.j]}),e})();var d=b("0L5U");let u=(()=>{class e{}return e.\u0275mod=n.Pb({type:e}),e.\u0275inj=n.Ob({factory:function(t){return new(t||e)},imports:[[c.c,l,d.b,r.c]]}),e})()}}]);