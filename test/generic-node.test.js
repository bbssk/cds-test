const { describe, it, test } = require("node:test");
const assert = require("node:assert");


//test() //test and it are same
describe("simple node test", () => {
  it("should be ok", async () => {
    assert.ok(true);
  });
});
