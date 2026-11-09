const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("./server");

test("health endpoint reports healthy", async () => {
  const server = app.listen(0);
  try {
    const response = await fetch(`http://127.0.0.1:${server.address().port}/health`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: "healthy" });
  } finally {
    server.close();
  }
});
