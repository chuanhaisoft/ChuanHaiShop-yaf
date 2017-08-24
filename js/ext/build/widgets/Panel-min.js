﻿/*
 * Ext JS Library 2.1
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

Ext.Panel=Ext.extend(Ext.Container,{baseCls:"x-panel",collapsedCls:"x-panel-collapsed",maskDisabled:true,animCollapse:Ext.enableFx,headerAsText:true,buttonAlign:"right",collapsed:false,collapseFirst:true,minButtonWidth:75,elements:"body",toolTarget:"header",collapseEl:"bwrap",slideAnchor:"t",deferHeight:true,expandDefaults:{duration:0.25},collapseDefaults:{duration:0.25},initComponent:function(){Ext.Panel.superclass.initComponent.call(this);this.addEvents("bodyresize","titlechange","collapse","expand","beforecollapse","beforeexpand","beforeclose","close","activate","deactivate");if(this.tbar){this.elements+=",tbar";if(typeof this.tbar=="object"){this.topToolbar=this.tbar}delete this.tbar}if(this.bbar){this.elements+=",bbar";if(typeof this.bbar=="object"){this.bottomToolbar=this.bbar}delete this.bbar}if(this.header===true){this.elements+=",header";delete this.header}else{if(this.title&&this.header!==false){this.elements+=",header"}}if(this.footer===true){this.elements+=",footer";delete this.footer}if(this.buttons){var C=this.buttons;this.buttons=[];for(var B=0,A=C.length;B<A;B++){if(C[B].render){this.buttons.push(C[B])}else{this.addButton(C[B])}}}if(this.autoLoad){this.on("render",this.doAutoLoad,this,{delay:10})}},createElement:function(A,C){if(this[A]){C.appendChild(this[A].dom);return }if(A==="bwrap"||this.elements.indexOf(A)!=-1){if(this[A+"Cfg"]){this[A]=Ext.fly(C).createChild(this[A+"Cfg"])}else{var B=document.createElement("div");B.className=this[A+"Cls"];this[A]=Ext.get(C.appendChild(B))}}},onRender:function(H,G){Ext.Panel.superclass.onRender.call(this,H,G);this.createClasses();if(this.el){this.el.addClass(this.baseCls);this.header=this.el.down("."+this.headerCls);this.bwrap=this.el.down("."+this.bwrapCls);var M=this.bwrap?this.bwrap:this.el;this.tbar=M.down("."+this.tbarCls);this.body=M.down("."+this.bodyCls);this.bbar=M.down("."+this.bbarCls);this.footer=M.down("."+this.footerCls);this.fromMarkup=true}else{this.el=H.createChild({id:this.id,cls:this.baseCls},G)}var A=this.el,K=A.dom;if(this.cls){this.el.addClass(this.cls)}if(this.buttons){this.elements+=",footer"}if(this.frame){A.insertHtml("afterBegin",String.format(Ext.Element.boxMarkup,this.baseCls));this.createElement("header",K.firstChild.firstChild.firstChild);this.createElement("bwrap",K);var O=this.bwrap.dom;var E=K.childNodes[1],B=K.childNodes[2];O.appendChild(E);O.appendChild(B);var P=O.firstChild.firstChild.firstChild;this.createElement("tbar",P);this.createElement("body",P);this.createElement("bbar",P);this.createElement("footer",O.lastChild.firstChild.firstChild);if(!this.footer){this.bwrap.dom.lastChild.className+=" x-panel-nofooter"}}else{this.createElement("header",K);this.createElement("bwrap",K);var O=this.bwrap.dom;this.createElement("tbar",O);this.createElement("body",O);this.createElement("bbar",O);this.createElement("footer",O);if(!this.header){this.body.addClass(this.bodyCls+"-noheader");if(this.tbar){this.tbar.addClass(this.tbarCls+"-noheader")}}}if(this.border===false){this.el.addClass(this.baseCls+"-noborder");this.body.addClass(this.bodyCls+"-noborder");if(this.header){this.header.addClass(this.headerCls+"-noborder")}if(this.footer){this.footer.addClass(this.footerCls+"-noborder")}if(this.tbar){this.tbar.addClass(this.tbarCls+"-noborder")}if(this.bbar){this.bbar.addClass(this.bbarCls+"-noborder")}}if(this.bodyBorder===false){this.body.addClass(this.bodyCls+"-noborder")}if(this.bodyStyle){this.body.applyStyles(this.bodyStyle)}this.bwrap.enableDisplayMode("block");if(this.header){this.header.unselectable();if(this.headerAsText){this.header.dom.innerHTML="<span class=\""+this.headerTextCls+"\">"+this.header.dom.innerHTML+"</span>";if(this.iconCls){this.setIconClass(this.iconCls)}}}if(this.floating){this.makeFloating(this.floating)}if(this.collapsible){this.tools=this.tools?this.tools.slice(0):[];if(!this.hideCollapseTool){this.tools[this.collapseFirst?"unshift":"push"]({id:"toggle",handler:this.toggleCollapse,scope:this})}if(this.titleCollapse&&this.header){this.header.on("click",this.toggleCollapse,this);this.header.setStyle("cursor","pointer")}}if(this.tools){var J=this.tools;this.tools={};this.addTool.apply(this,J)}else{this.tools={}}if(this.buttons&&this.buttons.length>0){var D=this.footer.createChild({cls:"x-panel-btns-ct",cn:{cls:"x-panel-btns x-panel-btns-"+this.buttonAlign,html:"<table cellspacing=\"0\"><tbody><tr></tr></tbody></table><div class=\"x-clear\"></div>"}},null,true);var L=D.getElementsByTagName("tr")[0];for(var F=0,I=this.buttons.length;F<I;F++){var N=this.buttons[F];var C=document.createElement("td");C.className="x-panel-btn-td";N.render(L.appendChild(C))}}if(this.tbar&&this.topToolbar){if(Ext.isArray(this.topToolbar)){this.topToolbar=new Ext.Toolbar(this.topToolbar)}this.topToolbar.render(this.tbar);this.topToolbar.ownerCt=this}if(this.bbar&&this.bottomToolbar){if(Ext.isArray(this.bottomToolbar)){this.bottomToolbar=new Ext.Toolbar(this.bottomToolbar)}this.bottomToolbar.render(this.bbar);this.bottomToolbar.ownerCt=this}},setIconClass:function(B){var A=this.iconCls;this.iconCls=B;if(this.rendered&&this.header){if(this.frame){this.header.addClass("x-panel-icon");this.header.replaceClass(A,this.iconCls)}else{var D=this.header.dom;var C=D.firstChild&&String(D.firstChild.tagName).toLowerCase()=="img"?D.firstChild:null;if(C){Ext.fly(C).replaceClass(A,this.iconCls)}else{Ext.DomHelper.insertBefore(D.firstChild,{tag:"img",src:Ext.BLANK_IMAGE_URL,cls:"x-panel-inline-icon "+this.iconCls})}}}},makeFloating:function(A){this.floating=true;this.el=new Ext.Layer(typeof A=="object"?A:{shadow:this.shadow!==undefined?this.shadow:"sides",shadowOffset:this.shadowOffset,constrain:false,shim:this.shim===false?false:undefined},this.el)},getTopToolbar:function(){return this.topToolbar},getBottomToolbar:function(){return this.bottomToolbar},addButton:function(A,D,C){var E={handler:D,scope:C,minWidth:this.minButtonWidth,hideParent:true};if(typeof A=="string"){E.text=A}else{Ext.apply(E,A)}var B=new Ext.Button(E);B.ownerCt=this;if(!this.buttons){this.buttons=[]}this.buttons.push(B);return B},addTool:function(){if(!this[this.toolTarget]){return }if(!this.toolTemplate){var F=new Ext.Template("<div class=\"x-tool x-tool-{id}\">&#160;</div>");F.disableFormats=true;F.compile();Ext.Panel.prototype.toolTemplate=F}for(var E=0,C=arguments,B=C.length;E<B;E++){var A=C[E],G="x-tool-"+A.id+"-over";var D=this.toolTemplate.insertFirst((A.align!=="left")?this[this.toolTarget]:this[this.toolTarget].child("span"),A,true);this.tools[A.id]=D;D.enableDisplayMode("block");D.on("click",this.createToolHandler(D,A,G,this));if(A.on){D.on(A.on)}if(A.hidden){D.hide()}if(A.qtip){if(typeof A.qtip=="object"){Ext.QuickTips.register(Ext.apply({target:D.id},A.qtip))}else{D.dom.qtip=A.qtip}}D.addClassOnOver(G)}},onShow:function(){if(this.floating){return this.el.show()}Ext.Panel.superclass.onShow.call(this)},onHide:function(){if(this.floating){return this.el.hide()}Ext.Panel.superclass.onHide.call(this)},createToolHandler:function(C,A,D,B){return function(E){C.removeClass(D);E.stopEvent();if(A.handler){A.handler.call(A.scope||C,E,C,B)}}},afterRender:function(){if(this.fromMarkup&&this.height===undefined&&!this.autoHeight){this.height=this.el.getHeight()}if(this.floating&&!this.hidden&&!this.initHidden){this.el.show()}if(this.title){this.setTitle(this.title)}this.setAutoScroll();if(this.html){this.body.update(typeof this.html=="object"?Ext.DomHelper.markup(this.html):this.html);delete this.html}if(this.contentEl){var A=Ext.getDom(this.contentEl);Ext.fly(A).removeClass(["x-hidden","x-hide-display"]);this.body.dom.appendChild(A)}if(this.collapsed){this.collapsed=false;this.collapse(false)}Ext.Panel.superclass.afterRender.call(this);this.initEvents()},setAutoScroll:function(){if(this.rendered&&this.autoScroll){this.body.setOverflow("auto")}},getKeyMap:function(){if(!this.keyMap){this.keyMap=new Ext.KeyMap(this.el,this.keys)}return this.keyMap},initEvents:function(){if(this.keys){this.getKeyMap()}if(this.draggable){this.initDraggable()}},initDraggable:function(){this.dd=new Ext.Panel.DD(this,typeof this.draggable=="boolean"?null:this.draggable)},beforeEffect:function(){if(this.floating){this.el.beforeAction()}this.el.addClass("x-panel-animated")},afterEffect:function(){this.syncShadow();this.el.removeClass("x-panel-animated")},createEffect:function(B,A,C){var D={scope:C,block:true};if(B===true){D.callback=A;return D}else{if(!B.callback){D.callback=A}else{D.callback=function(){A.call(C);Ext.callback(B.callback,B.scope)}}}return Ext.applyIf(D,B)},collapse:function(B){if(this.collapsed||this.el.hasFxBlock()||this.fireEvent("beforecollapse",this,B)===false){return }var A=B===true||(B!==false&&this.animCollapse);this.beforeEffect();this.onCollapse(A,B);return this},onCollapse:function(A,B){if(A){this[this.collapseEl].slideOut(this.slideAnchor,Ext.apply(this.createEffect(B||true,this.afterCollapse,this),this.collapseDefaults))}else{this[this.collapseEl].hide();this.afterCollapse()}},afterCollapse:function(){this.collapsed=true;this.el.addClass(this.collapsedCls);this.afterEffect();this.fireEvent("collapse",this)},expand:function(B){if(!this.collapsed||this.el.hasFxBlock()||this.fireEvent("beforeexpand",this,B)===false){return }var A=B===true||(B!==false&&this.animCollapse);this.el.removeClass(this.collapsedCls);this.beforeEffect();this.onExpand(A,B);return this},onExpand:function(A,B){if(A){this[this.collapseEl].slideIn(this.slideAnchor,Ext.apply(this.createEffect(B||true,this.afterExpand,this),this.expandDefaults))}else{this[this.collapseEl].show();this.afterExpand()}},afterExpand:function(){this.collapsed=false;this.afterEffect();this.fireEvent("expand",this)},toggleCollapse:function(A){this[this.collapsed?"expand":"collapse"](A);return this},onDisable:function(){if(this.rendered&&this.maskDisabled){this.el.mask()}Ext.Panel.superclass.onDisable.call(this)},onEnable:function(){if(this.rendered&&this.maskDisabled){this.el.unmask()}Ext.Panel.superclass.onEnable.call(this)},onResize:function(A,B){if(A!==undefined||B!==undefined){if(!this.collapsed){if(typeof A=="number"){this.body.setWidth(this.adjustBodyWidth(A-this.getFrameWidth()))}else{if(A=="auto"){this.body.setWidth(A)}}if(typeof B=="number"){this.body.setHeight(this.adjustBodyHeight(B-this.getFrameHeight()))}else{if(B=="auto"){this.body.setHeight(B)}}}else{this.queuedBodySize={width:A,height:B};if(!this.queuedExpand&&this.allowQueuedExpand!==false){this.queuedExpand=true;this.on("expand",function(){delete this.queuedExpand;this.onResize(this.queuedBodySize.width,this.queuedBodySize.height);this.doLayout()},this,{single:true})}}this.fireEvent("bodyresize",this,A,B)}this.syncShadow()},adjustBodyHeight:function(A){return A},adjustBodyWidth:function(A){return A},onPosition:function(){this.syncShadow()},onDestroy:function(){if(this.tools){for(var B in this.tools){Ext.destroy(this.tools[B])}}if(this.buttons){for(var A in this.buttons){Ext.destroy(this.buttons[A])}}Ext.destroy(this.topToolbar,this.bottomToolbar);Ext.Panel.superclass.onDestroy.call(this)},getFrameWidth:function(){var B=this.el.getFrameWidth("lr");if(this.frame){var A=this.bwrap.dom.firstChild;B+=(Ext.fly(A).getFrameWidth("l")+Ext.fly(A.firstChild).getFrameWidth("r"));var C=this.bwrap.dom.firstChild.firstChild.firstChild;B+=Ext.fly(C).getFrameWidth("lr")}return B},getFrameHeight:function(){var A=this.el.getFrameWidth("tb");A+=(this.tbar?this.tbar.getHeight():0)+(this.bbar?this.bbar.getHeight():0);if(this.frame){var C=this.el.dom.firstChild;var D=this.bwrap.dom.lastChild;A+=(C.offsetHeight+D.offsetHeight);var B=this.bwrap.dom.firstChild.firstChild.firstChild;A+=Ext.fly(B).getFrameWidth("tb")}else{A+=(this.header?this.header.getHeight():0)+(this.footer?this.footer.getHeight():0)}return A},getInnerWidth:function(){return this.getSize().width-this.getFrameWidth()},getInnerHeight:function(){return this.getSize().height-this.getFrameHeight()},syncShadow:function(){if(this.floating){this.el.sync(true)}},getLayoutTarget:function(){return this.body},setTitle:function(B,A){this.title=B;if(this.header&&this.headerAsText){this.header.child("span").update(B)}if(A){this.setIconClass(A)}this.fireEvent("titlechange",this,B);return this},getUpdater:function(){return this.body.getUpdater()},load:function(){var A=this.body.getUpdater();A.update.apply(A,arguments);return this},beforeDestroy:function(){Ext.Element.uncache(this.header,this.tbar,this.bbar,this.footer,this.body)},createClasses:function(){this.headerCls=this.baseCls+"-header";this.headerTextCls=this.baseCls+"-header-text";this.bwrapCls=this.baseCls+"-bwrap";this.tbarCls=this.baseCls+"-tbar";this.bodyCls=this.baseCls+"-body";this.bbarCls=this.baseCls+"-bbar";this.footerCls=this.baseCls+"-footer"},createGhost:function(A,E,B){var D=document.createElement("div");D.className="x-panel-ghost "+(A?A:"");if(this.header){D.appendChild(this.el.dom.firstChild.cloneNode(true))}Ext.fly(D.appendChild(document.createElement("ul"))).setHeight(this.bwrap.getHeight());D.style.width=this.el.dom.offsetWidth+"px";if(!B){this.container.dom.appendChild(D)}else{Ext.getDom(B).appendChild(D)}if(E!==false&&this.el.useShim!==false){var C=new Ext.Layer({shadow:false,useDisplay:true,constrain:false},D);C.show();return C}else{return new Ext.Element(D)}},doAutoLoad:function(){this.body.load(typeof this.autoLoad=="object"?this.autoLoad:{url:this.autoLoad})}});Ext.reg("panel",Ext.Panel);