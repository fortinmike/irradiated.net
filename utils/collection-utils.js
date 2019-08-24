const _ = require("lodash");

module.exports = {
  orderByExplicitOrder: function(items) {
    return _.orderBy(items, item => item.data.order);
  }
};
