﻿/*
 * Ext JS Library 2.1
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

Ext.UpdateManager.defaults.indicatorText="<div class=\"loading-indicator\">Henter...</div>";if(Ext.View){Ext.View.prototype.emptyText=""}if(Ext.grid.Grid){Ext.grid.Grid.prototype.ddText="{0} markerede raekker"}if(Ext.TabPanelItem){Ext.TabPanelItem.prototype.closeText="Luk denne fane"}if(Ext.form.Field){Ext.form.Field.prototype.invalidText="Vaerdien i dette felt er ugyldig"}if(Ext.LoadMask){Ext.LoadMask.prototype.msg="Henter..."}Date.monthNames=["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"];Date.getShortMonthName=function(A){return Date.monthNames[A].substring(0,3)};Date.monthNumbers={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};Date.getMonthNumber=function(A){return Date.monthNumbers[A.substring(0,1).toUpperCase()+A.substring(1,3).toLowerCase()]};Date.dayNames=["sondag","mandag","tirsdag","onsdag","torsdag","fredag","lordag"];Date.getShortDayName=function(A){return Date.dayNames[A].substring(0,3)};if(Ext.MessageBox){Ext.MessageBox.buttonText={ok:"OK",cancel:"Fortryd",yes:"Ja",no:"Nej"}}if(Ext.util.Format){Ext.util.Format.date=function(A,B){if(!A){return""}if(!(A instanceof Date)){A=new Date(Date.parse(A))}return A.dateFormat(B||"d/m/Y")}}if(Ext.DatePicker){Ext.apply(Ext.DatePicker.prototype,{todayText:"I dag",minText:"Denne dato er for den tidligst tilladte",maxText:"Denne dato er senere end den senest tilladte",disabledDaysText:"",disabledDatesText:"",monthNames:Date.monthNames,dayNames:Date.dayNames,nextText:"Naeste maned (Ctrl + hojre piltast)",prevText:"Forrige maned (Ctrl + venstre piltast)",monthYearText:"Vaelg en maned (Ctrl + op/ned pil for at aendre arstal)",todayTip:"{0} (mellemrum)",format:"d/m/y",okText:"&#160;OK&#160;",cancelText:"Cancel",startDay:1})}if(Ext.PagingToolbar){Ext.apply(Ext.PagingToolbar.prototype,{beforePageText:"Side",afterPageText:"af {0}",firstText:"Forste side",prevText:"Forrige side",nextText:"Naeste side",lastText:"Sidste side",refreshText:"Opfrisk",displayMsg:"Viser {0} - {1} af {2}",emptyMsg:"Der er ingen data at vise"})}if(Ext.form.TextField){Ext.apply(Ext.form.TextField.prototype,{minLengthText:"Minimum laengden for dette felt er {0}",maxLengthText:"Maksimum laengden for dette felt er {0}",blankText:"Dette felt skal udfyldes",regexText:"",emptyText:null})}if(Ext.form.NumberField){Ext.apply(Ext.form.NumberField.prototype,{minText:"Mindste-vaerdien for dette felt er {0}",maxText:"Maksimum-vaerdien for dette felt er {0}",nanText:"{0} er ikke et tilladt nummer"})}if(Ext.form.DateField){Ext.apply(Ext.form.DateField.prototype,{disabledDaysText:"Inaktiveret",disabledDatesText:"Inaktiveret",minText:"Datoen i dette felt skal vaere efter {0}",maxText:"Datoen i dette felt skal vaere for {0}",invalidText:"{0} er ikke en tilladt dato - datoer skal angives i formatet {1}",format:"d/m/y",altFormats:"d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"})}if(Ext.form.ComboBox){Ext.apply(Ext.form.ComboBox.prototype,{loadingText:"Henter...",valueNotFoundText:undefined})}if(Ext.form.VTypes){Ext.apply(Ext.form.VTypes,{emailText:"Dette felt skal vaere en email adresse i formatet \"xxx@yyy.zzz\"",urlText:"Dette felt skal vaere en URL i formatet \"http:/"+"/xxx.yyy\"",alphaText:"Dette felt kan kun indeholde bogstaver og \"_\" (understregning)",alphanumText:"Dette felt kan kun indeholde bogstaver, tal og \"_\" (understregning)"})}if(Ext.form.HtmlEditor){Ext.apply(Ext.form.HtmlEditor.prototype,{createLinkText:"Indtast URL:",buttonTips:{bold:{title:"Fed (Ctrl+B)",text:"Formater det markerede tekst med fed.",cls:"x-html-editor-tip"},italic:{title:"Kursiv (Ctrl+I)",text:"Formater det markerede tekst med kursiv.",cls:"x-html-editor-tip"},underline:{title:"Understreg (Ctrl+U)",text:"Understreg det markerede tekst.",cls:"x-html-editor-tip"},increasefontsize:{title:"Forstor tekst",text:"Forog fontstorrelsen.",cls:"x-html-editor-tip"},decreasefontsize:{title:"Formindsk tekst",text:"Formindsk fontstorrelsen.",cls:"x-html-editor-tip"},backcolor:{title:"Farve for tekstfremhaevelse",text:"Skift baggrundsfarve for det markerede tekst.",cls:"x-html-editor-tip"},forecolor:{title:"Skriftfarve",text:"Skift skriftfarve for det markerede tekst.",cls:"x-html-editor-tip"},justifyleft:{title:"Juster venstre",text:"Venstrestil tekst.",cls:"x-html-editor-tip"},justifycenter:{title:"Centreret",text:"Centrer tekst.",cls:"x-html-editor-tip"},justifyright:{title:"Juster hojre",text:"Hojrestil tekst.",cls:"x-html-editor-tip"},insertunorderedlist:{title:"Punktopstilling",text:"Pabegynd punktopstilling.",cls:"x-html-editor-tip"},insertorderedlist:{title:"Nummereret opstilling",text:"Pabegynd nummereret opstilling.",cls:"x-html-editor-tip"},createlink:{title:"Hyperlink",text:"Lav det markerede test til et hyperlink.",cls:"x-html-editor-tip"},sourceedit:{title:"Kildetekstredigering",text:"Skift til redigering af kildetekst.",cls:"x-html-editor-tip"}}})}if(Ext.grid.GridView){Ext.apply(Ext.grid.GridView.prototype,{sortAscText:"Sortér stigende",sortDescText:"Sortér faldende",lockText:"Las kolonne",unlockText:"Fjern las fra kolonne",columnsText:"Kolonner"})}if(Ext.grid.GroupingView){Ext.apply(Ext.grid.GroupingView.prototype,{emptyGroupText:"(Ingen)",groupByText:"Gruppér efter dette felt",showGroupsText:"Vis i grupper"})}if(Ext.grid.PropertyColumnModel){Ext.apply(Ext.grid.PropertyColumnModel.prototype,{nameText:"Navn",valueText:"Vaerdi",dateFormat:"j/m/Y"})}if(Ext.layout.BorderLayout.SplitRegion){Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype,{splitTip:"Traek for at aendre storrelsen.",collapsibleSplitTip:"Traek for at aendre storrelsen. Dobbelt-klik for at skjule."})};