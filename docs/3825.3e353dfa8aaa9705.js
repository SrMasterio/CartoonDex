"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3825],{3825:(p,u,s)=>{s.r(u),s.d(u,{RegisterPageModule:()=>R});var m=s(177),o=s(4341),i=s(4742),l=s(305),e=s(4438),c=s(9885);const d=[{path:"",component:(()=>{var t;class n{constructor(r,g){this.userService=r,this.router=g,this.formReg=new o.gE({email:new o.MJ,password:new o.MJ})}ngOnInit(){}onSubmit(){this.userService.register(this.formReg.value).then(r=>{console.log(r),this.router.navigate(["/login"])}).catch(r=>alert(r))}}return(t=n).\u0275fac=function(r){return new(r||t)(e.rXU(c.D),e.rXU(l.Ix))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-register"]],decls:24,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"ngSubmit","formGroup"],[1,"mb-3"],[1,"form-label"],["type","text","formControlName","email",1,"form-control"],["type","password","formControlName","password",1,"form-control"],["type","submit","size","small","color","secondary"],["size","small","color","secondary","routerLink","/login"]],template:function(r,g){1&r&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"register"),e.k0s()()(),e.j41(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),e.EFF(8,"register"),e.k0s()()(),e.j41(9,"h2"),e.EFF(10,"Registro de usuario"),e.k0s(),e.j41(11,"form",4),e.bIt("ngSubmit",function(){return g.onSubmit()}),e.j41(12,"div",5)(13,"label",6),e.EFF(14,"Email"),e.k0s(),e.nrm(15,"input",7),e.k0s(),e.j41(16,"div",5)(17,"label",6),e.EFF(18,"Password"),e.k0s(),e.nrm(19,"input",8),e.k0s(),e.j41(20,"ion-button",9),e.EFF(21," Enviar "),e.k0s()(),e.j41(22,"ion-button",10),e.EFF(23," Regresar\n"),e.k0s()()),2&r&&(e.Y8G("translucent",!0),e.R7$(4),e.Y8G("fullscreen",!0),e.R7$(7),e.Y8G("formGroup",g.formReg))},dependencies:[o.qT,o.me,o.BC,o.cb,o.j4,o.JD,i.Jm,i.W9,i.eU,i.BC,i.ai,i.N7,l.Wk]}),n})()}];let f=(()=>{var t;class n{}return(t=n).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[l.iI.forChild(d),l.iI]}),n})(),R=(()=>{var t;class n{}return(t=n).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[m.MD,o.YN,o.X1,i.bv,f]}),n})()}}]);