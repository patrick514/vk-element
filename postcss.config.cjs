/* eslint-env node */
const postcssEachVariables = require("postcss-each-variables");
const postcssNested = require("postcss-nested");
const postcssEach = require("postcss-each");
const postcssFor = require("postcss-for");
const postcssColorMix = require("postcss-color-mix");

module.exports = {
  plugins: [
    postcssEachVariables,
    postcssNested,
    postcssEach({
      plugins: {
        beforeEach: [postcssFor, postcssColorMix],
      },
    }),
  ],
};
