const sinon = require('sinon');
const chai = require('chai');
const { salesController } = require('../../../src/controllers');
const { salesService } = require('../../../src/services');
const mock = require('../../mocks/sales.mock');

const { expect } = chai;

describe('Verificar o Sales Controller', () => {
  it('retorna as vendas com o status 200', async () => {
    sinon.stub(salesService, 'getAllSales')
      .resolves({ type: null, message: mock.salesAllResponse });
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await salesController.getAllSales(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
    // expect(res.json.calledWith(mock.salesAllResponse)).to.be.equal(true);

    afterEach(sinon.restore);
  });

  it('retorna venda buscada por Id com status 200', async () => {
    const req = {
      params: {
        id: 1
      }
    };
    console.log(req);
    const res = {};
    console.log(res);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesService, 'findById')
      .resolves({ type: null, message: mock.salesIdResponse });
    const result = await salesController.findById(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(mock.salesIdResponse)).to.be.equal(true);
  });

  afterEach(sinon.restore);
})