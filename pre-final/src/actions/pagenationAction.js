export const nextPageAction = () =>{
	return{
		type: "TRIGGER_NEXT_PAGE",
	}
}

export const previousPageAction = () =>{
	return{
		type: "TRIGGER_PREVIOUS_PAGE",
	}
}

export const thisButtonClicked = (payload) =>{
	console.log("payload::::",payload)
	return{
		type: "CURRENT_CHOOSED_BUTTON",
		payload:payload
	}
}