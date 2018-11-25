"use strict";

module.exports = function() {
  return {
    name: "transform-console-bonify",
    visitor: {
      CallExpression(path) {
        const callee = path.get("callee");
        if (callee.matchesPattern("console.log", true)) {
          const params = path.node.arguments;
          if (`${params[0].value}` !== "Bonify rocks") {
            path.replaceWithSourceString(
              `console.log("Bonify rocks", ${params.map(par =>
                par.type === "StringLiteral" ? `"${par.value}"` : par.name
              )})`
            );
          }
        }
      }
    }
  };
};
