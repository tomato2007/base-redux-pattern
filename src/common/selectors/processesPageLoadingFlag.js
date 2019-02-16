import { createSelector } from 'reselect';

export default createSelector(
	(state) => state.processes.pageLoadingFlag,
	(processes) => processes
);