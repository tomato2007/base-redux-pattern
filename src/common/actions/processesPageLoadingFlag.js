
export default (payload) => (dispatch) => {
	dispatch({
		type: 'COMMON_PROCESSES_PAGE_LOADING_FLAG',
		payload
	});
}