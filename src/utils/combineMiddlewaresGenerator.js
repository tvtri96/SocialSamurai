export default (store) => (middlewares) => (nextState, replace, cb) => {
	let current = 0;
	const action = {
		replace,
		next: () => {
			if (current < middlewares.length) {
				middlewares[current++](store, nextState, action);
			} else {
				cb();
			}
		}
	};
	action.next();
};
