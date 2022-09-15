const sinon = require('sinon');
const chai = require('chai');

const { productModel } = require('../../../src/models');
const conn = require('../../../src/models/connection');
const mock = require('../../mocks/product.mock');

const { expect } = chai;

describe('Verificar o Product Model', () => {

  it('Buscando todos os produtos', async () => {
    sinon.stub(conn, 'execute').resolves([mock.productsAllResponse]);
    const result = await productModel.getAllProducts();
    expect(result).to.be.equal(mock.productsAllResponse);
  })

  it('Buscando produto por Id', async () => {
    sinon.stub(conn, 'execute').resolves([[mock.productIdResponse]]);
    const id = 1;
    const result = await productModel.findById(id);
    expect(result).to.be.equal(mock.productIdResponse);
  })

  it('Cadastrando um novo produto', async () => {
    sinon.stub(conn, 'execute').resolves([{ insertId: 5 }]);
    const result = await productModel.registerProduct(mock.newProduct);
    expect(result).to.equal(5);
  })

  afterEach(sinon.restore);

})