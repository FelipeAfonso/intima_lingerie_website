// JavaScript Document

function addFieldsToSelect(){
	"use strict";
	var DiaSelect = document.register_form.Dianasc;
	var AnoSelect = document.register_form.Anonasc;
	for(var x=1; x<32; x++){
		DiaSelect.options[DiaSelect.options.length] = new Option(x.toString(), x.toString());
	}
	for(x=2010; x>1900; x--){
		AnoSelect.options[AnoSelect.options.length] = new Option(x.toString(), x.toString());
	}
}