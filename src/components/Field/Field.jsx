import PropTypes from "prop-types";
import { FieldLayout } from "./FIeldLayout";

export const Field = () => {
	return (
		<>
			<FieldLayout />
		</>
	);
};

Field.propTypes = {
	field: PropTypes.object,
	currentPlayer: PropTypes.string,
	handleCLick: PropTypes.func,
	isDraw: PropTypes.bool,
};
