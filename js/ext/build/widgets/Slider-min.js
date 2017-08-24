﻿/*
 * Ext JS Library 2.1
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

Ext.Slider=Ext.extend(Ext.BoxComponent,{vertical:false,minValue:0,maxValue:100,keyIncrement:1,increment:0,clickRange:[5,15],clickToChange:true,animate:true,initComponent:function(){if(this.value===undefined){this.value=this.minValue}Ext.Slider.superclass.initComponent.call(this);this.keyIncrement=Math.max(this.increment,this.keyIncrement);this.addEvents("beforechange","change","dragstart","drag","dragend");if(this.vertical){Ext.apply(this,Ext.Slider.Vertical)}},onRender:function(){this.autoEl={cls:"x-slider "+(this.vertical?"x-slider-vert":"x-slider-horz"),cn:{cls:"x-slider-end",cn:{cls:"x-slider-inner",cn:[{cls:"x-slider-thumb"},{tag:"a",cls:"x-slider-focus",href:"#",tabIndex:"-1",hidefocus:"on"}]}}};Ext.Slider.superclass.onRender.apply(this,arguments);this.endEl=this.el.first();this.innerEl=this.endEl.first();this.thumb=this.innerEl.first();this.halfThumb=(this.vertical?this.thumb.getHeight():this.thumb.getWidth())/2;this.focusEl=this.thumb.next();this.initEvents()},initEvents:function(){this.thumb.addClassOnOver("x-slider-thumb-over");this.mon(this.el,"mousedown",this.onMouseDown,this);this.mon(this.el,"keydown",this.onKeyDown,this);this.tracker=new Ext.dd.DragTracker({onBeforeStart:this.onBeforeDragStart.createDelegate(this),onStart:this.onDragStart.createDelegate(this),onDrag:this.onDrag.createDelegate(this),onEnd:this.onDragEnd.createDelegate(this),tolerance:3,autoStart:300});this.tracker.initEl(this.thumb);this.on("beforedestroy",this.tracker.destroy,this.tracker)},onMouseDown:function(B){if(this.disabled){return }if(this.clickToChange&&B.target!=this.thumb.dom){var A=this.innerEl.translatePoints(B.getXY());this.onClickChange(A)}this.focus()},onClickChange:function(A){if(A.top>this.clickRange[0]&&A.top<this.clickRange[1]){this.setValue(Math.round(A.left/this.getRatio()))}},onKeyDown:function(B){if(this.disabled){B.preventDefault();return }var A=B.getKey();switch(A){case B.UP:case B.RIGHT:B.stopEvent();if(B.ctrlKey){this.setValue(this.maxValue)}else{this.setValue(this.value+this.keyIncrement)}break;case B.DOWN:case B.LEFT:B.stopEvent();if(B.ctrlKey){this.setValue(this.minValue)}else{this.setValue(this.value-this.keyIncrement)}break;default:B.preventDefault()}},doSnap:function(B){if(!this.increment||this.increment==1||!B){return B}var D=B,C=this.increment;var A=B%C;if(A>0){if(A>(C/2)){D=B+(C-A)}else{D=B-A}}return D.constrain(this.minValue,this.maxValue)},afterRender:function(){Ext.Slider.superclass.afterRender.apply(this,arguments);if(this.value!==undefined){var A=this.normalizeValue(this.value);if(A!==this.value){delete this.value;this.setValue(A,false)}else{this.moveThumb(this.translateValue(A),false)}}},getRatio:function(){var A=this.innerEl.getWidth();var B=this.maxValue-this.minValue;return A/B},normalizeValue:function(A){if(typeof A!="number"){A=parseInt(A)}A=Math.round(A);A=this.doSnap(A);A=A.constrain(this.minValue,this.maxValue);return A},setValue:function(B,A){B=this.normalizeValue(B);if(B!==this.value&&this.fireEvent("beforechange",this,B,this.value)!==false){this.value=B;this.moveThumb(this.translateValue(B),A!==false);this.fireEvent("change",this,B)}},translateValue:function(A){return(A*this.getRatio())-this.halfThumb},moveThumb:function(B,A){if(!A||this.animate===false){this.thumb.setLeft(B)}else{this.thumb.shift({left:B,stopFx:true,duration:0.35})}},focus:function(){this.focusEl.focus(10)},onBeforeDragStart:function(A){return !this.disabled},onDragStart:function(A){this.thumb.addClass("x-slider-thumb-drag");this.fireEvent("dragstart",this,A)},onDrag:function(A){var B=this.innerEl.translatePoints(this.tracker.getXY());this.setValue(Math.round(B.left/this.getRatio()),false);this.fireEvent("drag",this,A)},onDragEnd:function(A){this.thumb.removeClass("x-slider-thumb-drag");this.fireEvent("dragend",this,A)},onResize:function(A,B){this.innerEl.setWidth(A-(this.el.getPadding("l")+this.endEl.getPadding("r")))},getValue:function(){return this.value}});Ext.reg("slider",Ext.Slider);Ext.Slider.Vertical={onResize:function(A,B){this.innerEl.setHeight(B-(this.el.getPadding("t")+this.endEl.getPadding("b")))},getRatio:function(){var B=this.innerEl.getHeight();var A=this.maxValue-this.minValue;return B/A},moveThumb:function(B,A){if(!A||this.animate===false){this.thumb.setBottom(B)}else{this.thumb.shift({bottom:B,stopFx:true,duration:0.35})}},onDrag:function(B){var C=this.innerEl.translatePoints(this.tracker.getXY());var A=this.innerEl.getHeight()-C.top;this.setValue(Math.round(A/this.getRatio()),false);this.fireEvent("drag",this,B)},onClickChange:function(B){if(B.left>this.clickRange[0]&&B.left<this.clickRange[1]){var A=this.innerEl.getHeight()-B.top;this.setValue(Math.round(A/this.getRatio()))}}};