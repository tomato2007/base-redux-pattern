import * as functionsForMutate from './functionsForMutate';

export default (state = {

	// показывает состояние загрузки страницы
	pageLoadingFlag: false,

	//

}, action) => {
	switch(action.type) {

		// изменение pageLoadingFlag 
		case 'COMMON_PROCESSES_PAGE_LOADING_FLAG':
			return {
				...state,
				...functionsForMutate.pageLoadingFlag(action.payload)
			};

		default:
			return { ...state };
	}
}