jest.mock('pg'); // Use the mocked pg module

const request = require('supertest');
const app = require('../index'); // Import the app

const { mockQuery } = require('pg');
let server;

beforeAll(() => {
  server = app.listen(3001, () => console.log('Test server running'));
});

afterAll(() => {
  server.close();
});
describe('GET /tasks', () => {
  beforeEach(() => {
    mockQuery.mockClear();
  });

  it('should return an array of tasks', async () => {
    mockQuery.mockResolvedValueOnce({ rows: [{ id: 1, title: 'Test Task', description: 'Test Desc', status: 'pending' }] });

    const res = await request(app).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toEqual([{ id: 1, title: 'Test Task', description: 'Test Desc', status: 'pending' }]);
  });
});
