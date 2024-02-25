import{b as he}from"./chunk-GDSFRKWK.js";import{a as je,b as qe,c as Be,d as Ge,e as Ve,f as Ue}from"./chunk-3T4GMH7R.js";import{a as Te,b as Fe,c as De,d as Ae,e as He,f as Pe,g as W,i as ze}from"./chunk-KGOQSYVN.js";import{a as _e,b as R,c as pe,d as fe,e as be,f as ge,g as ve,h as H,i as ye,j as ke,k as Ie}from"./chunk-K2WYRL6K.js";import"./chunk-B2L3BTGP.js";import{C as xe,I as k,J as Ce,K as Me,O as Re,P as Se,X as we,Y as Ne,_ as Le,e as P,fa as Oe,i as Y,j as N,k as K,l as Ee,qa as Qe}from"./chunk-YJU3EFIF.js";import{$a as D,Aa as ne,Cb as h,Fb as le,Gb as me,Lb as V,Mb as U,Nb as Q,Pb as c,Ra as p,Sb as Z,Tb as A,Wa as u,Xa as s,Y as re,Z as g,Za as de,_a as se,aa as E,ba as z,ca as j,cb as q,cc as M,dc as $,ea as m,fa as T,ga as v,ha as F,hb as B,i as w,ia as oe,ib as x,jb as f,l as ie,lb as C,oa as ae,ob as G,sb as a,sc as ue,tb as n,ub as y,zb as ce}from"./chunk-D2KFHOXZ.js";var Ze=Ee({passive:!0}),$e=(()=>{let r=class r{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return ie;let t=Y(e),i=this._monitoredElements.get(t);if(i)return i.subject;let d=new w,l="cdk-text-field-autofilled",b=_=>{_.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(l)?(t.classList.add(l),this._ngZone.run(()=>d.next({target:_.target,isAutofilled:!0}))):_.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(l)&&(t.classList.remove(l),this._ngZone.run(()=>d.next({target:_.target,isAutofilled:!1})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",b,Ze),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:d,unlisten:()=>{t.removeEventListener("animationstart",b,Ze)}}),d}stopMonitoring(e){let t=Y(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}};r.\u0275fac=function(t){return new(t||r)(z(N),z(D))},r.\u0275prov=re({token:r,factory:r.\u0275fac,providedIn:"root"});let o=r;return o})();var Ye=(()=>{let r=class r{};r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=v({type:r}),r.\u0275inj=g({});let o=r;return o})();var ot=new E("MAT_INPUT_VALUE_ACCESSOR"),at=["button","checkbox","file","hidden","image","radio","range","reset","submit"],nt=0,Ke=(()=>{let r=class r{get disabled(){return this._disabled}set disabled(e){this._disabled=P(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(R.required)??!1}set required(e){this._required=P(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&K().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=P(e)}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(e,t,i,d,l,b,_,S,et,ee){this._elementRef=e,this._platform=t,this.ngControl=i,this._autofillMonitor=S,this._formField=ee,this._uid=`mat-input-${nt++}`,this.focused=!1,this.stateChanges=new w,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(O=>K().has(O)),this._iOSKeyupListener=O=>{let I=O.target;!I.value&&I.selectionStart===0&&I.selectionEnd===0&&(I.setSelectionRange(1,1),I.setSelectionRange(0,0))};let L=this._elementRef.nativeElement,te=L.nodeName.toLowerCase();this._inputValueAccessor=_||L,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&et.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Ce(b,i,l,d,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=te==="select",this._isTextarea=te==="textarea",this._isInFormField=!!ee,this._isNativeSelect&&(this.controlType=L.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){at.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}};r.\u0275fac=function(t){return new(t||r)(s(p),s(N),s(pe,10),s(ge,8),s(H,8),s(Me),s(ot,10),s($e),s(D),s(He,8))},r.\u0275dir=F({type:r,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(t,i){t&1&&h("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),t&2&&(ce("id",i.id)("disabled",i.disabled)("required",i.required),x("name",i.name||null)("readonly",i.readonly&&!i._isNativeSelect||null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),C("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[m.None,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],standalone:!0,features:[Z([{provide:Ae,useExisting:r}]),oe]});let o=r;return o})(),We=(()=>{let r=class r{};r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=v({type:r}),r.\u0275inj=g({imports:[k,W,W,Ye,k]});let o=r;return o})();var st=["input"],ct=["formField"],lt=["*"],mt=0,J=class{constructor(r,Je){this.source=r,this.value=Je}};var ut=new E("MatRadioGroup"),ht=new E("mat-radio-default-options",{providedIn:"root",factory:_t});function _t(){return{color:"accent"}}var pt=(()=>{let r=class r{get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(e){this._color=e}get inputId(){return`${this.id||this._uniqueId}-input`}constructor(e,t,i,d,l,b,_,S){this._elementRef=t,this._changeDetector=i,this._focusMonitor=d,this._radioDispatcher=l,this._providerOverride=_,this._uniqueId=`mat-radio-${++mt}`,this.id=this._uniqueId,this.disableRipple=!1,this.tabIndex=0,this.change=new se,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this.radioGroup=e,this._noopAnimations=b==="NoopAnimations",S&&(this.tabIndex=$(S,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new J(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(e){e.stopPropagation()}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),this.disabled||this._inputElement.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute("tabindex",t+""),this._previousTabIndex=t)}}};r.\u0275fac=function(t){return new(t||r)(s(ut,8),s(p),s(de),s(xe),s(Oe),s(ne,8),s(ht,8),ae("tabindex"))},r.\u0275cmp=T({type:r,selectors:[["mat-radio-button"]],viewQuery:function(t,i){if(t&1&&(V(st,5),V(ct,7,p)),t&2){let d;U(d=Q())&&(i._inputElement=d.first),U(d=Q())&&(i._rippleTrigger=d.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:15,hostBindings:function(t,i){t&1&&h("focus",function(){return i._inputElement.nativeElement.focus()}),t&2&&(x("id",i.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),C("mat-primary",i.color==="primary")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("mat-mdc-radio-checked",i.checked)("_mat-animation-noopable",i._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[m.None,"aria-label","ariaLabel"],ariaLabelledby:[m.None,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[m.None,"aria-describedby","ariaDescribedby"],disableRipple:[m.HasDecoratorInputTransform,"disableRipple","disableRipple",M],tabIndex:[m.HasDecoratorInputTransform,"tabIndex","tabIndex",e=>e==null?0:$(e)],checked:[m.HasDecoratorInputTransform,"checked","checked",M],value:"value",labelPosition:"labelPosition",disabled:[m.HasDecoratorInputTransform,"disabled","disabled",M],required:[m.HasDecoratorInputTransform,"required","required",M],color:"color"},outputs:{change:"change"},exportAs:["matRadioButton"],standalone:!0,features:[q,A],ngContentSelectors:lt,decls:13,vars:16,consts:[["mat-internal-form-field","",3,"labelPosition"],["formField",""],[1,"mdc-radio"],[1,"mat-mdc-radio-touch-target",3,"click"],["type","radio",1,"mdc-radio__native-control",3,"id","checked","disabled","required","change"],["input",""],[1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","",1,"mat-radio-ripple","mat-mdc-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,i){t&1&&(le(),a(0,"div",0,1)(2,"div",2)(3,"div",3),h("click",function(l){return i._onTouchTargetClick(l)}),n(),a(4,"input",4,5),h("change",function(l){return i._onInputInteraction(l)}),n(),a(6,"div",6),y(7,"div",7)(8,"div",8),n(),a(9,"div",9),y(10,"div",10),n()(),a(11,"label",11),me(12),n()()),t&2&&(f("labelPosition",i.labelPosition),u(2),C("mdc-radio--disabled",i.disabled),u(2),f("id",i.inputId)("checked",i.checked)("disabled",i.disabled)("required",i.required),x("name",i.name)("value",i.value)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby),u(5),f("matRippleTrigger",i._rippleTrigger.nativeElement)("matRippleDisabled",i._isRippleDisabled())("matRippleCentered",!0),u(2),f("for",i.inputId))},dependencies:[Re,we],styles:['.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio[hidden]{display:none}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{border-color:CanvasText}}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{padding:calc((var(--mdc-radio-state-layer-size) - 20px) / 2)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-selected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color)}.mat-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-focus-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__background::before{top:calc(-1 * (var(--mdc-radio-state-layer-size) - 20px) / 2);left:calc(-1 * (var(--mdc-radio-state-layer-size) - 20px) / 2);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control{top:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);right:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);left:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, black)}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display)}[dir=rtl] .mat-mdc-radio-touch-target{left:0;right:50%;transform:translate(50%, -50%)}'],encapsulation:2,changeDetection:0});let o=r;return o})(),Xe=(()=>{let r=class r{};r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=v({type:r}),r.\u0275inj=g({imports:[k,ue,Se,pt,k]});let o=r;return o})();function ft(o,r){o&1&&(a(0,"mat-error"),c(1,"Username is "),a(2,"strong"),c(3,"required"),n()())}function bt(o,r){o&1&&(a(0,"mat-error"),c(1,"Password is "),a(2,"strong"),c(3,"required"),n()())}var bi=(()=>{let r=class r{constructor(){this.fb=j(ke),this.router=j(he),this.form=this.fb.group({username:[null,R.required],password:[null,R.required]})}onSubmit(){this.form.valid&&this.router.navigate(["/pages/dashboard"])}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=T({type:r,selectors:[["material-dashboard-demo-login-component"]],standalone:!0,features:[A],decls:41,vars:3,consts:[[1,"h-full","flex","items-center"],[1,"flex","flex-1","justify-center","items-stretch"],["novalidate","",1,"flex","justify-center",3,"formGroup","ngSubmit"],[1,"flex","flex-col","pt-4"],["matInput","","formControlName","username"],["matPrefix",""],["type","password","matInput","","formControlName","password"],["mat-raised-button","","color","primary","type","submit"],[1,"text-white","ml-2",2,"background-color","#3f51b5"],[1,"flex","flex-col","items-center","justify-center"],[1,"my-4"],["mat-raised-button",""]],template:function(t,i){t&1&&(a(0,"div",0)(1,"div",1)(2,"form",2),h("ngSubmit",function(){return i.onSubmit()}),a(3,"mat-card")(4,"mat-card-header")(5,"mat-card-title")(6,"h1"),c(7,"Login"),n()()(),a(8,"mat-card-content")(9,"div",3)(10,"mat-form-field")(11,"mat-label"),c(12,"Username"),n(),y(13,"input",4),a(14,"mat-icon",5),c(15,"person"),n(),B(16,ft,4,0,"mat-error"),n(),a(17,"mat-form-field")(18,"mat-label"),c(19,"Password"),n(),y(20,"input",6),a(21,"mat-icon",5),c(22,"password"),n(),B(23,bt,4,0,"mat-error"),n()()(),a(24,"mat-card-actions")(25,"button",7),c(26," Submit "),n()()()(),a(27,"mat-card",8)(28,"mat-card-header")(29,"mat-card-title")(30,"h2"),c(31,"Sign up"),n()()(),a(32,"mat-card-content")(33,"div",9)(34,"mat-icon",10),c(35,"assignment_ind"),n(),a(36,"p"),c(37," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),n()()(),a(38,"mat-card-actions")(39,"button",11),c(40,"Register"),n()()()()()),t&2&&(u(2),f("formGroup",i.form),u(14),G(16,i.form.controls.username.hasError("required")?16:-1),u(7),G(23,i.form.controls.password.hasError("required")?23:-1))},dependencies:[We,Ke,Pe,Te,Fe,De,Le,Ne,ze,Xe,Ue,je,Ge,Be,Ve,qe,Ie,ve,_e,fe,be,H,ye,Qe],styles:[".mat-mdc-card[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]});let o=r;return o})();export{bi as LoginComponentComponent};
