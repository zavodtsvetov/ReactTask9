import PropTypes from "prop-types";
import { handleCLick } from "../handleClick";
import { FieldLayout } from "./FIeldLayout";

export const Field = () => {
	return (
		<>
			<FieldLayout handleCLick={handleCLick} />
		</>
	);
};

Field.propTypes = {
	field: PropTypes.object,
	currentPlayer: PropTypes.string,
	handleCLick: PropTypes.func,
	isDraw: PropTypes.bool,
};
