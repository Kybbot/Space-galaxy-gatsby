import React from "react";

const Counter = () => {
	const [state, setState] = React.useState(0);

	const minusState = () => {
		setState((prev) => setState(prev - 1));
	};

	const plusState = () => {
		setState((prev) => setState(prev + 1));
	};

	return (
		<div>
			<h2>Counter</h2>
			<p>{state}</p>
			<button onClick={minusState}>-</button>
			<button onClick={plusState}>+</button>
		</div>
	);
};

export default Counter;
