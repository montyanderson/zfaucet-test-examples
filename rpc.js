const stdrpc = require("stdrpc");

module.exports = stdrpc("http://localhost:8232", {
	req: {
		auth: {
			username: "a",
			password: "b"
		}
	}
});
