import * as React from "react";

// Components

// Styles
import classes from "../../styles/NoConnect.module.css";

// Mui
import { Typography } from "@mui/material";

const NoConnect = React.memo(function NoConnect() {
	return (
		<div className={classes.root}>
			<Typography variant="h6" align="center">
				Pnoi-phone not connected
			</Typography>
			<Typography variant="caption" align="center">
				Go to wi-fi settings and connect to Pnoi
			</Typography>
		</div>
	);
});

export default NoConnect;
