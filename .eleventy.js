module.exports = function(config) {
  // Copy file as-is to the output directory
  config.addPassthroughCopy("source/images");

  return {
    templateFormats: ["html", "md", "css"]
  };
};
