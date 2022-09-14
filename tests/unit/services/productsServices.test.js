const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;

const { productService } = require('../../../src/services');
const { productModel } = require('../../../src/models');
const mock = require('../../mocks/product.mock');

describe('Verificar o Product Service', () => {
  it('Buscando todos os produtos', async () => {
    sinon.stub(productModel, 'getAllProducts').resolves(mock.productsAllResponse);
    const result = await productService.getAllProducts();
    expect(result).to.equal({ type: null, message: mock.productsAllResponse });
  })
})