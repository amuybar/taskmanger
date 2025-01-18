
const mockQuery = jest.fn();

const Pool = jest.fn(() => ({
  connect: jest.fn(),
  query: mockQuery,
  end: jest.fn(),
}));

module.exports = { Pool, mockQuery };
