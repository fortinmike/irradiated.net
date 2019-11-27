const { orderByExplicitOrder } = require("./utils/collection-utils");

module.exports = function(config) {
  config.addPassthroughCopy("source/images");
  config.addPassthroughCopy("source/appcasts");
  config.addPassthroughCopy("source/files");

  config.addCollection("app", collection => orderByExplicitOrder(collection.getFilteredByTag("app")));
  config.addCollection("menu", collection => orderByExplicitOrder(collection.getFilteredByTag("menu")));

  return {
    templateFormats: ["html", "md", "css"]
  };
};
