({
	saveRec : function(component, event, helper) {
		let acc = component.get('v.acc');
        alert(`Name: ${acc.Name}, Phone: ${acc.Phone}`);
	}
})