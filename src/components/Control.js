import * as React from "react";
import { Box } from "@mui/material";

// Components

//Styles
import classes from "../styles/Control.module.css";

const Control = React.memo(function Control() {
	return (
		<div className={classes.root}>
			<h1>Control</h1>
			<Box className={classes.root} mb={2}>
				<div>basic Control</div>
			</Box>
		</div>
	);
});

export default Control;
