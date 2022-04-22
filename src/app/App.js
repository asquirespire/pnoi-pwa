import { Box } from "@mui/material";
import * as React from "react";

const classes = {
	img: {
		width: "auto",
	},
};

const App = React.memo(function App({ src, children, title }) {
	const onDrop = React.useCallback(async (files) => {
		try {
			const file = files[0];
			if (!file) return;

			const timestamp = new Date();
			const src = URL.createObjectURL(file);

			console.log("file", file);
		} catch (err) {
			log(err);
		}
	}, []);

	return (
		<div>
			<h1>App</h1>
			<Box mb={2}>
				<div>box lol</div>
			</Box>
		</div>
	);
});

export default App;
