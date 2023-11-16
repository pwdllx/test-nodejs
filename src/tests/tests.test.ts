import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Requester } from '../helpers/requester';

describe('Requester', () => {
  const apiUrl = `${process.env.APP_HOST}:${process.env.APP_PORT}`;
  const mock = new MockAdapter(axios);
  const requester = new Requester(apiUrl);

  afterEach(() => {
    mock.reset();
  });

  test('getAll should return an array of brands', async () => {
    const mockData = [{ id: 1, name: 'Test Brand' }];
    mock.onGet(apiUrl).reply(200, mockData);

    const brands = await requester.getAll();
    expect(brands).toEqual(mockData);
  });

  test('getOne should return a single brand', async () => {
    const brandId = '1';
    const mockData = { id: 1, name: 'Test Brand' };
    mock.onGet(`${apiUrl}/${brandId}`).reply(200, mockData);

    const brand = await requester.getOne(brandId);
    expect(brand).toEqual(mockData);
  });

  test('post should add a new brand and return it', async () => {
    const newData = { name: 'New Brand' };
    const mockData = { id: 2, name: 'New Brand' };
    mock.onPost(apiUrl, newData).reply(201, mockData);

    const brand = await requester.post(newData);
    expect(brand).toEqual(mockData);
  });
});
