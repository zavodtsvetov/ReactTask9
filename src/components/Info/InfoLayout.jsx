import PropTypes from "prop-types";
import s from "./Info.module.css";

import { useSelector } from "react-redux";
import {
	selectCurrentPlayer,
	selectIsDraw,
	selectIsGameEnded,
} from "../selectors/index";

export const InfoLayout = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isDraw = useSelector(selectIsDraw);
	const isGameEnded = useSelector(selectIsGameEnded);
	return (
		<>
			<div className={s.status}>
				{isDraw === true ? (
					<div className={s.draw}>Ничья</div>
				) : isGameEnded === true ? (
					<div className={s.win}> Победил {currentPlayer}</div>
				) : (
					`Ходит ${currentPlayer}`
				)}
			</div>
		</>
	);
};

InfoLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};
