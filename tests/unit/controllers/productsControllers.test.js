const sinon = require('sinon');
const chai = require('chai');
const { productController } = require('../../../src/controllers');
const { productService } = require('../../../src/services');
const {
  productsAllResponse,
  productIdResponse,
} = require('../../mocks/product.mock');

const { expect } = chai;

describe('Verificar o Product Controller', () => {

  describe('Buscando todos os produtos', () => {
    it('é chamado o status com o código 200', async () => {
      sinon.stub(productService, 'getAllProducts').resolves(productsAllResponse);
    });

    it('é chamado o json com a lista de motoristas', async function () {

    });
  });
});