const cds = require('@sap/cds')

const { GET, POST, expect, defaults } = cds.test (__dirname+'/..')
defaults.auth = { username: 'alice', password: '' }

describe('CatalogService OData APIs', () => {

  it('serves CatalogService.ListOfBooks', async () => {
    const { data, status } = await GET `/odata/v4/catalog/CatalogService.ListOfBooks ${{ params: { $select: 'ID,title' } }}`
    expect(data.value).to.containSubset([{ ID: 251, title: "The Raven" }]);
    expect(status).to.equal(200);
  })

  it("executes submitOrder", async () => {
    let response = await GET`/odata/v4/catalog/ListOfBooks(251)`;
    expect(response.data.stock).to.equal(333);
    const { data } = await POST`/odata/v4/catalog/submitOrder ${{
      book: 251,
      quantity: 44,
    }}`;
    response = await GET`/odata/v4/catalog/ListOfBooks(251)`;
    expect(response.data.stock).to.equal(289);
  });
})
