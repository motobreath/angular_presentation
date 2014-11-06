angular.module("todoApp").factory("Notes",function(){
	var notes="";
	return {
		updateNotes:function(notes){
			this.notes=notes;
		},
		getNotes:function(){
			return this.notes;
		},
		removeNotes:function(){	
			this.notes="";
		}
	}
})