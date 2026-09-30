// jest-dom adds custom jest matchers for asserting on DOM nodes.
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// jsdom implementiert kein Scrollen – für ScrollManager stummschalten.
window.scrollTo = jest.fn() as unknown as typeof window.scrollTo;
