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
  });

  describe('Buscando produto por id', () => {
    it('retorna produto buscado com status 200', async () => {
      const req = {
        params: {
          id: 1
        }
      };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, 'findById')
        .resolves({ type: null, message: mock.productIdResponse });
      const result = await productController.findById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(mock.productIdResponse)).to.be.equal(true);
    });

    it('retorna status 404 product not found', async () => {
      const req = {
        params: {
          id: 999
        }
      };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, 'findById')
        .resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });
      const result = await productController.findById(req, res);
      expect(res.status.calledWith(404)).to.be.equal(true);
      expect(res.json.calledWith({ message: 'Product not found' })).to.be.equal(true);
    });
  });
});