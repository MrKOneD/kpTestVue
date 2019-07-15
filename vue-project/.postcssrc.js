// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
      "autoprefixer": {},
      "postcss-import": {},
      "postcss-url": {},
      "postcss-aspect-ratio-mini": {},
      "postcss-cssnext": {},
      "postcss-px-to-viewport": {
          "viewportWidth": 750,
          "viewportHeight": 1334,
          "unitPrecision": 3,
          "viewportUnit": "vw",
          "selectorBlackList": [
              ".ignore",
              ".hairlines"
          ],
          "minPixelValue": 1,
          "mediaQuery": false,
          "exclude":/(node_modules)/
      },
      "postcss-viewport-units": {},
      "cssnano": {
          "preset": "advanced",
          "autoprefixer": false,
          "postcss-zindex": false
      }
  }
}