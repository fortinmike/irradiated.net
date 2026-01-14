const { orderByExplicitOrder } = require("./utils/collection-utils");
const handlebarsPlugin = require("@11ty/eleventy-plugin-handlebars");

module.exports = function(config) {
  config.addPlugin(handlebarsPlugin);

  config.addPassthroughCopy("source/images");
  config.addPassthroughCopy("source/appcasts");
  config.addPassthroughCopy("source/files");

  config.addCollection("app", collection => orderByExplicitOrder(collection.getFilteredByTag("app")));
  config.addCollection("menu", collection => orderByExplicitOrder(collection.getFilteredByTag("menu")));

  return {
    templateFormats: ["html", "md", "css", "hbs"]
  };
};
