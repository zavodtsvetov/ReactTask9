import PropTypes from "prop-types";
import s from "./Field.module.css";
import { useSelector } from "react-redux";
import {
	selectCurrentPlayer,
	selectField,
	selectIsGameEnded,
} from "../selectors";
import { useDispatch } from "react-redux";
import { checkWinner } from "../checkWinner";
let nextId = 0;

export const FieldLayout = () => {
	const dispatch = useDispatch();
	const isGameEnded = useSelector(selectIsGameEnded);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const field = useSelector(selectField);
	const handleCLick = (item, idx) => {
		if (item === "" && isGameEnded === false) {
			const newField = [...field];
			newField[idx] = currentPlayer;
			const isWinner = checkWinner(newField);

			if (isWinner) {
				dispatch({ type: "IS_GAME_ENDED", payload: true });
			} else if (!isWinner && !newField.includes("")) {
				dispatch({ type: "IS_DRAW", payload: true });
			} else {
				dispatch({
					type: "SET_STEP",
					payload: currentPlayer === "X" ? "O" : "X",
				});
			}

			dispatch({ type: "SET_FIELD", payload: newField });
		}
	};

	return (
		<>
			<div className={s.mainField}>
				<div className={s.field}>
					{field.map((item, index) => {
						return (
							<button
								onClick={() => {
									handleCLick(item, index);
								}}
								className={s.button}
								key={nextId++}
							>
								{item}
							</button>
						);
					})}
				</div>
			</div>
		</>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.object,
	handleCLick: PropTypes.func,
};
