import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";
import * as React from "react";
import Control from "../components/Control";

const App = React.memo(function App() {
	const [nav, setNav] = React.useState();

	React.useEffect(() => {
		setNav(navigator);
	}, []);

	return (
		<div>
			<Box mb={2}>
				{nav ? <Control nav={nav} /> : <CircularProgress />}
			</Box>
		</div>
	);
});

export default App;
