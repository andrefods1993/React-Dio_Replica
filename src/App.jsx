import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import AppRoutes from "./routes/Routes";

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Header />
			<AppRoutes />
		</BrowserRouter>
	);
};

export default App;
