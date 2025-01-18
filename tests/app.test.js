const request = require('supertest');
const app = require('../index'); 
const { pool } = require('../database/db');

let server;

beforeAll((done) => {
  // Start the server before tests
  server = app.listen(() => {
    console.log('Test server running');
    done();
  });
});

afterAll(async () => {
  // Close the server and database connections after tests
  await pool.end(); // Close the PostgreSQL connection pool
  server.close();
});

describe('GET /tasks', () => {
  it('should return an array of tasks', async () => {
    const res = await request(server).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
