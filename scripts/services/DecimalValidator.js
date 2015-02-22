module.exports = function () {
  return {
    isValid: function (value) {
      return /^(\d{1}|[1-9]\d+)(\.(?=\d{2})\d{2})?$/.test(value);
    }
  };
};