const assert = require("node:assert");
const cds = require("@sap/cds");

const { GET } = cds.test(__dirname + "/..");

describe("OData APIs no auth", () => {
  it("should return AdminService not authorized", async () => {
    const response = GET`/odata/v4/admin/`;
    await assert.rejects(response, (err) => {
      assert.strictEqual(err.status, 401);
      return true;
    });
  });
});
