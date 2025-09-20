import PropTypes from "prop-types";
import s from "./Field.module.css";
import { useSelector } from "react-redux";
import { selectField } from "../selectors";
let nextId = 0;

export const FieldLayout = ({ handleCLick }) => {
	const field = useSelector(selectField);
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
