exports.ids=[2],exports.modules={BjQp:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ContactModule",(function(){return ContactModule}));var common=__webpack_require__("ofXK"),router=__webpack_require__("tyNb"),core=__webpack_require__("fXoL"),seo_service=__webpack_require__("qJwI"),ngx_translate_core=__webpack_require__("sYmb");class ContactComponent{constructor(seoService,cdr){this.seoService=seoService,this.cdr=cdr}ngOnInit(){this.getSeo()}getSeo(){this.seoService.Seo("contact").subscribe(seo=>{this.seoService.updateMetaTags(seo),this.cdr.markForCheck()})}}ContactComponent.\u0275fac=function ContactComponent_Factory(t){return new(t||ContactComponent)(core.Rc(seo_service.a),core.Rc(core.k))},ContactComponent.\u0275cmp=core.Lc({type:ContactComponent,selectors:[["app-contact"]],decls:184,vars:69,consts:[[1,"page-banner","inner-banner-height"],[1,"image-layer",2,"background-image","url('./assets/images/background/banner-1.jpg')"],[1,"banner-inner"],[1,"auto-container"],[1,"inner-container","clearfix"],[1,"inner-banner-height-title"],[1,"page-nav"],[1,"bread-crumb","clearfix"],["routerLink","/"],[1,"contact-section"],[1,"location-filter"],[1,"filter-box"],[1,"default-form"],["method","post","action","http://st.ourhtmldemo.com/new/sailing-demo/contact.html"],[1,"form-group"],[1,"sec-title"],[1,"info-container"],[1,"row","clearfix"],["data-wow-delay","0ms","data-wow-duration","1500ms",1,"info-block","col-xl-3","col-lg-6","col-md-6","col-sm-12","wow","fadeInLeft"],[1,"inner-box"],[1,"icon-box"],[1,"flaticon-address"],[1,"title-box"],[1,"content-box"],[1,"text"],["data-wow-delay","300ms","data-wow-duration","1500ms",1,"info-block","col-xl-3","col-lg-6","col-md-6","col-sm-12","wow","fadeInLeft"],[1,"flaticon-smartphone-3"],["data-wow-delay","600ms","data-wow-duration","1500ms",1,"info-block","col-xl-3","col-lg-6","col-md-6","col-sm-12","wow","fadeInLeft"],[1,"flaticon-email-1"],["data-wow-delay","900ms","data-wow-duration","1500ms",1,"info-block","col-xl-3","col-lg-6","col-md-6","col-sm-12","wow","fadeInLeft"],[1,"flaticon-clock"],[1,"contact-container"],[1,"form-column","col-lg-6","col-md-12","col-sm-12"],["data-wow-delay","0ms","data-wow-duration","1500ms",1,"inner","wow","fadeInLeft"],[1,"default-form","contact-form"],["method","post","id","contact-form","action","http://st.ourhtmldemo.com/new/sailing-demo/sendemail.php"],[1,"form-group","col-lg-6","col-md-6","col-sm-12"],[1,"field-label"],[1,"field-inner"],["type","text","name","username","required","","value","",3,"placeholder"],["type","email","name","email","required","","value","",3,"placeholder"],[1,"form-group","col-lg-12","col-md-12","col-sm-12"],["name","subject",1,"custom-select-box"],["name","message","required","",3,"placeholder"],["type","submit",1,"theme-btn","btn-style-three"],[1,"btn-title"],[1,"map-column","col-lg-6","col-md-12","col-sm-12"],["data-wow-delay","300ms","data-wow-duration","1500ms",1,"inner","wow","fadeInRight"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.968904810561!2d55.13413113551825!3d25.069043043040896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f13516205bfcd%3A0xc15c63bce0d16ba2!2zTWFzamlkIEFsIFJhaGltIC0g2K_YqNmKINmF2KfYsdmK2YbYpyAtINiv2KjZig!5e0!3m2!1sar!2sae!4v1611316130187!5m2!1sar!2sae","height","450","frameborder","0","allowfullscreen","","aria-hidden","false","tabindex","0",2,"width","100%","border","0"],[1,"subscribe-section","style-three","no-padding-top"],[1,"inner"],[1,"image-layer",2,"background-image","url('./assets/images/background/image-12.jpg')"],[1,"title"],[1,"subtitle"],[1,"default-form","subscribe-form-two"],["method","post","action","contact.html"],[1,"form-group","col-lg-4","col-md-6","col-sm-12"],["type","text","name","field-name","required","","value","",3,"placeholder"],["type","email","name","field-name","required","","value","",3,"placeholder"],[1,"form-group","col-lg-4","col-md-12","col-sm-12"],["data-target","html",1,"scroll-to-top","scroll-to-target"],[1,"icon","flaticon-back"]],template:function ContactComponent_Template(rf,ctx){1&rf&&(core.Xc(0,"section",0),core.Sc(1,"div",1),core.Xc(2,"div",2),core.Xc(3,"div",3),core.Xc(4,"div",4),core.Xc(5,"h1",5),core.Nd(6),core.nd(7,"translate"),core.Wc(),core.Xc(8,"div",6),core.Xc(9,"ul",7),core.Xc(10,"li"),core.Xc(11,"a",8),core.Nd(12),core.nd(13,"translate"),core.Wc(),core.Wc(),core.Xc(14,"li"),core.Nd(15),core.nd(16,"translate"),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Xc(17,"section",9),core.Xc(18,"div",3),core.Xc(19,"div",10),core.Xc(20,"div",11),core.Xc(21,"div",12),core.Xc(22,"form",13),core.Xc(23,"div",14),core.Xc(24,"div",15),core.Xc(25,"h2"),core.Xc(26,"strong"),core.Nd(27),core.nd(28,"translate"),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Xc(29,"div",16),core.Xc(30,"div",17),core.Xc(31,"div",18),core.Xc(32,"div",19),core.Xc(33,"div",20),core.Sc(34,"span",21),core.Wc(),core.Xc(35,"div",22),core.Xc(36,"h4"),core.Nd(37),core.nd(38,"translate"),core.Wc(),core.Wc(),core.Xc(39,"div",23),core.Xc(40,"div",24),core.Nd(41,"King Salman Bin Abdulaziz Al Saud St - Dubai Marina - "),core.Sc(42,"br"),core.Nd(43," Dubai, UAE."),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Xc(44,"div",25),core.Xc(45,"div",19),core.Xc(46,"div",20),core.Sc(47,"span",26),core.Wc(),core.Xc(48,"div",22),core.Xc(49,"h4"),core.Nd(50),core.nd(51,"translate"),core.Wc(),core.Wc(),core.Xc(52,"div",23),core.Xc(53,"div",24),core.Nd(54,"Call Us On:"),core.Sc(55,"br"),core.Nd(56," +971 52 491 8686 "),core.Sc(57,"br"),core.Nd(58,"+971 54 588 7084"),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Xc(59,"div",27),core.Xc(60,"div",19),core.Xc(61,"div",20),core.Sc(62,"span",28),core.Wc(),core.Xc(63,"div",22),core.Xc(64,"h4"),core.Nd(65),core.nd(66,"translate"),core.Wc(),core.Wc(),core.Xc(67,"div",23),core.Xc(68,"div",24),core.Nd(69,"Send Message To:"),core.Sc(70,"br"),core.Nd(71,"info@boatsride.com "),core.Sc(72,"br"),core.Nd(73," marketing@boatsride.com "),core.Sc(74,"br"),core.Nd(75," support@boatsride.come "),core.Sc(76,"br"),core.Nd(77," reservation@boatsride.com"),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Xc(78,"div",29),core.Xc(79,"div",19),core.Xc(80,"div",20),core.Sc(81,"span",30),core.Wc(),core.Xc(82,"div",22),core.Xc(83,"h4"),core.Nd(84,"Op. Hrs"),core.Wc(),core.Wc(),core.Xc(85,"div",23),core.Xc(86,"div",24),core.Nd(87,"Week Days:"),core.Sc(88,"br"),core.Nd(89,"09:00am to 02:00pm"),core.Sc(90,"br"),core.Nd(91,"03:00pm to 03:00am"),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Xc(92,"div",31),core.Xc(93,"div",17),core.Xc(94,"div",32),core.Xc(95,"div",33),core.Xc(96,"div",15),core.Xc(97,"h2"),core.Xc(98,"strong"),core.Nd(99),core.nd(100,"translate"),core.Wc(),core.Wc(),core.Wc(),core.Xc(101,"div",34),core.Xc(102,"form",35),core.Xc(103,"div",17),core.Xc(104,"div",36),core.Xc(105,"div",37),core.Nd(106),core.nd(107,"translate"),core.Wc(),core.Xc(108,"div",38),core.Sc(109,"input",39),core.nd(110,"translate"),core.Wc(),core.Wc(),core.Xc(111,"div",36),core.Xc(112,"div",37),core.Nd(113),core.nd(114,"translate"),core.Wc(),core.Xc(115,"div",38),core.Sc(116,"input",40),core.nd(117,"translate"),core.Wc(),core.Wc(),core.Xc(118,"div",41),core.Xc(119,"div",37),core.Nd(120),core.nd(121,"translate"),core.Wc(),core.Xc(122,"div",38),core.Xc(123,"select",42),core.Xc(124,"option"),core.Nd(125),core.nd(126,"translate"),core.Wc(),core.Xc(127,"option"),core.Nd(128,"Yacht Rental"),core.Wc(),core.Xc(129,"option"),core.Nd(130,"Water Surfing"),core.Wc(),core.Xc(131,"option"),core.Nd(132,"Fishing Trip"),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Xc(133,"div",41),core.Xc(134,"div",37),core.Nd(135),core.nd(136,"translate"),core.Wc(),core.Xc(137,"div",38),core.Sc(138,"textarea",43),core.nd(139,"translate"),core.Wc(),core.Wc(),core.Xc(140,"div",41),core.Xc(141,"button",44),core.Xc(142,"span",45),core.Nd(143),core.nd(144,"translate"),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Xc(145,"div",46),core.Xc(146,"div",47),core.Xc(147,"div",15),core.Sc(148,"br"),core.Sc(149,"br"),core.Xc(150,"h2"),core.Xc(151,"strong"),core.Nd(152),core.nd(153,"translate"),core.Wc(),core.Wc(),core.Wc(),core.Sc(154,"iframe",48),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Xc(155,"section",49),core.Xc(156,"div",3),core.Xc(157,"div",50),core.Sc(158,"div",51),core.Xc(159,"div",52),core.Xc(160,"h4"),core.Nd(161),core.nd(162,"translate"),core.Wc(),core.Xc(163,"div",53),core.Nd(164),core.nd(165,"translate"),core.Wc(),core.Wc(),core.Xc(166,"div",54),core.Xc(167,"form",55),core.Xc(168,"div",17),core.Xc(169,"div",56),core.Xc(170,"div",38),core.Sc(171,"input",57),core.nd(172,"translate"),core.Wc(),core.Wc(),core.Xc(173,"div",56),core.Xc(174,"div",38),core.Sc(175,"input",58),core.nd(176,"translate"),core.Wc(),core.Wc(),core.Xc(177,"div",59),core.Xc(178,"button",44),core.Xc(179,"span",45),core.Nd(180),core.nd(181,"translate"),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Wc(),core.Xc(182,"div",60),core.Sc(183,"span",61),core.Wc()),2&rf&&(core.Bc(6),core.Od(core.od(7,23,"getintouch")),core.Bc(6),core.Od(core.od(13,25,"home")),core.Bc(3),core.Od(core.od(16,27,"contact")),core.Bc(12),core.Od(core.od(28,29,"contact")),core.Bc(10),core.Od(core.od(38,31,"address")),core.Bc(13),core.Od(core.od(51,33,"phone")),core.Bc(15),core.Od(core.od(66,35,"email")),core.Bc(34),core.Od(core.od(100,37,"sendmessage")),core.Bc(7),core.Od(core.od(107,39,"yourname")),core.Bc(3),core.sd("placeholder",core.od(110,41,"yourname")),core.Bc(4),core.Od(core.od(114,43,"email")),core.Bc(3),core.sd("placeholder",core.od(117,45,"email")),core.Bc(4),core.Od(core.od(121,47,"subject")),core.Bc(5),core.Od(core.od(126,49,"subject")),core.Bc(10),core.Od(core.od(136,51,"message")),core.Bc(3),core.td("placeholder","",core.od(139,53,"message"),"..."),core.Bc(5),core.Od(core.od(144,55,"message")),core.Bc(9),core.Od(core.od(153,57,"findloc")),core.Bc(9),core.Od(core.od(162,59,"newsub")),core.Bc(3),core.Od(core.od(165,61,"newssubtopic")),core.Bc(7),core.sd("placeholder",core.od(172,63,"yourname")),core.Bc(4),core.sd("placeholder",core.od(176,65,"email")),core.Bc(5),core.Od(core.od(181,67,"subnow")))},directives:[router.h],pipes:[ngx_translate_core.c],styles:[""]});const routes=[{path:"",component:ContactComponent},{path:"**",redirectTo:"",pathMatch:"full"}];class ContactRoutingModule{}ContactRoutingModule.\u0275mod=core.Pc({type:ContactRoutingModule}),ContactRoutingModule.\u0275inj=core.Oc({factory:function ContactRoutingModule_Factory(t){return new(t||ContactRoutingModule)},imports:[[router.i.forChild(routes)],router.i]});class ContactModule{}ContactModule.\u0275mod=core.Pc({type:ContactModule}),ContactModule.\u0275inj=core.Oc({factory:function ContactModule_Factory(t){return new(t||ContactModule)},imports:[[common.b,ContactRoutingModule,ngx_translate_core.b]]})}};