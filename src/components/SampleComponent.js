import * as React from "react";

// Components

// Styles
import classes from "../styles/Comp.module.css";

// Mui
import { Box } from "@mui/material";

const Comp = React.memo(function Comp() {
	return (
		<div className={classes.root}>
			<h1>Component</h1>
			<Box mb={2}>
				<div>basic component</div>
			</Box>
		</div>
	);
});

export default Comp;
