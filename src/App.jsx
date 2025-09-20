import s from "./App.module.css";
import { Info } from "./components/Info/Info";
import { Field } from "./components/Field/Field";
import { store } from "./components/store";
import { selectField } from "./components/selectors/select-field";
import { useSelector } from "react-redux";

function App() {
	const field = useSelector(selectField);
	const handleReplay = () => {
		store.dispatch({ type: "RESTART" });
	};

	const startButton = (
		<button
			onClick={handleReplay}
			style={{
				marginTop: "20px",
				fontSize: "50px",
				border: null,
				background: "linear-gradient(skyBlue,blue)",
				color: "white",
			}}
		>
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
