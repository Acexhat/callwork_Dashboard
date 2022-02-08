export const getSearchData = (payload) =>{
	return{
        type: "SEARCHED_USER_INPUT",
        payload:payload
	}
}

export const invokeSearchApiCall = () =>{
	return{
        type: "DO_SEARCHING",
	}
}

export const searchResult = (payload) =>{
    console.log(payload);
	return{
        type: "SEARCH_RESULT_DATA",
        payload:payload,
	}
}

