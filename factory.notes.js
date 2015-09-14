angular.module("todoApp").factory("some factory",fucntion(){
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
	
})

angular.module("someOther",["some factory"])