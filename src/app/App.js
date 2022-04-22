import { Box } from "@mui/material";
import * as React from "react";
import Control from "../components/Control";

const App = React.memo(function App() {
	return (
		<div>
			<Box mb={2}>
				<Control />
			</Box>
		</div>
	);
});

export default App;
