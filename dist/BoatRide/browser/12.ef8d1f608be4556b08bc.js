(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0mYb":function(e,t,i){"use strict";i.r(t),i.d(t,"WaterSportsModule",(function(){return ae}));var b=i("ofXK"),r=i("tyNb"),o=i("fXoL");let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Jb({type:e,selectors:[["app-water-sports"]],decls:1,vars:0,template:function(e,t){1&e&&o.Qb(0,"router-outlet")},directives:[r.j],styles:[""]}),e})();var s=i("0IaG"),n=i("3Pt+"),c=i("poX1");class d extends c.a{constructor(e=0){super(e)}list(){return{id:this.id,name:this.name,email:this.email,phone:this.phone,water_sport:this.water_sport,message:this.message}}}var l=i("AytR"),p=i("lJxs"),u=i("O3te");class m extends u.a{fromJson(e){return this.adapt(e.body)}fromJsonList(e){return this.adaptList(e.body,e.pagination)}toJson(e){return{name:e.name,email:e.email,phone:e.phone,water_sport_id:e.water_sport,message:e.message}}toFormData(e){return null}adapt(e){return new d(e.id)}status(e){return{is_active:e}}}var V=i("tk/3");let U=(()=>{class e{constructor(e){this.http=e,this.url=l.a.url(),this.endpoint="water_sports_requests",this.serializer=new m}create(e){return this.http.post(`${this.url}${this.endpoint}`,this.serializer.toJson(e)).pipe(Object(p.a)(e=>this.serializer.fromJson(e)))}}return e.\u0275fac=function(t){return new(t||e)(o.dc(V.b))},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=i("bi1R"),h=i("uiIt"),g=i("R8sa"),f=i("Xa2L"),w=i("GAU4"),L=i("kmnG"),k=i("bTqV");function y(e,t){1&e&&o.Qb(0,"mat-spinner",10)}function Q(e,t){if(1&e&&(o.Vb(0,"div",7),o.Vb(1,"div",8),o.Jc(2,y,1,0,"mat-spinner",9),o.Ub(),o.Ub()),2&e){const e=o.kc();o.Bb(2),o.pc("ngIf",e.isLoadingResults)}}function x(e,t){1&e&&o.Qb(0,"app-success-booking")}function B(e,t){1&e&&(o.Vb(0,"mat-error",44),o.Vb(1,"strong"),o.Lc(2),o.Ub(),o.Ub()),2&e&&(o.Bb(2),o.Mc("Name is required"))}function S(e,t){1&e&&(o.Vb(0,"mat-error",44),o.Vb(1,"strong"),o.Lc(2),o.Ub(),o.Ub()),2&e&&(o.Bb(2),o.Mc("Email is required"))}function _(e,t){1&e&&(o.Vb(0,"mat-error",44),o.Vb(1,"strong"),o.Lc(2),o.Ub(),o.Ub()),2&e&&(o.Bb(2),o.Mc("Phone is required"))}function I(e,t){if(1&e&&(o.Vb(0,"option",45),o.Lc(1),o.Ub()),2&e){const e=t.$implicit;o.pc("value",e.id),o.Bb(1),o.Nc(" ",e.name," ")}}function J(e,t){1&e&&(o.Vb(0,"mat-error",44),o.Vb(1,"strong"),o.Lc(2),o.Ub(),o.Ub()),2&e&&(o.Bb(2),o.Mc("Water Sport is required"))}function E(e,t){1&e&&(o.Vb(0,"mat-error",44),o.Vb(1,"strong"),o.Lc(2),o.Ub(),o.Ub()),2&e&&(o.Bb(2),o.Mc("Message is required"))}function D(e,t){if(1&e&&(o.Vb(0,"form",13),o.Vb(1,"div",14),o.Vb(2,"div",15),o.Vb(3,"div",16),o.Vb(4,"div",17),o.Vb(5,"div",18),o.Vb(6,"span",19),o.Qb(7,"i",20),o.Ub(),o.Ub(),o.Qb(8,"input",21),o.Ub(),o.Vb(9,"div",22),o.Jc(10,B,3,1,"mat-error",23),o.Ub(),o.Ub(),o.Vb(11,"div",24),o.Vb(12,"div",25),o.Vb(13,"div",18),o.Vb(14,"span",26),o.Qb(15,"i",27),o.Ub(),o.Ub(),o.Qb(16,"input",28),o.Ub(),o.Vb(17,"div",22),o.Jc(18,S,3,1,"mat-error",23),o.Ub(),o.Ub(),o.Vb(19,"div",29),o.Vb(20,"div",30),o.Vb(21,"div",18),o.Vb(22,"span",31),o.Qb(23,"i",32),o.Ub(),o.Ub(),o.Qb(24,"input",33),o.Ub(),o.Vb(25,"div",22),o.Jc(26,_,3,1,"mat-error",23),o.Ub(),o.Ub(),o.Vb(27,"div",34),o.Vb(28,"div",35),o.Vb(29,"div",18),o.Vb(30,"span",36),o.Qb(31,"i",37),o.Ub(),o.Ub(),o.Vb(32,"select",38),o.Vb(33,"option",39),o.Lc(34," Water Sport "),o.Ub(),o.Jc(35,I,2,2,"option",40),o.Ub(),o.Ub(),o.Vb(36,"div",22),o.Jc(37,J,3,1,"mat-error",23),o.Ub(),o.Ub(),o.Ub(),o.Vb(38,"div",15),o.Vb(39,"div",41),o.Vb(40,"div",42),o.Vb(41,"textarea",43),o.Lc(42,"              "),o.Ub(),o.Vb(43,"div",22),o.Jc(44,E,3,1,"mat-error",23),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&e){const e=o.kc(2);o.pc("formGroup",e.form),o.Bb(10),o.pc("ngIf",e.isControlHasError("name","required")),o.Bb(8),o.pc("ngIf",e.isControlHasError("email","required")),o.Bb(8),o.pc("ngIf",e.isControlHasError("phone","required")),o.Bb(7),o.pc("value",null),o.Bb(2),o.pc("ngForOf",e.data.water_sports),o.Bb(2),o.pc("ngIf",e.isControlHasError("water_sport","required")),o.Bb(7),o.pc("ngIf",e.isControlHasError("message","required"))}}function N(e,t){if(1&e&&(o.Vb(0,"div",11),o.Jc(1,x,1,0,"app-success-booking",6),o.Jc(2,D,45,8,"form",12),o.Ub()),2&e){const e=o.kc();o.Bb(1),o.pc("ngIf",e.is_submit),o.Bb(1),o.pc("ngIf",!e.is_submit)}}function R(e,t){if(1&e){const e=o.Wb();o.Vb(0,"mat-dialog-actions"),o.Vb(1,"div",46),o.Vb(2,"button",47),o.hc("click",(function(){return o.Ac(e),o.kc().submitForm()})),o.Lc(3," Book Now "),o.Ub(),o.Ub(),o.Ub()}}let C=(()=>{class e{constructor(e,t,i,b,r,o,a,s){this.dialogRef=e,this.data=t,this.fb=i,this.service=b,this.formErrorService=r,this.cdr=o,this.authNoticeService=a,this.helper=s,this.isLoadingResults=!0,this.is_submit=!1}ngOnInit(){this.initForm()}initForm(){this.form=this.fb.group({name:["",n.o.required],email:["",n.o.required],phone:["",n.o.required],water_sport:[null,n.o.required],message:["",n.o.required]}),this.isLoadingResults=!1,this.cdr.markForCheck()}isControlHasError(e,t){return this.formErrorService.isControlHasError(this.form,e,t)}submitForm(){const e=this.form.controls;if(this.form.invalid)return void this.formErrorService.markAsTouched(e);const t=new d;t.name=e.name.value,t.email=e.email.value,t.phone=e.phone.value,t.water_sport=e.water_sport.value,t.message=e.message.value,this.isLoadingResults=!0,this.service.create(t).subscribe(e=>{this.form.reset(),this.isLoadingResults=!1,this.is_submit=!0,this.cdr.markForCheck()},e=>{this.authNoticeService.setNotice(this.helper.showingErrors(e.error),"danger"),this.isLoadingResults=!1})}onNoClick(){this.dialogRef.close()}}return e.\u0275fac=function(t){return new(t||e)(o.Pb(s.g),o.Pb(s.a),o.Pb(n.b),o.Pb(U),o.Pb(v.a),o.Pb(o.h),o.Pb(h.a),o.Pb(g.a))},e.\u0275cmp=o.Jb({type:e,selectors:[["app-water-sport-booking-form"]],decls:10,vars:3,consts:[[1,"modal-header"],[1,"modal-title","font-weight-bold"],["type","button",1,"close",3,"click"],["aria-hidden","true"],["class","example-container m-auto",4,"ngIf"],["class","my-4",4,"ngIf"],[4,"ngIf"],[1,"example-container","m-auto"],[1,"example-loading-shade","mt-5","mb-5"],["diameter","50",4,"ngIf"],["diameter","50"],[1,"my-4"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"row"],[1,"col-md-6"],["aria-label","name",1,"mb-3"],["aria-label","name",1,"input-group"],[1,"input-group-prepend"],["id","name",1,"input-group-text"],[1,"far","fa-user"],["type","text","placeholder","Name","formControlName","name","aria-label","Name","aria-describedby","name",1,"form-control"],[1,"d-block"],["class","mb-2",4,"ngIf"],["aria-label","email",1,"mb-3"],["aria-label","email",1,"input-group","mb-3"],["id","email",1,"input-group-text"],[1,"far","fa-envelope"],["type","email","placeholder","Email","formControlName","email","aria-label","Email","aria-describedby","email",1,"form-control"],["aria-label","phone",1,"mb-3"],["aria-label","phone",1,"input-group","mb-3"],["id","phone",1,"input-group-text"],[1,"fas","fa-phone-alt"],["type","text","placeholder","phone","formControlName","phone","aria-label","phone","aria-describedby","Phone",1,"form-control"],["aria-label","water_sport"],["aria-label","water_sport",1,"input-group"],["id","water_sport",1,"input-group-text"],[1,"fas","fa-anchor"],["formControlName","water_sport",1,"custom-select"],["disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["aria-label","yacht",1,"h-100"],[1,"form-group","h-100"],["placeholder","Message","formControlName","message","rows","3",1,"form-control","h-100"],[1,"mb-2"],[3,"value"],[1,"modal-footer","w-100","d-flex","justify-content-center"],["mat-raised-button","","color","accent",1,"text-uppercase",3,"click"]],template:function(e,t){1&e&&(o.Vb(0,"div",0),o.Vb(1,"h3",1),o.Lc(2," Book A Water Sport "),o.Ub(),o.Vb(3,"button",2),o.hc("click",(function(){return t.onNoClick()})),o.Vb(4,"span",3),o.Lc(5,"\xd7"),o.Ub(),o.Ub(),o.Ub(),o.Vb(6,"mat-dialog-content"),o.Jc(7,Q,3,1,"div",4),o.Jc(8,N,3,2,"div",5),o.Ub(),o.Jc(9,R,4,0,"mat-dialog-actions",6)),2&e&&(o.Bb(7),o.pc("ngIf",t.isLoadingResults),o.Bb(1),o.pc("ngIf",!t.isLoadingResults),o.Bb(1),o.pc("ngIf",!t.is_submit&&!t.isLoadingResults))},directives:[s.e,b.k,f.b,w.a,n.q,n.j,n.d,n.a,n.i,n.c,n.n,n.l,n.p,b.j,L.b,s.c,k.a],styles:[""]}),e})();var P=i("DmsX"),M=i("4g7v"),W=i("ay1t"),A=i("xJkR"),F=i("1kSV");function H(e,t){if(1&e&&(o.Vb(0,"section",37),o.Qb(1,"div",38),o.Vb(2,"div",39),o.Vb(3,"div",3),o.Vb(4,"div",40),o.Vb(5,"h1",41),o.Lc(6),o.Ub(),o.Vb(7,"div",42),o.Vb(8,"ul",43),o.Vb(9,"li"),o.Vb(10,"a",44),o.Lc(11,"Home"),o.Ub(),o.Ub(),o.Vb(12,"li"),o.Vb(13,"a",45),o.Lc(14,"Water Sport"),o.Ub(),o.Ub(),o.Vb(15,"li"),o.Lc(16),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&e){const e=o.kc();o.Bb(6),o.Mc(e.watersport.name),o.Bb(10),o.Mc(e.watersport.name)}}const j=function(){return{height:"700px",width:"100%","border-radius":"10px"}};function q(e,t){1&e&&(o.Vb(0,"div",46),o.Qb(1,"ngx-skeleton-loader",47),o.Ub()),2&e&&(o.Bb(1),o.pc("theme",o.sc(1,j)))}function O(e,t){1&e&&(o.Vb(0,"div",48),o.Qb(1,"ngx-skeleton-loader",47),o.Ub()),2&e&&(o.Bb(1),o.pc("theme",o.sc(1,j)))}function T(e,t){if(1&e&&(o.Vb(0,"div",60),o.Vb(1,"div",4),o.Vb(2,"div",31),o.Vb(3,"a"),o.Qb(4,"img",61),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&e){const e=o.kc().$implicit;o.Bb(4),o.qc("src",e.image,o.Dc)}}function G(e,t){1&e&&o.Jc(0,T,5,1,"ng-template",59)}function X(e,t){if(1&e&&(o.Vb(0,"div",49),o.Vb(1,"div",50),o.Vb(2,"div",51),o.Vb(3,"div",52),o.Qb(4,"div",53),o.Ub(),o.Vb(5,"div",54),o.Vb(6,"div",16),o.Vb(7,"ngb-carousel",55),o.Jc(8,G,1,0,void 0,56),o.Ub(),o.Ub(),o.Ub(),o.Vb(9,"div",57),o.Vb(10,"h4"),o.Lc(11,"Description"),o.Ub(),o.Qb(12,"p",58),o.Ub(),o.Vb(13,"div",57),o.Vb(14,"h4"),o.Lc(15,"What to Expect"),o.Ub(),o.Qb(16,"p",58),o.Ub(),o.Vb(17,"div",57),o.Vb(18,"h4"),o.Lc(19,"Routes"),o.Ub(),o.Qb(20,"p",58),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&e){const e=o.kc();o.Bb(7),o.pc("wrap",!0)("interval",2500)("pauseOnHover",!0)("showNavigationArrows",!1)("showNavigationIndicators",!0),o.Bb(1),o.pc("ngForOf",e.watersport.images),o.Bb(4),o.pc("innerHTML",e.watersport.water_sport_description,o.Bc),o.Bb(4),o.pc("innerHTML",e.watersport.what_to_expect_description,o.Bc),o.Bb(4),o.pc("innerHTML",e.watersport.routes,o.Bc)}}let z=(()=>{class e{constructor(e,t,i,b,r){this.route=e,this.cdr=t,this.metaService=i,this.dialog=b,this.WaterSportSevice=r}ngOnInit(){window.dataLayer=[],this.slug=this.route.snapshot.params.slug,this.getWaterSport(),this.getWaterSports()}getWaterSport(){this.WaterSportSevice.getWaterSport(this.slug).subscribe(e=>{this.watersport=e,this.updateMetaTags(),this.cdr.markForCheck()})}getWaterSports(){this.WaterSportSevice.getWaterSports().subscribe(e=>{this.water_sports_list=e,this.cdr.markForCheck()})}openBooking(){const e=new s.d;e.panelClass="full-screen-modal",e.width="100vw",e.data={water_sports:this.water_sports_list},this.dialog.open(C,e)}updateMetaTags(){var e,t,i,b,r,o,a;window.dataLayer=[];let s=(null===(t=null===(e=this.watersport)||void 0===e?void 0:e.images)||void 0===t?void 0:t.length)?null===(i=this.watersport)||void 0===i?void 0:i.images[0].image:"";this.metaService.updateTags((null===(r=null===(b=this.watersport)||void 0===b?void 0:b.seo)||void 0===r?void 0:r.title)+" | Boats-Ride",null===(a=null===(o=this.watersport)||void 0===o?void 0:o.seo)||void 0===a?void 0:a.description,s),window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"details",ecommerce:{currencyCode:"AED",detail:{products:[{name:this.watersport.title?this.watersport.title:"",id:this.watersport.id?this.watersport.id:"",price:this.watersport.selling_per_hour?this.watersport.selling_per_hour:""}]}}})}}return e.\u0275fac=function(t){return new(t||e)(o.Pb(r.a),o.Pb(o.h),o.Pb(P.a),o.Pb(s.b),o.Pb(M.a))},e.\u0275cmp=o.Jb({type:e,selectors:[["app-wate-sport-details"]],decls:58,vars:5,consts:[["class","page-banner inner-banner-height",4,"ngIf"],["class","item",4,"ngIf"],[1,"info-pop"],[1,"auto-container"],[1,"inner"],[1,"text"],[1,"close-btn"],[1,"flaticon-letter-x"],[1,"yacht-tours-container","alternate-bg-two"],[1,"content-container"],[1,"row","clearfix"],["class","item col-lg-8 col-md-12 col-sm-12",4,"ngIf"],["class","content-side col-lg-8 col-md-12 col-sm-12",4,"ngIf"],[1,"widgets-side","col-lg-4","col-md-6","col-sm-12"],[1,"widgets-content"],[1,"tour-widget","single-booking-widget"],[1,"widget-inner"],[1,"default-form","main-booking-form"],[1,"estimate-table"],[1,"totals","clearfix"],[1,"ttle"],[1,"dtl"],[1,"info"],[1,"icon","flaticon-wall-clock"],[1,"form-group"],["type","button",1,"theme-btn",3,"click"],[1,"btn-title"],[1,"instruction"],[1,"tour-widget","advisor-widget"],[1,"advisor-block"],[1,"inner-box"],[1,"image-box"],["href","#"],["src","../../../assets/images/resource/team-6.jpg","alt","","title",""],[1,"lower-box","clearfix"],[1,"lower-content"],[1,"icon","flaticon-assistance"],[1,"page-banner","inner-banner-height"],[1,"image-layer",2,"background-image","url(../../../assets/images/background/banner-1.jpg)"],[1,"banner-inner"],[1,"inner-container","clearfix"],[1,"inner-banner-height-title"],[1,"page-nav"],[1,"bread-crumb","clearfix"],["routerLink","/"],["routerLink","/water-sports"],[1,"item"],["count","1","appearance","circle",1,"d-flex","justify-content-between",3,"theme"],[1,"item","col-lg-8","col-md-12","col-sm-12"],[1,"content-side","col-lg-8","col-md-12","col-sm-12"],[1,"content-inner"],[1,"tour-details"],[1,"info-title","clearfix"],[1,"left-info"],[1,"tour-widget","recommended-widget","carousel-widget"],[3,"wrap","interval","pauseOnHover","showNavigationArrows","showNavigationIndicators"],[4,"ngFor","ngForOf"],[1,"text-block"],[3,"innerHTML"],["ngbSlide",""],[1,"recommend-block"],["alt","","title","",3,"src"]],template:function(e,t){1&e&&(o.Jc(0,H,17,2,"section",0),o.Jc(1,q,2,2,"div",1),o.Vb(2,"div",2),o.Vb(3,"div",3),o.Vb(4,"div",4),o.Vb(5,"div",5),o.Lc(6,"Our tour bookings are filling fastly, Book Your\u2019s Now"),o.Ub(),o.Vb(7,"div",6),o.Qb(8,"span",7),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(9,"section",8),o.Vb(10,"div",3),o.Vb(11,"div",9),o.Vb(12,"div",10),o.Jc(13,O,2,2,"div",11),o.Jc(14,X,21,9,"div",12),o.Vb(15,"div",13),o.Vb(16,"div",14),o.Vb(17,"div",15),o.Vb(18,"div",16),o.Qb(19,"br"),o.Vb(20,"div",17),o.Vb(21,"h5"),o.Lc(22,"Price Details"),o.Ub(),o.Qb(23,"br"),o.Vb(24,"div",18),o.Vb(25,"ul"),o.Vb(26,"li",19),o.Vb(27,"span",20),o.Lc(28,"Price:"),o.Ub(),o.Vb(29,"span",21),o.Lc(30),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Qb(31,"br"),o.Vb(32,"div",22),o.Qb(33,"span",23),o.Lc(34," Reservations: 24 / 7"),o.Ub(),o.Qb(35,"br"),o.Vb(36,"div",24),o.Vb(37,"button",25),o.hc("click",(function(){return t.openBooking()})),o.Vb(38,"span",26),o.Lc(39,"Book Now"),o.Ub(),o.Ub(),o.Ub(),o.Vb(40,"div",27),o.Lc(41,"Do you need suggestion pls contact our expert team."),o.Ub(),o.Ub(),o.Ub(),o.Vb(42,"div",28),o.Vb(43,"div",16),o.Vb(44,"div",29),o.Vb(45,"div",30),o.Vb(46,"div",31),o.Vb(47,"a",32),o.Qb(48,"img",33),o.Ub(),o.Ub(),o.Vb(49,"div",34),o.Vb(50,"div",35),o.Vb(51,"h4"),o.Vb(52,"a",32),o.Lc(53,"Mohammed Sahraoui"),o.Ub(),o.Ub(),o.Vb(54,"div",22),o.Qb(55,"span",36),o.Lc(56,"+971 52 491 8686 [24/Hours] "),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Qb(57,"app-service-section")),2&e&&(o.pc("ngIf",t.watersport),o.Bb(1),o.pc("ngIf",!t.watersport),o.Bb(12),o.pc("ngIf",!t.watersport),o.Bb(1),o.pc("ngIf",t.watersport),o.Bb(16),o.Nc("AED ",null==t.watersport?null:t.watersport.selling_per_hour," / Hour"))},directives:[b.k,W.a,r.h,A.a,F.a,b.j,F.e],styles:[""]}),e})();var Y=i("0L5U");const $=function(){return{width:"740px",height:"310px","border-radius":"10px"}};function K(e,t){1&e&&(o.Vb(0,"div",92),o.Qb(1,"ngx-skeleton-loader",93),o.Ub()),2&e&&(o.Bb(1),o.pc("theme",o.sc(1,$)))}function Z(e,t){if(1&e&&(o.Vb(0,"div",94),o.Vb(1,"div",95),o.Qb(2,"div",96),o.Vb(3,"div",42),o.Vb(4,"a",97),o.Qb(5,"img",98),o.Ub(),o.Ub(),o.Vb(6,"div",99),o.Vb(7,"div",45),o.Vb(8,"h4"),o.Vb(9,"a",97),o.Lc(10),o.Ub(),o.Ub(),o.Qb(11,"br"),o.Vb(12,"div",46),o.Vb(13,"ul",47),o.Qb(14,"div",100),o.Ub(),o.Ub(),o.Ub(),o.Vb(15,"div",57),o.Vb(16,"div",60),o.Vb(17,"strong"),o.Lc(18,"4.0"),o.Ub(),o.Vb(19,"a",61),o.Lc(20,"[101 Reviews]"),o.Ub(),o.Ub(),o.Vb(21,"div",58),o.Qb(22,"span",59),o.Qb(23,"span",59),o.Qb(24,"span",59),o.Qb(25,"span",59),o.Qb(26,"span",101),o.Ub(),o.Ub(),o.Vb(27,"div",102),o.Vb(28,"div",103),o.Vb(29,"a",104),o.Vb(30,"span",91),o.Lc(31,"More Details"),o.Ub(),o.Ub(),o.Vb(32,"a",105),o.Vb(33,"span",91),o.Lc(34,"Book Now"),o.Ub(),o.Ub(),o.Ub(),o.Vb(35,"div",103),o.Vb(36,"div",106),o.Vb(37,"div",107),o.Qb(38,"span",108),o.Ub(),o.Vb(39,"div",109),o.Vb(40,"div",110),o.Vb(41,"div",111),o.Lc(42,"Includes"),o.Ub(),o.Vb(43,"ul",112),o.Vb(44,"li"),o.Lc(45,"Hotel pick-up/drop-off"),o.Ub(),o.Vb(46,"li"),o.Lc(47,"Free Life Vest"),o.Ub(),o.Vb(48,"li"),o.Lc(49,"Soft Drinks"),o.Ub(),o.Vb(50,"li"),o.Lc(51,"Seafood Barbecue"),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&e){const e=t.$implicit;o.Bb(2),o.Hc("background-image:url(",e.images[0].image,");"),o.Bb(3),o.qc("src",e.images[0].image,o.Dc),o.Bb(5),o.Mc(e.name),o.Bb(4),o.pc("innerHTML",e.water_sport_description,o.Bc),o.Bb(15),o.rc("routerLink","/water-sports/",e.slug,"")}}let ee=(()=>{class e{constructor(e,t){this.waterService=e,this.cdr=t,this.waterSports=[]}ngOnInit(){this.getWaterSports()}getWaterSports(){this.waterService.getWaterSports().subscribe(e=>{this.waterSports=e,this.cdr.markForCheck()})}}return e.\u0275fac=function(t){return new(t||e)(o.Pb(M.a),o.Pb(o.h))},e.\u0275cmp=o.Jb({type:e,selectors:[["app-index"]],decls:241,vars:20,consts:[[1,"page-banner","inner-banner-height"],[1,"image-layer",2,"background-image","url(./assets/images/resource/511.jpg)"],[1,"banner-inner"],[1,"auto-container"],[1,"inner-container","clearfix"],[1,"inner-banner-height-title"],[1,"page-nav"],[1,"bread-crumb","clearfix"],["routerLink","/"],["routerLink","/yachts"],[1,"yacht-tours-container"],[1,"main-title"],[1,"default-form","yacht-search-form"],["method","post","action","http://st.ourhtmldemo.com/new/sailing-demo/yacht-tour-single.html"],[1,"row","clearfix"],[1,"content-container"],[1,"content-side","col-lg-8","col-md-12","col-sm-12"],[1,"content-inner"],[1,"lower-filter-row","clearfix"],[1,"results-count"],[1,"view-modes","clearfix"],[1,"mode"],["href","water-sport.html",1,"active"],[1,"flaticon-menu-3"],["href","water-sport2.html"],[1,"flaticon-shape"],[1,"results-row"],["class","item",4,"ngIf"],["class","activity-block-two",4,"ngFor","ngForOf"],[1,"widgets-side","col-lg-4","col-md-6","col-sm-12"],[1,"widgets-content"],[1,"tour-widget","recommended-widget","carousel-widget"],[1,"widget-inner"],[1,"tour-widget-title"],[3,"margin","height","cellWidth","cellsToShow","arrows","autoplay","dots","arrowsOutside","transitionDuration"],[1,"carousel-cell"],[1,"recommend-block"],[1,"inner"],[1,"pricing"],[1,"price"],[1,"price-title"],[1,"unit"],[1,"image-box"],["href","yacht-tour-single.html"],["src","assets/images/resource/31 - Copy.jpeg","alt","","title",""],[1,"content"],[1,"info"],[1,"clearfix"],[1,"tour-widget","destination-widget","carousel-widget"],[1,"destination-block-three"],[1,"inner-box"],[1,"image"],["src","assets/images/resource/23.jpg","alt","","title",""],[1,"caption-box"],[1,"title"],[1,"icon","flaticon-wall-clock"],[1,"hover-box"],[1,"ratings"],[1,"rate"],[1,"fa","fa-star"],[1,"rate-text"],["href","#"],[1,"tour-widget","offers-widget"],[1,"post"],[1,"post-inner"],[1,"post-thumb"],["src","assets/images/resource/54.png","alt","","title",""],[1,"off-price"],[1,"new"],[1,"original"],["src","assets/images/resource/55.jpg","alt","","title",""],["src","assets/images/resource/56.jpg","alt","","title",""],["src","assets/images/resource/57.jpg","alt","","title",""],[1,"tour-widget","advisor-widget","carousel-widget"],[1,"advisor-carousel","single-item-carousel","owl-theme","owl-carousel"],[1,"advisor-block"],["src","assets/images/resource/team-6.jpg","alt","","title",""],[1,"lower-box","clearfix"],[1,"lower-content"],[1,"tel:+971524918686"],[1,"subscribe-section","style-three"],[1,"image-layer",2,"background-image","url(./assets/images/background/image-12.jpg)"],[1,"subtitle"],[1,"default-form","subscribe-form-two"],["method","post","action","http://st.ourhtmldemo.com/new/sailing-demo/contact.html"],[1,"form-group","col-lg-4","col-md-6","col-sm-12"],[1,"field-inner"],["type","text","name","field-name","placeholder","Your Name","required","","value",""],["type","email","name","field-name","placeholder","Email Address","required","","value",""],[1,"form-group","col-lg-4","col-md-12","col-sm-12"],["type","submit",1,"theme-btn","btn-style-three"],[1,"btn-title"],[1,"item"],["count","1","appearance","circle",3,"theme"],[1,"activity-block-two"],[1,"inner-box","clearfix"],[1,"image-layer"],["href","water-slide.html"],["alt","","title","",3,"src"],[1,"content-box"],[1,"text",3,"innerHTML"],[1,"fa","fa-star","empty-star"],[1,"links-box","clearfix"],[1,"link"],[1,"theme-btn","btn-style-two",3,"routerLink"],["routerLink","/yachts",1,"theme-btn","btn-style-two"],[1,"info-btn-box"],[1,"theme-btn","info-btn"],[1,"icon","flaticon-information-1"],[1,"info-panel"],[1,"panel-inner"],[1,"panel-title"],[1,"panel-list"]],template:function(e,t){1&e&&(o.Vb(0,"section",0),o.Qb(1,"div",1),o.Vb(2,"div",2),o.Vb(3,"div",3),o.Vb(4,"div",4),o.Vb(5,"h1",5),o.Lc(6,"Water Sport "),o.Ub(),o.Vb(7,"div",6),o.Vb(8,"ul",7),o.Vb(9,"li"),o.Vb(10,"a",8),o.Lc(11,"Home"),o.Ub(),o.Ub(),o.Vb(12,"li"),o.Vb(13,"a",9),o.Lc(14,"Yacht"),o.Ub(),o.Ub(),o.Vb(15,"li"),o.Lc(16,"Water Sport"),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(17,"section",10),o.Vb(18,"div",3),o.Vb(19,"div",11),o.Vb(20,"h3"),o.Lc(21,"WATER SPORT"),o.Ub(),o.Ub(),o.Vb(22,"div",12),o.Vb(23,"form",13),o.Qb(24,"div",14),o.Ub(),o.Ub(),o.Vb(25,"div",15),o.Vb(26,"div",14),o.Vb(27,"div",16),o.Vb(28,"div",17),o.Vb(29,"div",18),o.Qb(30,"div",19),o.Vb(31,"div",20),o.Vb(32,"div",21),o.Vb(33,"a",22),o.Qb(34,"span",23),o.Ub(),o.Ub(),o.Vb(35,"div",21),o.Vb(36,"a",24),o.Qb(37,"span",25),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(38,"div",26),o.Jc(39,K,2,2,"div",27),o.Jc(40,Z,52,7,"div",28),o.Ub(),o.Ub(),o.Ub(),o.Vb(41,"div",29),o.Vb(42,"div",30),o.Vb(43,"div",31),o.Vb(44,"div",32),o.Vb(45,"div",33),o.Vb(46,"h4"),o.Lc(47,"Recommended"),o.Ub(),o.Ub(),o.Vb(48,"carousel",34),o.Vb(49,"div",35),o.Vb(50,"div",36),o.Vb(51,"div",37),o.Vb(52,"div",38),o.Vb(53,"div",39),o.Vb(54,"div",40),o.Lc(55,"From"),o.Ub(),o.Vb(56,"div",41),o.Vb(57,"span"),o.Lc(58," AED 199"),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(59,"div",42),o.Vb(60,"a",43),o.Qb(61,"img",44),o.Ub(),o.Ub(),o.Vb(62,"div",45),o.Vb(63,"h4"),o.Vb(64,"a",43),o.Lc(65,"Dinner Cruise "),o.Ub(),o.Ub(),o.Vb(66,"div",46),o.Qb(67,"ul",47),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(68,"div",35),o.Vb(69,"div",36),o.Vb(70,"div",37),o.Vb(71,"div",38),o.Vb(72,"div",39),o.Vb(73,"div",40),o.Lc(74,"From"),o.Ub(),o.Vb(75,"div",41),o.Vb(76,"span"),o.Lc(77," AED 199"),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(78,"div",42),o.Vb(79,"a",43),o.Qb(80,"img",44),o.Ub(),o.Ub(),o.Vb(81,"div",45),o.Vb(82,"h4"),o.Vb(83,"a",43),o.Lc(84,"Dinner Cruise "),o.Ub(),o.Ub(),o.Vb(85,"div",46),o.Qb(86,"ul",47),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(87,"div",48),o.Vb(88,"div",32),o.Vb(89,"div",33),o.Vb(90,"h4"),o.Lc(91,"Top Distinations"),o.Ub(),o.Ub(),o.Vb(92,"carousel",34),o.Vb(93,"div",35),o.Vb(94,"div",49),o.Vb(95,"div",50),o.Vb(96,"div",42),o.Vb(97,"figure",51),o.Vb(98,"a",43),o.Qb(99,"img",52),o.Ub(),o.Ub(),o.Ub(),o.Vb(100,"div",53),o.Vb(101,"div",37),o.Vb(102,"div",39),o.Lc(103,"AED 590"),o.Ub(),o.Vb(104,"div",54),o.Vb(105,"a",43),o.Lc(106,"PALM JUMEIRAH"),o.Ub(),o.Ub(),o.Vb(107,"div",46),o.Qb(108,"span",55),o.Lc(109,"Reservations: 24 / 7"),o.Ub(),o.Ub(),o.Ub(),o.Vb(110,"div",56),o.Vb(111,"div",57),o.Vb(112,"div",58),o.Qb(113,"span",59),o.Qb(114,"span",59),o.Qb(115,"span",59),o.Qb(116,"span",59),o.Qb(117,"span",59),o.Ub(),o.Vb(118,"div",60),o.Vb(119,"strong"),o.Lc(120,"4.8"),o.Ub(),o.Vb(121,"a",61),o.Lc(122,"[106 Reviews]"),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(123,"div",62),o.Vb(124,"div",32),o.Vb(125,"div",33),o.Vb(126,"h4"),o.Lc(127,"Best Offers"),o.Ub(),o.Ub(),o.Vb(128,"div",63),o.Vb(129,"div",64),o.Vb(130,"div",65),o.Vb(131,"a",61),o.Qb(132,"img",66),o.Ub(),o.Vb(133,"div",67),o.Lc(134,"-40%"),o.Ub(),o.Ub(),o.Vb(135,"h5"),o.Vb(136,"a",61),o.Lc(137,"JetPack"),o.Ub(),o.Ub(),o.Vb(138,"div",46),o.Qb(139,"span",55),o.Lc(140,"Reservations: 24 / 7"),o.Ub(),o.Vb(141,"div",39),o.Vb(142,"span",68),o.Lc(143,"AED 499"),o.Ub(),o.Vb(144,"span",69),o.Lc(145,"AED 650"),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(146,"div",63),o.Vb(147,"div",64),o.Vb(148,"div",65),o.Vb(149,"a",61),o.Qb(150,"img",70),o.Ub(),o.Vb(151,"div",67),o.Lc(152,"-40%"),o.Ub(),o.Ub(),o.Vb(153,"h5"),o.Vb(154,"a",61),o.Lc(155,"Jet Ski"),o.Ub(),o.Ub(),o.Vb(156,"div",46),o.Qb(157,"span",55),o.Lc(158," Duration: 4D + 5N"),o.Ub(),o.Vb(159,"div",39),o.Vb(160,"span",68),o.Lc(161,"AED 499"),o.Ub(),o.Vb(162,"span",69),o.Lc(163,"AED 650"),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(164,"div",63),o.Vb(165,"div",64),o.Vb(166,"div",65),o.Vb(167,"a",61),o.Qb(168,"img",71),o.Ub(),o.Vb(169,"div",67),o.Lc(170,"-40%"),o.Ub(),o.Ub(),o.Vb(171,"h5"),o.Vb(172,"a",61),o.Lc(173,"Water Shark "),o.Ub(),o.Ub(),o.Vb(174,"div",46),o.Qb(175,"span",55),o.Lc(176,"Reservations: 24 / 7"),o.Ub(),o.Vb(177,"div",39),o.Vb(178,"span",68),o.Lc(179,"AED 499"),o.Ub(),o.Vb(180,"span",69),o.Lc(181,"AED 650"),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(182,"div",63),o.Vb(183,"div",64),o.Vb(184,"div",65),o.Vb(185,"a",61),o.Qb(186,"img",72),o.Ub(),o.Vb(187,"div",67),o.Lc(188,"-40%"),o.Ub(),o.Ub(),o.Vb(189,"h5"),o.Vb(190,"a",61),o.Lc(191,"Sea Bob "),o.Ub(),o.Ub(),o.Vb(192,"div",46),o.Qb(193,"span",55),o.Lc(194,"Reservations: 24 / 7"),o.Ub(),o.Vb(195,"div",39),o.Vb(196,"span",68),o.Lc(197,"AED 499"),o.Ub(),o.Vb(198,"span",69),o.Lc(199,"AED 650"),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(200,"div",73),o.Vb(201,"div",32),o.Vb(202,"div",33),o.Vb(203,"h4"),o.Lc(204,"Tour Advisors"),o.Ub(),o.Ub(),o.Vb(205,"div",74),o.Vb(206,"div",75),o.Vb(207,"div",50),o.Vb(208,"div",42),o.Vb(209,"a",61),o.Qb(210,"img",76),o.Ub(),o.Ub(),o.Vb(211,"div",77),o.Vb(212,"div",78),o.Vb(213,"h4"),o.Vb(214,"a",61),o.Lc(215,"Hohammed Sahraoui"),o.Ub(),o.Ub(),o.Vb(216,"div",46),o.Qb(217,"span",79),o.Lc(218,"+971 52 491 8686 [24/Hours]"),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(219,"section",80),o.Vb(220,"div",3),o.Vb(221,"div",37),o.Qb(222,"div",81),o.Vb(223,"div",54),o.Vb(224,"h4"),o.Lc(225,"Subscribe to our newsletter"),o.Ub(),o.Vb(226,"div",82),o.Lc(227,"Subscribe & Get Updates in Your Inbox "),o.Ub(),o.Ub(),o.Vb(228,"div",83),o.Vb(229,"form",84),o.Vb(230,"div",14),o.Vb(231,"div",85),o.Vb(232,"div",86),o.Qb(233,"input",87),o.Ub(),o.Ub(),o.Vb(234,"div",85),o.Vb(235,"div",86),o.Qb(236,"input",88),o.Ub(),o.Ub(),o.Vb(237,"div",89),o.Vb(238,"button",90),o.Vb(239,"span",91),o.Lc(240,"Subscribe Now"),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&e&&(o.Bb(39),o.pc("ngIf",!t.waterSports.length),o.Bb(1),o.pc("ngForOf",t.waterSports),o.Bb(8),o.pc("margin",20)("height",300)("cellWidth",300)("cellsToShow",1)("arrows",!1)("autoplay",!0)("dots",!0)("arrowsOutside",!0)("transitionDuration",100),o.Bb(44),o.pc("margin",20)("height",350)("cellWidth",300)("cellsToShow",1)("arrows",!1)("autoplay",!0)("dots",!0)("arrowsOutside",!0)("transitionDuration",100))},directives:[r.h,b.k,b.j,Y.a,A.a],styles:[""]}),e})();var te=i("jhN1");function ie(e,t){if(1&e&&(o.Vb(0,"div",1),o.Qb(1,"iframe",2),o.Ub()),2&e){const e=o.kc();o.Bb(1),o.pc("src",e.voucher_link,o.Cc)}}const be=[{path:"",component:a,children:[{path:"",component:ee},{path:":slug",component:z},{path:"voucher/:booking_number",component:(()=>{class e{constructor(e,t,i,b){this.voucherService=e,this.route=t,this.cdr=i,this.sanitizer=b}ngOnInit(){this.booking_number=this.route.snapshot.params.booking_number,this.getVoucher()}getVoucher(){this.voucherService.getVoucher(this.booking_number).subscribe(e=>{this.voucher=e,this.cdr.markForCheck(),this.voucher&&this.transform()})}transform(){this.voucher_link=this.sanitizer.bypassSecurityTrustResourceUrl(this.voucher.url),this.cdr.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(o.Pb(M.a),o.Pb(r.a),o.Pb(o.h),o.Pb(te.b))},e.\u0275cmp=o.Jb({type:e,selectors:[["app-voucher"]],decls:1,vars:1,consts:[["class","d-flex justify-content-center",4,"ngIf"],[1,"d-flex","justify-content-center"],[2,"width","100%","height","2200px",3,"src"]],template:function(e,t){1&e&&o.Jc(0,ie,2,1,"div",0),2&e&&o.pc("ngIf",t.voucher_link)},directives:[b.k],styles:[""]}),e})()},{path:"**",redirectTo:"",pathMatch:""}]}];let re=(()=>{class e{}return e.\u0275mod=o.Nb({type:e}),e.\u0275inj=o.Mb({factory:function(t){return new(t||e)},imports:[[r.i.forChild(be)],r.i]}),e})();var oe=i("KZX/");let ae=(()=>{class e{}return e.\u0275mod=o.Nb({type:e}),e.\u0275inj=o.Mb({factory:function(t){return new(t||e)},imports:[[b.b,re,Y.b,oe.a,F.c,A.b]]}),e})()}}]);