import { InfoLayout } from "./InfoLayout";
import PropTypes from "prop-types";

export const Info = () => {
	return <InfoLayout />;
};

InfoLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};
