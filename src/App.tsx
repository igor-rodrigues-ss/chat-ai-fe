import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import ChatPage from "./pages/Chat";
import RegistrationPage from "./pages/Registration";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/chat" element={<ChatPage />} />
				<Route path="/registration" element={<RegistrationPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
