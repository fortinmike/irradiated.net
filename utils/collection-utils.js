const _ = require("lodash");

module.exports = {
  orderByExplicitOrder: function(collection) {
    return _.orderBy(collection.getAll(), item => item.data.order);
  }
};
