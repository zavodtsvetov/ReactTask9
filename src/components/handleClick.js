import { store } from "./store";
import { checkWinner } from "./checkWinner";
export const handleCLick = (item, idx) => {
	const { isGameEnded } = store.getState();

	if (item === "" && isGameEnded === false) {
		const { currentPlayer, field } = store.getState();

		const newField = [...field];
		newField[idx] = currentPlayer;
		const isWinner = checkWinner(newField);
		if (isWinner) {
			store.dispatch({ type: "IS_GAME_ENDED", payload: true });
		} else if (!isWinner && !newField.includes("")) {
			store.dispatch({ type: "IS_DRAW", payload: true });
		} else {
			store.dispatch({
				type: "SET_STEP",
				payload: currentPlayer === "X" ? "O" : "X",
			});
		}

		store.dispatch({ type: "SET_FIELD", payload: newField });
	}
};
