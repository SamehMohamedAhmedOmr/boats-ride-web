(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0mYb":function(t,e,i){"use strict";i.r(e),i.d(e,"WaterSportsModule",(function(){return C}));var r=i("ofXK"),b=i("tyNb"),a=i("fXoL");let n=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Lb({type:t,selectors:[["app-water-sports"]],decls:1,vars:0,template:function(t,e){1&t&&a.Sb(0,"router-outlet")},directives:[b.k],styles:[""]}),t})();var c=i("0IaG"),s=i("tgkT"),o=i("XGsO"),l=i("DmsX"),d=i("4g7v"),p=i("ay1t"),u=i("xJkR"),h=i("sYmb");function g(t,e){if(1&t&&(a.Xb(0,"section",33),a.Sb(1,"div",34),a.Xb(2,"div",35),a.Xb(3,"div",3),a.Xb(4,"div",36),a.Xb(5,"h1",37),a.Oc(6),a.Wb(),a.Xb(7,"div",38),a.Xb(8,"ul",39),a.Xb(9,"li"),a.Xb(10,"a",40),a.Oc(11),a.nc(12,"translate"),a.Wb(),a.Wb(),a.Xb(13,"li"),a.Xb(14,"a",41),a.Oc(15),a.nc(16,"translate"),a.Wb(),a.Wb(),a.Xb(17,"li"),a.Oc(18),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb()),2&t){const t=a.mc();a.Bb(6),a.Pc(t.water_sport.name),a.Bb(4),a.rc("routerLink","/"),a.Bb(1),a.Pc(a.oc(12,5,"home")),a.Bb(4),a.Pc(a.oc(16,7,"waterSport")),a.Bb(3),a.Pc(t.water_sport.name)}}const m=function(){return{height:"700px",width:"100%","border-radius":"10px"}};function v(t,e){1&t&&(a.Xb(0,"div",42),a.Sb(1,"ngx-skeleton-loader",43),a.Wb()),2&t&&(a.Bb(1),a.rc("theme",a.uc(1,m)))}function W(t,e){1&t&&(a.Xb(0,"div",44),a.Sb(1,"ngx-skeleton-loader",43),a.Wb()),2&t&&(a.Bb(1),a.rc("theme",a.uc(1,m)))}function X(t,e){if(1&t&&(a.Xb(0,"div",45),a.Xb(1,"div",46),a.Xb(2,"div",47),a.Sb(3,"ngx-gallery",48),a.Xb(4,"div",49),a.Xb(5,"h4"),a.Oc(6),a.nc(7,"translate"),a.Wb(),a.Sb(8,"p",50),a.Wb(),a.Xb(9,"div",49),a.Xb(10,"h4"),a.Oc(11),a.nc(12,"translate"),a.Wb(),a.Sb(13,"p",50),a.Wb(),a.Xb(14,"div",49),a.Xb(15,"h4"),a.Oc(16),a.nc(17,"translate"),a.Wb(),a.Sb(18,"p",50),a.Wb(),a.Wb(),a.Wb(),a.Wb()),2&t){const t=a.mc();a.Bb(3),a.rc("options",t.galleryOptions)("images",t.galleryImages),a.Bb(3),a.Pc(a.oc(7,8,"desc")),a.Bb(2),a.rc("innerHTML",t.water_sport.water_sport_description,a.Dc),a.Bb(3),a.Pc(a.oc(12,10,"whatexpect")),a.Bb(2),a.rc("innerHTML",t.water_sport.what_to_expect_description,a.Dc),a.Bb(3),a.Pc(a.oc(17,12,"routes")),a.Bb(2),a.rc("innerHTML",t.water_sport.routes,a.Dc)}}function f(t,e){if(1&t&&(a.Xb(0,"div",51),a.Xb(1,"ul"),a.Xb(2,"li",52),a.Xb(3,"span",53),a.Oc(4),a.nc(5,"translate"),a.Wb(),a.Xb(6,"span",54),a.Oc(7),a.nc(8,"translate"),a.nc(9,"translate"),a.Wb(),a.Wb(),a.Wb(),a.Wb()),2&t){const t=a.mc();a.Bb(4),a.Qc("",a.oc(5,4,"price"),":"),a.Bb(3),a.Sc(" ",a.oc(8,6,"ead")," ",null==t.water_sport?null:t.water_sport.selling_per_hour," / ",a.oc(9,8,"hour")," ")}}function w(t,e){if(1&t&&(a.Xb(0,"div",55),a.Xb(1,"div",56),a.Xb(2,"del",57),a.Oc(3),a.nc(4,"translate"),a.nc(5,"translate"),a.Wb(),a.Wb(),a.Xb(6,"div",58),a.Xb(7,"span",59),a.Sb(8,"i",60),a.Oc(9),a.nc(10,"translate"),a.Wb(),a.Wb(),a.Wb()),2&t){const t=a.mc();a.Bb(3),a.Sc("",a.oc(4,5,"ead")," ",null==t.water_sport?null:t.water_sport.selling_per_hour,"/",a.oc(5,7,"hour"),""),a.Bb(6),a.Rc(" ",a.oc(10,9,"ead")," ",t.water_sport.special_price,"")}}let S=(()=>{class t{constructor(t,e,i,r,b){this.route=t,this.cdr=e,this.metaService=i,this.dialog=r,this.WaterSportSevice=b,this.water_sport=null,this.galleryOptions=[],this.galleryImages=[]}ngOnInit(){window.dataLayer=[],this.slug=this.route.snapshot.params.slug,this.getWaterSport(),this.getWaterSports()}getWaterSport(){this.WaterSportSevice.getWaterSport(this.slug).subscribe(t=>{this.water_sport=t,this.prepareImages(),this.updateMetaTags(),this.cdr.markForCheck()})}getWaterSports(){this.WaterSportSevice.getWaterSports().subscribe(t=>{this.water_sports_list=t,this.cdr.markForCheck()})}prepareImages(){this.galleryOptions=[{width:"600px",height:"400px",thumbnailsColumns:6,imageAnimation:o.a.Slide},{breakpoint:800,width:"100%",height:"600px",imagePercent:80,thumbnailsPercent:20,thumbnailsMargin:20,thumbnailMargin:5},{breakpoint:400,preview:!1}],this.water_sport.images.forEach(t=>{this.galleryImages.push({small:t.thumbnail,medium:t.image,big:t.image})}),this.cdr.markForCheck()}openBooking(){const t=new c.d;t.panelClass="full-screen-modal",t.width="100vw",t.data={water_sports:this.water_sports_list},this.dialog.open(s.a,t)}updateMetaTags(){var t,e,i,r,b,a,n;window.dataLayer=[];let c=(null===(e=null===(t=this.water_sport)||void 0===t?void 0:t.images)||void 0===e?void 0:e.length)?null===(i=this.water_sport)||void 0===i?void 0:i.images[0].image:"";this.metaService.updateTags(null===(b=null===(r=this.water_sport)||void 0===r?void 0:r.seo)||void 0===b?void 0:b.title,null===(n=null===(a=this.water_sport)||void 0===a?void 0:a.seo)||void 0===n?void 0:n.description,c),window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"details",ecommerce:{currencyCode:"AED",detail:{products:[{name:this.water_sport.name?this.water_sport.name:"",id:this.water_sport.id?this.water_sport.id:"",price:this.water_sport.selling_per_hour?this.water_sport.selling_per_hour:""}]}}})}}return t.\u0275fac=function(e){return new(e||t)(a.Rb(b.a),a.Rb(a.h),a.Rb(l.a),a.Rb(c.b),a.Rb(d.a))},t.\u0275cmp=a.Lb({type:t,selectors:[["app-wate-sport-details"]],decls:52,vars:18,consts:[["class","page-banner inner-banner-height",4,"ngIf"],["class","item",4,"ngIf"],[1,"info-pop"],[1,"auto-container"],[1,"inner"],[1,"text"],[1,"yacht-tours-container","alternate-bg-two"],[1,"content-container"],[1,"row","clearfix"],["class","item col-lg-8 col-md-12 col-sm-12",4,"ngIf"],["class","content-side col-lg-8 col-md-12 col-sm-12",4,"ngIf"],[1,"widgets-side","col-lg-4","col-md-6","col-sm-12"],[1,"widgets-content"],[1,"tour-widget","single-booking-widget"],[1,"widget-inner"],[1,"default-form","main-booking-form"],["class","estimate-table",4,"ngIf"],["class","price","style","padding-left: 0px!important;",4,"ngIf"],[1,"info","displaying"],[1,"icon","flaticon-wall-clock","pad_info"],[1,"form-group"],["type","button",1,"theme-btn",3,"click"],[1,"btn-title"],[1,"tour-widget","advisor-widget"],[1,"advisor-block"],[1,"inner-box"],[1,"image-box"],["href","#"],["src","../../../assets/images/resource/team-6.jpg","alt","","title",""],[1,"lower-box","clearfix"],[1,"lower-content"],[1,"info"],[1,"icon","flaticon-assistance"],[1,"page-banner","inner-banner-height"],[1,"image-layer",2,"background-image","url(../../../assets/images/background/banner-1.jpg)"],[1,"banner-inner"],[1,"inner-container","clearfix"],[1,"inner-banner-height-title"],[1,"page-nav"],[1,"bread-crumb","clearfix"],[3,"routerLink"],["routerLink","/water-sports"],[1,"item"],["count","1","appearance","circle",1,"d-flex","justify-content-between",3,"theme"],[1,"item","col-lg-8","col-md-12","col-sm-12"],[1,"content-side","col-lg-8","col-md-12","col-sm-12"],[1,"content-inner"],[1,"tour-details","pt-0"],[1,"ngx-gallery","d-block","w-100","mb-4",2,"height","500px !important",3,"options","images"],[1,"text-block"],[3,"innerHTML"],[1,"estimate-table"],[1,"totals","clearfix"],[1,"ttle"],[1,"dtl"],[1,"price",2,"padding-left","0px!important"],[2,"display","inline-block","padding-left","5px"],[1,"price-old"],["data-toggle","tooltip","data-html","true","title","","data-original-title","Summer Offer",2,"display","inline-block","margin-left","10px"],[1,"blink",2,"color","red","font-size","15px","border-radius","5px","font-weight","bolder"],[1,"fa","fa-info-circle"]],template:function(t,e){1&t&&(a.Mc(0,g,19,9,"section",0),a.Mc(1,v,2,2,"div",1),a.Xb(2,"div",2),a.Xb(3,"div",3),a.Xb(4,"div",4),a.Xb(5,"div",5),a.Oc(6),a.nc(7,"translate"),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Xb(8,"section",6),a.Xb(9,"div",3),a.Xb(10,"div",7),a.Xb(11,"div",8),a.Mc(12,W,2,2,"div",9),a.Mc(13,X,19,14,"div",10),a.Xb(14,"div",11),a.Xb(15,"div",12),a.Xb(16,"div",13),a.Xb(17,"div",14),a.Sb(18,"br"),a.Xb(19,"div",15),a.Xb(20,"h5"),a.Oc(21),a.nc(22,"translate"),a.Wb(),a.Mc(23,f,10,10,"div",16),a.Mc(24,w,11,11,"div",17),a.Sb(25,"br"),a.Xb(26,"div",18),a.Sb(27,"span",19),a.Oc(28),a.nc(29,"translate"),a.Wb(),a.Sb(30,"br"),a.Xb(31,"div",20),a.Xb(32,"button",21),a.jc("click",(function(){return e.openBooking()})),a.Xb(33,"span",22),a.Oc(34),a.nc(35,"translate"),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Xb(36,"div",23),a.Xb(37,"div",14),a.Xb(38,"div",24),a.Xb(39,"div",25),a.Xb(40,"div",26),a.Xb(41,"a",27),a.Sb(42,"img",28),a.Wb(),a.Wb(),a.Xb(43,"div",29),a.Xb(44,"div",30),a.Xb(45,"h4"),a.Xb(46,"a",27),a.Oc(47,"Mohammed Sahraoui"),a.Wb(),a.Wb(),a.Xb(48,"div",31),a.Sb(49,"span",32),a.Oc(50,"+971 52 491 8686 [24/Hours] "),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Sb(51,"app-service-section")),2&t&&(a.rc("ngIf",e.water_sport),a.Bb(1),a.rc("ngIf",!e.water_sport),a.Bb(5),a.Pc(a.oc(7,10,"outtour")),a.Bb(6),a.rc("ngIf",!e.water_sport),a.Bb(1),a.rc("ngIf",e.water_sport),a.Bb(8),a.Pc(a.oc(22,12,"price")),a.Bb(2),a.rc("ngIf",!e.water_sport.special_price),a.Bb(1),a.rc("ngIf",null==e.water_sport?null:e.water_sport.special_price),a.Bb(4),a.Qc("",a.oc(29,14,"reservation"),": 24 / 7 "),a.Bb(6),a.Pc(a.oc(35,16,"booknow")))},directives:[r.u,p.a,b.i,u.a,o.b],pipes:[h.d],styles:[""]}),t})();var k=i("qJwI");let O=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Lb({type:t,selectors:[["app-offers-widget"]],decls:89,vars:36,consts:[[1,"tour-widget","offers-widget"],[1,"widget-inner"],[1,"tour-widget-title"],[1,"post"],[1,"post-inner"],[1,"post-thumb"],["href","#"],["src","assets/images/resource/54.png","alt","","title",""],[1,"off-price"],[1,"info"],[1,"icon","flaticon-wall-clock"],[1,"price"],[1,"new"],[1,"original"],["src","assets/images/resource/55.jpg","alt","","title",""],["src","assets/images/resource/56.jpg","alt","","title",""],["src","assets/images/resource/57.jpg","alt","","title",""]],template:function(t,e){1&t&&(a.Xb(0,"div",0),a.Xb(1,"div",1),a.Xb(2,"div",2),a.Xb(3,"h4"),a.Oc(4),a.nc(5,"translate"),a.Wb(),a.Wb(),a.Xb(6,"div",3),a.Xb(7,"div",4),a.Xb(8,"div",5),a.Xb(9,"a",6),a.Sb(10,"img",7),a.Wb(),a.Xb(11,"div",8),a.Oc(12,"-40%"),a.Wb(),a.Wb(),a.Xb(13,"h5"),a.Xb(14,"a",6),a.Oc(15,"JetPack"),a.Wb(),a.Wb(),a.Xb(16,"div",9),a.Sb(17,"span",10),a.Oc(18),a.nc(19,"translate"),a.Wb(),a.Xb(20,"div",11),a.Xb(21,"span",12),a.Oc(22),a.nc(23,"translate"),a.Wb(),a.Xb(24,"span",13),a.Oc(25),a.nc(26,"translate"),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Xb(27,"div",3),a.Xb(28,"div",4),a.Xb(29,"div",5),a.Xb(30,"a",6),a.Sb(31,"img",14),a.Wb(),a.Xb(32,"div",8),a.Oc(33,"-40%"),a.Wb(),a.Wb(),a.Xb(34,"h5"),a.Xb(35,"a",6),a.Oc(36,"Jet Ski"),a.Wb(),a.Wb(),a.Xb(37,"div",9),a.Sb(38,"span",10),a.Oc(39," Duration: 4D + 5N"),a.Wb(),a.Xb(40,"div",11),a.Xb(41,"span",12),a.Oc(42),a.nc(43,"translate"),a.Wb(),a.Xb(44,"span",13),a.Oc(45),a.nc(46,"translate"),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Xb(47,"div",3),a.Xb(48,"div",4),a.Xb(49,"div",5),a.Xb(50,"a",6),a.Sb(51,"img",15),a.Wb(),a.Xb(52,"div",8),a.Oc(53,"-40%"),a.Wb(),a.Wb(),a.Xb(54,"h5"),a.Xb(55,"a",6),a.Oc(56,"Water Shark "),a.Wb(),a.Wb(),a.Xb(57,"div",9),a.Sb(58,"span",10),a.Oc(59),a.nc(60,"translate"),a.Wb(),a.Xb(61,"div",11),a.Xb(62,"span",12),a.Oc(63),a.nc(64,"translate"),a.Wb(),a.Xb(65,"span",13),a.Oc(66),a.nc(67,"translate"),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Xb(68,"div",3),a.Xb(69,"div",4),a.Xb(70,"div",5),a.Xb(71,"a",6),a.Sb(72,"img",16),a.Wb(),a.Xb(73,"div",8),a.Oc(74,"-40%"),a.Wb(),a.Wb(),a.Xb(75,"h5"),a.Xb(76,"a",6),a.Oc(77,"Sea Bob "),a.Wb(),a.Wb(),a.Xb(78,"div",9),a.Sb(79,"span",10),a.Oc(80),a.nc(81,"translate"),a.Wb(),a.Xb(82,"div",11),a.Xb(83,"span",12),a.Oc(84),a.nc(85,"translate"),a.Wb(),a.Xb(86,"span",13),a.Oc(87),a.nc(88,"translate"),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb()),2&t&&(a.Bb(4),a.Pc(a.oc(5,12,"bestoffers")),a.Bb(14),a.Pc(a.oc(19,14,"reservationr")),a.Bb(4),a.Qc("",a.oc(23,16,"ead")," 499"),a.Bb(3),a.Qc("",a.oc(26,18,"ead")," 650"),a.Bb(17),a.Qc("",a.oc(43,20,"ead")," 499"),a.Bb(3),a.Qc("",a.oc(46,22,"ead")," 650"),a.Bb(14),a.Pc(a.oc(60,24,"reservationr")),a.Bb(4),a.Qc("",a.oc(64,26,"ead")," 499"),a.Bb(3),a.Qc("",a.oc(67,28,"ead")," 650"),a.Bb(14),a.Pc(a.oc(81,30,"reservationr")),a.Bb(4),a.Qc("",a.oc(85,32,"ead")," 499"),a.Bb(3),a.Qc("",a.oc(88,34,"ead")," 650"))},pipes:[h.d],styles:[""]}),t})();const B=function(){return{width:"740px",height:"310px","border-radius":"10px"}};function _(t,e){1&t&&(a.Xb(0,"div",51),a.Sb(1,"ngx-skeleton-loader",52),a.Wb()),2&t&&(a.Bb(1),a.rc("theme",a.uc(1,B)))}function y(t,e){if(1&t&&(a.Xb(0,"div",53),a.Xb(1,"div",54),a.Sb(2,"div",55),a.Xb(3,"div",30),a.Xb(4,"a",56),a.Sb(5,"img",57),a.Wb(),a.Wb(),a.Xb(6,"div",58),a.Xb(7,"div",59),a.Xb(8,"h4"),a.Xb(9,"a",56),a.Oc(10),a.Wb(),a.Wb(),a.Sb(11,"br"),a.Wb(),a.Xb(12,"div",60),a.Xb(13,"div",61),a.Xb(14,"a",62),a.Xb(15,"span",50),a.Oc(16),a.nc(17,"translate"),a.Wb(),a.Wb(),a.Xb(18,"a",62),a.Xb(19,"span",50),a.Oc(20),a.nc(21,"translate"),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb()),2&t){const t=e.$implicit;a.Bb(2),a.Kc("background-image:url(",t.images[0].image,");"),a.Bb(3),a.sc("src",t.images[0].image,a.Fc),a.Bb(5),a.Pc(t.name),a.Bb(4),a.tc("routerLink","/water-sports/",t.slug,""),a.Bb(2),a.Pc(a.oc(17,9,"moredetails")),a.Bb(2),a.tc("routerLink","/water-sports/",t.slug,""),a.Bb(2),a.Pc(a.oc(21,11,"booknow"))}}let x=(()=>{class t{constructor(t,e,i){this.waterService=t,this.seoService=e,this.cdr=i,this.waterSports=[],this.is_loading=!0}ngOnInit(){this.getSeo(),this.getWaterSports()}getWaterSports(){this.waterService.getWaterSports().subscribe(t=>{this.waterSports=t,this.is_loading=!1,this.cdr.markForCheck()})}getSeo(){this.seoService.Seo("water-sports").subscribe(t=>{this.seoService.updateMetaTags(t),this.is_loading=!1,this.cdr.markForCheck()})}}return t.\u0275fac=function(e){return new(e||t)(a.Rb(d.a),a.Rb(k.a),a.Rb(a.h))},t.\u0275cmp=a.Lb({type:t,selectors:[["app-index"]],decls:81,vars:29,consts:[[1,"page-banner","inner-banner-height"],[1,"image-layer",2,"background-image","url(./assets/Banners/x1.jpeg)","background-position-y","20%"],[1,"banner-inner"],[1,"auto-container"],[1,"inner-container","clearfix"],[1,"inner-banner-height-title"],[1,"page-nav"],[1,"bread-crumb","clearfix"],[1,"breadcrumb-item"],["routerLink","/"],["routerLink","/yachts"],[1,"yacht-tours-container"],[1,"default-form","yacht-search-form"],["method","post","action","http://st.ourhtmldemo.com/new/sailing-demo/yacht-tour-single.html"],[1,"row","clearfix"],[1,"content-container"],[1,"content-side","col-lg-8","col-md-12","col-sm-12"],[1,"content-inner"],[1,"lower-filter-row","clearfix"],[1,"results-count"],[1,"results-row"],["class","item",4,"ngIf"],["class","activity-block-two",4,"ngFor","ngForOf"],[1,"widgets-side","col-lg-4","col-md-12","col-sm-12"],[1,"widgets-content"],[1,"tour-widget","advisor-widget","carousel-widget"],[1,"widget-inner"],[1,"advisor-carousel","single-item-carousel","owl-theme","owl-carousel"],[1,"advisor-block"],[1,"inner-box"],[1,"image-box"],["href","#"],["src","assets/images/resource/team-6.jpg","alt","","title",""],[1,"lower-box","clearfix"],[1,"lower-content"],[1,"info"],[1,"tel:+971524918686"],[1,"subscribe-section","style-three"],[1,"inner"],[1,"image-layer",2,"background-image","url(./assets/images/background/image-12.jpg)"],[1,"title"],[1,"subtitle"],[1,"default-form","subscribe-form-two"],["method","post","action","http://st.ourhtmldemo.com/new/sailing-demo/contact.html"],[1,"form-group","col-lg-4","col-md-6","col-sm-12"],[1,"field-inner"],["type","text","name","field-name","required","","value","",3,"placeholder"],["type","email","name","field-name","required","","value","",3,"placeholder"],[1,"form-group","col-lg-4","col-md-12","col-sm-12"],["type","submit",1,"theme-btn","btn-style-three"],[1,"btn-title"],[1,"item"],["count","1","appearance","circle",3,"theme"],[1,"activity-block-two"],[1,"inner-box","clearfix"],[1,"image-layer"],["href","water-slide.html"],["alt","","title","",3,"src"],[1,"content-box"],[1,"content"],[1,"links-box","clearfix"],[1,"link"],[1,"theme-btn","btn-style-two",3,"routerLink"]],template:function(t,e){1&t&&(a.Xb(0,"section",0),a.Sb(1,"div",1),a.Xb(2,"div",2),a.Xb(3,"div",3),a.Xb(4,"div",4),a.Xb(5,"h1",5),a.Oc(6),a.nc(7,"translate"),a.Wb(),a.Xb(8,"div",6),a.Xb(9,"ul",7),a.Xb(10,"li",8),a.Xb(11,"a",9),a.Oc(12),a.nc(13,"translate"),a.Wb(),a.Wb(),a.Xb(14,"li",8),a.Xb(15,"a",10),a.Oc(16),a.nc(17,"translate"),a.Wb(),a.Wb(),a.Xb(18,"li",8),a.Oc(19),a.nc(20,"translate"),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Xb(21,"section",11),a.Xb(22,"div",3),a.Xb(23,"div",12),a.Xb(24,"form",13),a.Sb(25,"div",14),a.Wb(),a.Wb(),a.Xb(26,"div",15),a.Xb(27,"div",14),a.Xb(28,"div",16),a.Xb(29,"div",17),a.Xb(30,"div",18),a.Sb(31,"div",19),a.Wb(),a.Xb(32,"div",20),a.Mc(33,_,2,2,"div",21),a.Mc(34,y,22,13,"div",22),a.Wb(),a.Wb(),a.Wb(),a.Xb(35,"div",23),a.Xb(36,"div",24),a.Sb(37,"app-offers-widget"),a.Xb(38,"div",25),a.Xb(39,"div",26),a.Xb(40,"div",27),a.Xb(41,"div",28),a.Xb(42,"div",29),a.Xb(43,"div",30),a.Xb(44,"a",31),a.Sb(45,"img",32),a.Wb(),a.Wb(),a.Xb(46,"div",33),a.Xb(47,"div",34),a.Xb(48,"h4"),a.Xb(49,"a",31),a.Oc(50,"Hohammed Sahraoui"),a.Wb(),a.Wb(),a.Xb(51,"div",35),a.Sb(52,"span",36),a.Oc(53,"+971 52 491 8686 [24/Hours]"),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Xb(54,"section",37),a.Xb(55,"div",3),a.Xb(56,"div",38),a.Sb(57,"div",39),a.Xb(58,"div",40),a.Xb(59,"h4"),a.Oc(60),a.nc(61,"translate"),a.Wb(),a.Xb(62,"div",41),a.Oc(63),a.nc(64,"translate"),a.Wb(),a.Wb(),a.Xb(65,"div",42),a.Xb(66,"form",43),a.Xb(67,"div",14),a.Xb(68,"div",44),a.Xb(69,"div",45),a.Sb(70,"input",46),a.nc(71,"translate"),a.Wb(),a.Wb(),a.Xb(72,"div",44),a.Xb(73,"div",45),a.Sb(74,"input",47),a.nc(75,"translate"),a.Wb(),a.Wb(),a.Xb(76,"div",48),a.Xb(77,"button",49),a.Xb(78,"span",50),a.Oc(79),a.nc(80,"translate"),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb()),2&t&&(a.Bb(6),a.Qc("",a.oc(7,11,"waterSport")," "),a.Bb(6),a.Pc(a.oc(13,13,"home")),a.Bb(4),a.Qc(" ",a.oc(17,15,"yachts")," "),a.Bb(3),a.Qc(" ",a.oc(20,17,"waterSport")," "),a.Bb(14),a.rc("ngIf",e.is_loading),a.Bb(1),a.rc("ngForOf",e.waterSports),a.Bb(26),a.Pc(a.oc(61,19,"newsub")),a.Bb(3),a.Pc(a.oc(64,21,"newssubtopic")),a.Bb(7),a.sc("placeholder",a.oc(71,23,"yourname")),a.Bb(4),a.sc("placeholder",a.oc(75,25,"email")),a.Bb(5),a.Pc(a.oc(80,27,"subnow")))},directives:[b.i,r.u,r.t,O,u.a],pipes:[h.d],styles:[""]}),t})();var I=i("jhN1");function P(t,e){if(1&t&&(a.Xb(0,"div",1),a.Sb(1,"iframe",2),a.Wb()),2&t){const t=a.mc();a.Bb(1),a.rc("src",t.voucher_link,a.Ec)}}const L=[{path:"",component:n,children:[{path:"",component:x},{path:":slug",component:S},{path:"voucher/:booking_number",component:(()=>{class t{constructor(t,e,i,r){this.voucherService=t,this.route=e,this.cdr=i,this.sanitizer=r}ngOnInit(){this.booking_number=this.route.snapshot.params.booking_number,this.getVoucher()}getVoucher(){this.voucherService.getVoucher(this.booking_number).subscribe(t=>{this.voucher=t,this.cdr.markForCheck(),this.voucher&&this.transform()})}transform(){this.voucher_link=this.sanitizer.bypassSecurityTrustResourceUrl(this.voucher.url),this.cdr.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(a.Rb(d.a),a.Rb(b.a),a.Rb(a.h),a.Rb(I.b))},t.\u0275cmp=a.Lb({type:t,selectors:[["app-voucher"]],decls:1,vars:1,consts:[["class","d-flex justify-content-center",4,"ngIf"],[1,"d-flex","justify-content-center"],[2,"width","100%","height","2200px",3,"src"]],template:function(t,e){1&t&&a.Mc(0,P,2,1,"div",0),2&t&&a.rc("ngIf",e.voucher_link)},directives:[r.u],styles:[""]}),t})()},{path:"**",redirectTo:"",pathMatch:""}]}];let M=(()=>{class t{}return t.\u0275mod=a.Pb({type:t}),t.\u0275inj=a.Ob({factory:function(e){return new(e||t)},imports:[[b.j.forChild(L)],b.j]}),t})();var j=i("0L5U"),R=i("KZX/"),Q=i("1kSV");let C=(()=>{class t{}return t.\u0275mod=a.Pb({type:t}),t.\u0275inj=a.Ob({factory:function(e){return new(e||t)},imports:[[r.c,M,j.b,R.a,Q.f,u.b,h.c,o.c]]}),t})()}}]);