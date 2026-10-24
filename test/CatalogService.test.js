const cds = require('@sap/cds')

const { GET, POST, expect, defaults } = cds.test (__dirname+'/..')
defaults.auth = { username: 'alice', password: '' }

describe('CatalogService OData APIs', () => {

  it('serves CatalogService.ListOfBooks', async () => {
    const { data } = await GET `/odata/v4/catalog/ListOfBooks ${{ params: { $select: 'ID,author' } }}`
    expect(data.value).to.containSubset([
      // {"ID":1257888,"author":"author-1257888"},
    ])
  })

  it('executes submitOrder', async () => {
    const { data } = await POST `/odata/v4/catalog/submitOrder ${
      {}
      // {"book":15417704,"quantity":7}
    }`
    // TODO finish this test
    // expect(data.value).to...
  })
})
