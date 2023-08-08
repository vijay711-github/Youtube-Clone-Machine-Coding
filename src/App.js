import { Provider } from "react-redux";
import "./App.css";
import Body from "./conponents/Body";
import Head from "./conponents/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./conponents/Maincontainer";
import WatchPage from "./conponents/WatchPage";
const approuter = createBrowserRouter([{
	path: "/",
	element: <Body />,
	children: [
		{
			path: "/",
			element:<Maincontainer/>
		},
		{
			path: "/watch",
			element:<WatchPage/>
		}
	]
	
}])
function App() {
	return (
		<Provider store={store}>
			<div>
				<Head />
				<RouterProvider router={approuter}/>
			</div>
		</Provider>
	);
}

export default App;
