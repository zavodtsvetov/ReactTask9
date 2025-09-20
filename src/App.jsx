import s from "./App.module.css";
import { Info } from "./components/Info/Info";
import { Field } from "./components/Field/Field";
import { selectField } from "./components/selectors/select-field";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
	const field = useSelector(selectField);
	const dispatch = useDispatch();
	const handleReplay = () => {
		dispatch({ type: "RESTART" });
	};

	const startButton = (
		<button onClick={handleReplay} className={s.restartButton}>
			Очистить поле
		</button>
	);

	return (
		<>
			<div className={s.main}>
				<Info />
				<Field />
				{field.includes("X" || "O") ? startButton : ""}
			</div>
		</>
	);
}

export default App;
