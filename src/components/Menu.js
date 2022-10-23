import { useStore } from "../hooks/useStore"
import "./BtnCASE.css";

export const Menu = () => {
	const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])

	return (<div className="menu absolute">
		<button
			onClick={() => saveWorld()}
			style={{ padding: "10px 20px", margin: "20px", background: "green", border: "none", color: "white" }}
			className="btncase"
		>Save</button>
		<button
			onClick={() => resetWorld()}
			style={{ padding: "10px 20px", background: "darkblue", border: "none", color: "white" }}
			className="btncase"
		>Restart</button>
		{/* <button className="btncase" onClick={()=>(Element.requestFullscreen())}
		style={{ padding: "10px 20px", background: "black", border: "none", color: "white" }}
		>Nikomine</button> */}
	</div>)
}