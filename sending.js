const rpc = require("./rpc");

const sending = module.exports;

sending.testBalance = async () => {
	const balance = await rpc.getbalance();

	if(balance === 0)
		throw new Error("No money!");
};
