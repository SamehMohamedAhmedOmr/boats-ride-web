(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0mYb":function(e,t,i){"use strict";i.r(t),i.d(t,"WaterSportsModule",(function(){return se}));var r=i("ofXK"),b=i("tyNb"),a=i("fXoL");let o=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Jb({type:e,selectors:[["app-water-sports"]],decls:1,vars:0,template:function(e,t){1&e&&a.Qb(0,"router-outlet")},directives:[b.j],styles:[""]}),e})();var s=i("0IaG"),n=i("3Pt+"),c=i("poX1");class l extends c.a{constructor(e=0){super(e)}list(){return{id:this.id,name:this.name,email:this.email,phone:this.phone,water_sport:this.water_sport,message:this.message}}}var d=i("AytR"),p=i("lJxs"),m=i("O3te");class u extends m.a{fromJson(e){return this.adapt(e.body)}fromJsonList(e){return this.adaptList(e.body,e.pagination)}toJson(e){return{name:e.name,email:e.email,phone:e.phone,water_sport_id:e.water_sport,message:e.message}}toFormData(e){return null}adapt(e){return new l(e.id)}status(e){return{is_active:e}}}var V=i("tk/3");let v=(()=>{class e{constructor(e){this.http=e,this.url=d.a.url(),this.endpoint="water_sports_requests",this.serializer=new u}create(e){return this.http.post(`${this.url}${this.endpoint}`,this.serializer.toJson(e)).pipe(Object(p.a)(e=>this.serializer.fromJson(e)))}}return e.\u0275fac=function(t){return new(t||e)(a.dc(V.b))},e.\u0275prov=a.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var U=i("bi1R"),h=i("uiIt"),g=i("R8sa"),f=i("Xa2L"),w=i("GAU4"),L=i("kmnG"),k=i("bTqV"),B=i("sYmb");function y(e,t){1&e&&a.Qb(0,"mat-spinner",10)}function x(e,t){if(1&e&&(a.Vb(0,"div",7),a.Vb(1,"div",8),a.Jc(2,y,1,0,"mat-spinner",9),a.Ub(),a.Ub()),2&e){const e=a.kc();a.Bb(2),a.pc("ngIf",e.isLoadingResults)}}function Q(e,t){1&e&&a.Qb(0,"app-success-booking")}function _(e,t){1&e&&(a.Vb(0,"mat-error",44),a.Vb(1,"strong"),a.Lc(2),a.lc(3,"titlecase"),a.lc(4,"translate"),a.Ub(),a.Ub()),2&e&&(a.Bb(2),a.Mc(a.mc(3,1,a.mc(4,3,"form.name_required"))))}function S(e,t){1&e&&(a.Vb(0,"mat-error",44),a.Vb(1,"strong"),a.Lc(2),a.lc(3,"titlecase"),a.lc(4,"translate"),a.Ub(),a.Ub()),2&e&&(a.Bb(2),a.Mc(a.mc(3,1,a.mc(4,3,"form.email_required"))))}function I(e,t){1&e&&(a.Vb(0,"mat-error",44),a.Vb(1,"strong"),a.Lc(2),a.lc(3,"titlecase"),a.lc(4,"translate"),a.Ub(),a.Ub()),2&e&&(a.Bb(2),a.Mc(a.mc(3,1,a.mc(4,3,"form.phone_required"))))}function J(e,t){if(1&e&&(a.Vb(0,"option",45),a.Lc(1),a.Ub()),2&e){const e=t.$implicit;a.pc("value",e.id),a.Bb(1),a.Nc(" ",e.name," ")}}function M(e,t){1&e&&(a.Vb(0,"mat-error",44),a.Vb(1,"strong"),a.Lc(2),a.lc(3,"titlecase"),a.lc(4,"translate"),a.Ub(),a.Ub()),2&e&&(a.Bb(2),a.Mc(a.mc(3,1,a.mc(4,3,"form.water_sport_required"))))}function N(e,t){1&e&&(a.Vb(0,"mat-error",44),a.Vb(1,"strong"),a.Lc(2),a.lc(3,"titlecase"),a.lc(4,"translate"),a.Ub(),a.Ub()),2&e&&(a.Bb(2),a.Mc(a.mc(3,1,a.mc(4,3,"form.message_required"))))}function q(e,t){if(1&e&&(a.Vb(0,"form",13),a.Vb(1,"div",14),a.Vb(2,"div",15),a.Vb(3,"div",16),a.Vb(4,"div",17),a.Vb(5,"div",18),a.Vb(6,"span",19),a.Qb(7,"i",20),a.Ub(),a.Ub(),a.Qb(8,"input",21),a.lc(9,"titlecase"),a.lc(10,"translate"),a.Ub(),a.Vb(11,"div",22),a.Jc(12,_,5,5,"mat-error",23),a.Ub(),a.Ub(),a.Vb(13,"div",24),a.Vb(14,"div",25),a.Vb(15,"div",18),a.Vb(16,"span",26),a.Qb(17,"i",27),a.Ub(),a.Ub(),a.Qb(18,"input",28),a.lc(19,"titlecase"),a.lc(20,"translate"),a.Ub(),a.Vb(21,"div",22),a.Jc(22,S,5,5,"mat-error",23),a.Ub(),a.Ub(),a.Vb(23,"div",29),a.Vb(24,"div",30),a.Vb(25,"div",18),a.Vb(26,"span",31),a.Qb(27,"i",32),a.Ub(),a.Ub(),a.Qb(28,"input",33),a.lc(29,"titlecase"),a.lc(30,"translate"),a.Ub(),a.Vb(31,"div",22),a.Jc(32,I,5,5,"mat-error",23),a.Ub(),a.Ub(),a.Vb(33,"div",34),a.Vb(34,"div",35),a.Vb(35,"div",18),a.Vb(36,"span",36),a.Qb(37,"i",37),a.Ub(),a.Ub(),a.Vb(38,"select",38),a.Vb(39,"option",39),a.Lc(40),a.lc(41,"titlecase"),a.lc(42,"translate"),a.Ub(),a.Jc(43,J,2,2,"option",40),a.Ub(),a.Ub(),a.Vb(44,"div",22),a.Jc(45,M,5,5,"mat-error",23),a.Ub(),a.Ub(),a.Ub(),a.Vb(46,"div",15),a.Vb(47,"div",41),a.Vb(48,"div",42),a.Vb(49,"textarea",43),a.lc(50,"titlecase"),a.lc(51,"translate"),a.Lc(52,"              "),a.Ub(),a.Vb(53,"div",22),a.Jc(54,N,5,5,"mat-error",23),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&e){const e=a.kc(2);a.pc("formGroup",e.form),a.Bb(8),a.qc("placeholder",a.mc(9,13,a.mc(10,15,"form.name"))),a.Bb(4),a.pc("ngIf",e.isControlHasError("name","required")),a.Bb(6),a.qc("placeholder",a.mc(19,17,a.mc(20,19,"form.email"))),a.Bb(4),a.pc("ngIf",e.isControlHasError("email","required")),a.Bb(6),a.qc("placeholder",a.mc(29,21,a.mc(30,23,"form.phone"))),a.Bb(4),a.pc("ngIf",e.isControlHasError("phone","required")),a.Bb(7),a.pc("value",null),a.Bb(1),a.Nc(" ",a.mc(41,25,a.mc(42,27,"form.water_sport"))," "),a.Bb(3),a.pc("ngForOf",e.data.water_sports),a.Bb(2),a.pc("ngIf",e.isControlHasError("water_sport","required")),a.Bb(4),a.qc("placeholder",a.mc(50,29,a.mc(51,31,"form.message"))),a.Bb(5),a.pc("ngIf",e.isControlHasError("message","required"))}}function C(e,t){if(1&e&&(a.Vb(0,"div",11),a.Jc(1,Q,1,0,"app-success-booking",6),a.Jc(2,q,55,33,"form",12),a.Ub()),2&e){const e=a.kc();a.Bb(1),a.pc("ngIf",e.is_submit),a.Bb(1),a.pc("ngIf",!e.is_submit)}}function D(e,t){if(1&e){const e=a.Wb();a.Vb(0,"mat-dialog-actions"),a.Vb(1,"div",46),a.Vb(2,"button",47),a.hc("click",(function(){return a.Ac(e),a.kc().submitForm()})),a.Lc(3),a.lc(4,"translate"),a.Ub(),a.Ub(),a.Ub()}2&e&&(a.Bb(3),a.Nc(" ",a.mc(4,1,"booknow")," "))}let E=(()=>{class e{constructor(e,t,i,r,b,a,o,s){this.dialogRef=e,this.data=t,this.fb=i,this.service=r,this.formErrorService=b,this.cdr=a,this.authNoticeService=o,this.helper=s,this.isLoadingResults=!0,this.is_submit=!1}ngOnInit(){this.initForm()}initForm(){this.form=this.fb.group({name:["",n.o.required],email:["",n.o.required],phone:["",n.o.required],water_sport:[null,n.o.required],message:["",n.o.required]}),this.isLoadingResults=!1,this.cdr.markForCheck()}isControlHasError(e,t){return this.formErrorService.isControlHasError(this.form,e,t)}submitForm(){const e=this.form.controls;if(this.form.invalid)return void this.formErrorService.markAsTouched(e);const t=new l;t.name=e.name.value,t.email=e.email.value,t.phone=e.phone.value,t.water_sport=e.water_sport.value,t.message=e.message.value,this.isLoadingResults=!0,this.service.create(t).subscribe(e=>{this.form.reset(),this.isLoadingResults=!1,this.is_submit=!0,this.cdr.markForCheck()},e=>{this.authNoticeService.setNotice(this.helper.showingErrors(e.error),"danger"),this.isLoadingResults=!1})}onNoClick(){this.dialogRef.close()}}return e.\u0275fac=function(t){return new(t||e)(a.Pb(s.g),a.Pb(s.a),a.Pb(n.b),a.Pb(v),a.Pb(U.a),a.Pb(a.h),a.Pb(h.a),a.Pb(g.a))},e.\u0275cmp=a.Jb({type:e,selectors:[["app-water-sport-booking-form"]],decls:12,vars:8,consts:[[1,"modal-header"],[1,"modal-title","font-weight-bold"],["type","button",1,"close",3,"click"],["aria-hidden","true"],["class","example-container m-auto",4,"ngIf"],["class","my-4",4,"ngIf"],[4,"ngIf"],[1,"example-container","m-auto"],[1,"example-loading-shade","mt-5","mb-5"],["diameter","50",4,"ngIf"],["diameter","50"],[1,"my-4"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"row"],[1,"col-md-6"],["aria-label","name",1,"mb-3"],["aria-label","name",1,"input-group"],[1,"input-group-prepend"],["id","name",1,"input-group-text"],[1,"far","fa-user"],["type","text","formControlName","name","aria-label","Name","aria-describedby","name",1,"form-control",3,"placeholder"],[1,"d-block"],["class","mb-2",4,"ngIf"],["aria-label","email",1,"mb-3"],["aria-label","email",1,"input-group","mb-3"],["id","email",1,"input-group-text"],[1,"far","fa-envelope"],["type","email","formControlName","email","aria-label","Email","aria-describedby","email",1,"form-control",3,"placeholder"],["aria-label","phone",1,"mb-3"],["aria-label","phone",1,"input-group","mb-3"],["id","phone",1,"input-group-text"],[1,"fas","fa-phone-alt"],["type","text","formControlName","phone","aria-label","phone","aria-describedby","Phone",1,"form-control",3,"placeholder"],["aria-label","water_sport"],["aria-label","water_sport",1,"input-group"],["id","water_sport",1,"input-group-text"],[1,"fas","fa-anchor"],["formControlName","water_sport",1,"custom-select"],["disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["aria-label","yacht",1,"h-100"],[1,"form-group","h-100"],["formControlName","message","rows","3",1,"form-control","h-100",3,"placeholder"],[1,"mb-2"],[3,"value"],[1,"modal-footer","w-100","d-flex","justify-content-center"],["mat-raised-button","","color","accent",1,"text-uppercase",3,"click"]],template:function(e,t){1&e&&(a.Vb(0,"div",0),a.Vb(1,"h3",1),a.Lc(2),a.lc(3,"titlecase"),a.lc(4,"translate"),a.Ub(),a.Vb(5,"button",2),a.hc("click",(function(){return t.onNoClick()})),a.Vb(6,"span",3),a.Lc(7,"\xd7"),a.Ub(),a.Ub(),a.Ub(),a.Vb(8,"mat-dialog-content"),a.Jc(9,x,3,1,"div",4),a.Jc(10,C,3,2,"div",5),a.Ub(),a.Jc(11,D,5,3,"mat-dialog-actions",6)),2&e&&(a.Bb(2),a.Nc(" ",a.mc(3,4,a.mc(4,6,"form.book_water_sport"))," "),a.Bb(7),a.pc("ngIf",t.isLoadingResults),a.Bb(1),a.pc("ngIf",!t.isLoadingResults),a.Bb(1),a.pc("ngIf",!t.is_submit&&!t.isLoadingResults))},directives:[s.e,r.k,f.b,w.a,n.q,n.j,n.d,n.a,n.i,n.c,n.n,n.l,n.p,r.j,L.b,s.c,k.a],pipes:[r.t,B.c],styles:[""]}),e})();var F=i("DmsX"),P=i("4g7v"),R=i("ay1t"),j=i("xJkR"),H=i("1kSV");function A(e,t){if(1&e&&(a.Vb(0,"section",38),a.Qb(1,"div",39),a.Vb(2,"div",40),a.Vb(3,"div",3),a.Vb(4,"div",41),a.Vb(5,"h1",42),a.Lc(6),a.Ub(),a.Vb(7,"div",43),a.Vb(8,"ul",44),a.Vb(9,"li"),a.Vb(10,"a",45),a.Lc(11),a.lc(12,"translate"),a.Ub(),a.Ub(),a.Vb(13,"li"),a.Vb(14,"a",46),a.Lc(15),a.lc(16,"translate"),a.Ub(),a.Ub(),a.Vb(17,"li"),a.Lc(18),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&e){const e=a.kc();a.Bb(6),a.Mc(e.watersport.name),a.Bb(4),a.pc("routerLink","/"),a.Bb(1),a.Mc(a.mc(12,5,"home")),a.Bb(4),a.Mc(a.mc(16,7,"waterSport")),a.Bb(3),a.Mc(e.watersport.name)}}const O=function(){return{height:"700px",width:"100%","border-radius":"10px"}};function W(e,t){1&e&&(a.Vb(0,"div",47),a.Qb(1,"ngx-skeleton-loader",48),a.Ub()),2&e&&(a.Bb(1),a.pc("theme",a.sc(1,O)))}function T(e,t){1&e&&(a.Vb(0,"div",49),a.Qb(1,"ngx-skeleton-loader",48),a.Ub()),2&e&&(a.Bb(1),a.pc("theme",a.sc(1,O)))}function G(e,t){if(1&e&&(a.Vb(0,"div",61),a.Vb(1,"div",4),a.Vb(2,"div",31),a.Vb(3,"a"),a.Qb(4,"img",62),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&e){const e=a.kc().$implicit;a.Bb(4),a.qc("src",e.image,a.Dc)}}function X(e,t){1&e&&a.Jc(0,G,5,1,"ng-template",60)}function z(e,t){if(1&e&&(a.Vb(0,"div",50),a.Vb(1,"div",51),a.Vb(2,"div",52),a.Vb(3,"div",53),a.Qb(4,"div",54),a.Ub(),a.Vb(5,"div",55),a.Vb(6,"div",16),a.Vb(7,"ngb-carousel",56),a.Jc(8,X,1,0,void 0,57),a.Ub(),a.Ub(),a.Ub(),a.Vb(9,"div",58),a.Vb(10,"h4"),a.Lc(11,"Description"),a.Ub(),a.Qb(12,"p",59),a.Ub(),a.Vb(13,"div",58),a.Vb(14,"h4"),a.Lc(15,"What to Expect"),a.Ub(),a.Qb(16,"p",59),a.Ub(),a.Vb(17,"div",58),a.Vb(18,"h4"),a.Lc(19,"Routes"),a.Ub(),a.Qb(20,"p",59),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&e){const e=a.kc();a.Bb(7),a.pc("wrap",!0)("interval",2500)("pauseOnHover",!0)("showNavigationArrows",!1)("showNavigationIndicators",!0),a.Bb(1),a.pc("ngForOf",e.watersport.images),a.Bb(4),a.pc("innerHTML",e.watersport.water_sport_description,a.Bc),a.Bb(4),a.pc("innerHTML",e.watersport.what_to_expect_description,a.Bc),a.Bb(4),a.pc("innerHTML",e.watersport.routes,a.Bc)}}let $=(()=>{class e{constructor(e,t,i,r,b){this.route=e,this.cdr=t,this.metaService=i,this.dialog=r,this.WaterSportSevice=b}ngOnInit(){window.dataLayer=[],this.slug=this.route.snapshot.params.slug,this.getWaterSport(),this.getWaterSports()}getWaterSport(){this.WaterSportSevice.getWaterSport(this.slug).subscribe(e=>{this.watersport=e,this.updateMetaTags(),this.cdr.markForCheck()})}getWaterSports(){this.WaterSportSevice.getWaterSports().subscribe(e=>{this.water_sports_list=e,this.cdr.markForCheck()})}openBooking(){const e=new s.d;e.panelClass="full-screen-modal",e.width="100vw",e.data={water_sports:this.water_sports_list},this.dialog.open(E,e)}updateMetaTags(){var e,t,i,r,b,a,o;window.dataLayer=[];let s=(null===(t=null===(e=this.watersport)||void 0===e?void 0:e.images)||void 0===t?void 0:t.length)?null===(i=this.watersport)||void 0===i?void 0:i.images[0].image:"";this.metaService.updateTags((null===(b=null===(r=this.watersport)||void 0===r?void 0:r.seo)||void 0===b?void 0:b.title)+" | Boats-Ride",null===(o=null===(a=this.watersport)||void 0===a?void 0:a.seo)||void 0===o?void 0:o.description,s),window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"details",ecommerce:{currencyCode:"AED",detail:{products:[{name:this.watersport.name?this.watersport.name:"",id:this.watersport.id?this.watersport.id:"",price:this.watersport.selling_per_hour?this.watersport.selling_per_hour:""}]}}})}}return e.\u0275fac=function(t){return new(t||e)(a.Pb(b.a),a.Pb(a.h),a.Pb(F.a),a.Pb(s.b),a.Pb(P.a))},e.\u0275cmp=a.Jb({type:e,selectors:[["app-wate-sport-details"]],decls:63,vars:23,consts:[["class","page-banner inner-banner-height",4,"ngIf"],["class","item",4,"ngIf"],[1,"info-pop"],[1,"auto-container"],[1,"inner"],[1,"text"],[1,"close-btn"],[1,"flaticon-letter-x"],[1,"yacht-tours-container","alternate-bg-two"],[1,"content-container"],[1,"row","clearfix"],["class","item col-lg-8 col-md-12 col-sm-12",4,"ngIf"],["class","content-side col-lg-8 col-md-12 col-sm-12",4,"ngIf"],[1,"widgets-side","col-lg-4","col-md-6","col-sm-12"],[1,"widgets-content"],[1,"tour-widget","single-booking-widget"],[1,"widget-inner"],[1,"default-form","main-booking-form"],[1,"estimate-table"],[1,"totals","clearfix"],[1,"ttle"],[1,"dtl"],[1,"info","displaying"],[1,"icon","flaticon-wall-clock","pad_info"],[1,"form-group"],["type","button",1,"theme-btn",3,"click"],[1,"btn-title"],[1,"instruction"],[1,"tour-widget","advisor-widget"],[1,"advisor-block"],[1,"inner-box"],[1,"image-box"],["href","#"],["src","../../../assets/images/resource/team-6.jpg","alt","","title",""],[1,"lower-box","clearfix"],[1,"lower-content"],[1,"info"],[1,"icon","flaticon-assistance"],[1,"page-banner","inner-banner-height"],[1,"image-layer",2,"background-image","url(../../../assets/images/background/banner-1.jpg)"],[1,"banner-inner"],[1,"inner-container","clearfix"],[1,"inner-banner-height-title"],[1,"page-nav"],[1,"bread-crumb","clearfix"],[3,"routerLink"],["routerLink","/water-sports"],[1,"item"],["count","1","appearance","circle",1,"d-flex","justify-content-between",3,"theme"],[1,"item","col-lg-8","col-md-12","col-sm-12"],[1,"content-side","col-lg-8","col-md-12","col-sm-12"],[1,"content-inner"],[1,"tour-details"],[1,"info-title","clearfix"],[1,"left-info"],[1,"tour-widget","recommended-widget","carousel-widget"],[3,"wrap","interval","pauseOnHover","showNavigationArrows","showNavigationIndicators"],[4,"ngFor","ngForOf"],[1,"text-block"],[3,"innerHTML"],["ngbSlide",""],[1,"recommend-block"],["alt","","title","",3,"src"]],template:function(e,t){1&e&&(a.Jc(0,A,19,9,"section",0),a.Jc(1,W,2,2,"div",1),a.Vb(2,"div",2),a.Vb(3,"div",3),a.Vb(4,"div",4),a.Vb(5,"div",5),a.Lc(6,"Our tour bookings are filling fastly, Book Your\u2019s Now"),a.Ub(),a.Vb(7,"div",6),a.Qb(8,"span",7),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(9,"section",8),a.Vb(10,"div",3),a.Vb(11,"div",9),a.Vb(12,"div",10),a.Jc(13,T,2,2,"div",11),a.Jc(14,z,21,9,"div",12),a.Vb(15,"div",13),a.Vb(16,"div",14),a.Vb(17,"div",15),a.Vb(18,"div",16),a.Qb(19,"br"),a.Vb(20,"div",17),a.Vb(21,"h5"),a.Lc(22),a.lc(23,"translate"),a.Ub(),a.Vb(24,"div",18),a.Vb(25,"ul"),a.Vb(26,"li",19),a.Vb(27,"span",20),a.Lc(28),a.lc(29,"translate"),a.Ub(),a.Vb(30,"span",21),a.Lc(31),a.lc(32,"translate"),a.lc(33,"translate"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Qb(34,"br"),a.Vb(35,"div",22),a.Qb(36,"span",23),a.Lc(37),a.lc(38,"translate"),a.Ub(),a.Qb(39,"br"),a.Vb(40,"div",24),a.Vb(41,"button",25),a.hc("click",(function(){return t.openBooking()})),a.Vb(42,"span",26),a.Lc(43),a.lc(44,"translate"),a.Ub(),a.Ub(),a.Ub(),a.Vb(45,"div",27),a.Lc(46,"Do you need suggestion pls contact our expert team."),a.Ub(),a.Ub(),a.Ub(),a.Vb(47,"div",28),a.Vb(48,"div",16),a.Vb(49,"div",29),a.Vb(50,"div",30),a.Vb(51,"div",31),a.Vb(52,"a",32),a.Qb(53,"img",33),a.Ub(),a.Ub(),a.Vb(54,"div",34),a.Vb(55,"div",35),a.Vb(56,"h4"),a.Vb(57,"a",32),a.Lc(58,"Mohammed Sahraoui"),a.Ub(),a.Ub(),a.Vb(59,"div",36),a.Qb(60,"span",37),a.Lc(61,"+971 52 491 8686 [24/Hours] "),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Qb(62,"app-service-section")),2&e&&(a.pc("ngIf",t.watersport),a.Bb(1),a.pc("ngIf",!t.watersport),a.Bb(12),a.pc("ngIf",!t.watersport),a.Bb(1),a.pc("ngIf",t.watersport),a.Bb(8),a.Mc(a.mc(23,11,"price")),a.Bb(6),a.Nc("",a.mc(29,13,"price"),":"),a.Bb(3),a.Pc(" ",a.mc(32,15,"ead")," ",null==t.watersport?null:t.watersport.selling_per_hour," / ",a.mc(33,17,"hour")," "),a.Bb(6),a.Nc("",a.mc(38,19,"reservation"),": 24 / 7 "),a.Bb(6),a.Mc(a.mc(44,21,"booknow")))},directives:[r.k,R.a,b.h,j.a,H.a,r.j,H.e],pipes:[B.c],styles:[""]}),e})();var Y=i("0L5U");const K=function(){return{width:"740px",height:"310px","border-radius":"10px"}};function Z(e,t){1&e&&(a.Vb(0,"div",87),a.Qb(1,"ngx-skeleton-loader",88),a.Ub()),2&e&&(a.Bb(1),a.pc("theme",a.sc(1,K)))}function ee(e,t){if(1&e&&(a.Vb(0,"div",89),a.Vb(1,"div",90),a.Qb(2,"div",91),a.Vb(3,"div",37),a.Vb(4,"a",92),a.Qb(5,"img",93),a.Ub(),a.Ub(),a.Vb(6,"div",94),a.Vb(7,"div",40),a.Vb(8,"h4"),a.Vb(9,"a",92),a.Lc(10),a.Ub(),a.Ub(),a.Qb(11,"br"),a.Vb(12,"div",41),a.Vb(13,"ul",42),a.Qb(14,"div",95),a.Ub(),a.Ub(),a.Ub(),a.Vb(15,"div",96),a.Vb(16,"div",97),a.Vb(17,"a",98),a.Vb(18,"span",86),a.Lc(19),a.lc(20,"translate"),a.Ub(),a.Ub(),a.Vb(21,"a",98),a.Vb(22,"span",86),a.Lc(23),a.lc(24,"translate"),a.Ub(),a.Ub(),a.Ub(),a.Vb(25,"div",97),a.Vb(26,"div",99),a.Vb(27,"div",100),a.Qb(28,"span",101),a.Ub(),a.Vb(29,"div",102),a.Vb(30,"div",103),a.Vb(31,"div",104),a.Lc(32,"Includes"),a.Ub(),a.Vb(33,"ul",105),a.Vb(34,"li"),a.Lc(35,"Hotel pick-up/drop-off"),a.Ub(),a.Vb(36,"li"),a.Lc(37,"Free Life Vest"),a.Ub(),a.Vb(38,"li"),a.Lc(39,"Soft Drinks"),a.Ub(),a.Vb(40,"li"),a.Lc(41,"Seafood Barbecue"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&e){const e=t.$implicit;a.Bb(2),a.Hc("background-image:url(",e.images[0].image,");"),a.Bb(3),a.qc("src",e.images[0].image,a.Dc),a.Bb(5),a.Mc(e.name),a.Bb(4),a.pc("innerHTML",e.water_sport_description,a.Bc),a.Bb(3),a.rc("routerLink","/water-sports/",e.slug,""),a.Bb(2),a.Mc(a.mc(20,10,"moredetails")),a.Bb(2),a.rc("routerLink","/water-sports/",e.slug,""),a.Bb(2),a.Mc(a.mc(24,12,"booknow"))}}let te=(()=>{class e{constructor(e,t){this.waterService=e,this.cdr=t,this.waterSports=[]}ngOnInit(){this.getWaterSports()}getWaterSports(){this.waterService.getWaterSports().subscribe(e=>{this.waterSports=e,this.cdr.markForCheck()})}}return e.\u0275fac=function(t){return new(t||e)(a.Pb(P.a),a.Pb(a.h))},e.\u0275cmp=a.Jb({type:e,selectors:[["app-index"]],decls:242,vars:53,consts:[[1,"page-banner","inner-banner-height"],[1,"image-layer",2,"background-image","url(./assets/images/resource/511.jpg)"],[1,"banner-inner"],[1,"auto-container"],[1,"inner-container","clearfix"],[1,"inner-banner-height-title"],[1,"page-nav"],[1,"bread-crumb","clearfix"],[1,"breadcrumb-item"],["routerLink","/"],["routerLink","/yachts"],[1,"yacht-tours-container"],[1,"main-title"],[1,"default-form","yacht-search-form"],["method","post","action","http://st.ourhtmldemo.com/new/sailing-demo/yacht-tour-single.html"],[1,"row","clearfix"],[1,"content-container"],[1,"content-side","col-lg-8","col-md-12","col-sm-12"],[1,"content-inner"],[1,"lower-filter-row","clearfix"],[1,"results-count"],[1,"results-row"],["class","item",4,"ngIf"],["class","activity-block-two",4,"ngFor","ngForOf"],[1,"widgets-side","col-lg-4","col-md-12","col-sm-12"],[1,"widgets-content"],[1,"tour-widget","recommended-widget","carousel-widget"],[1,"widget-inner"],[1,"tour-widget-title"],[3,"margin","height","cellWidth","cellsToShow","arrows","autoplay","dots","arrowsOutside","transitionDuration"],[1,"carousel-cell"],[1,"recommend-block"],[1,"inner"],[1,"pricing"],[1,"price"],[1,"price-title"],[1,"unit"],[1,"image-box"],["href","yacht-tour-single.html"],["src","assets/images/resource/31 - Copy.jpeg","alt","","title",""],[1,"content"],[1,"info"],[1,"clearfix"],[1,"tour-widget","destination-widget","carousel-widget"],[1,"destination-block-three"],[1,"inner-box"],[1,"image"],["src","assets/images/resource/23.jpg","alt","","title",""],[1,"caption-box"],[1,"title"],[1,"icon","flaticon-wall-clock"],[1,"hover-box"],[1,"ratings"],[1,"rate"],[1,"fa","fa-star"],[1,"rate-text"],["href","#"],[1,"tour-widget","offers-widget"],[1,"post"],[1,"post-inner"],[1,"post-thumb"],["src","assets/images/resource/54.png","alt","","title",""],[1,"off-price"],[1,"new"],[1,"original"],["src","assets/images/resource/55.jpg","alt","","title",""],["src","assets/images/resource/56.jpg","alt","","title",""],["src","assets/images/resource/57.jpg","alt","","title",""],[1,"tour-widget","advisor-widget","carousel-widget"],[1,"advisor-carousel","single-item-carousel","owl-theme","owl-carousel"],[1,"advisor-block"],["src","assets/images/resource/team-6.jpg","alt","","title",""],[1,"lower-box","clearfix"],[1,"lower-content"],[1,"tel:+971524918686"],[1,"subscribe-section","style-three"],[1,"image-layer",2,"background-image","url(./assets/images/background/image-12.jpg)"],[1,"subtitle"],[1,"default-form","subscribe-form-two"],["method","post","action","http://st.ourhtmldemo.com/new/sailing-demo/contact.html"],[1,"form-group","col-lg-4","col-md-6","col-sm-12"],[1,"field-inner"],["type","text","name","field-name","required","","value","",3,"placeholder"],["type","email","name","field-name","required","","value","",3,"placeholder"],[1,"form-group","col-lg-4","col-md-12","col-sm-12"],["type","submit",1,"theme-btn","btn-style-three"],[1,"btn-title"],[1,"item"],["count","1","appearance","circle",3,"theme"],[1,"activity-block-two"],[1,"inner-box","clearfix"],[1,"image-layer"],["href","water-slide.html"],["alt","","title","",3,"src"],[1,"content-box"],[1,"text",3,"innerHTML"],[1,"links-box","clearfix"],[1,"link"],[1,"theme-btn","btn-style-two",3,"routerLink"],[1,"info-btn-box"],[1,"theme-btn","info-btn"],[1,"icon","flaticon-information-1"],[1,"info-panel"],[1,"panel-inner"],[1,"panel-title"],[1,"panel-list"]],template:function(e,t){1&e&&(a.Vb(0,"section",0),a.Qb(1,"div",1),a.Vb(2,"div",2),a.Vb(3,"div",3),a.Vb(4,"div",4),a.Vb(5,"h1",5),a.Lc(6),a.lc(7,"translate"),a.Ub(),a.Vb(8,"div",6),a.Vb(9,"ul",7),a.Vb(10,"li",8),a.Vb(11,"a",9),a.Lc(12),a.lc(13,"translate"),a.Ub(),a.Ub(),a.Vb(14,"li",8),a.Vb(15,"a",10),a.Lc(16),a.lc(17,"translate"),a.Ub(),a.Ub(),a.Vb(18,"li",8),a.Lc(19),a.lc(20,"translate"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(21,"section",11),a.Vb(22,"div",3),a.Vb(23,"div",12),a.Vb(24,"h3"),a.Lc(25),a.lc(26,"translate"),a.Ub(),a.Ub(),a.Vb(27,"div",13),a.Vb(28,"form",14),a.Qb(29,"div",15),a.Ub(),a.Ub(),a.Vb(30,"div",16),a.Vb(31,"div",15),a.Vb(32,"div",17),a.Vb(33,"div",18),a.Vb(34,"div",19),a.Qb(35,"div",20),a.Ub(),a.Vb(36,"div",21),a.Jc(37,Z,2,2,"div",22),a.Jc(38,ee,42,14,"div",23),a.Ub(),a.Ub(),a.Ub(),a.Vb(39,"div",24),a.Vb(40,"div",25),a.Vb(41,"div",26),a.Vb(42,"div",27),a.Vb(43,"div",28),a.Vb(44,"h4"),a.Lc(45),a.lc(46,"translate"),a.Ub(),a.Ub(),a.Vb(47,"carousel",29),a.Vb(48,"div",30),a.Vb(49,"div",31),a.Vb(50,"div",32),a.Vb(51,"div",33),a.Vb(52,"div",34),a.Vb(53,"div",35),a.Lc(54,"From"),a.Ub(),a.Vb(55,"div",36),a.Vb(56,"span"),a.Lc(57," AED 199"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(58,"div",37),a.Vb(59,"a",38),a.Qb(60,"img",39),a.Ub(),a.Ub(),a.Vb(61,"div",40),a.Vb(62,"h4"),a.Vb(63,"a",38),a.Lc(64,"Dinner Cruise "),a.Ub(),a.Ub(),a.Vb(65,"div",41),a.Qb(66,"ul",42),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(67,"div",30),a.Vb(68,"div",31),a.Vb(69,"div",32),a.Vb(70,"div",33),a.Vb(71,"div",34),a.Vb(72,"div",35),a.Lc(73,"From"),a.Ub(),a.Vb(74,"div",36),a.Vb(75,"span"),a.Lc(76," AED 199"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(77,"div",37),a.Vb(78,"a",38),a.Qb(79,"img",39),a.Ub(),a.Ub(),a.Vb(80,"div",40),a.Vb(81,"h4"),a.Vb(82,"a",38),a.Lc(83,"Dinner Cruise "),a.Ub(),a.Ub(),a.Vb(84,"div",41),a.Qb(85,"ul",42),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(86,"div",43),a.Vb(87,"div",27),a.Vb(88,"div",28),a.Vb(89,"h4"),a.Lc(90,"Top Distinations"),a.Ub(),a.Ub(),a.Vb(91,"carousel",29),a.Vb(92,"div",30),a.Vb(93,"div",44),a.Vb(94,"div",45),a.Vb(95,"div",37),a.Vb(96,"figure",46),a.Vb(97,"a",38),a.Qb(98,"img",47),a.Ub(),a.Ub(),a.Ub(),a.Vb(99,"div",48),a.Vb(100,"div",32),a.Vb(101,"div",34),a.Lc(102,"AED 590"),a.Ub(),a.Vb(103,"div",49),a.Vb(104,"a",38),a.Lc(105,"PALM JUMEIRAH"),a.Ub(),a.Ub(),a.Vb(106,"div",41),a.Qb(107,"span",50),a.Lc(108,"Reservations: 24 / 7"),a.Ub(),a.Ub(),a.Ub(),a.Vb(109,"div",51),a.Vb(110,"div",52),a.Vb(111,"div",53),a.Qb(112,"span",54),a.Qb(113,"span",54),a.Qb(114,"span",54),a.Qb(115,"span",54),a.Qb(116,"span",54),a.Ub(),a.Vb(117,"div",55),a.Vb(118,"strong"),a.Lc(119,"4.8"),a.Ub(),a.Vb(120,"a",56),a.Lc(121,"[106 Reviews]"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(122,"div",57),a.Vb(123,"div",27),a.Vb(124,"div",28),a.Vb(125,"h4"),a.Lc(126,"Best Offers"),a.Ub(),a.Ub(),a.Vb(127,"div",58),a.Vb(128,"div",59),a.Vb(129,"div",60),a.Vb(130,"a",56),a.Qb(131,"img",61),a.Ub(),a.Vb(132,"div",62),a.Lc(133,"-40%"),a.Ub(),a.Ub(),a.Vb(134,"h5"),a.Vb(135,"a",56),a.Lc(136,"JetPack"),a.Ub(),a.Ub(),a.Vb(137,"div",41),a.Qb(138,"span",50),a.Lc(139,"Reservations: 24 / 7"),a.Ub(),a.Vb(140,"div",34),a.Vb(141,"span",63),a.Lc(142,"AED 499"),a.Ub(),a.Vb(143,"span",64),a.Lc(144,"AED 650"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(145,"div",58),a.Vb(146,"div",59),a.Vb(147,"div",60),a.Vb(148,"a",56),a.Qb(149,"img",65),a.Ub(),a.Vb(150,"div",62),a.Lc(151,"-40%"),a.Ub(),a.Ub(),a.Vb(152,"h5"),a.Vb(153,"a",56),a.Lc(154,"Jet Ski"),a.Ub(),a.Ub(),a.Vb(155,"div",41),a.Qb(156,"span",50),a.Lc(157," Duration: 4D + 5N"),a.Ub(),a.Vb(158,"div",34),a.Vb(159,"span",63),a.Lc(160,"AED 499"),a.Ub(),a.Vb(161,"span",64),a.Lc(162,"AED 650"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(163,"div",58),a.Vb(164,"div",59),a.Vb(165,"div",60),a.Vb(166,"a",56),a.Qb(167,"img",66),a.Ub(),a.Vb(168,"div",62),a.Lc(169,"-40%"),a.Ub(),a.Ub(),a.Vb(170,"h5"),a.Vb(171,"a",56),a.Lc(172,"Water Shark "),a.Ub(),a.Ub(),a.Vb(173,"div",41),a.Qb(174,"span",50),a.Lc(175,"Reservations: 24 / 7"),a.Ub(),a.Vb(176,"div",34),a.Vb(177,"span",63),a.Lc(178,"AED 499"),a.Ub(),a.Vb(179,"span",64),a.Lc(180,"AED 650"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(181,"div",58),a.Vb(182,"div",59),a.Vb(183,"div",60),a.Vb(184,"a",56),a.Qb(185,"img",67),a.Ub(),a.Vb(186,"div",62),a.Lc(187,"-40%"),a.Ub(),a.Ub(),a.Vb(188,"h5"),a.Vb(189,"a",56),a.Lc(190,"Sea Bob "),a.Ub(),a.Ub(),a.Vb(191,"div",41),a.Qb(192,"span",50),a.Lc(193,"Reservations: 24 / 7"),a.Ub(),a.Vb(194,"div",34),a.Vb(195,"span",63),a.Lc(196,"AED 499"),a.Ub(),a.Vb(197,"span",64),a.Lc(198,"AED 650"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(199,"div",68),a.Vb(200,"div",27),a.Vb(201,"div",69),a.Vb(202,"div",70),a.Vb(203,"div",45),a.Vb(204,"div",37),a.Vb(205,"a",56),a.Qb(206,"img",71),a.Ub(),a.Ub(),a.Vb(207,"div",72),a.Vb(208,"div",73),a.Vb(209,"h4"),a.Vb(210,"a",56),a.Lc(211,"Hohammed Sahraoui"),a.Ub(),a.Ub(),a.Vb(212,"div",41),a.Qb(213,"span",74),a.Lc(214,"+971 52 491 8686 [24/Hours]"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(215,"section",75),a.Vb(216,"div",3),a.Vb(217,"div",32),a.Qb(218,"div",76),a.Vb(219,"div",49),a.Vb(220,"h4"),a.Lc(221),a.lc(222,"translate"),a.Ub(),a.Vb(223,"div",77),a.Lc(224),a.lc(225,"translate"),a.Ub(),a.Ub(),a.Vb(226,"div",78),a.Vb(227,"form",79),a.Vb(228,"div",15),a.Vb(229,"div",80),a.Vb(230,"div",81),a.Qb(231,"input",82),a.lc(232,"translate"),a.Ub(),a.Ub(),a.Vb(233,"div",80),a.Vb(234,"div",81),a.Qb(235,"input",83),a.lc(236,"translate"),a.Ub(),a.Ub(),a.Vb(237,"div",84),a.Vb(238,"button",85),a.Vb(239,"span",86),a.Lc(240),a.lc(241,"translate"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&e&&(a.Bb(6),a.Nc("",a.mc(7,31,"waterSport")," "),a.Bb(6),a.Mc(a.mc(13,33,"home")),a.Bb(4),a.Nc(" ",a.mc(17,35,"yachts")," "),a.Bb(3),a.Nc(" ",a.mc(20,37,"waterSport")," "),a.Bb(6),a.Mc(a.mc(26,39,"waterSport")),a.Bb(12),a.pc("ngIf",!t.waterSports.length),a.Bb(1),a.pc("ngForOf",t.waterSports),a.Bb(7),a.Mc(a.mc(46,41,"rec")),a.Bb(2),a.pc("margin",20)("height",300)("cellWidth",300)("cellsToShow",1)("arrows",!1)("autoplay",!0)("dots",!0)("arrowsOutside",!0)("transitionDuration",100),a.Bb(44),a.pc("margin",20)("height",350)("cellWidth",300)("cellsToShow",1)("arrows",!1)("autoplay",!0)("dots",!0)("arrowsOutside",!0)("transitionDuration",100),a.Bb(130),a.Mc(a.mc(222,43,"newsub")),a.Bb(3),a.Mc(a.mc(225,45,"newssubtopic")),a.Bb(7),a.qc("placeholder",a.mc(232,47,"yourname")),a.Bb(4),a.qc("placeholder",a.mc(236,49,"email")),a.Bb(5),a.Mc(a.mc(241,51,"subnow")))},directives:[b.h,r.k,r.j,Y.a,j.a],pipes:[B.c],styles:[""]}),e})();var ie=i("jhN1");function re(e,t){if(1&e&&(a.Vb(0,"div",1),a.Qb(1,"iframe",2),a.Ub()),2&e){const e=a.kc();a.Bb(1),a.pc("src",e.voucher_link,a.Cc)}}const be=[{path:"",component:o,children:[{path:"",component:te},{path:":slug",component:$},{path:"voucher/:booking_number",component:(()=>{class e{constructor(e,t,i,r){this.voucherService=e,this.route=t,this.cdr=i,this.sanitizer=r}ngOnInit(){this.booking_number=this.route.snapshot.params.booking_number,this.getVoucher()}getVoucher(){this.voucherService.getVoucher(this.booking_number).subscribe(e=>{this.voucher=e,this.cdr.markForCheck(),this.voucher&&this.transform()})}transform(){this.voucher_link=this.sanitizer.bypassSecurityTrustResourceUrl(this.voucher.url),this.cdr.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(a.Pb(P.a),a.Pb(b.a),a.Pb(a.h),a.Pb(ie.b))},e.\u0275cmp=a.Jb({type:e,selectors:[["app-voucher"]],decls:1,vars:1,consts:[["class","d-flex justify-content-center",4,"ngIf"],[1,"d-flex","justify-content-center"],[2,"width","100%","height","2200px",3,"src"]],template:function(e,t){1&e&&a.Jc(0,re,2,1,"div",0),2&e&&a.pc("ngIf",t.voucher_link)},directives:[r.k],styles:[""]}),e})()},{path:"**",redirectTo:"",pathMatch:""}]}];let ae=(()=>{class e{}return e.\u0275mod=a.Nb({type:e}),e.\u0275inj=a.Mb({factory:function(t){return new(t||e)},imports:[[b.i.forChild(be)],b.i]}),e})();var oe=i("KZX/");let se=(()=>{class e{}return e.\u0275mod=a.Nb({type:e}),e.\u0275inj=a.Mb({factory:function(t){return new(t||e)},imports:[[r.b,ae,Y.b,oe.a,H.c,j.b,B.b]]}),e})()}}]);