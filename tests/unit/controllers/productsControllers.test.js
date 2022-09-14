const sinon = require('sinon');
const chai = require('chai');
const { productController } = require('../../../src/controllers');
const { productService } = require('../../../src/services');
const mock = require('../../mocks/product.mock');

const { expect } = chai;

describe('Verificar o Product Controller', () => {

  describe('Buscando todos os produtos', () => {
    it('retorna produtos com o status 200', async () => {
      sinon.stub(productService, 'getAllProducts')
        .resolves({ type: null, message: mock.productsAllResponse });
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      const result = await productController.getAllProducts(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(mock.productsAllResponse)).to.be.equal(true);

      afterEach(sinon.restore);
    });

    it('é chamado o json com a lista de motoristas', async function () {

    });
  });
});