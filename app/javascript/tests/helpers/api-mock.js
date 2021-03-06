import { WHISKEYS, WHISKEY } from '../fixtures'

export const mockApiEndpoint = (data = {}) =>
  jest.fn().mockImplementation(() => new Response(JSON.stringify({ data })))

const mockApi = {
  getWhiskeyIndex: mockApiEndpoint(WHISKEYS),
  getWhiskeySearch: mockApiEndpoint(WHISKEYS),
  getWhiskey: mockApiEndpoint(WHISKEY),
  createWhiskey: mockApiEndpoint({ id: 1 }),
  updateWhiskey: mockApiEndpoint({ id: 1 }),
  deleteWhiskey: mockApiEndpoint()
}

export default mockApi
