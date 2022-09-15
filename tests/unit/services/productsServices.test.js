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
    expect(result).to.be.deep.equal({ type: null, message: mock.productsAllResponse });
  });

  it('Buscando produto por id existente', async () => {
    sinon.stub(productModel, 'findById').resolves(mock.productIdResponse);
    const id = 1;
    const result = await productService.findById(id);
    expect(result).to.be.deep.equal({ type: null, message: mock.productIdResponse });
  });

  it('Buscando produto por id não existente', async () => {
    sinon.stub(productModel, 'findById').resolves(mock.productNotFound);
    const id = 999;
    const result = await productService.findById(id);
    expect(result).to.be.deep.equal({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });
  });

  it('Cadastrando um novo produto', async () => {
    sinon.stub(productModel, 'registerProduct').resolves(5);
    const result = await productService.registerProduct(mock.newProduct);
    expect(result).to.be.deep.equal({ id: 5, name: 'Produto1' });
  })

});
