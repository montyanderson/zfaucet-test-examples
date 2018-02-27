const sinon = require("sinon");
const chai = require("chai");

chai.use(require("chai-as-promised"));

const rpc = require("./rpc");
const sending = require("./sending");

describe("sending", () => {

	describe("#testBalance", () => {

		it("should throw an error when balance is 0", async () => {
			rpc.getbalance = sinon.stub().returns(0);
			await chai.assert.isRejected(sending.testBalance());
		});

	});

});
