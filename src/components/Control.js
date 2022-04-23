import * as React from "react";
import { Box } from "@mui/material";
import axios from "axios";

// Components

//Styles
import classes from "../styles/Control.module.css";
import NoConnect from "./basic/NoConnect";
import useConnection from "../hooks/useConnection";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

const HOST = "192.168.4.1";

export const ControlUI = React.memo(function ControlUI({ nav }) {
	const getaddr = (path) => `http://${HOST}${path}`;

	const handleStart = () => {
		axios
			.get(getaddr("/do/start"), { do: "start" })
			.then((r) => console.log(r, "start request"))
			.catch((e) => console.log(e));
	};

	const handleStop = () => {
		axios
			.get(getaddr("/do/stop"), { do: "stop" })
			.then((r) => console.log(r, "stop request"))
			.catch((e) => console.log(e));
	};

	const handleTx = () => {
		axios({
			url: getaddr("/transfer"), //your url
			method: "GET",
			responseType: "blob", // important
		})
			.then((response) => {
				const data = response.data;
				console.log({ data });
				const url = window.URL.createObjectURL(new Blob([data]));
				const link = document.createElement("a");
				link.href = url;
				link.setAttribute("download", "rec.wav"); //or any other extension
				document.body.appendChild(link);
				link.click();
			})
			.then((link) => {
				handleDoneDownload(true)
					.then((res) => {
						console.log(res);
					})
					.catch((e) => console.log(e));
			})
			.catch((e) => {
				handleDoneDownload(false)
					.then((res) => console.log(res, e))
					.catch((e) => console.log(e));
			});
	};

	const handleDoneDownload = async (state) => {
		const article = { title: "download state" };
		const params = { message: state ? "done" : "failed" };
		const response = await axios.post(getaddr("/transferack"), article, {
			params,
		});
		return response;
	};
	return (
		<div className={classes.root}>
			<Typography className={classes.title} variant="h6">
				Control
			</Typography>
			<Box className={classes.control} mb={2}>
				<div className="App">
					<header className="App-header">
						<p>ESP32 | Pnoi-phone App</p>

						<div className="App-Buttons-div">
							<Button
								className="App-Button"
								type="button"
								onClick={handleStart}
							>
								Start
							</Button>

							<Button
								className="App-Button"
								type="button"
								onClick={handleStop}
							>
								Stop
							</Button>

							<Button
								className="App-Button"
								type="button"
								onClick={handleTx}
								// href="/transfer"
							>
								Transfer
							</Button>
						</div>
					</header>
				</div>
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
