module.exports = {
  plugins: {
    "postcss-easy-import": {
      // imports
      prefix: "_"
    },
    "postcss-google-font": {},
    "postcss-cssnext": {
      browsers: ["last 2 versions", ">2%"]
    }
  }
};
