"use strict";

module.exports = function() {
  return {
    name: "transform-console-bonify",
    visitor: {
      CallExpression(path) {
        const calleePath = path.get("callee");
        if (calleePath.matchesPattern("console.log", true)) {
          path.remove();
        }
      }
    }
  };
};
