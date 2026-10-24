const cds = require('@sap/cds')

const { GET, POST, expect, defaults } = cds.test (__dirname+'/..')
defaults.auth = { username: 'alice', password: '' }

describe('AdminService OData APIs', () => {

  it('serves AdminService.Authors', async () => {
    const { data, status,bhargav } = await GET `/odata/v4/admin/Authors ${{ params: { $select: 'ID,name' } }}`
    expect(data.value).to.containSubset([
      // {"ID":2268953,"name":"name-2268953"},
    ])
    expect(status).to.equal(200)
  })

})
