import { Requester } from '../lib/requester';

describe('Requester', () => {
  const baseUrl = 'https://test.com/api/rest';
  const requester = new Requester(baseUrl);

  it('should fetch data using GET', async () => {
    const data = { id: '1234', title: 'Porsche' };
    const mockResponse = { json: jest.fn().mockResolvedValue(data), ok: true };
    global.fetch = jest
      .fn()
      .mockResolvedValue(mockResponse as unknown as Response);

    const result = await requester.get('brands');

    expect(result).toEqual(data);
    expect(fetch).toHaveBeenCalledWith(`${baseUrl}/brands`);
  });

  it('should fetch data by id using GET', async () => {
    const data = { id: '1234', title: 'Porsche' };
    const mockResponse = { json: jest.fn().mockResolvedValue(data), ok: true };
    global.fetch = jest
      .fn()
      .mockResolvedValue(mockResponse as unknown as Response);

    const result = await requester.get('brand/1234');

    expect(result).toEqual(data);
    expect(fetch).toHaveBeenCalledWith(`${baseUrl}/brand/1234`);
  });

  it('should put data using PUT', async () => {
    const data = { title: 'Geox' };
    const mockResponse = { json: jest.fn().mockResolvedValue(data), ok: true };
    global.fetch = jest
      .fn()
      .mockResolvedValue(mockResponse as unknown as Response);

    const result = await requester.put('brand', data);

    expect(result).toEqual(data);
    expect(fetch).toHaveBeenCalledWith(`${baseUrl}/brand`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    });
  });
});
