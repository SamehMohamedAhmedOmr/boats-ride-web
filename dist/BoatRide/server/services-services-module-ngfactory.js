exports.ids=[10],exports.modules={W5Ts:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ServicesModuleNgFactory",(function(){return ServicesModuleNgFactory}));var core=__webpack_require__("8Y7J");class ServicesModule{}var router_ngfactory=__webpack_require__("pMnS"),router=__webpack_require__("iInd");class ServicesComponent{constructor(){}ngOnInit(){}}var styles_ServicesComponent=[[""]],RenderType_ServicesComponent=core.Xb({encapsulation:0,styles:styles_ServicesComponent,data:{}});function View_ServicesComponent_0(_l){return core.Dc(0,[(_l()(),core.Zb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),core.Yb(1,212992,null,0,router.s,[router.b,core.nb,core.p,[8,null],core.k],null,null)],(function(_ck,_v){_ck(_v,1,0)}),null)}var ServicesComponentNgFactory=core.Vb("app-services",ServicesComponent,(function View_ServicesComponent_Host_0(_l){return core.Dc(0,[(_l()(),core.Zb(0,0,null,null,1,"app-services",[],null,null,null,View_ServicesComponent_0,RenderType_ServicesComponent)),core.Yb(1,114688,null,0,ServicesComponent,[],null,null)],(function(_ck,_v){_ck(_v,1,0)}),null)}),{},{},[]),ngx_skeleton_loader_ngfactory=__webpack_require__("132j"),ngx_skeleton_loader=__webpack_require__("WzhS"),common=__webpack_require__("SVse"),ngx_translate_core=__webpack_require__("TSSN");class IndexComponent{constructor(services,seoService,cdr){this.services=services,this.seoService=seoService,this.cdr=cdr,this.Services=[],this.is_loading=!0}ngOnInit(){this.getSeo(),this.getServices()}getServices(){this.services.getSevices().subscribe(data=>{this.Services=data,this.is_loading=!1,this.cdr.markForCheck()})}getSeo(){this.seoService.Seo("services").subscribe(seo=>{this.seoService.updateMetaTags(seo),this.is_loading=!1,this.cdr.markForCheck()})}}var services_service=__webpack_require__("IVS7"),seo_service=__webpack_require__("qJwI"),styles_IndexComponent=[[".overlay22[_ngcontent-%COMP%]{width:unset!important}@media only screen and (max-width:700px){.overlay22[_ngcontent-%COMP%]{display:contents!important}.header-style-three[_ngcontent-%COMP%]   .header-upper[_ngcontent-%COMP%]   .max-nav-toggler[_ngcontent-%COMP%]{position:relative;float:left;padding-top:12px;margin-left:-5px;float:none}}"]],RenderType_IndexComponent=core.Xb({encapsulation:0,styles:styles_IndexComponent,data:{}});function View_IndexComponent_1(_l){return core.Dc(0,[(_l()(),core.Zb(0,0,null,null,3,"div",[["class","item"]],null,null,null,null,null)),(_l()(),core.Zb(1,0,null,null,2,"ngx-skeleton-loader",[["appearance","circle"],["count","1"]],null,null,null,ngx_skeleton_loader_ngfactory.b,ngx_skeleton_loader_ngfactory.a)),core.Yb(2,4964352,null,0,ngx_skeleton_loader.b,[[2,ngx_skeleton_loader.a]],{count:[0,"count"],appearance:[1,"appearance"],theme:[2,"theme"]},null),core.sc(3,{width:0,height:1,"border-radius":2})],(function(_ck,_v){var currVal_2=_ck(_v,3,0,"100%","1000px","10px");_ck(_v,2,0,"1","circle",currVal_2)}),null)}function View_IndexComponent_2(_l){return core.Dc(0,[(_l()(),core.Zb(0,0,null,null,28,"div",[["class","activity-block-two"]],null,null,null,null,null)),(_l()(),core.Zb(1,0,null,null,27,"div",[["class","inner-box clearfix"]],null,null,null,null,null)),(_l()(),core.Zb(2,0,null,null,0,"div",[["class","image-layer"]],[[4,"background-image",null]],null,null,null,null)),(_l()(),core.Zb(3,0,null,null,3,"div",[["class","image-box"]],null,null,null,null,null)),(_l()(),core.Zb(4,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(_v,en,$event){var ad=!0;"click"===en&&(ad=!1!==core.pc(_v,5).onClick($event.button,$event.ctrlKey,$event.metaKey,$event.shiftKey)&&ad);return ad}),null,null)),core.Yb(5,671744,null,0,router.q,[router.o,router.a,common.h],{routerLink:[0,"routerLink"]},null),(_l()(),core.Zb(6,0,null,null,0,"img",[["alt",""],["title",""]],[[8,"src",4]],null,null,null,null)),(_l()(),core.Zb(7,0,null,null,21,"div",[["class","content-box"]],null,null,null,null,null)),(_l()(),core.Zb(8,0,null,null,20,"div",[["class","overlay22"],["style","height: 310px; margin: -40px;"]],null,null,null,null,null)),(_l()(),core.Zb(9,0,null,null,7,"div",[["class","content"]],null,null,null,null,null)),(_l()(),core.Zb(10,0,null,null,3,"h4",[],null,null,null,null,null)),(_l()(),core.Zb(11,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(_v,en,$event){var ad=!0;"click"===en&&(ad=!1!==core.pc(_v,12).onClick($event.button,$event.ctrlKey,$event.metaKey,$event.shiftKey)&&ad);return ad}),null,null)),core.Yb(12,671744,null,0,router.q,[router.o,router.a,common.h],{routerLink:[0,"routerLink"]},null),(_l()(),core.Ac(13,null,["",""])),(_l()(),core.Zb(14,0,null,null,0,"br",[],null,null,null,null,null)),(_l()(),core.Zb(15,0,null,null,1,"div",[["class","info"]],null,null,null,null,null)),(_l()(),core.Zb(16,0,null,null,0,"ul",[["class","clearfix"]],null,null,null,null,null)),(_l()(),core.Zb(17,0,null,null,11,"div",[["class","links-box clearfix"]],null,null,null,null,null)),(_l()(),core.Zb(18,0,null,null,10,"div",[["class","link"]],null,null,null,null,null)),(_l()(),core.Zb(19,0,null,null,4,"a",[["class","theme-btn btn-style-two"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(_v,en,$event){var ad=!0;"click"===en&&(ad=!1!==core.pc(_v,20).onClick($event.button,$event.ctrlKey,$event.metaKey,$event.shiftKey)&&ad);return ad}),null,null)),core.Yb(20,671744,null,0,router.q,[router.o,router.a,common.h],{routerLink:[0,"routerLink"]},null),(_l()(),core.Zb(21,0,null,null,2,"span",[["class","btn-title"]],null,null,null,null,null)),(_l()(),core.Ac(22,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(24,0,null,null,4,"a",[["class","theme-btn btn-style-two"],["routerLink","/yachts"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(_v,en,$event){var ad=!0;"click"===en&&(ad=!1!==core.pc(_v,25).onClick($event.button,$event.ctrlKey,$event.metaKey,$event.shiftKey)&&ad);return ad}),null,null)),core.Yb(25,671744,null,0,router.q,[router.o,router.a,common.h],{routerLink:[0,"routerLink"]},null),(_l()(),core.Zb(26,0,null,null,2,"span",[["class","btn-title"]],null,null,null,null,null)),(_l()(),core.Ac(27,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k])],(function(_ck,_v){_ck(_v,5,0,core.gc(1,"/services/",_v.context.$implicit.slug,"")),_ck(_v,12,0,core.gc(1,"/services/",_v.context.$implicit.slug,"")),_ck(_v,20,0,core.gc(1,"/services/",_v.context.$implicit.slug,""));_ck(_v,25,0,"/yachts")}),(function(_ck,_v){_ck(_v,2,0,_v.context.$implicit.image),_ck(_v,4,0,core.pc(_v,5).target,core.pc(_v,5).href),_ck(_v,6,0,core.gc(1,"",_v.context.$implicit.image,"")),_ck(_v,11,0,core.pc(_v,12).target,core.pc(_v,12).href),_ck(_v,13,0,_v.context.$implicit.name),_ck(_v,19,0,core.pc(_v,20).target,core.pc(_v,20).href),_ck(_v,22,0,core.Bc(_v,22,0,core.pc(_v,23).transform("moredetails"))),_ck(_v,24,0,core.pc(_v,25).target,core.pc(_v,25).href),_ck(_v,27,0,core.Bc(_v,27,0,core.pc(_v,28).transform("booknow")))}))}function View_IndexComponent_0(_l){return core.Dc(0,[(_l()(),core.Zb(0,0,null,null,19,"section",[["class","page-banner inner-banner-height"]],null,null,null,null,null)),(_l()(),core.Zb(1,0,null,null,0,"div",[["class","image-layer"],["style","background-image:url(./assets/Banners/services-01-01.jpg);"]],null,null,null,null,null)),(_l()(),core.Zb(2,0,null,null,17,"div",[["class","banner-inner"]],null,null,null,null,null)),(_l()(),core.Zb(3,0,null,null,16,"div",[["class","auto-container"]],null,null,null,null,null)),(_l()(),core.Zb(4,0,null,null,15,"div",[["class","inner-container clearfix"]],null,null,null,null,null)),(_l()(),core.Zb(5,0,null,null,2,"h1",[["class","inner-banner-height-title"]],null,null,null,null,null)),(_l()(),core.Ac(6,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(8,0,null,null,11,"div",[["class","page-nav"]],null,null,null,null,null)),(_l()(),core.Zb(9,0,null,null,10,"ul",[["class","bread-crumb clearfix"]],null,null,null,null,null)),(_l()(),core.Zb(10,0,null,null,4,"li",[],null,null,null,null,null)),(_l()(),core.Zb(11,0,null,null,3,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(_v,en,$event){var ad=!0;"click"===en&&(ad=!1!==core.pc(_v,12).onClick($event.button,$event.ctrlKey,$event.metaKey,$event.shiftKey)&&ad);return ad}),null,null)),core.Yb(12,671744,null,0,router.q,[router.o,router.a,common.h],{routerLink:[0,"routerLink"]},null),(_l()(),core.Ac(13,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(15,0,null,null,4,"li",[],null,null,null,null,null)),(_l()(),core.Zb(16,0,null,null,3,"a",[["routerLink","/yachts"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(_v,en,$event){var ad=!0;"click"===en&&(ad=!1!==core.pc(_v,17).onClick($event.button,$event.ctrlKey,$event.metaKey,$event.shiftKey)&&ad);return ad}),null,null)),core.Yb(17,671744,null,0,router.q,[router.o,router.a,common.h],{routerLink:[0,"routerLink"]},null),(_l()(),core.Ac(18,null,[""," "])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(20,0,null,null,68,"section",[["class","yacht-tours-container"]],null,null,null,null,null)),(_l()(),core.Zb(21,0,null,null,67,"div",[["class","auto-container"]],null,null,null,null,null)),(_l()(),core.Zb(22,0,null,null,3,"div",[["class","main-title"]],null,null,null,null,null)),(_l()(),core.Zb(23,0,null,null,2,"h3",[["style","font-size: 3rem;"]],null,null,null,null,null)),(_l()(),core.Ac(24,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(26,0,null,null,2,"div",[["class","default-form yacht-search-form"]],null,null,null,null,null)),(_l()(),core.Zb(27,0,null,null,1,"form",[["action","http://st.ourhtmldemo.com/new/sailing-demo/yacht-tour-single.html"],["method","post"]],null,null,null,null,null)),(_l()(),core.Zb(28,0,null,null,0,"div",[["class","row clearfix"]],null,null,null,null,null)),(_l()(),core.Zb(29,0,null,null,59,"div",[["class","content-container"]],null,null,null,null,null)),(_l()(),core.Zb(30,0,null,null,58,"div",[["class","row clearfix"]],null,null,null,null,null)),(_l()(),core.Zb(31,0,null,null,9,"div",[["class","content-side col-lg-8 col-md-12 col-sm-12"]],null,null,null,null,null)),(_l()(),core.Zb(32,0,null,null,8,"div",[["class","content-inner"]],null,null,null,null,null)),(_l()(),core.Zb(33,0,null,null,2,"div",[["class","lower-filter-row clearfix"]],null,null,null,null,null)),(_l()(),core.Zb(34,0,null,null,1,"div",[["class","results-count"]],null,null,null,null,null)),(_l()(),core.Zb(35,0,null,null,0,"span",[],null,null,null,null,null)),(_l()(),core.Zb(36,0,null,null,4,"div",[["class","results-row"]],null,null,null,null,null)),(_l()(),core.Jb(16777216,null,null,1,null,View_IndexComponent_1)),core.Yb(38,16384,null,0,common.k,[core.nb,core.jb],{ngIf:[0,"ngIf"]},null),(_l()(),core.Jb(16777216,null,null,1,null,View_IndexComponent_2)),core.Yb(40,278528,null,0,common.j,[core.nb,core.jb,core.H],{ngForOf:[0,"ngForOf"]},null),(_l()(),core.Zb(41,0,null,null,47,"div",[["class","widgets-side col-lg-4 col-md-12 col-sm-12"]],null,null,null,null,null)),(_l()(),core.Zb(42,0,null,null,46,"div",[["class","widgets-content"]],null,null,null,null,null)),(_l()(),core.Zb(43,0,null,null,45,"div",[["class","divboxes"]],null,null,null,null,null)),(_l()(),core.Zb(44,0,null,null,8,"div",[["class","box1"]],null,null,null,null,null)),(_l()(),core.Zb(45,0,null,null,7,"div",[["class","content1"]],null,null,null,null,null)),(_l()(),core.Zb(46,0,null,null,0,"a",[["class","sc_services_item_icon icon-2"],["href",""],["id","sc_services_1061452142_icon-2"]],null,null,null,null,null)),(_l()(),core.Zb(47,0,null,null,2,"p",[["class","title"]],null,null,null,null,null)),(_l()(),core.Ac(48,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(50,0,null,null,2,"p",[["style","width: 200px; margin: auto;"]],null,null,null,null,null)),(_l()(),core.Ac(51,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(53,0,null,null,8,"div",[["class","box2"]],null,null,null,null,null)),(_l()(),core.Zb(54,0,null,null,7,"div",[["class","content1"]],null,null,null,null,null)),(_l()(),core.Zb(55,0,null,null,0,"a",[["class","sc_services_item_icon icon-3"],["href",""],["id","sc_services_1061452142_icon-3"]],null,null,null,null,null)),(_l()(),core.Zb(56,0,null,null,2,"p",[["class","title"]],null,null,null,null,null)),(_l()(),core.Ac(57,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(59,0,null,null,2,"p",[["style","width: 200px; margin: auto;"]],null,null,null,null,null)),(_l()(),core.Ac(60,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(62,0,null,null,8,"div",[["class","box3"]],null,null,null,null,null)),(_l()(),core.Zb(63,0,null,null,7,"div",[["class","content1"]],null,null,null,null,null)),(_l()(),core.Zb(64,0,null,null,0,"a",[["class","sc_services_item_icon icon-4"],["href",""],["id","sc_services_1310323539_icon-4"]],null,null,null,null,null)),(_l()(),core.Zb(65,0,null,null,2,"p",[["class","title"]],null,null,null,null,null)),(_l()(),core.Ac(66,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(68,0,null,null,2,"p",[["style","width: 200px; margin: auto;"]],null,null,null,null,null)),(_l()(),core.Ac(69,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(71,0,null,null,8,"div",[["class","box4"]],null,null,null,null,null)),(_l()(),core.Zb(72,0,null,null,7,"div",[["class","content1"]],null,null,null,null,null)),(_l()(),core.Zb(73,0,null,null,0,"a",[["class","sc_services_item_icon icon-5"],["href",""],["id","sc_services_1062841435_icon-5"]],null,null,null,null,null)),(_l()(),core.Zb(74,0,null,null,2,"p",[["class","title"]],null,null,null,null,null)),(_l()(),core.Ac(75,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(77,0,null,null,2,"p",[["style","width: 200px; margin: auto;"]],null,null,null,null,null)),(_l()(),core.Ac(78,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(80,0,null,null,8,"div",[["class","box5"]],null,null,null,null,null)),(_l()(),core.Zb(81,0,null,null,7,"div",[["class","content1"]],null,null,null,null,null)),(_l()(),core.Zb(82,0,null,null,0,"a",[["class","sc_services_item_icon icon-6"],["href",""],["id","sc_services_1062841435_icon-6"]],null,null,null,null,null)),(_l()(),core.Zb(83,0,null,null,2,"p",[["class","title"]],null,null,null,null,null)),(_l()(),core.Ac(84,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(86,0,null,null,2,"p",[["style","width: 200px; margin: auto;"]],null,null,null,null,null)),(_l()(),core.Ac(87,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(89,0,null,null,26,"section",[["class","subscribe-section style-three"]],null,null,null,null,null)),(_l()(),core.Zb(90,0,null,null,25,"div",[["class","auto-container"]],null,null,null,null,null)),(_l()(),core.Zb(91,0,null,null,24,"div",[["class","inner"]],null,null,null,null,null)),(_l()(),core.Zb(92,0,null,null,0,"div",[["class","image-layer"],["style","background-image:url(./assets/images/background/image-12.jpg);"]],null,null,null,null,null)),(_l()(),core.Zb(93,0,null,null,6,"div",[["class","title"]],null,null,null,null,null)),(_l()(),core.Zb(94,0,null,null,2,"h4",[],null,null,null,null,null)),(_l()(),core.Ac(95,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(97,0,null,null,2,"div",[["class","subtitle"]],null,null,null,null,null)),(_l()(),core.Ac(98,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(100,0,null,null,15,"div",[["class","default-form subscribe-form-two"]],null,null,null,null,null)),(_l()(),core.Zb(101,0,null,null,14,"form",[["action","http://st.ourhtmldemo.com/new/sailing-demo/contact.html"],["method","post"]],null,null,null,null,null)),(_l()(),core.Zb(102,0,null,null,13,"div",[["class","row clearfix"]],null,null,null,null,null)),(_l()(),core.Zb(103,0,null,null,3,"div",[["class","form-group col-lg-4 col-md-6 col-sm-12"]],null,null,null,null,null)),(_l()(),core.Zb(104,0,null,null,2,"div",[["class","field-inner"]],null,null,null,null,null)),(_l()(),core.Zb(105,0,null,null,1,"input",[["name","field-name"],["required",""],["type","text"],["value",""]],[[8,"placeholder",0]],null,null,null,null)),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(107,0,null,null,3,"div",[["class","form-group col-lg-4 col-md-6 col-sm-12"]],null,null,null,null,null)),(_l()(),core.Zb(108,0,null,null,2,"div",[["class","field-inner"]],null,null,null,null,null)),(_l()(),core.Zb(109,0,null,null,1,"input",[["name","field-name"],["required",""],["type","email"],["value",""]],[[8,"placeholder",0]],null,null,null,null)),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(111,0,null,null,4,"div",[["class","form-group col-lg-4 col-md-12 col-sm-12"]],null,null,null,null,null)),(_l()(),core.Zb(112,0,null,null,3,"button",[["class","theme-btn btn-style-three"],["type","submit"]],null,null,null,null,null)),(_l()(),core.Zb(113,0,null,null,2,"span",[["class","btn-title"]],null,null,null,null,null)),(_l()(),core.Ac(114,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k])],(function(_ck,_v){var _co=_v.component;_ck(_v,12,0,"/");_ck(_v,17,0,"/yachts"),_ck(_v,38,0,_co.is_loading),_ck(_v,40,0,_co.Services)}),(function(_ck,_v){_ck(_v,6,0,core.Bc(_v,6,0,core.pc(_v,7).transform("addService"))),_ck(_v,11,0,core.pc(_v,12).target,core.pc(_v,12).href),_ck(_v,13,0,core.Bc(_v,13,0,core.pc(_v,14).transform("home"))),_ck(_v,16,0,core.pc(_v,17).target,core.pc(_v,17).href),_ck(_v,18,0,core.Bc(_v,18,0,core.pc(_v,19).transform("addService"))),_ck(_v,24,0,core.Bc(_v,24,0,core.pc(_v,25).transform("addService"))),_ck(_v,48,0,core.Bc(_v,48,0,core.pc(_v,49).transform("sailing"))),_ck(_v,51,0,core.Bc(_v,51,0,core.pc(_v,52).transform("t12"))),_ck(_v,57,0,core.Bc(_v,57,0,core.pc(_v,58).transform("club"))),_ck(_v,60,0,core.Bc(_v,60,0,core.pc(_v,61).transform("t13"))),_ck(_v,66,0,core.Bc(_v,66,0,core.pc(_v,67).transform("diving"))),_ck(_v,69,0,core.Bc(_v,69,0,core.pc(_v,70).transform("t14"))),_ck(_v,75,0,core.Bc(_v,75,0,core.pc(_v,76).transform("fishing"))),_ck(_v,78,0,core.Bc(_v,78,0,core.pc(_v,79).transform("t15"))),_ck(_v,84,0,core.Bc(_v,84,0,core.pc(_v,85).transform("tour"))),_ck(_v,87,0,core.Bc(_v,87,0,core.pc(_v,88).transform("t16"))),_ck(_v,95,0,core.Bc(_v,95,0,core.pc(_v,96).transform("newsub"))),_ck(_v,98,0,core.Bc(_v,98,0,core.pc(_v,99).transform("newssubtopic"))),_ck(_v,105,0,core.gc(1,"",core.Bc(_v,105,0,core.pc(_v,106).transform("yourname")),"")),_ck(_v,109,0,core.gc(1,"",core.Bc(_v,109,0,core.pc(_v,110).transform("email")),"")),_ck(_v,114,0,core.Bc(_v,114,0,core.pc(_v,115).transform("subnow")))}))}var IndexComponentNgFactory=core.Vb("app-index",IndexComponent,(function View_IndexComponent_Host_0(_l){return core.Dc(0,[(_l()(),core.Zb(0,0,null,null,1,"app-index",[],null,null,null,View_IndexComponent_0,RenderType_IndexComponent)),core.Yb(1,114688,null,0,IndexComponent,[services_service.a,seo_service.a,core.k],null,null)],(function(_ck,_v){_ck(_v,1,0)}),null)}),{},{},[]),ng_bootstrap_ngfactory=__webpack_require__("9AJC"),ng_bootstrap=__webpack_require__("G0yt");class service_details_component_ServiceDetailsComponent{constructor(route,services,platformId,metaService,cdr){this.route=route,this.services=services,this.platformId=platformId,this.metaService=metaService,this.cdr=cdr,this.isBrowser=!1,this.isBrowser=Object(common.C)(platformId)}ngOnInit(){this.slug=this.route.snapshot.params.slug,this.getService()}getService(){this.services.getService(this.slug).subscribe(data=>{this.service=data,this.updateMetaTags(),this.cdr.markForCheck()})}updateMetaTags(){var _a,_b,_c,_d,_e;window.dataLayer=[],this.metaService.updateTags(null===(_b=null===(_a=this.service)||void 0===_a?void 0:_a.seo)||void 0===_b?void 0:_b.title,null===(_d=null===(_c=this.service)||void 0===_c?void 0:_c.seo)||void 0===_d?void 0:_d.description,null===(_e=this.service)||void 0===_e?void 0:_e.image),window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"details",ecommerce:{currencyCode:"AED",detail:{products:[{name:this.service.name?this.service.name:"",id:this.service.id?this.service.id:"",price:this.service.price?this.service.price:""}]}}})}}var meta_tag_service=__webpack_require__("DmsX"),styles_ServiceDetailsComponent=[[""]],RenderType_ServiceDetailsComponent=core.Xb({encapsulation:0,styles:styles_ServiceDetailsComponent,data:{}});function View_ServiceDetailsComponent_1(_l){return core.Dc(0,[(_l()(),core.Zb(0,0,null,null,18,"section",[["class","page-banner inner-banner-height"]],null,null,null,null,null)),(_l()(),core.Zb(1,0,null,null,0,"div",[["class","image-layer"],["style","background-image:url(../../../assets/images/background/banner-1.jpg);"]],null,null,null,null,null)),(_l()(),core.Zb(2,0,null,null,16,"div",[["class","banner-inner"]],null,null,null,null,null)),(_l()(),core.Zb(3,0,null,null,15,"div",[["class","auto-container"]],null,null,null,null,null)),(_l()(),core.Zb(4,0,null,null,14,"div",[["class","inner-container clearfix"]],null,null,null,null,null)),(_l()(),core.Zb(5,0,null,null,1,"h1",[["class","inner-banner-height-title"]],null,null,null,null,null)),(_l()(),core.Ac(6,null,["",""])),(_l()(),core.Zb(7,0,null,null,11,"div",[["class","page-nav"]],null,null,null,null,null)),(_l()(),core.Zb(8,0,null,null,10,"ul",[["class","bread-crumb clearfix"]],null,null,null,null,null)),(_l()(),core.Zb(9,0,null,null,3,"li",[],null,null,null,null,null)),(_l()(),core.Zb(10,0,null,null,2,"a",[["href","../../../index.html"]],null,null,null,null,null)),(_l()(),core.Ac(11,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(13,0,null,null,3,"li",[],null,null,null,null,null)),(_l()(),core.Zb(14,0,null,null,2,"a",[["href","yacht-rent.html"]],null,null,null,null,null)),(_l()(),core.Ac(15,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(17,0,null,null,1,"li",[],null,null,null,null,null)),(_l()(),core.Ac(18,null,["",""]))],null,(function(_ck,_v){var _co=_v.component;_ck(_v,6,0,_co.service.name),_ck(_v,11,0,core.Bc(_v,11,0,core.pc(_v,12).transform("home"))),_ck(_v,15,0,core.Bc(_v,15,0,core.pc(_v,16).transform("yachts"))),_ck(_v,18,0,_co.service.name)}))}function View_ServiceDetailsComponent_2(_l){return core.Dc(0,[(_l()(),core.Zb(0,0,null,null,3,"div",[["class","item"]],null,null,null,null,null)),(_l()(),core.Zb(1,0,null,null,2,"ngx-skeleton-loader",[["appearance","circle"],["class","d-flex justify-content-between"],["count","1"]],null,null,null,ngx_skeleton_loader_ngfactory.b,ngx_skeleton_loader_ngfactory.a)),core.Yb(2,4964352,null,0,ngx_skeleton_loader.b,[[2,ngx_skeleton_loader.a]],{count:[0,"count"],appearance:[1,"appearance"],theme:[2,"theme"]},null),core.sc(3,{height:0,width:1,"border-radius":2})],(function(_ck,_v){var currVal_2=_ck(_v,3,0,"700px","100%","10px");_ck(_v,2,0,"1","circle",currVal_2)}),null)}function View_ServiceDetailsComponent_3(_l){return core.Dc(0,[(_l()(),core.Zb(0,0,null,null,3,"div",[["class","item col-lg-8 col-md-12 col-sm-12"]],null,null,null,null,null)),(_l()(),core.Zb(1,0,null,null,2,"ngx-skeleton-loader",[["appearance","circle"],["class","d-flex justify-content-between"],["count","1"]],null,null,null,ngx_skeleton_loader_ngfactory.b,ngx_skeleton_loader_ngfactory.a)),core.Yb(2,4964352,null,0,ngx_skeleton_loader.b,[[2,ngx_skeleton_loader.a]],{count:[0,"count"],appearance:[1,"appearance"],theme:[2,"theme"]},null),core.sc(3,{height:0,width:1,"border-radius":2})],(function(_ck,_v){var currVal_2=_ck(_v,3,0,"700px","100%","10px");_ck(_v,2,0,"1","circle",currVal_2)}),null)}function View_ServiceDetailsComponent_6(_l){return core.Dc(0,[(_l()(),core.Zb(0,0,null,null,4,"div",[["class","recommend-block"]],null,null,null,null,null)),(_l()(),core.Zb(1,0,null,null,3,"div",[["class","inner"]],null,null,null,null,null)),(_l()(),core.Zb(2,0,null,null,2,"div",[["class","image-box"]],null,null,null,null,null)),(_l()(),core.Zb(3,0,null,null,1,"a",[],null,null,null,null,null)),(_l()(),core.Zb(4,0,null,null,0,"img",[["alt",""],["title",""]],[[8,"src",4]],null,null,null,null))],null,(function(_ck,_v){var _co=_v.component;_ck(_v,4,0,core.gc(1,"",_co.service.image,""))}))}function View_ServiceDetailsComponent_5(_l){return core.Dc(0,[(_l()(),core.Zb(0,0,null,null,5,"div",[["class","widget-inner"]],null,null,null,null,null)),(_l()(),core.Zb(1,0,null,null,4,"ngb-carousel",[["class","carousel slide"],["tabIndex","0"]],[[4,"display",null]],[[null,"keydown.arrowLeft"],[null,"keydown.arrowRight"],[null,"mouseenter"],[null,"mouseleave"]],(function(_v,en,$event){var ad=!0;"keydown.arrowLeft"===en&&(ad=!1!==(core.pc(_v,2).keyboard&&core.pc(_v,2).prev(core.pc(_v,2).NgbSlideEventSource.ARROW_LEFT))&&ad);"keydown.arrowRight"===en&&(ad=!1!==(core.pc(_v,2).keyboard&&core.pc(_v,2).next(core.pc(_v,2).NgbSlideEventSource.ARROW_RIGHT))&&ad);"mouseenter"===en&&(ad=!1!==core.pc(_v,2).mouseEnter()&&ad);"mouseleave"===en&&(ad=!1!==core.pc(_v,2).mouseLeave()&&ad);return ad}),ng_bootstrap_ngfactory.d,ng_bootstrap_ngfactory.c)),core.Yb(2,3325952,null,1,ng_bootstrap.i,[ng_bootstrap.j,core.U,core.Q,core.k],{interval:[0,"interval"],wrap:[1,"wrap"],pauseOnHover:[2,"pauseOnHover"],showNavigationArrows:[3,"showNavigationArrows"],showNavigationIndicators:[4,"showNavigationIndicators"]},null),core.vc(603979776,1,{slides:1}),(_l()(),core.Jb(0,null,null,1,null,View_ServiceDetailsComponent_6)),core.Yb(5,16384,[[1,4]],0,ng_bootstrap.N,[core.jb],null,null)],(function(_ck,_v){_ck(_v,2,0,2500,!0,!0,!1,!0)}),(function(_ck,_v){_ck(_v,1,0,"block")}))}function View_ServiceDetailsComponent_4(_l){return core.Dc(0,[(_l()(),core.Zb(0,0,null,null,10,"div",[["class","content-side col-lg-8 col-md-12 col-sm-12"]],null,null,null,null,null)),(_l()(),core.Zb(1,0,null,null,9,"div",[["class","content-inner"]],null,null,null,null,null)),(_l()(),core.Zb(2,0,null,null,8,"div",[["class","tour-details"]],null,null,null,null,null)),(_l()(),core.Zb(3,0,null,null,1,"div",[["class","info-title clearfix"]],null,null,null,null,null)),(_l()(),core.Zb(4,0,null,null,0,"div",[["class","left-info"]],null,null,null,null,null)),(_l()(),core.Zb(5,0,null,null,2,"div",[["class","tour-widget recommended-widget carousel-widget"]],null,null,null,null,null)),(_l()(),core.Jb(16777216,null,null,1,null,View_ServiceDetailsComponent_5)),core.Yb(7,16384,null,0,common.k,[core.nb,core.jb],{ngIf:[0,"ngIf"]},null),(_l()(),core.Zb(8,0,null,null,2,"div",[["class","text-block"]],null,null,null,null,null)),(_l()(),core.Zb(9,0,null,null,0,"h4",[],null,null,null,null,null)),(_l()(),core.Zb(10,0,null,null,0,"p",[],[[8,"innerHTML",1]],null,null,null,null))],(function(_ck,_v){_ck(_v,7,0,_v.component.isBrowser)}),(function(_ck,_v){_ck(_v,10,0,_v.component.service.description)}))}function View_ServiceDetailsComponent_7(_l){return core.Dc(0,[(_l()(),core.Zb(0,0,null,null,47,"div",[["class","widgets-side col-lg-4 col-md-6 col-sm-12"]],null,null,null,null,null)),(_l()(),core.Zb(1,0,null,null,46,"div",[["class","widgets-content"]],null,null,null,null,null)),(_l()(),core.Zb(2,0,null,null,45,"div",[["class","tour-widget single-booking-widget"]],null,null,null,null,null)),(_l()(),core.Zb(3,0,null,null,29,"div",[["class","widget-inner"]],null,null,null,null,null)),(_l()(),core.Zb(4,0,null,null,0,"br",[],null,null,null,null,null)),(_l()(),core.Zb(5,0,null,null,27,"div",[["class","default-form main-booking-form"]],null,null,null,null,null)),(_l()(),core.Zb(6,0,null,null,26,"div",[],null,null,null,null,null)),(_l()(),core.Zb(7,0,null,null,2,"h5",[],null,null,null,null,null)),(_l()(),core.Ac(8,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(10,0,null,null,0,"br",[],null,null,null,null,null)),(_l()(),core.Zb(11,0,null,null,9,"div",[["class","estimate-table"]],null,null,null,null,null)),(_l()(),core.Zb(12,0,null,null,8,"ul",[],null,null,null,null,null)),(_l()(),core.Zb(13,0,null,null,7,"li",[["class","totals clearfix"]],null,null,null,null,null)),(_l()(),core.Zb(14,0,null,null,2,"span",[["class","ttle"]],null,null,null,null,null)),(_l()(),core.Ac(15,null,["",":"])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(17,0,null,null,3,"span",[["class","dtl"]],null,null,null,null,null)),(_l()(),core.Ac(18,null,[""," "," / ",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(21,0,null,null,0,"br",[],null,null,null,null,null)),(_l()(),core.Zb(22,0,null,null,3,"div",[["class","info"]],null,null,null,null,null)),(_l()(),core.Zb(23,0,null,null,0,"span",[["class","icon flaticon-wall-clock"]],null,null,null,null,null)),(_l()(),core.Ac(24,null,[" ",": 24 / 7"])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(26,0,null,null,0,"br",[],null,null,null,null,null)),(_l()(),core.Zb(27,0,null,null,5,"div",[["class","form-group"]],null,null,null,null,null)),(_l()(),core.Zb(28,0,null,null,4,"button",[["class","theme-btn"],["routerLink","/yachts"],["type","button"]],null,[[null,"click"]],(function(_v,en,$event){var ad=!0;"click"===en&&(ad=!1!==core.pc(_v,29).onClick()&&ad);return ad}),null,null)),core.Yb(29,16384,null,0,router.p,[router.o,router.a,[8,null],core.Y,core.v],{routerLink:[0,"routerLink"]},null),(_l()(),core.Zb(30,0,null,null,2,"span",[["class","btn-title"]],null,null,null,null,null)),(_l()(),core.Ac(31,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Zb(33,0,null,null,14,"div",[["class","tour-widget advisor-widget"]],null,null,null,null,null)),(_l()(),core.Zb(34,0,null,null,13,"div",[["class","widget-inner"]],null,null,null,null,null)),(_l()(),core.Zb(35,0,null,null,12,"div",[["class","advisor-block"]],null,null,null,null,null)),(_l()(),core.Zb(36,0,null,null,11,"div",[["class","inner-box"]],null,null,null,null,null)),(_l()(),core.Zb(37,0,null,null,2,"div",[["class","image-box"]],null,null,null,null,null)),(_l()(),core.Zb(38,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(_l()(),core.Zb(39,0,null,null,0,"img",[["alt",""],["src","../../../assets/images/resource/team-6.jpg"],["title",""]],null,null,null,null,null)),(_l()(),core.Zb(40,0,null,null,7,"div",[["class","lower-box clearfix"]],null,null,null,null,null)),(_l()(),core.Zb(41,0,null,null,6,"div",[["class","lower-content"]],null,null,null,null,null)),(_l()(),core.Zb(42,0,null,null,2,"h4",[],null,null,null,null,null)),(_l()(),core.Zb(43,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(_l()(),core.Ac(-1,null,["Mohammed Sahraoui"])),(_l()(),core.Zb(45,0,null,null,2,"div",[["class","info"]],null,null,null,null,null)),(_l()(),core.Zb(46,0,null,null,0,"span",[["class","icon flaticon-assistance"]],null,null,null,null,null)),(_l()(),core.Ac(-1,null,["+971 52 491 8686 [24/Hours]"]))],(function(_ck,_v){_ck(_v,29,0,"/yachts")}),(function(_ck,_v){var _co=_v.component;_ck(_v,8,0,core.Bc(_v,8,0,core.pc(_v,9).transform("price"))),_ck(_v,15,0,core.Bc(_v,15,0,core.pc(_v,16).transform("price"))),_ck(_v,18,0,core.Bc(_v,18,0,core.pc(_v,19).transform("ead")),null==_co.service?null:_co.service.price,core.Bc(_v,18,2,core.pc(_v,20).transform("hour"))),_ck(_v,24,0,core.Bc(_v,24,0,core.pc(_v,25).transform("reservation"))),_ck(_v,31,0,core.Bc(_v,31,0,core.pc(_v,32).transform("booknow")))}))}function View_ServiceDetailsComponent_8(_l){return core.Dc(0,[(_l()(),core.Zb(0,0,null,null,3,"div",[["class","item col-lg-4 col-md-6 col-sm-12"]],null,null,null,null,null)),(_l()(),core.Zb(1,0,null,null,2,"ngx-skeleton-loader",[["appearance","circle"],["class","d-flex justify-content-between"],["count","1"]],null,null,null,ngx_skeleton_loader_ngfactory.b,ngx_skeleton_loader_ngfactory.a)),core.Yb(2,4964352,null,0,ngx_skeleton_loader.b,[[2,ngx_skeleton_loader.a]],{count:[0,"count"],appearance:[1,"appearance"],theme:[2,"theme"]},null),core.sc(3,{height:0,width:1,"border-radius":2})],(function(_ck,_v){var currVal_2=_ck(_v,3,0,"700px","100%","10px");_ck(_v,2,0,"1","circle",currVal_2)}),null)}function View_ServiceDetailsComponent_0(_l){return core.Dc(0,[(_l()(),core.Jb(16777216,null,null,1,null,View_ServiceDetailsComponent_1)),core.Yb(1,16384,null,0,common.k,[core.nb,core.jb],{ngIf:[0,"ngIf"]},null),(_l()(),core.Zb(2,0,null,null,5,"div",[["class","info-pop"]],null,null,null,null,null)),(_l()(),core.Zb(3,0,null,null,4,"div",[["class","auto-container"]],null,null,null,null,null)),(_l()(),core.Zb(4,0,null,null,3,"div",[["class","inner"]],null,null,null,null,null)),(_l()(),core.Zb(5,0,null,null,2,"div",[["class","text"]],null,null,null,null,null)),(_l()(),core.Ac(6,null,["",""])),core.rc(131072,ngx_translate_core.j,[ngx_translate_core.k,core.k]),(_l()(),core.Jb(16777216,null,null,1,null,View_ServiceDetailsComponent_2)),core.Yb(9,16384,null,0,common.k,[core.nb,core.jb],{ngIf:[0,"ngIf"]},null),(_l()(),core.Zb(10,0,null,null,11,"section",[["class","yacht-tours-container alternate-bg-two"]],null,null,null,null,null)),(_l()(),core.Zb(11,0,null,null,10,"div",[["class","auto-container"]],null,null,null,null,null)),(_l()(),core.Zb(12,0,null,null,9,"div",[["class","content-container"]],null,null,null,null,null)),(_l()(),core.Zb(13,0,null,null,8,"div",[["class","row clearfix"]],null,null,null,null,null)),(_l()(),core.Jb(16777216,null,null,1,null,View_ServiceDetailsComponent_3)),core.Yb(15,16384,null,0,common.k,[core.nb,core.jb],{ngIf:[0,"ngIf"]},null),(_l()(),core.Jb(16777216,null,null,1,null,View_ServiceDetailsComponent_4)),core.Yb(17,16384,null,0,common.k,[core.nb,core.jb],{ngIf:[0,"ngIf"]},null),(_l()(),core.Jb(16777216,null,null,1,null,View_ServiceDetailsComponent_7)),core.Yb(19,16384,null,0,common.k,[core.nb,core.jb],{ngIf:[0,"ngIf"]},null),(_l()(),core.Jb(16777216,null,null,1,null,View_ServiceDetailsComponent_8)),core.Yb(21,16384,null,0,common.k,[core.nb,core.jb],{ngIf:[0,"ngIf"]},null)],(function(_ck,_v){var _co=_v.component;_ck(_v,1,0,_co.service),_ck(_v,9,0,!_co.service),_ck(_v,15,0,!_co.service),_ck(_v,17,0,_co.service),_ck(_v,19,0,_co.service),_ck(_v,21,0,!_co.service)}),(function(_ck,_v){_ck(_v,6,0,core.Bc(_v,6,0,core.pc(_v,7).transform("outtour")))}))}var ServiceDetailsComponentNgFactory=core.Vb("app-service-details",service_details_component_ServiceDetailsComponent,(function View_ServiceDetailsComponent_Host_0(_l){return core.Dc(0,[(_l()(),core.Zb(0,0,null,null,1,"app-service-details",[],null,null,null,View_ServiceDetailsComponent_0,RenderType_ServiceDetailsComponent)),core.Yb(1,114688,null,0,service_details_component_ServiceDetailsComponent,[router.a,services_service.a,core.U,meta_tag_service.a,core.k],null,null)],(function(_ck,_v){_ck(_v,1,0)}),null)}),{},{},[]),angular_responsive_carousel_ngfactory=__webpack_require__("ZTrd"),index_ngfactory=__webpack_require__("9cE2"),yacht_booking_form_component_ngfactory=__webpack_require__("8y7l"),water_sport_booking_form_component_ngfactory=__webpack_require__("cuVX"),contact_form_component_ngfactory=__webpack_require__("HHLl"),overlay=__webpack_require__("1O3W"),bidi=__webpack_require__("9gLZ"),dialog=__webpack_require__("iELJ"),fesm2015_forms=__webpack_require__("s7LF"),observers=__webpack_require__("9b/N"),fesm2015_core=__webpack_require__("UhP/");class ServicesRoutingModule{}var angular_responsive_carousel=__webpack_require__("T6vt"),portal=__webpack_require__("1z/I"),platform=__webpack_require__("SCoL"),scrolling=__webpack_require__("7KAL"),a11y=__webpack_require__("YEUz"),fesm2015_button=__webpack_require__("Dxy4"),progress_spinner=__webpack_require__("pu8Q"),text_field=__webpack_require__("8sFK"),form_field=__webpack_require__("Q2Ze"),input=__webpack_require__("e6WT"),shared_module=__webpack_require__("KZX/"),ServicesModuleNgFactory=core.Wb(ServicesModule,[],(function(_l){return core.mc([core.nc(512,core.p,core.yb,[[8,[router_ngfactory.a,ServicesComponentNgFactory,IndexComponentNgFactory,ServiceDetailsComponentNgFactory,angular_responsive_carousel_ngfactory.a,index_ngfactory.a,yacht_booking_form_component_ngfactory.a,water_sport_booking_form_component_ngfactory.a,contact_form_component_ngfactory.a]],[3,core.p],core.O]),core.nc(4608,common.m,common.l,[core.J]),core.nc(4608,overlay.b,overlay.b,[overlay.h,overlay.d,core.p,overlay.g,overlay.e,core.F,core.Q,common.c,bidi.b,[2,common.g]]),core.nc(5120,overlay.i,overlay.j,[overlay.b]),core.nc(5120,dialog.c,dialog.d,[overlay.b]),core.nc(135680,dialog.e,dialog.e,[overlay.b,core.F,[2,common.g],[2,dialog.b],dialog.c,[3,dialog.e],overlay.d]),core.nc(4608,fesm2015_forms.d,fesm2015_forms.d,[]),core.nc(4608,fesm2015_forms.s,fesm2015_forms.s,[]),core.nc(4608,observers.b,observers.b,[]),core.nc(4608,fesm2015_core.b,fesm2015_core.b,[]),core.nc(1073742336,common.b,common.b,[]),core.nc(1073742336,router.r,router.r,[[2,router.w],[2,router.o]]),core.nc(1073742336,ServicesRoutingModule,ServicesRoutingModule,[]),core.nc(1073742336,angular_responsive_carousel.b,angular_responsive_carousel.b,[]),core.nc(1073742336,ngx_skeleton_loader.c,ngx_skeleton_loader.c,[]),core.nc(1073742336,bidi.a,bidi.a,[]),core.nc(1073742336,portal.e,portal.e,[]),core.nc(1073742336,platform.b,platform.b,[]),core.nc(1073742336,scrolling.b,scrolling.b,[]),core.nc(1073742336,scrolling.d,scrolling.d,[]),core.nc(1073742336,overlay.f,overlay.f,[]),core.nc(1073742336,fesm2015_core.j,fesm2015_core.j,[a11y.h,[2,fesm2015_core.c],[2,common.c]]),core.nc(1073742336,dialog.j,dialog.j,[]),core.nc(1073742336,fesm2015_core.q,fesm2015_core.q,[]),core.nc(1073742336,fesm2015_button.c,fesm2015_button.c,[]),core.nc(1073742336,progress_spinner.c,progress_spinner.c,[]),core.nc(1073742336,fesm2015_forms.r,fesm2015_forms.r,[]),core.nc(1073742336,fesm2015_forms.o,fesm2015_forms.o,[]),core.nc(1073742336,text_field.c,text_field.c,[]),core.nc(1073742336,observers.c,observers.c,[]),core.nc(1073742336,form_field.e,form_field.e,[]),core.nc(1073742336,input.c,input.c,[]),core.nc(1073742336,ngx_translate_core.h,ngx_translate_core.h,[]),core.nc(1073742336,shared_module.a,shared_module.a,[]),core.nc(1073742336,ng_bootstrap.k,ng_bootstrap.k,[]),core.nc(1073742336,ServicesModule,ServicesModule,[]),core.nc(1024,router.m,(function(){return[[{path:"",component:ServicesComponent,children:[{path:"",component:IndexComponent},{path:":slug",component:service_details_component_ServiceDetailsComponent},{path:"**",redirectTo:"",pathMatch:""}]}]]}),[])])}))}};