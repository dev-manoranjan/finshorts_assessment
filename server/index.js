const express = require("express");
const app = express();
const port = 3030;
app.use(express.json());
app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/", (req, res) => {
	setTimeout(() => {
		const response = {
			status: "success",
			message: "Data bind successfully",
			data: req.body,
		};
		res.send(response);
	}, 1000);
});

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
