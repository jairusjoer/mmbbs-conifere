module.exports = function (eleventyConfig) {
  // Pass through assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",
      output: "build",
      data: "json",
      includes: "components",
      layouts: "pages",
    },
  };
};
