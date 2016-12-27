var HyperDown = require("hyperdown");

var parser = new HyperDown();

module.exports = function(data, options) {
    return parser.makeHtml(data);
};