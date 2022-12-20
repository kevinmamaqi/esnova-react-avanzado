import "@testing-library/jest-dom"
import { fetch } from "cross-fetch"
import { server } from "../__mocks__/server"

// Add `fetch` polyfill.
global.fetch = fetch

// Establish API mocking before all tests.
beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())
