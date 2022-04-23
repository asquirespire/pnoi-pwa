import * as React from "react";
import { Box } from "@mui/material";

// Components

//Styles
import classes from "../styles/Control.module.css";
import NoConnect from "./basic/NoConnect";
import useConnection from "../hooks/useConnection";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

export const ControlUI = React.memo(function ControlUI({ nav }) {
	return (
		<div className={classes.root}>
			<Typography className={classes.title} variant="h6">
				Control
			</Typography>
			<Box className={classes.control} mb={2}>
				<div>basic Control</div>
			</Box>
		</div>
	);
});

const Control = React.memo(function Control({ nav }) {
	const connection = useConnection(nav);
	React.useEffect(() => {
		console.log(connection);
	}, [connection]);

	return <>{connection.online ? <ControlUI /> : <NoConnect />}</>;
});

export default Control;
